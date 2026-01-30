'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useChat } from '@/hooks/useChat';
import { ChatMessage } from './ChatMessage';
import { QuickReplies } from './QuickReplies';
import { profile } from '@/data/profile';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ChatWidget({ isOpen, onToggle }: ChatWidgetProps) {
  const t = useTranslations('chat');
  const { messages, isLoading, sendMessage, initializeChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize chat when opened
  useEffect(() => {
    if (isOpen) {
      initializeChat();
      inputRef.current?.focus();
    }
  }, [isOpen, initializeChat]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const input = inputRef.current;
    if (input && input.value.trim()) {
      sendMessage(input.value.trim());
      input.value = '';
    }
  };

  const handleQuickReply = (value: string) => {
    if (value === 'line_handoff' && profile.social.line) {
      window.open(profile.social.line, '_blank');
      return;
    }
    if (value === 'github') {
      window.open(profile.social.github, '_blank');
      return;
    }
    if (value === 'view_skills') {
      document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
      onToggle();
      return;
    }
    if (value === 'view_projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
      onToggle();
      return;
    }
    if (value === 'email') {
      window.location.href = `mailto:${profile.email}`;
      return;
    }
    sendMessage(value, true);
  };

  const lastMessage = messages[messages.length - 1];

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={onToggle}
        className={cn(
          'fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:scale-105 transition-transform',
          isOpen && 'hidden'
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] rounded-2xl bg-card border shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">{profile.name}</h3>
                  <p className="text-xs opacity-80">
                    {isLoading ? t('placeholder') : 'Online'}
                  </p>
                </div>
              </div>
              <button
                onClick={onToggle}
                className="h-8 w-8 rounded-full hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {lastMessage?.quickReplies && lastMessage.sender === 'bot' && (
              <QuickReplies
                replies={lastMessage.quickReplies}
                onSelect={handleQuickReply}
              />
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={t('placeholder')}
                  className="flex-1 h-10 px-4 rounded-full bg-secondary border-0 focus:ring-2 focus:ring-primary outline-none text-sm"
                />
                <button
                  type="submit"
                  className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors"
                  aria-label={t('send')}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
