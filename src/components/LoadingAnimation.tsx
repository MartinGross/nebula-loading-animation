import React, { useEffect, useState, CSSProperties } from 'react';
import { LoadingAnimationProps, ColorTheme, SizeConfig, UseLoadingAnimationReturn } from '../types';
import { DEFAULT_COLORS, DEFAULT_SIZE } from '../constants';

/**
 * LoadingAnimation Component
 * 
 * A customizable loading animation with spinning circle and logo
 * Based on the Nebula Design loading animation
 */
export const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  duration = 2000,
  fadeOutTime = 300,
  logoSrc = '/favicon.ico',
  logoAlt = 'Loading',
  colors = {},
  size = {},
  onComplete,
  className = '',
  style = {},
  zIndex = 9999
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Merge with defaults
  const finalColors = { ...DEFAULT_COLORS, ...colors };
  const finalSize = { ...DEFAULT_SIZE, ...size };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, fadeOutTime);

      return () => clearTimeout(fadeTimer);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, fadeOutTime, onComplete]);

  if (!isVisible) {
    return null;
  }

  // Generate CSS custom properties
  const cssVars = {
    '--loading-primary': finalColors.primary,
    '--loading-background': finalColors.background,
    '--loading-glow': finalColors.glow,
    '--loading-circle-size': `${finalSize.circle}px`,
    '--loading-border-width': `${finalSize.border}px`,
    '--loading-logo-size': `${finalSize.logo}px`,
    '--loading-fade-time': `${fadeOutTime}ms`,
    ...style
  } as CSSProperties;

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `hsl(${finalColors.background})`,
    zIndex,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: `opacity ${fadeOutTime}ms ease`,
    opacity: isFadingOut ? 0 : 1,
    pointerEvents: isFadingOut ? 'none' : 'auto',
    ...cssVars
  };

  const circleStyle: CSSProperties = {
    width: finalSize.circle,
    height: finalSize.circle,
    border: `${finalSize.border}px solid hsla(${finalColors.primary} / 0.2)`,
    borderTop: `${finalSize.border}px solid hsl(${finalColors.primary})`,
    borderRadius: '50%',
    animation: 'loading-spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: `0 0 40px hsla(${finalColors.glow} / 0.3)`
  };

  const logoStyle: CSSProperties = {
    width: finalSize.logo,
    height: finalSize.logo,
    objectFit: 'contain'
  };

  return (
    <>
      <style>{`
        @keyframes loading-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      <div 
        className={`loading-animation-overlay ${className}`}
        style={overlayStyle}
        role="status"
        aria-label="Loading"
      >
        <div 
          className="loading-circle"
          style={circleStyle}
        >
          <img 
            src={logoSrc} 
            alt={logoAlt}
            style={logoStyle}
            className="loading-logo"
          />
        </div>
      </div>
    </>
  );
};

/**
 * Hook for managing loading state
 * Provides a convenient way to manage loading animations in components
 */
export const useLoadingAnimation = (initialState = false): UseLoadingAnimationReturn => {
  const [isLoading, setIsLoading] = useState(initialState);

  const showLoading = () => setIsLoading(true);
  const hideLoading = () => setIsLoading(false);

  return {
    isLoading,
    showLoading,
    hideLoading,
    setIsLoading
  };
};

/**
 * Higher-order component that wraps content with loading animation
 */
export const withLoadingAnimation = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  loadingProps?: Partial<LoadingAnimationProps>
) => {
  return React.forwardRef<any, P & { isLoading?: boolean }>((props, ref) => {
    const { isLoading, ...restProps } = props;
    
    if (isLoading) {
      return <LoadingAnimation {...loadingProps} />;
    }
    
    return <WrappedComponent {...(restProps as P)} ref={ref} />;
  });
};

export default LoadingAnimation;