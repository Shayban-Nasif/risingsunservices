import React, { useState } from "https://esm.sh/react@18";
import {
  Building2,
  ArrowRight,
  Sun,
  Cpu,
  Car,
  Users,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Menu,
  X
} from "https://esm.sh/lucide-react";

const teamMembers = [
  { name: 'Mohammad Zakir Hossen', role: 'Director, Asdiqa Group', bio: 'Visionary leader with 15+ years in System Engineering.' },
  { name: 'Shayban Nasif', role: 'Head of Operations, Rising Sun Services', bio: 'Expert in business consulting & service operations.' },
  { name: 'Abdullah Al Asif', role: 'Business Executive Consultant, Rising Sun Services', bio: 'Specialist in customer service and business communications.' }
];

const rsServices = [
  { 
    id: 'consulting',
    title: 'Rising Sun Consulting', 
    desc: 'Strategic business planning and market entry solutions.',
    icon: <Briefcase className="w-6 h-6" />
  },
  { 
    id: 'tech',
    title: 'Rising Sun TechLab', 
    desc: 'Custom software development, New brand establishment support, Kids Tech Education',
    icon: <Cpu className="w-6 h-6" />
  },
  { 
    id: 'auto',
    title: 'Rising Sun Automobiles', 
    desc: 'Exporting and Reselling Japanese Car.',
    icon: <Car className="w-6 h-6" />
  }
];

const RisingSunApp = () => {
  const [activeTab, setActiveTab] = useState('home'); // home, about, team, contact
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NavItem = ({ id, label }) => (
    <button 
      onClick={() => { setActiveTab(id); setMobileMenuOpen(false); }}
      className={`font-medium transition-colors ${activeTab === id ? 'text-orange-600' : 'text-gray-600 hover:text-orange-500'}`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 flex flex-col">
      {/* Top Bar - Connecting back to Asdiqa */}
      <div className="bg-slate-900 text-slate-400 text-xs py-2 px-4 text-center">
        <span>A Concern of </span>
        {/* LINK TO PARENT DOMAIN */}
        <a 
            href="https://asdiqa.jp" 
            className="font-bold text-white hover:underline ml-1"
            target="_blank" 
            rel="noopener noreferrer"
        >
          Asdiqa Co. Ltd.
        </a>
      </div>

      {/* Main Nav */}
      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
            <Sun className="w-8 h-8 text-orange-500 fill-orange-500" />
            <span className="font-bold text-xl tracking-tight">Rising Sun <span className="text-orange-600">Services</span></span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            <NavItem id="home" label="Services" />
            <NavItem id="about" label="About Us" />
            <NavItem id="team" label="Our Team" />
            <NavItem id="contact" label="Contact" />
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 p-4 flex flex-col gap-4">
            <NavItem id="home" label="Services" />
            <NavItem id="about" label="About Us" />
            <NavItem id="team" label="Our Team" />
            <NavItem id="contact" label="Contact" />
          </div>
        )}
      </nav>

      {/* --- PAGE CONTENT SWITCHER --- */}
      <div className="flex-grow animate-in fade-in duration-500">
        
        {/* HOME / SERVICES TAB */}
        {activeTab === 'home' && (
          <>
            <div className="bg-orange-50 py-16 px-6 text-center">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Illuminating Solutions for You</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Professional consulting, technology, and automobiles trading.
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-3 gap-8">
                {rsServices.map((service) => (
                  <div key={service.id} className="group p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300">
                    <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-500 mb-6">{service.desc}</p>
                    <button className="text-orange-600 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ABOUT TAB */}
        {activeTab === 'about' && (
          <div className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8">About Rising Sun Services</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                Rising Sun Services was established with a singular mission: to bring the highest standards of professional service to the consumer market.
              </p>
              <p className="mb-6">
                We operate across three distinct verticals—Management Consulting, Technology Solutions, and Automotive Care. This diversity allows us to cross-pollinate ideas and bring a unique, systematic approach to every problem we solve.
              </p>
              
              <div className="bg-slate-50 border-l-4 border-slate-900 p-6 my-8 rounded-r-lg">
                <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Building2 className="w-5 h-5" /> Corporate Governance
                </h4>
                <p className="text-sm">
                  Rising Sun Services is a wholly-owned subsidiary of <strong>Asdiqa Co. Ltd. (アスディカー株式会社)</strong>. 
                  Our operations are backed by Asdiqa's robust global supply chain and financial stability, ensuring our customers receive reliable, long-term support.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TEAM TAB */}
        {activeTab === 'team' && (
          <div className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-4 text-center">Meet Our Experts</h2>
            <p className="text-center text-gray-500 mb-12">The dedicated professionals driving our vision forward.</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                  <div className="h-48 bg-gray-200 flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-orange-600 text-sm font-medium mb-4">{member.role}</p>
                    <p className="text-gray-500 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTACT TAB */}
        {activeTab === 'contact' && (
          <div className="max-w-3xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="john@example.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Department (Service)</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none bg-white">
                    <option>General Inquiry</option>
                    <option>Rising Sun Automobiles</option>
                    <option>Rising Sun TechLab</option>
                    <option>Rising Sun Consulting</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">Your query will be routed to the specific team lead.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:outline-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-sm text-gray-600">Katsushika, Tokyo, Japan</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-sm text-gray-600">+81 80-7307-2277</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                </div>
                <p className="text-sm text-gray-600">contact@risingsun.jp</p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Brand Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-6 text-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-bold text-white">Rising Sun Services</span>
            <span className="mx-2">|</span>
            <span>Est. 2025</span>
          </div>
          <div className="flex items-center gap-2">
             <span>A venture of</span>
             <a href="https://asdiqa.jp" className="text-white hover:text-orange-400 underline decoration-dotted underline-offset-4">
               Asdiqa Co. Ltd.
             </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RisingSunApp;
