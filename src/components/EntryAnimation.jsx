import React from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function EntryAnim(obj) {
  return (
    <motion.div
      initial = {{ opacity: 0, y: 0 }}
      animate = {{ opacity: 1, y: 0 }}
      transition = {{ duration: 0.4 }}
    >
      {obj.children}
    </motion.div>
  );
}
