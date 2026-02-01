'use client';

import { useTranslations, useLocale } from 'next-intl';
import { ArrowDown, Download, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button, ButtonLink } from '@/components/ui/Button';
import { profile } from '@/data/profile';
import type { Locale } from '@/types';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale() as Locale;

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            {/* Availability Badge */}
            {profile.availability.status === 'open' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {t('available')}
              </motion.div>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              {t('greeting')}{' '}
              <span className="text-primary">
                {locale === 'ja' && profile.nameJa ? profile.nameJa : profile.name}
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl text-muted-foreground mb-6">
              {t('title')}
            </h2>

            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
              {t('tagline')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={scrollToProjects}>
                {t('viewWork')}
              </Button>
              <ButtonLink variant="outline" size="lg" href={profile.resume[locale]} download>
                <Download className="w-4 h-4 mr-2" />
                {t('downloadResume')}
              </ButtonLink>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 justify-center lg:justify-start">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-secondary overflow-hidden">
                  <Image
                    src={profile.photo}
                    alt={profile.name}
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
