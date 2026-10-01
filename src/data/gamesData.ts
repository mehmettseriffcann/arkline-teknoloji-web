export interface GameTitle {
  id: string;
  title: string;
  genre: string;
  tagline: string;
  description: string;
  status: "live" | "upcoming";
  rating: number;
  reviewsCount: string;
  downloads: string;
  badge: string;
  gradient: string;
  themeColor: string;
  features: string[];
  platforms: string[];
}

export interface JobPosition {
  id: string;
  title: string;
  department: "Engineering" | "Art & Design" | "Product" | "Data & Analytics";
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
}

export const GAMES_DATA: GameTitle[] = [
  {
    id: "royal-quest",
    title: "Royal Quest: Match & Kingdom",
    genre: "Match-3 Puzzle & Adventure",
    tagline: "Krallığın gizemlerini çözün, görkemli sarayları baştan inşa edin!",
    description: "Akıcı animasyonları, göz alıcı görsel kalitesi ve bağımlılık yaratan bulmaca mekanikleriyle dünya çapında milyonlarca oyuncunun tercihi olan amiral gemisi oyunumuz.",
    status: "live",
    rating: 4.9,
    reviewsCount: "1.2M+ İnceleme",
    downloads: "25M+ İndirme",
    badge: "GLOBAL HIT #1",
    gradient: "from-amber-500 via-orange-500 to-rose-600",
    themeColor: "#f59e0b",
    features: [
      "5.000+ Benzersiz ve dinamik tasarlanmış bulmaca seviyesi",
      "Sıfır bekleme süreli ultra akıcı 60/120 FPS render motoru",
      "Haftalık global ligler, turnuvalar ve takım savaşları",
      "Tamamen reklamsız, kesintisiz saf premium oyun keyfi"
    ],
    platforms: ["iOS App Store", "Google Play"]
  },
  {
    id: "cyber-circuit",
    title: "Cyber Circuit: 2088",
    genre: "Synthwave Rhythm & Runner",
    tagline: "Neon ışıklı fütüristik metropolde ritimle hızın kusursuz birleşimi.",
    description: "Elektrik ve siber evrenin dinamiklerini elektronik müzik ritimleriyle harmanlayan, adrenalin dolu yüksek tempolu refleks oyunu.",
    status: "live",
    rating: 4.8,
    reviewsCount: "680K+ İnceleme",
    downloads: "15M+ İndirme",
    badge: "APPLE EDITORS' CHOICE",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    themeColor: "#06b6d4",
    features: [
      "Özel bestelenmiş synthwave ve electro soundtrack albümü",
      "Haptik geri bildirim destekli hassas kontrol mekanizması",
      "Kişiselleştirilebilir sibernetik avatarlar ve neon araçlar",
      "Global liderlik tablosu ve gerçek zamanlı hayalet yarış modu"
    ],
    platforms: ["iOS App Store", "Google Play"]
  },
  {
    id: "bloom-valley",
    title: "Bloom Valley: Merge Stories",
    genre: "Casual Merge & Simulation",
    tagline: "Stresi geride bırakın, sihirli bir vadide hayalinizdeki botanik dünyayı kurun.",
    description: "Yüzlerce egzotik bitkiyi, büyüleyici objeyi birleştirip hikaye odaklı karakterlerle etkileşime geçtiğiniz huzur verici bir merge simülasyonu.",
    status: "live",
    rating: 4.9,
    reviewsCount: "420K+ İnceleme",
    downloads: "10M+ İndirme",
    badge: "TOP CASUAL 2025",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    themeColor: "#10b981",
    features: [
      "Rahatlatıcı ASMR ses tasarımı ve el çizimi görsel dokunuşlar",
      "Yüzlerce gizli nesne ve birleştirme zinciri",
      "Duygusal ve sürükleyici karakter hikayeleri",
      "Çevrimdışı (offline) oynama özgürlüğü"
    ],
    platforms: ["iOS App Store", "Google Play"]
  },
  {
    id: "project-nexus",
    title: "Project Nexus: Tactical Arena",
    genre: "Real-Time 1v1 Strategy",
    tagline: "Yeni nesil mobil espor: Zeka, taktik ve anlık kararların çarpışması.",
    description: "Arkline Games laboratuvarlarında geliştirilen, yeni nesil derin taktiksel derinliğe sahip çok oyunculu arena stratejisi. Çok yakında beta testinde!",
    status: "upcoming",
    rating: 5.0,
    reviewsCount: "Kapalı Beta",
    downloads: "Ön Kayıtta",
    badge: "YENİ PROJE / SOON",
    gradient: "from-purple-600 via-pink-600 to-rose-500",
    themeColor: "#a855f7",
    features: [
      "3 dakikalık yoğun, yüksek tempolu 1v1 strateji savaşları",
      "Sıfır 'Pay-to-Win' adil rekabetçi ekosistem",
      "Taktiksel deste kombinasyonları ve dinamik harita mekanikleri",
      "Cross-platform senkron multiplayer mimari"
    ],
    platforms: ["iOS TestFlight", "Google Play Early Access"]
  }
];

