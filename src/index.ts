// Main entry point for the nebula-loading-animation package

// React Components
export { default as LoadingAnimation } from './components/LoadingAnimation';
export { default as LoadingAnimationTailwind } from './components/LoadingAnimationTailwind';
export { default as LoadingAnimationStyled } from './components/LoadingAnimationStyled';

// Hooks and HOCs
export { useLoadingAnimation, withLoadingAnimation } from './components/LoadingAnimation';
export { withStyledLoading } from './components/LoadingAnimationStyled';

// Types and Interfaces
export type {
  LoadingAnimationProps,
  ColorTheme,
  SizeConfig,
  LoadingAnimationTailwindProps,
  StyledLoadingProps,
} from './types';

// Constants and Presets
export { COLOR_THEMES, SIZE_PRESETS } from './constants';
export { styledThemes } from './components/LoadingAnimationStyled';

// Vanilla JavaScript class
export { LoadingAnimationVanilla, createLoadingAnimation } from './vanilla/LoadingAnimationVanilla';

// CSS utilities
export { generateLoadingCSS } from './utils/css-generator';

// Version
export const version = '1.0.0';