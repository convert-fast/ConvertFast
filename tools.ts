import { 
  FileText, 
  FileUp, 
  FileDown, 
  Image as ImageIcon, 
  FileVideo, 
  Music, 
  Calculator, 
  Ruler, 
  Weight, 
  Thermometer, 
  Zap,
  TrendingUp,
  Percent,
  Activity
} from 'lucide-react';

export type ToolCategory = 'File' | 'Media' | 'Calculator' | 'Unit';
export type ToolType = 'file-converter' | 'unit-converter' | 'calculator';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  type: ToolType;
  icon: any;
  path: string;
  config?: {
    inputAccept?: string;
    outputExt?: string;
    units?: string[];
    formula?: string;
  };
}

export const TOOLS: Tool[] = [
  // File Converters
  { 
    id: 'pdf-to-word', 
    name: 'PDF to Word', 
    description: 'Convert your PDF documents to editable Word files.', 
    category: 'File', 
    type: 'file-converter',
    icon: FileText, 
    path: '/tools/pdf-to-word',
    config: { inputAccept: '.pdf', outputExt: 'docx' }
  },
  { 
    id: 'word-to-pdf', 
    name: 'Word to PDF', 
    description: 'Transform Word documents into professional PDF files.', 
    category: 'File', 
    type: 'file-converter',
    icon: FileUp, 
    path: '/tools/word-to-pdf',
    config: { inputAccept: '.doc,.docx', outputExt: 'pdf' }
  },
  { 
    id: 'png-to-jpg', 
    name: 'PNG to JPG', 
    description: 'Convert PNG images to JPG format easily.', 
    category: 'File', 
    type: 'file-converter',
    icon: ImageIcon, 
    path: '/tools/png-to-jpg',
    config: { inputAccept: 'image/png', outputExt: 'jpg' }
  },
  { 
    id: 'jpg-to-png', 
    name: 'JPG to PNG', 
    description: 'Convert JPG images to PNG format easily.', 
    category: 'File', 
    type: 'file-converter',
    icon: ImageIcon, 
    path: '/tools/jpg-to-png',
    config: { inputAccept: 'image/jpeg', outputExt: 'png' }
  },
  { 
    id: 'image-compressor', 
    name: 'Image Compressor', 
    description: 'Reduce image file size without losing quality.', 
    category: 'File', 
    type: 'file-converter',
    icon: FileDown, 
    path: '/tools/image-compressor',
    config: { inputAccept: 'image/*', outputExt: 'jpg' }
  },
  
  // Media Converters
  { 
    id: 'mp4-to-mp3', 
    name: 'MP4 to MP3', 
    description: 'Extract audio from your MP4 video files.', 
    category: 'Media', 
    type: 'file-converter',
    icon: Music, 
    path: '/tools/mp4-to-mp3',
    config: { inputAccept: 'video/mp4', outputExt: 'mp3' }
  },
  { 
    id: 'video-to-audio', 
    name: 'Video to Audio', 
    description: 'Convert various video formats to audio.', 
    category: 'Media', 
    type: 'file-converter',
    icon: FileVideo, 
    path: '/tools/video-to-audio',
    config: { inputAccept: 'video/*', outputExt: 'mp3' }
  },
  
  // Calculator Tools
  { 
    id: 'age-calculator', 
    name: 'Age Calculator', 
    description: 'Calculate your exact age in years, months, and days.', 
    category: 'Calculator', 
    type: 'calculator',
    icon: Calculator, 
    path: '/tools/age-calculator' 
  },
  { 
    id: 'percentage-calculator', 
    name: 'Percentage Calculator', 
    description: 'Solve percentage problems instantly.', 
    category: 'Calculator', 
    type: 'calculator',
    icon: Percent, 
    path: '/tools/percentage-calculator' 
  },
  { 
    id: 'bmi-calculator', 
    name: 'BMI Calculator', 
    description: 'Calculate your Body Mass Index (BMI) easily.', 
    category: 'Calculator', 
    type: 'calculator',
    icon: Activity, 
    path: '/tools/bmi-calculator' 
  },
  
  // Unit Converters
  { 
    id: 'length-converter', 
    name: 'Length Converter', 
    description: 'Convert between meters, feet, inches, and more.', 
    category: 'Unit', 
    type: 'unit-converter',
    icon: Ruler, 
    path: '/tools/length-converter',
    config: { units: ['Meter', 'Kilometer', 'Centimeter', 'Millimeter', 'Mile', 'Yard', 'Foot', 'Inch'] }
  },
  { 
    id: 'weight-converter', 
    name: 'Weight Converter', 
    description: 'Convert kg, lbs, ounces, and grams.', 
    category: 'Unit', 
    type: 'unit-converter',
    icon: Weight, 
    path: '/tools/weight-converter',
    config: { units: ['Kilogram', 'Gram', 'Milligram', 'Metric Ton', 'Pound', 'Ounce'] }
  },
  { 
    id: 'temperature-converter', 
    name: 'Temperature Converter', 
    description: 'Convert Celsius, Fahrenheit, and Kelvin.', 
    category: 'Unit', 
    type: 'unit-converter',
    icon: Thermometer, 
    path: '/tools/temperature-converter',
    config: { units: ['Celsius', 'Fahrenheit', 'Kelvin'] }
  },
  { 
    id: 'speed-converter', 
    name: 'Speed Converter', 
    description: 'Convert km/h, mph, knots, and more.', 
    category: 'Unit', 
    type: 'unit-converter',
    icon: Zap, 
    path: '/tools/speed-converter',
    config: { units: ['Kilometer per hour', 'Mile per hour', 'Knot', 'Meter per second'] }
  },
];

export const CATEGORIES = [
  { name: 'File Converters', key: 'File', icon: FileText },
  { name: 'Media Converters', key: 'Media', icon: FileVideo },
  { name: 'Calculator Tools', key: 'Calculator', icon: Calculator },
  { name: 'Unit Converters', key: 'Unit', icon: Ruler },
];