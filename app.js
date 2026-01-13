const e = React.createElement;
const { useState, useEffect } = React;

// --- SHARED COMPONENTS ---

function Card(title, subtitle, text, onClick) {
  return e(
    "div",
    {
      className: `bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center transition hover:shadow-lg hover:-translate-y-1 duration-300 ${onClick ? "cursor-pointer group" : ""}`,
      onClick: onClick
    },
    e("div", { className: "w-16 h-16 bg-gray-100 text-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition duration-300" }, "★"), // Simple icon placeholder
    e("h3", { className: "text-xl font-bold text-gray-800" }, title),
    e("p", { className: "text-orange-600 text-sm mb-3 font-medium" }, subtitle),
    e("p", { className: "text-gray-500 text-sm leading-relaxed" }, text)
  );
}

function SectionHeader(title) {
  return e("h3", { className: "text-2xl font-bold mb-6 text-gray-800 border-l-4 border-orange-600 pl-4" }, title);
}

// --- NEW HOME PAGE COMPONENTS ---

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop", // Tech image
      title: "Rising Sun TechLab",
      subtitle: "Empowering the future through System Development & IT Education."
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop", // Consulting image
      title: "Strategic Consulting",
      subtitle: "Navigating your business towards global success."
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1600&auto=format&fit=crop", // Auto image
      title: "Rising Sun Automobiles",
      subtitle: "Connecting the world with premium Japanese vehicles."
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(timer);
  }, [slides.length]);

  return e(
    "div",
    { className: "relative w-full h-[500px] overflow-hidden bg-gray-900" },
    slides.map((slide, index) =>
      e(
        "div",
        {
          key: slide.id,
          className: `absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`,
        },
        // Background Image with Overlay
        e("img", { src: slide.image, className: "w-full h-full object-cover opacity-60" }),
        e("div", { className: "absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent" }),
        
        // Text Content
        e(
          "div",
          { className: "absolute inset-0 flex flex-col items-center justify-center text-center px-6" },
          e("h2", { className: "text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg tracking-tight" }, slide.title),
          e("p", { className: "text-lg md:text-2xl text-gray-200 max-w-3xl drop-shadow-md" }, slide.subtitle),
          e("button", { className: "mt-8 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition transform hover:scale-105" }, "Learn More")
        )
      )
    ),
    // Dots Navigation
    e(
      "div",
      { className: "absolute bottom-8 left-0 right-0 flex justify-center gap-3" },
      slides.map((_, idx) =>
        e("button", {
          key: idx,
          onClick: () => setCurrentSlide(idx),
          className: `w-3 h-3 rounded-full transition-all ${idx === currentSlide ? "bg-orange-500 w-8" : "bg-gray-400 hover:bg-white"}`
        })
      )
    )
  );
}

function StatsStrip() {
  const StatItem = (num, label) => e("div", { className: "text-center" }, 
    e("div", { className: "text-3xl font-bold text-orange-600" }, num),
    e("div", { className: "text-sm text-gray-600 uppercase tracking-wider font-semibold" }, label)
  );

  return e(
    "div",
    { className: "bg-gray-50 border-y border-gray-100" },
    e(
      "div",
      { className: "max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8" },
      StatItem("Global", "Reach"),
      StatItem("15+", "Years Experience"),
      StatItem("100%", "Japanese Quality"),
      StatItem("24/7", "Support")
    )
  );
}

function MissionSection() {
  return e(
    "section",
    { className: "max-w-4xl mx-auto px-6 py-16 text-center" },
    e("h2", { className: "text-sm font-bold text-orange-600 tracking-widest uppercase mb-3" }, "Who We Are"),
    e("h3", { className: "text-3xl font-bold text-gray-900 mb-6" }, "Bridging Japan and the World"),
    e("p", { className: "text-gray-600 text-lg leading-relaxed" }, 
      "Rising Sun Services is the consumer-facing brand of Asdiqa Co. Ltd. We are dedicated to delivering excellence across technology, business consulting, and automotive trading. Our mission is to provide Japanese quality standards to global markets with integrity and innovation."
    )
  );
}

// --- RISING SUN TECHLAB PAGE (UNCHANGED) ---

