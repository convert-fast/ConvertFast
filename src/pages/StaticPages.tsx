import React from 'react';
import { Mail, MapPin, Phone, Globe } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-5xl font-extrabold mb-8 dark:text-white">About ConvertFast</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-lg leading-relaxed text-slate-600 dark:text-slate-400 space-y-6">
        <p>
          ConvertFast is a premier provider of free online conversion tools. Our mission is simple: to provide the fastest, most reliable, and easiest-to-use tools for users worldwide without any hidden costs or registration requirements.
        </p>
        <p>
          Founded in 2024, we recognized that while the internet is full of conversion tools, many are cluttered with intrusive ads, slow processing times, or paywalls. ConvertFast was built to change that.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold dark:text-white mb-4">Our Vision</h3>
            <p className="text-base">To become the go-to global platform for every file conversion and calculation need, empowering productivity everywhere.</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold dark:text-white mb-4">Our Values</h3>
            <p className="text-base">Privacy, speed, and simplicity. We believe technology should serve people without compromising their data or time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-extrabold mb-8 dark:text-white">Get in Touch</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 mb-12">
            Have questions or feedback? We'd love to hear from you. Our team typically responds within 24 hours.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shrink-0 text-blue-600">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold dark:text-white text-lg">Email Us</h4>
                <p className="text-slate-500 dark:text-slate-400">support@convertfast.com</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shrink-0 text-blue-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold dark:text-white text-lg">Visit Us</h4>
                <p className="text-slate-500 dark:text-slate-400">123 Tech Avenue, Silicon Valley, CA 94025</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center shrink-0 text-blue-600">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold dark:text-white text-lg">Call Us</h4>
                <p className="text-slate-500 dark:text-slate-400">+1 (555) 000-1234</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold dark:text-white">Full Name</label>
                <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold dark:text-white">Email Address</label>
                <input type="email" className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold dark:text-white">Subject</label>
              <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold dark:text-white">Message</label>
              <textarea rows={6} className="w-full bg-slate-50 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500" placeholder="Tell us more..."></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function Privacy() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 dark:text-white">Privacy Policy</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6">
        <p>Last updated: June 2024</p>
        <h2 className="text-2xl font-bold dark:text-white">1. Information We Collect</h2>
        <p>At ConvertFast, we respect your privacy. We do not require users to register or provide personal information to use our tools. Any files you upload for conversion are processed and then automatically deleted from our servers within 1 hour.</p>
        <h2 className="text-2xl font-bold dark:text-white">2. Cookies and Tracking</h2>
        <p>We use essential cookies to ensure the website functions correctly. We also use third-party services like Google AdSense which may use cookies to serve personalized ads.</p>
        <h2 className="text-2xl font-bold dark:text-white">3. Data Security</h2>
        <p>All file transfers are encrypted using industry-standard SSL technology. We take all necessary precautions to protect your data during the brief window it is on our servers.</p>
      </div>
    </div>
  );
}

export function Terms() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 dark:text-white">Terms of Service</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 space-y-6">
        <p>Last updated: June 2024</p>
        <h2 className="text-2xl font-bold dark:text-white">1. Acceptance of Terms</h2>
        <p>By accessing and using ConvertFast, you agree to comply with and be bound by these terms. If you do not agree, please do not use our services.</p>
        <h2 className="text-2xl font-bold dark:text-white">2. Use of Services</h2>
        <p>You may use our tools for personal or commercial purposes. However, you agree not to use the services for any illegal activities or to upload malicious content.</p>
        <h2 className="text-2xl font-bold dark:text-white">3. Limitation of Liability</h2>
        <p>ConvertFast provides these tools "as is" without any warranties. We are not liable for any data loss or damages resulting from the use of our services.</p>
      </div>
    </div>
  );
}