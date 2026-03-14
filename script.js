// ============================================================
//  DÜŞÜNSELI KİTAP KULÜBÜ — SCRIPT DOSYASI
//  Sayfa render ve navigasyon mantığı
// ============================================================

// ── Yardımcı: Hero ───────────────────────────────────────
function hero(etiket, baslik, aciklama) {
  return `
    <section class="hero">
      <div class="hero-container">
        <div class="hero-label">
          <span class="line"></span>${etiket}
        </div>
        <h1>${baslik.replace(/\n/g, '<br>')}</h1>
        <p>${aciklama}</p>
      </div>
    </section>`;
}

// ── Yardımcı: Footer ─────────────────────────────────────
function buildFooter(sol, linkler) {
  const linkHTML = linkler.map(l =>
    l.onclick
      ? `<a onclick="${l.onclick}">${l.yazi}</a>`
      : `<a href="${l.href}" ${l.target ? `target="${l.target}"` : ''}>${l.yazi}</a>`
  ).join('');
  return `<footer>
    <div class="footer-content">
      <p>${sol}</p>
      <div class="footer-links">${linkHTML}</div>
    </div>
  </footer>`;
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
  return `<div class="rule-table-wrapper"><div class="rule-table"><table><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table></div></div>`;
}

// ── Yardımcı: SSS cevabındaki [Metin|sayfa-id] linkleri ──
function parseSssCevap(cevap) {
  return cevap.replace(/\[([^\|]+)\|([^\]]+)\]/g, (_, metin, sayfa) =>
    `<a class="inline-link" onclick="showPage('${sayfa}')">${metin}</a>`
  );
}

// ════════════════════════════════════════════════════════════
//  SAYFA RENDER FONKSİYONLARI
// ════════════════════════════════════════════════════════════

function renderBasvuru() {
  const v = ICERIK.basvuru;
  const bloklar = {
    rozet: v.rozet ? `<div class="basvuru-badge"><span class="pulse"></span>${v.rozet}</div>` : '',
    kosullar: v.kosullar && v.kosullar.length
      ? `<div class="basvuru-kosullar">${v.kosullar.filter(k => !(typeof k === 'object' && k.gizli))
          .map(k => `<p>${typeof k === 'string' ? k : k.metin}</p>`).join('')}</div>` : '',
    kartlar: v.uyelikGruplari && v.uyelikGruplari.length
      ? `<div class="uyelik-kartlari">${v.uyelikGruplari.filter(g => !g.gizli).map(g => {
          const icerik = g.maddeler
            ? `<ul class="uyelik-maddeler">${g.maddeler.filter(m => !(typeof m === 'object' && m.gizli))
                .map(m => `<li>${typeof m === 'string' ? m : m.metin}</li>`).join('')}</ul>`
            : `<p>${g.aciklama}</p>`;
          return `<div class="uyelik-kart">
                    <div class="uyelik-kart-header">
                      <span class="emoji">${g.emoji}</span>
                      <h3>${g.ad}</h3>
                    </div>
                    ${icerik}
                  </div>`;
        }).join('')}</div>` : '',
    altNot: v.altNot ? `<div class="basvuru-alt-not"><p>${v.altNot}</p></div>` : '',
    formBtn: v.formLinki
      ? `<a class="btn-primary form-btn" href="${v.formLinki}" target="_blank">
           ${v.formButonYazi}
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
         </a>` : '',
  };

  const siralama = v.siralama ||['rozet', 'kosullar', 'kartlar', 'altNot', 'formBtn'];
  const icerikHTML = siralama.map(key => bloklar[key] || '').join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + `<section class="basvuru-section content-container">${icerikHTML}</section>`
    + buildFooter(ICERIK.site.telif,[
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('iletisim')", yazi: 'İletişim' },
      ]);
}

function renderDuyurular() {
  const v = ICERIK.duyurular;
  const duyuruHTML = v.liste.filter(d => !d.gizli).map((d, i) => `
    <div class="duyuru-item" style="animation-delay: ${i * 0.1}s">
      <div class="duyuru-meta">
        <span class="badge ${d.tip === 'yeni' ? 'badge-new' : 'badge-default'}">${d.tip.charAt(0).toUpperCase() + d.tip.slice(1)}</span>
        <span class="duyuru-date">${d.tarih}</span>
      </div>
      <h3>${d.baslik}</h3>
      <p>${d.metin}</p>
    </div>`).join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + `<section class="duyurular-section content-container">${duyuruHTML}</section>`
    + buildFooter(ICERIK.site.telif,[
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('basvuru')", yazi: 'Başvuru' },
      ]);
}

