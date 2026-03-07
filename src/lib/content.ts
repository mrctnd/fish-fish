// ─────────────────────────────────────────────────────────────
// Fish&Fish — Single source of truth for all website content
// Source: website-content.md (generated 2026-03-07)
// ─────────────────────────────────────────────────────────────

export const BUSINESS = {
  name: 'Fish&Fish',
  phone: '+90 553 901 34 74',
  phoneTel: '+905539013474',
  whatsapp: 'https://wa.me/905539013474',
  address: {
    street: 'Mustafa Kemal, 2124. Cd Yaşam İş Merkezi No:16/C',
    city: 'Çankaya / Ankara',
    postal: '06510',
    country: 'Türkiye',
    plusCode: 'WQ78+3X',
    full: 'Mustafa Kemal, 2124. Cd Yaşam İş Merkezi No:16/C, 06510 Çankaya/Ankara, Türkiye',
  },
  priceRange: '₺400–600',
  priceRangeSchema: '₺₺',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Fish%26Fish+Ya%C5%9Fam+%C4%B0%C5%9F+Merkezi+%C3%87ankaya+Ankara&output=embed&z=17',
  directionsUrl:
    'https://www.google.com/maps/place/Fish%26Fish/@39.9125064,32.767418,19.5z/data=!4m6!3m5!1s0x14d3495b1fb5f451:0x6db4b7db4ef29ec!8m2!3d39.9126856!4d32.7674498!16s%2Fg%2F11yd0jn6td',
} as const

export const HOURS = [
  { day: 'Pazartesi',  opens: '11:30', closes: '21:00' },
  { day: 'Salı',       opens: '11:30', closes: '21:00' },
  { day: 'Çarşamba',  opens: '11:30', closes: '21:00' },
  { day: 'Perşembe',  opens: '11:30', closes: '21:00' },
  { day: 'Cuma',      opens: '11:30', closes: '21:00' },
  { day: 'Cumartesi', opens: '11:30', closes: '21:00' },
  { day: 'Pazar',     opens: '13:00', closes: '21:00' },
] as const

export const HERO = {
  headline: 'Denizin Tazeligiyle, Çankaya\'nın Kalbinde.',
  subheadline:
    'Öğle ve akşam yemeği sunan rahat, helal bir deniz ürünleri restoranı — açık alan oturma, masa servisi ve tüm aile için sıcak bir ortam.',
} as const

export const ABOUT_SHORT =
  'Fish&Fish, Çankaya, Ankara\'da bulunan samimi bir deniz ürünleri restoranıdır — kaliteli malzemelerin ve rahat atmosferin bir araya geldiği huzurlu bir mekan. Yalnız öğle yemeğine, aile yemeğine veya arkadaşlarla bir arada olmaya gelseniz de, özenli masa servisi ve dürüst fiyatlara sahip bir menü bulacaksınız.'

export const ABOUT_LONG = [
  {
    heading: 'Daha Sakin Bir Yemek Deneyimi',
    paragraphs: [
      'Fish&Fish, Çankaya\'daki 2124. Cd\'de Yaşam İş Merkezi\'nde yer alıyor — ulaşması kolay, keyfini çıkarması da. Sizden çok şey talep etmeyen bir mekan yarattık: kıyafet kuralı yok, gösteriş yok, sadece özenle hazırlanmış lezzetli yemekler.',
      'Menümüz deniz ürünlerine dayanmaktadır — taze malzemelerle hazırlanır ve helal olarak sunulur. Geniş bir misafir kitlesine hitap ediyoruz: küçük çocuklu aileler, sakin bir köşe isteyen tek başına gelenler, doyurucu bir yemek arayan üniversite öğrencileri ve acele etmeden masa paylaşmak isteyen gruplar.',
      'Salon içi masa servisi, hava güzel olduğunda açık alan oturma imkânı ve yolda olanlar için paket servis sunuyoruz. Mekanımız tekerlekli sandalye erişimine uygundur, köpekler içeride ve dışarıda memnuniyetle karşılanır, küçükler için mama sandalyemiz mevcuttur.',
      'Kişi başı ₺400–600 fiyat aralığıyla, taviz vermeden gerçek bir değer sunmayı hedefliyoruz. Banka ve kredi kartları ile NFC mobil ödemeleri kabul ediyoruz — nakit taşımanıza gerek yok.',
      'Haftanın yedi günü açığız. Olduğunuz gibi gelin.',
    ],
  },
] as const

