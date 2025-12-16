const e = React.createElement;
const { useState } = React;

function App() {
  const [tab, setTab] = useState("home");

  const NavButton = (id, label) =>
    e(
      "button",
      {
        onClick: () => setTab(id),
        className:
          "px-4 py-2 font-medium " +
          (tab === id
            ? "text-orange-600 border-b-2 border-orange-600"
            : "text-gray-600 hover:text-orange-500"),
      },
      label
    );

  return e(
    "div",
    { className: "min-h-screen bg-white flex flex-col" },

    /* NAV */
    e(
      "nav",
      { className: "border-b border-gray-200 bg-white sticky top-0" },
      e(
        "div",
        { className: "max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" },
        e("div", { className: "font-bold text-xl text-orange-600" }, "Rising Sun Services"),
        e(
          "div",
          { className: "flex gap-6" },
          NavButton("home", "Services"),
          NavButton("about", "About"),
          NavButton("contact", "Contact")
        )
      )
    ),

    /* CONTENT */
    e(
      "main",
      { className: "flex-grow flex items-center justify-center text-center p-12" },
      tab === "home"
        ? e("h2", { className: "text-3xl font-bold" }, "Our Services")
        : tab === "about"
        ? e("h2", { className: "text-3xl font-bold" }, "About Rising Sun Services")
        : e("h2", { className: "text-3xl font-bold" }, "Contact Us")
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
