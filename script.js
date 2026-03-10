// ============================================================
//  DÜŞÜNSELI KİTAP KULÜBÜ — SCRIPT DOSYASI
//  Sayfa render ve navigasyon mantığı burada.
//  Bu dosyayı düzenlemenize gerek yoktur.
// ============================================================

// ── Yardımcı: Hero ───────────────────────────────────────
function hero(etiket, baslik, aciklama) {
  return `<section class="hero">
    <div class="hero-label">${etiket}</div>
    <h1>${baslik.replace(/\n/g, '<br>')}</h1>
    <p>${aciklama}</p>
  </section>`;
}

// ── Yardımcı: Footer ─────────────────────────────────────
function buildFooter(sol, linkler) {
  const linkHTML = linkler.map(l =>
    l.onclick
      ? `<a onclick="${l.onclick}">${l.yazi}</a>`
      : `<a href="${l.href}" ${l.target ? `target="${l.target}"` : ''}>${l.yazi}</a>`
  ).join('');
  return `<footer><p>${sol}</p><div class="footer-links">${linkHTML}</div></footer>`;
}

// ── Yardımcı: Kural bloğu içeriği ────────────────────────
function renderIcerikBlok(bloklar) {
  return bloklar.map(b => {
    if (b.tip === 'paragraf') return `<p>${b.metin}</p>`;
    if (b.tip === 'tablo')    return renderTablo(b);
    if (b.tip === 'puanlar')  return `<div class="puan-list">${b.puanlar.map(p => `<span class="puan">${p}</span>`).join('')}</div>`;
    if (b.tip === 'altbolum') return `
      <div class="rule-subsection">
        <span class="subsection-label">${b.etiket}</span>
        <div class="rule-block">${renderIcerikBlok(b.icerik)}</div>
      </div>`;
    return '';
  }).join('');
}

// ── Yardımcı: Tablo ───────────────────────────────────────
function renderTablo(t) {
  const ths = t.basliklar.map(h => `<th>${h}</th>`).join('');
  const trs = t.satirlar.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('');
  return `<div class="rule-table"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div>`;
}

// ── Yardımcı: SSS cevabındaki [Metin|sayfa-id] linkleri ──
function parseSssCevap(cevap) {
  return cevap.replace(/\[([^\|]+)\|([^\]]+)\]/g, (_, metin, sayfa) =>
    `<a onclick="showPage('${sayfa}')">${metin}</a>`
  );
}

// ════════════════════════════════════════════════════════════
//  SAYFA RENDER FONKSİYONLARI
// ════════════════════════════════════════════════════════════

// ── Başvuru ───────────────────────────────────────────────
function renderBasvuru() {
  const v = ICERIK.basvuru;

  // Blok parçaları
  const bloklar = {
    rozet: v.rozet
      ? `<div class="basvuru-badge">${v.rozet}</div>` : '',

    kosullar: v.kosullar && v.kosullar.length
      ? `<div class="basvuru-kosullar">${v.kosullar
          .filter(k => !(typeof k === 'object' && k.gizli))
          .map(k => `<p>${typeof k === 'string' ? k : k.metin}</p>`).join('')}</div>` : '',

    kartlar: v.uyelikGruplari && v.uyelikGruplari.length
      ? `<div class="uyelik-kartlari">${v.uyelikGruplari.filter(g => !g.gizli).map(g => {
          const icerik = g.maddeler
            ? `<ul class="uyelik-maddeler">${g.maddeler
                .filter(m => !(typeof m === 'object' && m.gizli))
                .map(m => `<li>${typeof m === 'string' ? m : m.metin}</li>`).join('')}</ul>`
            : `<p>${g.aciklama}</p>`;
          return `<div class="uyelik-kart"><h3>${g.emoji} ${g.ad}</h3>${icerik}</div>`;
        }).join('')}</div>` : '',

    altNot: v.altNot
      ? `<p class="basvuru-alt-not">${v.altNot}</p>` : '',

    formBtn: v.formLinki
      ? `<a class="form-btn" href="${v.formLinki}" target="_blank">${v.formButonYazi}</a>` : '',
  };

  // siralama dizisi yoksa varsayılan sıra
  const siralama = v.siralama || ['rozet', 'kosullar', 'kartlar', 'altNot', 'formBtn'];
  const icerikHTML = siralama.map(key => bloklar[key] || '').join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + `<section class="basvuru-section">${icerikHTML}</section>`
    + buildFooter(ICERIK.site.telif, [
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('iletisim')", yazi: 'İletişim' },
      ]);
}

