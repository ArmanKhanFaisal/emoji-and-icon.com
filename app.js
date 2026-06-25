const emojis = [
  { id:'e-smile', name:'Grinning Face', value:'😀', category:'Smileys', tags:'happy smile face joy' },
  { id:'e-laugh', name:'Laughing Face', value:'😂', category:'Smileys', tags:'laugh fun haha' },
  { id:'e-heart-eyes', name:'Heart Eyes', value:'😍', category:'Smileys', tags:'love heart eyes crush' },
  { id:'e-cool', name:'Cool Face', value:'😎', category:'Smileys', tags:'sunglasses cool' },
  { id:'e-thinking', name:'Thinking Face', value:'🤔', category:'Smileys', tags:'think idea question' },
  { id:'e-cry', name:'Crying Face', value:'😭', category:'Smileys', tags:'sad cry emotion' },
  { id:'e-fire', name:'Fire', value:'🔥', category:'Symbols', tags:'hot trending viral' },
  { id:'e-sparkles', name:'Sparkles', value:'✨', category:'Symbols', tags:'magic premium shine' },
  { id:'e-check', name:'Check Mark', value:'✅', category:'Symbols', tags:'success done correct tick' },
  { id:'e-warning', name:'Warning', value:'⚠️', category:'Symbols', tags:'alert caution' },
  { id:'e-star', name:'Star', value:'⭐', category:'Symbols', tags:'rating favorite' },
  { id:'e-heart', name:'Red Heart', value:'❤️', category:'Symbols', tags:'love heart' },
  { id:'e-rocket', name:'Rocket', value:'🚀', category:'Travel', tags:'launch growth startup' },
  { id:'e-car', name:'Car', value:'🚗', category:'Travel', tags:'vehicle auto' },
  { id:'e-plane', name:'Plane', value:'✈️', category:'Travel', tags:'flight travel' },
  { id:'e-map', name:'World Map', value:'🗺️', category:'Travel', tags:'map location' },
  { id:'e-dog', name:'Dog', value:'🐶', category:'Animals', tags:'pet dog puppy animal' },
  { id:'e-cat', name:'Cat', value:'🐱', category:'Animals', tags:'pet cat animal' },
  { id:'e-lion', name:'Lion', value:'🦁', category:'Animals', tags:'animal king' },
  { id:'e-bird', name:'Bird', value:'🐦', category:'Animals', tags:'animal bird' },
  { id:'e-pizza', name:'Pizza', value:'🍕', category:'Food', tags:'food pizza' },
  { id:'e-burger', name:'Burger', value:'🍔', category:'Food', tags:'food burger fast food' },
  { id:'e-coffee', name:'Coffee', value:'☕', category:'Food', tags:'drink coffee cafe' },
  { id:'e-cake', name:'Cake', value:'🎂', category:'Food', tags:'birthday food cake' },
  { id:'e-laptop', name:'Laptop', value:'💻', category:'Objects', tags:'computer tech code' },
  { id:'e-phone', name:'Phone', value:'📱', category:'Objects', tags:'mobile phone app' },
  { id:'e-camera', name:'Camera', value:'📷', category:'Objects', tags:'photo camera' },
  { id:'e-gift', name:'Gift', value:'🎁', category:'Objects', tags:'gift offer' },
  { id:'e-money', name:'Money Bag', value:'💰', category:'Business', tags:'money finance cash' },
  { id:'e-chart', name:'Chart Up', value:'📈', category:'Business', tags:'growth analytics business' },
  { id:'e-briefcase', name:'Briefcase', value:'💼', category:'Business', tags:'business work job' },
  { id:'e-cart', name:'Shopping Cart', value:'🛒', category:'Business', tags:'shop ecommerce cart' },
  { id:'e-palette', name:'Palette', value:'🎨', category:'Creative', tags:'design art color' },
  { id:'e-video', name:'Video Camera', value:'🎥', category:'Creative', tags:'video film content' },
  { id:'e-music', name:'Music', value:'🎵', category:'Creative', tags:'song audio' },
  { id:'e-bulb', name:'Light Bulb', value:'💡', category:'Creative', tags:'idea innovation light' },
  { id:'e-bd', name:'Bangladesh Flag', value:'🇧🇩', category:'Flags', tags:'bangladesh bd flag' },
  { id:'e-us', name:'United States Flag', value:'🇺🇸', category:'Flags', tags:'usa america flag' },
  { id:'e-uk', name:'United Kingdom Flag', value:'🇬🇧', category:'Flags', tags:'uk flag' },
  { id:'e-ca', name:'Canada Flag', value:'🇨🇦', category:'Flags', tags:'canada flag' }
];

