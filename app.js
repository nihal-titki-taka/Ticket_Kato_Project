const TRAINS = [
  {
    id: 701,
    name: "Subarna Express",
    src: "Dhaka",
    dst: "Chittagong",
    dep: "07:00",
    arr: "11:00",
    seats: 120,
    prices: {shovan: 345, snigdha: 736, ac_berth: 1176},
  },
  {
    id: 41,
    name: "Turna Nishitha",
    src: "Dhaka",
    dst: "Chittagong",
    dep: "23:00",
    arr: "04:00",
    seats: 80,
    prices: {shovan: 345, snigdha: 736, ac_berth: 1176},
  },
  {
    id: 787,
    name: "Sonar Bangla Express",
    src: "Dhaka",
    dst: "Chittagong",
    dep: "08:30",
    arr: "14:00",
    seats: 0,
    prices: {shovan: 395, snigdha: 843, ac_berth: 1347},
  },
  {
    id: 89,
    name: "Mahanagar Provati",
    src: "Dhaka",
    dst: "Chittagong",
    dep: "07:40",
    arr: "13:00",
    seats: 65,
    prices: {shovan: 345, snigdha: 736, ac_berth: 1176},
  },
  {
    id: 91,
    name: "Mahanagar Godhuli",
    src: "Dhaka",
    dst: "Chittagong",
    dep: "15:00",
    arr: "20:30",
    seats: 44,
    prices: {shovan: 345, snigdha: 736, ac_berth: 1176},
  },

  {
    id: 702,
    name: "Subarna Express",
    src: "Chittagong",
    dst: "Dhaka",
    dep: "07:00",
    arr: "11:30",
    seats: 90,
    prices: {shovan: 345, snigdha: 736, ac_berth: 1176},
  },
  {
    id: 42,
    name: "Turna Nishitha",
    src: "Chittagong",
    dst: "Dhaka",
    dep: "23:00",
    arr: "04:00",
    seats: 70,
    prices: {shovan: 345, snigdha: 736, ac_berth: 1176},
  },
  {
    id: 90,
    name: "Mahanagar Provati",
    src: "Chittagong",
    dst: "Dhaka",
    dep: "07:40",
    arr: "13:30",
    seats: 55,
    prices: {shovan: 345, snigdha: 736, ac_berth: 1176},
  },

  {
    id: 719,
    name: "Parabat Express",
    src: "Dhaka",
    dst: "Sylhet",
    dep: "06:40",
    arr: "12:30",
    seats: 110,
    prices: {shovan: 215, snigdha: 457, ac_berth: 731},
  },
  {
    id: 723,
    name: "Kalni Express",
    src: "Dhaka",
    dst: "Sylhet",
    dep: "09:50",
    arr: "16:00",
    seats: 45,
    prices: {shovan: 215, snigdha: 457, ac_berth: 731},
  },
  {
    id: 725,
    name: "Joyantika Express",
    src: "Dhaka",
    dst: "Sylhet",
    dep: "22:00",
    arr: "04:30",
    seats: 60,
    prices: {shovan: 215, snigdha: 457, ac_berth: 731},
  },

  {
    id: 720,
    name: "Parabat Express",
    src: "Sylhet",
    dst: "Dhaka",
    dep: "06:40",
    arr: "12:35",
    seats: 70,
    prices: {shovan: 215, snigdha: 457, ac_berth: 731},
  },
  {
    id: 726,
    name: "Joyantika Express",
    src: "Sylhet",
    dst: "Dhaka",
    dep: "21:45",
    arr: "04:20",
    seats: 50,
    prices: {shovan: 215, snigdha: 457, ac_berth: 731},
  },

  {
    id: 761,
    name: "Silk City Express",
    src: "Dhaka",
    dst: "Rajshahi",
    dep: "14:40",
    arr: "20:00",
    seats: 75,
    prices: {shovan: 270, snigdha: 576, ac_berth: 921},
  },
  {
    id: 763,
    name: "Padma Express",
    src: "Dhaka",
    dst: "Rajshahi",
    dep: "22:40",
    arr: "04:30",
    seats: 50,
    prices: {shovan: 270, snigdha: 576, ac_berth: 921},
  },
  {
    id: 765,
    name: "Dhumketu Express",
    src: "Dhaka",
    dst: "Rajshahi",
    dep: "06:00",
    arr: "12:20",
    seats: 85,
    prices: {shovan: 270, snigdha: 576, ac_berth: 921},
  },

  {
    id: 762,
    name: "Silk City Express",
    src: "Rajshahi",
    dst: "Dhaka",
    dep: "07:00",
    arr: "12:30",
    seats: 88,
    prices: {shovan: 270, snigdha: 576, ac_berth: 921},
  },
  {
    id: 764,
    name: "Padma Express",
    src: "Rajshahi",
    dst: "Dhaka",
    dep: "23:30",
    arr: "05:15",
    seats: 40,
    prices: {shovan: 270, snigdha: 576, ac_berth: 921},
  },

  {
    id: 725,
    name: "Sundarban Express",
    src: "Dhaka",
    dst: "Khulna",
    dep: "06:20",
    arr: "13:00",
    seats: 95,
    prices: {shovan: 340, snigdha: 726, ac_berth: 1160},
  },
  {
    id: 727,
    name: "Chitra Express",
    src: "Dhaka",
    dst: "Khulna",
    dep: "22:00",
    arr: "06:00",
    seats: 60,
    prices: {shovan: 340, snigdha: 726, ac_berth: 1160},
  },

  {
    id: 726,
    name: "Sundarban Express",
    src: "Khulna",
    dst: "Dhaka",
    dep: "08:30",
    arr: "15:15",
    seats: 55,
    prices: {shovan: 340, snigdha: 726, ac_berth: 1160},
  },
  {
    id: 728,
    name: "Chitra Express",
    src: "Khulna",
    dst: "Dhaka",
    dep: "20:00",
    arr: "04:00",
    seats: 48,
    prices: {shovan: 340, snigdha: 726, ac_berth: 1160},
  },

  {
    id: 7,
    name: "Comilla Express",
    src: "Dhaka",
    dst: "Comilla",
    dep: "07:40",
    arr: "09:45",
    seats: 130,
    prices: {shovan: 120, snigdha: 257, ac_berth: 411},
  },
  {
    id: 9,
    name: "Titas Commuter",
    src: "Dhaka",
    dst: "Comilla",
    dep: "14:30",
    arr: "16:40",
    seats: 100,
    prices: {shovan: 100, snigdha: 213, ac_berth: 341},
  },

  {
    id: 8,
    name: "Comilla Express",
    src: "Comilla",
    dst: "Dhaka",
    dep: "08:10",
    arr: "10:20",
    seats: 85,
    prices: {shovan: 120, snigdha: 257, ac_berth: 411},
  },

  {
    id: 11,
    name: "Jamuna Express",
    src: "Dhaka",
    dst: "Mymensingh",
    dep: "07:30",
    arr: "10:00",
    seats: 120,
    prices: {shovan: 85, snigdha: 181, ac_berth: 290},
  },
  {
    id: 13,
    name: "Agnibeena Express",
    src: "Dhaka",
    dst: "Mymensingh",
    dep: "22:00",
    arr: "00:30",
    seats: 80,
    prices: {shovan: 85, snigdha: 181, ac_berth: 290},
  },

  {
    id: 12,
    name: "Jamuna Express",
    src: "Mymensingh",
    dst: "Dhaka",
    dep: "06:00",
    arr: "08:30",
    seats: 90,
    prices: {shovan: 85, snigdha: 181, ac_berth: 290},
  },
];

