import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp, Shield, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TOOLS, CATEGORIES } from '../data/tools';
import { AdSensePlaceholder } from '../components/layout/AdSensePlaceholder';

const HERO_BG = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/39f9ad8b-afd4-4729-a60e-25e1c6f3d7b3/hero-background-305edbeb-1772989524149.webp";

export function Home() {
  const trendingTools = TOOLS.slice(0, 4);

  return (
    <div className="flex flex-col gap-16 pb-20">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_BG} 
            alt="Hero background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-slate-900/50 dark:to-slate-900" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              100% Free & Secure
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white leading-tight">
              ConvertFast – Free Online <br />
              <span className="text-blue-600">Conversion Tools</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              Convert files, images, units, and more instantly. No registration required. Fast, free, and worldwide accessibility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#tools" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center gap-2">
                Start Converting <ArrowRight className="w-5 h-5" />
              </a>
              <Link to="/about" className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-700 transition-all">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div id="tools" className="container mx-auto px-4">
        <AdSensePlaceholder type="header" className="mb-12" />

        {/* Categories Section */}
        <section className="mb-20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-bold dark:text-white mb-2">Tools by Category</h2>
              <p className="text-slate-500 dark:text-slate-400">Everything you need to boost your productivity.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                  <cat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold dark:text-white mb-3">{cat.name}</h3>
                <ul className="space-y-2 mb-6">
                  {TOOLS.filter(t => t.category === cat.key).slice(0, 3).map(tool => (
                    <li key={tool.id}>
                      <Link to={tool.path} className="text-slate-500 dark:text-slate-400 hover:text-blue-600 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-slate-300 rounded-full" />
                        {tool.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/category/${cat.key.toLowerCase()}`}
                  className="text-blue-600 dark:text-blue-400 font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trending Tools */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-10">
            <TrendingUp className="w-6 h-6 text-orange-500" />
            <h2 className="text-3xl font-bold dark:text-white">Trending Tools</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trendingTools.map((tool) => (
              <Link 
                key={tool.id} 
                to={tool.path}
                className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-transparent hover:border-blue-200 dark:hover:border-blue-800 transition-all"
              >
                <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm text-blue-600">
                  <tool.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-sm">{tool.name}</h4>
                  <p className="text-xs text-slate-500 line-clamp-1">{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <AdSensePlaceholder type="horizontal" className="mb-20" />

        {/* Why Choose Us */}
        <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 blur-[100px] translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16">Fast, Free & Secure</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Privacy First</h3>
                <p className="text-slate-400 leading-relaxed">Your files are processed locally or deleted immediately after conversion. We never store your data.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">Ultra Fast</h3>
                <p className="text-slate-400 leading-relaxed">Powered by cloud processing and client-side optimization for near-instant results.</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold">No Limits</h3>
                <p className="text-slate-400 leading-relaxed">No registration, no subscriptions. Use all our tools for free, as many times as you need.</p>
              </div>
            </div>
          </div>
        </section>

        <AdSensePlaceholder type="footer" />
      </div>
    </div>
  );
}