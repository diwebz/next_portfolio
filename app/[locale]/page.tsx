'use client';

import { useState } from 'react';
import { Header, Footer } from '@/components/layout';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact,
} from '@/components/sections';
import { ChatWidget } from '@/components/chat/ChatWidget';

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact onOpenChat={() => setIsChatOpen(true)} />
      </main>
      <Footer />
      <ChatWidget isOpen={isChatOpen} onToggle={() => setIsChatOpen(!isChatOpen)} />
    </>
  );
}
