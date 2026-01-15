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
  return e("h3", { className: "text-2xl font-bold mb-6 text-gray-800 border-l-4 border-orange-600 pl-4 text-left" }, title);
}

function InputField({ label, type = "text", placeholder, value, onChange, required = true }) {
  return e("div", { className: "mb-4 text-left" },
    e("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, label),
    e("input", {
      type: type,
      className: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500",
      placeholder: placeholder,
      value: value,
      onChange: onChange,
      required: required
    })
  );
}

function TextArea({ label, placeholder, value, onChange }) {
  return e("div", { className: "mb-4 text-left" },
    e("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, label),
    e("textarea", {
      className: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 h-24",
      placeholder: placeholder,
      value: value,
      onChange: onChange
    })
  );
}

function SelectField({ label, options, value, onChange }) {
  return e("div", { className: "mb-4 text-left" },
    e("label", { className: "block text-gray-700 text-sm font-bold mb-2" }, label),
    e("select", {
      className: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500",
      value: value,
      onChange: onChange
    },
    options.map(opt => e("option", { key: opt, value: opt }, opt))
    )
  );
}

// --- 1. RISING SUN CONSULTING PAGE ---

function RisingSunConsulting({ onBack }) {
  const [form, setForm] = useState({ name: "", businessName: "", address: "", contact: "", time: "", service: "Digital Transformation Support" });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert(`Thank you, ${form.name}. Your consulting inquiry for ${form.service} has been sent.`);
  };

  return e("div", { className: "max-w-4xl mx-auto px-6 py-10 animate-fade-in" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium" }, "← Back to Services"),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun Consulting"),
    e("p", { className: "text-center text-gray-600 mb-12" }, "Strategic support for Digital Transformation and Business Promotion."),
    
    e("div", { className: "grid md:grid-cols-3 gap-4 mb-12" },
        ["Digital Transformation Support", "Strategic System Development Support", "Business Promotion Support"].map(s => 
            e("div", { key: s, className: "p-4 bg-orange-50 border border-orange-100 rounded-lg text-sm font-bold text-orange-800 text-center" }, s)
        )
    ),

    e("div", { className: "bg-white p-8 rounded-2xl shadow-xl border border-gray-100" },
      SectionHeader("Consultation Request Form"),
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
        e("button", { className: "w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition mt-4 shadow-lg" }, "Submit Consultation Request")
      )
    )
  );
}


// --- 2. RISING SUN TECHLAB PAGE (REFINED) ---

