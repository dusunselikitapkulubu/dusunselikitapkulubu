// ============================================================
//  DÜŞÜNSELI KİTAP KULÜBÜ — İÇERİK DOSYASI
//  Bu dosyada tüm metinler, başlıklar ve veriler yer alır.
//  Tasarımı bozmadan sadece buradaki değerleri değiştirin.
// ============================================================

const ICERIK = {

  // ── Site Genel ──────────────────────────────────────────
  site: {
    ad:                 "Düşünseli Kitap Kulübü",
    instagram:          "https://instagram.com/dusunselikitapkulubu",
    instagramKullanici: "@dusunselikitapkulubu",
    telif:              "© 2026 Düşünseli Kitap Kulübü. Tüm hakları saklıdır.",
    sonGuncelleme:      "Son güncelleme: Mart 2026",
  },

  // ── Başvuru Sayfası ─────────────────────────────────────
  basvuru: {
    heroEtiket:   "Üyelik",
    heroBaslik:   "Kulübe\n<em>Başvur</em>",
    heroAciklama: "Düşünseli Kitap Kulübü'ne katılmak için aşağıdaki bilgileri okuyun. Başvuru formu aktif olduğunda buradan erişebilirsiniz.",

    // Üstteki turuncu rozet. Form açıldığında boş bırakın: rozet: ""
    rozet: "Başvurular Yakında Açılacak",

    // Koşullar — her madde ayrı satırda gösterilir
    kosullar: [
      "<strong>I.</strong> Kulübe üyelik başvurusu başvuru formu aracılığıyla yapılır. Reel ortamlarda yüz yüze yapılan buluşmalara katılabilmek ve kulüp üyesi olabilmek için başvuru formunun doldurulması gereklidir.",
      "<strong>II.</strong> Başvurular MODS tarafından incelenir ve uygun kontenjan bulunması halinde başvuru sahibi kulüp iletişim gruplarına eklenir. Güncel kulüp kontenjanı maksimum <strong>70 kişidir</strong>.",
      "<strong>III.</strong> Başvuru formu kulübün genişleme politikalarına göre MODS tarafından belirli dönemlerde kapatılıp açılabilir.",
      "<strong>IV.</strong> Her üyelik grubu için ayrı bir WhatsApp iletişim grubu bulunur. Kulübün temel iletişim platformu bu gruplardır. Gruplar şu şekilde bölümlenmiştir:",
    ],

    // Üyelik grupları — başvuru sayfasında kart olarak gösterilir
    uyelikGruplari: [
      {
        emoji:    "🟡",
        ad:       "Lobi",
        maddeler: [
          "Başvurusu onaylanmış fakat Salon Üyesi olma şartını henüz sağlayamamış katılımcılardan oluşur. Kulübe katılan her yeni üye Lobi grubundan giriş yapar.",
          "Salon Üyeliği şartını sağlamayan mevcut üyenin üyeliği de Lobi'ye düşürülür.",
          "Lobide kalma süresi azami <strong>3 aydır</strong>. Bu süre içinde herhangi bir okumaya katılmayan üye lobiden çıkarılır.",
          "Kendi isteğiyle ayrılan veya devamsızlık sebebiyle çıkarılan üye, tekrar katılmak isterse tüm başvuru aşamalarını yeniden tamamlamak durumundadır.",
        ],
      },
      {
        emoji:    "🟢",
        ad:       "Salon",
        maddeler: [
          "Kulüp okumalarının belirlendiği ve oylamaya sunulan konuların oylama ile karara bağlandığı, kulübün aktif katılımcı üyelerinden oluşan ana gruptur.",
          "Salon üyesi olmak için aşağıdaki şartlardan en az birini sağlamak gereklidir:", 
          "1. Üst üste 4 kitap buluşmasına katılmak.",
          "2. Son 6 kitap buluşmasından en az 20 katılım puanı almak.",
          "3. Son 10 kitap buluşmasından en az 40 katılım puanı almak.",
          "4. Mods üyesi olmak.",
          
          "Kontrol vakti: Her 5. buluşmadan sonra katılım değerlendirmesi yapılır ve yukarıdaki şartlardan en az birini sağlamayan üyelerin üyelik durumu, Lobi üyeliğine düşürülür. Katılım değerlendirmesi, ilk olarak 15. okumadan sonra yapılacaktır ve sonrasında, her 5 okumada bir olacak şekilde periyodik olarak tekrarlanacaktır.",
          "Üst üste 3 kitap buluşmasına katılmayan üyeler ise kontrol vaktini beklemeden Lobi grubuna alınır.",
          ],
      },
      {
        emoji:    "🔵",
        ad:       "MODS",
        aciklama: "Kulübün moderatör ekibidir. Kuralların uygulanması ve kulüp organizasyonunun yürütülmesinden sorumludur.",
      },
    ],

    altNot: "Sorularınız için <a href='https://instagram.com/dusunselikitapkulubu' target='_blank'><strong>Instagram</strong></a> hesabımızdan veya iletişim sayfasından bize ulaşabilirsiniz.",

    // Başvuru formu linki hazır olduğunda buraya ekleyin:
    formLinki:     "https://forms.gle/nJgkm3nTqjuS7SAQ7",   // Örnek: "https://forms.gle/abc123"
    formButonYazi: "Başvuru Formunu Doldur",
  },

  // ── Duyurular Sayfası ───────────────────────────────────
  duyurular: {
    heroEtiket:   "Haberler",
    heroBaslik:   "Duyuru<em>lar</em>",
    heroAciklama: "Kulüp toplantıları, kitap seçimleri ve etkinlikler hakkında güncel bilgiler.",

    // tip: "yeni" | "etkinlik" | "bilgi"
    liste: [
      
      {
        tip:    "bilgi",
        tarih:  "Süregelen",
        baslik: "Başvuru Formu Bilgisi",
        metin:  "Kulübe katılmak isteyenler için başvuru formu hazırlandı. Forma başvuru sayfasından ulaşabilirsiniz.",
      },
      {
        tip:    "bilgi",
        tarih:  "Mart 2026",
        baslik: "Web Sitemiz Yayında",
        metin:  "Düşünseli Kitap Kulübü'nün resmi web sitesi artık yayında. Duyurularımızı, kulüp kurallarımızı ve başvuru bilgilerini buradan takip edebilirsiniz.",
      },
    ],
  },

  // ── Kulüp Hakkında ───────────────────────────────────────
  hakkinda: {
    heroEtiket:   "Kulüp Hakkında",
    heroBaslik:   "Düşünseli\n<em>Kitap Kulübü</em>",
    heroAciklama: "Ortak okumalar, tartışmalar ve paylaşılan keşifler. Kitapları birlikte deneyimlemek için bir araya geliyoruz.",

    genelBilgi: [
      "Düşünseli Kitap Kulübü, ortak kitap okumaları yapmak ve bu kitaplar üzerine fiziksel mekânlarda fikir paylaşımında bulunmak amacıyla kurulmuştur.",
      "Her dönem <strong>Salection Kitap Seçimi</strong> yöntemiyle belirlenen üç kitabı birlikte okuyoruz. Üyeler kitapları önerir, puanlar ve en çok oyu alan kitapları birlikte tartışmak üzere bir araya gelir.",
      "Kulübün temel iletişim platformu WhatsApp gruplarıdır. Üyelik üç kategoriden oluşur: <strong>Lobi Üyeleri</strong>, <strong>Salon Üyeleri</strong> ve kulübü yöneten <strong>MODS</strong>.",
      "Kulüp üyelik formunu dolduranlar, kulüp kurallarını kabul etmiş sayılır."
      
    ],

    // SSS — görsel boş bırakılırsa gösterilmez
    sssGorsel: "assets/content/sss.png",
    sss: [
      {
        soru:  "Kulüp ne sıklıkla buluşuyor?",
        cevap: "Seçilen kitaplara göre değişmek kaydıyla ortalama 3-5 haftada bir.",
      },
      {
        soru:  "Buluşmalar online mı?",
        cevap: "Hayır, buluşmalar gerçek mekanlarda yüz yüze gerçekleşmektedir.",
      },
      {
        soru:  "Kulübe nasıl katılabilirim?",
        cevap: "Instagram sayfasından mesaj göndererek ulaşabilirsiniz.",
      },
      {
        soru:  "Kulüpte ne tür kitaplar okuyorsunuz?",
        cevap: "Kulüpte tür ve konu ayrımı yapmaksızın çok geniş bir portföyde, özenle seçilmiş kitaplar okumaktayız.",
      },
      {
        soru:  "Okunacak kitaplar nasıl belirleniyor?",
        cevap: "Okunacak kitaplar öneri ve oylama süreçlerinin ardından belirlenir. Kitap önerisi yapmak ve oylamaya katılmak ise kitap okumalarına asgari katılım şartına bağlanmıştır. Detaylı bilgi kulüp kurallarında belirtilmektedir.",
      },
      {
        soru:  "Toplantılara ilgili kitabı okumuş olarak mı katılmalıyım?",
        cevap: "Evet, toplantılara ilgili kitabı okumuş olarak katılımınız beklenmektedir.",
      },
      {
        soru:  "Kulübe katılım ücreti var mı?",
        cevap: "Hayır, herhangi bir katılım ücreti talep edilmemektedir.",
      },
      {
        soru:  "Bunların dışında bir sorunuz mu var?",
        // Link için format: [Gösterilecek Metin|sayfa-id]
        cevap: "O halde bize [İletişim|iletisim] sayfamızdan iletebilirsiniz.",
      },
    ],
  },

  // ── Kulüp Kuralları ─────────────────────────────────────
  kurallar: {
    bolumler: [
      {
        id:     "bolum-a",
        harf:   "A",
        baslik: "Kulüp Okumaları",
        icerik: [
          { tip: "paragraf", metin: "<strong>A1.</strong> Okumalar yaklaşık olarak ayda bir kitap okunacak şekilde planlanır; bu süre değişiklik gösterebilir." },
          { tip: "paragraf", metin: "<strong>A2.</strong> Üyelerden toplantılara ilgili kitabı okumuş olarak katılması beklenir. Kitabı tamamlayamayan üyelerin en az %70'ini okumuş olması beklenir. İlk kez katılan üyeler için bu şart göz ardı edilebilir." },
          { tip: "paragraf", metin: "<strong>A3.</strong> Toplantılar, olağanüstü haller dışında fiziksel mekânlarda gerçekleştirilir." },
          { tip: "paragraf", metin: "<strong>A4.</strong> Okunacak kitaplar, üyelerin önerileri doğrultusunda <strong>Salection Kitap Seçimi</strong> yöntemiyle belirlenir. Bir okuma dönemi üç kitaptan oluşur." },
        ],
        },
      
      {
        id:     "bolum-b",
        harf:   "B",
        baslik: "Salection Kitap Seçimi",
        icerik: [
          
              { tip: "paragraf", metin: "<strong>B1.</strong> Salection; Salihli ve İngilizce seçim anlamına gelen election kelimelerinden esinlenerek oluşturulmuş kulübe özgü bir kitap seçim sistemidir." },
              { tip: "paragraf", metin: "<strong>B2.</strong> Salection Kitap Seçimi, aday önerme ve puanlama süreçlerinden oluşur. Öneri hakkına sahip olanlara <strong>\"önermen\"</strong>, puanlama hakkına sahip olanlara <strong>\"puantör\"</strong> denir." },
              { tip: "paragraf", metin: "<strong>B3.</strong> Aday önerme ve puanlama süreçlerine katılım hakları, kitap toplantılarına katılım şartına bağlıdır." },
              { tip: "paragraf", metin: "<strong>B4.</strong> Önermen sayısına göre her önermen şu kadar kitap önerir:" },
              {
                tip:       "tablo",
                basliklar: ["Önermen Sayısı", "Önerilebilecek Kitap Sayısı"],
                satirlar: [
                  ["2 önermen",     "Her biri 6 kitap"],
                  ["3 önermen",     "Her biri 4 kitap"],
                  ["4–5 önermen",   "Her biri 3 kitap"],
                  ["6–12 önermen",  "Her biri 2 kitap"],
                  ["13–24 önermen", "Her biri 1 kitap"],
                  ["24'ten fazla",  "Her biri 1 kitap; kura ile 24 aday belirlenir"],
                ],
              },
              { tip: "paragraf", metin: "<strong>B5.</strong> Aday sayısı 10'a ulaşmamışsa, MODS eksik adayları önceki seçimlerde önerilmiş fakat seçilmemiş kitaplardan tamamlar." },
              { tip: "paragraf", metin: "<strong>B6.</strong> Önermenler, aday önerme süresi içinde önerdikleri kitapları geri çekebilir veya değiştirebilir. Süre dolduktan sonra adaylar kesinleşir." },
              { tip: "paragraf", metin: "<strong>B7.</strong> Aday önerme süreci açık yapılır. Aynı kitap farklı önermenler tarafından önerilirse ilk öneren önermenin önerisi olarak kayıt edilir. Kulüpte daha önce okunmuş bir kitap, okuma tarihinin üzerinden 5 tam yıl geçmeden yeniden önerilemez." },
              { tip: "paragraf", metin: "<strong>B8.</strong> Puanlama gizli ve kapalı yapılır. Süreç tamamlandıktan sonra sonuç tablosu paylaşılır. Süreç devam ederken oy bilgilerini açıklamak veya ima etmek yasaktır." },
              { tip: "paragraf", metin: "<strong>B9.</strong> Her puantör aşağıdaki puanları dağıtır. Her puan yalnızca bir kitaba verilebilir; tüm puanların dağıtılması zorunludur:" },
              { tip: "puanlar", puanlar: [1, 2, 3, 4, 5, 6, 7, 8, 10, 12] },
              { tip: "paragraf", metin: "<strong>B10. Eşitlik Durumu:</strong> İlk üç kitap belirlenemeyecek şekilde eşitlik oluşması halinde sırasıyla şu adımlar izlenir: tam puan (12) sayısı → 10 puan sayısı → önermenin geçmişteki seçilme sayısı → yazarın kulüpte okunma sayısı → özgün ilk basım yılı → yazarın soyadının alfabetik sırası." },
              { tip: "paragraf", metin: "<strong>B11.</strong> Aday önerme süresi ve puanlama süresi her biri en az 5 tam gündür. Vaktinde girilmeyen adaylar ve puanlar geçersiz sayılır." },
              { tip: "paragraf", metin: "<strong>B12.</strong> Aday önerme süreci aynı zamanda kitap tanıtım sürecidir. Önermenler kendi ve başkalarının önerilerini destekleyebilir; ancak başkasının önerisi hakkında olumsuz propaganda yapmak yasaktır." },
        ],
      },

      {
        id:     "bolum-c",
        harf:   "C",
        baslik: "Okuma Toplantıları",
        icerik: [
          { tip: "paragraf", metin: "<strong>C1.</strong> Kitabı öneren üye, o toplantının doğal okuma moderatörüdür. Oturumun zamanlamasını ve içeriğini belirler, süreci yönetir ve katılımcıları önceden bilgilendirir." },
          { tip: "paragraf", metin: "<strong>C2.</strong> Okuma moderatörü, söz hakkının dengeli ve adil dağıtılmasını gözetir; tartışmanın kitap ekseninde kalmasını sağlar." },
          { tip: "paragraf", metin: "<strong>C3.</strong> Her katılımcı, diğer üyelerin görüşlerine saygılı olmak ve yapıcı bir iletişim ortamını desteklemekle yükümlüdür." },
          { tip: "paragraf", metin: "<strong>C4.</strong> Kendi önerdiği kitabın toplantısına katılmayan üyenin elde ettiği ilk öneri hakkı elinden alınır." },
        ],
      },

      //İÇERİK GİZLENDİ.
      {
        gizli:true,
        id:     "bolum-b",
        harf:   "B",
        baslik: "Kulüp Yönetimi (MODS) ve Seçimler",
        icerik: [
          { tip: "paragraf", metin: "<strong>B1.</strong> MODS, kulübün yönetim organıdır; dört üyeden oluşur. İkisi daimi kurucu üye, diğer ikisi ise bir yıllık görev süresi için seçilmiş üyelerdir. Görev süresi 1 Ağustos'ta başlar ve ertesi yıl 1 Ağustos'a kadar devam eder." },
          { tip: "paragraf", metin: "<strong>B2.</strong> MODS seçimleri her yıl temmuz ayında yapılır. Aday olabilmek için adaylık başlangıç tarihinde Salon üyesi olmak, son bir yılda en az 6 buluşmaya katılmış olmak ve görev süresi boyunca buluşmaların en az %80'ine katılmayı taahhüt etmek gerekmektedir." },
          { tip: "paragraf", metin: "<strong>B3.</strong> Üç veya daha fazla adayın olduğu seçimlerde 1, 2 ve 5 puanları dağıtılır; en çok puan alan iki aday MODS üyesi seçilir. İki veya daha az aday varsa Salon üyelerinin katıldığı Evet/Hayır oylaması yapılır; en az %66 \"Evet\" oyu alan aday MODS'a dahil olur." },
          { tip: "paragraf", metin: "<strong>B4.</strong> Kulüp moderatörlüğü gönüllülük esasına dayalıdır. Moderatör, bir ay önceden haber vermek kaydıyla görevini bırakabilir. Görevini erken bırakan moderatör üç yıl süreyle tekrar aday olamaz." },
          { tip: "paragraf", metin: "<strong>B5.</strong> Görevini yerine getirmeyen moderatörler kurucu üyeler tarafından uyarılır. Üç kez uyarılan moderatörün görevi sona erdirilir; bu kişi de üç yıl süreyle tekrar aday olamaz." },
        ],
      },

      //İÇERİK GİZLENDİ.
      {
        gizli:true,
        id:     "bolum-c",
        harf:   "C",
        baslik: "Ek Etkinlikler ve Yönetmen Sineması",
        icerik: [
          { tip: "paragraf", metin: "<strong>C1.</strong> Kitap okumalarının yanı sıra film izleme ve yorumlama, tiyatro, konser, sportif faaliyetler ve benzeri ek etkinlikler gerçekleştirilebilir. Etkinliklerin türü ve sıklığı MODS tarafından belirlenir." },
          {
            tip:    "altbolum",
            etiket: "C2 — Yönetmen Sineması",
            icerik: [
              { tip: "paragraf", metin: "Yönetmen ve ilgili üç filmi birlikte paket halinde önerilir; oylamayla en çok puan alan yönetmen seçilir. Seçilen yönetmen iki yıl boyunca tekrar aday gösterilemez." },
              { tip: "paragraf", metin: "Aday sayısına göre dağıtılacak puanlar:" },
              {
                tip:       "tablo",
                basliklar: ["Aday Sayısı", "Dağıtılacak Puanlar"],
                satirlar: [
                  ["2 aday",   "1, 2"],
                  ["3 aday",   "1, 2, 3"],
                  ["4 aday",   "1, 2, 3, 5"],
                  ["5 aday",   "1, 2, 3, 5, 7"],
                  ["6 aday",   "1, 2, 3, 4, 6, 8"],
                  ["7 aday",   "1, 2, 3, 4, 5, 7, 9"],
                  ["8 aday",   "1, 2, 3, 4, 5, 6, 8, 10"],
                  ["9 aday",   "1, 2, 3, 4, 5, 6, 7, 9, 11"],
                  ["10+ aday", "1, 2, 3, 4, 5, 6, 7, 8, 10, 12"],
                ],
              },
            ],
          },
        ],
      },
    ],
  },

  // ── Etkinlikler Sayfası ─────────────────────────────────
  etkinlikler: {
    heroEtiket:   "Program",
    heroBaslik:   "Etkinlikler\nve <em>Buluşmalar</em>",
    heroAciklama: "Okuma toplantıları, film geceleri ve diğer kulüp etkinlikleri.",

    altBaslik: "Yaklaşan Etkinlikler",

    // Öne çıkan etkinlik. Kaldırmak için: one: null
    one: {
      kategori:  "Kitap Toplantısı",
      baslik:    "Nisan Okuma Toplantısı",
      aciklama:  "Nisan ayında seçilecek kitabımızı tartışmak üzere bir araya geliyoruz. Okunacak kitap duyurulacak...",
      etiketler: ["Okuma", "Tartışma","Etkinlik"],
      linkMetin: "Detaylar",    // Boş bırakılırsa buton gösterilmez
      yazar:     "MODS",
      tarih:     "Nisan 2026",
      sure:      "",
      gorsel:    "assets/etkinlikler/read.png",   // Boş bırakılırsa renkli arka plan gösterilir
    },
    
    //İÇERİKLER "GİZLİ:TRUE" KOMUTUYLA GİZLENDİ. 
    // Etkinlik kartları. renk: "c1"..."c6" (boş bırakırsanız otomatik atanır)
    kartlar: [
      {
        gizli: true,
        kategori: "Salection",
        baslik:   "Yeni Dönem Kitap Seçimi",
        aciklama: "Salection ile bir sonraki dönemin üç kitabını belirliyoruz. Öneri ve puanlama süreci yakında başlıyor.",
        yazar:    "MODS",
        tarih:    "Mayıs 2026",
        sure:     "",
        gorsel:   "assets/etkinlikler/read.png",
      },
      {
        gizli: true,
        kategori: "Yönetmen Sineması",
        baslik:   "Film Gecesi",
        aciklama: "Seçilen yönetmenin filmlerini birlikte izleyip tartışıyoruz. Yer ve saat duyurulacaktır.",
        yazar:    "MODS",
        tarih:    "Yakında",
        sure:     "",
        gorsel:   "assets/etkinlikler/read.png",
      },
      {
        gizli: true,
        kategori: "Sosyal",
        baslik:   "Yıl Sonu Buluşması",
        aciklama: "Yılın son etkinliğinde tüm üyelerle bir araya geliyoruz. Detaylar ilerleyen haftalarda paylaşılacak.",
        yazar:    "MODS",
        tarih:    "Aralık 2026",
        sure:     "",
        renk:     "c5",
      },
    ],
  },

  // ── İletişim Sayfası ────────────────────────────────────
  iletisim: {
    heroEtiket:   "Bize Ulaşın",
    heroBaslik:   "İletişim",
    heroAciklama: "Sorularınız, önerileriniz veya kulüp hakkında merak ettikleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.",

    kartlar: [
      { etiket: "Instagram", deger: "@dusunselikitapkulubu", link: "https://instagram.com/dusunselikitapkulubu" },
      { etiket: "Platform",  deger: "WhatsApp Grupları",     link: "" },
    ],

    not: "Kulüple ilgili tüm iletişim Instagram üzerinden yürütülmektedir. Başvuru, duyuru ve toplantı bilgilerine de buradan ulaşabilirsiniz.",
  },

};
