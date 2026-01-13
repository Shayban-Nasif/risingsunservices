const e = React.createElement;
const { useState, useEffect } = React;

// --- SHARED UI COMPONENTS ---

function Card(title, subtitle, text, onClick) {
  return e(
    "div",
    {
      className: `bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center transition hover:shadow-lg hover:-translate-y-1 duration-300 ${onClick ? "cursor-pointer group" : ""}`,
      onClick: onClick
    },
    e("div", { className: "w-16 h-16 bg-gray-100 text-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition duration-300" }, "★"),
    e("h3", { className: "text-xl font-bold text-gray-800" }, title),
    e("p", { className: "text-orange-600 text-sm mb-3 font-medium" }, subtitle),
    e("p", { className: "text-gray-500 text-sm leading-relaxed" }, text)
  );
}

function SectionHeader(title) {
  return e("h3", { className: "text-2xl font-bold mb-6 text-gray-800 border-l-4 border-orange-600 pl-4" }, title);
}

function InputField({ label, type = "text", placeholder, value, onChange, required = true }) {
  return e("div", { className: "mb-4" },
    e("label", { className: "block text-gray-700 text-sm font-bold mb-2 text-left" }, label),
    e("input", {
      type: type,
      className: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      required: required
    })
  );
}

function SelectField({ label, options, value, onChange }) {
  return e("div", { className: "mb-4" },
    e("label", { className: "block text-gray-700 text-sm font-bold mb-2 text-left" }, label),
    e("select", {
      className: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white",
      value: value,
      onChange: onChange
    },
    options.map(opt => e("option", { key: opt, value: opt }, opt))
    )
  );
}

// --- 1. RISING SUN CONSULTING ---

function RisingSunConsulting({ onBack }) {
  const [form, setForm] = useState({ name: "", businessName: "", address: "", contact: "", time: "", service: "Digital Transformation Support" });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert(`Consulting Request Received! We will contact you at ${form.contact} regarding ${form.service}.`);
  };

  return e("div", { className: "max-w-4xl mx-auto px-6 py-10" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium" }, "← Back to Services"),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun Consulting"),
    e("div", { className: "grid md:grid-cols-3 gap-6 mb-12" },
      ["Digital Transformation Support", "Strategic System Development Support", "Business Promotion Support"].map(s => 
        e("div", { key: s, className: "p-4 bg-orange-50 border border-orange-100 rounded-lg font-bold text-orange-800 text-center" }, s)
      )
    ),
    e("div", { className: "bg-white p-8 rounded-2xl shadow-lg border" },
      SectionHeader("Consultation Inquiry Form"),
      e("form", { onSubmit: handleSubmit },
        e("div", { className: "grid md:grid-cols-2 gap-4" },
          InputField({ label: "Name", value: form.name, onChange: e => setForm({...form, name: e.target.value}) }),
          InputField({ label: "Business Name", value: form.businessName, onChange: e => setForm({...form, businessName: e.target.value}) })
        ),
        InputField({ label: "Address", value: form.address, onChange: e => setForm({...form, address: e.target.value}) }),
        e("div", { className: "grid md:grid-cols-2 gap-4" },
          InputField({ label: "Contact Number", value: form.contact, onChange: e => setForm({...form, contact: e.target.value}) }),
          InputField({ label: "Preferred Meeting Time", type: "datetime-local", value: form.time, onChange: e => setForm({...form, time: e.target.value}) })
        ),
        SelectField({ label: "Required Services", options: ["Digital Transformation Support", "Strategic System Development Support", "Business Promotion Support", "Other"], value: form.service, onChange: e => setForm({...form, service: e.target.value}) }),
        e("button", { className: "w-full bg-orange-600 text-white font-bold py-3 rounded-lg mt-4" }, "Submit Request")
      )
    )
  );
}

// --- 2. RISING SUN AUTOMOBILES ---

function RisingSunAutomobiles({ onBack }) {
  const [form, setForm] = useState({ name: "", address: "", contact: "", service: "Consultation", maker: "", model: "", budget: "", time: "" });

  return e("div", { className: "max-w-4xl mx-auto px-6 py-10" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium" }, "← Back to Services"),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun Automobiles"),
    e("div", { className: "grid md:grid-cols-3 gap-6 mb-12" },
      ["Intra-Japan Car Sales", "Global Car Export", "Budget Consultation"].map(s => 
        e("div", { key: s, className: "p-4 bg-gray-50 border rounded-lg font-bold text-gray-800 text-center" }, s)
      )
    ),
    e("div", { className: "bg-white p-8 rounded-2xl shadow-lg border" },
      SectionHeader("Vehicle Inquiry Form"),
      e("form", { onSubmit: (ev) => { ev.preventDefault(); alert("Vehicle inquiry sent!"); } },
        e("div", { className: "grid md:grid-cols-2 gap-4" },
          InputField({ label: "Name", value: form.name, onChange: e => setForm({...form, name: e.target.value}) }),
          InputField({ label: "Contact Number", value: form.contact, onChange: e => setForm({...form, contact: e.target.value}) })
        ),
        InputField({ label: "Address", value: form.address, onChange: e => setForm({...form, address: e.target.value}) }),
        e("div", { className: "grid md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg mb-4" },
          InputField({ label: "Maker", placeholder: "e.g. Toyota", value: form.maker, onChange: e => setForm({...form, maker: e.target.value}) }),
          InputField({ label: "Model", placeholder: "e.g. Prius", value: form.model, onChange: e => setForm({...form, model: e.target.value}) }),
          InputField({ label: "Budget", placeholder: "e.g. ¥1M", value: form.budget, onChange: e => setForm({...form, budget: e.target.value}) })
        ),
        InputField({ label: "Preferred Meeting Time", type: "datetime-local", value: form.time, onChange: e => setForm({...form, time: e.target.value}) }),
        e("button", { className: "w-full bg-gray-900 text-white font-bold py-3 rounded-lg mt-4" }, "Send Vehicle Request")
      )
    )
  );
}

