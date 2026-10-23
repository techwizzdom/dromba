import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function ScrollToTop() {
  const history = useHistory();

  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  useEffect(() => {
    scrollToTop();
    const unlisten = history.listen(() => {
      // Listen for route changes and scroll to the top
      scrollToTop();
    });

    // Clean up the listener when the component unmounts
    return () => {
      unlisten();
    };
  }, [history]);

  return null; // This component doesn't render anything
}

export default ScrollToTop;
