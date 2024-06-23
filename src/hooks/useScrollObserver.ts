import { useEffect, useState } from 'react';

export type ScrolledNav = boolean;

export const useScrollObserver = () => {
  const [isScrolledNav, setIsScrolledNav] = useState<ScrolledNav>();

  useEffect(() => {
    const handleScrolledNav = () => {
      if (window.scrollY > 0) {
        setIsScrolledNav(true);
      } else [setIsScrolledNav(false)];
    };
    window.addEventListener('scroll', handleScrolledNav);
    return () => {
      window.removeEventListener('scroll', handleScrolledNav);
    };
  }, [setIsScrolledNav]);

  return { isScrolledNav };
};
