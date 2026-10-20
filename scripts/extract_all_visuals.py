import os
import json
import re
import base64

PROJECTS_DIR = "Projects"

def process_notebook(nb_path, out_dir):
    try:
        with open(nb_path, "r", encoding="utf-8", errors="ignore") as f:
            nb = json.load(f)
        
        base_name = os.path.splitext(os.path.basename(nb_path))[0]
        slug = re.sub(r'[^a-zA-Z0-9]+', '_', base_name).strip('_')[:25]
        
        count = 0
        for cell_idx, cell in enumerate(nb.get("cells", [])):
            for out_idx, out in enumerate(cell.get("outputs", [])):
                data = out.get("data", {})
                if "image/png" in data:
                    count += 1
                    img_data = data["image/png"]
                    if isinstance(img_data, list):
                        img_data = "".join(img_data)
                    fname = f"plot_{slug}_{count}.png"
                    out_path = os.path.join(out_dir, fname)
                    if not os.path.exists(out_path):
                        with open(out_path, "wb") as img_f:
                            img_f.write(base64.b64decode(img_data))
                        print(f"  [Notebook Plot] Saved {fname}")
    except Exception as e:
        print(f"  [Notebook Error] {nb_path}: {e}")

def process_html(html_path, out_dir):
    try:
        with open(html_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
        
        base_name = os.path.splitext(os.path.basename(html_path))[0]
        slug = re.sub(r'[^a-zA-Z0-9]+', '_', base_name).strip('_')[:25]
        
        matches = re.findall(r'src=["\']data:image/png;base64,([^"\']+)["\']', content)
        count = 0
        for idx, b64 in enumerate(matches):
            if len(b64) > 1500: # ignore small glyphs/icons
                count += 1
                fname = f"plot_{slug}_{count}.png"
                out_path = os.path.join(out_dir, fname)
                if not os.path.exists(out_path):
                    with open(out_path, "wb") as img_f:
                        img_f.write(base64.b64decode(b64))
                    print(f"  [HTML Plot] Saved {fname}")
    except Exception as e:
        print(f"  [HTML Error] {html_path}: {e}")

for root, dirs, files in os.walk(PROJECTS_DIR):
    for file in files:
        file_path = os.path.join(root, file)
        if file.endswith(".ipynb") and not ".ipynb_checkpoints" in file_path:
            process_notebook(file_path, root)
        elif file.endswith(".html") and not file.startswith("prototype"):
            process_html(file_path, root)

print("Visual extraction completed.")