const CITY_COORDS = {
  Dhaka: {lat: 23.8103, lon: 90.4125},
  Chittagong: {lat: 22.3569, lon: 91.7832},
  Sylhet: {lat: 24.8949, lon: 91.8687},
  Rajshahi: {lat: 24.3745, lon: 88.6042},
  Khulna: {lat: 22.8456, lon: 89.5403},
  Comilla: {lat: 23.4607, lon: 91.1809},
  Mymensingh: {lat: 24.7471, lon: 90.4203},
};

const WEATHER_CODES = {
  0: "☀️ Clear sky",
  1: "🌤️ Mainly clear",
  2: "⛅ Partly cloudy",
  3: "☁️ Overcast",
  45: "🌫️ Foggy",
  48: "🌫️ Icy fog",
  51: "🌦️ Light drizzle",
  53: "🌦️ Drizzle",
  55: "🌧️ Heavy drizzle",
  61: "🌧️ Light rain",
  63: "🌧️ Rain",
  65: "🌧️ Heavy rain",
  80: "🌦️ Showers",
  81: "🌦️ Rain showers",
  82: "⛈️ Heavy showers",
  95: "⛈️ Thunderstorm",
  99: "⛈️ Severe storm",
};

let currentUser = null;
let bookingTrain = null;
let selectedClass = "shovan";
let selectedPayTab = "card";
let searchDate = "";

