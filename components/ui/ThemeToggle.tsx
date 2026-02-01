'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

// Returns false on the server, true on the client after hydration.
// Avoids useState+useEffect and prevents hydration mismatches.
const subscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const mounted = useMounted();
  const { theme, setTheme, resolvedTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  const displayTheme = theme === 'system' ? 'system' : resolvedTheme;

  return (
    <button
      onClick={cycleTheme}
      className={cn(
        'h-9 w-9 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors',
        className
      )}
      aria-label="Toggle theme"
    >
      {!mounted ? (
        <Sun className="h-4 w-4" />
      ) : displayTheme === 'dark' ? (
        <Moon className="h-4 w-4" />
      ) : displayTheme === 'system' ? (
        <Monitor className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4" />
      )}
    </button>
  );
}
