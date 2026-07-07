const { useState } = React;

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const PHONE = "+81 80-7307-2277";
const WA_NUMBER = "818073072277";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;
const EMAIL = "risingsunservices.jp@gmail.com";
const QR_URL = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(WA_LINK)}&margin=10`;
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScXs5pYJco-IS8WDxczFNcKQWyy9KWgTEjEFM-Gdifnbaz2eA/formResponse";
const GOOGLE_FORM_ENTRIES = {
  name: "entry.1161924968",
  email: "entry.1208742533",
  phone: "entry.525390",
  subject: "entry.478878578",
  message: "entry.131440110",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const carWorkflow = [
  { step: 1, icon: "📝", title: "Primary Inquiry",      desc: "Submit your requirements and budget via our inquiry form or WhatsApp." },
  { step: 2, icon: "💬", title: "Consultation",         desc: "Email or online meeting to fix the right vehicle and finalize budget." },
  { step: 3, icon: "🔍", title: "Auction Search",       desc: "We search Japan's car auctions for your exact specification." },
  { step: 4, icon: "💳", title: "Transaction",          desc: "Secure payment procedure, invoicing, and export documentation." },
  { step: 5, icon: "🚢", title: "Shipping",             desc: "Vehicle loaded at Japan port and shipped to destination." },
  { step: 6, icon: "⚓", title: "Port Clearance",       desc: "Customs clearance handled at the destination port." },
  { step: 7, icon: "📋", title: "BRTA Processing",      desc: "Vehicle registration with BRTA for Bangladesh customers." },
  { step: 8, icon: "🏠", title: "Home Delivery",        desc: "Your vehicle delivered to your doorstep. Drive away!" },
];

const showcaseCars = [
  { make: "Toyota", model: "Alphard", year: "2022", price: "¥4,500,000~", km: "22,000 km", color: "Pearl White", fuel: "Hybrid", img: "./assets/cars/alphard.jpg" },
  { make: "Toyota", model: "Land Cruiser", year: "2021", price: "¥7,200,000~", km: "35,000 km", color: "Black", fuel: "Diesel", img: "./assets/cars/landcruiser.jpg" },
  { make: "Toyota", model: "Hiace Van", year: "2020", price: "¥2,800,000~", km: "48,000 km", color: "Silver", fuel: "Diesel", img: "./assets/cars/hiace.jpg" },
  { make: "Honda",  model: "Freed",    year: "2023", price: "¥1,900,000~", km: "12,000 km", color: "Blue", fuel: "Hybrid", img: "./assets/cars/freed.jpg" },
];

const electronicsCategories = [
  { icon: "📱", title: "Smartphones & Tablets",    desc: "Latest models, new and pre-owned.",               brands: "Apple · Samsung · Sony · Sharp" },
  { icon: "💻", title: "Laptops & Computers",      desc: "Business and personal use, new and refurbished.", brands: "Apple · Dell · Lenovo · HP · Panasonic" },
  { icon: "🖥️",  title: "Servers & Networking",    desc: "Enterprise servers, NAS, switches, routers.",     brands: "HP · Dell · Cisco · Synology · Buffalo" },
  { icon: "🎧", title: "Accessories & Peripherals",desc: "Monitors, keyboards, cables, storage, memory.",   brands: "Genuine & OEM Parts" },
];

const tourServices = [
  { icon: "✈️", title: "Airport Transfer",      desc: "Seamless pickup and drop-off at Narita, Haneda, Kansai, and major airports across Japan." },
  { icon: "🗼", title: "City Tour Guidance",    desc: "Expert guided tours of Tokyo, Osaka, Kyoto, Nara, Hiroshima, and more." },
  { icon: "🏔️", title: "Day Trip Planning",    desc: "Mount Fuji, Nikko, Hakone, Kamakura — we plan perfect day trips from major cities." },
  { icon: "📅", title: "Custom Itinerary",      desc: "Share your dates, interests, and budget — we build a personalized Japan travel plan." },
  { icon: "🏨", title: "Hotel & Dining",        desc: "Curated recommendations and reservations for hotels, ryokans, and authentic local restaurants." },
  { icon: "🎌", title: "Cultural Experiences",  desc: "Tea ceremonies, kimono fitting, temple visits, local festivals — authentic Japan." },
];

const itServices = [
  {
    title: "Website / Homepage Design", price: "¥50,000~",
    desc: "Professional, responsive website tailored to your brand.",
    features: ["5 Pages Included", "Mobile Responsive", "SEO Optimized", "Contact Form Integration", "1 Month Free Support"],
  },
  {
    title: "E-Commerce Development", price: "¥500,000~",
    desc: "Full-featured online store with payment gateway integration.",
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management", "Admin Dashboard"],
    highlight: true,
  },
  {
    title: "Business Management System", price: "¥200,000~",
    desc: "Streamline your operations with a custom business system.",
    features: ["Inventory Management", "Employee Tracking", "Report Generation", "Analytics Dashboard", "Multi-user Access"],
  },
  {
    title: "Educational Management System", price: "¥200,000~",
    desc: "Complete digital solution for schools and institutions.",
    features: ["Student Records", "Attendance System", "Grade Management", "Parent Portal", "Communication Tools"],
  },
];

const portfolioProjects = [
  {
    icon: "👤",
    title: "Kabir Md Nasim Al Awal",
    subtitle: "Personal Branding Website",
    desc: "Personal branding site for a Data Center Technician at Microsoft — engineer, Bengali poet, and explorer based in Tokyo, Japan.",
    url: "https://shayban-nasif.github.io/kabi-website/",
    tags: ["Personal Branding", "Portfolio", "Tokyo"],
  },
  {
    icon: "🏥",
    title: "Dr. Nabina Rahman",
    subtitle: "Professional Profile & Blog",
    desc: "Professional profile and research blog for an Assistant Professor of Plastic & Reconstructive Surgery, showcasing published work and career highlights.",
    url: "https://shayban-nasif.github.io/DrNabinaRahmanBlog/",
    tags: ["Medical", "Blog", "Portfolio"],
  },
  {
    icon: "🕌",
    title: "Makki Masjid Gakuin",
    subtitle: "Islamic Education Institution",
    desc: "Full website for an Islamic school in Japan offering Hifz & Nazera programs — with course listings, parent testimonials, and multilingual support.",
    url: "https://gakuin.makkimasjid.jp/",
    tags: ["Education", "Institution", "Japan"],
  },
  {
    icon: "🏢",
    title: "Nojima International Co. Ltd.",
    subtitle: "Corporate Multi-Service Website",
    desc: "Multilingual corporate website for a Japan-based consulting firm offering real estate, visa support, SIM cards, car sales, and career services.",
    url: "https://nojimaint.jp/en/",
    tags: ["Corporate", "Multilingual", "Consulting"],
  },
];

const roboticsCourses = [
  { level: "Beginner (Age 7–9)",    price: "¥30,000/month", duration: "3 months", topics: ["Intro to Robotics", "Block Programming", "Simple Circuits", "Basic Sensors"] },
  { level: "Intermediate (Age 10–12)", price: "¥35,000/month", duration: "3 months", topics: ["Arduino Basics", "Coding Fundamentals", "Motor Control", "LED Projects"] },
  { level: "Advanced (Age 13–15)", price: "¥40,000/month", duration: "3 months", topics: ["Advanced Arduino", "Python Programming", "AI Concepts", "Competition Prep"] },
];

// ─── SHARED UI ────────────────────────────────────────────────────────────────
function SectionHeader({ title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12">
      <h2 className={`text-4xl font-black mb-4 ${light ? "text-white" : "text-gray-900"}`}>{title}</h2>
      {subtitle && <p className={`text-lg max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-500"}`}>{subtitle}</p>}
    </div>
  );
}

