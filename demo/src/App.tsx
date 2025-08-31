import React, { useState } from 'react';
import {
  LoadingAnimation,
  LoadingAnimationTailwind,
  LoadingAnimationStyled,
  useLoadingAnimation,
  withLoadingAnimation,
  COLOR_THEMES,
  SIZE_PRESETS,
  styledThemes,
  createLoadingAnimation
} from 'nebula-loading-animation';

// Demo component for HOC pattern
const DemoComponent: React.FC<{ data?: string }> = ({ data }) => (
  <div className="p-4 bg-slate-800 rounded-lg">
    <h4 className="text-lg font-semibold mb-2">Demo Component</h4>
    <p>{data || 'No data loaded yet'}</p>
  </div>
);

const DemoComponentWithLoading = withLoadingAnimation(DemoComponent, {
  colors: COLOR_THEMES.emerald,
  duration: 2000
});

function App() {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [hookedLoading, setHookedLoading] = useState(false);
  const [hocData, setHocData] = useState<string | null>(null);
  const [hocLoading, setHocLoading] = useState(false);

  // Hook demo
  const { isLoading: hookIsLoading, showLoading: hookShowLoading, hideLoading: hookHideLoading } = useLoadingAnimation();

  const showDemo = (demoType: string) => {
    setActiveDemo(demoType);
  };

  const runHookDemo = () => {
    hookShowLoading();
    setTimeout(() => {
      hookHideLoading();
      alert('Hook demo completed!');
    }, 3000);
  };

  const runHOCDemo = () => {
    setHocLoading(true);
    setHocData(null);
    
    setTimeout(() => {
      setHocData(`Loaded at ${new Date().toLocaleTimeString()}`);
      setHocLoading(false);
    }, 2000);
  };

  const runVanillaDemo = () => {
    const loader = createLoadingAnimation({
      duration: 2000,
      colors: COLOR_THEMES.purple,
      onComplete: () => {
        alert('Vanilla JavaScript demo completed!');
      }
    });
    loader.show();
  };

  return (
    <div className="demo-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Nebula Loading Animation</h1>
        <p className="hero-subtitle">
          Beautiful, customizable loading animations for React and vanilla JavaScript
        </p>
        
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Components</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5</div>
            <div className="stat-label">Themes</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Size Presets</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">0</div>
            <div className="stat-label">Dependencies</div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="demo-section">
        <h2>✨ Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎨 Multiple Styles</h3>
            <p>CSS-in-JS, Tailwind CSS, and styled-components support</p>
          </div>
          <div className="feature-card">
            <h3>🔧 Customizable</h3>
            <p>Colors, sizes, timing, and logos - fully configurable</p>
          </div>
          <div className="feature-card">
            <h3>📱 Responsive</h3>
            <p>Works perfectly on all screen sizes and devices</p>
          </div>
          <div className="feature-card">
            <h3>♿ Accessible</h3>
            <p>ARIA labels and semantic HTML for screen readers</p>
          </div>
          <div className="feature-card">
            <h3>🚀 Performance</h3>
            <p>Optimized for smooth 60fps animations</p>
          </div>
          <div className="feature-card">
            <h3>💪 TypeScript</h3>
            <p>Full type safety and excellent developer experience</p>
          </div>
        </div>
      </div>

      {/* Main Component Demos */}
      <div className="demo-section">
        <h2>🎯 LoadingAnimation (Main Component)</h2>
        <p>Full-featured React component with comprehensive customization options.</p>
        
        <div className="button-grid">
          <button className="demo-button" onClick={() => showDemo('basic')}>
            Basic Demo
          </button>
          <button className="demo-button" onClick={() => showDemo('emerald')}>
            Emerald Theme
          </button>
          <button className="demo-button" onClick={() => showDemo('purple')}>
            Purple Theme
          </button>
          <button className="demo-button" onClick={() => showDemo('large')}>
            Large Size
          </button>
          <button className="demo-button" onClick={() => showDemo('small')}>
            Small Size
          </button>
          <button className="demo-button" onClick={() => showDemo('custom')}>
            Custom Colors
          </button>
        </div>

        <div className="code-block">
{`import { LoadingAnimation, COLOR_THEMES } from 'nebula-loading-animation';

<LoadingAnimation
  colors={COLOR_THEMES.emerald}
  duration={3000}
  onComplete={() => console.log('Done!')}
/>`}
        </div>
      </div>

      {/* Tailwind Component */}
      <div className="demo-section">
        <h2>🎨 LoadingAnimationTailwind</h2>
        <p>Optimized for Tailwind CSS projects with utility classes.</p>
        
        <div className="button-grid">
          <button className="demo-button" onClick={() => showDemo('tailwind-sky')}>
            Sky Blue
          </button>
          <button className="demo-button" onClick={() => showDemo('tailwind-emerald')}>
            Emerald
          </button>
          <button className="demo-button" onClick={() => showDemo('tailwind-purple')}>
            Purple
          </button>
          <button className="demo-button" onClick={() => showDemo('tailwind-orange')}>
            Orange
          </button>
        </div>

        <div className="code-block">
{`import { LoadingAnimationTailwind } from 'nebula-loading-animation';

<LoadingAnimationTailwind
  variant="emerald"
  size="lg"
  className="backdrop-blur-sm"
/>`}
        </div>
      </div>

      {/* Styled Components */}
      <div className="demo-section">
        <h2>💅 LoadingAnimationStyled</h2>
        <p>CSS-in-JS implementation using styled-components.</p>
        
        <div className="button-grid">
          <button className="demo-button" onClick={() => showDemo('styled-sky')}>
            Sky Blue
          </button>
          <button className="demo-button" onClick={() => showDemo('styled-emerald')}>
            Emerald
          </button>
          <button className="demo-button" onClick={() => showDemo('styled-purple')}>
            Purple
          </button>
          <button className="demo-button" onClick={() => showDemo('styled-orange')}>
            Orange
          </button>
        </div>

        <div className="code-block">
{`import { LoadingAnimationStyled, styledThemes } from 'nebula-loading-animation';

<LoadingAnimationStyled
  {...styledThemes.purple}
  circleSize={120}
  duration={2500}
/>`}
        </div>
      </div>

      {/* Hook Demo */}
      <div className="demo-section">
        <h2>🪝 useLoadingAnimation Hook</h2>
        <p>React hook for managing loading states in your components.</p>
        
        <button className="demo-button" onClick={runHookDemo}>
          Run Hook Demo
        </button>

        <div className="code-block">
{`const { isLoading, showLoading, hideLoading } = useLoadingAnimation();

const fetchData = async () => {
  showLoading();
  // ... fetch data
  hideLoading();
};`}
        </div>

        {hookIsLoading && (
          <LoadingAnimation
            colors={COLOR_THEMES.skyBlue}
            logoAlt="Processing with hook..."
          />
        )}
      </div>

      {/* HOC Demo */}
      <div className="demo-section">
        <h2>🎭 Higher-Order Component</h2>
        <p>Wrap any component with loading functionality.</p>
        
        <button className="demo-button" onClick={runHOCDemo}>
          Load Component
        </button>

        <div className="code-block">
{`const MyComponentWithLoading = withLoadingAnimation(MyComponent);

<MyComponentWithLoading isLoading={isLoading} data={data} />`}
        </div>

        <div className="mt-4">
          <DemoComponentWithLoading 
            isLoading={hocLoading}
            data={hocData}
          />
        </div>
      </div>

      {/* Vanilla JavaScript Demo */}
      <div className="demo-section">
        <h2>🍦 Vanilla JavaScript</h2>
        <p>Framework-agnostic implementation for any project.</p>
        
        <button className="demo-button" onClick={runVanillaDemo}>
          Run Vanilla Demo
        </button>

        <div className="code-block">
{`import { createLoadingAnimation } from 'nebula-loading-animation';

const loader = createLoadingAnimation({
  duration: 2000,
  colors: { primary: '270 75% 65%', ... }
});
loader.show();`}
        </div>
      </div>

      {/* Installation */}
      <div className="demo-section">
        <h2>📦 Installation</h2>
        <div className="code-block">
          npm install nebula-loading-animation
        </div>
        <div className="code-block">
          yarn add nebula-loading-animation
        </div>
      </div>

      {/* Active Demos */}
      {activeDemo === 'basic' && (
        <LoadingAnimation
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'emerald' && (
        <LoadingAnimation
          colors={COLOR_THEMES.emerald}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'purple' && (
        <LoadingAnimation
          colors={COLOR_THEMES.purple}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'large' && (
        <LoadingAnimation
          size={SIZE_PRESETS.large}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'small' && (
        <LoadingAnimation
          size={SIZE_PRESETS.small}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'custom' && (
        <LoadingAnimation
          colors={{
            primary: '350 80% 60%',
            background: '220 30% 8%',
            glow: '350 80% 60%'
          }}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {/* Tailwind Demos */}
      {activeDemo === 'tailwind-sky' && (
        <LoadingAnimationTailwind
          variant="sky"
          size="lg"
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'tailwind-emerald' && (
        <LoadingAnimationTailwind
          variant="emerald"
          size="lg"
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'tailwind-purple' && (
        <LoadingAnimationTailwind
          variant="purple"
          size="lg"
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'tailwind-orange' && (
        <LoadingAnimationTailwind
          variant="orange"
          size="lg"
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {/* Styled Component Demos */}
      {activeDemo === 'styled-sky' && (
        <LoadingAnimationStyled
          {...styledThemes.skyBlue}
          circleSize={100}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'styled-emerald' && (
        <LoadingAnimationStyled
          {...styledThemes.emerald}
          circleSize={100}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'styled-purple' && (
        <LoadingAnimationStyled
          {...styledThemes.purple}
          circleSize={100}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}

      {activeDemo === 'styled-orange' && (
        <LoadingAnimationStyled
          {...styledThemes.orange}
          circleSize={100}
          duration={2000}
          onComplete={() => setActiveDemo(null)}
        />
      )}
    </div>
  );
}

export default App;