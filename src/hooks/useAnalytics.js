import { useEffect } from 'react';

// Google Analytics tracking hook
export const useAnalytics = () => {
  useEffect(() => {
    // Track page view on mount
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
      });
    }
  }, []);
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, category = 'Button') => {
  trackEvent('click', {
    event_category: category,
    event_label: buttonName,
  });
};

// Track form submissions
export const trackFormSubmit = (formName, success = true) => {
  trackEvent('form_submit', {
    form_name: formName,
    success: success,
  });
};

// Track external link clicks
export const trackExternalLink = (url, linkName) => {
  trackEvent('click', {
    event_category: 'External Link',
    event_label: linkName,
    value: url,
  });
};

// Track Instagram interactions
export const trackInstagramClick = (action, label) => {
  trackEvent('instagram_interaction', {
    action: action,
    label: label,
  });
};

// Track section views
export const trackSectionView = (sectionName) => {
  trackEvent('section_view', {
    section_name: sectionName,
  });
};