function RisingSunTechLab({ onBack }) {
  const [subTab, setSubTab] = useState("dev");
  const techStack = ["React", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"];

  const renderServiceItem = (title, desc, features) => e(
    "div", { className: "bg-white p-6 rounded-xl border border-gray-100 shadow-sm" },
    e("h4", { className: "font-bold text-xl mb-2 text-orange-600" }, title),
    e("p", { className: "text-gray-600 text-sm mb-4" }, desc),
    e("ul", { className: "space-y-1" }, features.map((f, i) => e("li", { key: i, className: "text-xs text-gray-500 flex items-center gap-2" }, "• " + f)))
  );

  return e("div", { className: "max-w-6xl mx-auto px-6 py-10 animate-fade-in" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium" }, "← Back"),
    e("div", { className: "text-center mb-12" },
      e("h2", { className: "text-4xl font-bold mb-4" }, "Rising Sun TechLab"),
      e("p", { className: "text-gray-500" }, "Innovating Software & Empowering IT Talent.")
    ),
    e("div", { className: "flex justify-center p-1 bg-gray-100 rounded-full max-w-md mx-auto mb-16" },
      ["dev", "edu"].map(t => e("button", { 
        key: t,
        className: `flex-1 py-3 px-6 rounded-full font-bold text-sm transition ${subTab === t ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-500'}`, 
        onClick: () => setSubTab(t) 
      }, t === "dev" ? "Software House" : "IT Academy"))
    ),
    subTab === "dev" ? e("div", null,
      e("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" },
        renderServiceItem("Web Solutions", "Tailored web applications.", ["Homepage", "E-commerce", "SaaS", "Dashboards"]),
        renderServiceItem("Mobile Apps", "iOS & Android development.", ["UI/UX", "API Integration"]),
        renderServiceItem("Automation", "Workflow internal tooling.", ["AI Chatbots", "Scripts", "Data Scraping"]),
        renderServiceItem("Cloud Ops", "Scalable secure hosting.", ["AWS", "DevOps"])
      ),
      e("div", { className: "text-center" },
        e("p", { className: "text-xs font-bold text-gray-400 uppercase mb-6" }, "Core Tech Stack"),
        e("div", { className: "flex flex-wrap justify-center gap-4" }, techStack.map(t => e("span", { key: t, className: "px-4 py-2 bg-white border rounded-lg text-sm" }, t)))
      )
    ) : e("div", { className: "grid md:grid-cols-3 gap-6" },
      e("div", { className: "md:col-span-2 bg-orange-600 text-white p-8 rounded-2xl" },
        e("h3", { className: "text-2xl font-bold mb-4" }, "Robotics for Kids"),
        e("p", { className: "mb-6 opacity-90" }, "Training kids for the competitive tech world")
      ),
      e("div", { className: "bg-white border p-6 rounded-2xl" },
        e("h4", { className: "font-bold mb-4" }, "Active Courses"),
        ["Robotics for Kids", "Advanced MS EXCEL", "Python for all"].map(c => e("div", { key: c, className: "py-2 border-b last:border-0 text-sm" }, c))
      )
    )
  );
}

// --- 3. RISING SUN AUTOMOBILES PAGE ---

function RisingSunAutomobiles({ onBack }) {
  const [form, setForm] = useState({ 
    name: "", 
    address: "", 
    contact: "", 
    service: "Budget Consultation", // Default value
    maker: "", 
    model: "", 
    budget: "", 
    details: "", 
    time: "" 
  });

  const handleSubmit = (ev) => {
    ev.preventDefault();
    alert(`Vehicle inquiry sent! \nService: ${form.service} \nCar: ${form.maker} ${form.model}`);
  };

  return e("div", { className: "max-w-4xl mx-auto px-6 py-10 animate-fade-in" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium transition" }, "← Back to Services"),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun Automobiles"),
    e("p", { className: "text-center text-gray-600 mb-12" }, "Trusted export and domestic sales of premium Japanese vehicles."),

    e("div", { className: "grid md:grid-cols-3 gap-6 mb-12" },
      ["Intra-Japan Car Sales", "Global Car Export", "Budget Consultation"].map(s => 
        e("div", { key: s, className: "p-4 bg-gray-50 border rounded-lg font-bold text-gray-800 text-center" }, s)
      )
    ),
           
    e("div", { className: "bg-white p-8 rounded-2xl shadow-xl border border-gray-100" },
      SectionHeader("Vehicle Inquiry & Consultation"),
      e("form", { onSubmit: handleSubmit },
        // 1. Personal Info
        e("h4", { className: "font-bold text-gray-800 mb-4 border-b pb-2" }, "1. Customer Information"),
        e("div", { className: "grid md:grid-cols-2 gap-4" },
          InputField({ label: "Name", value: form.name, onChange: e => setForm({...form, name: e.target.value}) }),
          InputField({ label: "Contact Number", value: form.contact, onChange: e => setForm({...form, contact: e.target.value}) })
        ),
        InputField({ label: "Address", value: form.address, onChange: e => setForm({...form, address: e.target.value}) }),

        // 2. Desired Service Dropdown
        e("h4", { className: "font-bold text-gray-800 mb-4 border-b pb-2 mt-6" }, "2. Service Type"),
        SelectField({ 
          label: "Desired Service", 
          options: [
            "Intra-Japan Car Sale", 
            "Global Car Export", 
            "Budget Consultation", 
            "Other"
          ], 
          value: form.service, 
          onChange: e => setForm({...form, service: e.target.value}) 
        }),

        // 3. Car Details
        e("h4", { className: "font-bold text-gray-800 mb-4 border-b pb-2 mt-6" }, "3. Vehicle Preferences"),
        e("div", { className: "grid md:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg mb-4" },
          InputField({ label: "Maker", placeholder: "e.g. Toyota", value: form.maker, onChange: e => setForm({...form, maker: e.target.value}) }),
          InputField({ label: "Model", placeholder: "e.g. Aqua", value: form.model, onChange: e => setForm({...form, model: e.target.value}) }),
          InputField({ label: "Budget", placeholder: "e.g. ¥800,000", value: form.budget, onChange: e => setForm({...form, budget: e.target.value}) })
        ),
        TextArea({ label: "Specific Requirements", placeholder: "Color, Year, Mileage...", value: form.details, onChange: e => setForm({...form, details: e.target.value}) }),
        
        // 4. Meeting Info
        InputField({ label: "Preferred Meeting Time", type: "datetime-local", value: form.time, onChange: e => setForm({...form, time: e.target.value}) }),
        
        e("button", { className: "w-full bg-gray-900 hover:bg-black text-white font-bold py-3 rounded-lg transition mt-4 shadow-lg" }, "Send Vehicle Request")
      )
    )
  );
}

// --- MAIN APP ---

function App() {
  const [tab, setTab] = useState("HOME");

  const Nav = () => e("nav", { className: "bg-white border-b sticky top-0 z-50 p-4" },
    e("div", { className: "max-w-6xl mx-auto flex justify-between items-center" },
      e("div", { className: "text-xl font-bold text-orange-600 cursor-pointer flex items-center gap-2", onClick: () => setTab("home") }, "☀ Rising Sun Services"),
      e("div", { className: "hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest text-gray-500" },
        ["HOME", "ABOUT", "TEAM", "CONTACT"].map(t => e("button", { key: t, onClick: () => setTab(t), className: tab === t ? "text-orange-600 border-b-2 border-orange-600" : "hover:text-orange-600" }, t))
      )
    )
  );

  const HeroSlider = () => {
    const [curr, setCurr] = useState(0);
    const slides = [{t: "Rising Sun TechLab", s: "Software Development & IT Academy", i: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600"}, {t: "Strategic Consulting", s: "DX & Business Growth", i: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600"}, {t: "Automobiles", s: "Premium Vehicle Export", i: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600"}];
    useEffect(() => { const t = setInterval(() => setCurr(s => (s + 1) % slides.length), 5000); return () => clearInterval(t); }, []);
    
    return e("div", { className: "relative h-[480px] bg-gray-900 overflow-hidden" },
      slides.map((s, i) => e("div", { key: i, className: `absolute inset-0 transition-opacity duration-1000 ${i === curr ? "opacity-100" : "opacity-0"}` },
        e("img", { src: s.i, className: "w-full h-full object-cover opacity-40" }),
        e("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-white text-center" },
          e("h1", { className: "text-5xl font-bold mb-4" }, s.t),
          e("p", { className: "text-xl mb-8" }, s.s),
          e("button", { 
            onClick: () => document.getElementById('services').scrollIntoView({behavior: 'smooth'}),
            className: "px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-full font-bold shadow-lg transition transform hover:scale-105" 
          }, "Explore Our Services")
        )
      ))
    );
  };

  const ServiceShortcutBar = () => e("div", { className: "bg-white border-b py-4" },
    e("div", { className: "max-w-4xl mx-auto flex justify-center gap-4 md:gap-12" },
      [["Consulting", "consulting"], ["TechLab", "techlab"], ["Automobiles", "autos"]].map(([n, t]) => 
        e("button", { key: t, onClick: () => setTab(t), className: "text-xs font-bold uppercase text-gray-400 hover:text-orange-600 tracking-widest flex items-center gap-2" }, "➜", n)
      )
    )
  );

  function StatsStrip() {
    return e("div", { className: "bg-white border-y border-gray-100 py-8 shadow-sm" },
      e("div", { className: "max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center" },
        [["Global", "Reach"], ["15+", "Years Exp"], ["Japanese", "Quality"], ["24/7", "Support"]].map(([v, l]) => 
          e("div", { key: l }, e("div", { className: "text-3xl font-bold text-orange-600" }, v), e("div", { className: "text-xs font-bold uppercase tracking-widest text-gray-400 mt-1" }, l))
        )
      )
    );
  }
  
   return e("div", { className: "min-h-screen flex flex-col font-sans bg-gray-50" },
    Nav(),
    e("main", { className: "flex-grow" },
      tab === "HOME" && e("div", null,
        e(HeroSlider),
        e(ServiceShortcutBar),
        e(StatsStrip),
        e("section", { className: "max-w-4xl mx-auto py-16 px-6 text-center" },
        e("h2", { className: "text-sm font-bold text-orange-600 uppercase tracking-widest mb-4" }, "Introduction"),
        e("h3", { className: "text-3xl font-bold mb-6" }, "Bridging Japan and the Global Market"),
        e("p", { className: "text-gray-600 text-lg leading-relaxed" }, "Rising Sun Services is the consumer brand of Asdiqa Co. Ltd., providing world-class technology, consulting, and automotive solutions. Our mission is to maintain Japanese standards of integrity and quality across all our global ventures.")
        ),
        e("section", { id: "services", className: "max-w-6xl mx-auto py-24 px-6" },
          e("div", { className: "grid md:grid-cols-3 gap-8" },
            Card("Consulting", "Business Strategy", "DX Support and System Planning.", () => setTab("consulting")),
            Card("TechLab", "IT & Education", "Software development and IT workforce training.", () => setTab("techlab")),
            Card("Automobiles", "Vehicle Trade", "Export and domestic sales of cars.", () => setTab("autos"))
          )
        )
      ),
      tab === "consulting" && e(RisingSunConsulting, { onBack: () => setTab("HOME") }),
      tab === "techlab" && e(RisingSunTechLab, { onBack: () => setTab("HOME") }),
      tab === "autos" && e(RisingSunAutomobiles, { onBack: () => setTab("HOME") }),
      tab === "ABOUT" && e("section", { className: "max-w-4xl mx-auto px-6 py-16 animate-fade-in" },
        e("h2", { className: "text-4xl font-bold mb-10 text-center" }, "About Us"),
        e("div", { className: "bg-white rounded-2xl shadow-sm border overflow-hidden" },
          e("table", { className: "w-full text-left border-collapse" },
            e("tbody", null,
              [
                ["Brand Name", "Rising Sun Services"],
                ["Company", "Asdiqa Co. Ltd. (Parent Company)"],
                ["Office", "東京都葛飾区宝町２丁目３４−２８山田ビル３０３"],
                ["Registered Address", "東京都葛飾区お花茶屋二丁目2-20-107号"],
                ["Service Areas", "Japan Domestic & Global Markets"]
              ].map(([h, v], i) => e("tr", { key: i, className: "border-b last:border-0" },
                e("th", { className: "bg-gray-50 px-6 py-4 font-bold text-gray-700 w-1/3" }, h),
                e("td", { className: "px-6 py-4 text-gray-600" }, v)
              ))
            )
          )
        )
      ),

      tab === "TEAM" && e("section", { className: "max-w-6xl mx-auto px-6 py-16 animate-fade-in text-center" },
        e("h2", { className: "text-4xl font-bold mb-12" }, "Our Leadership"),
        e("div", { className: "grid md:grid-cols-3 gap-8" },
            Card("Mohammad Zakir Hossen", "Director", "15+ years experience in System Engineering."),
            Card("Shayban Nasif", "Head of Operations", "Technology and Consulting specialist."),
            Card("Abdullah Al Asif", "Executive Consultant", "Customer communications lead.")
        )
      ),

      tab === "CONTACT" && e("section", { className: "max-w-2xl mx-auto px-6 py-24 animate-fade-in text-center" },
        e("div", { className: "bg-white p-12 rounded-3xl shadow-xl border border-gray-100" },
            e("h2", { className: "text-3xl font-bold mb-6" }, "Contact Us"),
            e("p", { className: "text-xl text-orange-600 font-bold mb-2" }, "risingsunservices.jp@gmail.com"),
            e("p", { className: "text-gray-500 mb-8" }, "Tokyo, Japan | +81 80-7307-2277"),
            e("button", { className: "px-8 py-3 bg-gray-900 text-white rounded-full font-bold", onClick: () => window.location.href='mailto:risingsunservices.jp@gmail.com' }, "Send an Email")
        )
      )
    ),
    e("footer", { className: "bg-gray-900 text-gray-500 py-10 text-center text-sm" }, "© 2025 Rising Sun Services · Asdiqa Co. Ltd.")
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
