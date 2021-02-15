import React, { useEffect, useState } from 'react';

function usePrefersReducedMotion() {
  const QUERY = '(prefers-reduced-motion: reduce)';
  const mediaQueryList = window.matchMedia(QUERY);
  const [reduceMotion, setReduceMotion] = useState(
    () => mediaQueryList.matches
  );

  useEffect(() => {
    const mediaQuery = mediaQueryList;

    const handleMediaChange = () => {
      setReduceMotion(mediaQuery?.matches);
    };

    mediaQuery.addListener(handleMediaChange);
    handleMediaChange();

    return () => {
      mediaQuery.removeListener(handleMediaChange);
    };
  }, []);

  return reduceMotion;
}

export default usePrefersReducedMotion;