function init() {
  const today = new Date().toISOString().split("T")[0];
  document.getElementById("search-date").min = today;
  document.getElementById("search-date").value = today;

  const saved = sessionStorage.getItem("br_user");
  if (saved) {
    currentUser = JSON.parse(saved);
    renderNavAuth();
  }

  updateStatBooked();

  document.getElementById("card-num").addEventListener("input", function () {
    let val = this.value.replace(/\D/g, "").slice(0, 16);
    this.value = val.match(/.{1,4}/g)?.join(" ") || val;
  });

  document.getElementById("card-expiry").addEventListener("input", function () {
    let val = this.value.replace(/\D/g, "");
    if (val.length > 2) val = val.slice(0, 2) + "/" + val.slice(2, 4);
    this.value = val;
  });
}

function getUsers() {
  return JSON.parse(localStorage.getItem("br_users") || "[]");
}
function saveUsers(u) {
  localStorage.setItem("br_users", JSON.stringify(u));
}
function getTickets() {
  return JSON.parse(localStorage.getItem("br_tickets") || "[]");
}
function saveTickets(t) {
  localStorage.setItem("br_tickets", JSON.stringify(t));
}

function showPage(page) {
  document.querySelectorAll(".page").forEach((p) => {
    p.style.display = "none";
    p.classList.remove("active");
  });
  document
    .querySelectorAll("#main-nav a, .mobile-nav a")
    .forEach((a) => a.classList.remove("active"));

  const el = document.getElementById("page-" + page);
  if (el) {
    el.style.display = "block";
    el.classList.add("active");
  }

  const navLink = document.getElementById("nav-" + page);
  if (navLink) navLink.classList.add("active");

  window.scrollTo({top: 0, behavior: "smooth"});

  if (page === "tickets") loadMyTickets();
}

function requireAuth(callback) {
  if (!currentUser) {
    showToast("Please login to continue", "error");
    openModal("modal-auth");
  } else {
    callback();
  }
}

function toggleTheme() {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "light" : "dark",
  );
  document.getElementById("theme-btn").textContent = isDark ? "☀️" : "🌙";
  showToast(isDark ? "Light mode ☀️" : "Dark mode 🌙", "info");
}

function toggleMobileNav() {
  document.getElementById("mobile-nav").classList.toggle("open");
}

function closeMobileNav() {
  document.getElementById("mobile-nav").classList.remove("open");
}

function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

