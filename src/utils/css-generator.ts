import { CSSGeneratorOptions, ColorTheme, SizeConfig } from '../types';
import { ANIMATION_TIMING } from '../constants';

/**
 * Generates CSS for loading animation
 * Useful for server-side rendering or custom implementations
 */
export function generateLoadingCSS(options: CSSGeneratorOptions): string {
  const {
    colors,
    size,
    fadeOutTime,
    includeKeyframes = true,
    prefix = 'loading'
  } = options;

  const cssVars = `
    :root {
      --${prefix}-primary: ${colors.primary};
      --${prefix}-background: ${colors.background};
      --${prefix}-glow: ${colors.glow};
      --${prefix}-circle-size: ${size.circle}px;
      --${prefix}-border-width: ${size.border}px;
      --${prefix}-logo-size: ${size.logo}px;
      --${prefix}-fade-time: ${fadeOutTime}ms;
    }
  `;

  const overlayStyles = `
    .${prefix}-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: hsl(var(--${prefix}-background));
      z-index: 9999;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity var(--${prefix}-fade-time) ease;
    }
    
    .${prefix}-overlay.fade-out {
      opacity: 0;
      pointer-events: none;
    }
  `;

  const circleStyles = `
    .${prefix}-circle {
      width: var(--${prefix}-circle-size);
      height: var(--${prefix}-circle-size);
      border: var(--${prefix}-border-width) solid hsla(var(--${prefix}-primary) / 0.2);
      border-top: var(--${prefix}-border-width) solid hsl(var(--${prefix}-primary));
      border-radius: 50%;
      animation: ${prefix}-spin ${ANIMATION_TIMING.SPIN_DURATION}ms ${ANIMATION_TIMING.EASING} infinite;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 0 40px hsla(var(--${prefix}-glow) / 0.3);
    }
    
    .${prefix}-logo {
      width: var(--${prefix}-logo-size);
      height: var(--${prefix}-logo-size);
      object-fit: contain;
    }
  `;

  const keyframes = includeKeyframes ? `
    @keyframes ${prefix}-spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  ` : '';

  return `${cssVars}\n${overlayStyles}\n${circleStyles}\n${keyframes}`.trim();
}

/**
 * Generates minimal CSS for custom implementations
 */
export function generateMinimalCSS(colors: ColorTheme, size: SizeConfig): string {
  return `
    .minimal-loading {
      width: ${size.circle}px;
      height: ${size.circle}px;
      border: ${size.border}px solid hsla(${colors.primary} / 0.2);
      border-top: ${size.border}px solid hsl(${colors.primary});
      border-radius: 50%;
      animation: spin 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
      box-shadow: 0 0 40px hsla(${colors.glow} / 0.3);
    }
    
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `.trim();
}

/**
 * Injects CSS into document head
 */
export function injectCSS(css: string, id = 'nebula-loading-styles'): void {
  if (typeof document === 'undefined') return;
  
  // Remove existing styles
  const existing = document.getElementById(id);
  if (existing) {
    existing.remove();
  }
  
  // Inject new styles
  const style = document.createElement('style');
  style.id = id;
  style.textContent = css;
  document.head.appendChild(style);
}

/**
 * Removes injected CSS
 */
export function removeCSS(id = 'nebula-loading-styles'): void {
  if (typeof document === 'undefined') return;
  
  const element = document.getElementById(id);
  if (element) {
    element.remove();
  }
}