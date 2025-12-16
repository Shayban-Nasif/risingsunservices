const e = React.createElement;
const { useState } = React;

function App() {
  const [tab, setTab] = useState("home");

  return e(
    "div",
    { className: "min-h-screen flex flex-col items-center justify-center bg-orange-50 text-center" },
    e("h1", { className: "text-4xl font-bold text-orange-600 mb-4" }, "Rising Sun Services"),
    e("p", { className: "text-gray-600 max-w-xl" },
      "Consulting, Technology & Automotive Solutions from Japan."
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
