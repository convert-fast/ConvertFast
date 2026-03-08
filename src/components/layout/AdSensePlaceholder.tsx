import React from 'react';

interface AdSensePlaceholderProps {
  type: 'header' | 'sidebar' | 'horizontal' | 'footer';
  className?: string;
}

export function AdSensePlaceholder({ type, className = '' }: AdSensePlaceholderProps) {
  const styles = {
    header: 'w-full h-24 max-w-[728px] mx-auto',
    sidebar: 'w-full h-[600px] max-w-[300px]',
    horizontal: 'w-full h-[250px]',
    footer: 'w-full h-24 max-w-[728px] mx-auto',
  };

  return (
    <div className={`bg-slate-100 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-lg flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 p-4 ${styles[type]} ${className}`}>
      <span className="text-xs font-bold tracking-widest uppercase mb-1">Advertisement</span>
      <span className="text-[10px]">Google AdSense Placeholder</span>
    </div>
  );
}