function RisingSunTechLab({ onBack }) {
  const [subTab, setSubTab] = useState("dev");

  const devPortfolio = [
    { title: "Inventory System", desc: "Cloud-based stock management for retail." },
    { title: "E-Commerce Platform", desc: "Custom storefront with payment integration." }
  ];
  
  const devOffered = [
    { title: "Web Application Development", desc: "React, Node.js, Python solutions." },
    { title: "Mobile App Development", desc: "iOS and Android native apps." }
  ];

  const eduPortfolio = [
    { title: "Batch 2024 Graduates", desc: "30 students placed in Tokyo tech firms." },
    { title: "Corporate Training", desc: "Upskilling workshop for Asdiqa staff." }
  ];

  const eduOffered = [
    { title: "Full Stack Bootcamp", desc: "6-month intensive MERN stack course." },
    { title: "Basic IT Literacy", desc: "Computer fundamentals for beginners." }
  ];

  const renderGrid = (items) => e(
    "div",
    { className: "grid md:grid-cols-2 gap-6 mb-12" },
    items.map((item, idx) => e(
      "div",
      { key: idx, className: "bg-gray-50 p-6 rounded-lg border hover:border-orange-300 transition" },
      e("h4", { className: "font-bold text-lg mb-2 text-gray-800" }, item.title),
      e("p", { className: "text-gray-600 text-sm" }, item.desc)
    ))
  );

  return e(
    "div",
    { className: "max-w-6xl mx-auto px-6 py-10" },
    e(
      "button",
      { 
        onClick: onBack,
        className: "flex items-center text-gray-500 hover:text-orange-600 mb-8 font-medium transition"
      },
      "← Back to Services"
    ),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun TechLab"),
    e("p", { className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto" }, "Bridging the gap between innovative software solutions and next-generation technical education."),

    e(
      "div",
      { className: "flex justify-center mb-12 border-b" },
      e("button", { 
        className: `px-8 py-4 font-bold border-b-2 transition ${subTab === 'dev' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`,
        onClick: () => setSubTab("dev")
      }, "System Development"),
      e("button", { 
        className: `px-8 py-4 font-bold border-b-2 transition ${subTab === 'edu' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-800'}`,
        onClick: () => setSubTab("edu")
      }, "Tech Education")
    ),

    e(
      "div",
      { className: "animate-fade-in" },
      subTab === "dev" 
        ? e("div", null, SectionHeader("Development Portfolio"), renderGrid(devPortfolio), SectionHeader("Offered Systems & Services"), renderGrid(devOffered))
        : e("div", null, SectionHeader("Education Achievements"), renderGrid(eduPortfolio), SectionHeader("Available Courses"), renderGrid(eduOffered))
    )
  );
}

// --- MAIN APP COMPONENT ---

function App() {
  const [tab, setTab] = useState("home");

  const Nav = () =>
    e(
      "nav",
      { className: "border-b bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm" },
      e(
        "div",
        { className: "max-w-6xl mx-auto px-6 h-16 flex justify-between items-center" },
        e("div", { 
          className: "font-bold text-xl text-orange-600 cursor-pointer flex items-center gap-2",
          onClick: () => setTab("home")
        }, 
        e("span", {className: "text-2xl"}, "☀"), // Sun icon
        "Rising Sun Services"),
        e(
          "div",
          { className: "hidden md:flex gap-8" },
          ["home", "about", "team", "contact"].map((id) =>
            e(
              "button",
              {
                key: id,
                onClick: () => setTab(id),
                className:
                  "text-sm font-semibold uppercase tracking-wide transition " +
                  (tab === id ? "text-orange-600" : "text-gray-500 hover:text-orange-500"),
              },
              id === "home" ? "Home" : id
            )
          )
        ),
        // Mobile menu button placeholder (optional for later)
        e("div", {className: "md:hidden text-gray-500"}, "☰") 
      )
    );

  return e(
    "div",
    { className: "min-h-screen bg-white flex flex-col font-sans" },
    Nav(),

    e(
      "main",
      { className: "flex-grow" },

      /* HOME (Landing Page) */
      tab === "home" && e("div", null,
        e(HeroSlider),
        e(StatsStrip),
        e(MissionSection),
        e(
          "section",
          { className: "bg-gray-50 py-16" },
          e(
            "div",
            { className: "max-w-6xl mx-auto px-6" },
            e("h2", { className: "text-3xl font-bold mb-12 text-center text-gray-900" }, "Our Services"),
            e(
              "div",
              { className: "grid md:grid-cols-3 gap-8" },
              Card("Rising Sun Consulting", "Business Advisory", "Expert strategy for market entry and operational efficiency.", () => alert("Consulting page coming soon!")),
              Card("Rising Sun TechLab", "Dev & Education", "Software development and IT workforce training.", () => setTab("techlab")),
              Card("Rising Sun Automobiles", "Vehicle Export", "Trusted export and resale of Japanese vehicles.", () => alert("Automobiles page coming soon!"))
            )
          )
        )
      ),

      /* SERVICE: TECHLAB */
      tab === "techlab" && e(RisingSunTechLab, { onBack: () => setTab("home") }),

      /* ABOUT */
      tab === "about" &&
        e(
          "section",
          { className: "max-w-5xl mx-auto px-6 py-16" },

          e("h2", { className: "text-3xl font-bold mb-10 text-center" }, "About Us / ブランド概要"),

          e(
            "div",
            { className: "overflow-hidden border rounded-xl" },

            e(
              "table",
              { className: "w-full text-left border-collapse text-sm md:text-base" },
              e("tbody", null,

                e("tr", { className: "border-b" },
                  e("th", { className: "w-1/3 bg-gray-100 px-6 py-4 font-medium" }, "ブランド名"),
                  e("td", { className: "px-6 py-4" }, "Rising Sun Services")
                ),

                e("tr", { className: "border-b" },
                  e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "位置づけ"),
                  e("td", { className: "px-6 py-4" }, "Asdiqa Co. Ltd. のコンシューマーブランド")
                ),

                e("tr", { className: "border-b" },
                  e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "運営会社"),
                  e(
                    "td",
                    { className: "px-6 py-4" },
                    e(
                      "a",
                      {
                        href: "https://asdiqa.jp",
                        target: "_blank",
                        className: "text-orange-600 font-semibold hover:underline",
                      },
                      "Asdiqa Co. Ltd.（アスディカ―株式会社）"
                    )
                  )
                ),

                e("tr", { className: "border-b" },
                  e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "事務所"),
                  e(
                    "td",
                    { className: "px-6 py-4 space-y-1" },
                    e("div", null, "東京都葛飾区宝町２丁目３４−２８号 山田ビル３０３"),
                  )
                ),

                e("tr", { className: "border-b" },
                  e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "所在地"),
                  e(
                    "td",
                    { className: "px-6 py-4 space-y-1" },
                    e("div", null, "東京都葛飾区お花茶屋二丁目2-20-107号"),
                  )
                ),
                
                e("tr", { className: "border-b" },
                  e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "主なサービス"),
                  e(
                    "td",
                    { className: "px-6 py-4 space-y-1" },
                    e("div", null, "・ビジネスコンサルティング"),
                    e("div", null, "・ソフトウェア開発・IT支援"),
                    e("div", null, "・自動車関連サービス"),
                    e("div", null, "・技術教育・サポート")
                  )
                ),

                e("tr", { className: "border-b" },
                  e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "提供地域"),
                  e("td", { className: "px-6 py-4" }, "日本国内および海外")
                ),

                e("tr", null,
                  e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "ウェブサイト"),
                  e(
                    "td",
                    { className: "px-6 py-4" },
                    e(
                      "a",
                      {
                        href: "https://risingsunservices.jp",
                        target: "_blank",
                        className: "text-orange-600 font-semibold hover:underline",
                      },
                      "www.risingsunservices.jp"
                    )
                  )
                )

              )
            )
          )
        ),

      /* TEAM */
      tab === "team" &&
        e(
          "section",
          { className: "max-w-6xl mx-auto px-6 py-16" },
          e("h2", { className: "text-3xl font-bold mb-12 text-center" }, "Leadership Team"),
          e(
            "div",
            { className: "grid md:grid-cols-3 gap-8" },
            Card("Mohammad Zakir Hossen", "Director", "Visionary leader with 15+ years in system engineering."),
            Card("Shayban Nasif", "Head of Operations", "Expert in consulting, technology, and service operations."),
            Card("Abdullah Al Asif", "Executive Consultant", "Specialist in customer service and communications.")
          )
        ),

      /* CONTACT */
      tab === "contact" &&
        e(
          "section",
          { className: "max-w-3xl mx-auto px-6 py-16 text-center" },
          e("h2", { className: "text-3xl font-bold mb-8" }, "Get in Touch"),
          e("div", {className: "bg-gray-50 p-8 rounded-2xl border border-gray-100"},
            e("p", { className: "text-xl font-medium text-gray-800 mb-4" }, "Tokyo, Japan"),
            e("a", { href: "mailto:risingsunservices.jp@gmail.com", className: "block text-orange-600 text-lg hover:underline mb-2" }, "risingsunservices.jp@gmail.com"),
            e("p", { className: "text-gray-600" }, "+81 80-7307-2277")
          )
        )
    ),

    e(
      "footer",
      { className: "bg-gray-900 text-gray-400 py-10 text-center text-sm border-t border-gray-800" },
      e("div", {className: "mb-4 font-bold text-white text-lg"}, "Rising Sun Services"),
      "© 2025 Rising Sun Services · A venture of Asdiqa Co. Ltd."
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
