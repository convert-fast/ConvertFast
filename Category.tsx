import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { TOOLS, CATEGORIES } from '../data/tools';
import { ChevronRight, ArrowLeft } from 'lucide-react';
import { AdSensePlaceholder } from '../components/layout/AdSensePlaceholder';

export function Category() {
  const { categoryKey } = useParams();
  const category = CATEGORIES.find(c => c.key.toLowerCase() === categoryKey?.toLowerCase());
  
  if (!category) return <Navigate to="/" />;

  const categoryTools = TOOLS.filter(t => t.category.toLowerCase() === categoryKey?.toLowerCase());

  return (
    <div className="container mx-auto px-4 py-16">
      <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>

      <div className="flex items-center gap-6 mb-12">
        <div className="w-20 h-20 bg-blue-600 rounded-[2rem] flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
          <category.icon className="w-10 h-10" />
        </div>
        <div>
          <h1 className="text-4xl font-extrabold dark:text-white mb-2">{category.name}</h1>
          <p className="text-slate-500 dark:text-slate-400">Total {categoryTools.length} free online tools available</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          {categoryTools.map(tool => (
            <Link 
              key={tool.id} 
              to={tool.path}
              className="group flex items-center justify-between p-6 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center group-hover:text-blue-600 transition-colors">
                  <tool.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold dark:text-white group-hover:text-blue-600 transition-colors">{tool.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">{tool.description}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 group-hover:text-blue-600 transition-all" />
            </Link>
          ))}
        </div>
        
        <aside className="w-full lg:w-80">
          <AdSensePlaceholder type="sidebar" />
        </aside>
      </div>

      <div className="mt-20">
        <AdSensePlaceholder type="horizontal" />
      </div>
    </div>
  );
}