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

function profileRow(label, value) {
  return React.createElement(
    "div",
    { className: "grid md:grid-cols-3 gap-4 px-6 py-4 text-sm" },
    React.createElement(
      "div",
      { className: "font-medium text-gray-600" },
      label
    ),
    React.createElement(
      "div",
      { className: "md:col-span-2 text-gray-800" },
      value
    )
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
      
      /* ABOUT */
    tab === "about" &&
  e(
    "section",
    { className: "max-w-5xl mx-auto px-6 py-16" },

    e(
      "h2",
      { className: "text-3xl font-bold mb-6 text-center" },
      "会社概要（Company Profile）"
    ),

    e(
      "p",
      { className: "text-gray-600 text-center mb-10" },
      "Rising Sun Services は、アスディカ―株式会社が展開するコンシューマー向けサービスブランドです。"
    ),

    e(
      "div",
      { className: "bg-white border rounded-xl shadow-sm divide-y" },

      profileRow("会社名", "アスディカ―株式会社"),
      profileRow("ブランド", "Rising Sun Services（コンシューマーブランド）"),
      profileRow("代表者", "フセイン・モハメドザキル"),
      profileRow(
        "本店所在地",
        "東京都葛飾区お花茶屋二丁目2-20-107号"
      ),
      profileRow(
        "事務所",
        "〒124-0005 東京都葛飾区宝町２丁目３４−２８号 山田ビル３０３"
      ),
      profileRow("設立日", "令和7年9月29日"),
      profileRow("会社法人等番号", "0118-01-046844"),
      profileRow(
        "事業内容",
        "ITビジネスコンサルティング / システム開発支援 / パソコン・電子機器の仕入れ・販売 / スパイス・食品等の小規模物販"
      ),
      profileRow(
        "ウェブサイト",
        e(
          "a",
          {
            href: "https://asdiqa.jp",
            target: "_blank",
            className: "text-orange-600 font-semibold hover:underline",
          },
          "www.asdiqa.jp"
        )
      ),
      profileRow(
        "担当者",
        "シャイバン・ナシフ（Business Development Manager）"
      )
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
