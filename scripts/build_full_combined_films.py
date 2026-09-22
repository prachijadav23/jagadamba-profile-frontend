import os
import subprocess
import imageio_ffmpeg

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGE_DIR = os.path.join(BASE_DIR, "public", "images")
AUDIO_DIR = os.path.join(BASE_DIR, "public", "audio")
VIDEO_DIR = os.path.join(BASE_DIR, "public", "videos")

COMBINED_SCENES = [
    ("steel-coils-hero.jpg", 5.2),
    ("heavy-plate-cutting.jpg", 5.2),
    ("cnc-profile-cutting.jpg", 5.2),
    ("steel-stock.jpg", 5.2),
    ("steel-yard.jpg", 5.2),
    ("facility.jpg", 5.2),
    ("ut-testing.jpg", 5.2),
    ("transport.jpg", 5.2),
    ("factory.jpg", 5.2),
]

print("=== Generating Scene Segments for Full Combined Film ===")
temp_segments = []
for idx, (img_name, duration) in enumerate(COMBINED_SCENES):
    img_path = os.path.join(IMAGE_DIR, img_name)
    seg_out = os.path.join(VIDEO_DIR, f"film_seg_{idx}.mp4")
    
    cmd = [
        ffmpeg,
        "-loop", "1",
        "-t", str(duration),
        "-i", img_path,
        "-vf", "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720",
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-pix_fmt", "yuv420p",
        "-r", "25",
        "-y",
        seg_out
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    temp_segments.append(seg_out)
    print(f"Segment {idx+1}/{len(COMBINED_SCENES)} ready: {img_name}")

concat_list_path = os.path.join(VIDEO_DIR, "concat_full_tour.txt")
with open(concat_list_path, "w", encoding="utf-8") as f:
    for seg in temp_segments:
        clean_path = seg.replace("\\", "/")
        f.write(f"file '{clean_path}'\n")

print("\n=== Multiplexing Audio For Full Combined Film (GU, HI, EN) ===")
targets = [
    ("full-combined-tour.mp4", "full-combined-tour_gu.mp3"),
    ("full-combined-tour_hi.mp4", "full-combined-tour_hi.mp3"),
    ("full-combined-tour_en.mp4", "full-combined-tour_en.mp3"),
]

for out_video, audio_file in targets:
    aud_path = os.path.join(AUDIO_DIR, audio_file)
    out_path = os.path.join(VIDEO_DIR, out_video)
    
    cmd_mux = [
        ffmpeg,
        "-f", "concat",
        "-safe", "0",
        "-i", concat_list_path,
        "-i", aud_path,
        "-c:v", "copy",
        "-c:a", "aac",
        "-b:a", "128k",
        "-shortest",
        "-y",
        out_path
    ]
    subprocess.run(cmd_mux, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    print(f"Created: {out_video} (Size: {os.path.getsize(out_path)} bytes)")

# Cleanup temporary segments
for seg in temp_segments:
    try:
        os.remove(seg)
    except:
        pass
try:
    os.remove(concat_list_path)
except:
    pass

# Also clean up any old temp files if left
for f in os.listdir(VIDEO_DIR):
    if f.startswith("temp_seg_") or f == "test_seg.mp4":
        try:
            os.remove(os.path.join(VIDEO_DIR, f))
        except:
            pass

print("\nALL 3 FULL COMBINED FILMS SUCCESSFULLY CREATED!")
