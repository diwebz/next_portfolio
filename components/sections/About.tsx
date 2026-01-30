'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Target } from 'lucide-react';

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t('title')}</h2>
          <p className="text-muted-foreground">{t('subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {t('introduction')}
            </p>
            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{t('location')}</span>
            </div>
          </motion.div>

          {/* What I Do & Looking For */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-card border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t('whatIDo.title')}</h3>
              </div>
              <p className="text-muted-foreground">{t('whatIDo.description')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-card border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t('lookingFor.title')}</h3>
              </div>
              <p className="text-muted-foreground">
                {t('lookingFor.description')}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
