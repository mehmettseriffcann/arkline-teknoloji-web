export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: "ag-yg" | "taahhut" | "pano-otomasyon" | "yenilenebilir" | "bakim";
  features: string[];
  specs: { label: string; value: string }[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "alcak-gerilim",
    number: "01",
    title: "Alçak Gerilim (AG) Sistemleri",
    shortDesc: "Endüstriyel tesisler, ticari yapılar ve konutlar için 1kV altı güvenli, standartlara uygun AG dağıtım altyapısı.",
    fullDesc: "Tesisinizin enerji sürekliliğini ve can güvenliğini garanti altına alan Alçak Gerilim (AG) dağıtım ağlarını uluslararası IEC standartlarında projelendiriyor ve uyguluyoruz. Kablo taşıma sistemleri, busbar hatları, ana ve tali dağıtım çözümlerinde sıfır hata toleransı ile çalışıyoruz.",
    iconName: "Zap",
    category: "ag-yg",
    features: [
      "Ana & Tali Dağıtım Panoları Entegrasyonu",
      "Busbar Enerji İletim Sistemleri",
      "Kablo Kanalı & Tava Altyapıları",
      "Topraklama & Eşpotansiyel Dengeleme",
      "Harmonik Ölçümü ve AG Güç Kalitesi Analizi"
    ],
    specs: [
      { label: "Gerilim Seviyesi", value: "0.4 kV (400V / 230V)" },
      { label: "Standartlar", value: "IEC 61439-1/2, TSE" },
      { label: "Kullanım Alanı", value: "Fabrikalar, Hastaneler, AVM, Siteler" }
    ]
  },
  {
    id: "yuksek-gerilim",
    number: "02",
    title: "Yüksek Gerilim (YG) Sistemleri",
    shortDesc: "Trafo merkezleri, YG hücreleri ve enerji nakil hatlarında yüksek güvenlikli anahtar teslim çözümler.",
    fullDesc: "36 kV seviyesine kadar olan yüksek ve orta gerilim tesislerinin kurulumu, trafo merkezlerinin inşası, kesici & ayırıcı hücre montajları, röle koordinasyon testleri ve Yüksek Gerilim İşletme Sorumluluğu (TMMOB yetkili mühendislik) hizmetlerini uçtan uca sunmaktayız.",
    iconName: "Activity",
    category: "ag-yg",
    features: [
      "Trafo Merkezleri Kurulumu & Güç Artırımları",
      "Hava & Gaz Yalıtımlı YG Hücre Montajı (RMU / Metal Clad)",
      "YG İşletme Sorumluluğu & Müşavirlik",
      "Röle Koordinasyonu & Aşırı Akım Koruma Ayarları",
      "Trafo Yağ & İzolasyon Direnci Testleri"
    ],
    specs: [
      { label: "Gerilim Seviyesi", value: "6.3 kV - 36 kV" },
      { label: "Sertifikasyon", value: "TMMOB EMO Onaylı" },
      { label: "Trafo Kapasiteleri", value: "160 kVA - 3150 kVA+" }
    ]
  },
  {
    id: "elektrik-dagitim-sebeke",
    number: "03",
    title: "Elektrik Dağıtım ve Şebeke İşleri",
    shortDesc: "Kentsel, kırsal ve sanayi bölgelerinde yer altı/yer üstü şebeke altyapıları ve enerji nakil hatları.",
    fullDesc: "Dağıtım şirketleri (EDAŞ) ve organize sanayi bölgeleri standartlarına uygun ENH (Enerji Nakil Hatları), yer altı kablolu şebeke dönüşümleri, aydınlatma şebekeleri ve havai hat imalatlarında deneyimli saha kadromuzla kesintisiz altyapı sunuyoruz.",
    iconName: "Network",
    category: "ag-yg",
    features: [
      "Yeraltı XLPE Kablo Çekimi & Başlık Uygulamaları",
      "Enerji Nakil Hatları (ENH) Direk & İletken Montajı",
      "Saha Dağıtım Kutuları (Box) Montajı",
      "Şebeke Yük Dengeleme ve Trafo Ring Bağlantıları",
      "EDAŞ Kabul ve Devreye Alma Süreçleri"
    ],
    specs: [
      { label: "Şebeke Tipi", value: "Ring & Radyal Altyapı" },
      { label: "Kablo Türleri", value: "1x240, 3x240 mm² XLPE / Alüminyum" },
      { label: "Uyumluluk", value: "TEDAŞ / TEİAŞ Şartnameleri" }
    ]
  },
  {
    id: "elektrik-taahhut-proje",
    number: "04",
    title: "Elektrik Taahhüt ve Proje Uygulamaları",
    shortDesc: "Konsept tasarımdan yasal ruhsat onaylarına ve saha anahtar teslim uygulamasına tam kapsamlı mühendislik.",
    fullDesc: "Büyük ölçekli endüstriyel tesisler, veri merkezleri ve ticari yapılar için statik, dinamik ve aydınlatma hesaplarını içeren uygulama projeleri çiziyor; projenin malzeme tedarikinden saha uygulamasına kadar tüm sürecini taahhüt ediyoruz.",
    iconName: "FileCheck2",
    category: "taahhut",
    features: [
      "Ruhsat ve Uygulama (As-Built) Projelendirme",
      "Kısa Devre & Gerilim Düşümü Hesaplamaları",
      "BIM & CAD Tabanlı Koordinasyon Çizimleri",
      "Resmi Kurum (Belediye, EDAŞ) Onay Takibi",
      "Sözleşme, Keşif, Metraj & Hakediş Yönetimi"
    ],
    specs: [
      { label: "Yazılım Altyapısı", value: "AutoCAD, Revit, DIALux, EPLAN" },
      { label: "Kapsam", value: "A'dan Z'ye Anahtar Teslim Taahhüt" },
      { label: "Mühendislik", value: "Yetkili Elektrik-Elektronik Kadrosu" }
    ]
  },
  {
    id: "ic-tesisat-anahtar-teslim",
    number: "05",
    title: "İç Tesisat ve Anahtar Teslim Elektrik İşleri",
    shortDesc: "Rezidans, otel, fabrika içi ve ticari binalarda kuvvetli & zayıf akım iç tesisat uygulamaları.",
    fullDesc: "Yapıların tüm iç kablolama, priz-anahtar sortileri, aydınlatma linye hatları, yangın algılama, kartlı geçiş, data-network ve seslendirme sistemlerini tek elden anahtar teslim güvenle hayata geçiriyoruz.",
    iconName: "Home",
    category: "taahhut",
    features: [
      "Kuvvetli Akım İç Tesisatı & Kat Dağıtımı",
      "Yangın Algılama ve Acil Anons Sistemleri",
      "Yapısal Kablolama (Cat6/Cat7 Data & Fiber Optik)",
      "CCTV Güvenlik ve Kartlı Geçiş Entegrasyonu",
      "Halogen-Free (Yangına Dayanıklı) Tesisat Güvencesi"
    ],
    specs: [
      { label: "Proje Tipleri", value: "Rezidans, Plaza, Kampüs, Fabrika İçi" },
      { label: "Standart", value: "Binaların Yangından Korunması Yön." },
      { label: "Garanti", value: "İşçilik & Malzeme Garantisi" }
    ]
  },
  {
    id: "pano-imalati-montaji",
    number: "06",
    title: "Pano İmalatı ve Pano Montajı",
    shortDesc: "Uluslararası tip testli MCC, ADP, transfer ve otomasyon panolarının özel projelendirilip imal edilmesi.",
    fullDesc: "Arkline Teknoloji atölyelerinde son teknoloji elektro montaj standartlarıyla; formlu tip-testli panolar, Ana Dağıtım Panoları (ADP), Motor Kontrol Merkezleri (MCC) ve jeneratör senkronizasyon panoları üretiyor ve sahada montajını yapıyoruz.",
    iconName: "Cpu",
    category: "pano-otomasyon",
    features: [
      "Form 2b, 3b, 4b Tip Testli Pano İmalatı",
      "MCC (Motor Kontrol) & Frekans Konvertör Panoları",
      "Şebeke - Jeneratör Otomatik Transfer (ATS) Panoları",
      "IP55 / IP65 Yüksek Koruma Sınıfı Gövdeler",
      "Kapsamlı Fonksiyon & Yalıtım Fabrika Testleri (FAT)"
    ],
    specs: [
      { label: "Akım Kapasitesi", value: "6300A'e kadar" },
      { label: "Bileşenler", value: "Schneider, ABB, Siemens, Eaton" },
      { label: "Standart", value: "IEC 61439-1 & 2 Tip Testli" }
    ]
  },
  {
    id: "kompanzasyon-sistemleri",
    number: "07",
    title: "Kompanzasyon Sistemleri",
    shortDesc: "Reaktif güç cezalarını %100 engelleyen, harmonik filtreli akıllı kompanzasyon panoları ve analizi.",
    fullDesc: "İşletmenizin faturalarına yansıyan endüktif ve kapasitif reaktif ceza riskini ortadan kaldırıyoruz. Harmonik filtreli tristör anahtarlamalı veya kontaktörlü sistemlerle güç katsayısını (cos φ = 0.99) optimize ederek enerji maliyetlerinizi düşürüyoruz.",
    iconName: "Gauge",
    category: "pano-otomasyon",
    features: [
      "Reaktif Güç Ceza Analizi ve Garanti Çözüm",
      "Harmonik Filtreli Detuned Reaktör Sistemleri",
      "Hızlı Yükler İçin Tristör Anahtarlamalı Kompanzasyon",
      "Uzaktan GSM/Modbus Tabanlı Reaktif Ceza Takibi",
      "Kondansatör ve Reaktör Sağlık Ölçümleri"
    ],
    specs: [
      { label: "Hedef Cos φ", value: "0.98 - 1.00" },
      { label: "Harmonik Filtre", value: "189 Hz, 134 Hz (p=%7, %14)" },
      { label: "Tasarruf Oranı", value: "%100 Ceza İptali Garantisi" }
    ]
  },
  {
    id: "otomasyon-sistemleri",
    number: "08",
    title: "Otomasyon Sistemleri",
    shortDesc: "Endüstriyel PLC/SCADA mimarileri, enerji izleme yazılımları ve bina otomasyonu (BMS).",
    fullDesc: "Üretim hatlarının verimliliğini artıran ve enerji tüketimini anlık izlenebilir kılan otomasyon çözümleri. PLC programlama, SCADA panelleri, enerji analizörlerinin haberleştirilmesi ve kestirimci raporlama platformları kuruyoruz.",
    iconName: "Workflow",
    category: "pano-otomasyon",
    features: [
      "Siemens / Schneider / Omron PLC Programlama",
      "Merkezi SCADA & HMI Arayüz Geliştirme",
      "Enerji İzleme & Karbon Ayak İzi Raporlama Yazılımı",
      "Bina Yönetim Sistemleri (BMS - HVAC & Aydınlatma Kontrolü)",
      "Endüstri 4.0 ve IoT Sensör Entegrasyonu"
    ],
    specs: [
      { label: "Protokoller", value: "Modbus TCP/RTU, Profinet, BACnet" },
      { label: "Veri Güncelleme", value: "Milisaniye Seviyesinde Telemetri" },
      { label: "Bulut Entegrasyonu", value: "Web & Mobil Dashboard Desteği" }
    ]
  },
  {
    id: "aydinlatma-sistemleri",
    number: "09",
    title: "Aydınlatma Sistemleri",
    shortDesc: "Yüksek tavan fabrika aydınlatmaları, DALI akıllı otomasyon, çevre ve mimari cephe aydınlatması.",
    fullDesc: "Enerji sarfiyatını %70'e varan oranda azaltan yüksek lümen/watt verimli LED teknolojileri, DALI protokolü ile gün ışığına duyarlı akıllı senaryolar ve estetik mimari cephe projeleri tasarlıyoruz.",
    iconName: "SunMedium",
    category: "taahhut",
    features: [
      "Endüstriyel High-Bay LED Fabrika Aydınlatması",
      "DALI-2 & KNX Akıllı Aydınlatma Otomasyonu",
      "Mimari Cephe & Çevre Aydınlatma Tasarımı",
      "Acil Durum Aydınlatma ve Yönlendirme Hatları",
      "DIALux Işık Dağılımı ve Lüks Simülasyonları"
    ],
    specs: [
      { label: "Tasarruf Oranı", value: "%60 - %75 Konvansiyonele Göre" },
      { label: "Işık Kalitesi", value: "CRI > 80, Düşük UGR Parlama Değeri" },
      { label: "Ömür", value: "50.000+ Saat LED Ömrü" }
    ]
  },
  {
    id: "ariza-bakim-onarim",
    number: "10",
    title: "Arıza, Bakım ve Onarım",
    shortDesc: "7/24 acil müdahale ekipleri, termal kamera kontrolleri ve periyodik kestirimci bakım anlaşmaları.",
    fullDesc: "Tesisinizin plansız duruşlarını engellemek için termal kamera analizi ile panolardaki aşırı ısınmaları tespit ediyor, periyodik trafo/pano bakımları ve 7/24 acil servis filomuzla ivedilikle sahaya ulaşıyoruz.",
    iconName: "Wrench",
    category: "bakim",
    features: [
      "7/24 Kesintisiz Acil Arıza Müdahale Ekipleri",
      "Termal Kamera ile Sıcak Nokta Tespiti & Raporlama",
      "Yıllık & 6 Aylık Periyodik Koruyucu Bakım Anlaşmaları",
      "Trafo Yağ Tasfiyesi, Gaz Dolumu ve Mekanik Testler",
      "İzolasyon & Topraklama Ölçüm Raporları (Yasal Uygunluk)"
    ],
    specs: [
      { label: "Müdahale Süresi", value: "Bölgesel 60-120 Dakika Hızlı İntikal" },
      { label: "Cihaz Parkı", value: "Fluke Termal Kamera, Megger Test Setleri" },
      { label: "Raporlama", value: "İş Güvenliği & Sigorta Geçerli Raporlar" }
    ]
  },
  {
    id: "ges-gunes-enerji-sistemleri",
    number: "11",
    title: "GES – Güneş Enerji Sistemleri",
    shortDesc: "Fabrika çatıları ve arazilere yönelik anahtar teslim EPC (Mühendislik, Tedarik, Kurulum) GES projeleri.",
    fullDesc: "Öz tüketim ve lisanssız elektrik üretimi mevzuatına uygun, yatırımınızın 3-4 yılda geri dönüşünü sağlayan endüstriyel çatı ve arazi GES çözümleri sunuyoruz. Statik hesap, çağrı mektubu, TEDAŞ onayı ve kabul işlemlerini anahtar teslim üstleniyoruz.",
    iconName: "Sun",
    category: "yenilenebilir",
    features: [
      "Endüstriyel Çatı ve Arazi Tipi Güneş Santralleri",
      "Çağrı Mektubu & TEDAŞ Ruhsat İzin Süreçleri Yönetimi",
      "Tier-1 Fotovoltaik Panel & Yüksek Verimli İnvertör Seçimi",
      "Statik Çatı Yükü Güçlendirme & Montaj Konstrüksiyonu",
      "SCADA & Uzaktan İnvertör Performans İzleme"
    ],
    specs: [
      { label: "Geri Dönüş Süresi", value: "Ortalama 3.2 - 4 Yıl" },
      { label: "Panel Garantisi", value: "25-30 Yıl Performans Garantisi" },
      { label: "Kapasite", value: "100 kWp - 50 MWp Ölçekli Santraller" }
    ]
  },
  {
    id: "fabrika-isyeri-santiye",
    number: "12",
    title: "Fabrika, İş Yeri ve Şantiye Elektrik Sistemleri",
    shortDesc: "Ağır sanayi hatları, makine besleme kabloları ve geçici şantiye elektrik dağıtımı.",
    fullDesc: "Yeni kurulan fabrikalar, genişleyen üretim holleri ve büyük şantiyeler için jeneratör beslemeleri, geçici şantiye panoları, makine ana dağıtım hatları ve topraklama ring hatlarını ağır şartlara dayanıklı şekilde inşa ediyoruz.",
    iconName: "Building2",
    category: "taahhut",
    features: [
      "Ağır Sanayi Makine & Hat Besleme Kablolaması",
      "Şantiye Geçici Enerji Temini & Mobil Panolar",
      "Harmonik ve Titreşim Dayanımlı Koruma Sistemleri",
      "Kompresör, Soğutma Grubu & Motor Yolvericileri",
      "Şantiye Güvenliği Kaçak Akım & Eşpotansiyel Tedbirleri"
    ],
    specs: [
      { label: "Çalışma Şartları", value: "Ağır Sanayi & Zorlu Şantiye Koşulları" },
      { label: "Kablo Koruma", value: "Ağır Hizmet Galvanizli Tava & Borular" },
      { label: "Yetkinlik", value: "Sıfır İş Kazası Prensibi" }
    ]
  },
  {
    id: "enerji-altyapisi-dagitim",
    number: "13",
    title: "Enerji Altyapısı ve Elektrik Dağıtım Çözümleri",
    shortDesc: "Kritik tesisler için jeneratör senkronizasyonu, UPS kesintisiz güç sistemleri ve şebeke optimizasyonu.",
    fullDesc: "Hastaneler, veri merkezleri ve kritik üretim hatlarında elektrik kesintisine 1 milisaniye bile tahammül yoktur. Jeneratör yedekleme, dinamik ve statik UPS sistemleri ile şebeke dalgalanmalarını filtreleyen entegre enerji altyapıları kuruyoruz.",
    iconName: "ShieldAlert",
    category: "ag-yg",
    features: [
      "Jeneratör Senkronizasyon & Yük Atma-Alma Sistemleri",
      "Merkezi Kesintisiz Güç Kaynakları (Endüstriyel Online UPS)",
      "Şebeke / Ada Modu Otomatik Geçiş Mimarileri",
      "Enerji Depolama (BESS - Batarya Sistemleri) Çözümleri",
      "Güç Kalitesi İyileştirme ve Gerilim Regülatörleri"
    ],
    specs: [
      { label: "Kesinti Toleransı", value: "0 Milisaniye (Kesintisiz Online)" },
      { label: "Kapasite", value: "10 kVA - 2500 kVA Senkron Jeneratör/UPS" },
      { label: "Verimlilik", value: "%96+ Çift Çevrimli Eko Mod" }
    ]
  }
];

export const CATEGORIES = [
  { id: "all", name: "Tüm Faaliyet Alanlarımız" },
  { id: "ag-yg", name: "Alçak & Yüksek Gerilim" },
  { id: "taahhut", name: "Proje & Taahhüt" },
  { id: "pano-otomasyon", name: "Pano & Otomasyon" },
  { id: "yenilenebilir", name: "Güneş Enerjisi (GES)" },
  { id: "bakim", name: "Bakım & 7/24 Servis" },
];
