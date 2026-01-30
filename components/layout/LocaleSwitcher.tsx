'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface LocaleSwitcherProps {
  className?: string;
}

export function LocaleSwitcher({ className }: LocaleSwitcherProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: 'en' | 'ja') => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={cn('flex items-center gap-1 text-sm', className)}>
      <button
        onClick={() => switchLocale('en')}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          locale === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-secondary'
        )}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className="text-muted-foreground">/</span>
      <button
        onClick={() => switchLocale('ja')}
        className={cn(
          'px-2 py-1 rounded transition-colors',
          locale === 'ja'
            ? 'bg-primary text-primary-foreground'
            : 'hover:bg-secondary'
        )}
        aria-label="Switch to Japanese"
      >
        JP
      </button>
    </div>
  );
}
