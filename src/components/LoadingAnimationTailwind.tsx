import React, { useEffect, useState } from 'react';
import { LoadingAnimationTailwindProps } from '../types';

// Size mappings for Tailwind
const SIZES = {
  sm: {
    circle: 'w-14 h-14',
    border: 'border-2',
    logo: 'w-6 h-6'
  },
  md: {
    circle: 'w-20 h-20',
    border: 'border-[3px]',
    logo: 'w-8 h-8'
  },
  lg: {
    circle: 'w-30 h-30',
    border: 'border-4',
    logo: 'w-12 h-12'
  },
  xl: {
    circle: 'w-40 h-40',
    border: 'border-[5px]',
    logo: 'w-16 h-16'
  }
};

// Color variants
const VARIANTS = {
  sky: {
    border: 'border-sky-400/20 border-t-sky-400',
    glow: 'shadow-[0_0_40px_theme(colors.sky.400/30)]',
    bg: 'bg-slate-900'
  },
  emerald: {
    border: 'border-emerald-400/20 border-t-emerald-400',
    glow: 'shadow-[0_0_40px_theme(colors.emerald.400/30)]',
    bg: 'bg-slate-900'
  },
  purple: {
    border: 'border-purple-400/20 border-t-purple-400',
    glow: 'shadow-[0_0_40px_theme(colors.purple.400/30)]',
    bg: 'bg-slate-900'
  },
  orange: {
    border: 'border-orange-400/20 border-t-orange-400',
    glow: 'shadow-[0_0_40px_theme(colors.orange.400/30)]',
    bg: 'bg-slate-900'
  }
};

export const LoadingAnimationTailwind: React.FC<LoadingAnimationTailwindProps> = ({
  duration = 2000,
  fadeOutTime = 300,
  logoSrc = '/favicon.ico',
  logoAlt = 'Loading',
  variant = 'sky',
  size = 'md',
  onComplete,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, fadeOutTime);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, fadeOutTime, onComplete]);

  if (!isVisible) {
    return null;
  }

  const sizeClasses = SIZES[size];
  const variantClasses = VARIANTS[variant];

  return (
    <>
      <style>{`
        @keyframes loading-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .loading-spin {
          animation: loading-spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
        }
      `}</style>
      
      <div 
        className={`
          fixed inset-0 z-[9999] flex items-center justify-center transition-opacity
          ${variantClasses.bg}
          ${isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}
          ${className}
        `}
        style={{ transitionDuration: `${fadeOutTime}ms` }}
        role="status"
        aria-label="Loading"
      >
        <div 
          className={`
            ${sizeClasses.circle} ${sizeClasses.border} ${variantClasses.border}
            ${variantClasses.glow}
            rounded-full loading-spin flex items-center justify-center
          `}
        >
          <img 
            src={logoSrc} 
            alt={logoAlt}
            className={`${sizeClasses.logo} object-contain`}
          />
        </div>
      </div>
    </>
  );
};

export default LoadingAnimationTailwind;