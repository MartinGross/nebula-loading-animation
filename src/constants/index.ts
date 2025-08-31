import { ColorTheme, SizeConfig } from '../types';

// Default configurations
export const DEFAULT_COLORS: ColorTheme = {
  primary: '200 85% 65%',    // Sky blue
  background: '220 30% 8%',  // Dark navy
  glow: '200 85% 65%'        // Sky blue glow
};

export const DEFAULT_SIZE: SizeConfig = {
  circle: 80,
  border: 3,
  logo: 32
};

// Predefined color themes
export const COLOR_THEMES = {
  skyBlue: {
    primary: '200 85% 65%',
    background: '220 30% 8%',
    glow: '200 85% 65%'
  },
  emerald: {
    primary: '160 75% 55%',
    background: '220 30% 8%',
    glow: '160 75% 55%'
  },
  purple: {
    primary: '270 75% 65%',
    background: '220 30% 8%',
    glow: '270 75% 65%'
  },
  orange: {
    primary: '25 95% 65%',
    background: '220 30% 8%',
    glow: '25 95% 65%'
  },
  light: {
    primary: '200 85% 55%',
    background: '0 0% 98%',
    glow: '200 85% 55%'
  }
} as const;

// Predefined size configurations
export const SIZE_PRESETS = {
  small: { circle: 60, border: 2, logo: 24 },
  medium: { circle: 80, border: 3, logo: 32 },
  large: { circle: 120, border: 4, logo: 48 },
  extraLarge: { circle: 160, border: 5, logo: 64 }
} as const;

// Animation constants
export const ANIMATION_TIMING = {
  DEFAULT_DURATION: 2000,
  DEFAULT_FADE_OUT: 300,
  SPIN_DURATION: 1000,
  EASING: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
} as const;

// Z-index constants
export const Z_INDEX = {
  OVERLAY: 9999,
  HIGH: 10000,
  MAXIMUM: 99999
} as const;