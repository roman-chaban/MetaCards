import { useEffect, useState } from 'react';

export const useScreenResize = (pxValue: number) => {
  const [isCompact, setIsCompact] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth <= pxValue);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pxValue]);
  return { isCompact };
};
