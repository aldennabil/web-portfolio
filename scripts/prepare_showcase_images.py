import os
import sys
import glob
from PIL import Image, ImageFilter

if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

TARGET_WIDTH = 1280
TARGET_HEIGHT = 720
TARGET_GALLERY_W = 1200
TARGET_GALLERY_H = 750

OUTPUT_DIR = os.path.join(os.getcwd(), 'public', 'images', 'projects')
os.makedirs(OUTPUT_DIR, exist_ok=True)

def center_crop_and_resize(im, target_w=TARGET_WIDTH, target_h=TARGET_HEIGHT):
    im = im.convert('RGB')
    w, h = im.size
    target_ar = target_w / target_h
    current_ar = w / h
    
    if current_ar > target_ar:
        # Crop horizontally centered
        new_w = int(h * target_ar)
        left = (w - new_w) // 2
        im_cropped = im.crop((left, 0, left + new_w, h))
    else:
        # Crop vertically centered
        new_h = int(w / target_ar)
        top = (h - new_h) // 2
        im_cropped = im.crop((0, top, w, top + new_h))
        
    return im_cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

def ambient_center_resize(im, target_w=TARGET_WIDTH, target_h=TARGET_HEIGHT):
    im = im.convert('RGB')
    w, h = im.size
    
    # Create ambient background from center-cropped blurred image
    bg = center_crop_and_resize(im, target_w, target_h)
    bg = bg.filter(ImageFilter.GaussianBlur(radius=28))
    
    # Darken ambient background with theme overlay #080d1a
    overlay = Image.new('RGB', (target_w, target_h), (8, 13, 26))
    bg = Image.blend(bg, overlay, alpha=0.60)
    
    # Scale foreground to fit inside the canvas preserving aspect ratio
    padding_x = 32
    padding_y = 24
    scale = min((target_w - padding_x * 2) / w, (target_h - padding_y * 2) / h)
    fw, fh = int(w * scale), int(h * scale)
    fg = im.resize((fw, fh), Image.Resampling.LANCZOS)
    
    # Paste centered
    x = (target_w - fw) // 2
    y = (target_h - fh) // 2
    bg.paste(fg, (x, y))
    return bg

def process_image(src_rel_path, dest_rel_path, is_cover=True, force_ambient=False):
    src_full = os.path.join(os.getcwd(), 'Projects', src_rel_path)
    if not os.path.exists(src_full):
        print(f"  ❌ Missing source: {src_rel_path}")
        return None
    
    dest_full = os.path.join(OUTPUT_DIR, dest_rel_path)
    os.makedirs(os.path.dirname(dest_full), exist_ok=True)
    
    with Image.open(src_full) as im:
        w, h = im.size
        ar = w / h
        
        tw = TARGET_WIDTH if is_cover else TARGET_GALLERY_W
        th = TARGET_HEIGHT if is_cover else TARGET_GALLERY_H
        
        # Decide whether to use ambient or direct center crop
        # If aspect ratio is extreme (portrait poster or ultra wide) or force_ambient is True
        if force_ambient or ar < 1.15 or ar > 2.35:
            processed = ambient_center_resize(im, tw, th)
        else:
            processed = center_crop_and_resize(im, tw, th)
            
        processed.save(dest_full, quality=92, optimize=True)
        web_path = f"/images/projects/{dest_rel_path.replace(os.sep, '/')}"
        print(f"  ✅ Saved: {web_path} ({tw}x{th}) from {os.path.basename(src_rel_path)} ({w}x{h})")
        return web_path

