'use client';

import type { QuickReply } from '@/types';

interface QuickRepliesProps {
  replies: QuickReply[];
  onSelect: (value: string) => void;
}

export function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  return (
    <div className="px-4 pb-2 flex flex-wrap gap-2">
      {replies.map((reply) => (
        <button
          key={reply.value}
          onClick={() => onSelect(reply.value)}
          className="px-3 py-1.5 text-sm rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          {reply.label}
        </button>
      ))}
    </div>
  );
}
