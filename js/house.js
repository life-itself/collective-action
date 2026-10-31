/* Research site house style v0 (life-itself/design: incubator/research-site-style/house.js), for Flowershow:
   footnote cards ("Jump to note") and a contents rail in the left gutter, or an inline Contents block when
   there's no room. Loaded once per visit through config.json "head"; Flowershow then swaps pages without a
   reload, so it watches for each new page body and sets it up again. */
(() => {
  if (window.__houseStyle) return;
  window.__houseStyle = true;

  let cleanup = () => {};

  function setup(prose) {
    const off = [];
    const on = (target, type, fn, opts) => { target.addEventListener(type, fn, opts); off.push(() => target.removeEventListener(type, fn, opts)); };

    // Footnote card: click the number to open; click again, click outside, Escape or scroll away to close.
    let pop = null, ref = null, scrollStart = 0;
    const close = () => {
      if (!pop) return;
      pop.remove(); pop = null;
      ref?.setAttribute('aria-expanded', 'false'); ref = null;
    };
    const jump = id => {
      const li = document.getElementById(id);
      li.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
      li.classList.remove('landed'); void li.offsetWidth; li.classList.add('landed');
    };
    on(prose, 'click', e => {
      const a = e.target.closest('sup a[data-footnote-ref]');
      if (!a) return;
      e.preventDefault();
      if (ref === a) return close();
      close();
      const id = decodeURIComponent(a.hash.slice(1));
      const source = document.getElementById(id);
      if (!source) return;
      const note = source.cloneNode(true);
      note.querySelectorAll('[data-footnote-backref]').forEach(x => x.remove());
      pop = document.createElement('div');
      pop.className = 'fn-pop'; pop.setAttribute('role', 'dialog'); pop.setAttribute('aria-label', 'Footnote');
      pop.append(...note.childNodes);
      const btn = document.createElement('button');
      btn.textContent = 'Jump to note ↓';
      btn.addEventListener('click', () => { close(); jump(id); });
      pop.append(btn);
      document.body.append(pop);
      const r = a.getBoundingClientRect();
      pop.style.left = Math.min(Math.max(8, r.left + scrollX - 16), innerWidth - pop.offsetWidth - 8) + 'px';
      pop.style.top = (r.bottom + scrollY + 6) + 'px';
      ref = a; a.setAttribute('aria-expanded', 'true');
      scrollStart = scrollY;
    });
    on(document, 'click', e => { if (pop && !pop.contains(e.target) && !e.target.closest('sup a')) close(); });
    on(document, 'keydown', e => { if (e.key === 'Escape') { const r = ref; close(); r?.focus(); } });
    on(window, 'scroll', () => { if (pop && Math.abs(scrollY - scrollStart) > innerHeight / 3) close(); }, { passive: true });
    off.push(close);

    // Contents: needs three or more headings.
    const heads = [...prose.querySelectorAll('h2[id], h3[id]')].filter(h => !h.closest('.footnotes, [data-callout]'));
    if (heads.length >= 3) {
      const level = h => (h.tagName === 'H2' ? 0 : 1);
      const label = h => h.textContent.trim();
      const rail = document.createElement('nav');
      rail.className = 'rail'; rail.setAttribute('aria-label', 'Contents');
      rail.innerHTML = '<ol class="ticks" aria-hidden="true"></ol><div class="outline"><ol></ol></div>';
      const ticks = rail.querySelector('.ticks'), list = rail.querySelector('.outline ol');
      const inline = document.createElement('details');
      inline.className = 'inline-toc';
      inline.innerHTML = '<summary>Contents</summary><ol></ol>';
      heads.forEach(h => {
        const t = document.createElement('li'); t.dataset.level = level(h); t.append(document.createElement('span')); ticks.append(t);
        const li = document.createElement('li'); li.dataset.level = level(h);
        const b = document.createElement('button');
        b.innerHTML = '<span class="t"></span><span class="x"></span>';
        b.querySelector('.x').textContent = label(h);
        b.addEventListener('click', () => h.scrollIntoView({ behavior: 'smooth' }));
        li.append(b); list.append(li);
        const il = document.createElement('li'); il.dataset.level = level(h);
        const ia = document.createElement('a'); ia.href = '#' + h.id; ia.textContent = label(h);
        il.append(ia); inline.querySelector('ol').append(il);
      });
      document.body.append(rail);
      (document.querySelector('.page-header') || prose).append(inline);
      off.push(() => { rail.remove(); inline.remove(); });

      const place = () => {
        const box = prose.getBoundingClientRect();
        const side = document.querySelector('.site-sidebar');
        const edge = side && side.offsetWidth ? side.getBoundingClientRect().right : 0;
        const roomy = box.left - edge >= 90;   // room for the ticks beside the text
        rail.hidden = !roomy;
        inline.hidden = roomy;
        rail.style.left = (edge ? edge + 16 : 16) + 'px';   // far left, as in the Claude viewer (past the sidebar if there is one)
      };
      const update = () => {
        const top = prose.getBoundingClientRect().top;
        rail.style.top = Math.max(84, top) + 'px';   // level with the text, then stick under the navbar
        let current = 0;
        heads.forEach((h, i) => { if (h.getBoundingClientRect().top <= 110) current = i; });
        if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8) current = heads.length - 1;
        [ticks.children, list.children].forEach(items => [...items].forEach((li, i) => {
          li.toggleAttribute('data-current', i === current);
          li.toggleAttribute('data-read', i < current);
        }));
      };
      on(window, 'scroll', update, { passive: true });
      on(window, 'resize', () => { place(); update(); });
      place(); update();
    }
    return () => off.forEach(f => f());
  }

  function check() {
    const prose = document.querySelector('.rendered-mdx:not(.is-plain)');
    if (!prose || prose.dataset.house) return;
    cleanup();
    prose.dataset.house = '1';
    cleanup = setup(prose);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', check);
  else check();
  new MutationObserver(check).observe(document.documentElement, { childList: true, subtree: true });
})();
