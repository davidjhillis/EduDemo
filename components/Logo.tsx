import Link from "next/link";

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export default function Logo({ className = "", isScrolled = false }: LogoProps) {
  const textColor = isScrolled ? "text-slate-900" : "text-white";
  const subtextColor = isScrolled ? "text-gray-600" : "text-white/80";
  
  return (
    <Link href="/" className={`flex items-center space-x-4 group ${className}`}>
      {/* Premium Logo Mark */}
      <div className={`relative flex-shrink-0 ${isScrolled ? 'w-12 h-12' : 'w-14 h-14'}`}>
        {/* Outer ring with gradient */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 ${isScrolled ? 'shadow-md' : 'shadow-xl shadow-primary-900/30'}`}></div>
        
        {/* Inner circle with subtle pattern */}
        <div className="absolute inset-1 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center">
          {/* Elegant "N" monogram */}
          <svg 
            className={`${isScrolled ? 'w-7 h-7' : 'w-8 h-8'} text-primary-700`}
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M12 8V32M12 8L28 32M28 8V32" 
              stroke="currentColor" 
              strokeWidth="3" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="transition-all group-hover:stroke-primary-600"
            />
          </svg>
        </div>
        
        {/* Subtle shine effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
      </div>
      
      {/* Logo Text - Typography focused */}
      <div className="flex flex-col">
        <span className={`text-xl font-bold leading-none tracking-tight ${textColor} transition-colors font-serif`} style={{ fontFamily: 'Georgia, serif' }}>
          Northwinds
        </span>
        <span className={`text-[10px] font-medium tracking-[0.15em] uppercase ${subtextColor} transition-colors mt-0.5`}>
          College
        </span>
      </div>
    </Link>
  );
}


