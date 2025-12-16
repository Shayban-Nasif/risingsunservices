const { useState } = React;

function RisingSunApp() {
  const [activeTab, setActiveTab] = useState("home");

  return React.createElement(
    "div",
    { className: "min-h-screen flex items-center justify-center text-center" },
    React.createElement(
      "h1",
      { className: "text-4xl font-bold text-orange-600" },
      "Rising Sun Services"
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(RisingSunApp));
