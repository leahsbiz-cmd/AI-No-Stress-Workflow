/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Sparkles, 
  Award, 
  MapPin, 
  ArrowRight, 
  BrainCircuit, 
  Workflow, 
  Search, 
  BarChart3, 
  Edit3, 
  LayoutTemplate,
  ExternalLink,
  CheckCircle2
} from "lucide-react";
import { useEffect } from "react";

const NAV_LINKS = [
  { name: "Waitlist", href: "#waitlist-section", primary: true },
];

const SPECIALTIES = [
  {
    icon: BrainCircuit,
    title: "AI Mindset Coaching for Stress Relief",
    description: "Overcome AI anxiety. We build your team's confidence to view AI as a helpful assistant rather than a stressful disruption.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Workflow,
    title: "AI Workflow Construction",
    description: "Custom-built, step-by-step processes using Google Workspace AI tools to automate repetitive tasks and save hours every week.",
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Search,
    title: "Google AI Research & Insights",
    description: "Leverage advanced AI to rapidly synthesize market data, competitor analysis, and industry trends directly within your ecosystem.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: BarChart3,
    title: "Data Analysis Brainstorming",
    description: "Transform raw numbers into actionable strategies. We use AI to identify patterns and brainstorm innovative business moves.",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Edit3,
    title: "Planning, Writing & Communication",
    description: "Draft flawless emails, comprehensive reports, and strategic plans in a fraction of the time with perfectly prompted AI assistance.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: LayoutTemplate,
    title: "Marketing Content Creation",
    description: "Scale your marketing output. Generate high-quality copy, social media calendars, and campaign ideas seamlessly.",
    color: "bg-pink-100 text-pink-600",
  },
];

export default function App() {
  useEffect(() => {
    // Load Credly embed script
    const script = document.createElement("script");
    script.src = "https://cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="font-sans text-slate-800 bg-slate-50 antialiased selection:bg-primary-100 selection:text-primary-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="bg-primary-600 p-2 rounded-lg text-white">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">AI No Stress</span>
            </div>
            <div className="hidden md:flex">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm shadow-primary-500/30"
                >
                  Join the Waitlist
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Decorative background blobs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-50 pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-100 blur-3xl opacity-50 pointer-events-none" />

          <div className="text-center max-w-4xl mx-auto relative z-10">
            {/* Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-3 mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700">
                <Award className="w-4 h-4 text-primary-600" />
                <span>Google AI Professional</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700">
                <MapPin className="w-4 h-4 text-primary-600" />
                <span>Based in West Palm Beach, FL</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]"
            >
              Unlock Peak Productivity with an <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">AI No Stress Workflow</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light"
            >
              I am a <strong className="font-semibold text-slate-800">Google AI Professional Certified Consultant</strong> and a <strong className="font-semibold text-slate-800">Google Professional AI Strategist</strong> using Google Workspace. I help business teams eliminate overwhelm and integrate seamless AI solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href="#waitlist-section" className="inline-flex justify-center items-center gap-2 px-8 py-4 text-lg font-semibold rounded-full text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-500/30 transition-all hover:-translate-y-0.5">
                Secure Your Spot
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#specialties" className="inline-flex justify-center items-center gap-2 px-8 py-4 text-lg font-medium rounded-full text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition-all">
                View Specialties
              </a>
            </motion.div>

            {/* Credly Digital Badge */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex justify-center"
            >
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="31fa3b06-cbdc-4f62-a5bf-5adbdb18a5de" 
                data-share-badge-host="https://www.credly.com"
              />
            </motion.div>
          </div>
        </div>
      </main>

      {/* Specialties Section */}
      <section id="specialties" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Empowering Business Teams</h2>
            <p className="mt-4 text-lg text-slate-600">Targeted AI solutions designed to integrate perfectly into your daily Google Workspace operations, tailored exactly to where your team needs the most support.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES.map((specialty, index) => (
              <motion.div 
                key={specialty.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 ${specialty.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <specialty.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{specialty.title}</h3>
                <p className="text-slate-600 leading-relaxed">{specialty.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Local Focus. Elite AI Strategy.</h2>
            <p className="text-lg text-slate-600">Proudly serving businesses exclusively in the greater West Palm Beach area, ensuring highly personalized, hands-on support for your team.</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-200 h-[400px] w-full max-w-5xl mx-auto relative bg-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113941.83446050516!2d-80.17387799017688!3d26.74191386706979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d5ccb61b4db1%3A0x628e93df1508db9!2sWest%20Palm%20Beach%2C%20FL!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              className="absolute inset-0"
              title="West Palm Beach Map"
            />
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist-section" class="py-24 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-800 text-center p-10 sm:p-16 relative"
          >
            {/* Decorative background blob inside the card */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-primary-600 blur-3xl opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Client Waitlist</h2>
              
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
                Due to the high demand for our specialized Google AI No Stress Workflow service, there is currently a waitlist. If you would like to receive priority placement details, please click "JOIN THE WAITLIST" and provide your information for onboarding when a slot becomes available.
              </p>

              <a 
                href="https://forms.gle/RDdphn73wLQmxveu7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex justify-center items-center gap-3 px-10 py-5 text-xl font-bold rounded-full text-slate-900 bg-white hover:bg-primary-50 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                JOIN THE WAITLIST
                <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-center gap-4 sm:gap-10">
                <div className="flex items-center justify-center gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium">Exclusive Google Workspace Focus</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-slate-400">
                  <CheckCircle2 className="w-5 h-5 text-primary-500" />
                  <span className="text-sm font-medium">Dedicated West Palm Beach Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary-600" />
            <span className="font-bold text-slate-900">AI No Stress</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} AI No Stress Workflow. All rights reserved. <br className="sm:hidden"/> Independent Consultant. Google Workspace is a trademark of Google LLC.
          </p>
        </div>
      </footer>
    </div>
  );
}