PROJECTS_CONFIG = [
    {
        "id": "gammafest",
        "cover": ("football-outcome-prediction-gammafest/3.jpg", "gammafest.jpg", False),
        "gallery": [
            ("football-outcome-prediction-gammafest/FINAL/DSC26013_Bumbu Ireng Pak Jenggot/figures_academic/fig10_goals_per_year.png", "gammafest/gallery-1.jpg", False),
            ("football-outcome-prediction-gammafest/FINAL/DSC26013_Bumbu Ireng Pak Jenggot/figures_academic/fig11_covariate_shift.png", "gammafest/gallery-2.jpg", False),
            ("football-outcome-prediction-gammafest/4.jpg", "gammafest/gallery-3.jpg", False),
            ("football-outcome-prediction-gammafest/5.jpg", "gammafest/gallery-4.jpg", False),
        ]
    },
    {
        "id": "deka",
        "cover": ("market-research-analytics-platform/Photo 3.jpg", "deka.jpg", False),
        "gallery": [
            ("market-research-analytics-platform/Photo 1.jpg", "deka/gallery-1.jpg", False),
            ("market-research-analytics-platform/Photo 2.jpg", "deka/gallery-2.jpg", False),
            ("market-research-analytics-platform/Foto bareng.jpeg", "deka/gallery-3.jpg", False),
        ]
    },
    {
        "id": "finsight",
        "cover": ("Capstone/Thumbnail DBS Finsight.png", "finsight.jpg", False),
        "gallery": [
            ("Capstone/Dashboard docum finsight-dashboard-monitoring.streamlit.app.png", "finsight/gallery-1.jpg", False),
            ("Capstone/Github/AI-ENGINEER/notebooks/experiments/01_basic_ae/plot_01_preprocessing_1.png", "finsight/gallery-2.jpg", False),
            ("Capstone/Github/AI-ENGINEER/notebooks/experiments/01_basic_ae/plot_02_model_1.png", "finsight/gallery-3.jpg", False),
        ]
    },
    {
        "id": "coffeeshop",
        "cover": ("Multidimensional Scaling Coffeeshop untuk WFC di Bogor Kota/Hasil_MDS_CoffeeShop.png", "coffeeshop.jpg", False),
        "gallery": [
            ("Multidimensional Scaling Coffeeshop untuk WFC di Bogor Kota/plot_Bogor_Coffee_Wars_Mengung_1.png", "coffeeshop/gallery-1.jpg", False),
            ("Multidimensional Scaling Coffeeshop untuk WFC di Bogor Kota/plot_Text_Analysis_1.png", "coffeeshop/gallery-2.jpg", False),
            ("Multidimensional Scaling Coffeeshop untuk WFC di Bogor Kota/plot_cell_23_1.png", "coffeeshop/gallery-3.jpg", False),
        ]
    },
    {
        "id": "bayesian-spatial",
        "cover": ("[Project] Bayesian Spatial Modelling/Bayesian Spatial 24-25/outputs/monthly_mean_pm25.png", "bayesian-spatial.jpg", False),
        "gallery": [
            ("[Project] Bayesian Spatial Modelling/Bayesian Spatial 24-25/outputs/spatial_station_means.png", "bayesian-spatial/gallery-1.jpg", True),
            ("[Project] Bayesian Spatial Modelling/Bayesian Spatial 24-25/outputs/ci_prediction_time_series.png", "bayesian-spatial/gallery-2.jpg", False),
            ("[Project] Bayesian Spatial Modelling/Thumbnail 1.png", "bayesian-spatial/gallery-3.jpg", False),
            ("[Project] Bayesian Spatial Modelling/Bayesian Spatial 24-25/outputs/empirical_variogram.png", "bayesian-spatial/gallery-4.jpg", False),
        ]
    },
    {
        "id": "hiv-survival",
        "cover": ("hiv-clinical-trial-survival/1_km_and_loglog.png", "hiv-survival.jpg", False),
        "gallery": [
            ("hiv-clinical-trial-survival/Thumbnail hiv-clinical-trial-survival.png", "hiv-survival/gallery-1.jpg", False),
            ("hiv-clinical-trial-survival/plot_Code_Final_2.png", "hiv-survival/gallery-2.jpg", False),
            ("hiv-clinical-trial-survival/plot_Code_Final_3.png", "hiv-survival/gallery-3.jpg", False),
            ("hiv-clinical-trial-survival/plot_Code_Final_5.png", "hiv-survival/gallery-4.jpg", False),
        ]
    },
    {
        "id": "stunting-sem",
        "cover": ("REGSPAS/plot_Prevalensi_Stunting_Mengg_3.png", "stunting-sem.jpg", False),
        "gallery": [
            ("REGSPAS/plot_Prevalensi_Stunting_Mengg_4.png", "stunting-sem/gallery-1.jpg", False),
            ("REGSPAS/plot_Prevalensi_Stunting_Mengg_8.png", "stunting-sem/gallery-2.jpg", False),
            ("REGSPAS/plot_Prevalensi_Stunting_Mengg_1.png", "stunting-sem/gallery-3.jpg", False),
        ]
    },
    {
        "id": "superconductor",
        "cover": ("elasticnet-lgd-optimization/Thumbnail elasticnet-lgd-optimization.webp", "superconductor.jpg", False),
        "gallery": [
            ("elasticnet-lgd-optimization/plot_Copy_of_Analisis_Optimisa_4.png", "superconductor/gallery-1.jpg", False),
            ("elasticnet-lgd-optimization/plot_Copy_of_Analisis_Optimisa_1.png", "superconductor/gallery-2.jpg", True),
            ("elasticnet-lgd-optimization/plot_Copy_of_Analisis_Optimisa_5.png", "superconductor/gallery-3.jpg", False),
        ]
    },
    {
        "id": "commodity-ts",
        "cover": ("Project mpdw/plot_LSTM_Final_Model_1.png", "commodity-ts.jpg", False),
        "gallery": [
            ("Project mpdw/plot_Prophet_MPDW_2.png", "commodity-ts/gallery-1.jpg", False),
            ("Project mpdw/Ujian Lisan 1.jpeg", "commodity-ts/gallery-2.jpg", False),
            ("Project mpdw/Code/plot_ARIMA_BiLSTM_with_Optuna_3.png", "commodity-ts/gallery-3.jpg", False),
        ]
    },
    {
        "id": "minyakita",
        "cover": ("Clustering Dampak Release Minyakita terhadap Harga Minyak Kemasan di Indonesia/Thumbnail Clustering Dampak Release Minyakita terhadap Harga Minyak Kemasan di Indonesia.jpg", "minyakita.jpg", False),
        "gallery": [
            ("Clustering Dampak Release Minyakita terhadap Harga Minyak Kemasan di Indonesia/plot_Clustering_Minyak_1.png", "minyakita/gallery-1.jpg", False),
            ("Clustering Dampak Release Minyakita terhadap Harga Minyak Kemasan di Indonesia/plot_Clustering_Minyak_4.png", "minyakita/gallery-2.jpg", False),
            ("Clustering Dampak Release Minyakita terhadap Harga Minyak Kemasan di Indonesia/plot_G1401231088_Alden_Nabil_W_1.png", "minyakita/gallery-3.jpg", False),
        ]
    },
    {
        "id": "boxcox-gdp",
        "cover": ("pENERAPAN BOXCOX PADA SUSENAS/boxcox_image1.png", "boxcox-gdp.jpg", False),
        "gallery": [
            ("pENERAPAN BOXCOX PADA SUSENAS/boxcox_image4.jpg", "boxcox-gdp/gallery-1.jpg", False),
            ("pENERAPAN BOXCOX PADA SUSENAS/boxcox_image2.png", "boxcox-gdp/gallery-2.jpg", False),
            ("pENERAPAN BOXCOX PADA SUSENAS/boxcox_image3.png", "boxcox-gdp/gallery-3.jpg", False),
        ]
    },
    {
        "id": "susenas",
        "cover": ("Project UAS PSD/Team.jpeg", "susenas.jpg", False),
        "gallery": [
            ("Project UAS PSD/Team 2.jpeg", "susenas/gallery-1.jpg", False),
            ("Project UAS PSD/poster_psd_preview.png", "susenas/gallery-2.jpg", True),
        ]
    },
    {
        "id": "consulting-anova",
        "cover": ("Mitra UTS - Rancob Fapet/plot_proksimat_simplo_1.png", "consulting-anova.jpg", False),
        "gallery": [
            ("Mitra UTS - Rancob Fapet/plot_proksimat_simplo_10.png", "consulting-anova/gallery-1.jpg", False),
            ("Mitra UTS - Rancob Fapet/plot_proksimat_simplo_14.png", "consulting-anova/gallery-2.jpg", False),
            ("Mitra UTS - Rancob Fapet/plot_proksimat_simplo_20.png", "consulting-anova/gallery-3.jpg", False),
        ]
    },
    {
        "id": "nox-stacked",
        "cover": ("nox-prediction-stacked-regression/Thumbnail 1.png", "nox-stacked.jpg", False),
        "gallery": [
            ("nox-prediction-stacked-regression/Thumbnail 2.png", "nox-stacked/gallery-1.jpg", False),
            ("nox-prediction-stacked-regression/plot_base_model_stacked_regres_1.png", "nox-stacked/gallery-2.jpg", False),
            ("nox-prediction-stacked-regression/Foto Bareng.jpeg", "nox-stacked/gallery-3.jpg", False),
        ]
    },
    {
        "id": "agrimine",
        "cover": ("agrimine-audio-classification/Thumbnail agrimine-audio-classification.png", "agrimine.jpg", False),
        "gallery": [
            ("agrimine-audio-classification/plot_notebook_1.png", "agrimine/gallery-1.jpg", False),
            ("agrimine-audio-classification/plot_notebook_2.png", "agrimine/gallery-2.jpg", False),
            ("agrimine-audio-classification/Archieve/plot_Sub_4_1_3.png", "agrimine/gallery-3.jpg", False),
        ]
    },
    {
        "id": "skincare-nlp",
        "cover": ("skincare-sentiment-nlp/plot_textblob_sentiment_review_1.png", "skincare-nlp.jpg", False),
        "gallery": [
            ("skincare-sentiment-nlp/plot_textblob_sentiment_review_2.png", "skincare-nlp/gallery-1.jpg", False),
            ("skincare-sentiment-nlp/plot_textblob_sentiment_review_3.png", "skincare-nlp/gallery-2.jpg", False),
            ("skincare-sentiment-nlp/plot_textblob_sentiment_review_7.png", "skincare-nlp/gallery-3.jpg", False),
        ]
    },
    {
        "id": "bnsp-da",
        "cover": ("Data Analyst BNSP/Sertifikasi/Thumb Data Analyst BNSP.jpg", "bnsp-da.jpg", False),
        "gallery": [
            ("Data Analyst BNSP/Sertifikasi/visualisasi/1_distribusi_delta_ipk.png", "bnsp-da/gallery-1.jpg", False),
            ("Data Analyst BNSP/Sertifikasi/visualisasi/2_gpa_growth_by_ai_segment.png", "bnsp-da/gallery-2.jpg", False),
            ("Data Analyst BNSP/Sertifikasi/visualisasi/4_retention_vs_ai_dependency.png", "bnsp-da/gallery-3.jpg", False),
        ]
    },
    {
        "id": "gsmarena-psd",
        "cover": ("Scrap Smartphone GSMARENA UTS/plot_Code_10.png", "gsmarena-psd.jpg", False),
        "gallery": [
            ("Scrap Smartphone GSMARENA UTS/plot_Code_11.png", "gsmarena-psd/gallery-1.jpg", False),
            ("Scrap Smartphone GSMARENA UTS/plot_Code_12.png", "gsmarena-psd/gallery-2.jpg", False),
            ("Scrap Smartphone GSMARENA UTS/Poster UTS.png", "gsmarena-psd/gallery-3.jpg", True),
        ]
    },
    {
        "id": "cox-heart",
        "cover": ("cox-proportional-hazard/thumbnail cox-proportional-hazard.jpg", "cox-heart.jpg", False),
        "gallery": [
            ("cox-proportional-hazard/plot_Cox_PH_Heart_Failure_Data_1.png", "cox-heart/gallery-1.jpg", False),
        ]
    },
    {
        "id": "credit-risk-ka",
        "cover": ("credit-risk-survival-analysis/Thumbnail credit-risk-survival-analysis.png", "credit-risk-ka.jpg", False),
        "gallery": [
            ("credit-risk-survival-analysis/Thumbnail credit-risk-survival-analysis.png", "credit-risk-ka/gallery-1.jpg", False),
        ]
    },
    {
        "id": "bank-insurance",
        "cover": ("bank-membership-prediction/Thumbnail bank-membership-prediction.png", "bank-insurance.jpg", False),
        "gallery": [
            ("bank-membership-prediction/Thumbnail bank-membership-prediction.png", "bank-insurance/gallery-1.jpg", False),
        ]
    }
]

def main():
    print(f"🚀 Processing showcase images for {len(PROJECTS_CONFIG)} projects...\n")
    results = {}
    for cfg in PROJECTS_CONFIG:
        pid = cfg["id"]
        print(f"📁 Project [{pid}]:")
        src, dest, force_ambient = cfg["cover"]
        cover_url = process_image(src, dest, is_cover=True, force_ambient=force_ambient)
        
        gallery_urls = []
        for g_src, g_dest, g_ambient in cfg.get("gallery", []):
            g_url = process_image(g_src, g_dest, is_cover=False, force_ambient=g_ambient)
            if g_url:
                gallery_urls.append(g_url)
                
        results[pid] = {
            "cover": cover_url,
            "gallery": gallery_urls
        }
        print()
        
    print("✨ All project images processed successfully!")
    return results

if __name__ == "__main__":
    main()