function renderHakkinda() {
  const v  = ICERIK.hakkinda;
  const kr = ICERIK.kurallar;

  const tocLinks = kr.bolumler.filter(b => !b.gizli).map(b =>
    `<a onclick="scrollToRule('${b.id}')" class="toc-link">
      <span class="toc-letter">${b.harf}</span>
      <span class="toc-title">${b.baslik}${b.etiket ? ` <span class="badge badge-accent" style="margin-left: 8px; font-size: 0.65rem; padding: 0.2rem 0.5rem; vertical-align: middle;">${b.etiket}</span>` : ''}</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>`
  ).join('');

  const bolumlerHTML = kr.bolumler.filter(b => !b.gizli).map((b, i) => `
    <div class="rule-chapter" id="${b.id}">
      <div class="chapter-bg-letter">${b.harf}</div>
      <div class="chapter-header">
        <span class="chapter-letter">${b.harf}</span>
        <h2 class="chapter-title">${b.baslik}${b.etiket ? ` <span class="badge badge-accent" style="margin-left: 12px; font-size: 0.75rem; vertical-align: middle; padding: 0.3rem 0.6rem; letter-spacing: 0.05em;">${b.etiket}</span>` : ''}</h2>
      </div>
      <div class="rule-block">${renderIcerikBlok(b.icerik)}</div>
    </div>
    ${i < kr.bolumler.length - 1 ? '<div class="divider"></div>' : ''}
  `).join('');

  const sssGorsel = v.sssGorsel ? `<div class="sss-gorsel-wrapper"><img src="${v.sssGorsel}" alt="SSS" class="sss-gorsel" onerror="this.style.display='none'"/></div>` : '';
  const sssHTML = (v.sss ||[]).map((s, i) => `
    <div class="sss-item" onclick="toggleSss(this)" style="animation-delay: ${i * 0.05}s">
      <div class="sss-soru">
        <span>${s.soru}</span>
        <svg class="sss-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
      </div>
      <div class="sss-cevap"><div class="sss-cevap-inner">${parseSssCevap(s.cevap)}</div></div>
    </div>`).join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + `<div class="hakkinda-tabs-container">
        <div class="hakkinda-tabs">
          <button class="hakkinda-tab active" onclick="switchHakkindaTab('genel')">Genel Bilgi</button>
          <button class="hakkinda-tab" onclick="switchHakkindaTab('kurallar')">Kulüp Kuralları</button>
          <button class="hakkinda-tab" onclick="switchHakkindaTab('sss')">SSS</button>
        </div>
      </div>
      
      <div class="content-container">
        <div id="panel-genel" class="hakkinda-panel active">
          <section class="hakkinda-intro">
            ${v.genelBilgi.map(p => `<p>${p}</p>`).join('')}
            <div class="social-box">
              <span>Instagram'da takip edin:</span>
              <a href="${ICERIK.site.instagram}" target="_blank" class="inline-link">${ICERIK.site.instagramKullanici}</a>
            </div>
          </section>
        </div>

        <div id="panel-kurallar" class="hakkinda-panel">
          <section class="toc-section">
            <h3 class="section-title">İçindekiler</h3>
            <div class="toc-links">${tocLinks}</div>
          </section>
          <section class="rules-section">${bolumlerHTML}</section>
        </div>

        <div id="panel-sss" class="hakkinda-panel">
          <section class="sss-section">
            ${sssGorsel}
            <div class="sss-liste">${sssHTML}</div>
          </section>
        </div>
      </div>`
    + buildFooter(`${ICERIK.site.telif} — ${ICERIK.site.sonGuncelleme}`,[
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('basvuru')",  yazi: 'Başvuru' },
        { onclick: "showPage('iletisim')", yazi: 'İletişim' },
      ]);
}

function renderEtkinlikler() {
  const v = ICERIK.etkinlikler;

  const oneHTML = v.one ? `
    <section class="featured-section content-container">
      <h3 class="section-title">${v.oneBaslik || 'Öne Çıkan Etkinlik'}</h3>
      <div class="featured-card">
        <div class="featured-img">
          ${v.one.gorsel ? `<img src="${v.one.gorsel}" alt="${v.one.baslik}" onerror="this.style.display='none'">` : ''}
          <div class="img-overlay"></div>
        </div>
        <div class="featured-content">
          <span class="badge badge-accent">${v.one.kategori}</span>
          <h2>${v.one.baslik}</h2>
          <p>${v.one.aciklama}</p>
          <div class="tags">${(v.one.etiketler ||[]).map(t => `<span class="tag">${t}</span>`).join('')}</div>
          
          <div class="featured-footer">
            <div class="post-meta">
              <span class="author">${v.one.yazar}</span>
              <span class="dot"></span><span>${v.one.tarih}</span>
              ${v.one.sure ? `<span class="dot"></span><span>${v.one.sure}</span>` : ''}
            </div>
            ${v.one.linkMetin ? `
              <a class="btn-text">
                ${v.one.linkMetin}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>` : ''}
          </div>
        </div>
      </div>
    </section>` : '';

  const renkler =['c1','c2','c3','c4','c5','c6'];
  const kartlarHTML = v.kartlar.filter(k => !k.gizli).map((k, i) => {
    const renk = k.renk || renkler[i % renkler.length];
    return `<article class="post-card" style="animation-delay: ${i * 0.1}s">
      <div class="post-card-img">
        ${k.gorsel ? `<img src="${k.gorsel}" alt="${k.baslik}" onerror="this.style.display='none'">` : ''}
        <div class="color-block ${renk}"></div>
      </div>
      <div class="post-card-body">
        <span class="badge">${k.kategori}</span>
        <h3>${k.baslik}</h3>
        <p>${k.aciklama}</p>
        <div class="post-meta mt-auto">
          <span class="author">${k.yazar}</span>
          <span class="dot"></span><span>${k.tarih}</span>
          ${k.sure ? `<span class="dot"></span><span>${k.sure}</span>` : ''}
        </div>
      </div>
    </article>`;
  }).join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + oneHTML
    + `<section class="posts-section content-container">
        <h3 class="section-title">${v.altBaslik || 'Tüm Etkinlikler'}</h3>
        <div class="posts-grid">${kartlarHTML}</div>
      </section>`
    + buildFooter(ICERIK.site.telif,[
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('basvuru')", yazi: 'Başvuru' },
      ]);
}

