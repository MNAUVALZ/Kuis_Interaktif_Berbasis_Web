import { useEffect } from 'react';

export default function AntiCheat({ onViolation }) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        onViolation && onViolation('Tab switched');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [onViolation]);

  return null; // This component has no UI
}
