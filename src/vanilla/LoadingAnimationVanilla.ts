import { VanillaLoadingOptions, ColorTheme, SizeConfig } from '../types';
import { DEFAULT_COLORS, DEFAULT_SIZE, ANIMATION_TIMING, Z_INDEX } from '../constants';

/**
 * Vanilla JavaScript Loading Animation Class
 * Framework-agnostic implementation that can be used in any webapp
 * No dependencies required - pure HTML, CSS, and JavaScript
 */
export class LoadingAnimationVanilla {
  private options: Required<VanillaLoadingOptions>;
  private isComplete = false;
  private onComplete: () => void;

  constructor(options: VanillaLoadingOptions = {}) {
    this.options = {
      duration: options.duration ?? ANIMATION_TIMING.DEFAULT_DURATION,
      fadeOutTime: options.fadeOutTime ?? ANIMATION_TIMING.DEFAULT_FADE_OUT,
      logoSrc: options.logoSrc ?? '/favicon.ico',
      logoAlt: options.logoAlt ?? 'Loading',
      colors: { ...DEFAULT_COLORS, ...options.colors },
      size: { ...DEFAULT_SIZE, ...options.size },
      onComplete: options.onComplete ?? (() => {}),
      zIndex: options.zIndex ?? Z_INDEX.OVERLAY
    };
    
    this.onComplete = options.onComplete || (() => {});
  }

  // Generate the required CSS
  private generateCSS(): string {
    const { colors, size, fadeOutTime, zIndex } = this.options;
    
    return `
      <style id="loading-animation-styles">
        :root {
          --loading-primary: ${colors.primary};
          --loading-background: ${colors.background};
          --loading-glow: ${colors.glow};
        }
        
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: hsl(var(--loading-background));
          z-index: ${zIndex};
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity ${fadeOutTime}ms ease;
        }
        
        .loading-overlay.fade-out {
          opacity: 0;
          pointer-events: none;
        }
        
        .loading-circle {
          width: ${size.circle}px;
          height: ${size.circle}px;
          border: ${size.border}px solid hsla(var(--loading-primary) / 0.2);
          border-top: ${size.border}px solid hsl(var(--loading-primary));
          border-radius: 50%;
          animation: loading-spin ${ANIMATION_TIMING.SPIN_DURATION}ms ${ANIMATION_TIMING.EASING} infinite;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 40px hsla(var(--loading-glow) / 0.3);
        }
        
        .loading-logo {
          width: ${size.logo}px;
          height: ${size.logo}px;
          object-fit: contain;
        }
        
        @keyframes loading-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `;
  }

  // Generate the HTML structure
  private generateHTML(): string {
    const { logoSrc, logoAlt } = this.options;
    
    return `
      <div id="loading-overlay" class="loading-overlay" role="status" aria-label="Loading">
        <div class="loading-circle">
          <img src="${logoSrc}" alt="${logoAlt}" class="loading-logo" />
        </div>
      </div>
    `;
  }

  // Initialize and show the loading animation
  show(): void {
    if (this.isComplete) return;

    // Check if already exists
    if (document.getElementById('loading-overlay')) return;

    // Inject CSS
    document.head.insertAdjacentHTML('beforeend', this.generateCSS());
    
    // Inject HTML
    document.body.insertAdjacentHTML('beforeend', this.generateHTML());
    
    // Start timer if duration > 0
    if (this.options.duration > 0) {
      setTimeout(() => this.hide(), this.options.duration);
    }
  }

  // Hide the loading animation
  hide(): void {
    if (this.isComplete) return;
    
    const overlay = document.getElementById('loading-overlay');
    const styles = document.getElementById('loading-animation-styles');
    
    if (overlay) {
      overlay.classList.add('fade-out');
      
      setTimeout(() => {
        overlay.remove();
        styles?.remove();
        this.isComplete = true;
        this.onComplete();
      }, this.options.fadeOutTime);
    }
  }

  // Force remove (for cleanup)
  remove(): void {
    const overlay = document.getElementById('loading-overlay');
    const styles = document.getElementById('loading-animation-styles');
    
    overlay?.remove();
    styles?.remove();
    this.isComplete = true;
  }

  // Check if loading is complete
  isFinished(): boolean {
    return this.isComplete;
  }

  // Update options dynamically
  updateOptions(newOptions: Partial<VanillaLoadingOptions>): void {
    this.options = {
      ...this.options,
      ...newOptions,
      colors: { ...this.options.colors, ...newOptions.colors },
      size: { ...this.options.size, ...newOptions.size }
    };
  }
}

// Factory function for easy instantiation
export function createLoadingAnimation(options?: VanillaLoadingOptions): LoadingAnimationVanilla {
  return new LoadingAnimationVanilla(options);
}

// Browser global exports (for script tag usage)
if (typeof window !== 'undefined') {
  (window as any).LoadingAnimationVanilla = LoadingAnimationVanilla;
  (window as any).createLoadingAnimation = createLoadingAnimation;
}