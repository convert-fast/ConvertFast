import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';

const POSTS = [
  {
    id: 1,
    title: 'How to Convert PDF to Word Without Losing Formatting',
    excerpt: 'Discover the best ways to transform your PDF documents into editable Word files while keeping your layout intact.',
    author: 'Admin',
    date: 'June 15, 2024',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    title: 'Top 5 Image Compression Tools for Web Developers',
    excerpt: 'Speed up your website by optimizing your images. We compare the most popular online compression tools.',
    author: 'Admin',
    date: 'June 10, 2024',
    category: 'Optimization',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    title: 'Understanding BMI: A Guide to Health Monitoring',
    excerpt: 'Learn what Body Mass Index (BMI) means for your health and how to use our calculator effectively.',
    author: 'Health Team',
    date: 'June 5, 2024',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  }
];

export function Blog() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-extrabold mb-6 dark:text-white">ConvertFast Blog</h1>
        <p className="text-xl text-slate-500 dark:text-slate-400">
          Tips, tricks, and guides on file conversion, productivity, and digital tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <article key={post.id} className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden group hover:shadow-2xl transition-all">
            <div className="relative h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
              </div>
              <h3 className="text-xl font-bold dark:text-white mb-4 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
              >
                Read More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}