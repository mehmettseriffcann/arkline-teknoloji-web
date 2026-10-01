# ARKLİNE TEKNOLOJİ & ARKLINE GAMES

**"Gücünüzü Geleceğe Taşıyoruz."**  
*Elektrik ve enerji çözümlerinde profesyonel, güvenilir ve kaliteli hizmet.*  
*Enerjinin Güvenilir Adresi. ⚡*

Bu proje, **ARKLİNE TEKNOLOJİ** kurumsal web sitesi ile bünyesindeki **ARKLINE GAMES** mobil oyun stüdyosu portalını tek bir Next.js altyapısında sunan modern, yüksek performanslı ve Vercel'e hazır bir web uygulamasıdır.

---

## ⚡ 1. Arkline Teknoloji (Ana Web Sitesi)
Dünyanın ve Türkiye'nin lider enerji kuruluşları (**Ørsted, Vestas, Enerjisa, Zorlu Enerji, Aydem Yenilenebilir, Enercon**) referans alınarak tasarlanmıştır.

### 🔌 13 Faaliyet Alanımız (Eksiksiz Kapsam):
1. ⚡ **Alçak Gerilim (AG) Sistemleri**
2. ⚡ **Yüksek Gerilim (YG) Sistemleri**
3. ⚡ **Elektrik Dağıtım ve Şebeke İşleri**
4. ⚡ **Elektrik Taahhüt ve Proje Uygulamaları**
5. ⚡ **İç Tesisat ve Anahtar Teslim Elektrik İşleri**
6. ⚡ **Pano İmalatı ve Pano Montajı**
7. ⚡ **Kompanzasyon Sistemleri**
8. ⚡ **Otomasyon Sistemleri**
9. ⚡ **Aydınlatma Sistemleri**
10. ⚡ **Arıza, Bakım ve Onarım**
11. ⚡ **GES – Güneş Enerji Sistemleri**
12. ⚡ **Fabrika, İş Yeri ve Şantiye Elektrik Sistemleri**
13. ⚡ **Enerji Altyapısı ve Elektrik Dağıtım Çözümleri**

### ✨ Öne Çıkan Özellikler:
- **Detaylı Mühendislik Modalları:** 13 faaliyet alanının her biri için teknik voltaj değerleri, tip test standartları ve kapsam detayları.
- **İnteraktif Hesaplama Aracı:**
  - *Reaktif Ceza & Güç Tasarrufu Simülatörü:* Aylık elektrik faturasına göre önlenen reaktif ceza tutarını ve güç kalitesi artışını anlık hesaplar.
  - *GES Çatı & Arazi Getiri Hesaplayıcı:* Çatı alanına (m²) göre kurulabilecek kWp gücünü, yıllık üretilen kWh elektriği ve amortisman süresini hesaplar.
- **Hızlı Teklif & 7/24 Acil Arıza Hattı:** Form üzerinden seçilen faaliyet alanına veya simülasyona göre otomatik teklif talebi oluşturma.

---

## 🎮 2. Arkline Games (Oyun Web Sitesi)
Mobil oyun devleri (**Dream Games, Peak Games, Circle, Gram Games**) referans alınarak tasarlanmıştır.

- **Erişim Adresi:** `arklineteknolji.com/games` veya Subdomain olarak `games.arklineteknolji.com`
- **Öne Çıkan Başlıklar:**
  - 👑 *Royal Quest: Match & Kingdom* (25M+ İndirme, Match-3 Amiral Gemisi)
  - ⚡ *Cyber Circuit: 2088* (Synthwave Ritim & Sonsuz Koşu)
  - 🌸 *Bloom Valley: Merge Stories* (Casual Merge & Rahatlatıcı Simülasyon)
  - 🚀 *Project Nexus: Tactical Arena* (Yeni Nesil 1v1 Strateji - Çok Yakında)
- **Stüdyo Kültürü ve Değerleri:** Sadeliğin Gücü, Veri ile Sanatın Uyumu, Özerk Ekipler, Önce Oyuncu Odaklılık.
- **Kariyer (Açık Pozisyonlar):** Unity Game Developer, 3D Game Artist, Game Economy Designer, UI/UX Designer, LiveOps PM için interaktif başvuru modülleri.

---

## 🌐 3. Subdomain Desteği (Middleware)
Proje içerisindeki `src/middleware.ts`, gelen istek `games.*` subdomain'inden geldiğinde isteği otomatik ve görünmez biçimde `/games` rotasına yönlendirir (rewrite eder):
- `https://arklineteknolji.com` ➔ Ana Enerji Sitesi
- `https://arklineteknolji.com/games` ➔ Oyun Stüdyosu Sitesi
- `https://games.arklineteknolji.com` ➔ Oyun Stüdyosu Sitesi (Subdomain)

---

## 🚀 4. Kurulum & Geliştirme

```bash
# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Tarayıcıda açın:
# Ana Enerji Sitesi: http://localhost:3000
# Games Sitesi: http://localhost:3000/games
```

---

## 📦 5. GitHub'a Push ve Vercel'de Deploy Etme

### Adım 1: GitHub Reposu Oluşturma ve Pushlama
Terminalde proje klasöründe şu komutları çalıştırın:
```bash
git add .
git commit -m "feat: complete Arkline Teknoloji and Arkline Games web platforms"

# GitHub'da oluşturduğunuz repositorinin linkini ekleyin:
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git
git branch -M main
git push -u origin main
```

### Adım 2: Vercel'e Deploy Etme
1. [Vercel Dashboard](https://vercel.com/dashboard) adresine gidin.
2. **"Add New..."** ➔ **"Project"** seçin.
3. GitHub reponuzu bağlayın (**Import**).
4. Framework Preset olarak **Next.js** otomatik tanınacaktır.
5. **"Deploy"** butonuna basın.

### Adım 3: Özel Domain & Subdomain Ayarı (Vercel)
Vercel projenizin **Settings ➔ Domains** sekmesinden:
- Ana domain: `arklineteknolji.com` (ve `www.arklineteknolji.com`)
- Subdomain: `games.arklineteknolji.com`
eklediğinizde, middleware sayesinde her iki adres de kusursuz çalışacaktır.
