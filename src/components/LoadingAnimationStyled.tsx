import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { StyledLoadingProps } from '../types';

// Keyframe animations
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled components
const Overlay = styled.div<{
  $isVisible: boolean;
  $fadeTime: number;
  $backgroundColor: string;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.$backgroundColor};
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity ${props => props.$fadeTime}ms ease;
  opacity: ${props => props.$isVisible ? 1 : 0};
  pointer-events: ${props => props.$isVisible ? 'auto' : 'none'};
`;

const LoadingCircle = styled.div<{
  $size: number;
  $borderWidth: number;
  $primaryColor: string;
  $glowColor: string;
}>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  border: ${props => props.$borderWidth}px solid ${props => props.$primaryColor}20;
  border-top: ${props => props.$borderWidth}px solid ${props => props.$primaryColor};
  border-radius: 50%;
  animation: ${spin} 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 40px ${props => props.$glowColor}4D;
`;

const Logo = styled.img<{ $size: number }>`
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  object-fit: contain;
`;

// Theme presets
export const styledThemes = {
  skyBlue: {
    primaryColor: '#60a5fa',
    backgroundColor: '#0f172a',
    glowColor: '#60a5fa'
  },
  emerald: {
    primaryColor: '#34d399',
    backgroundColor: '#0f172a',
    glowColor: '#34d399'
  },
  purple: {
    primaryColor: '#a78bfa',
    backgroundColor: '#0f172a',
    glowColor: '#a78bfa'
  },
  orange: {
    primaryColor: '#fb923c',
    backgroundColor: '#0f172a',
    glowColor: '#fb923c'
  }
} as const;

export const LoadingAnimationStyled: React.FC<StyledLoadingProps> = ({
  duration = 2000,
  fadeOutTime = 300,
  logoSrc = '/favicon.ico',
  logoAlt = 'Loading',
  primaryColor = '#60a5fa',
  backgroundColor = '#0f172a',
  glowColor = '#60a5fa',
  circleSize = 80,
  borderWidth = 3,
  logoSize = 32,
  onComplete
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

  return (
    <Overlay
      $isVisible={!isFadingOut}
      $fadeTime={fadeOutTime}
      $backgroundColor={backgroundColor}
      role="status"
      aria-label="Loading"
    >
      <LoadingCircle
        $size={circleSize}
        $borderWidth={borderWidth}
        $primaryColor={primaryColor}
        $glowColor={glowColor}
      >
        <Logo
          src={logoSrc}
          alt={logoAlt}
          $size={logoSize}
        />
      </LoadingCircle>
    </Overlay>
  );
};

// Higher-order component for styled-components version
export const withStyledLoading = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  loadingProps?: Partial<StyledLoadingProps>
) => {
  return React.forwardRef<any, P & { isLoading?: boolean }>((props, ref) => {
    const { isLoading, ...restProps } = props;
    
    if (isLoading) {
      return <LoadingAnimationStyled {...loadingProps} />;
    }
    
    return <WrappedComponent {...(restProps as P)} ref={ref} />;
  });
};

export default LoadingAnimationStyled;