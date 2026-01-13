const e = React.createElement;
const { useState } = React;

// --- SHARED COMPONENTS ---

function Card(title, subtitle, text, onClick) {
  return e(
    "div",
    { 
      className: `bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center transition hover:shadow-md ${onClick ? "cursor-pointer hover:border-orange-200" : ""}`,
      onClick: onClick
    },
    e("div", { className: "w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4" }),
    e("h3", { className: "text-xl font-bold" }, title),
    e("p", { className: "text-orange-600 text-sm mb-2" }, subtitle),
    e("p", { className: "text-gray-500 text-sm" }, text)
  );
}

function SectionHeader(title) {
  return e("h3", { className: "text-2xl font-bold mb-6 text-gray-800 border-l-4 border-orange-600 pl-4" }, title);
}

// --- RISING SUN TECHLAB PAGE ---

function RisingSunTechLab({ onBack }) {
  // Sub-state specifically for TechLab: 'dev' or 'edu'
  const [subTab, setSubTab] = useState("dev");

  // Data for Development
  const devPortfolio = [
    { title: "Inventory System", desc: "Cloud-based stock management for retail." },
    { title: "E-Commerce Platform", desc: "Custom storefront with payment integration." }
  ];
  
  const devOffered = [
    { title: "Web Application Development", desc: "React, Node.js, Python solutions." },
    { title: "Mobile App Development", desc: "iOS and Android native apps." }
  ];

  // Data for Education
  const eduPortfolio = [
    { title: "Batch 2024 Graduates", desc: "30 students placed in Tokyo tech firms." },
    { title: "Corporate Training", desc: "Upskilling workshop for Asdiqa staff." }
  ];

  const eduOffered = [
    { title: "Full Stack Bootcamp", desc: "6-month intensive MERN stack course." },
    { title: "Basic IT Literacy", desc: "Computer fundamentals for beginners." }
  ];

  // Helper to render a grid of items
  const renderGrid = (items) => e(
    "div",
    { className: "grid md:grid-cols-2 gap-6 mb-12" },
    items.map((item, idx) => e(
      "div",
      { key: idx, className: "bg-gray-50 p-6 rounded-lg border" },
      e("h4", { className: "font-bold text-lg mb-2" }, item.title),
      e("p", { className: "text-gray-600 text-sm" }, item.desc)
    ))
  );

  return e(
    "div",
    { className: "max-w-6xl mx-auto px-6 py-10" },
    
    // Breadcrumb / Back Button
    e(
      "button",
      { 
        onClick: onBack,
        className: "flex items-center text-gray-500 hover:text-orange-600 mb-8 font-medium"
      },
      "← Back to Services"
    ),

    // Header
    e("h2", { className: "text-4xl font-bold mb-4 text-center" }, "Rising Sun TechLab"),
    e("p", { className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto" }, "Bridging the gap between innovative software solutions and next-generation technical education."),

    // Sub-Navigation (Dev vs Edu)
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

    // Content Area
    e(
      "div",
      { className: "animate-fade-in" }, // Optional: if you add animation CSS
      subTab === "dev" 
        ? e("div", null,
            SectionHeader("Development Portfolio"),
            renderGrid(devPortfolio),
            SectionHeader("Offered Systems & Services"),
            renderGrid(devOffered)
          )
        : e("div", null,
            SectionHeader("Education Achievements"),
            renderGrid(eduPortfolio),
            SectionHeader("Available Courses"),
            renderGrid(eduOffered)
          )
    )
  );
}

// --- MAIN APP COMPONENT ---

function App() {
  // 'tab' can be: "home", "about", "team", "contact"
  // OR specific service pages: "techlab", "consulting", "autos"
  const [tab, setTab] = useState("home");

  const Nav = () =>
    e(
      "nav",
      { className: "border-b bg-white sticky top-0 z-50" },
      e(
        "div",
        { className: "max-w-6xl mx-auto px-6 h-16 flex justify-between items-center" },
        e("div", { 
          className: "font-bold text-xl text-orange-600 cursor-pointer",
          onClick: () => setTab("home") // Reset to home on click
        }, "Rising Sun Services"),
        e(
          "div",
          { className: "flex gap-6" },
          ["home", "about", "team", "contact"].map((id) =>
            e(
              "button",
              {
                key: id,
                onClick: () => setTab(id),
                className:
                  "font-medium " +
                  (tab === id ? "text-orange-600" : "text-gray-600 hover:text-orange-500"),
              },
              id === "home"
                ? "Services"
                : id.charAt(0).toUpperCase() + id.slice(1)
            )
          )
        )
      )
    );

  return e(
    "div",
    { className: "min-h-screen bg-white flex flex-col" },
    Nav(),

    e(
      "main",
      { className: "flex-grow" },

      /* SERVICES (HOME) */
      tab === "home" &&
        e(
          "section",
          { className: "max-w-6xl mx-auto px-6 py-16" },
          e("h2", { className: "text-3xl font-bold mb-12 text-center" }, "Our Services"),
          e(
            "div",
            { className: "grid md:grid-cols-3 gap-8" },
            // Note: We are passing an onClick function to the cards now
            Card("Rising Sun Consulting", "", "Business strategy and advisory services.", () => alert("Consulting page coming soon!")),
            Card("Rising Sun TechLab", "", "Software development and tech education.", () => setTab("techlab")),
            Card("Rising Sun Automobiles", "", "Export and resale of Japanese vehicles.", () => alert("Automobiles page coming soon!"))
          )
        ),

      /* SPECIFIC SERVICE PAGES */
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
          e("h2", { className: "text-3xl font-bold mb-12 text-center" }, "Our Team"),
          e(
            "div",
            { className: "grid md:grid-cols-3 gap-8" },
            Card(
              "Mohammad Zakir Hossen",
              "Director, Asdiqa Group",
              "Visionary leader with 15+ years in system engineering."
            ),
            Card(
              "Shayban Nasif",
              "Head of Operations",
              "Expert in consulting, technology, and service operations."
            ),
            Card(
              "Abdullah Al Asif",
              "Business Executive Consultant",
              "Specialist in customer service and communications."
            )
          )
        ),

      /* CONTACT */
      tab === "contact" &&
        e(
          "section",
          { className: "max-w-3xl mx-auto px-6 py-16 text-center" },
          e("h2", { className: "text-3xl font-bold mb-6" }, "Contact Us"),
          e("p", { className: "text-gray-600 mb-2" }, "Tokyo, Japan"),
          e("p", { className: "text-gray-600" }, "Email: risingsunservices.jp@gmail.com"),
          e("p", { className: "text-gray-600" }, "Phone: +81 80-7307-2277")
        )
    ),

    e(
      "footer",
      { className: "bg-gray-900 text-gray-400 py-6 text-center text-sm" },
      "© 2025 Rising Sun Services · A venture of Asdiqa Co. Ltd."
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
