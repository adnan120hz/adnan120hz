'use client';

import { motion } from 'framer-motion';
import { LINKS } from '../lib/config';
import LinkCard from './LinkCard';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function LinksDashboard() {
  return (
    <section aria-label="links">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4"
      >
        {LINKS.map((link) => (
          <motion.div
            key={link.id}
            variants={item}
            className={
              link.id === 'donate'
                ? 'rounded-2xl bg-gradient-to-br from-rose-500/30 via-indigo-500/20 to-transparent p-[1px]'
                : ''
            }
          >
            <LinkCard link={link} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