export const CAREER_POSITIONS: JobPosition[] = [
  {
    id: "senior-unity-dev",
    title: "Senior Unity Game Developer",
    department: "Engineering",
    location: "İstanbul (Hibrit) / Uzaktan",
    type: "Tam Zamanlı",
    experience: "5+ Yıl",
    description: "Global çapta milyonlarca anlık oyuncuya hizmet veren mobil oyunlarımızın mimarisini inşa edecek, performans optimizasyonunda uzman deneyimli yazılımcı arıyoruz.",
    requirements: [
      "Unity ve C# ile en az 5 yıl mobil oyun geliştirme deneyimi",
      "Bellek yönetimi, render optimizasyonu ve CPU/GPU profil analizi uzmanlığı",
      "SOLID prensipleri, clean architecture ve modüler kodlama vizyonu",
      "Canlı operasyon (LiveOps) ve uzaktan konfigürasyon deneyimi"
    ]
  },
  {
    id: "lead-3d-artist",
    title: "Lead 3D Game Artist & Generalist",
    department: "Art & Design",
    location: "İstanbul (Hibrit)",
    type: "Tam Zamanlı",
    experience: "4+ Yıl",
    description: "Görsel stilimizi en üst seviyeye taşıyacak, karakter ve ortam modellemesinden ışıklandırma ve görsel efektlere kadar estetiği yönetecek sanat lideri.",
    requirements: [
      "Blender / Maya ve ZBrush ile üst düzey stilize (stylized) 3D modelleme yetkinliği",
      "Mobil platformlar için low-poly / high-poly optimizasyon bilgisi",
      "Unity içinde shader, lighting ve partikül sistemlerine hakimiyet",
      "Güçlü bir görsel portfolyo"
    ]
  },
  {
    id: "game-economy-designer",
    title: "Casual Game Economy & Level Designer",
    department: "Product",
    location: "İstanbul (Hibrit) / Uzaktan",
    type: "Tam Zamanlı",
    experience: "3+ Yıl",
    description: "Oyuncuların keyif ve meydan okuma dengesini mükemmel şekilde hissetmelerini sağlayacak matematiksel oyun ekonomisi ve bölüm tasarımları oluşturacak vizyoner.",
    requirements: [
      "Top-grossing casual/puzzle oyunlarında seviye veya ekonomi tasarımı deneyimi",
      "A/B testleri, oyuncu hunisi (funnel) ve kohort analizlerinde analitik düşünme",
      "Excel/Python simülasyonları ile oyun içi para/enerji döngüleri modelleme yetisi"
    ]
  },
  {
    id: "ui-ux-motion-designer",
    title: "UI/UX & Motion Designer",
    department: "Art & Design",
    location: "İstanbul (Hibrit)",
    type: "Tam Zamanlı",
    experience: "3+ Yıl",
    description: "Dream Games ve Peak standartlarında, dokunuş hissi veren tatmin edici mikro animasyonlar ve sezgisel mobil arayüzler üretecek tasarımcı.",
    requirements: [
      "Figma, Adobe After Effects ve Unity UI Toolkit yetkinliği",
      "Micro-interaction ve 'juicy' oyun animasyonları konusunda tutku",
      "Oyuncu geri bildirimlerine göre arayüz akışlarını test etme alışkanlığı"
    ]
  },
  {
    id: "senior-product-manager",
    title: "Senior Product Manager (LiveOps)",
    department: "Product",
    location: "İstanbul (Ofis / Hibrit)",
    type: "Tam Zamanlı",
    experience: "4+ Yıl",
    description: "Oyunlarımızın canlı operasyon stratejisini, haftalık etkinlik döngülerini ve oyuncu tutundurma (retention) metriklerini en üst seviyeye taşıyacak lider.",
    requirements: [
      "Milyonlarca MAU'ya sahip F2P mobil oyunlarda PM deneyimi",
      "Veriye dayalı karar alma ve A/B test yönetimi konusunda kanıtlanmış başarı",
      "Çapraz fonksiyonlu (sanat, yazılım, veri) takımları yüksek vizyonla koordine edebilme"
    ]
  }
];

export const CULTURE_VALUES = [
  {
    title: "Sadeliğin Gücü ve Mükemmeliyet",
    desc: "Karmaşık sistemler yerine kristal berraklığında tasarımlar yapıyoruz. En ufak bir buton animasyonundan ana oyun döngüsüne kadar kusursuzluk hedefliyoruz.",
    icon: "Sparkles"
  },
  {
    title: "Veri ile Sanatın Dansı",
    desc: "Sezgilerimiz ve estetik vizyonumuz bizi heyecanlandırır; analitik veri ve oyuncu metrikleri ise doğru yönde kalmamızı sağlar.",
    icon: "TrendingUp"
  },
  {
    title: "Özerk ve Çevik Ekipler",
    desc: "Bürokrasi ve gereksiz hiyerarşi yok. Her ekip kendi oyununun gerçek sahibidir; hızlı dener, hızlı öğrenir ve global başarılara imza atar.",
    icon: "Flame"
  },
  {
    title: "Önce İnsan ve Oyuncu",
    desc: "Ekibimizin mutluluğu ile oyuncularımızın yüzündeki tebessüm birbirine bağlıdır. Tutku ve saygının olmadığı yerde büyük oyunlar üretilemez.",
    icon: "Heart"
  }
];
