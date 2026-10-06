import type { Dict } from "./types";
import { CONTACT_EMAIL } from "./site";

export const tr: Dict = {
  meta: {
    title: "dxpane — her TV'yi canlı bir menüye dönüştürün",
    description:
      "Kafenizin gününü iPhone'dan planlayın. Kahvaltı, öğle, akşam — ekranınız kendiliğinden değişir. TV'ye hiçbir şey kurulmaz.",
  },
  nav: { how: "Nasıl çalışır", faq: "SSS", support: "Destek", switchTo: "English" },
  hero: {
    title: "Her TV'yi canlı bir menüye dönüştürün.",
    lead: "Gününüzü iPhone'dan planlayın. Kahvaltı, öğle, akşam — ekranınız kendiliğinden değişir. TV'ye hiçbir şey kurulmaz.",
    badge: "Yakında App Store'da",
    phoneBlock: "Öğle menüsü",
    play: "Oynat",
  },
  screens: [
    { kicker: "Günaydın", title: "Kahvaltı", items: [["Simit & çay", "₺90"], ["Flat white", "₺110"], ["Omlet", "₺160"]] },
    { kicker: "11:00 – 15:00", title: "Öğle menüsü", items: [["Bowl + içecek", "₺180"], ["Dürüm + ayran", "₺150"], ["Günün çorbası", "₺95"]] },
    { kicker: "Bu akşam", title: "Akşam", items: [["Cheesecake", "₺140"], ["Mocktail", "₺120"], ["Filtre kahve", "₺85"]] },
  ],
  connected: "dxpane'e bağlandı",
  story: {
    label: "Nasıl çalışır",
    title: "Üç adım. Hiçbir kurulum yok.",
    steps: [
      { label: "1 · Tara", title: "TV'nizi saniyeler içinde bulur.", text: "Aynı Wi-Fi, tek dokunuş. TV'ye uygulama, çubuk ya da kablo yok — elinizdeki ekran yeterli." },
      { label: "2 · Planla", title: "Kahvaltı, öğle, akşam.", text: "Bir şablon seçin, fiyatlarınızı yazın, saatleri belirleyin. Bütün gününüz bir dakikada hazır." },
      { label: "3 · Oynar", title: "Gün boyu, kendiliğinden.", text: "Menü saat 11:00'de kendiliğinden değişir. Telefonunuz cebinize geri dönebilir." },
    ],
    plan: [
      { time: "07:30", name: "Kahvaltı" },
      { time: "11:00", name: "Öğle menüsü" },
      { time: "18:00", name: "Akşam" },
    ],
  },
  faq: {
    title: "Sorular",
    items: [
      { q: "Hangi TV'ler çalışır?", a: "Wi-Fi üzerinden paylaşılan medyayı oynatabilen (DLNA) çoğu akıllı TV ve birçok monitör. Uygulama uyumlu ekranları sizin için bulur — ödemeden önce ücretsiz deneyin." },
      { q: "TV'ye bir şey kuruluyor mu?", a: "Hayır. Uygulama, çubuk ya da kablo yok. iPhone'unuz TV'ye ne oynatacağını söyler; TV içeriği doğrudan buluttan alır." },
      { q: "Telefonum açık kalmalı mı?", a: "Hayır. Gününüz ekrana gönderildikten sonra kendi kendine oynar ve belirlediğiniz saatlerde menüler arasında geçiş yapar." },
      { q: "Ücreti nedir?", a: "Apple üzerinden faturalanan tek ve basit bir abonelik, 7 gün ücretsiz deneme ile. Fiyat lansmanda duyurulacak." },
    ],
  },
  footer: { privacy: "Gizlilik", terms: "Kullanım Koşulları", support: "Destek", rights: "Tüm hakları saklıdır." },
  privacy: {
    title: "Gizlilik Politikası",
    updated: "Son güncelleme: 6 Ekim 2026",
    intro:
      "dxpane, bir TV'yi iPhone'unuzdan yönettiğiniz dijital bir menüye dönüştürür. Yalnızca hizmetin çalışması için gerekenleri topluyoruz. Verilerinizi satmıyor, reklam göstermiyor ve sizi uygulamalar ya da web siteleri arasında izlemiyoruz.",
    sections: [
      {
        heading: "Topladığımız bilgiler",
        body: [
          "Hesap: ilk açılışta oluşturulan, rastgele bir cihaz anahtarıyla tanımlanan anonim bir hesap. Daha sonra Apple ile giriş yaparsanız, Apple'ın verdiği kimliği ve paylaşmayı seçerseniz e-posta adresini alırız.",
          "İçeriğiniz: uygulamada oluşturduğunuz işletmeler, ekranlar, menüler, fiyatlar, görseller ve günlük planlar.",
          "Ekranlar: eklediğiniz her TV'nin adı ve teknik kimliği; uygulamanın onu ağınızda yeniden bulabilmesi için.",
          "Abonelik durumu: deneme ya da aboneliğinizin aktif olup olmadığı (Apple'ın bildirdiği şekilde). Ödeme bilgilerinizi hiçbir zaman görmeyiz.",
          "Teknik kayıtlar: hizmetin güvenli ve güvenilir kalması için sınırlı süre saklanan istek kayıtları (zaman, uç nokta, hata kodları).",
        ],
      },
      {
        heading: "Nasıl kullanıyoruz",
        body: [
          "TV'nizin oynattığı videoları oluşturmak, günlük planınızı çalıştırmak, destek vermek ve hizmeti güvende tutmak için. Verilerinizi reklam ya da profilleme için kullanmayız.",
        ],
      },
      {
        heading: "Nerede saklanıyor",
        body: [
          "Sunucularımız Avrupa Birliği'nde (Frankfurt) Google Cloud üzerinde çalışır. TV'lerinizin oynattığı videolar Cloudflare R2'de saklanır. Satın almaları Apple yürütür. Bu sağlayıcılar verileri bizim adımıza, kendi veri işleme koşulları çerçevesinde işler.",
        ],
      },
      {
        heading: "Ne kadar süre saklıyoruz",
        body: [
          "Günlük videolar birkaç gün sonra otomatik olarak silinir. Hesabınız ve içeriğiniz hesabınız var olduğu sürece saklanır; hesabınızı uygulamadan sildiğinizde bunları sileriz.",
        ],
      },
      {
        heading: "Haklarınız",
        body: [
          "Bulunduğunuz yere göre (örneğin KVKK ya da GDPR kapsamında) verilerinize erişmeyi, düzeltilmesini, aktarılmasını ya da silinmesini isteyebilir ve işlenmesine itiraz edebilirsiniz. Hesabınızı istediğiniz zaman uygulamadan silebilir ya da bize yazabilirsiniz.",
        ],
      },
      {
        heading: "Bu web sitesi",
        body: ["dxpane.com çerez, analiz aracı ya da üçüncü taraf izleyici kullanmaz."],
      },
      {
        heading: "Çocuklar",
        body: ["dxpane işletmelere yönelik bir araçtır ve çocuklara yönelik değildir."],
      },
      {
        heading: "İletişim",
        body: [`Sorular ve talepler: ${CONTACT_EMAIL}. Bu politikayı değiştirirsek yukarıdaki tarihi güncelleriz.`],
      },
    ],
  },
  terms: {
    title: "Kullanım Koşulları",
    updated: "Son güncelleme: 6 Ekim 2026",
    intro: "Bu koşullar dxpane uygulamasını ve hizmetini kullandığınızda geçerlidir. dxpane'i kullanarak bunları kabul etmiş olursunuz.",
    sections: [
      {
        heading: "Hizmet",
        body: [
          "dxpane, menü ve kampanyaları iPhone'unuzda tasarlamanızı ve aynı ağdaki uyumlu bir TV ya da monitörde oynatmanızı sağlar. TV'ye hiçbir şey kurulmaz. Uyumluluk TV'nize ve ağınıza bağlıdır; ekranlarınızın çalıştığını ücretsiz deneme ile doğrulayın.",
        ],
      },
      {
        heading: "Abonelik ve deneme",
        body: [
          "dxpane, App Store üzerinden satın alınan, otomatik yenilenen bir abonelik olarak sunulur; yeni aboneler için 7 gün ücretsiz deneme vardır. Ödeme Apple kimliğinizden alınır; abonelik, dönem bitmeden en az 24 saat önce iptal edilmezse yenilenir. Aboneliği Apple kimliği ayarlarınızdan yönetebilir ya da iptal edebilirsiniz. Abonelik sona erdiğinde yeni planlar oynatılmaz.",
          "Uygulama için Apple'ın Standart Lisans Sözleşmesi (EULA) da geçerlidir.",
        ],
      },
      {
        heading: "İçeriğiniz",
        body: [
          "Eklediğiniz metin, fiyat ve görsellerin sahibi sizsiniz ve bunlardan siz sorumlusunuz — fiyatların doğruluğu ve yüklediğiniz görselleri kullanma hakkınızın olması dahil. İçeriğinizi yalnızca hizmeti sunmak için işlememize izin verirsiniz. dxpane'i hukuka aykırı, yanıltıcı ya da saldırgan içerik için kullanmayın.",
        ],
      },
      {
        heading: "Erişilebilirlik",
        body: [
          "dxpane'i çalışır tutmak için çok çalışıyoruz; ancak hizmet \"olduğu gibi\" sunulur ve kesintisiz olacağını ya da her TV'nin destekleneceğini garanti edemeyiz. Yasaların izin verdiği ölçüde, kaybedilen satışlar gibi dolaylı zararlardan sorumlu değiliz.",
        ],
      },
      {
        heading: "Değişiklikler ve sona erme",
        body: [
          "Bu koşulları ya da hizmeti güncelleyebiliriz; önemli değişiklikler uygulamada duyurulur. dxpane'i kullanmayı istediğiniz zaman bırakabilir ve hesabınızı silebilirsiniz.",
        ],
      },
      {
        heading: "İletişim",
        body: [`${CONTACT_EMAIL}`],
      },
    ],
  },
  support: {
    title: "Destek",
    updated: "Genellikle bir iş günü içinde yanıt veriyoruz.",
    intro: "Bir şey çalışmıyor mu, ya da aboneliğinizle ilgili bir sorunuz mu var? Yardım etmek için buradayız.",
    contactLabel: "Destek'e e-posta gönder",
    sections: [
      {
        heading: "Uygulama TV'mi bulamıyor",
        body: [
          "iPhone'unuzun ve TV'nin aynı Wi-Fi ağında (misafir ağı değil) olduğundan, TV'nin açık olduğundan ve TV ayarlarında medya paylaşımının (DLNA / \"ekran paylaşımı\" / medya oynatıcı) etkin olduğundan emin olun. Ardından yeniden tarayın.",
        ],
      },
      {
        heading: "TV oynatmayı durdurdu",
        body: [
          "TV kapandıysa ya da elektrik kesildiyse dxpane'i açın ve ekranda Oynat'a dokunun — gününüz olması gereken yerden devam eder.",
        ],
      },
      {
        heading: "Aboneliği yönetme ya da iptal etme",
        body: [
          "Abonelikleri Apple yönetir: Ayarlar → adınız → Abonelikler → dxpane. İade talepleri reportaproblem.apple.com üzerinden Apple'a yapılır.",
        ],
      },
      {
        heading: "Hesabı silme",
        body: ["Uygulamada: Ayarlar → Hesap → Hesabı sil. Bu işlem hesabınızı, ekranlarınızı ve içeriğinizi kaldırır."],
      },
    ],
  },
};
