import os
import subprocess
import imageio_ffmpeg

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGE_DIR = os.path.join(BASE_DIR, "public", "images")
AUDIO_DIR = os.path.join(BASE_DIR, "public", "audio")
VIDEO_DIR = os.path.join(BASE_DIR, "public", "videos")
os.makedirs(VIDEO_DIR, exist_ok=True)

ITEMS = [
    ("full-company-intro", "steel-coils-hero.jpg"),
    ("300mm-cutting", "heavy-plate-cutting.jpg"),
    ("cnc-specialists", "cnc-profile-cutting.jpg"),
    ("all-grades", "steel-stock.jpg"),
    ("grade-wise-yard", "steel-yard.jpg"),
    ("large-infrastructure", "facility.jpg"),
    ("quality-ut-check", "ut-testing.jpg"),
    ("fast-delivery", "transport.jpg"),
    ("all-india-supply", "dispatch.jpg"),
    ("1600-customers", "components.jpg"),
    ("steel-traders-cutting", "steel-stock.jpg"),
    ("brand-closing", "factory.jpg"),
]

# 1. Generate individual clips in GU, HI, EN
print("=== Generating Individual Clips in GU, HI, EN ===")
for vid_id, img_name in ITEMS:
    img_path = os.path.join(IMAGE_DIR, img_name)
    if not os.path.exists(img_path):
        print(f"Skipping {vid_id}, image not found: {img_path}")
        continue

    for lang, suffix, out_suffix in [("gu", "_gu.mp3", ".mp4"), ("hi", "_hi.mp3", "_hi.mp4"), ("en", "_en.mp3", "_en.mp4")]:
        aud_path = os.path.join(AUDIO_DIR, f"{vid_id}{suffix}")
        out_path = os.path.join(VIDEO_DIR, f"{vid_id}{out_suffix}")

        if not os.path.exists(aud_path):
            print(f"Missing audio: {aud_path}")
            continue

        cmd = [
            ffmpeg,
            "-loop", "1",
            "-i", img_path,
            "-i", aud_path,
            "-c:v", "libx264",
            "-preset", "ultrafast",
            "-pix_fmt", "yuv420p",
            "-vf", "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0010,1.15)':d=450:s=1280x720",
            "-c:a", "aac",
            "-b:a", "128k",
            "-shortest",
            "-y",
            out_path
        ]
        subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
        print(f"Done: {vid_id}{out_suffix}")

# 2. Build Full Combined Tour Video (8-scene authentic industrial montage)
print("\n=== Building Full Combined Industrial Tour Film ===")

COMBINED_SCENES = [
    ("steel-coils-hero.jpg", 6.0),
    ("heavy-plate-cutting.jpg", 6.0),
    ("cnc-profile-cutting.jpg", 6.0),
    ("steel-stock.jpg", 6.0),
    ("steel-yard.jpg", 6.0),
    ("facility.jpg", 6.0),
    ("ut-testing.jpg", 6.0),
    ("dispatch.jpg", 6.0),
    ("factory.jpg", 6.0),
]

# Generate temporary video-only segments for combined montage
temp_segments = []
for idx, (s_img, s_dur) in enumerate(COMBINED_SCENES):
    s_img_path = os.path.join(IMAGE_DIR, s_img)
    seg_out = os.path.join(VIDEO_DIR, f"temp_seg_{idx}.mp4")
    # Alternate zoom in vs zoom out for dynamic cinematic camera movement
    zoom_expr = "min(zoom+0.0015,1.20)" if idx % 2 == 0 else "max(1.20-zoom*0.0015,1.0)"
    cmd_seg = [
        ffmpeg,
        "-loop", "1",
        "-t", str(s_dur),
        "-i", s_img_path,
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-pix_fmt", "yuv420p",
        "-vf", f"scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='{zoom_expr}':d={int(s_dur*25)}:s=1280x720,fps=25",
        "-y",
        seg_out
    ]
    subprocess.run(cmd_seg, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    temp_segments.append(seg_out)

# Create concat list
concat_list_path = os.path.join(VIDEO_DIR, "concat_list.txt")
with open(concat_list_path, "w") as f:
    for seg in temp_segments:
        # ffmpeg concat demuxer requires forward slashes or escaped backslashes
        clean_path = seg.replace("\\", "/")
        f.write(f"file '{clean_path}'\n")

# Combine with each audio track (GU, HI, EN)
for lang, suffix, out_name in [("gu", "_gu.mp3", "full-combined-tour.mp4"), ("hi", "_hi.mp3", "full-combined-tour_hi.mp4"), ("en", "_en.mp3", "full-combined-tour_en.mp4")]:
    aud_path = os.path.join(AUDIO_DIR, f"full-combined-tour{suffix}")
    out_path = os.path.join(VIDEO_DIR, out_name)

    cmd_combine = [
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
    subprocess.run(cmd_combine, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    print(f"Successfully generated full combined film: {out_name}")

# Clean up temp segments
for seg in temp_segments:
    try:
        os.remove(seg)
    except:
        pass
try:
    os.remove(concat_list_path)
except:
    pass

print("\nAll videos built successfully!")
