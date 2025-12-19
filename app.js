const e = React.createElement;
const { useState } = React;

function Card(title, subtitle, text) {
  return e(
    "div",
    { className: "bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center" },
    e("div", { className: "w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4" }),
    e("h3", { className: "text-xl font-bold" }, title),
    e("p", { className: "text-orange-600 text-sm mb-2" }, subtitle),
    e("p", { className: "text-gray-500 text-sm" }, text)
  );
}

function App() {
  const [tab, setTab] = useState("home");

  const Nav = () =>
    e(
      "nav",
      { className: "border-b bg-white sticky top-0 z-50" },
      e(
        "div",
        { className: "max-w-6xl mx-auto px-6 h-16 flex justify-between items-center" },
        e("div", { className: "font-bold text-xl text-orange-600" }, "Rising Sun Services"),
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

      /* SERVICES */
      tab === "home" &&
        e(
          "section",
          { className: "max-w-6xl mx-auto px-6 py-16" },
          e("h2", { className: "text-3xl font-bold mb-12 text-center" }, "Our Services"),
          e(
            "div",
            { className: "grid md:grid-cols-3 gap-8" },
            Card("Rising Sun Consulting", "", "Business strategy and advisory services."),
            Card("Rising Sun TechLab", "", "Software development and tech education."),
            Card("Rising Sun Automobiles", "", "Export and resale of Japanese vehicles.")
          )
        ),

      e("tbody", null,

  e("tr", { className: "border-b" },
    e("th", { className: "w-1/3 bg-gray-100 px-6 py-4 font-medium" }, "会社名"),
    e("td", { className: "px-6 py-4" }, "アスディカ―株式会社")
  ),

  e("tr", { className: "border-b" },
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "ブランド"),
    e("td", { className: "px-6 py-4" }, "Rising Sun Services（コンシューマーブランド）")
  ),

  e("tr", { className: "border-b" },
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "代表者"),
    e("td", { className: "px-6 py-4" }, "フセイン・モハメドザキル")
  ),

  e("tr", { className: "border-b" },
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "本店所在地"),
    e("td", { className: "px-6 py-4" }, "東京都葛飾区お花茶屋二丁目2-20-107号")
  ),

  e("tr", { className: "border-b" },
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "事務所"),
    e("td", { className: "px-6 py-4" }, "〒124-0005 東京都葛飾区宝町２丁目３４−２８号 山田ビル３０３")
  ),

  e("tr", { className: "border-b" },
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "設立日"),
    e("td", { className: "px-6 py-4" }, "令和7年9月29日")
  ),

  e("tr", { className: "border-b" },
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "会社法人等番号"),
    e("td", { className: "px-6 py-4" }, "0118-01-046844")
  ),

  e("tr", { className: "border-b" },
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "事業内容"),
    e(
      "td",
      { className: "px-6 py-4 space-y-1" },
      e("div", null, "・ITビジネスコンサルティング"),
      e("div", null, "・システム開発支援"),
      e("div", null, "・パソコン・電子機器の仕入れ・販売"),
      e("div", null, "・スパイス・食品等の小規模物販")
    )
  ),

  e("tr", { className: "border-b" },
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "ウェブサイト"),
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
        "www.asdiqa.jp"
      )
    )
  ),

  e("tr", null,
    e("th", { className: "bg-gray-100 px-6 py-4 font-medium" }, "担当者"),
    e("td", { className: "px-6 py-4" }, "シャイバン・ナシフ（Business Development Manager）")
  )

)

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
          e("p", { className: "text-gray-600" }, "Email: contact@risingsun.jp"),
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