export const HIGHLIGHTS = [
  { icon: 'Leaf',          title: 'Helal Menü',             desc: 'Tüm yemekler helal olarak hazırlanır.' },
  { icon: 'Sun',           title: 'Açık Alan Oturma',       desc: 'Yemeğinizi açık havada tadın.' },
  { icon: 'Dog',           title: 'Köpek Dostu',            desc: 'Köpekler içeride ve dışarıda memnuniyetle karşılanır.' },
  { icon: 'Baby',          title: 'Aile Dostu',             desc: 'Mama sandalyesi mevcut, çocuklar için harika.' },
  { icon: 'Accessibility', title: 'Engelli Erişimi',        desc: 'Her yerde erişilebilir oturma alanları.' },
  { icon: 'Car',           title: 'Ücretsiz Otopark',       desc: 'Yakında bol miktarda ücretsiz sokak parkı.' },
  { icon: 'Utensils',      title: 'Esnek Servis',           desc: 'Salon içi, paket veya açık alan oturma.' },
  { icon: 'CreditCard',    title: 'Tüm Ödeme Yöntemleri',  desc: 'Kart ve NFC mobil ödemeleri.' },
  { icon: 'CalendarCheck', title: 'Rezervasyon Kabul',      desc: 'Önceden ayırtın veya direkt gelin.' },
  { icon: 'Clock',         title: 'Yedi Gün Açık',          desc: 'Hafta sonları dahil.' },
] as const

export const SERVICES = [
  {
    title: 'Salon İçi',
    icon: 'Utensils',
    desc: 'Rahat iç mekan yemek salonumuzda tam masa servisi deneyiminin keyfini çıkarın. Ekibimiz başından sonuna kadar sizinle ilgilenir — ister hızlı bir öğle yemeği, ister uzun bir akşam yemeği olsun.',
  },
  {
    title: 'Paket Servis',
    icon: 'ShoppingBag',
    desc: 'Vaktiniz mi dar? Yemeğinizi paket olarak sipariş edin. Önceden arayın, geldiğinizde hazır olsun.',
  },
  {
    title: 'Açık Alan Oturma',
    icon: 'Sun',
    desc: 'Hava güzel olduğunda açık terasımız yemek yemek, dinlenmek ve açık havanın tadını çıkarmak için mükemmel bir yerdir. Köpekler terasta memnuniyetle karşılanır.',
  },
] as const

export const MENU_CATEGORIES = [
  { name: 'Başlangıçlar & Soğuk Tabaklar', icon: 'Salad' },
  { name: 'Çorbalar',                       icon: 'Soup' },
  { name: 'Balık Ana Yemekler',             icon: 'Fish' },
  { name: 'Izgara Yemekler',                icon: 'Flame' },
  { name: 'Garnitürler & Salatalar',        icon: 'Leaf' },
  { name: 'Atıştırmalıklar & Hafif Yemek', icon: 'Cookie' },
  { name: 'Alkolsüz İçecekler',             icon: 'Coffee' },
  { name: 'Tatlılar',                       icon: 'IceCream' },
] as const

export const FAQ_ITEMS = [
  {
    q: 'Rezervasyon gerekli mi?',
    a: 'Rezervasyon zorunlu değildir ancak önceden ayırtmanızı öneririz — özellikle hafta sonları ve öğle saatlerinde. Çevrimiçi rezervasyon yapabilir veya bizi doğrudan +90 553 901 34 74 numarasından arayabilirsiniz.',
  },
  {
    q: 'Nasıl rezervasyon yaptırabilirim?',
    a: 'Web sitemizde yer alan rezervasyon formunu kullanın veya +90 553 901 34 74 numarasından bizi arayın. Tercih ettiğiniz tarih, saat ve kişi sayısını belirtmeyi unutmayın.',
  },
  {
    q: 'Otopark mevcut mu?',
    a: 'Evet — tam önünde ücretsiz sokak parkı ve çevrede bol miktarda ek ücretsiz otopark bulunmaktadır.',
  },
  {
    q: 'Evcil hayvanlar kabul ediliyor mu?',
    a: 'Evet! Köpekler hem restoranın içinde hem de açık terasımızda memnuniyetle karşılanır.',
  },
  {
    q: 'Restoran tekerlekli sandalye erişimine uygun mu?',
    a: 'Evet. Restoranın her yerinde tekerlekli sandalye erişimine uygun oturma alanı mevcuttur.',
  },
  {
    q: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
    a: 'Banka kartı, kredi kartı ve NFC mobil ödemeleri (Apple Pay ve Google Pay gibi) kabul ediyoruz. Kart bulundurmanızı öneririz; nakit kabul durumunu telefonla teyit etmenizi tavsiye ederiz.',
  },
  {
    q: 'Yemekler helal mi?',
    a: 'Evet, Fish&Fish\'te sunulan tüm yemekler helaldir.',
  },
  {
    q: 'Fish&Fish çocuklar için uygun mu?',
    a: 'Kesinlikle. Mama sandalyesi bulunan ve her yaştan çocuğa uygun rahat atmosferiyle aile dostu bir restoranız.',
  },
  {
    q: 'Paket servis yapıyor musunuz?',
    a: 'Evet. +90 553 901 34 74 numarasından bizi arayarak paket sipariş verebilirsiniz. Siparişiniz hazır olduğunda size haber veririz.',
  },
  {
    q: 'En yoğun saatleriniz hangileri?',
    a: 'En yoğun olduğumuz saatler genellikle öğle (12:00–14:00) ve Cumartesi akşamlarıdır. Daha sakin bir ziyaret tercih ediyorsanız, hafta içi öğle yemekleri veya erken akşam saatleri iyi bir seçenektir.',
  },
  {
    q: 'Her gün açık mısınız?',
    a: 'Evet — haftanın yedi günü açığız. Pazartesi – Cumartesi: 11:30–21:00. Pazar: 13:00–21:00.',
  },
  {
    q: 'Grup etkinliği veya özel organizasyon düzenleyebilir misiniz?',
    a: 'Grupları memnuniyetle ağırlıyoruz. Lütfen önceden bizimle iletişime geçin; oturma düzenini ayarlayıp herkes için konforlu bir deneyim sağlayalım.',
  },
] as const

