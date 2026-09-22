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

for vid_id, img_name in ITEMS:
    img_path = os.path.join(IMAGE_DIR, img_name)
    aud_path = os.path.join(AUDIO_DIR, f"{vid_id}_gu.mp3")
    out_path = os.path.join(VIDEO_DIR, f"{vid_id}.mp4")

    if not os.path.exists(img_path):
        print(f"Skipping {vid_id}, image not found: {img_path}")
        continue

    print(f"Encoding {vid_id}.mp4...")
    cmd = [
        ffmpeg,
        "-loop", "1",
        "-i", img_path,
        "-i", aud_path,
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-pix_fmt", "yuv420p",
        "-vf", "scale=1280:720:force_original_aspect_ratio=increase,crop=1280:720,zoompan=z='min(zoom+0.0012,1.15)':d=300:s=1280x720",
        "-c:a", "aac",
        "-b:a", "128k",
        "-shortest",
        "-y",
        out_path
    ]
    subprocess.run(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, check=True)
    print(f"Done: {vid_id}.mp4")

print("All 12 MP4 videos successfully generated!")
