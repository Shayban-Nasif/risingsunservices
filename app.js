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
      className: "shadow-sm border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent",
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

// --- 2. RISING SUN TECHLAB PAGE ---

function RisingSunTechLab({ onBack }) {
  const [subTab, setSubTab] = useState("dev");
  const renderGrid = (items) => e(
    "div", { className: "grid md:grid-cols-2 gap-6 mb-12" },
    items.map((item, idx) => e("div", { key: idx, className: "bg-gray-50 p-6 rounded-lg border hover:border-orange-300 transition" },
      e("h4", { className: "font-bold text-lg mb-2 text-gray-800" }, item.title),
      e("p", { className: "text-gray-600 text-sm" }, item.desc)
    ))
  );

  return e("div", { className: "max-w-6xl mx-auto px-6 py-10 animate-fade-in" },
    e("button", { onClick: onBack, className: "text-gray-500 hover:text-orange-600 mb-8 font-medium" }, "← Back to Services"),
    e("h2", { className: "text-4xl font-bold mb-4 text-center text-gray-900" }, "Rising Sun TechLab"),
    e("div", { className: "flex justify-center mb-12 border-b" },
      e("button", { className: `px-8 py-4 font-bold border-b-2 transition ${subTab === 'dev' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500'}`, onClick: () => setSubTab("dev") }, "System Development"),
      e("button", { className: `px-8 py-4 font-bold border-b-2 transition ${subTab === 'edu' ? 'border-orange-600 text-orange-600' : 'border-transparent text-gray-500'}`, onClick: () => setSubTab("edu") }, "Tech Education")
    ),
    subTab === "dev" 
      ? e("div", null, SectionHeader("Development Portfolio"), renderGrid([{title: "Inventory System", desc: "Cloud-based stock management."},{title: "E-Commerce", desc: "Custom storefronts with payment gateways."}]), SectionHeader("Offered Services"), renderGrid([{title: "Web Apps", desc: "Modern React & Node.js solutions."},{title: "Mobile Apps", desc: "Native iOS and Android development."}]))
      : e("div", null, SectionHeader("Education Achievements"), renderGrid([{title: "Global IT Training", desc: "Bridging international talent to Japan."},{title: "Corporate Upskilling", desc: "Customized technical training for staff."}]), SectionHeader("Available Courses"), renderGrid([{title: "Full Stack Bootcamp", desc: "6-month intensive MERN course."},{title: "Basic IT Literacy", desc: "Foundational skills for the modern workplace."}]))
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

// --- HOME PAGE FRAGMENTS ---

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { title: "Rising Sun TechLab", sub: "Innovative System Development & Education", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600" },
    { title: "Strategic Consulting", sub: "Digital Transformation & Business Growth", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600" },
    { title: "Automobiles", sub: "Premium Japanese Vehicle Export", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=1600" }
  ];

  useEffect(() => {
    const t = setInterval(() => setCurrent(s => (s + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return e("div", { className: "relative h-[500px] bg-gray-900 overflow-hidden" },
    slides.map((s, i) => e("div", { key: i, className: `absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}` },
      e("img", { src: s.img, className: "w-full h-full object-cover opacity-50" }),
      e("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6" },
        e("h1", { className: "text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg" }, s.title),
        e("p", { className: "text-xl md:text-2xl max-w-2xl font-light" }, s.sub)
      )
    )),
    e("div", { className: "absolute bottom-6 w-full flex justify-center gap-2" },
        slides.map((_, i) => e("div", { key: i, className: `h-1 w-8 rounded ${i === current ? "bg-orange-500" : "bg-white/30"}` }))
    )
  );
}

function StatsStrip() {
  return e("div", { className: "bg-white border-y border-gray-100 py-8 shadow-sm" },
    e("div", { className: "max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center" },
      [["Global", "Reach"], ["15+", "Years Exp"], ["Japanese", "Quality"], ["24/7", "Support"]].map(([v, l]) => 
        e("div", { key: l }, e("div", { className: "text-3xl font-bold text-orange-600" }, v), e("div", { className: "text-xs font-bold uppercase tracking-widest text-gray-400 mt-1" }, l))
      )
    )
  );
}

// --- MAIN APP COMPONENT ---

function App() {
  const [tab, setTab] = useState("home");

  const Nav = () => e("nav", { className: "bg-white/90 backdrop-blur-md border-b sticky top-0 z-50 p-4" },
    e("div", { className: "max-w-6xl mx-auto flex justify-between items-center" },
      e("div", { className: "text-xl font-bold text-orange-600 cursor-pointer flex items-center gap-2", onClick: () => setTab("home") }, 
        e("span", {className: "text-2xl"}, "☀"), "Rising Sun Services"),
      e("div", { className: "hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest text-gray-500" },
        ["home", "about", "team", "contact"].map(t => e("button", { key: t, onClick: () => setTab(t), className: `hover:text-orange-600 transition ${tab === t ? "text-orange-600 border-b-2 border-orange-600" : ""}` }, t))
      )
    )
  );

  return e("div", { className: "min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900" },
    Nav(),
    e("main", { className: "flex-grow" },
      tab === "home" && e("div", null,
        e(HeroSlider),
        e(StatsStrip),
        e("section", { className: "max-w-4xl mx-auto py-16 px-6 text-center" },
            e("h2", { className: "text-sm font-bold text-orange-600 uppercase tracking-widest mb-4" }, "Introduction"),
            e("h3", { className: "text-3xl font-bold mb-6" }, "Bridging Japan and the Global Market"),
            e("p", { className: "text-gray-600 text-lg leading-relaxed" }, 
                "Rising Sun Services is the consumer brand of Asdiqa Co. Ltd., providing world-class technology, consulting, and automotive solutions. Our mission is to maintain Japanese standards of integrity and quality across all our global ventures.")
        ),
        e("section", { className: "max-w-6xl mx-auto py-12 px-6 pb-24" },
          e("div", { className: "grid md:grid-cols-3 gap-8" },
            Card("Consulting", "Business Advisory", "DX Support and Strategic System Planning.", () => setTab("consulting")),
            Card("TechLab", "IT & Education", "Software development and tech workforce training.", () => setTab("techlab")),
            Card("Automobiles", "Vehicle Trade", "Exporting and domestic sales of reconditioned cars.", () => setTab("autos"))
          )
        )
      ),
      
      tab === "consulting" && e(RisingSunConsulting, { onBack: () => setTab("home") }),
      tab === "techlab" && e(RisingSunTechLab, { onBack: () => setTab("home") }),
      tab === "autos" && e(RisingSunAutomobiles, { onBack: () => setTab("home") }),

      tab === "about" && e("section", { className: "max-w-4xl mx-auto px-6 py-16 animate-fade-in" },
        e("h2", { className: "text-4xl font-bold mb-10 text-center" }, "About Us"),
        e("div", { className: "bg-white rounded-2xl shadow-sm border overflow-hidden" },
          e("table", { className: "w-full text-left border-collapse" },
            e("tbody", null,
              [
                ["Brand Name", "Rising Sun Services"],
                ["Company", "Asdiqa Co. Ltd. (Parent Company)"],
                ["Office", "山田ビル３０３, 宝町２丁目３４−２８, 葛飾区, 東京都"],
                ["Registered Address", "お花茶屋二丁目2-20-107号, 葛飾区, 東京都"],
                ["Service Areas", "Japan Domestic & Global Markets"]
              ].map(([h, v], i) => e("tr", { key: i, className: "border-b last:border-0" },
                e("th", { className: "bg-gray-50 px-6 py-4 font-bold text-gray-700 w-1/3" }, h),
                e("td", { className: "px-6 py-4 text-gray-600" }, v)
              ))
            )
          )
        )
      ),

      tab === "team" && e("section", { className: "max-w-6xl mx-auto px-6 py-16 animate-fade-in text-center" },
        e("h2", { className: "text-4xl font-bold mb-12" }, "Our Leadership"),
        e("div", { className: "grid md:grid-cols-3 gap-8" },
            Card("Mohammad Zakir Hossen", "Director", "15+ years experience in System Engineering."),
            Card("Shayban Nasif", "Head of Operations", "Technology and Consulting specialist."),
            Card("Abdullah Al Asif", "Executive Consultant", "Customer communications lead.")
        )
      ),

      tab === "contact" && e("section", { className: "max-w-2xl mx-auto px-6 py-24 animate-fade-in text-center" },
        e("div", { className: "bg-white p-12 rounded-3xl shadow-xl border border-gray-100" },
            e("h2", { className: "text-3xl font-bold mb-6" }, "Contact Us"),
            e("p", { className: "text-xl text-orange-600 font-bold mb-2" }, "risingsunservices.jp@gmail.com"),
            e("p", { className: "text-gray-500 mb-8" }, "Tokyo, Japan | +81 80-7307-2277"),
            e("button", { className: "px-8 py-3 bg-gray-900 text-white rounded-full font-bold", onClick: () => window.location.href='mailto:risingsunservices.jp@gmail.com' }, "Send an Email")
        )
      )
    ),
    e("footer", { className: "bg-gray-900 text-gray-500 py-12 text-center text-sm" }, 
        e("div", { className: "font-bold text-white mb-2" }, "Rising Sun Services"),
        "© 2025 Rising Sun Services · A brand of Asdiqa Co. Ltd."
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(e(App));
