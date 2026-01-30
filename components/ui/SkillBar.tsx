'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SkillBarProps {
  name: string;
  level: number;
  years?: number;
  className?: string;
  showPercentage?: boolean;
  animate?: boolean;
}

export function SkillBar({
  name,
  level,
  years,
  className,
  showPercentage = false,
  animate = true,
}: SkillBarProps) {
  const [width, setWidth] = useState(animate ? 0 : level);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => setWidth(level), 100);
      return () => clearTimeout(timer);
    }
  }, [level, animate]);

  return (
    <div className={cn('space-y-1', className)}>
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">
          {showPercentage && `${level}%`}
          {years && !showPercentage && `${years} yrs`}
        </span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