export const PAYMENT_PARTNERS = [
  { name: 'Metropol Card',       logo: '/metropol-logo.svg',           logoClass: 'h-20' },
  { name: 'Multinet',            logo: '/multinet-logo.png',           logoClass: 'h-28' },
  { name: 'Setcard',             logo: '/setcard-logo.png',            logoClass: 'h-20' },
  { name: 'Token Flex',          logo: '/token-flex-logo.png',         logoClass: 'h-20' },
  { name: 'Ticket Restaurant',   logo: '/ticket-restaurant-logo.png',  logoClass: 'h-20' },
  { name: 'Pluxee',              logo: '/pluxee-logo.png',             logoClass: 'h-20' },
] as const

export const NAV_LINKS = [
  { href: '/',                   label: 'Ana Sayfa' },
  { href: '/menu',               label: 'Menü' },
  { href: '/cozum-ortaklari',    label: 'Çözüm Ortakları' },
] as const

// ── SEO metadata per page ──────────────────────────────────────
export const PAGE_META = {
  home: {
    title: 'Fish&Fish | Çankaya, Ankara\'da Helal Deniz Ürünleri Restoranı',
    description:
      'Çankaya, Ankara\'nın kalbinde taze helal deniz ürünleri. Salon içi, paket servis ve açık alan oturma. 7 gün açık. Rezervasyon için +90 553 901 34 74\'ü arayın.',
  },
  menu: {
    title: 'Menü | Fish&Fish Deniz Ürünleri Restoranı Çankaya, Ankara',
    description:
      'Fish&Fish menüsünü keşfedin — taze helal deniz ürünleri, ızgaralar, başlangıçlar ve daha fazlası. Kişi başı ₺400–600\'dan başlayan fiyatlar. Her gün öğle ve akşam yemeği.',
  },
  partners: {
    title: 'Çözüm Ortakları | Fish&Fish Ankara',
    description:
      'Fish&Fish, Metropol Card, Multinet, Setcard, Token Flex, Edenred ve Pluxee yemek kartlarını kabul etmektedir.',
  },
} as const

// ── JSON-LD Restaurant schema (Home page) ─────────────────────
// Replace PLACEHOLDER_DOMAIN with actual domain before going live.
export const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: 'Fish&Fish',
  url: 'https://PLACEHOLDER_DOMAIN',
  telephone: '+905539013474',
  priceRange: '₺₺',
  servesCuisine: ['Deniz Ürünleri', 'Helal'],
  hasMenu: 'https://PLACEHOLDER_DOMAIN/menu',
  acceptsReservations: 'True',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mustafa Kemal, 2124. Cd Yaşam İş Merkezi No:16/C',
    addressLocality: 'Çankaya',
    addressRegion: 'Ankara',
    postalCode: '06510',
    addressCountry: 'TR',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '11:30',
      closes: '21:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '13:00',
      closes: '21:00',
    },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Açık Alan Oturma',           value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Paket Servis',                value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Engelli Erişimli Oturma',    value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Köpek Kabul',                value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Mama Sandalyesi',            value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Ücretsiz Otopark',           value: true },
    { '@type': 'LocationFeatureSpecification', name: 'NFC Ödeme',                  value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Helal Yemek',                value: true },
  ],
  paymentAccepted: 'Kredi Kartı, Banka Kartı, NFC Mobil Ödeme',
  currenciesAccepted: 'TRY',
  sameAs: [],
} as const