// ── Duyurular ─────────────────────────────────────────────
function renderDuyurular() {
  const v = ICERIK.duyurular;

  const duyuruHTML = v.liste.filter(d => !d.gizli).map(d => `
    <div class="duyuru-item">
      <div class="duyuru-meta">
        <span class="duyuru-badge-type ${d.tip === 'yeni' ? 'yeni' : ''}">${d.tip.charAt(0).toUpperCase() + d.tip.slice(1)}</span>
        <span class="duyuru-date">${d.tarih}</span>
      </div>
      <h3>${d.baslik}</h3>
      <p>${d.metin}</p>
    </div>`).join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + `<section class="duyurular-section">${duyuruHTML}</section>`
    + buildFooter(ICERIK.site.telif, [
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('basvuru')", yazi: 'Başvuru' },
      ]);
}

// ── Hakkında (Genel + Kurallar + SSS sekmeli) ─────────────
function renderHakkinda() {
  const v  = ICERIK.hakkinda;
  const kr = ICERIK.kurallar;

  // İçindekiler
  const tocLinks = kr.bolumler.filter(b => !b.gizli).map((b, i) =>
    `<a onclick="scrollToRule('${b.id}')">${i + 1} — ${b.baslik}</a>`
  ).join('');

  // Kural bölümleri
  const bolumlerHTML = kr.bolumler.filter(b => !b.gizli).map((b, i) => `
    <div class="rule-chapter" id="${b.id}">
      <div class="chapter-header">
        <span class="chapter-letter">${b.harf}</span>
        <span class="chapter-title">${b.baslik}</span>
      </div>
      <div class="rule-block">${renderIcerikBlok(b.icerik)}</div>
    </div>
    ${i < kr.bolumler.length - 1 ? '<div class="rule-divider"></div>' : ''}
  `).join('');

  // SSS
  const sssGorsel = v.sssGorsel
    ? `<img src="${v.sssGorsel}" alt="Sıkça Sorulan Sorular" class="sss-gorsel" />` : '';

  const sssHTML = (v.sss || []).map(s => `
    <div class="sss-item">
      <div class="sss-soru">${s.soru}</div>
      <div class="sss-cevap">${parseSssCevap(s.cevap)}</div>
    </div>`).join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + `<div class="hakkinda-tabs">
        <div class="hakkinda-tab active" onclick="switchHakkindaTab('genel')">Genel Bilgi</div>
        <div class="hakkinda-tab" onclick="switchHakkindaTab('kurallar')">Kulüp Kuralları</div>
        <div class="hakkinda-tab" onclick="switchHakkindaTab('sss')">SSS</div>
      </div>

      <div id="panel-genel" class="hakkinda-panel active">
        <section class="hakkinda-section">
          <div class="hakkinda-intro">
            ${v.genelBilgi.map(p => `<p>${p}</p>`).join('')}
            <p>Instagram: <a href="${ICERIK.site.instagram}" target="_blank" style="color:var(--accent);text-decoration:none;font-weight:500;">${ICERIK.site.instagramKullanici}</a></p>
          </div>
        </section>
      </div>

      <div id="panel-kurallar" class="hakkinda-panel">
        <section class="toc">
          <div class="section-title">İçindekiler</div>
          <div class="toc-links">${tocLinks}</div>
        </section>
        <section class="rules-section">${bolumlerHTML}</section>
      </div>

      <div id="panel-sss" class="hakkinda-panel">
        <section class="sss-section">
          ${sssGorsel}
          <div class="sss-liste">${sssHTML}</div>
        </section>
      </div>`
    + buildFooter(`${ICERIK.site.telif} — ${ICERIK.site.sonGuncelleme}`, [
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('basvuru')",  yazi: 'Başvuru' },
        { onclick: "showPage('iletisim')", yazi: 'İletişim' },
      ]);
}

