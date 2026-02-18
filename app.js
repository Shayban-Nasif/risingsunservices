const { useState, useEffect } = React;

// --- ICON COMPONENTS ---
function GlobeIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("path", { d: "M2 12h20M12 2a15 15 0 010 20" })
  );
}

function ArrowRightIcon() {
  return React.createElement("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M5 12h14M13 5l7 7-7 7" })
  );
}

function CodeIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" })
  );
}

function ExternalLinkIcon() {
  return React.createElement("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" })
  );
}

function RobotIcon() {
  return React.createElement("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("rect", { x: "3", y: "8", width: "18", height: "12", rx: "2" }),
    React.createElement("circle", { cx: "12", cy: "15", r: "2" }),
    React.createElement("path", { d: "M8 5h8M8 5v3M16 5v3" })
  );
}

function ShoppingCartIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("circle", { cx: "9", cy: "21", r: "1" }),
    React.createElement("circle", { cx: "20", cy: "21", r: "1" }),
    React.createElement("path", { d: "M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" })
  );
}

function ChartIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M21 21H4V4" }),
    React.createElement("path", { d: "M7 15l3-3 3 3 5-5" })
  );
}

function SmartphoneIcon() {
  return React.createElement("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", strokeWidth: "1.5", viewBox: "0 0 24 24" },
    React.createElement("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }),
    React.createElement("line", { x1: "12", y1: "18", x2: "12", y2: "18" })
  );
}