function renderIletisim() {
  const v = ICERIK.iletisim;
  const kartHTML = v.kartlar.filter(k => !k.gizli).map((k, i) => `
    <div class="iletisim-card" style="animation-delay: ${i * 0.1}s">
      <div class="ic-label">${k.etiket}</div>
      <div class="ic-value">${k.link ? `<a href="${k.link}" target="_blank">${k.deger}</a>` : k.deger}</div>
      ${k.link ? `<svg class="ic-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>` : ''}
    </div>`).join('');

  return hero(v.heroEtiket, v.heroBaslik, v.heroAciklama)
    + `<section class="iletisim-section content-container">
        <div class="iletisim-grid">${kartHTML}</div>
        <div class="info-box">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          <p>${v.not}</p>
        </div>
      </section>`
    + buildFooter(ICERIK.site.telif,[
        { href: ICERIK.site.instagram, yazi: 'Instagram', target: '_blank' },
        { onclick: "showPage('basvuru')", yazi: 'Başvuru' },
      ]);
}

// ════════════════════════════════════════════════════════════
//  NAVİGASYON & ETKİLEŞİMLER
// ════════════════════════════════════════════════════════════

function showPage(name) {
  const current = document.querySelector('.page.active');
  const target = document.getElementById('page-' + name);
  
  if (!target || current === target) return;

  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  const navLink = document.getElementById('nav-' + name);
  if (navLink) navLink.classList.add('active');

  if (current) {
    current.classList.remove('fade-in');
    setTimeout(() => {
      current.classList.remove('active');
      target.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      requestAnimationFrame(() => target.classList.add('fade-in'));
    }, 250);
  } else {
    target.classList.add('active');
    requestAnimationFrame(() => target.classList.add('fade-in'));
  }
  closeMenu();
}

function showHakkinda(tab) {
  showPage('hakkinda');
  setTimeout(() => switchHakkindaTab(tab), 10);
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
  if (panel) {
    panel.classList.add('active');
  }
}

function scrollToRule(id) {
  switchHakkindaTab('kurallar');
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }, 100);
}

// YENİDEN DÜZENLENEN MENÜ KONTROLLERİ
function toggleMenu() {
  const nav = document.getElementById('main-nav');
  const overlay = document.querySelector('.nav-overlay');
  const toggleBtn = document.getElementById('menu-toggle-btn');
  
  const isShowing = nav.classList.toggle('show');
  overlay.classList.toggle('show');
  
  if (isShowing) {
    // Menü açılınca arka planın kaymasını engelle
    document.body.style.overflow = 'hidden'; 
    // İkonu X'e (kapat) dönüştür
    toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
  } else {
    // Menü kapanınca normale dön
    document.body.style.overflow = '';
    // İkonu Hamburger menüye döndür
    toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  }
}

function closeMenu() {
  const nav = document.getElementById('main-nav');
  const overlay = document.querySelector('.nav-overlay');
  const toggleBtn = document.getElementById('menu-toggle-btn');
  
  if (nav && nav.classList.contains('show')) {
    nav.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    if (toggleBtn) {
      toggleBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    }
  }
}

function toggleSss(element) {
  const isActive = element.classList.contains('active');
  document.querySelectorAll('.sss-item').forEach(el => {
    el.classList.remove('active');
    el.querySelector('.sss-cevap').style.maxHeight = null;
  });
  if (!isActive) {
    element.classList.add('active');
    const answer = element.querySelector('.sss-cevap');
    answer.style.maxHeight = answer.scrollHeight + "px";
  }
}

// ════════════════════════════════════════════════════════════
//  BAŞLANGIÇ
// ════════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('site-adi').textContent = ICERIK.site.ad;

  document.getElementById('page-basvuru').innerHTML     = renderBasvuru();
  document.getElementById('page-duyurular').innerHTML   = renderDuyurular();
  document.getElementById('page-etkinlikler').innerHTML = renderEtkinlikler();
  document.getElementById('page-hakkinda').innerHTML    = renderHakkinda();
  document.getElementById('page-iletisim').innerHTML    = renderIletisim();

  showPage('etkinlikler');
});
