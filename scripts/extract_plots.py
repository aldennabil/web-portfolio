import re
import base64
import os

html_path = os.path.join("Projects", "REGSPAS", "Prevalensi-Stunting-Menggunakan-Spatial-Error-Model--SEM-.html")
out_dir = os.path.join("Projects", "REGSPAS")

if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    matches = re.findall(r'src=["\']data:image/png;base64,([^"\']+)["\']', content)
    print(f"Found {len(matches)} plots in REGSPAS HTML")
    for idx, b64 in enumerate(matches):
        if len(b64) > 1000:
            fname = f"stunting_plot_{idx + 1}.png"
            with open(os.path.join(out_dir, fname), "wb") as img_f:
                img_f.write(base64.b64decode(b64))
            print(f"Extracted: {fname}")
