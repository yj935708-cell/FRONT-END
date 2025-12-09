const categories = [
    { name: 'Pizza', img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=800&q=80' },
    { name: 'Burgers', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80' },
    { name: 'Sushi', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80' },
    { name: 'Desserts', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80' },
    { name: 'Pasta', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80' },
    { name: 'Healthy', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80' }
];


const offers = [
    { title: '30% off on your first order', img: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Buy 1 Get 1 Pizza', img: 'https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1200&q=80' },
    { title: 'Free Delivery above $20', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80' }
];

const restaurants = [
    {
        id: 'pizza-palace', name: 'Pizza Palace', cat: 'Pizza', rating: 4.7, eta: '25-35min', img: 'image/side-view-pizza-with-slices-bell-pepper-pizza-slices-flour-board-cookware.jpg', menu: [
            { id: 'pizza-palace-m1', name: 'Margherita', price: 8, img: 'image/margherita-pizza-with-cheese-basil-mozzarella.jpg' },
            { id: 'pizza-palace-m2', name: 'Pepperoni', price: 10, img: 'image/top-view-salami-pizza-with-cheese-pepperoni-wooden-table.jpg' },
            { id: 'pizza-palace-m3', name: 'Veggie', price: 9, img: 'image/pizza-with-tomatoes-basil-table.jpg' }
        ]
    },
    {
        id: 'burger-hub', name: 'Burger Hub', cat: 'Burgers', rating: 4.5, eta: '20-30min', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80', menu: [
            { id: 'burger-hub-m1', name: 'Cheeseburger', price: 7, img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80' },
            { id: 'burger-hub-m2', name: 'Double Burger', price: 9, img: 'image/paras-kapoor-bKQWjA1Z3Rs-unsplash.jpg' }
        ]
    },
    {
        id: 'sushi-world', name: 'Sushi World', cat: 'Sushi', rating: 4.8, eta: '30-40min', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=800&q=80', menu: [
            { id: 'sushi-world-m1', name: 'Salmon Roll', price: 12, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80' },
            { id: 'sushi-world-m2', name: 'Tuna Roll', price: 11, img: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&w=800&q=80' }
        ]
    },
    {
        id: 'pasta-point', name: 'Pasta Point', cat: 'Pasta', rating: 4.4, eta: '20-30min', img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80', menu: [
            { id: 'pasta-point-m1', name: 'Carbonara', price: 9, img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80' },
            { id: 'pasta-point-m2', name: 'Penne Arrabiata', price: 8, img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=800&q=80' }
        ]
    },
    {
        id: 'sweet-bites', name: 'Dessert Haven', cat: 'Desserts', rating: 4.6, eta: '15-25min', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', menu: [
            { id: 'sweet-bites-m1', name: 'Chocolate Cake', price: 6, img: 'image/delicious-dessert-table.jpg' },
            { id: 'sweet-bites-m2', name: 'Cheesecake', price: 7, img: 'image/side-view-cheesecake-with-cherry-jelly-top-white-plate.jpg' }
        ]
    }
];

function showSPA(page) {
    document.querySelectorAll('.spa-page').forEach(s => s.classList.remove('active'));
    if (page === 'home') {
        document.getElementById('heroSection').style.display = '';
        document.getElementById('searchbar').style.display = '';
    } else {
        document.getElementById('heroSection').style.display = 'none';
        document.getElementById('searchbar').style.display = 'flex';
    }
    document.getElementById('spa-' + page).classList.add('active');
    if (page === 'home') { renderRestaurants(); }
    if (page === 'menu') { }
    if (page === 'cart') { renderCart(); }
    if (page === 'track') { }
}

const categoriesList = document.getElementById('categoriesList');
categories.forEach(c => {
    const el = document.createElement('div');
    el.className = 'category';
    el.innerHTML = `<img src="${c.img}" alt="${c.name}"><p>${c.name}</p>`;
    el.onclick = () => applyCategory(c.name);
    categoriesList.appendChild(el);
});

const offersList = document.getElementById('offersList');
offers.forEach(o => {
    const el = document.createElement('div');
    el.className = 'offer-card';
    el.innerHTML = `<img src="${o.img}" alt="${o.title}" title="${o.title}">`;
    offersList.appendChild(el);
});

const trendingTrack = document.getElementById('trendingTrack');
function populateTrending() {
    trendingTrack.innerHTML = '';
    const pool = restaurants.concat(restaurants);
    pool.forEach(r => {
        const it = document.createElement('div');
        it.className = 'trending-item';
        it.innerHTML = `<img src="${r.img}" alt="${r.name}"><div><strong>${r.name}</strong><div style="font-size:13px;color:var(--muted)">${r.cat} • ${r.rating}⭐ • ${r.eta}</div></div>`;
        trendingTrack.appendChild(it);
    });
}
populateTrending();

const restaurantsGrid = document.getElementById('restaurantsGrid');
function renderRestaurants(filterCategory = '', query = '') {
    restaurantsGrid.innerHTML = '';
    const q = (query || '').trim().toLowerCase();
    restaurants.forEach(r => {
        if (filterCategory && r.cat !== filterCategory) return;
        const combined = (r.name + ' ' + r.menu.map(m => m.name).join(' ')).toLowerCase();
        if (q && !combined.includes(q)) return;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="${r.img}" alt="${r.name}"><div class="meta"><h4>${r.name}</h4><p>${r.cat} • ${r.eta} • ${r.rating}</p></div><div><button class="badge" onclick="openMenu('${r.id}')">Menu</button></div>`;
        restaurantsGrid.appendChild(card);
    });
}

const searchInput = document.getElementById('searchInput');
const suggestBox = document.getElementById('suggestBox');
const searchIndex = [];
restaurants.forEach(r => {
    searchIndex.push({ type: 'restaurant', name: r.name, id: r.id });
    r.menu.forEach(m => searchIndex.push({ type: 'dish', name: m.name, id: r.id }));
});
function showSuggestions(term) {
    const t = term.trim().toLowerCase();
    if (!t) { suggestBox.style.display = 'none'; return; }
    const list = searchIndex.filter(s => s.name.toLowerCase().includes(t)).slice(0, 8);
    if (list.length === 0) { suggestBox.style.display = 'none'; return; }
    suggestBox.innerHTML = '';
    list.forEach(s => {
        const d = document.createElement('div');
        d.textContent = (s.type === 'restaurant' ? '🏠 ' : '🍽 ') + s.name;
        d.onclick = () => { searchInput.value = s.name; suggestBox.style.display = 'none'; applySearch(); if (s.type === 'restaurant') openMenu(s.id); };
        suggestBox.appendChild(d);
    });
    suggestBox.style.display = 'block';
}
let suggestTimer;
searchInput.addEventListener('input', (e) => { clearTimeout(suggestTimer); suggestTimer = setTimeout(() => showSuggestions(e.target.value), 120); });
searchInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') { applySearch(); suggestBox.style.display = 'none'; } });
function applySearch() { const q = searchInput.value.trim(); renderRestaurants(document.getElementById('categoryFilter').value || '', q); if (q) showSPA('home'); }

function applyCategory(cat) { document.getElementById('categoryFilter').value = cat || ''; renderRestaurants(cat, document.getElementById('searchInput').value || ''); showSPA('home'); }

const modalContainer = document.getElementById('modalContainer');
const modalInner = document.getElementById('modalInner');
function showModal(html) {
    modalInner.innerHTML = html;
    modalContainer.style.display = 'flex';
}
function closeModal() { modalContainer.style.display = 'none'; modalInner.innerHTML = ''; }

const menuHeader = document.getElementById('menuHeader');
const menuGrid = document.getElementById('menuGrid');
let activeRestaurant = null;
function openMenu(id) {
    const r = restaurants.find(x => x.id === id);
    if (!r) return alert('Menu not found');
    activeRestaurant = r;
    menuHeader.innerHTML = `<img src="${r.img}" style="width:120px;height:80px;object-fit:cover;border-radius:10px"><div><h2 style="margin:0">${r.name}</h2><div class="muted">${r.cat} • ${r.eta} • ${r.rating}</div></div>`;
    menuGrid.innerHTML = '';
    r.menu.forEach(m => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `<img src="${m.img}" alt="${m.name}"><h4>${m.name}</h4><div class="muted">₹${m.price}</div><div style="margin-top:auto;display:flex;gap:8px"><button onclick="addToCart('${m.id}','${m.name}',${m.price},'${m.img}')">Add to cart</button></div>`;
        menuGrid.appendChild(card);
    });
    showSPA('menu');
}

let cart = JSON.parse(localStorage.getItem('foodie_cart') || '[]');
function saveCart() { localStorage.setItem('foodie_cart', JSON.stringify(cart)); updateCartBadge(); }

function addToCart(id, name, price, img) {
    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty++;
    else cart.push({ id, name, price, img, qty: 1 });
    saveCart();
    showToast(`${name} added to cart`);
}

function updateCartBadge() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    let badge = document.getElementById('navCartBadge');
    if (!badge) {
        badge = document.createElement('div'); badge.id = 'navCartBadge';
        badge.style.background = 'yellow'; badge.style.color = '#111'; badge.style.padding = '4px 8px';
        badge.style.borderRadius = '999px'; badge.style.fontWeight = '700'; badge.style.marginLeft = '8px';
        document.querySelector('nav').appendChild(badge);
    }
    badge.textContent = total;
    badge.style.display = total > 0 ? 'inline-block' : 'none';
}

function renderCart() {
    const list = document.getElementById('cartList');
    list.innerHTML = '';
    if (cart.length === 0) {
        list.innerHTML = `<div class="muted" style="text-align:center;padding:18px">Your cart is empty</div>`;
        document.getElementById('cartSubtotal').textContent = '₹0';
        return;
    }
    let subtotal = 0;
    cart.forEach((it, idx) => {
        subtotal += it.price * it.qty;
        const row = document.createElement('div');
        row.className = 'cart-row';
        row.innerHTML = `
      <div style="display:flex;gap:12px;align-items:center">
        <img src="${it.img}" style="width:90px;height:64px;object-fit:cover;border-radius:8px" alt="${it.name}">
        <div>
          <div style="font-weight:700">${it.name}</div>
          <div class="muted">₹${it.price} x ${it.qty} = ₹${it.price * it.qty}</div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <div class="qty-controls"><button onclick="changeQty(${idx}, -1)">-</button> <span style="padding:6px 8px">${it.qty}</span> <button onclick="changeQty(${idx}, 1)">+</button></div>
        <div><button style="background:#fee;border:1px solid #fdd;padding:6px;border-radius:8px;cursor:pointer" onclick="removeItem(${idx})">Remove</button></div>
      </div>
    `;
        list.appendChild(row);
    });
    document.getElementById('cartSubtotal').textContent = `₹${subtotal}`;
    saveCart();
}
function changeQty(i, delta) {
    cart[i].qty += delta;
    if (cart[i].qty < 1) cart[i].qty = 1;
    renderCart(); updateCartBadge();
}
function removeItem(i) { cart.splice(i, 1); renderCart(); updateCartBadge(); saveCart(); }

function beginCheckout() {
    if (cart.length === 0) return showToast('Cart is empty');
    const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const orderId = 'LOC-' + Math.random().toString(36).slice(2, 9).toUpperCase();
    document.getElementById('orderSummary').textContent = `Order ${orderId} placed — total ₹${total}`;
    document.getElementById('checkoutModal').style.display = 'flex';
    localStorage.setItem('last_order', JSON.stringify({ orderId, total, createdAt: new Date().toISOString() }));
    cart = []; saveCart(); renderCart();
}
function closeCheckoutModal() { document.getElementById('checkoutModal').style.display = 'none'; }
function goToTracking() { closeCheckoutModal(); showSPA('track'); }
let toastTimer;
function showToast(msg) {
    let t = document.getElementById('toastMsg');
    if (!t) {
        t = document.createElement('div'); t.id = 'toastMsg';
        t.style.position = 'fixed'; t.style.right = '16px'; t.style.bottom = '20px'; t.style.background = 'rgba(0,0,0,0.8)';
        t.style.color = 'white'; t.style.padding = '10px 14px'; t.style.borderRadius = '8px'; t.style.zIndex = 200;
        document.body.appendChild(t);
    }
    t.textContent = msg; t.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.style.opacity = '0', 2200);
}

function simulateTracking() {
    const driver = document.getElementById('driver');
    const dest = document.getElementById('pinDest');
    const area = document.getElementById('mapSim').getBoundingClientRect();
    const destRect = dest.getBoundingClientRect();
    const startX = 40, startY = 40;
    const endX = dest.offsetLeft + 8, endY = dest.offsetTop + 8;
    let steps = 40, step = 0;
    const interval = setInterval(() => {
        step++;
        const t = step / steps;
        const x = startX + (endX - startX) * t;
        const y = startY + (endY - startY) * t;
        driver.style.transform = `translate(${x}px, ${y}px)`;
        if (step >= steps) { clearInterval(interval); showToast('Driver arrived!'); }
    }, 400);
}

function signupLocal() {
    const email = document.getElementById('authEmail').value.trim();
    const pwd = document.getElementById('authPwd').value.trim();
    if (!email || !pwd) { document.getElementById('authMsg').textContent = 'Enter email & password'; return; }
    const users = JSON.parse(localStorage.getItem('foodie_users') || '[]');
    if (users.find(u => u.email === email)) { document.getElementById('authMsg').textContent = 'User exists (local)'; return; }
    users.push({ email, password: pwd });
    localStorage.setItem('foodie_users', JSON.stringify(users));
    document.getElementById('authMsg').textContent = 'Signed up locally — you can now log in.';
}

function loginLocal() {
    const email = document.getElementById('authEmail').value.trim();
    const pwd = document.getElementById('authPwd').value.trim();
    const users = JSON.parse(localStorage.getItem('foodie_users') || '[]');
    const user = users.find(u => u.email === email && u.password === pwd);
    if (user) { document.getElementById('authMsg').textContent = 'Logged in (local)'; showSPA('home'); }
    else document.getElementById('authMsg').textContent = 'Invalid credentials (local)';
}

const carousel = document.getElementById('carousel');
let slideIndex = 0;
const slides = Array.from(carousel.children);
function showSlide(i) {
    const width = carousel.parentElement.clientWidth;
    slideIndex = (i + slides.length) % slides.length;
    carousel.style.transform = `translateX(${-slideIndex * width}px)`;
}
function nextSlide() { showSlide(slideIndex + 1) }
function prevSlide() { showSlide(slideIndex - 1) }
let carouselTimer = setInterval(nextSlide, 4500);
window.addEventListener('resize', () => showSlide(slideIndex));
document.querySelector('.hero-wrap').addEventListener('mouseenter', () => clearInterval(carouselTimer));
document.querySelector('.hero-wrap').addEventListener('mouseleave', () => carouselTimer = setInterval(nextSlide, 4500));
slides.forEach((s, idx) => { const bg = s.dataset.bg; if (bg) s.style.backgroundImage = `url(${bg})`; });
showSlide(0);

(function () {
    if (localStorage.getItem('foodie-dark') === '1') { document.body.classList.add('dark'); }
})();

renderRestaurants();
updateCartBadge();
renderCart();
