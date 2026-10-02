const img = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=70&auto=format&fit=crop`;

export type Service = {
  title: string;
  desc: string;
  img: string;
};

export type ServiceGroup = {
  id: string;
  title: string;
  summary: string;
  services: Service[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: "altyapi",
    title: "Enerji Altyapısı",
    summary: "Alçak ve yüksek gerilimden dağıtım şebekesine kadar enerji iletim altyapısı.",
    services: [
      {
        title: "Alçak Gerilim Sistemleri",
        desc: "0.4 kV seviyesinde dağıtım panoları, kablolama ve bağlantı altyapısı.",
        img: img("photo-1581092160607-ee22621dd758"),
      },
      {
        title: "Yüksek Gerilim Sistemleri",
        desc: "Trafo merkezleri, YG hücreleri, enerji nakil hatları.",
        img: img("photo-1473341304170-971dccb5ac1e"),
      },
      {
        title: "Elektrik Dağıtım ve Şebeke",
        desc: "Yeraltı kablo hatları ve havai şebeke altyapısı.",
        img: img("photo-1504328345606-18bbc8c9d7d1"),
      },
      {
        title: "Enerji Altyapısı ve Dağıtım",
        desc: "Jeneratör, UPS ve kritik altyapı sistemleri.",
        img: img("photo-1466611653911-95081537e5b7"),
      },
    ],
  },
  {
    id: "taahhut",
    title: "Taahhüt ve Tesisat",
    summary: "Projelendirmeden sahaya; bina, fabrika ve şantiye elektrik işleri.",
    services: [
      {
        title: "Elektrik Taahhüt ve Proje",
        desc: "Proje çiziminden ruhsata, sahaya kadar tam kapsam.",
        img: img("photo-1541888946425-d81bb19240f5"),
      },
      {
        title: "İç Tesisat",
        desc: "Kuvvetli ve zayıf akım iç tesisat, veri, yangın algılama.",
        img: img("photo-1544724569-5f546fd6f2b5"),
      },
      {
        title: "Fabrika ve Şantiye Elektriği",
        desc: "Ağır sanayi ve geçici şantiye enerji sistemleri.",
        img: img("photo-1504307651254-35680f356dfd"),
      },
      {
        title: "Aydınlatma Sistemleri",
        desc: "LED dönüşüm, akıllı otomasyon ve mimari aydınlatma.",
        img: img("photo-1524484485831-a92ffc0de03f"),
      },
    ],
  },
  {
    id: "pano",
    title: "Pano ve Otomasyon",
    summary: "Pano imalatı, reaktif güç kompanzasyonu ve endüstriyel otomasyon.",
    services: [
      {
        title: "Pano İmalatı ve Montajı",
        desc: "ADP, MCC ve otomasyon panoları imalatı ve montajı.",
        img: img("photo-1621905251189-08b45d6a269e"),
      },
      {
        title: "Kompanzasyon Sistemleri",
        desc: "Reaktif güç kompanzasyonu ve harmonik filtre sistemleri.",
        img: img("photo-1581091226825-a6a2a5aee158"),
      },
      {
        title: "Otomasyon Sistemleri",
        desc: "PLC, SCADA ve bina yönetim sistemleri.",
        img: img("photo-1518770660439-4636190af475"),
      },
    ],
  },
  {
    id: "yenilenebilir",
    title: "Güneş Enerjisi ve Servis",
    summary: "Güneş enerjisi santrali kurulumu ile arıza, bakım ve onarım hizmetleri.",
    services: [
      {
        title: "GES – Güneş Enerjisi",
        desc: "Çatı ve arazi tipi güneş santrali kurulumu.",
        img: img("photo-1509391366360-2e959784a276"),
      },
      {
        title: "Arıza, Bakım ve Onarım",
        desc: "Arıza müdahalesi ve periyodik bakım hizmetleri.",
        img: img("photo-1555963966-b7ae5404b6ed"),
      },
    ],
  },
];

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.services);
