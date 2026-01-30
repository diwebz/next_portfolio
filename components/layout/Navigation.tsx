'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';
import { navItems } from '@/data/navigation';

interface NavigationProps {
  activeSection?: string;
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({
  activeSection = 'home',
  className,
  onItemClick,
}: NavigationProps) {
  const t = useTranslations();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    onItemClick?.();
  };

  return (
    <nav className={cn('flex items-center gap-1', className)}>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={cn(
            'px-3 py-2 text-sm font-medium rounded-full transition-colors',
            activeSection === item.id
              ? 'bg-secondary text-foreground'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
          )}
        >
          {t(item.labelKey)}
        </a>
      ))}
    </nav>
  );
}
