const e = React.createElement;
const { useState } = React;

function ServiceCard(title, desc) {
  return e(
    "div",
    { className: "p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition" },
    e("h3", { className: "text-xl font-bold mb-2" }, title),
    e("p", { className: "text-gray-500 mb-4" }, desc)
  );
}

function App() {
  const [tab, setTab] = useState("home");

  const Nav = () =>
    e(
      "nav",
      { className: "border-b bg-white sticky top-0" },
      e(
        "div",
        { className: "max-w-6xl mx-auto px-6 h-16 flex justify-between items-center" },
        e("div", { className: "font-bold text-xl text-orange-600" }, "Rising Sun Services"),
        e(
          "div",
          { className: "flex gap-6" },
          ["home", "about", "contact"].map((id) =>
            e(
              "button",
              {
                key: id,
                onClick: () => setTab(id),
                className:
                  "font-medium " +
                  (tab === id ? "text-orange-600" : "text-gray-600 hover:text-orange-500"),
              },
              id === "home" ? "Services" : id.charAt(0).toUpperCase() + id.slice(1)
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
            ServiceCard(
              "Rising Sun Consulting",
              "Strategic business planning, market entry and corporate advisory."
            ),
            ServiceCard(
              "Rising Sun TechLab",
              "Software development, brand establishment, kids tech education."
            ),
            ServiceCard(
              "Rising Sun Automobiles",
              "Exporting and reselling Japanese vehicles worldwide."
            )
          )
        ),

      /* ABOUT */
      tab === "about" &&
        e(
          "section",
          { className: "max-w-4xl mx-auto px-6 py-16 text-center" },
          e("h2", { className: "text-3xl font-bold mb-6" }, "About Us"),
          e(
            "p",
            { className: "text-gray-600 text-lg" },
            "Rising Sun Services is a consumer-focused venture of Asdiqa Co. Ltd., delivering professional solutions with integrity and excellence."
          )
        ),

      /* CONTACT */
      tab === "contact" &&
        e(
          "section",
          { className: "max-w-3xl mx-auto px-6 py-16 text-center" },
          e("h2", { className: "text-3xl font-bold mb-6" }, "Contact Us"),
          e("p", { className: "text-gray-600" }, "Email: contact@risingsun.jp")
        )
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
