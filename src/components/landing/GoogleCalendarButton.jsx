import { useEffect } from 'react';

const GoogleCalendarButton = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://calendar.google.com/calendar/scheduling-button-script.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://calendar.google.com/calendar/scheduling-button-script.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.calendar.schedulingButton.load({
        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2bUFt1EqvXLOyD5iR7kX6WMDgD8HAw95Q0rkW3qtxWjawpIUG62cPUBpTIP79GcM8qa7bxNvd6?gv=true',
        color: '#039BE5',
        label: 'Book an appointment',
        target: script,
      });
    };

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default GoogleCalendarButton;
