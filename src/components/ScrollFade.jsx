import React from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const ScrollFade = ({ children, style={} }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1])

  return (
    <div ref={ref} style={style}>
      <motion.div
        style = {{ opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollFade;
