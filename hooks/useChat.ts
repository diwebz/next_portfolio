'use client';

import { useState, useCallback } from 'react';
import { useLocale } from 'next-intl';
import type { ChatMessage, QuickReply, Locale } from '@/types';
import { getChatResponse } from '@/data/chat-responses';

export function useChat() {
  const locale = useLocale() as Locale;
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = useCallback((content: string, sender: 'user' | 'bot', quickReplies?: QuickReply[]) => {
    const message: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      content,
      sender,
      timestamp: new Date(),
      quickReplies,
    };
    setMessages((prev) => [...prev, message]);
    return message;
  }, []);

  const sendMessage = useCallback(async (content: string, isQuickReply = false) => {
    // Add user message
    addMessage(content, 'user');

    setIsLoading(true);

    // Simulate a small delay for natural feel
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get bot response based on the message or quick reply value
    const responseKey = isQuickReply ? content : 'default';
    const response = getChatResponse(responseKey, locale);

    addMessage(response.message, 'bot', response.quickReplies);

    setIsLoading(false);
  }, [addMessage, locale]);

  const initializeChat = useCallback(() => {
    if (messages.length === 0) {
      const greeting = getChatResponse('greeting', locale);
      addMessage(greeting.message, 'bot', greeting.quickReplies);
    }
  }, [addMessage, locale, messages.length]);

  const clearChat = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    initializeChat,
    clearChat,
  };
}