const iconPaths = {
  home:'<path d="M3 10.8 12 3l9 7.8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c1.8-4.5 14.2-4.5 16 0"/>',
  cart:'<path d="M5 6h16l-2 9H7L5 3H2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/>',
  heart:'<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/>',
  star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 7h18s-3 0-3-7"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',
  arrowRight:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  arrowLeft:'<path d="M19 12H5"/><path d="m12 5-7 7 7 7"/>',
  download:'<path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/>',
  upload:'<path d="M12 21V9"/><path d="m7 14 5-5 5 5"/><path d="M5 3h14"/>',
  mail:'<path d="M4 5h16v14H4z"/><path d="m4 7 8 6 8-6"/>',
  phone:'<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6.1 6.1l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
  settings:'<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.1 4l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1A2 2 0 1 1 20 7.1l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5.8Z"/>',
  calendar:'<path d="M7 2v4M17 2v4M3 10h18"/><rect x="3" y="5" width="18" height="16" rx="2"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  mapPin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  camera:'<path d="M4 8h4l2-3h4l2 3h4v12H4z"/><circle cx="12" cy="14" r="4"/>',
  video:'<path d="M4 6h12v12H4z"/><path d="m16 10 5-3v10l-5-3"/>',
  image:'<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="10" r="2"/><path d="m21 16-5-5L5 19"/>',
  play:'<path d="m8 5 12 7-12 7V5Z"/>',
  pause:'<path d="M7 5h4v14H7zM13 5h4v14h-4z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  check:'<path d="m20 6-11 11-5-5"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>',
  edit:'<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5Z"/>',
  chart:'<path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5M12 16V8M16 16v-8"/>',
  wallet:'<path d="M20 7H5a3 3 0 0 0 0 6h15v6H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h13v3"/><circle cx="17" cy="13" r="1"/>',
  card:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/>',
  cloud:'<path d="M17.5 19H7a5 5 0 1 1 1-9.9A7 7 0 0 1 21 12a4 4 0 0 1-3.5 7Z"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>',
  zap:'<path d="m13 2-10 12h8l-1 8 10-12h-8l1-8Z"/>',
  code:'<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 4l-4 16"/>',
  database:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  package:'<path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  megaphone:'<path d="M3 11v3a2 2 0 0 0 2 2h2l4 4v-6l8 3V6l-8 3H5a2 2 0 0 0-2 2Z"/>',
  spark:'<path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z"/>'
};

const iconMeta = [
  ['home','Home','UI','house website main'], ['search','Search','UI','find lookup'], ['user','User','UI','profile account'], ['cart','Cart','Commerce','shop ecommerce'], ['heart','Heart','Social','love favorite'], ['star','Star','Social','rating favorite'], ['bell','Bell','UI','notification alert'], ['menu','Menu','UI','hamburger navigation'],
  ['arrowRight','Arrow Right','Arrows','right next'], ['arrowLeft','Arrow Left','Arrows','left previous'], ['download','Download','Arrows','save file'], ['upload','Upload','Arrows','file upload'], ['mail','Mail','Communication','email message'], ['phone','Phone','Communication','call contact'], ['settings','Settings','UI','gear configure'], ['calendar','Calendar','Business','date schedule'],
  ['clock','Clock','Business','time'], ['mapPin','Map Pin','Travel','location address'], ['globe','Globe','Travel','world internet'], ['lock','Lock','Security','secure password'], ['camera','Camera','Creative','photo image'], ['video','Video','Creative','film'], ['image','Image','Creative','picture'], ['play','Play','Media','video start'],
  ['pause','Pause','Media','stop hold'], ['plus','Plus','UI','add create'], ['minus','Minus','UI','remove subtract'], ['x','Close','UI','close cancel'], ['check','Check','UI','success done'], ['trash','Trash','UI','delete remove'], ['edit','Edit','UI','pencil write'], ['chart','Chart','Business','analytics growth'],
  ['wallet','Wallet','Finance','money payment'], ['card','Credit Card','Finance','payment card'], ['cloud','Cloud','Weather','cloud storage'], ['sun','Sun','Weather','light day'], ['moon','Moon','Weather','night dark'], ['zap','Zap','Tech','energy speed'], ['code','Code','Tech','developer html'], ['database','Database','Tech','server data'],
  ['package','Package','Commerce','box delivery'], ['shield','Shield','Security','protect safe'], ['megaphone','Megaphone','Marketing','ads announcement'], ['spark','Spark','Creative','magic ai']
];

