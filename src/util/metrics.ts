import ReactGA from 'react-ga';

export const initGoogleAnalytics = () => {
  ReactGA.initialize('UA-177550269-1');
};

export const trackEvent = (
  category: string,
  action: string,
  value?: number
) => {
  ReactGA.event({
    category,
    action,
    value,
  });
};