// ── Etkinlikler ───────────────────────────────────────────
function renderEtkinlikler() {
  const v = ICERIK.etkinlikler;

  const oneHTML = v.one ? `
    <section class="featured">
      <div class="section-title">Öne Çıkan Etkinlik</div>
      <div class="featured-card">
        <div class="featured-img">
          ${v.one.gorsel ? `<img src="${v.one.gorsel}" alt="${v.one.baslik}">` : ''}
        </div>
        <div class="featured-content">
          <span class="post-category">${v.one.kategori}</span>
          <h2>${v.one.baslik}</h2>
          <p>${v.one.aciklama}</p>
          <div class="tags">${(v.one.etiketler || []).map(t => `<span class="tag">${t}</span>`).join('')}</div>
          ${v.one.linkMetin ? `
            <a class="read-more">${v.one.linkMetin}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </a>` : ''}
          <div class="post-meta" style="margin-top:1.5rem;">
            <span class="author">${v.one.yazar}</span>
            <span class="dot"></span>
            <span>${v.one.tarih}</span>
            ${v.one.sure ? `<span class="dot"></span><span>${v.one.sure}</span>` : ''}
          </div>
        </div>
      </div>
    </section>` : '';

  const renkler = ['c1','c2','c3','c4','c5','c6'];
  const kartlarHTML = v.kartlar.filter(k => !k.gizli).map((k, i) => {
    const renk = k.renk || renkler[i % renkler.length];
    return `<article class="post-card">
      <div class="post-card-img">
        ${k.gorsel ? `<img src="${k.gorsel}" alt="${k.baslik}">` : `<div class="color-block ${renk}"></div>`}
      </div>
      <span class="post-category">${k.kategori}</span>
      <h3>${k.baslik}</h3>
      <p>${k.aciklama}</p>
      <div class="post-meta">
        <span class="author">${k.yazar}</span>
        <span class="dot"></span>
        <span>${k.tarih}</span>
        ${k.sure ? `<span class="dot"></span><span>${k.sure}</span>` : ''}
      </div>
    </article>`;
  }).join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + oneHTML
    + `<section class="posts-section">
        <div class="posts-header">
          <div class="section-title" style="margin-bottom:0">${v.altBaslik || 'Tüm Etkinlikler'}</div>
        </div>
        <div class="posts-grid">${kartlarHTML}</div>
      </section>`
    + buildFooter(ICERIK.site.telif, [
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('basvuru')", yazi: 'Başvuru' },
      ]);
}

// ── İletişim ──────────────────────────────────────────────
function renderIletisim() {
  const v = ICERIK.iletisim;

  const kartHTML = v.kartlar.filter(k => !k.gizli).map(k => `
    <div class="iletisim-card">
      <div class="ic-label">${k.etiket}</div>
      <div class="ic-value">${k.link ? `<a href="${k.link}" target="_blank">${k.deger}</a>` : k.deger}</div>
    </div>`).join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + `<section class="iletisim-section">
        <div class="iletisim-grid">${kartHTML}</div>
        <p class="iletisim-note">${v.not}</p>
      </section>`
    + buildFooter(ICERIK.site.telif, [
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('basvuru')", yazi: 'Başvuru' },
      ]);
}

// ════════════════════════════════════════════════════════════
//  NAVİGASYON
// ════════════════════════════════════════════════════════════

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active', 'fade-in'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

  const target = document.getElementById('page-' + name);
  if (!target) return;
  target.classList.add('active');
  requestAnimationFrame(() => requestAnimationFrame(() => target.classList.add('fade-in')));

  const navLink = document.getElementById('nav-' + name);
  if (navLink) navLink.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMenu();
}

function showHakkinda(tab) {
  showPage('hakkinda');
  switchHakkindaTab(tab);
}

function switchHakkindaTab(tab) {
  document.querySelectorAll('.hakkinda-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.hakkinda-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.hakkinda-tab').forEach(t => {
    if (t.getAttribute('onclick') && t.getAttribute('onclick').includes(`'${tab}'`)) {
      t.classList.add('active');
    }
  });
  const panel = document.getElementById('panel-' + tab);
  if (panel) panel.classList.add('active');
}

function scrollToRule(id) {
  switchHakkindaTab('kurallar');
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

function toggleMenu() {
  document.querySelector('nav').classList.toggle('show');
}

function closeMenu() {
  document.querySelector('nav').classList.remove('show');
}

// ════════════════════════════════════════════════════════════
//  BAŞLANGIÇ
// ════════════════════════════════════════════════════════════

document.getElementById('site-adi').textContent = ICERIK.site.ad;

document.getElementById('page-basvuru').innerHTML     = renderBasvuru();
document.getElementById('page-duyurular').innerHTML   = renderDuyurular();
document.getElementById('page-etkinlikler').innerHTML = renderEtkinlikler();
document.getElementById('page-hakkinda').innerHTML    = renderHakkinda();
document.getElementById('page-iletisim').innerHTML    = renderIletisim();

showPage('etkinlikler'); // ← Varsayılan açılış sayfası