const icons = iconMeta.map(([key, name, category, tags]) => ({
  id: `i-${key}`,
  name,
  category,
  tags,
  value: key,
  svg: buildSvg(iconPaths[key])
}));

function buildSvg(paths, size = 24, stroke = 'currentColor') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}

const state = {
  type: 'emoji',
  category: 'All',
  search: '',
  view: 'grid',
  favorites: JSON.parse(localStorage.getItem('assetFavorites') || '[]')
};

const grid = document.getElementById('assetGrid');
const categoryRow = document.getElementById('categoryRow');
const searchInput = document.getElementById('searchInput');
const resultCount = document.getElementById('resultCount');
const emptyState = document.getElementById('emptyState');
const toast = document.getElementById('toast');

window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 450);
  animateCounters();
});

document.getElementById('emojiCount').textContent = emojis.length;
document.getElementById('iconCount').textContent = icons.length;

function getSource() {
  if (state.type === 'emoji') return emojis;
  if (state.type === 'icon') return icons;
  return [...emojis, ...icons].filter(item => state.favorites.includes(item.id));
}

function getCategories() {
  const cats = [...new Set(getSource().map(item => item.category))].sort();
  return ['All', ...cats];
}

function htmlEntity(str) {
  return [...str].map(ch => `&#x${ch.codePointAt(0).toString(16).toUpperCase()};`).join('');
}

function iconHtml(svg) {
  return `<span class="icon">${svg}</span>`;
}

function filteredItems() {
  const q = state.search.trim().toLowerCase();
  return getSource().filter(item => {
    const matchesCat = state.category === 'All' || item.category === state.category;
    const searchable = `${item.name} ${item.category} ${item.tags || ''} ${item.value || ''}`.toLowerCase();
    const matchesSearch = !q || searchable.includes(q);
    return matchesCat && matchesSearch;
  });
}

function renderCategories() {
  categoryRow.innerHTML = getCategories().map(cat => `<button type="button" class="category-chip ${cat === state.category ? 'active' : ''}" data-category="${cat}">${cat}</button>`).join('');
}

function render() {
  renderCategories();
  const items = filteredItems();
  grid.className = `asset-grid ${state.view === 'compact' ? 'compact' : ''}`;
  emptyState.classList.toggle('show', items.length === 0);
  resultCount.textContent = `Showing ${items.length} ${state.type === 'favorites' ? 'favorite' : state.type} asset${items.length === 1 ? '' : 's'}`;
  grid.innerHTML = items.map((item, index) => {
    const isIcon = item.id.startsWith('i-');
    const fav = state.favorites.includes(item.id);
    const symbol = isIcon ? item.svg : item.value;
    return `<article class="asset-card tilt-card" style="animation-delay:${Math.min(index * 0.025, .35)}s" data-id="${item.id}">
      <button class="favorite-btn ${fav ? 'active' : ''}" type="button" data-action="favorite" aria-label="Favorite">★</button>
      <div class="asset-symbol">${symbol}</div>
      <h3>${item.name}</h3>
      <div class="category">${item.category}</div>
      <div class="asset-actions">
        <button type="button" data-action="copy-main">${isIcon ? 'Copy SVG' : 'Copy Emoji'}</button>
        <button type="button" data-action="copy-code">Copy HTML</button>
        <button type="button" data-action="download-svg" ${isIcon ? '' : 'hidden'}>SVG</button>
        <button type="button" data-action="download-png" ${isIcon ? '' : 'hidden'}>PNG</button>
      </div>
    </article>`;
  }).join('');
  attachTilt();
}

function findItem(id) {
  return [...emojis, ...icons].find(item => item.id === id);
}