// --- HOME PAGE SUB-COMPONENTS ---

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Rising Sun TechLab", sub: "Innovative System Development", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600" },
    { title: "Strategic Consulting", sub: "Business Promotion & DX", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600" },
    { title: "Automobiles", sub: "Premium Japanese Vehicle Export", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600" }
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrent(s => (s + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return e("div", { className: "relative h-[450px] bg-gray-900 overflow-hidden" },
    slides.map((s, i) => e("div", { key: i, className: `absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}` },
      e("img", { src: s.img, className: "w-full h-full object-cover opacity-50" }),
      e("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-white text-center" },
        e("h1", { className: "text-5xl font-bold mb-2" }, s.title),
        e("p", { className: "text-xl" }, s.sub)
      )
    ))
  );
}

function StatsStrip() {
  return e("div", { className: "bg-orange-600 text-white py-6" },
    e("div", { className: "max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center" },
      [["15+", "Years"], ["Global", "Reach"], ["100%", "Quality"], ["24/7", "Support"]].map(([v, l]) => 
        e("div", { key: l }, e("div", { className: "text-2xl font-bold" }, v), e("div", { className: "text-xs uppercase" }, l))
      )
    )
  );
}

// --- MAIN APP ---

function App() {
  const [tab, setTab] = useState("home");

  const Nav = () => e("nav", { className: "bg-white border-b sticky top-0 z-50 p-4 shadow-sm" },
    e("div", { className: "max-w-6xl mx-auto flex justify-between items-center" },
      e("div", { className: "text-xl font-bold text-orange-600 cursor-pointer", onClick: () => setTab("home") }, "☀ Rising Sun Services"),
      e("div", { className: "flex gap-6 font-medium text-gray-600" },
        ["home", "about", "team", "contact"].map(t => e("button", { key: t, onClick: () => setTab(t), className: tab === t ? "text-orange-600" : "" }, t.toUpperCase()))
      )
    )
  );

  return e("div", { className: "min-h-screen flex flex-col font-sans text-gray-900" },
    Nav(),
    e("main", { className: "flex-grow" },
      tab === "home" && e("div", null,
        e(HeroSlider),
        e(StatsStrip),
        e("section", { className: "max-w-6xl mx-auto py-16 px-6" },
          e("h2", { className: "text-3xl font-bold text-center mb-12" }, "Our Specialized Services"),
          e("div", { className: "grid md:grid-cols-3 gap-8" },
            Card("Consulting", "Business Strategy", "DX & Promotion Support.", () => setTab("consulting")),
            Card("TechLab", "IT Solutions", "Development & Education.", () => setTab("techlab")),
            Card("Automobiles", "Vehicle Trade", "Export & Local Sales.", () => setTab("autos"))
          )
        )
      ),
      tab === "consulting" && e(RisingSunConsulting, { onBack: () => setTab("home") }),
      tab === "autos" && e(RisingSunAutomobiles, { onBack: () => setTab("home") }),
      tab === "techlab" && e(RisingSunTechLab, { onBack: () => setTab("home") }),
      tab === "about" && e("div", { className: "py-20 text-center text-2xl" }, "About Content (See previous versions for table)"),
      tab === "team" && e("div", { className: "py-20 text-center text-2xl" }, "Team Members Section"),
      tab === "contact" && e("div", { className: "py-20 text-center text-2xl" }, "General Contact: risingsunservices.jp@gmail.com")
    ),
    e("footer", { className: "bg-gray-900 text-gray-500 py-8 text-center" }, "© 2025 Rising Sun Services · Asdiqa Co. Ltd.")
  );
}

// TechLab component needs to be defined if not already in global scope
function RisingSunTechLab({ onBack }) {
    return e("div", { className: "p-10 text-center" }, 
        e("button", { onClick: onBack }, "← Back"),
        e("h1", {className: "text-3xl font-bold mt-4"}, "Rising Sun TechLab Content")
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
