// ============================================================
//  DÜŞÜNSELI KİTAP KULÜBÜ — İÇERİK DOSYASI
//  Bu dosyada tüm metinler, başlıklar ve veriler yer alır.
//  Tasarımı bozmadan sadece buradaki değerleri değiştirin.
// ============================================================

const ICERIK = {

  // ── Site Genel ──────────────────────────────────────────
  site: {
    ad:        "Düşünseli Kitap Kulübü",
    instagram: "https://instagram.com/dusunselikitapkulubu",
    instagramKullanici: "@dusunselikitapkulubu",
    telif:     "© 2026 Düşünseli Kitap Kulübü. Tüm hakları saklıdır.",
    sonGuncelleme: "Son güncelleme: Mart 2026",
  },

  // ── Başvuru Sayfası ─────────────────────────────────────
  basvuru: {
    heroEtiket:  "Üyelik",
    heroBaslik:  "Kulübe\n<em>Başvur</em>",
    heroAciklama: "Düşünseli Kitap Kulübü'ne katılmak için aşağıdaki bilgileri okuyun. Başvuru formu aktif olduğunda buradan erişebilirsiniz.",

    rozet: "Başvurular Yakında Açılacak",  // Üstteki turuncu rozet. Açıldığında silin veya değiştirin.

    bilgiler: [
      {
        baslik: "Üyelik Koşulları",
        paragraflar: [
          "Kulübe yeni katılan üyelerden katılım bedeli alınmaz; ancak kulübün belirlediği STK'lardan birine belirlenen tutarda bağış yapılması gerekmektedir.",
          "Bağış dekontu MODS'a iletilmelidir; aksi takdirde başvuru geçersiz sayılır.",
          "<strong>Kontenjan:</strong> Güncel kulüp kontenjanı maksimum 70 kişidir. Başvurular uygun kontenjan bulunması halinde onaylanır.",
          "<strong>Form:</strong> Başvuru formu, kulübün politikaları gereğince belirli dönemlerde MODS tarafından kapatılıp açılabilir.",
        ]
      }
    ],

    altNot: "Sorularınız için Instagram hesabımızdan veya iletişim sayfasından bize ulaşabilirsiniz.",

    // Başvuru formu linki hazır olduğunda buraya ekleyin:
    formLinki: "",  // Örnek: "https://forms.gle/abc123"
    formButonYazi: "Başvuru Formunu Doldur",
  },

  // ── Duyurular Sayfası ───────────────────────────────────
  duyurular: {
    heroEtiket:  "Haberler",
    heroBaslik:  "Duyurular\nve <em>Etkinlikler</em>",
    heroAciklama: "Kulüp toplantıları, kitap seçimleri ve etkinlikler hakkında güncel bilgiler.",

    // Yeni duyuru eklemek için listeye bir obje daha ekleyin.
    // tip: "yeni" | "etkinlik" | "bilgi"
    liste: [
      {
        tip:    "yeni",
        tarih:  "Mart 2026",
        baslik: "Web Sitemiz Yayında",
        metin:  "Düşünseli Kitap Kulübü'nün resmi web sitesi artık yayında. Duyurularımızı, kulüp kurallarımızı ve başvuru bilgilerini buradan takip edebilirsiniz.",
      },
      {
        tip:    "etkinlik",
        tarih:  "Yakında",
        baslik: "Salection Kitap Seçimi — Yeni Dönem",
        metin:  "Yeni okuma döneminin kitap seçim süreci yakında başlıyor. Öneri ve puanlama tarihleri duyurulacaktır.",
      },
      {
        tip:    "bilgi",
        tarih:  "Süregelen",
        baslik: "Başvuru Formu Bilgisi",
        metin:  "Kulübe katılmak isteyenler için başvuru formu hazırlanmaktadır. Form hazır olduğunda bu sayfadan ve Instagram hesabımızdan duyurulacaktır.",
      },
    ],
  },

  // ── Kulüp Hakkında — Genel Bilgi ────────────────────────
  hakkinda: {
    heroEtiket:  "Kulüp Hakkında",
    heroBaslik:  "Düşünseli\n<em>Kitap Kulübü</em>",
    heroAciklama: "Ortak okumalar, tartışmalar ve paylaşılan keşifler. Kitapları birlikte deneyimlemek için bir araya geliyoruz.",

    genelBilgi: [
      "Düşünseli Kitap Kulübü, ortak kitap okumaları yapmak ve bu kitaplar üzerine fiziksel mekânlarda fikir paylaşımında bulunmak amacıyla kurulmuştur.",
      "Her dönem <strong>Salection Kitap Seçimi</strong> yöntemiyle belirlenen üç kitabı birlikte okuyoruz. Üyeler kitapları önerir, puanlar ve en çok oyu alan kitapları birlikte tartışmak üzere bir araya gelir.",
      "Kulübün temel iletişim platformu WhatsApp gruplarıdır. Üyelik üç kategoriden oluşur: <strong>Lobi Üyeleri</strong>, <strong>Salon Üyeleri</strong> ve kulübü yöneten <strong>MODS</strong>.",
    ],
  },

  // ── Kulüp Kuralları ─────────────────────────────────────
  kurallar: {
    bolumler: [
      {
        id:     "bolum-a",
        harf:   "A",
        baslik: "Genel Bilgiler ve Kurallar",
        icerik: [
          { tip: "paragraf", metin: "<strong>A1.</strong> Düşünseli Kitap Kulübü, ortak kitap okumaları yapmak ve bu kitaplar üzerine fiziksel mekânlarda fikir paylaşımında bulunmak amacıyla kurulmuştur." },
          { tip: "paragraf", metin: "<strong>A2.</strong> Kulübün Instagram adresi: <strong>@dusunselikitapkulubu</strong>" },
          { tip: "paragraf", metin: "<strong>A3.</strong> Kulüp üyelik formunu dolduranlar, kulüp kurallarını kabul etmiş sayılır. (Form daha sonra yüklenecek)" },
        ],
      },

      {
        id:     "bolum-b",
        harf:   "B",
        baslik: "Kulüp Okumaları ve Kitap Seçimi",
        icerik: [
          { tip: "paragraf", metin: "<strong>B1.</strong> Okumalar yaklaşık olarak ayda bir kitap okunacak şekilde planlanır; bu süre değişiklik gösterebilir." },
          { tip: "paragraf", metin: "<strong>B2.</strong> Üyelerden toplantılara ilgili kitabı okumuş olarak katılması beklenir. Kitabı tamamlayamayan üyelerin en az %70'ini okumuş olması beklenir. İlk kez katılan üyeler için bu şart göz ardı edilebilir." },
          { tip: "paragraf", metin: "<strong>B3.</strong> Toplantılar, olağanüstü haller dışında fiziksel mekânlarda gerçekleştirilir." },
          { tip: "paragraf", metin: "<strong>B4.</strong> Okunacak kitaplar, üyelerin önerileri doğrultusunda <strong>Salection Kitap Seçimi</strong> yöntemiyle belirlenir. Bir okuma dönemi üç kitaptan oluşur." },

          {
            tip: "altbolum",
            etiket: "B5 — Salection Kitap Seçimi",
            icerik: [
              { tip: "paragraf", metin: "<strong>B5.1.</strong> Salection; Salihli ve İngilizce seçim anlamına gelen election kelimelerinden esinlenerek oluşturulmuş kulübe özgü bir kitap seçim sistemidir." },
              { tip: "paragraf", metin: "<strong>B5.2.</strong> Salection Kitap Seçimi, aday önerme ve puanlama süreçlerinden oluşur. Öneri hakkına sahip olanlara <strong>\"önermen\"</strong>, puanlama hakkına sahip olanlara <strong>\"puantör\"</strong> denir." },
              { tip: "paragraf", metin: "<strong>B5.3.</strong> Aday önerme ve puanlama süreçlerine katılım hakları, kitap toplantılarına katılım şartına bağlıdır." },
              { tip: "paragraf", metin: "<strong>B5.4.</strong> Önermen sayısına göre her önermen şu kadar kitap önerir:" },
              {
                tip: "tablo",
                basliklar: ["Önermen Sayısı", "Önerilebilecek Kitap Sayısı"],
                satirlar: [
                  ["2 önermen",      "Her biri 6 kitap"],
                  ["3 önermen",      "Her biri 4 kitap"],
                  ["4–5 önermen",    "Her biri 3 kitap"],
                  ["6–12 önermen",   "Her biri 2 kitap"],
                  ["13–24 önermen",  "Her biri 1 kitap"],
                  ["24'ten fazla",   "Her biri 1 kitap; kura ile 24 aday belirlenir"],
                ],
              },
              { tip: "paragraf", metin: "<strong>B5.5.</strong> Aday sayısı 10'a ulaşmamışsa, MODS eksik adayları önceki seçimlerde önerilmiş fakat seçilmemiş kitaplardan tamamlar." },
              { tip: "paragraf", metin: "<strong>B5.6.</strong> Önermenler, aday önerme süresi içinde önerdikleri kitapları geri çekebilir veya değiştirebilir. Süre dolduktan sonra adaylar kesinleşir." },
              { tip: "paragraf", metin: "<strong>B5.7.</strong> Aday önerme süreci açık yapılır. Aynı kitap farklı önermenler tarafından önerilirse ilk öneren önermenin önerisi olarak kayıt edilir. Kulüpte daha önce okunmuş bir kitap, okuma tarihinin üzerinden 5 tam yıl geçmeden yeniden önerilemez." },
              { tip: "paragraf", metin: "<strong>B5.8.</strong> Puanlama gizli ve kapalı yapılır. Süreç tamamlandıktan sonra sonuç tablosu paylaşılır. Süreç devam ederken oy bilgilerini açıklamak veya ima etmek yasaktır." },
              { tip: "paragraf", metin: "<strong>B5.9.</strong> Her puantör aşağıdaki puanları dağıtır. Her puan yalnızca bir kitaba verilebilir; tüm puanların dağıtılması zorunludur:" },
              { tip: "puanlar", puanlar: [1, 2, 3, 4, 5, 6, 7, 8, 10, 12] },
              { tip: "paragraf", metin: "<strong>B5.10. Eşitlik Durumu:</strong> İlk üç kitap belirlenemeyecek şekilde eşitlik oluşması halinde sırasıyla şu adımlar izlenir: tam puan (12) sayısı → 10 puan sayısı → önermenin geçmişteki seçilme sayısı → yazarın kulüpte okunma sayısı → özgün ilk basım yılı → yazarın soyadının alfabetik sırası." },
            ],
          },

          { tip: "paragraf", metin: "<strong>B6.</strong> Aday önerme süresi ve puanlama süresi her biri en az 5 tam gündür. Vaktinde girilmeyen adaylar ve puanlar geçersiz sayılır." },
          { tip: "paragraf", metin: "<strong>B7.</strong> Aday önerme süreci aynı zamanda kitap tanıtım sürecidir. Önermenler kendi ve başkalarının önerilerini destekleyebilir; ancak başkasının önerisi hakkında olumsuz propaganda yapmak yasaktır." },

          {
            tip: "altbolum",
            etiket: "B8 — Okuma Toplantıları",
            icerik: [
              { tip: "paragraf", metin: "<strong>B8.1.</strong> Kitabı öneren üye, o toplantının doğal okuma moderatörüdür. Oturumun zamanlamasını ve içeriğini belirler, süreci yönetir ve katılımcıları önceden bilgilendirir." },
              { tip: "paragraf", metin: "<strong>B8.2.</strong> Okuma moderatörü, söz hakkının dengeli ve adil dağıtılmasını gözetir; tartışmanın kitap ekseninde kalmasını sağlar." },
              { tip: "paragraf", metin: "<strong>B8.3.</strong> Her katılımcı, diğer üyelerin görüşlerine saygılı olmak ve yapıcı bir iletişim ortamını desteklemekle yükümlüdür." },
              { tip: "paragraf", metin: "<strong>B8.4.</strong> Kendi önerdiği kitabın toplantısına katılmayan üyenin elde ettiği ilk öneri hakkı elinden alınır." },
            ],
          },
        ],
      },

      {
        id:     "bolum-c",
        harf:   "C",
        baslik: "Üyelik Grupları ve Katılım",
        icerik: [
          { tip: "paragraf", metin: "<strong>C1.</strong> Kulübe üyelik başvurusu, başvuru formu aracılığıyla yapılır. Fiziksel buluşmalara katılabilmek için başvuru formunun doldurulması zorunludur." },
          { tip: "paragraf", metin: "<strong>C2.</strong> Kulübe yeni katılan üyelerden katılım bedeli alınmaz; ancak kulübün belirlediği STK'lardan birine belirlenen tutarda bağış yapılması gerekmektedir. Bağış dekontu MODS'a iletilmelidir; aksi takdirde başvuru geçersiz sayılır." },
          { tip: "paragraf", metin: "<strong>C3.</strong> Başvurular MODS tarafından incelenir ve uygun kontenjan bulunması halinde üye iletişim gruplarına eklenir. Güncel kulüp kontenjanı maksimum 70 kişidir." },
          { tip: "paragraf", metin: "<strong>C4.</strong> Başvuru formu, kulübün politikaları gereğince belirli dönemlerde MODS tarafından kapatılıp açılabilir." },
          { tip: "paragraf", metin: "<strong>C5.</strong> Üyelik grupları üç tanedir: <strong>Lobi Üyeleri</strong>, <strong>Salon Üyeleri</strong> ve <strong>MODS Üyeleri</strong>. Kulübün temel iletişim platformu WhatsApp gruplarıdır." },

          {
            tip: "altbolum",
            etiket: "C6 — Lobi Üyeleri",
            icerik: [
              { tip: "paragraf", metin: "Başvurusu onaylanmış ancak Salon üyeliği şartını henüz sağlayamamış üyelerdir. Lobide kalma süresi en fazla 3 aydır; bu süre içinde herhangi bir okumaya katılmayan üye lobiden çıkarılır. Tekrar katılmak isteyen üyenin tüm başvuru aşamalarını yeniden tamamlaması gerekir." },
            ],
          },

          {
            tip: "altbolum",
            etiket: "C7 — Salon Üyeleri",
            icerik: [
              { tip: "paragraf", metin: "Kulübün aktif katılımcı üyelerinden oluşan ana gruptur. Salon üyesi olabilmek için aşağıdaki şartlardan <strong>en az birini</strong> sağlamak gerekir:" },
              {
                tip: "tablo",
                basliklar: ["Şart", "Açıklama"],
                satirlar: [
                  ["(a)", "Üst üste 4 kitap buluşmasına katılmak"],
                  ["(b)", "Son 6 buluşmadan en az 20 katılım puanı almak"],
                  ["(c)", "Son 10 buluşmadan en az 40 katılım puanı almak"],
                  ["(d)", "MODS üyesi olmak"],
                ],
              },
              { tip: "paragraf", metin: "Her 5. buluşmadan sonra katılım değerlendirmesi yapılır. Şartları sağlamayan üyelerin Salon üyeliği Lobi'ye düşürülür. Üst üste 3 buluşmaya katılmayanlar değerlendirmeyi beklemeden Lobi'ye alınır." },
            ],
          },

          {
            tip: "altbolum",
            etiket: "C8 — MODS Üyeleri",
            icerik: [
              { tip: "paragraf", metin: "Kulüp moderatörleri; kural koyma, uygulama ve kulübün genel yönetiminden sorumludur." },
            ],
          },

          {
            tip: "altbolum",
            etiket: "C9 — Katılım Puanları",
            icerik: [
              {
                tip: "tablo",
                basliklar: ["Etkinlik", "Tam Katılım", "En Az Yarısına Katılım"],
                satirlar: [
                  ["Kitap: Ana Okuma",   "5 puan",   "2,5 puan"],
                  ["Yönetmen Sineması",  "3 puan",   "1,5 puan"],
                ],
              },
              { tip: "paragraf", metin: "10 kişiden az katılımlı etkinliklerde tam katılım sağlayanlara +1 bonus puan verilir." },
            ],
          },
        ],
      },

      {
        id:     "bolum-d",
        harf:   "D",
        baslik: "Kulüp Yönetimi (MODS) ve Seçimler",
        icerik: [
          { tip: "paragraf", metin: "<strong>D1.</strong> MODS, kulübün yönetim organıdır; dört üyeden oluşur. İkisi daimi kurucu üye, diğer ikisi ise bir yıllık görev süresi için seçilmiş üyelerdir. Görev süresi 1 Ağustos'ta başlar ve ertesi yıl 1 Ağustos'a kadar devam eder." },
          { tip: "paragraf", metin: "<strong>D2.</strong> MODS seçimleri her yıl temmuz ayında yapılır. Aday olabilmek için adaylık başlangıç tarihinde Salon üyesi olmak, son bir yılda en az 6 buluşmaya katılmış olmak ve görev süresi boyunca buluşmaların en az %80'ine katılmayı taahhüt etmek gerekmektedir." },
          { tip: "paragraf", metin: "<strong>D3.</strong> Üç veya daha fazla adayın olduğu seçimlerde 1, 2 ve 5 puanları dağıtılır; en çok puan alan iki aday MODS üyesi seçilir. İki veya daha az aday varsa Salon üyelerinin katıldığı Evet/Hayır oylaması yapılır; en az %66 \"Evet\" oyu alan aday MODS'a dahil olur." },
          { tip: "paragraf", metin: "<strong>D4.</strong> Kulüp moderatörlüğü gönüllülük esasına dayalıdır. Moderatör, bir ay önceden haber vermek kaydıyla görevini bırakabilir. Görevini erken bırakan moderatör üç yıl süreyle tekrar aday olamaz." },
          { tip: "paragraf", metin: "<strong>D5.</strong> Görevini yerine getirmeyen moderatörler kurucu üyeler tarafından uyarılır. Üç kez uyarılan moderatörün görevi sona erdirilir; bu kişi de üç yıl süreyle tekrar aday olamaz." },
        ],
      },

      {
        id:     "bolum-e",
        harf:   "E",
        baslik: "Ek Etkinlikler ve Yönetmen Sineması",
        icerik: [
          { tip: "paragraf", metin: "<strong>E1.</strong> Kitap okumalarının yanı sıra film izleme ve yorumlama, tiyatro, konser, sportif faaliyetler ve benzeri ek etkinlikler gerçekleştirilebilir. Etkinliklerin türü ve sıklığı MODS tarafından belirlenir." },

          {
            tip: "altbolum",
            etiket: "E2 — Yönetmen Sineması",
            icerik: [
              { tip: "paragraf", metin: "Yönetmen ve ilgili üç filmi birlikte paket halinde önerilir; oylamayla en çok puan alan yönetmen seçilir. Seçilen yönetmen iki yıl boyunca tekrar aday gösterilemez." },
              { tip: "paragraf", metin: "Aday sayısına göre dağıtılacak puanlar:" },
              {
                tip: "tablo",
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

    // Öne çıkan etkinlik — kaldırmak için one: null yapın
    one: {
      kategori:  "Kitap Toplantısı",
      baslik:    "Nisan Okuma Toplantısı",
      aciklama:  "Bu ayki kitabımızı tartışmak üzere bir araya geliyoruz. Kitabı en az %70 okumuş olarak katılmanız beklenmektedir.",
      etiketler: ["Okuma", "Tartışma", "Salon Üyeleri"],
      linkMetin: "Detaylar",
      yazar:     "MODS",
      tarih:     "Nisan 2026",
      sure:      "",
    },

    // Etkinlik kartları — yeni eklemek için listeye obje ekleyin
    // renk: "c1"..."c6" (boş bırakırsanız otomatik atanır)
    kartlar: [
      {
        kategori: "Salection",
        baslik:   "Yeni Dönem Kitap Seçimi",
        aciklama: "Salection ile bir sonraki dönemin üç kitabını belirliyoruz. Öneri ve puanlama süreci yakında başlıyor.",
        yazar:    "MODS",
        tarih:    "Mayıs 2026",
        sure:     "",
        renk:     "c1",
      },
      {
        kategori: "Yönetmen Sineması",
        baslik:   "Film Gecesi",
        aciklama: "Seçilen yönetmenin filmlerini birlikte izleyip tartışıyoruz. Yer ve saat duyurulacaktır.",
        yazar:    "MODS",
        tarih:    "Yakında",
        sure:     "",
        renk:     "c3",
      },
      {
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
    heroEtiket:  "Bize Ulaşın",
    heroBaslik:  "İletişim",
    heroAciklama: "Sorularınız, önerileriniz veya kulüp hakkında merak ettikleriniz için aşağıdaki kanallardan bize ulaşabilirsiniz.",

    kartlar: [
      { etiket: "Instagram", deger: "@dusunselikitapkulubu", link: "https://instagram.com/dusunselikitapkulubu" },
      { etiket: "Platform",  deger: "WhatsApp Grupları",     link: "" },
    ],

    not: "Kulüple ilgili tüm iletişim Instagram üzerinden yürütülmektedir. Başvuru, duyuru ve toplantı bilgilerine de buradan ulaşabilirsiniz.",
  },

};