function copyText(text, message = 'Copied') {
  navigator.clipboard.writeText(text).then(() => showToast(message)).catch(() => {
    const area = document.createElement('textarea');
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    showToast(message);
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadSvg(item) {
  downloadFile(`${slugify(item.name)}.svg`, item.svg.replaceAll('currentColor', '#111827'), 'image/svg+xml');
  showToast('SVG downloaded');
}

function downloadPng(item) {
  const svgText = item.svg.replaceAll('currentColor', '#111827').replace('width="24" height="24"', 'width="512" height="512"');
  const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(svgBlob);
  const img = new Image();
  img.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, 512, 512);
    ctx.drawImage(img, 48, 48, 416, 416);
    URL.revokeObjectURL(url);
    const a = document.createElement('a');
    a.download = `${slugify(item.name)}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();
    showToast('PNG downloaded');
  };
  img.src = url;
}

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

grid.addEventListener('click', (event) => {
  const btn = event.target.closest('button');
  const card = event.target.closest('.asset-card');
  if (!btn || !card) return;
  const item = findItem(card.dataset.id);
  const action = btn.dataset.action;
  const isIcon = item.id.startsWith('i-');

  if (action === 'favorite') {
    if (state.favorites.includes(item.id)) state.favorites = state.favorites.filter(id => id !== item.id);
    else state.favorites.push(item.id);
    localStorage.setItem('assetFavorites', JSON.stringify(state.favorites));
    showToast(state.favorites.includes(item.id) ? 'Saved to favorites' : 'Removed from favorites');
    render();
  }
  if (action === 'copy-main') copyText(isIcon ? item.svg : item.value, isIcon ? 'SVG copied' : 'Emoji copied');
  if (action === 'copy-code') copyText(isIcon ? iconHtml(item.svg) : htmlEntity(item.value), 'HTML copied');
  if (action === 'download-svg') downloadSvg(item);
  if (action === 'download-png') downloadPng(item);
});

categoryRow.addEventListener('click', event => {
  const chip = event.target.closest('.category-chip');
  if (!chip) return;
  state.category = chip.dataset.category;
  render();
});

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    state.type = tab.dataset.type;
    state.category = 'All';
    render();
  });
});

searchInput.addEventListener('input', event => {
  state.search = event.target.value;
  render();
});

document.getElementById('resetBtn').addEventListener('click', () => {
  state.search = '';
  state.category = 'All';
  searchInput.value = '';
  render();
});

document.querySelectorAll('.mini-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mini-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.view = btn.dataset.view;
    render();
  });
});

document.querySelectorAll('.copy-snippet').forEach(btn => {
  btn.addEventListener('click', () => copyText(btn.dataset.snippet, 'Snippet copied'));
});

document.getElementById('randomAssetBtn').addEventListener('click', () => {
  const all = [...emojis, ...icons];
  const item = all[Math.floor(Math.random() * all.length)];
  state.type = item.id.startsWith('i-') ? 'icon' : 'emoji';
  state.category = item.category;
  state.search = item.name.split(' ')[0];
  searchInput.value = state.search;
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.type === state.type));
  document.getElementById('library').scrollIntoView({ behavior: 'smooth' });
  setTimeout(render, 250);
});

// UI animation helpers
function attachTilt() {
  document.querySelectorAll('.tilt-card').forEach(card => {
    card.onmousemove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateY = ((x / rect.width) - .5) * 8;
      const rotateX = ((y / rect.height) - .5) * -8;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    };
    card.onmouseleave = () => { card.style.transform = ''; };
  });
}

function animateCounters() {
  const countEls = [document.getElementById('emojiCount'), document.getElementById('iconCount')];
  countEls.forEach(el => {
    const target = Number(el.textContent);
    let start = 0;
    const step = Math.ceil(target / 35);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { start = target; clearInterval(timer); }
      el.textContent = start;
    }, 25);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * .12}px, ${y * .18}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

const cursorGlow = document.getElementById('cursorGlow');
window.addEventListener('mousemove', e => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
});

window.addEventListener('scroll', () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const pct = total ? (window.scrollY / total) * 100 : 0;
  document.getElementById('scrollProgress').style.width = `${pct}%`;
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 700);
  document.querySelectorAll('[data-float]').forEach((el, i) => {
    el.style.transform = `translateY(${Math.sin(window.scrollY / 220 + i) * 12}px)`;
  });
});

document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.getElementById('themeToggle').addEventListener('click', () => {
  const isLight = document.documentElement.dataset.theme === 'light';
  document.documentElement.dataset.theme = isLight ? 'dark' : 'light';
  document.getElementById('themeToggle').textContent = isLight ? '🌙' : '☀️';
});

document.getElementById('menuBtn').addEventListener('click', () => document.body.classList.toggle('menu-open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.body.classList.remove('menu-open')));

document.querySelectorAll('.accordion-btn').forEach(btn => {
  btn.addEventListener('click', () => btn.classList.toggle('open'));
});

render();
attachTilt();