function CheckIcon() {
  return React.createElement("svg", { className: "w-5 h-5 text-green-500", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24" },
    React.createElement("path", { d: "M20 6L9 17l-5-5" })
  );
}

// --- SHARED COMPONENTS ---
function Card({ title, price, description, features, icon, onClick, highlight }) {
  return React.createElement("div", { 
    className: `bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2 ${highlight ? 'ring-2 ring-orange-500 ring-offset-2' : ''}` 
  },
    React.createElement("div", { className: `p-6 ${highlight ? 'bg-gradient-to-r from-orange-500 to-orange-600' : 'bg-gradient-to-r from-gray-900 to-gray-800'} text-white` },
      React.createElement("div", { className: "w-12 h-12 mb-4" }, React.createElement(icon, null)),
      React.createElement("h3", { className: "text-xl font-bold mb-1" }, title),
      React.createElement("div", { className: "text-2xl font-bold text-yellow-300" }, price)
    ),
    React.createElement("div", { className: "p-6" },
      React.createElement("p", { className: "text-gray-600 text-sm mb-4" }, description),
      React.createElement("ul", { className: "space-y-2 mb-6" },
        features.map((feature, i) => 
          React.createElement("li", { key: i, className: "text-sm text-gray-600 flex items-start gap-2" },
            React.createElement(CheckIcon, null),
            feature
          )
        )
      ),
      React.createElement("button", { 
        onClick: onClick,
        className: `w-full py-3 rounded-lg font-bold transition flex items-center justify-center gap-2 ${highlight ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'}` 
      }, "Inquire Now", React.createElement(ArrowRightIcon, null))
    )
  );
}

function SectionHeader({ title, subtitle }) {
  return React.createElement("div", { className: "text-center mb-12" },
    React.createElement("h2", { className: "text-4xl font-bold mb-4 text-gray-900" }, title),
    React.createElement("p", { className: "text-xl text-gray-600 max-w-2xl mx-auto" }, subtitle)
  );
}

// --- MAIN APP ---
function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  // Navigation Component
  const Nav = () => {
    return React.createElement("nav", { className: "bg-white border-b sticky top-0 z-50 p-4 shadow-sm" },
      React.createElement("div", { className: "max-w-7xl mx-auto flex justify-between items-center" },
        React.createElement("div", { className: "flex items-center cursor-pointer", onClick: () => setActiveTab('home') }, 
          React.createElement("img", { src: "./assets/rslogo.png", alt: "Rising Sun Logo", className: "h-12 w-auto object-contain" })
        ),
        React.createElement("div", { className: "hidden md:flex gap-8 font-bold text-xs uppercase tracking-widest text-gray-500" },
          [
            { label: "HOME", value: "home" },
            { label: "SERVICES", value: "services" },
            { label: "ROBOTICS", value: "robotics" },
            { label: "PORTFOLIO", value: "portfolio" },
            { label: "CONTACT", value: "contact" }
          ].map(item => 
            React.createElement("button", { 
              key: item.value,
              onClick: () => setActiveTab(item.value), 
              className: activeTab === item.value ? "text-orange-600 border-b-2 border-orange-600" : "hover:text-orange-600 transition" 
            }, item.label)
          )
        )
      )
    );
  };

  // IT Services Data
  const itServices = [
    {
      icon: GlobeIcon,
      title: "Website/Homepage Design",
      price: "¥50,000~",
      description: "Professional, responsive website design tailored to your brand",
      features: [
        "5 Pages Included",
        "Mobile Responsive",
        "SEO Optimized",
        "Contact Form Integration",
        "1 Month Support"
      ]
    },
    {
      icon: ShoppingCartIcon,
      title: "E-Commerce Development",
      price: "¥500,000~",
      description: "Full-featured online store with payment gateway integration",
      features: [
        "Product Catalog",
        "Shopping Cart",
        "Payment Gateway",
        "Order Management",
        "Admin Dashboard"
      ],
      highlight: true
    },
    {
      icon: ChartIcon,
      title: "Business Management System",
      price: "¥200,000~",
      description: "Comprehensive system to streamline business operations",
      features: [
        "Inventory Management",
        "Employee Tracking",
        "Report Generation",
        "Analytics Dashboard",
        "Multi-user Access"
      ]
    },
    {
      icon: SmartphoneIcon,
      title: "Educational Management System",
      price: "¥200,000~",
      description: "Complete solution for schools and educational institutions",
      features: [
        "Student Records",
        "Attendance System",
        "Grade Management",
        "Parent Portal",
        "Communication Tools"
      ]
    }
  ];

  // Robotics Course Data
  const roboticsCourses = [
    {
      level: "Beginner (Age 7-9)",
      duration: "3 months",
      price: "¥30,000/month",
      topics: ["Introduction to Robotics", "Block Programming", "Simple Circuits", "Basic Sensors"]
    },
    {
      level: "Intermediate (Age 10-12)",
      duration: "3 months",
      price: "¥35,000/month",
      topics: ["Arduino Basics", "Coding Fundamentals", "Motor Control", "LED Projects"]
    },
    {
      level: "Advanced (Age 13-15)",
      duration: "3 months",
      price: "¥40,000/month",
      topics: ["Advanced Arduino", "Python Programming", "AI Concepts", "Competition Prep"]
    }
  ];

  // Portfolio Projects
  const projects = [
    {
      id: 1,
      title: "RS Transport Solution",
      category: "Transportation System",
      description: "Real-time school transportation tracking system with live notifications",
      image: "https://via.placeholder.com/600x400/1e293b/ffffff?text=Transport+System",
      link: "https://shayban-nasif.github.io/maktab-transport-system/",
      status: "ongoing"
    },
    {
      id: 2,
      title: "Maktab Management System",
      category: "Education Platform",
      description: "Comprehensive school management platform",
      image: "https://via.placeholder.com/600x400/0f172a/ffffff?text=Maktab+System",
      link: "http://gakuin.makkimasjid.jp/",
      status: "live"
    },
    {
      id: 3,
      title: "Dr. Nabina Rahman Blog",
      category: "Content Platform",
      description: "Professional blog platform with custom CMS",
      image: "https://via.placeholder.com/600x400/334155/ffffff?text=Medical+Blog",
      link: "https://shayban-nasif.github.io/DrNabinaRahmanBlog/",
      status: "review"
    }
  ];

  // Handle Inquiry Form
  const handleInquiry = (service) => {
    setSelectedService(service);
    setActiveTab('inquiry');
    setFormData({...formData, service: service});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your interest! We'll contact you soon about ${formData.service}`);
    setActiveTab('home');
  };

  // Home Tab
  const HomeTab = () => {
    return React.createElement("div", null,
      // Hero Section
      React.createElement("section", { className: "bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20 px-6" },
        React.createElement("div", { className: "max-w-7xl mx-auto text-center" },
          React.createElement("h1", { className: "text-5xl md:text-6xl font-bold mb-6" }, "Rising Sun Services"),
          React.createElement("p", { className: "text-2xl mb-8 max-w-3xl mx-auto" },
            "Your trusted partner for innovative IT solutions and robotics education"
          ),
          React.createElement("div", { className: "flex flex-wrap justify-center gap-4" },
            React.createElement("button", { 
              onClick: () => setActiveTab('services'),
              className: "px-8 py-4 bg-white text-orange-600 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105"
            }, "Explore IT Services"),
            React.createElement("button", { 
              onClick: () => setActiveTab('robotics'),
              className: "px-8 py-4 bg-orange-700 text-white rounded-lg font-bold hover:bg-orange-800 transition transform hover:scale-105"
            }, "Robotics for Kids")
          )
        )
      ),

      // Quick Stats
      React.createElement("section", { className: "bg-gray-900 text-white py-12" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
          React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center" },
            [
              ["50+", "Projects"],
              ["15+", "Clients"],
              ["5+", "Years"],
              ["100+", "Students"]
            ].map(([num, label]) => 
              React.createElement("div", { key: label },
                React.createElement("div", { className: "text-3xl font-bold text-orange-400" }, num),
                React.createElement("div", { className: "text-sm text-gray-400" }, label)
              )
            )
          )
        )
      ),

      // Featured IT Services
      React.createElement("section", { className: "py-20 px-6 max-w-7xl mx-auto" },
        React.createElement(SectionHeader, {
          title: "Our IT Solutions",
          subtitle: "Professional development services with transparent pricing"
        }),
        React.createElement("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8" },
          itServices.map((service, index) => 
            React.createElement(Card, {
              key: index,
              icon: service.icon,
              title: service.title,
              price: service.price,
              description: service.description,
              features: service.features.slice(0, 3),
              highlight: service.highlight,
              onClick: () => handleInquiry(service.title)
            })
          )
        ),
        React.createElement("div", { className: "text-center mt-12" },
          React.createElement("button", {
            onClick: () => setActiveTab('services'),
            className: "px-8 py-3 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition inline-flex items-center gap-2"
          }, "View All Services", React.createElement(ArrowRightIcon, null))
        )
      ),

      // Robotics Promo
      React.createElement("section", { className: "py-16 bg-orange-50" },
        React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
          React.createElement("div", { className: "flex flex-col md:flex-row items-center gap-12" },
            React.createElement("div", { className: "flex-1" },
              React.createElement("div", { className: "w-24 h-24 bg-orange-600 text-white rounded-full flex items-center justify-center mb-6" },
                React.createElement(RobotIcon, null)
              ),
              React.createElement("h3", { className: "text-3xl font-bold mb-4" }, "Robotics for Kids"),
              React.createElement("p", { className: "text-lg text-gray-600 mb-6" },
                "Introduce your child to the exciting world of robotics and programming. Our hands-on courses teach STEM skills through fun projects."
              ),
              React.createElement("button", {
                onClick: () => setActiveTab('robotics'),
                className: "px-6 py-3 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition inline-flex items-center gap-2"
              }, "Learn More", React.createElement(ArrowRightIcon, null))
            ),
            React.createElement("div", { className: "flex-1 grid grid-cols-2 gap-4" },
              ["🤖 Build Robots", "💻 Learn Coding", "🔧 Hands-on Projects", "🏆 Competitions"].map(item =>
                React.createElement("div", { key: item, className: "bg-white p-4 rounded-lg shadow text-center font-bold" }, item)
              )
            )
          )
        )
      ),

      // Parent Company Link
      React.createElement("section", { className: "py-12 bg-gray-100" },
        React.createElement("div", { className: "max-w-4xl mx-auto px-6 text-center" },
          React.createElement("p", { className: "text-gray-600 mb-4" }, "Part of"),
          React.createElement("a", { 
            href: "https://asdiqa.jp", 
            target: "_blank",
            className: "text-2xl font-bold text-gray-900 hover:text-orange-600 transition inline-flex items-center gap-2"
          }, "ASDIQA CO. LTD.", React.createElement(ExternalLinkIcon, null))
        )
      )
    );
  };

  // Services Tab
  const ServicesTab = () => {
    return React.createElement("section", { className: "py-20 px-6 max-w-7xl mx-auto" },
      React.createElement(SectionHeader, {
        title: "IT Development Services",
        subtitle: "Custom solutions with transparent pricing and quality assurance"
      }),
      React.createElement("div", { className: "grid md:grid-cols-2 gap-8" },
        itServices.map((service, index) => 
          React.createElement(Card, {
            key: index,
            icon: service.icon,
            title: service.title,
            price: service.price,
            description: service.description,
            features: service.features,
            highlight: service.highlight,
            onClick: () => handleInquiry(service.title)
          })
        )
      ),
      React.createElement("div", { className: "mt-12 p-6 bg-blue-50 rounded-lg" },
        React.createElement("p", { className: "text-sm text-blue-800" },
          React.createElement("span", { className: "font-bold" }, "Note: "),
          "All prices are starting estimates. Final quote depends on specific requirements and project scope. Free consultation available."
        )
      )
    );
  };

  // Robotics Tab
  const RoboticsTab = () => {
    return React.createElement("section", { className: "py-20 px-6 max-w-7xl mx-auto" },
      React.createElement(SectionHeader, {
        title: "Robotics & Embedded Systems Course",
        subtitle: "Nurturing future innovators through hands-on STEM education"
      }),
      
      React.createElement("div", { className: "bg-gradient-to-r from-orange-500 to-orange-600 text-white p-12 rounded-2xl mb-12" },
        React.createElement("div", { className: "flex items-center gap-4 mb-6" },
          React.createElement(RobotIcon, null),
          React.createElement("h3", { className: "text-3xl font-bold" }, "For School Children (Ages 7-15)")
        ),
        React.createElement("p", { className: "text-xl mb-8 max-w-3xl" },
          "Our comprehensive robotics program teaches children programming, electronics, and problem-solving through fun, engaging projects."
        ),
        React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4" },
          ["No Experience Needed", "All Materials Provided", "Small Classes", "Certificates"].map(item =>
            React.createElement("div", { key: item, className: "bg-white/20 p-3 rounded-lg text-center font-bold" }, item)
          )
        )
      ),

      React.createElement("div", { className: "grid md:grid-cols-3 gap-8 mb-12" },
        roboticsCourses.map((course, index) =>
          React.createElement("div", { key: index, className: "bg-white rounded-xl shadow-lg overflow-hidden" },
            React.createElement("div", { className: "bg-gray-900 text-white p-6" },
              React.createElement("h4", { className: "text-xl font-bold mb-2" }, course.level),
              React.createElement("div", { className: "text-orange-400 font-bold" }, course.price),
              React.createElement("div", { className: "text-sm text-gray-400 mt-1" }, course.duration)
            ),
            React.createElement("div", { className: "p-6" },
              React.createElement("ul", { className: "space-y-2" },
                course.topics.map((topic, i) =>
                  React.createElement("li", { key: i, className: "text-sm text-gray-600 flex items-center gap-2" },
                    React.createElement("span", { className: "w-1 h-1 bg-orange-500 rounded-full" }),
                    topic
                  )
                )
              ),
              React.createElement("button", {
                onClick: () => handleInquiry(`Robotics: ${course.level}`),
                className: "mt-6 w-full py-2 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition"
              }, "Enroll Now")
            )
          )
        )
      ),

      React.createElement("div", { className: "bg-gray-50 p-8 rounded-2xl" },
        React.createElement("h4", { className: "text-2xl font-bold mb-6 text-center" }, "Course Schedule"),
        React.createElement("div", { className: "grid md:grid-cols-2 gap-8" },
          React.createElement("div", null,
            React.createElement("h5", { className: "font-bold mb-2" }, "Weekend Classes:"),
            React.createElement("p", { className: "text-gray-600" }, "Saturdays 10:00-12:00 / 13:00-15:00")
          ),
          React.createElement("div", null,
            React.createElement("h5", { className: "font-bold mb-2" }, "Weekday Classes:"),
            React.createElement("p", { className: "text-gray-600" }, "Wednesdays & Fridays 16:00-18:00")
          )
        )
      )
    );
  };

  // Portfolio Tab
  const PortfolioTab = () => {
    return React.createElement("section", { className: "py-20 px-6 max-w-7xl mx-auto" },
      React.createElement(SectionHeader, {
        title: "Our Portfolio",
        subtitle: "Real projects we've delivered for our clients"
      }),
      React.createElement("div", { className: "grid md:grid-cols-3 gap-8" },
        projects.map(project =>
          React.createElement("div", { key: project.id, className: "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition" },
            React.createElement("div", { className: "h-48 bg-gray-200" },
              React.createElement("img", { src: project.image, className: "w-full h-full object-cover" })
            ),
            React.createElement("div", { className: "p-6" },
              React.createElement("span", { className: "text-sm text-orange-600 font-bold" }, project.category),
              React.createElement("h3", { className: "text-xl font-bold mb-2" }, project.title),
              React.createElement("p", { className: "text-gray-600 text-sm mb-4" }, project.description),
              React.createElement("a", { 
                href: project.link, 
                target: "_blank",
                className: "text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition"
              }, "View Project", React.createElement(ArrowRightIcon, null))
            )
          )
        )
      )
    );
  };

  // Contact Tab
  const ContactTab = () => {
    return React.createElement("section", { className: "py-20 px-6 max-w-4xl mx-auto" },
      React.createElement("div", { className: "bg-white rounded-2xl shadow-xl p-12" },
        React.createElement(SectionHeader, {
          title: "Contact Us",
          subtitle: "Get in touch for a free consultation"
        }),
        React.createElement("form", { onSubmit: handleSubmit },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-6 mb-6" },
            React.createElement("div", null,
              React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Name"),
              React.createElement("input", {
                type: "text",
                className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500",
                value: formData.name,
                onChange: (e) => setFormData({...formData, name: e.target.value}),
                required: true
              })
            ),
            React.createElement("div", null,
              React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Email"),
              React.createElement("input", {
                type: "email",
                className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500",
                value: formData.email,
                onChange: (e) => setFormData({...formData, email: e.target.value}),
                required: true
              })
            )
          ),
          React.createElement("div", { className: "mb-6" },
            React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Phone"),
            React.createElement("input", {
              type: "tel",
              className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500",
              value: formData.phone,
              onChange: (e) => setFormData({...formData, phone: e.target.value}),
              required: true
            })
          ),
          React.createElement("div", { className: "mb-6" },
            React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Service Interested In"),
            React.createElement("select", {
              className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500",
              value: formData.service,
              onChange: (e) => setFormData({...formData, service: e.target.value}),
              required: true
            },
              React.createElement("option", { value: "" }, "Select a service"),
              itServices.map(s => React.createElement("option", { key: s.title, value: s.title }, s.title)),
              roboticsCourses.map(c => React.createElement("option", { key: c.level, value: c.level }, `Robotics: ${c.level}`))
            )
          ),
          React.createElement("div", { className: "mb-6" },
            React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Message"),
            React.createElement("textarea", {
              className: "w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-500 h-32",
              value: formData.message,
              onChange: (e) => setFormData({...formData, message: e.target.value}),
              placeholder: "Tell us about your project..."
            })
          ),
          React.createElement("button", {
            type: "submit",
            className: "w-full py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition"
          }, "Send Inquiry")
        )
      )
    );
  };

  // Inquiry Form Tab
  const InquiryTab = () => {
    return React.createElement("section", { className: "py-20 px-6 max-w-4xl mx-auto" },
      React.createElement("button", {
        onClick: () => setActiveTab('services'),
        className: "text-gray-600 hover:text-orange-600 mb-8 font-bold flex items-center gap-2"
      }, "← Back to Services"),
      React.createElement("div", { className: "bg-white rounded-2xl shadow-xl p-12" },
        React.createElement(SectionHeader, {
          title: "Service Inquiry",
          subtitle: `You're interested in: ${selectedService}`
        }),
        React.createElement("form", { onSubmit: handleSubmit },
          React.createElement("div", { className: "grid md:grid-cols-2 gap-6 mb-6" },
            React.createElement("div", null,
              React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Name"),
              React.createElement("input", {
                type: "text",
                className: "w-full p-3 border rounded-lg",
                required: true
              })
            ),
            React.createElement("div", null,
              React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Email"),
              React.createElement("input", {
                type: "email",
                className: "w-full p-3 border rounded-lg",
                required: true
              })
            )
          ),
          React.createElement("div", { className: "mb-6" },
            React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Phone"),
            React.createElement("input", {
              type: "tel",
              className: "w-full p-3 border rounded-lg",
              required: true
            })
          ),
          React.createElement("div", { className: "mb-6" },
            React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Company/Organization"),
            React.createElement("input", {
              type: "text",
              className: "w-full p-3 border rounded-lg"
            })
          ),
          React.createElement("div", { className: "mb-6" },
            React.createElement("label", { className: "block text-sm font-bold mb-2" }, "Project Details"),
            React.createElement("textarea", {
              className: "w-full p-3 border rounded-lg h-32",
              placeholder: "Please describe your requirements, timeline, and budget...",
              required: true
            })
          ),
          React.createElement("button", {
            type: "submit",
            className: "w-full py-4 bg-orange-600 text-white rounded-lg font-bold hover:bg-orange-700 transition"
          }, "Submit Inquiry")
        )
      )
    );
  };

  // Footer
  const Footer = () => {
    return React.createElement("footer", { className: "bg-gray-900 text-gray-400 py-12" },
      React.createElement("div", { className: "max-w-7xl mx-auto px-6" },
        React.createElement("div", { className: "grid md:grid-cols-4 gap-8" },
          React.createElement("div", null,
            React.createElement("img", { src: "./assets/rslogo.png", className: "h-10 w-auto mb-4 brightness-0 invert" }),
            React.createElement("p", { className: "text-sm" }, "Innovative IT solutions and robotics education")
          ),
          React.createElement("div", null,
            React.createElement("h4", { className: "font-bold text-white mb-4" }, "Services"),
            React.createElement("ul", { className: "space-y-2 text-sm" },
              itServices.map(s => React.createElement("li", { key: s.title }, s.title))
            )
          ),
          React.createElement("div", null,
            React.createElement("h4", { className: "font-bold text-white mb-4" }, "Quick Links"),
            React.createElement("ul", { className: "space-y-2 text-sm" },
              ["About", "Portfolio", "Contact"].map(item => 
                React.createElement("li", { key: item, className: "cursor-pointer hover:text-white" }, item)
              )
            )
          ),
          React.createElement("div", null,
            React.createElement("h4", { className: "font-bold text-white mb-4" }, "Contact"),
            React.createElement("p", { className: "text-sm" }, "Tokyo, Japan"),
            React.createElement("p", { className: "text-sm" }, "info@risingsunservices.jp"),
            React.createElement("p", { className: "text-sm mt-4" }, "A brand of ",
              React.createElement("a", { href: "https://asdiqa.jp", target: "_blank", className: "text-orange-400 hover:text-orange-300" }, "Asdiqa Co. Ltd.")
            )
          )
        ),
        React.createElement("div", { className: "border-t border-gray-800 mt-8 pt-8 text-center text-sm" },
          "© 2026 Rising Sun Services — All rights reserved"
        )
      )
    );
  };

  // Main Render
  return React.createElement("div", { className: "min-h-screen bg-gray-50 font-sans" },
    React.createElement(Nav, null),
    React.createElement("main", null,
      activeTab === 'home' && React.createElement(HomeTab, null),
      activeTab === 'services' && React.createElement(ServicesTab, null),
      activeTab === 'robotics' && React.createElement(RoboticsTab, null),
      activeTab === 'portfolio' && React.createElement(PortfolioTab, null),
      activeTab === 'contact' && React.createElement(ContactTab, null),
      activeTab === 'inquiry' && React.createElement(InquiryTab, null)
    ),
    React.createElement(Footer, null)
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App, null));
