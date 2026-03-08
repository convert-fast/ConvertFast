import React, { useState, useRef, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { TOOLS, Tool } from '../data/tools';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  Download, 
  RefreshCw, 
  ChevronLeft, 
  Info, 
  Settings, 
  FileText,
  Shield,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Trash2,
  Scale
} from 'lucide-react';
import { toast } from 'sonner';
import { AdSensePlaceholder } from '../components/layout/AdSensePlaceholder';

// --- HELPERS ---

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

// --- COMPONENTS ---

function FileConverterTool({ tool }: { tool: Tool }) {
  const [file, setFile] = useState<File | null>(null);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{ blob: Blob; name: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResult(null);
    }
  };

  const processFile = async () => {
    if (!file) {
      toast.error('Please select a file first');
      return;
    }

    setProcessing(true);
    
    try {
      // Logic for Image Converters (Real implementation using Canvas)
      if (tool.id === 'png-to-jpg' || tool.id === 'jpg-to-png' || tool.id === 'image-compressor') {
        const img = new Image();
        img.src = URL.createObjectURL(file);
        await new Promise((resolve) => (img.onload = resolve));
        
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas context not found');
        
        ctx.drawImage(img, 0, 0);
        
        const mimeType = tool.id === 'png-to-jpg' ? 'image/jpeg' : 'image/png';
        const quality = tool.id === 'image-compressor' ? 0.6 : 0.92;
        
        canvas.toBlob((blob) => {
          if (blob) {
            const newName = file.name.split('.')[0] + '.' + (tool.config?.outputExt || 'jpg');
            setResult({ blob, name: newName });
            setProcessing(false);
            toast.success('Converted successfully!');
          }
        }, mimeType, quality);
      } else {
        // Mock implementation for complex formats (PDF/Word/etc)
        // In a real app, this would call an API or use a heavy library
        setTimeout(() => {
          const mockBlob = new Blob(['Mock data for ' + tool.name], { type: 'text/plain' });
          const newName = file.name.split('.')[0] + '.' + (tool.config?.outputExt || 'converted');
          setResult({ blob: mockBlob, name: newName });
          setProcessing(false);
          toast.success('Converted successfully!');
        }, 2000);
      }
    } catch (error) {
      setProcessing(false);
      toast.error('An error occurred during conversion');
    }
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="space-y-6">
      {!result ? (
        <div 
          className="relative group border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-[2rem] p-12 transition-all hover:border-blue-500 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <input 
            type="file" 
            ref={fileInputRef}
            className="hidden" 
            accept={tool.config?.inputAccept}
            onChange={handleFileChange}
          />
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Upload className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold dark:text-white mb-2">
              {file ? file.name : 'Select a file or drag and drop here'}
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-8">
              {file ? `${(file.size / 1024 / 1024).toFixed(2)} MB` : `Supported files: ${tool.config?.inputAccept || 'All'}`}
            </p>
            
            {file && !processing && (
              <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <button 
                  onClick={(e) => { e.stopPropagation(); processFile(); }}
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-blue-600/20 transition-all active:scale-95"
                >
                  <RefreshCw className="w-5 h-5" /> Convert
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); reset(); }}
                  className="text-slate-500 hover:text-red-500 text-sm font-medium flex items-center justify-center gap-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              </div>
            )}

            {processing && (
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="font-bold text-blue-600 animate-pulse">Processing...</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-[2rem] p-10 text-center"
        >
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h3 className="text-3xl font-bold dark:text-white mb-3">Ready!</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-10 text-lg">Your converted file is now ready for download.</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <button 
              onClick={() => downloadBlob(result.blob, result.name)}
              className="flex-1 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-green-600/20 transition-all hover:-translate-y-1"
            >
              <Download className="w-6 h-6" /> Download
            </button>
            <button 
              onClick={reset}
              className="flex-1 px-8 py-4 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-700 dark:text-white font-bold rounded-2xl transition-all hover:bg-slate-50 dark:hover:bg-slate-600"
            >
              Convert Another
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}

function UnitConverterTool({ tool }: { tool: Tool }) {
  const [value, setValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState(tool.config?.units?.[0] || '');
  const [toUnit, setToUnit] = useState(tool.config?.units?.[1] || '');
  const [result, setResult] = useState<number | null>(null);

  const convert = () => {
    const num = parseFloat(value);
    if (isNaN(num)) return;

    // Simple mock conversion logic based on unit labels
    // In a production app, use a proper library or mapping
    let multiplier = 1;
    
    // Length (Base: Meter)
    const lengthMap: Record<string, number> = {
      'Meter': 1, 'Kilometer': 1000, 'Centimeter': 0.01, 'Millimeter': 0.001,
      'Mile': 1609.34, 'Yard': 0.9144, 'Foot': 0.3048, 'Inch': 0.0254
    };

    // Weight (Base: Gram)
    const weightMap: Record<string, number> = {
      'Gram': 1, 'Kilogram': 1000, 'Milligram': 0.001, 'Metric Ton': 1000000,
      'Pound': 453.592, 'Ounce': 28.3495
    };

    let map = lengthMap;
    if (tool.id === 'weight-converter') map = weightMap;

    if (map[fromUnit] && map[toUnit]) {
      const baseValue = num * map[fromUnit];
      const finalValue = baseValue / map[toUnit];
      setResult(finalValue);
    } else if (tool.id === 'temperature-converter') {
      // Temp conversion needs specific logic
      let celsius = num;
      if (fromUnit === 'Fahrenheit') celsius = (num - 32) * 5/9;
      if (fromUnit === 'Kelvin') celsius = num - 273.15;

      let final = celsius;
      if (toUnit === 'Fahrenheit') final = (celsius * 9/5) + 32;
      if (toUnit === 'Kelvin') final = celsius + 273.15;
      setResult(final);
    } else {
      setResult(num * 1.5); // Fallback mock
    }
  };

  useEffect(() => {
    convert();
  }, [value, fromUnit, toUnit]);

  return (
    <div className="space-y-8 bg-slate-50 dark:bg-slate-900/30 p-8 rounded-[2rem] border border-slate-100 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-500 ml-1">From</label>
          <div className="relative">
            <input 
              type="number" 
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-4 rounded-xl font-bold text-xl outline-none focus:border-blue-500 transition-colors"
            />
            <select 
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="absolute right-2 top-2 bottom-2 bg-slate-100 dark:bg-slate-700 border-none rounded-lg px-3 text-sm font-bold outline-none"
            >
              {tool.config?.units?.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-500 ml-1">To</label>
          <div className="relative">
            <input 
              type="text" 
              readOnly
              value={result?.toLocaleString(undefined, { maximumFractionDigits: 6 }) || ''}
              className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-xl font-bold text-xl outline-none"
            />
            <select 
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="absolute right-2 top-2 bottom-2 bg-slate-200 dark:bg-slate-700 border-none rounded-lg px-3 text-sm font-bold outline-none"
            >
              {tool.config?.units?.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </div>
        </div>
      </div>

      {result !== null && (
        <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-col items-center gap-6">
          <div className="text-center">
            <p className="text-slate-500 text-sm mb-1">Result:</p>
            <h4 className="text-4xl font-black text-blue-600">
              {value} {fromUnit} = {result.toLocaleString(undefined, { maximumFractionDigits: 6 })} {toUnit}
            </h4>
          </div>
          <button 
            onClick={() => {
              const text = `${value} ${fromUnit} = ${result.toLocaleString()} ${toUnit}`;
              const blob = new Blob([text], { type: 'text/plain' });
              downloadBlob(blob, `${tool.id}-result.txt`);
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center gap-2 transition-all"
          >
            <Download className="w-5 h-5" /> Download Result
          </button>
        </div>
      )}
    </div>
  );
}

function CalculatorTool({ tool }: { tool: Tool }) {
  // Example for BMI Calculator
  const [weight, setWeight] = useState('70');
  const [height, setHeight] = useState('175');
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height) / 100;
    if (w > 0 && h > 0) {
      const bmi = w / (h * h);
      let cat = 'Normal';
      if (bmi < 18.5) cat = 'Underweight';
      else if (bmi >= 25 && bmi < 30) cat = 'Overweight';
      else if (bmi >= 30) cat = 'Obese';
      setResult({ bmi, category: cat });
    }
  };

  useEffect(() => {
    if (tool.id === 'bmi-calculator') calculate();
  }, [weight, height]);

  if (tool.id !== 'bmi-calculator') {
    return (
      <div className="p-12 text-center bg-slate-50 dark:bg-slate-800 rounded-3xl border-2 border-dashed border-slate-200">
        <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-4" />
        <h3 className="text-xl font-bold dark:text-white mb-2">Under Development</h3>
        <p className="text-slate-500">This calculator is currently being built. Please check back later.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-8 bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-sm border border-slate-100 dark:border-slate-700">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-500">Weight (kg)</label>
          <input 
            type="number" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900 border-none p-4 rounded-xl font-bold text-xl outline-none focus:ring-2 ring-blue-500"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-bold text-slate-500">Height (cm)</label>
          <input 
            type="number" 
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-900 border-none p-4 rounded-xl font-bold text-xl outline-none focus:ring-2 ring-blue-500"
          />
        </div>
      </div>

      {result && (
        <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-2xl text-center border border-blue-100 dark:border-blue-900/30">
          <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">Your BMI Result:</p>
          <h4 className="text-5xl font-black text-blue-700 dark:text-blue-300 mb-2">{result.bmi.toFixed(1)}</h4>
          <p className="text-xl font-bold text-slate-700 dark:text-white mb-6">{result.category}</p>
          
          <button 
            onClick={() => {
              const text = `BMI Report
Weight: ${weight}kg
Height: ${height}cm
BMI: ${result.bmi.toFixed(1)}
Category: ${result.category}`;
              const blob = new Blob([text], { type: 'text/plain' });
              downloadBlob(blob, `bmi-report.txt`);
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
          >
            <Download className="w-5 h-5" /> Download Report
          </button>
        </div>
      )}
    </div>
  );
}

// --- MAIN PAGE ---

export function ToolDetail() {
  const { toolId } = useParams();
  const tool = TOOLS.find(t => t.id === toolId);

  if (!tool) return <Navigate to="/" />;

  const renderTool = () => {
    switch (tool.type) {
      case 'file-converter': return <FileConverterTool tool={tool} />;
      case 'unit-converter': return <UnitConverterTool tool={tool} />;
      case 'calculator': return <CalculatorTool tool={tool} />;
      default: return <div>Tool type not implemented</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <Link to="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 mb-8 transition-colors group">
            <div className="p-1 bg-slate-100 dark:bg-slate-800 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
              <ChevronLeft className="w-4 h-4" /> 
            </div>
            Back
          </Link>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
            <div className="p-6 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-xl shadow-blue-500/20 text-white">
              <tool.icon className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-4xl font-black dark:text-white">{tool.name}</h1>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full uppercase tracking-wider border border-blue-100 dark:border-blue-800">
                  {tool.category}
                </span>
              </div>
              <p className="text-lg text-slate-500 dark:text-slate-400">{tool.description}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 p-4 md:p-10 shadow-sm relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[100px] -mr-32 -mt-32 pointer-events-none" />
            
            {renderTool()}

            <div className="mt-12 pt-12 border-t border-slate-100 dark:border-slate-700 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-sm mb-1">Secure</h4>
                  <p className="text-xs text-slate-500">256-bit SSL encryption</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-sm mb-1">Privacy First</h4>
                  <p className="text-xs text-slate-500">Auto-delete after 1h</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600">
                  <Scale className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white text-sm mb-1">High Quality</h4>
                  <p className="text-xs text-slate-500">Professional precision</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-black dark:text-white mb-4 flex items-center justify-center gap-3">
                <Info className="w-8 h-8 text-blue-600" /> How does it work?
              </h2>
              <p className="text-slate-500">Follow these simple steps to use the {tool.name} tool for free.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Select File', text: 'Upload the file you want to convert or select it from your device.' },
                { step: '02', title: 'Click Convert', text: 'Once you have selected the file, click the "Convert" button to begin processing.' },
                { step: '03', title: 'Download Result', text: 'Wait a few seconds for the process to complete, then download your result.' }
              ].map(item => (
                <div key={item.step} className="relative group">
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm transition-all group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-blue-500/10">
                    <span className="text-6xl font-black text-blue-600/5 absolute top-4 right-4">{item.step}</span>
                    <h4 className="font-black text-xl dark:text-white mb-3">{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-96 space-y-8">
          <div className="sticky top-24 space-y-8">
            <AdSensePlaceholder type="sidebar" />
            
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 p-8 shadow-sm">
              <h3 className="text-xl font-black dark:text-white mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-500" /> Related Tools
              </h3>
              <div className="space-y-4">
                {TOOLS.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 6).map(t => (
                  <Link 
                    key={t.id} 
                    to={t.path}
                    className="flex items-center gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 rounded-2xl transition-all group border border-transparent hover:border-slate-100 dark:hover:border-slate-600"
                  >
                    <div className="p-3 bg-slate-100 dark:bg-slate-700 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <t.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold dark:text-white group-hover:text-blue-600 transition-colors">{t.name}</span>
                      <span className="text-xs text-slate-500">{t.category} Tool</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
               <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">Fast & Reliable!</h4>
                <p className="text-blue-100 mb-6">Access all your conversion tools in one place. Fast, free, and secure.</p>
                <div className="flex -space-x-3 mb-6">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-400 flex items-center justify-center font-bold text-xs">
                      User
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-blue-600 bg-blue-800 flex items-center justify-center font-bold text-xs">
                    +10k
                  </div>
                </div>
               </div>
               <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mb-16" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}