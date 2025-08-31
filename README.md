# Nebula Loading Animation

Beautiful, customizable loading animations for React and vanilla JavaScript applications. Based on the elegant loading animation from Nebula Design.

[![npm version](https://badge.fury.io/js/nebula-loading-animation.svg)](https://badge.fury.io/js/nebula-loading-animation)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🎨 **Multiple styling approaches**: CSS-in-JS, Tailwind CSS, styled-components
- 🔧 **Highly customizable**: Colors, sizes, timing, logos
- 📱 **Responsive design**: Works on all screen sizes  
- ♿ **Accessible**: ARIA labels and semantic HTML
- 🎭 **Framework agnostic**: React components + vanilla JavaScript
- 📦 **Lightweight**: Minimal bundle size with tree-shaking
- 💪 **TypeScript**: Full type safety and IntelliSense
- 🚀 **Performance optimized**: Smooth 60fps animations

## Installation

```bash
npm install nebula-loading-animation
# or
yarn add nebula-loading-animation
```

## Quick Start

### React Component

```tsx
import { LoadingAnimation } from 'nebula-loading-animation';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingAnimation onComplete={() => setIsLoading(false)} />;
  }

  return <div>Your app content</div>;
}
```

### Vanilla JavaScript

```html
<script src="https://unpkg.com/nebula-loading-animation/dist/index.js"></script>
<script>
  const loader = createLoadingAnimation();
  loader.show();
</script>
```

## Components

### LoadingAnimation (Main Component)
Full-featured React component with comprehensive customization options.

```tsx
import { LoadingAnimation, COLOR_THEMES, SIZE_PRESETS } from 'nebula-loading-animation';

<LoadingAnimation
  colors={COLOR_THEMES.emerald}
  size={SIZE_PRESETS.large}
  duration={3000}
  logoSrc="/logo.svg"
  onComplete={() => console.log('Done!')}
/>
```

### LoadingAnimationTailwind
Optimized for Tailwind CSS projects.

```tsx
import { LoadingAnimationTailwind } from 'nebula-loading-animation';

<LoadingAnimationTailwind
  variant="emerald"
  size="lg"
  className="backdrop-blur-sm"
/>
```

### LoadingAnimationStyled
Styled-components implementation for CSS-in-JS projects.

```tsx
import { LoadingAnimationStyled, styledThemes } from 'nebula-loading-animation';

<LoadingAnimationStyled
  {...styledThemes.purple}
  circleSize={120}
  duration={2500}
/>
```

## Hooks and HOCs

### useLoadingAnimation Hook

```tsx
import { useLoadingAnimation } from 'nebula-loading-animation';

function DataComponent() {
  const { isLoading, showLoading, hideLoading } = useLoadingAnimation();

  const fetchData = async () => {
    showLoading();
    // ... fetch data
    hideLoading();
  };

  return (
    <>
      <button onClick={fetchData}>Load Data</button>
      {isLoading && <LoadingAnimation />}
    </>
  );
}
```

### Higher-Order Component

```tsx
import { withLoadingAnimation } from 'nebula-loading-animation';

const MyComponent = ({ data }) => <div>{data}</div>;
const MyComponentWithLoading = withLoadingAnimation(MyComponent);

// Usage
<MyComponentWithLoading isLoading={isLoading} data={data} />
```

## Customization

### Predefined Themes

```tsx
import { COLOR_THEMES } from 'nebula-loading-animation';

// Available themes
COLOR_THEMES.skyBlue     // Default blue (default)
COLOR_THEMES.emerald     // Green theme
COLOR_THEMES.purple      // Purple theme  
COLOR_THEMES.orange      // Orange theme
COLOR_THEMES.light       // Light mode theme
```

### Custom Colors

```tsx
<LoadingAnimation
  colors={{
    primary: '350 80% 60%',      // HSL values
    background: '220 30% 8%',    // Dark background
    glow: '350 80% 60%'          // Glow color
  }}
/>
```

### Size Presets

```tsx
import { SIZE_PRESETS } from 'nebula-loading-animation';

SIZE_PRESETS.small       // 60px circle
SIZE_PRESETS.medium      // 80px circle (default)
SIZE_PRESETS.large       // 120px circle  
SIZE_PRESETS.extraLarge  // 160px circle
```

## Integration Examples

### Next.js App Router

```tsx
// app/loading.tsx
import { LoadingAnimation } from 'nebula-loading-animation';

export default function Loading() {
  return <LoadingAnimation duration={0} />;
}
```

### React Router

```tsx
import { useNavigation } from 'react-router-dom';
import { LoadingAnimation } from 'nebula-loading-animation';

function App() {
  const navigation = useNavigation();
  
  return (
    <>
      <Routes>
        {/* Your routes */}
      </Routes>
      {navigation.state === 'loading' && (
        <LoadingAnimation duration={0} size={SIZE_PRESETS.small} />
      )}
    </>
  );
}
```

### API Loading States

```tsx
function useApiCall() {
  const [loading, setLoading] = useState(false);
  
  const call = async (url) => {
    setLoading(true);
    try {
      return await fetch(url);
    } finally {
      setLoading(false);
    }
  };
  
  return { call, loading };
}
```

## Vanilla JavaScript API

```javascript
import { createLoadingAnimation } from 'nebula-loading-animation';

// Basic usage
const loader = createLoadingAnimation({
  duration: 2000,
  colors: {
    primary: '160 75% 55%',
    background: '220 30% 8%',
    glow: '160 75% 55%'
  }
});

loader.show();

// Manual control
const manualLoader = createLoadingAnimation({
  duration: 0, // Manual control
  onComplete: () => console.log('Done!')
});

manualLoader.show();
// ... later
manualLoader.hide();
```

## CSS Utilities

```typescript
import { generateLoadingCSS } from 'nebula-loading-animation';

// Generate custom CSS
const css = generateLoadingCSS({
  colors: { primary: '200 85% 65%', background: '220 30% 8%', glow: '200 85% 65%' },
  size: { circle: 80, border: 3, logo: 32 },
  fadeOutTime: 300,
  prefix: 'my-loading'
});
```

## Props Reference

### LoadingAnimation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `duration` | `number` | `2000` | Display duration (ms) |
| `fadeOutTime` | `number` | `300` | Fade transition time (ms) |
| `logoSrc` | `string` | `'/favicon.ico'` | Logo image source |
| `logoAlt` | `string` | `'Loading'` | Logo alt text |
| `colors` | `Partial<ColorTheme>` | Sky blue | Color configuration |
| `size` | `Partial<SizeConfig>` | Medium | Size configuration |
| `onComplete` | `() => void` | `undefined` | Completion callback |
| `className` | `string` | `''` | Additional CSS class |
| `style` | `CSSProperties` | `{}` | Additional styles |
| `zIndex` | `number` | `9999` | Overlay z-index |

## Browser Support

- Chrome 60+
- Firefox 60+  
- Safari 12+
- Edge 79+

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## License

MIT © [fluxum engineering](LICENSE)

---

Made with ❤️ in Germany by fluxum engineering