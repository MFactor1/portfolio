import React, {useId} from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useEffect, useState } from 'react'
import { ForceScrollUpdate } from './ForceScrollUpdate';

const ScrollFade = ({ children, style={} }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const y_anim_input = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [-1, 0, 0, 1])
  const y_anim = useTransform(() => y_anim_input.get() ** 5)
  const y_disp = useTransform(y_anim, [-1, 0, 0, 1], [50, 0, 0, -50])

  const [animationKey, setAnimationKey] = useState(Math.random());
  let delay = 0;

  useEffect(() => {
    ForceScrollUpdate();
    setAnimationKey(Math.random());
    delay = 1 - scrollYProgress.get();
  }, []);

  /*
  useEffect(() => {
    console.log(animationKey + ": " + delay);
  }, [animationKey]);
   */

  return (
    <div ref={ref} style={style}>
      <motion.div
        key={animationKey}
        initial = {{ opacity: 0, y: 50 }}
        animate = {{ opacity: 1, y: 0 }}
        exit = {{ opacity: 0, y: -50 }}
        transition = {{ duration: 0.4, delay: 1 - scrollYProgress.get(), ease: "easeOut" }}
      >
        <motion.div
          style = {{ opacity: opacity, y: y_disp }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ScrollFade;
