import { useEffect } from 'react';

export function useKeyboardShortcuts(shortcuts) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const shortcut = shortcuts.find(s => s.key === event.key.toLowerCase());
      if (shortcut && (!shortcut.ctrl || (shortcut.ctrl && event.ctrlKey))) {
        event.preventDefault();
        shortcut.action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);
}