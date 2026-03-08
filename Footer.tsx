import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-blue-600 rounded-lg">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold dark:text-white">ConvertFast</span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Fast, free, and secure online conversion tools for files, images, units, and more. No registration required.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 dark:text-white">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/tools" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">All Tools</Link></li>
              <li><Link to="/tools/pdf-to-word" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">PDF Converters</Link></li>
              <li><Link to="/tools/age-calculator" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">Calculators</Link></li>
              <li><Link to="/blog" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 dark:text-white">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">Contact Us</Link></li>
              <li><Link to="/privacy" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 dark:text-white">Newsletter</h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Stay updated with our latest tools and features.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address"
                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            © {currentYear} ConvertFast. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500 dark:text-slate-400">
            <span>Made with ❤️ for the Web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}