function overlayClick(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

function showToast(msg, type = "success") {
  const icons = {success: "✅", error: "❌", info: "ℹ️"};
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  toast.innerHTML = `<span>${icons[type]}</span><span>${msg}</span>`;
  document.getElementById("toast-container").appendChild(toast);
  setTimeout(() => toast.remove(), 3600);
}

function switchAuthTab(tab) {
  document.querySelectorAll(".tabs .tab-btn").forEach((btn, i) => {
    btn.classList.toggle(
      "active",
      (tab === "login" && i === 0) || (tab === "register" && i === 1),
    );
  });
  document.getElementById("tab-login").style.display =
    tab === "login" ? "block" : "none";
  document.getElementById("tab-register").style.display =
    tab === "register" ? "block" : "none";
  document.getElementById("auth-title").textContent =
    tab === "login" ? "Welcome Back" : "Create Account";
}

function setErr(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

function clrErr(...ids) {
  ids.forEach((id) => setErr(id, ""));
}

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validPhone(phone) {
  return /^01[3-9]\d{8}$/.test(phone);
}

function doLogin() {
  const email = document.getElementById("login-email").value.trim();
  const pass = document.getElementById("login-pass").value;
  clrErr("err-login-email", "err-login-pass");
  document.getElementById("login-alert").innerHTML = "";

  let valid = true;
  if (!email) {
    setErr("err-login-email", "Email is required");
    valid = false;
  } else if (!validEmail(email)) {
    setErr("err-login-email", "Invalid email format");
    valid = false;
  }
  if (!pass) {
    setErr("err-login-pass", "Password is required");
    valid = false;
  }
  if (!valid) return;

  const user = getUsers().find((u) => u.email === email && u.password === pass);
  if (!user) {
    document.getElementById("login-alert").innerHTML =
      '<div class="alert alert-error">❌ Wrong email or password</div>';
    return;
  }

  currentUser = user;
  sessionStorage.setItem("br_user", JSON.stringify(user));
  renderNavAuth();
  closeModal("modal-auth");
  showToast(`Welcome back, ${user.name}! 👋`);
  updateStatBooked();
}

function doRegister() {
  const name = document.getElementById("reg-name").value.trim();
  const email = document.getElementById("reg-email").value.trim();
  const phone = document.getElementById("reg-phone").value.trim();
  const age = parseInt(document.getElementById("reg-age").value);
  const pass = document.getElementById("reg-pass").value;
  const pass2 = document.getElementById("reg-pass2").value;
  clrErr(
    "err-reg-name",
    "err-reg-email",
    "err-reg-phone",
    "err-reg-age",
    "err-reg-pass",
    "err-reg-pass2",
  );
  document.getElementById("reg-alert").innerHTML = "";

  let valid = true;
  if (!name) {
    setErr("err-reg-name", "Name required");
    valid = false;
  }
  if (!email) {
    setErr("err-reg-email", "Email required");
    valid = false;
  } else if (!validEmail(email)) {
    setErr("err-reg-email", "Invalid email");
    valid = false;
  }
  if (!phone) {
    setErr("err-reg-phone", "Phone required");
    valid = false;
  } else if (!validPhone(phone)) {
    setErr("err-reg-phone", "Must be 01XXXXXXXXX");
    valid = false;
  }
  if (!age || age < 5 || age > 120) {
    setErr("err-reg-age", "Enter valid age");
    valid = false;
  }
  if (!pass || pass.length < 6) {
    setErr("err-reg-pass", "Min 6 characters");
    valid = false;
  }
  if (pass !== pass2) {
    setErr("err-reg-pass2", "Passwords do not match");
    valid = false;
  }
  if (!valid) return;

  const users = getUsers();
  if (users.find((u) => u.email === email)) {
    document.getElementById("reg-alert").innerHTML =
      '<div class="alert alert-error">❌ Email already registered</div>';
    return;
  }

  const newUser = {name, email, phone, age, password: pass, role: "passenger"};
  users.push(newUser);
  saveUsers(users);
  currentUser = newUser;
  sessionStorage.setItem("br_user", JSON.stringify(newUser));
  renderNavAuth();
  closeModal("modal-auth");
  showToast(`Account created! Welcome, ${name}! 🎉`);
}

function logout() {
  currentUser = null;
  sessionStorage.removeItem("br_user");
  renderNavAuth();
  showPage("home");
  showToast("Logged out", "info");
}

function renderNavAuth() {
  const area = document.getElementById("nav-auth-area");
  if (currentUser) {
    area.innerHTML = `
      <div class="user-badge">👤 ${currentUser.name.split(" ")[0]}</div>
      <button class="btn btn-outline btn-sm" onclick="logout()">Logout</button>
    `;
  } else {
    area.innerHTML = `<button class="btn btn-outline btn-sm" onclick="openModal('modal-auth')">Login / Register</button>`;
  }
}

function doSearch() {
  const from = document.getElementById("search-from").value;
  const to = document.getElementById("search-to").value;
  const date = document.getElementById("search-date").value;
  const errEl = document.getElementById("search-error");
  errEl.textContent = "";

  if (!from) {
    errEl.textContent = "Please select departure city";
    return;
  }
  if (!to) {
    errEl.textContent = "Please select destination city";
    return;
  }
  if (from === to) {
    errEl.textContent = "From and To cannot be the same city";
    return;
  }
  if (!date) {
    errEl.textContent = "Please select a travel date";
    return;
  }

  searchDate = date;
  const results = TRAINS.filter((t) => t.src === from && t.dst === to);
  const fmtDate = new Date(date + "T00:00:00").toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  document.getElementById("results-subtitle").textContent =
    `${from} → ${to} · ${fmtDate} · ${results.length} টি ট্রেন পাওয়া গেছে`;

  renderTrainCards(results);
  fetchWeather(to);
  showPage("results");
}

function calcDuration(dep, arr) {
  const [dh, dm] = dep.split(":").map(Number);
  const [ah, am] = arr.split(":").map(Number);
  let mins = ah * 60 + am - (dh * 60 + dm);
  if (mins < 0) mins += 1440;
  return `${Math.floor(mins / 60)}h ${mins % 60}m`;
}

function renderTrainCards(trains) {
  const list = document.getElementById("train-list");
  if (!trains.length) {
    list.innerHTML = `
      <div class="no-results">
        <div style="font-size:3rem">🚫</div><br>
        <strong>No trains on this route</strong><br>
        <span style="font-size:.88rem">Try swapping cities or choose a different date</span>
      </div>`;
    return;
  }

  list.innerHTML = trains
    .map(
      (t) => `
    <div class="train-card fade-in">
      <div>
        <div class="train-name">${t.name}</div>
        <div class="train-num-tag">#${t.id}</div>
        <div class="train-route">
          <div><div class="route-time">${t.dep}</div><div class="route-city">${t.src}</div></div>
          <div class="route-line"></div>
          <div style="text-align:right"><div class="route-time">${t.arr}</div><div class="route-city">${t.dst}</div></div>
        </div>
        <div class="train-meta">
          <span class="meta-tag ${t.seats > 0 ? "meta-avail" : "meta-full"}">${t.seats > 0 ? "✓ " + t.seats + " seats" : "✗ Sold Out"}</span>
          <span class="meta-tag">⏱ ${calcDuration(t.dep, t.arr)}</span>
          <span class="meta-tag">💺 শোভন / স্নিগ্ধা / এসি বার্থ</span>
        </div>
      </div>
      <div class="price-section">
        <div class="from-lbl">From</div>
        <div class="price-big">৳${t.prices.shovan}</div>
        <div style="margin-top:.75rem">
          ${
            t.seats > 0
              ? `<button class="btn btn-primary btn-sm" onclick="openBooking(${t.id})">Book Now</button>`
              : `<button class="btn btn-outline btn-sm" disabled>Sold Out</button>`
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

async function fetchWeather(city) {
  const bar = document.getElementById("weather-bar");
  bar.innerHTML = '<span class="loader"></span>&nbsp; Fetching weather...';
  const coords = CITY_COORDS[city];
  if (!coords) {
    bar.innerHTML = "";
    return;
  }
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true&hourly=relative_humidity_2m&timezone=Asia%2FDhaka`,
    );
    const data = await res.json();
    const w = data.current_weather;
    const desc = WEATHER_CODES[w.weathercode] || "🌡️ Unknown";
    const hum =
      data.hourly?.relative_humidity_2m?.[new Date().getHours()] ?? "--";
    bar.innerHTML = `
      <div>
        <div style="font-size:.7rem;color:var(--muted);text-transform:uppercase;letter-spacing:.06em">Weather at Destination</div>
        <div class="w-city">${city}</div>
      </div>
      <div class="w-temp">${w.temperature}°C</div>
      <div class="w-desc">${desc}</div>
      <div class="w-desc">💨 ${w.windspeed} km/h</div>
      <div class="w-desc">💧 ${hum}% humidity</div>
    `;
  } catch (err) {
    bar.innerHTML =
      '<span style="color:var(--muted);font-size:.85rem">⚠️ Weather unavailable</span>';
  }
}

function openBooking(id) {
  if (!currentUser) {
    showToast("Please login to book", "error");
    openModal("modal-auth");
    return;
  }

  bookingTrain = TRAINS.find((t) => t.id === id);
  if (!bookingTrain) return;

  selectedClass = "shovan";
  selectedPayTab = "card";

  document.getElementById("booking-train-info").innerHTML = `
    <div style="font-family:Syne;font-weight:700;font-size:1rem;margin-bottom:.5rem">${bookingTrain.name}</div>
    <div style="display:flex;gap:1rem;flex-wrap:wrap;font-size:.86rem;color:var(--muted)">
      <span>#${bookingTrain.id}</span>
      <span>📍 ${bookingTrain.src} → ${bookingTrain.dst}</span>
      <span>🕐 ${bookingTrain.dep} – ${bookingTrain.arr}</span>
    </div>
  `;

  const classes = [
    {key: "shovan", label: "শোভন (Shovan)", icon: "💺"},
    {key: "snigdha", label: "স্নিগ্ধা (Snigdha)", icon: "🪑"},
    {key: "ac_berth", label: "এসি বার্থ (AC Berth)", icon: "🛏️"},
  ];

  document.getElementById("class-radio").innerHTML = classes
    .map(
      (c) => `
    <label class="radio-item">
      <input type="radio" name="sc" value="${c.key}" ${c.key === "shovan" ? "checked" : ""} onchange="selectedClass='${c.key}';updateTotal()">
      <span style="font-size:.88rem">${c.icon} ${c.label}</span>
      <span class="radio-price">৳${bookingTrain.prices[c.key]}</span>
    </label>
  `,
    )
    .join("");

  document.getElementById("pref-food").checked = false;
  document.getElementById("pref-window").checked = false;
  document.getElementById("card-num").value = "";
  document.getElementById("card-expiry").value = "";
  document.getElementById("card-cvv").value = "";
  document.getElementById("bkash-num").value = "";
  document.getElementById("nagad-num").value = "";
  clrErr("err-card", "err-bkash", "err-nagad");
  document.getElementById("booking-alert").innerHTML = "";

  document
    .querySelectorAll(".pay-tab")
    .forEach((t, i) => t.classList.toggle("active", i === 0));
  document
    .querySelectorAll(".pay-fields")
    .forEach((f) => f.classList.remove("active"));
  document.getElementById("pay-card").classList.add("active");

  updateTotal();
  openModal("modal-booking");
}

function switchPayTab(tab) {
  selectedPayTab = tab;
  const tabs = ["card", "bkash", "nagad"];
  document
    .querySelectorAll(".pay-tab")
    .forEach((t, i) => t.classList.toggle("active", tabs[i] === tab));
  document
    .querySelectorAll(".pay-fields")
    .forEach((f) => f.classList.remove("active"));
  document.getElementById("pay-" + tab).classList.add("active");
}

function updateTotal() {
  if (!bookingTrain) return;
  const base = bookingTrain.prices[selectedClass];
  const meal = document.getElementById("pref-food").checked ? 150 : 0;
  document.getElementById("booking-total").innerHTML = `
    <div class="row"><span>ভাড়া (${selectedClass})</span><span>৳${base}</span></div>
    ${meal ? `<div class="row"><span>Meal package</span><span>৳${meal}</span></div>` : ""}
    <div class="row total"><span>Total Amount</span><span>৳${base + meal}</span></div>
  `;
}

function confirmBooking() {
  if (!bookingTrain || !currentUser) return;
  clrErr("err-card", "err-bkash", "err-nagad");
  document.getElementById("booking-alert").innerHTML = "";

  let payInfo = "";

  if (selectedPayTab === "card") {
    const num = document.getElementById("card-num").value.replace(/\s/g, "");
    if (!num || num.length < 13) {
      setErr("err-card", "Enter a valid card number");
      return;
    }
    payInfo = "Card ****" + num.slice(-4);
  } else if (selectedPayTab === "bkash") {
    const num = document.getElementById("bkash-num").value.trim();
    if (!validPhone(num)) {
      setErr("err-bkash", "Enter valid bKash number (01XXXXXXXXX)");
      return;
    }
    payInfo = "bKash: " + num;
  } else {
    const num = document.getElementById("nagad-num").value.trim();
    if (!validPhone(num)) {
      setErr("err-nagad", "Enter valid Nagad number (01XXXXXXXXX)");
      return;
    }
    payInfo = "Nagad: " + num;
  }

  const base = bookingTrain.prices[selectedClass];
  const meal = document.getElementById("pref-food").checked ? 150 : 0;
  const tktNum = Math.floor(Math.random() * 90000) + 10000;
  const seatRow = String.fromCharCode(65 + Math.floor(Math.random() * 8));
  const seatCol = Math.floor(Math.random() * 30) + 1;
  const seat = seatRow + seatCol;

  const ticket = {
    ticketNumber: tktNum,
    trainId: bookingTrain.id,
    trainName: bookingTrain.name,
    src: bookingTrain.src,
    dst: bookingTrain.dst,
    dep: bookingTrain.dep,
    arr: bookingTrain.arr,
    seatClass: selectedClass,
    seatNumber: seat,
    price: base + meal,
    hasMeal: meal > 0,
    payment: payInfo,
    passengerEmail: currentUser.email,
    passengerName: currentUser.name,
    date: searchDate || new Date().toISOString().split("T")[0],
    cancelled: false,
    bookedAt: new Date().toISOString(),
  };

  const tickets = getTickets();
  tickets.push(ticket);
  saveTickets(tickets);

  closeModal("modal-booking");
  showToast(`🎫 Ticket #${tktNum} booked! Seat ${seat}`);
  updateStatBooked();
  setTimeout(() => requireAuth(() => showPage("tickets")), 700);
}

function loadMyTickets() {
  if (!currentUser) {
    showPage("home");
    return;
  }

  const mine = getTickets().filter(
    (t) => t.passengerEmail === currentUser.email,
  );
  const list = document.getElementById("ticket-list");

  if (!mine.length) {
    list.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <div class="e-icon">🎫</div>
        <h3>No tickets yet</h3>
        <p>Book your first train journey!</p><br>
        <button class="btn btn-primary" onclick="showPage('home')">Search Trains</button>
      </div>`;
    return;
  }

  list.innerHTML = [...mine]
    .reverse()
    .map(
      (t) => `
    <div class="ticket-card ${t.cancelled ? "cancelled" : ""} fade-in">
      <div class="ticket-header">
        <div><div class="t-name">${t.trainName}</div><div class="t-num">#${t.ticketNumber}</div></div>
        <span class="ticket-badge ${t.cancelled ? "badge-cancelled" : "badge-active"}">${t.cancelled ? "Cancelled" : "Active"}</span>
      </div>
      <div class="ticket-body">
        <div class="ticket-route">
          <span class="tkt-city">${t.src}</span>
          <span class="tkt-arr">→</span>
          <span class="tkt-city">${t.dst}</span>
        </div>
        <div class="ticket-details">
          <div class="tkt-detail"><label>Date</label><span>${t.date}</span></div>
          <div class="tkt-detail"><label>Departure</label><span>${t.dep}</span></div>
          <div class="tkt-detail"><label>Class</label><span>${{shovan: "শোভন", snigdha: "স্নিগ্ধা", ac_berth: "এসি বার্থ"}[t.seatClass] || t.seatClass}</span></div>
          <div class="tkt-detail"><label>Seat</label><span class="seat-badge">${t.seatNumber}</span></div>
          <div class="tkt-detail"><label>Price</label><span>৳${t.price}</span></div>
          <div class="tkt-detail"><label>Payment</label><span style="font-size:.78rem">${t.payment}</span></div>
        </div>
        ${!t.cancelled ? `<button class="btn btn-danger btn-sm" onclick="cancelTicket(${t.ticketNumber})">Cancel Ticket</button>` : ""}
      </div>
    </div>
  `,
    )
    .join("");
}

function cancelTicket(num) {
  if (!confirm(`Cancel ticket #${num}? This cannot be undone.`)) return;
  const tickets = getTickets();
  const idx = tickets.findIndex((t) => t.ticketNumber === num);
  if (idx !== -1) {
    tickets[idx].cancelled = true;
    saveTickets(tickets);
  }
  showToast(`Ticket #${num} cancelled`, "info");
  loadMyTickets();
  updateStatBooked();
}

function updateStatBooked() {
  const count = getTickets().filter((t) => !t.cancelled).length;
  animateCount("stat-booked", count);
}

function animateCount(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 30));
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current;
    if (current >= target) clearInterval(timer);
  }, 25);
}

init();