function Chip({ label }) {
  return <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">{label}</span>;
}

function WaBtn({ cls = "" }) {
  return (
    <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition ${cls}`}>
      <span>📱</span> WhatsApp Us
    </a>
  );
}

// ─── CONTACT BAR (top strip) ──────────────────────────────────────────────────
function ContactBar() {
  return (
    <div className="bg-gray-950 text-gray-400 py-2 px-4 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-3">
        <span>
          A brand of{" "}
          <a href="https://asdiqa.jp" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-semibold">
            Asdiqa Co. Ltd.
          </a>{" "}
          — Registered in Japan
        </span>
        <div className="flex items-center gap-5">
          <a href={`mailto:${EMAIL}`} className="hover:text-white transition flex items-center gap-1">
            ✉ {EMAIL}
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition flex items-center gap-1">
            📱 {PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ active, go }) {
  const [open, setOpen] = useState(false);
  const tabs = [
    { label: "Home",           value: "home" },
    { label: "RS Tech Lab",    value: "techlab" },
    { label: "RS Cars",        value: "cars" },
    { label: "RS Electronics", value: "electronics" },
    { label: "RS Tours",       value: "tours" },
    { label: "Contact",        value: "contact" },
  ];
  const navigate = (v) => { go(v); setOpen(false); };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <button onClick={() => navigate("home")} className="focus:outline-none">
          <img src="./assets/logos/RS-Logo-ver-new.png?v=2" alt="Rising Sun Services" className="h-12 w-auto object-contain" />
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex gap-1 text-xs font-bold uppercase tracking-wider">
          {tabs.map(t => (
            <button key={t.value} onClick={() => navigate(t.value)}
              className={`px-3 py-2 rounded-lg transition ${active === t.value ? "text-orange-600 bg-orange-50" : "text-gray-500 hover:text-orange-600 hover:bg-gray-50"}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setOpen(!open)}>
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t bg-white divide-y">
          {tabs.map(t => (
            <button key={t.value} onClick={() => navigate(t.value)}
              className={`block w-full text-left px-5 py-4 text-sm font-bold uppercase tracking-wider transition ${active === t.value ? "text-orange-600 bg-orange-50" : "text-gray-600 hover:bg-gray-50"}`}>
              {t.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ go }) {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-10 mb-10">
          <div className="md:col-span-2">
            <img src="./assets/logos/RS-Logo-ver-new.png" alt="Rising Sun Services" className="h-14 w-auto object-contain mb-4" />
            <p className="text-sm mb-4 leading-relaxed">
              Multi-domain business bridging Japan and the world — IT development, automotive, electronics, and tourism, all under one trusted brand.
            </p>
            <p className="text-sm">
              A brand of{" "}
              <a href="https://asdiqa.jp" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 font-semibold">
                Asdiqa Co. Ltd.
              </a>
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Divisions</h4>
            <ul className="space-y-2 text-sm">
              {[["techlab","RS Tech Lab"],["cars","RS Cars"],["electronics","RS Electronics"],["tours","RS Tours"]].map(([v,l]) => (
                <li key={v}>
                  <button onClick={() => go(v)} className="hover:text-white transition">{l}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => go("home")} className="hover:text-white transition">Home</button></li>
              <li><button onClick={() => go("contact")} className="hover:text-white transition">Contact</button></li>
              <li>
                <a href="https://asdiqa.jp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  Asdiqa Co. Ltd.
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition flex items-center gap-2">
                  <span>📱</span> {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-orange-400 hover:text-orange-300 transition flex items-center gap-2">
                  <span>✉</span> {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-500">
                <span>📍</span> Tokyo, Japan
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-600">
          © 2026 Rising Sun Services ·{" "}
          <a href="https://asdiqa.jp" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400">
            Asdiqa Co. Ltd.
          </a>{" "}
          · All rights reserved
        </div>
      </div>
    </footer>
  );
}

// ─── HOME TAB ─────────────────────────────────────────────────────────────────
function HomeTab({ go }) {
  const divisions = [
    { key: "techlab",    label: "RS Tech Lab",    icon: "💻", grad: "from-blue-900 to-blue-700",       desc: "IT System Development · Website Design · Robotics Education for Kids" },
    { key: "cars",       label: "RS Cars",         icon: "🚗", grad: "from-red-900 to-red-700",         desc: "Japan Car Export · Local Sales · Auction Sourcing · Door-to-Door Delivery" },
    { key: "electronics",label: "RS Electronics",  icon: "📱", grad: "from-purple-900 to-purple-700",   desc: "Smartphones · Laptops · Servers · Accessories — Local & Export" },
    { key: "tours",      label: "RS Tours",        icon: "🗼", grad: "from-emerald-900 to-emerald-700", desc: "Japan Tour Consultancy · Custom Itineraries · Cultural Experiences" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950 text-white py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-5">
            Japan · Bangladesh · Global
          </p>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
            Rising Sun<br />
            <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Your trusted partner across IT, Automotive, Electronics, and Tourism — bridging Japan and Bangladesh.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <WaBtn />
            <button onClick={() => go("contact")}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition">
              Send Inquiry
            </button>
          </div>
        </div>
      </section>

      {/* Division cards */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Our Divisions" subtitle="Four specialized businesses under one trusted brand" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {divisions.map(d => (
              <button key={d.key} onClick={() => go(d.key)}
                className="text-left rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group">
                <div className={`bg-gradient-to-br ${d.grad} p-8 text-white min-h-[200px] flex flex-col`}>
                  <div className="text-5xl mb-4">{d.icon}</div>
                  <h3 className="text-xl font-black mb-2">{d.label}</h3>
                  <p className="text-sm text-white/65 flex-1">{d.desc}</p>
                </div>
                <div className="bg-white px-5 py-3 flex items-center justify-between text-orange-600 font-bold text-sm border-t">
                  <span>Explore</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip with QR */}
      <section className="py-16 px-6 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h3 className="text-3xl font-black mb-3">Get in Touch</h3>
            <p className="text-gray-400 mb-7">Scan the QR code or tap to start a WhatsApp conversation.</p>
            <div className="space-y-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-green-400 hover:text-green-300 font-bold text-lg transition">
                <span>📱</span> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 text-orange-400 hover:text-orange-300 font-bold transition">
                <span>✉</span> {EMAIL}
              </a>
              <p className="flex items-center gap-3 text-gray-500">
                <span>📍</span> Tokyo, Japan
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 bg-white p-4 rounded-2xl shadow-2xl text-center">
            <img src={QR_URL} alt="WhatsApp QR Code" className="w-40 h-40" />
            <p className="text-gray-500 text-xs mt-2 font-semibold">Scan to WhatsApp</p>
          </div>
        </div>
      </section>

      {/* Asdiqa strip */}
      <section className="py-6 bg-gray-100 text-center">
        <p className="text-gray-500 text-sm">
          Rising Sun Services is a brand of{" "}
          <a href="https://asdiqa.jp" target="_blank" rel="noopener noreferrer" className="text-orange-600 font-bold hover:text-orange-700">
            Asdiqa Co. Ltd.
          </a>
          {" "}— Registered in Japan
        </p>
      </section>
    </div>
  );
}

// ─── TECH LAB TAB ─────────────────────────────────────────────────────────────
function TechLabTab({ go }) {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-950 to-blue-700 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
          <img src="./assets/logos/RSTechLab-Logo.png" alt="RS Tech Lab" className="h-28 w-auto object-contain drop-shadow-lg flex-shrink-0" />
          <div>
            <Chip label="IT · Education" />
            <h1 className="text-4xl font-black">RS Tech Lab</h1>
            <p className="text-blue-200 mt-2 text-lg">Professional IT development & robotics education — Tokyo, Japan</p>
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="IT Development Services" subtitle="Custom solutions with transparent pricing and quality assurance" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((s, i) => (
              <div key={i} className={`rounded-2xl overflow-hidden shadow-lg transition hover:shadow-xl ${s.highlight ? "ring-2 ring-orange-500 ring-offset-2" : ""}`}>
                <div className={`p-6 text-white ${s.highlight ? "bg-gradient-to-br from-orange-500 to-orange-600" : "bg-gray-900"}`}>
                  <h3 className="text-base font-bold mb-1">{s.title}</h3>
                  <div className="text-2xl font-black text-yellow-300 mt-2">{s.price}</div>
                </div>
                <div className="bg-white p-6">
                  <p className="text-gray-500 text-sm mb-4">{s.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {s.features.map((f, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => go("contact")}
                    className={`w-full py-2.5 rounded-lg font-bold text-sm transition ${s.highlight ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-gray-900 hover:bg-gray-800 text-white"}`}>
                    Inquire Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-blue-800 bg-blue-50 border border-blue-100 p-4 rounded-xl mt-8">
            <strong>Note:</strong> All prices are starting estimates. Final quote depends on requirements and project scope. Free initial consultation available.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Client Portfolio" subtitle="Real projects delivered — live websites built by RS Tech Lab" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioProjects.map((p, i) => (
              <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-base font-black text-gray-900 mb-1 group-hover:text-blue-700 transition">{p.title}</h3>
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3">{p.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full font-medium">{t}</span>
                  ))}
                </div>
                <div className="mt-4 text-blue-600 text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Visit Site <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Robotics */}
      <section className="py-20 px-6 bg-orange-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Robotics for Kids" subtitle="Nurturing future innovators through hands-on STEM education" />
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl p-10 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-7xl">🤖</div>
              <div>
                <h3 className="text-2xl font-black mb-2">Ages 7–15 · Tokyo, Japan</h3>
                <p className="text-orange-100 mb-6">
                  Build real robots, learn to code, and develop STEM skills through fun hands-on projects. No prior experience needed.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["No Experience Needed","All Materials Provided","Small Classes","Certificates Awarded"].map(t => (
                    <span key={t} className="bg-white/20 text-white text-sm font-bold px-4 py-1.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {roboticsCourses.map((c, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gray-900 text-white p-6">
                  <h4 className="text-lg font-bold mb-1">{c.level}</h4>
                  <div className="text-orange-400 font-black text-xl mt-2">{c.price}</div>
                  <div className="text-gray-400 text-sm mt-1">{c.duration}</div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 mb-6">
                    {c.topics.map((t, j) => (
                      <li key={j} className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0"></span> {t}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => go("contact")}
                    className="w-full py-2.5 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition text-sm">
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h4 className="text-xl font-black mb-6 text-center text-gray-800">Course Schedule</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">📅</div>
                <h5 className="font-bold mb-2">Weekend Classes</h5>
                <p className="text-gray-500 text-sm">Saturdays · 10:00–12:00 / 13:00–15:00</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl mb-3">🗓️</div>
                <h5 className="font-bold mb-2">Weekday Classes</h5>
                <p className="text-gray-500 text-sm">Wednesdays & Fridays · 16:00–18:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CARS TAB ─────────────────────────────────────────────────────────────────
function CarsTab({ go }) {
  return (
    <div>
      <section className="relative text-white py-24 px-6 overflow-hidden"
        style={{ backgroundImage: "url(./assets/cars/landcruiser.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-red-950/80"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
          <img src="./assets/logos/RSCars-Logo.png" alt="RS Cars" className="h-28 w-auto object-contain drop-shadow-lg flex-shrink-0" />
          <div>
            <Chip label="Japan · Bangladesh · Export" />
            <h1 className="text-5xl font-black mb-3">RS Cars</h1>
            <p className="text-red-100 text-xl">Quality Japanese vehicles — sourced from auctions, delivered to your door</p>
          </div>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Featured Vehicles" subtitle="Sample stock — contact us for current availability, full specs, and pricing" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseCars.map((car, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                <div className="overflow-hidden h-44">
                  <img src={car.img} alt={`${car.make} ${car.model}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{car.year}</div>
                  <h3 className="text-xl font-black mt-1">{car.make} {car.model}</h3>
                  <div className="text-orange-600 font-black text-2xl mt-1">{car.price}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {[car.km, car.color, car.fuel].map(tag => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg font-medium">{tag}</span>
                    ))}
                  </div>
                  <button onClick={() => go("contact")}
                    className="mt-4 w-full py-2.5 bg-red-800 hover:bg-red-900 text-white rounded-xl font-bold text-sm transition">
                    Inquire →
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10 p-6 bg-white rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">
              Don't see your ideal vehicle?{" "}
              <button onClick={() => go("contact")} className="text-orange-600 font-bold hover:underline">
                Contact us
              </button>
              {" "}— we source vehicles to your exact specification directly from Japan's car auctions.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow */}
      <section className="py-20 px-6 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            light
            title="How It Works"
            subtitle="From Japan's auctions to your doorstep — a clear, transparent process"
          />

          {/* Desktop 4+4 snake */}
          <div className="hidden md:block">
            <div className="grid grid-cols-4 gap-4 mb-3">
              {carWorkflow.slice(0, 4).map((step, i) => (
                <div key={step.step} className="relative">
                  <div className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 text-center h-full">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <div className="w-7 h-7 bg-orange-500 text-white text-xs font-black rounded-full flex items-center justify-center mx-auto mb-2">{step.step}</div>
                    <h4 className="font-black text-sm mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-orange-400 text-lg z-10 font-black">▶</div>
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end pr-6 mb-3">
              <span className="text-orange-400 text-xl font-black">▼</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...carWorkflow.slice(4)].reverse().map((step, i, arr) => (
                <div key={step.step} className="relative">
                  <div className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 text-center h-full">
                    <div className="text-4xl mb-3">{step.icon}</div>
                    <div className="w-7 h-7 bg-orange-500 text-white text-xs font-black rounded-full flex items-center justify-center mx-auto mb-2">{step.step}</div>
                    <h4 className="font-black text-sm mb-2">{step.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-orange-400 text-lg z-10 font-black">◀</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical */}
          <div className="md:hidden space-y-3">
            {carWorkflow.map((step) => (
              <div key={step.step} className="flex items-start gap-4 bg-gray-800 p-5 rounded-2xl">
                <div className="flex-shrink-0 w-9 h-9 bg-orange-500 text-white text-sm font-black rounded-full flex items-center justify-center">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{step.icon}</span>
                    <h4 className="font-black text-sm">{step.title}</h4>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => go("contact")}
              className="px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl transition text-lg">
              Start Your Inquiry →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── ELECTRONICS TAB ──────────────────────────────────────────────────────────
function ElectronicsTab({ go }) {
  return (
    <div>
      <section className="relative text-white py-24 px-6 overflow-hidden"
        style={{ backgroundImage: "url(./assets/images/electronics-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-purple-950/85"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
          <img src="./assets/logos/RSElectronics-Logo.png" alt="RS Electronics" className="h-28 w-auto object-contain drop-shadow-lg flex-shrink-0" />
          <div>
            <Chip label="Local · Export · Wholesale" />
            <h1 className="text-5xl font-black mb-3">RS Electronics</h1>
            <p className="text-purple-200 text-xl">Quality electronics from Japan — for local use and export worldwide</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Product Categories" subtitle="New, pre-owned, and refurbished electronics — sourced from Japan" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {electronicsCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition text-center">
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-lg font-black mb-2">{cat.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{cat.desc}</p>
                <span className="text-xs text-purple-700 font-bold bg-purple-50 px-3 py-1.5 rounded-full">{cat.brands}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-purple-950 to-purple-800 text-white rounded-2xl p-12 text-center">
            <div className="text-6xl mb-5">🛒</div>
            <h3 className="text-2xl font-black mb-3">Full Online Catalog — Coming Soon</h3>
            <p className="text-purple-200 mb-8 max-w-xl mx-auto">
              E-commerce store with photos, full specs, and live pricing is launching soon. For now, contact us directly for availability and quotes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WaBtn />
              <button onClick={() => go("contact")}
                className="px-6 py-3 bg-white text-purple-900 font-bold rounded-xl hover:bg-gray-100 transition">
                Send Inquiry Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── TOURS TAB ────────────────────────────────────────────────────────────────
function ToursTab({ go }) {
  return (
    <div>
      <section className="relative text-white py-24 px-6 overflow-hidden"
        style={{ backgroundImage: "url(./assets/images/japan-hero.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-emerald-950/80"></div>
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6">
          <img src="./assets/logos/RSTours-Logo.png" alt="RS Tours" className="h-28 w-auto object-contain drop-shadow-lg flex-shrink-0" />
          <div>
            <Chip label="Japan Travel · Consultancy" />
            <h1 className="text-5xl font-black mb-3">RS Tours</h1>
            <p className="text-emerald-100 text-xl">Experience Japan your way — guided by people who know it best</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Tour Consultancy Services" subtitle="We plan, you explore — stress-free travel across all of Japan" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tourServices.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-black mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Transport note */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
            <h4 className="font-black text-amber-900 mb-2 flex items-center gap-2">
              <span>🚐</span> Transportation Service — Coming Soon
            </h4>
            <p className="text-amber-700 text-sm leading-relaxed">
              We are in the process of obtaining required certifications and green number plate registration for licensed passenger transport in Japan. This service will be available soon. Currently we provide full tour consultancy, planning, and coordination services.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-emerald-950 to-emerald-800 text-white rounded-2xl p-12 text-center">
            <div className="text-6xl mb-5">🗾</div>
            <h3 className="text-2xl font-black mb-3">Plan Your Japan Trip Today</h3>
            <p className="text-emerald-200 mb-8 max-w-xl mx-auto">
              Share your travel dates, group size, interests, and budget — we'll craft the perfect Japan itinerary just for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WaBtn />
              <button onClick={() => go("contact")}
                className="px-6 py-3 bg-white text-emerald-900 font-bold rounded-xl hover:bg-gray-100 transition">
                Send Inquiry Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── CONTACT TAB ──────────────────────────────────────────────────────────────
function ContactTab() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const body = new URLSearchParams({
        [GOOGLE_FORM_ENTRIES.name]: form.name,
        [GOOGLE_FORM_ENTRIES.email]: form.email,
        [GOOGLE_FORM_ENTRIES.phone]: form.phone,
        [GOOGLE_FORM_ENTRIES.subject]: form.subject,
        [GOOGLE_FORM_ENTRIES.message]: form.message,
      });
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setSent(true);
    } catch {
      setError("Something went wrong. Please try WhatsApp instead.");
    } finally {
      setSending(false);
    }
  };

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition bg-gray-50 focus:bg-white";

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="Contact Us" subtitle="We respond within 24 hours — or reach us instantly on WhatsApp" />

        <div className="grid md:grid-cols-3 gap-8">
          {/* Side panel */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h4 className="font-black text-gray-800 mb-5">Connect With Us</h4>
              <div className="space-y-5">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 text-green-600 hover:text-green-700 transition group">
                  <span className="text-2xl mt-0.5">📱</span>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">WhatsApp</div>
                    <div className="font-bold group-hover:underline">{PHONE}</div>
                  </div>
                </a>
                <a href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 text-orange-600 hover:text-orange-700 transition group">
                  <span className="text-2xl mt-0.5">✉</span>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Email</div>
                    <div className="font-bold text-sm group-hover:underline break-all">{EMAIL}</div>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-gray-500">
                  <span className="text-2xl mt-0.5">📍</span>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Location</div>
                    <div className="font-bold">Tokyo, Japan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md text-center">
              <p className="text-sm font-bold text-gray-600 mb-4">Scan to open WhatsApp</p>
              <img src={QR_URL} alt="WhatsApp QR Code" className="w-36 h-36 mx-auto rounded-xl" />
              <p className="text-xs text-gray-400 mt-3">{PHONE}</p>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-md text-center text-sm text-gray-500">
              A brand of{" "}
              <a href="https://asdiqa.jp" target="_blank" rel="noopener noreferrer"
                className="text-orange-600 font-bold hover:text-orange-700">
                Asdiqa Co. Ltd.
              </a>
              <br />
              <span className="text-gray-400">Registered in Japan</span>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-md p-8">
            {sent ? (
              <div className="text-center py-16">
                <div className="text-7xl mb-5">✅</div>
                <h3 className="text-2xl font-black mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-8">We'll get back to you within 24 hours. For faster response, use WhatsApp.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => setSent(false)}
                    className="px-6 py-3 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 transition">
                    Send Another
                  </button>
                  <WaBtn />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Full Name *</label>
                    <input type="text" value={form.name} onChange={set("name")} required className={inputCls} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Email *</label>
                    <input type="email" value={form.email} onChange={set("email")} required className={inputCls} placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Phone / WhatsApp</label>
                    <input type="tel" value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+81 or +880..." />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-gray-700">Subject *</label>
                    <select value={form.subject} onChange={set("subject")} required className={inputCls}>
                      <option value="">Select a division...</option>
                      <option>RS Tech Lab — IT Development</option>
                      <option>RS Tech Lab — Robotics Course</option>
                      <option>RS Cars — Vehicle Inquiry</option>
                      <option>RS Electronics — Product Inquiry</option>
                      <option>RS Tours — Travel Planning</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-gray-700">Message *</label>
                  <textarea value={form.message} onChange={set("message")} required rows={6} className={inputCls}
                    placeholder="Tell us your requirements, timeline, and any other details..." />
                </div>
                {error && (
                  <p className="text-sm text-red-600 font-semibold text-center">{error}</p>
                )}
                <button type="submit" disabled={sending}
                  className="w-full py-4 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-black rounded-xl transition text-lg">
                  {sending ? "Sending..." : "Send Message →"}
                </button>
                <p className="text-xs text-center text-gray-400">
                  Or reach us instantly on{" "}
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-green-600 font-bold hover:underline">WhatsApp</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
function App() {
  const [active, setActive] = useState("home");

  const go = (tab) => {
    setActive(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <ContactBar />
      <Nav active={active} go={go} />
      <main>
        {active === "home"        && <HomeTab        go={go} />}
        {active === "techlab"     && <TechLabTab     go={go} />}
        {active === "cars"        && <CarsTab        go={go} />}
        {active === "electronics" && <ElectronicsTab go={go} />}
        {active === "tours"       && <ToursTab       go={go} />}
        {active === "contact"     && <ContactTab />}
      </main>
      <Footer go={go} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
