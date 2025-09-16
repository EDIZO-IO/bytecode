import { useEffect } from 'react';

/**
 * Custom hook that scrolls to the top of the page when the component mounts
 * Useful for page components to ensure they start from the top
 */
export const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
};
