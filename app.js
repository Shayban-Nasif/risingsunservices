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
    e("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, label),
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

function TextArea({ label, placeholder, value, onChange }) {
  return e("div", { className: "mb-4" },
    e("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, label),
    e("textarea", {
      className: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 h-32",
      placeholder: placeholder,
      value: value,
      onChange: onChange
    })
  );
}

function SelectField({ label, options, value, onChange }) {
  return e("div", { className: "mb-4" },
    e("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, label),
    e("select", {
      className: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white",
      value: value,
      onChange: onChange
    },
    options.map(opt => e("option", { key: opt, value: opt }, opt))
    )
  );
}

// --- 1. RISING SUN CONSULTING PAGE ---

function RisingSunConsulting({ onBack }) {
  const [form, setForm] = useState({
    name: "", businessName: "", address: "", contact: "", time: "", service: "Digital Transformation Support"
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert(`Thank you, ${form.name}. We have received your consulting inquiry regarding ${form.service}.`);
  };

  const services = [
    { title: "Digital Transformation (DX)", desc: "Modernize your legacy systems and automate workflows." },
    { title: "Strategic System Development", desc: "Align your IT infrastructure with your long-term business goals." },
    { title: "Business Promotion Support", desc: "Marketing strategies to expand your market reach." }
  ];

  return e("div", { className: "max-w-4xl mx-auto px-6 py-10" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium" }, "← Back to Services"),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun Consulting"),
    e("p", { className: "text-center text-gray-600 mb-12" }, "Expert guidance to navigate the complexities of modern business."),

    // Services Grid
    e("div", { className: "grid md:grid-cols-3 gap-6 mb-16" },
      services.map((s, i) => e("div", { key: i, className: "bg-gray-50 p-6 rounded-xl border border-gray-200" },
        e("h4", { className: "font-bold text-lg mb-2 text-orange-600" }, s.title),
        e("p", { className: "text-sm text-gray-600" }, s.desc)
      ))
    ),

    // Contact Form
    e("div", { className: "bg-white p-8 rounded-2xl shadow-lg border border-gray-100" },
      SectionHeader("Request a Consultation"),
      e("form", { onSubmit: handleSubmit },
        e("div", { className: "grid md:grid-cols-2 gap-4" },
          InputField({ label: "Name", placeholder: "Your Name", value: form.name, onChange: e => setForm({...form, name: e.target.value}) }),
          InputField({ label: "Business Name", placeholder: "Company Ltd.", value: form.businessName, onChange: e => setForm({...form, businessName: e.target.value}) }),
        ),
        InputField({ label: "Address", placeholder: "Office Location", value: form.address, onChange: e => setForm({...form, address: e.target.value}) }),
        e("div", { className: "grid md:grid-cols-2 gap-4" },
          InputField({ label: "Contact Number", placeholder: "080-XXXX-XXXX", value: form.contact, onChange: e => setForm({...form, contact: e.target.value}) }),
          InputField({ label: "Preferred Meeting Time", type: "datetime-local", value: form.time, onChange: e => setForm({...form, time: e.target.value}) }),
        ),
        SelectField({ 
          label: "Required Service", 
          options: ["Digital Transformation Support", "Strategic System Development Support", "Business Promotion Support", "Other"],
          value: form.service, 
          onChange: e => setForm({...form, service: e.target.value}) 
        }),
        e("button", { className: "w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition mt-4" }, "Submit Consultation Request")
      )
    )
  );
}

// --- 2. RISING SUN TECHLAB (Existing) ---

function RisingSunTechLab({ onBack }) {
  const [subTab, setSubTab] = useState("dev");
  const renderGrid = (items) => e(
    "div", { className: "grid md:grid-cols-2 gap-6 mb-12" },
    items.map((item, idx) => e("div", { key: idx, className: "bg-gray-50 p-6 rounded-lg border hover:border-orange-300 transition" },
      e("h4", { className: "font-bold text-lg mb-2 text-gray-800" }, item.title),
      e("p", { className: "text-gray-600 text-sm" }, item.desc)
    ))
  );

  return e("div", { className: "max-w-6xl mx-auto px-6 py-10" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium" }, "← Back to Services"),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun TechLab"),
    e("p", { className: "text-center text-gray-600 mb-12" }, "Bridging the gap between innovative software solutions and next-generation technical education."),
    e("div", { className: "flex justify-center mb-12 border-b" },
      e("button", { className: `px-8 py-4 font-bold border-b-2 transition ${subTab === 'dev' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500'}`, onClick: () => setSubTab("dev") }, "System Development"),
      e("button", { className: `px-8 py-4 font-bold border-b-2 transition ${subTab === 'edu' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500'}`, onClick: () => setSubTab("edu") }, "Tech Education")
    ),
    subTab === "dev" 
      ? e("div", null, SectionHeader("Development Portfolio"), renderGrid([{title: "Inventory System", desc: "Cloud-based stock management."},{title: "E-Commerce", desc: "Custom storefronts."}]), SectionHeader("Offered Systems"), renderGrid([{title: "Web Apps", desc: "React, Node.js solutions."},{title: "Mobile Apps", desc: "iOS/Android native apps."}]))
      : e("div", null, SectionHeader("Education Achievements"), renderGrid([{title: "Batch 2024", desc: "30 students placed."},{title: "Corporate Training", desc: "Upskilling workshops."}]), SectionHeader("Available Courses"), renderGrid([{title: "Full Stack Bootcamp", desc: "MERN Stack course."},{title: "IT Literacy", desc: "Computer fundamentals."}]))
  );
}

// --- 3. RISING SUN AUTOMOBILES PAGE ---

function RisingSunAutomobiles({ onBack }) {
  const [form, setForm] = useState({
    name: "", address: "", contact: "", service: "Consultation",
    maker: "", model: "", budget: "", details: "", time: ""
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert(`Thank you, ${form.name}. We will search for a ${form.maker} ${form.model} within your budget of ${form.budget}.`);
  };

  const services = [
    { title: "Domestic Sales", desc: "High-quality reconditioned cars for use within Japan." },
    { title: "Global Export", desc: "Shipping reliable Japanese vehicles to international markets." },
    { title: "Smart Consultation", desc: "We find the perfect car matching your specific budget and needs." }
  ];

  return e("div", { className: "max-w-4xl mx-auto px-6 py-10" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium" }, "← Back to Services"),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun Automobiles"),
    e("p", { className: "text-center text-gray-600 mb-12" }, "Your trusted partner for high-quality Japanese vehicles, locally and globally."),

    // Services
    e("div", { className: "grid md:grid-cols-3 gap-6 mb-16" },
      services.map((s, i) => e("div", { key: i, className: "bg-gray-50 p-6 rounded-xl border border-gray-200" },
        e("h4", { className: "font-bold text-lg mb-2 text-orange-600" }, s.title),
        e("p", { className: "text-sm text-gray-600" }, s.desc)
      ))
    ),

    // Car Inquiry Form
    e("div", { className: "bg-white p-8 rounded-2xl shadow-lg border border-gray-100" },
      SectionHeader("Vehicle Inquiry & Consultation"),
      e("form", { onSubmit: handleSubmit },
        // Personal Info
        e("h4", { className: "font-bold text-gray-800 mb-4 border-b pb-2" }, "1. Customer Information"),
        e("div", { className: "grid md:grid-cols-2 gap-4" },
          InputField({ label: "Name", placeholder: "Your Name", value: form.name, onChange: e => setForm({...form, name: e.target.value}) }),
          InputField({ label: "Contact Number", placeholder: "080-XXXX-XXXX", value: form.contact, onChange: e => setForm({...form, contact: e.target.value}) }),
        ),
        InputField({ label: "Address", placeholder: "Full Address", value: form.address, onChange: e => setForm({...form, address: e.target.value}) }),

        // Car Info
        e("h4", { className: "font-bold text-gray-800 mb-4 border-b pb-2 mt-6" }, "2. Car Preferences"),
        SelectField({ 
          label: "Service Type", 
          options: ["Consultation (Find me a car)", "Intra-Japan Purchase", "Export Request"],
          value: form.service, 
          onChange: e => setForm({...form, service: e.target.value}) 
        }),
        e("div", { className: "grid md:grid-cols-3 gap-4" },
          InputField({ label: "Maker", placeholder: "e.g. Toyota", value: form.maker, onChange: e => setForm({...form, maker: e.target.value}), required: false }),
          InputField({ label: "Model", placeholder: "e.g. Prius", value: form.model, onChange: e => setForm({...form, model: e.target.value}), required: false }),
          InputField({ label: "Budget (approx)", placeholder: "e.g. ¥500,000", value: form.budget, onChange: e => setForm({...form, budget: e.target.value}), required: false }),
        ),
        TextArea({ label: "Additional Requirements (Year, Color, Mileage, etc.)", placeholder: "Please describe your ideal car...", value: form.details, onChange: e => setForm({...form, details: e.target.value}) }),

        // Meeting Info
        e("h4", { className: "font-bold text-gray-800 mb-4 border-b pb-2 mt-2" }, "3. Meeting Preference"),
        InputField({ label: "Preferred Meeting Time (Online/Offline)", type: "datetime-local", value: form.time, onChange: e => setForm({...form, time: e.target.value}) }),

        e("button", { className: "w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition mt-4" }, "Send Inquiry")
      )
    )
  );
}

// --- MAIN APP ---

function App() {
  const [tab, setTab] = useState("home");
  const Nav = () => e("nav", { className: "border-b bg-white/95 backdrop-blur sticky top-0 z-50 shadow-sm" },
    e("div", { className: "max-w-6xl mx-auto px-6 h-16 flex justify-between items-center" },
      e("div", { className: "font-bold text-xl text-orange-600 cursor-pointer flex items-center gap-2", onClick: () => setTab("home") }, 
        e("span", {className: "text-2xl"}, "☀"), "Rising Sun Services"),
      e("div", { className: "hidden md:flex gap-8" }, ["home", "about", "team", "contact"].map(id => e("button", { key: id, onClick: () => setTab(id), className: "text-sm font-semibold uppercase tracking-wide transition " + (tab === id ? "text-orange-600" : "text-gray-500 hover:text-orange-500") }, id === "home" ? "Home" : id)))
    )
  );

  // Hero, Stats, Mission components excluded for brevity but assumed present from previous steps
  // (You can keep the Hero/Stats/Mission code from the previous response here)
  const HeroSlider = () => e("div", {className: "bg-gray-900 h-64 flex items-center justify-center text-white"}, "Hero Slider Area"); 
  const StatsStrip = () => e("div", {className: "py-4 bg-gray-50 text-center border-b"}, "Stats Strip Area");
  const MissionSection = () => e("div", {className: "py-8 text-center"}, "Mission Section Area");

  return e("div", { className: "min-h-screen bg-white flex flex-col font-sans" },
    Nav(),
    e("main", { className: "flex-grow" },
      tab === "home" && e("div", null,
        e(HeroSlider), e(StatsStrip), e(MissionSection),
        e("section", { className: "bg-gray-50 py-16" },
          e("div", { className: "max-w-6xl mx-auto px-6" },
            e("h2", { className: "text-3xl font-bold mb-12 text-center text-gray-900" }, "Our Services"),
            e("div", { className: "grid md:grid-cols-3 gap-8" },
              Card("Rising Sun Consulting", "Business Advisory", "Expert strategy for market entry.", () => setTab("consulting")),
              Card("Rising Sun TechLab", "Dev & Education", "Software development and IT training.", () => setTab("techlab")),
              Card("Rising Sun Automobiles", "Vehicle Export", "Trusted export and resale of cars.", () => setTab("autos"))
            )
          )
        )
      ),
      tab === "consulting" && e(RisingSunConsulting, { onBack: () => setTab("home") }),
      tab === "techlab" && e(RisingSunTechLab, { onBack: () => setTab("home") }),
      tab === "autos" && e(RisingSunAutomobiles, { onBack: () => setTab("home") }),
      
      // ... (About, Team, Contact sections same as before)
      tab === "about" && e("div", {className: "p-10 text-center"}, "About Page Content"),
      tab === "team" && e("div", {className: "p-10 text-center"}, "Team Page Content"),
      tab === "contact" && e("div", {className: "p-10 text-center"}, "Contact Page Content")
    ),
    e("footer", { className: "bg-gray-900 text-gray-400 py-10 text-center text-sm" }, "© 2025 Rising Sun Services")
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
