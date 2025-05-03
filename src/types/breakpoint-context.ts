import { createContext, useContext } from 'react';

export const breakpointContext = createContext<string>('xs');

export const useBreakpoint = () => {
  const context = useContext(breakpointContext);
  if (!context) throw new Error('Cannot get breakpoint.');
  return context;
};

export const getBreakpoint = (): string => {
  const windowWidth = window.outerWidth;

  if (windowWidth >= 1400) return 'xxl';
  if (windowWidth >= 1200) return 'xl';
  if (windowWidth >= 992) return 'lg';
  if (windowWidth >= 768) return 'md';
  if (windowWidth >= 576) return 'sm';

  return 'xs';
};
