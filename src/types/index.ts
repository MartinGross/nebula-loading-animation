import { CSSProperties } from 'react';

// Core color theme interface
export interface ColorTheme {
  primary: string;      // HSL values like '200 85% 65%'
  background: string;   // HSL values like '220 30% 8%'
  glow: string;         // HSL values like '200 85% 65%'
}

// Size configuration interface
export interface SizeConfig {
  circle: number;       // Circle diameter in pixels
  border: number;       // Border thickness in pixels
  logo: number;         // Logo size in pixels
}

// Main React component props
export interface LoadingAnimationProps {
  /** Duration to show loading animation in milliseconds */
  duration?: number;
  /** Fade out transition time in milliseconds */
  fadeOutTime?: number;
  /** Logo/icon source URL */
  logoSrc?: string;
  /** Logo alt text */
  logoAlt?: string;
  /** Color theme configuration */
  colors?: Partial<ColorTheme>;
  /** Size configuration */
  size?: Partial<SizeConfig>;
  /** Callback when animation completes */
  onComplete?: () => void;
  /** Custom CSS class for container */
  className?: string;
  /** Custom styles for container */
  style?: CSSProperties;
  /** Z-index for overlay */
  zIndex?: number;
}

// Tailwind component props
export interface LoadingAnimationTailwindProps {
  duration?: number;
  fadeOutTime?: number;
  logoSrc?: string;
  logoAlt?: string;
  onComplete?: () => void;
  variant?: 'sky' | 'emerald' | 'purple' | 'orange';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

// Styled components props
export interface StyledLoadingProps {
  duration?: number;
  fadeOutTime?: number;
  logoSrc?: string;
  logoAlt?: string;
  onComplete?: () => void;
  primaryColor?: string;
  backgroundColor?: string;
  glowColor?: string;
  circleSize?: number;
  borderWidth?: number;
  logoSize?: number;
}

// Vanilla JavaScript options
export interface VanillaLoadingOptions {
  duration?: number;
  fadeOutTime?: number;
  logoSrc?: string;
  logoAlt?: string;
  colors?: Partial<ColorTheme>;
  size?: Partial<SizeConfig>;
  onComplete?: () => void;
  zIndex?: number;
}

// Hook return type
export interface UseLoadingAnimationReturn {
  isLoading: boolean;
  showLoading: () => void;
  hideLoading: () => void;
  setIsLoading: (loading: boolean) => void;
}

// Theme presets
export type ColorThemePreset = 'skyBlue' | 'emerald' | 'purple' | 'orange' | 'light';
export type SizePreset = 'small' | 'medium' | 'large' | 'extraLarge';

// CSS generator options
export interface CSSGeneratorOptions {
  colors: ColorTheme;
  size: SizeConfig;
  fadeOutTime: number;
  includeKeyframes?: boolean;
  prefix?: string;
}