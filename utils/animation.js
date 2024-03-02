const fadeFromLeft = {
  offscreen: {
    opacity: 0,
    x: -100,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const fadeFromRight = {
  offscreen: {
    opacity: 0,
    x: 100,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};
const fadeFromBottomAnimateSprin = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};
const scaleAnimate = {
  offscreen: {
    opacity: 0,
    scale: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 2,
    },
  },
};
const scaleAnimateReverse = {
  offscreen: {
    opacity: 0,
    scale: 2,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 2,
    },
  },
};
const scaleFromLeftAnimate = {
  offscreen: {
    opacity: 0,
    scale: 0,
    x: -200,
  },
  onscreen: {
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.1,
      duration: 2,
    },
  },
};

const fadeFromTopAnimate = {
  offscreen: {
    opacity: 0,
    y: -50,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};
const fadeFromBottomAnimate = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
    },
  },
};

const rotateAnimateFromLeft = {
  offscreen: {
    opacity: 0,
    rotate: -180,
  },
  onscreen: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

const rotateAnimateFromRight = {
  offscreen: {
    opacity: 0,
    rotate: 180,
  },
  onscreen: {
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

// ==================== use staggeredFadeIn as parent and fadeIn as child

// ==== usage:
// <motion.div
//         variants={staggeredFadeIn}
//         initial="initial"
//         animate="animate"
//       >
//         <motion.div variants={fadeIn}>Item 1</motion.div>
//         <motion.div variants={fadeIn}>Item 2</motion.div>
//         <motion.div variants={fadeIn}>Item 3</motion.div>
// </motion.div>a

const bounceAnimate = {
  offscreen: {
    opacity: 0,
    y: -100,
    scale: 0.5,
  },
  onscreen: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
    },
  },
};

const flipAnimate = {
  offscreen: {
    opacity: 0,
    rotateY: 180,
  },
  onscreen: {
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

// stay shaking animation
const shakeAnimateInfinity = {
  offscreen: {
    opacity: 0,
    rotate: 0,
  },
  onscreen: {
    rotate: [0, -10, 10, -10, 10, 0],
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const rotateAndScaleAnimate = {
  offscreen: {
    opacity: 0,
    rotate: -90,
    scale: 0.5,
  },
  onscreen: {
    rotate: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const staggeredFadeInAnimate = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

// staying animatation
const pulseAnimateInfinity = {
  offscreen: {
    opacity: 0,
    scale: 0.5,
  },
  onscreen: {
    scale: [0.5, 1.2, 0.8, 1],
    opacity: 1,
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

export {
  scaleFromLeftAnimate,
  fadeFromTopAnimate,
  pulseAnimateInfinity,
  staggeredFadeInAnimate,
  rotateAndScaleAnimate,
  shakeAnimateInfinity,
  flipAnimate,
  bounceAnimate,
  rotateAnimateFromLeft,
  rotateAnimateFromRight,
  fadeFromRight,
  fadeFromLeft,
  fadeFromBottomAnimateSprin,
  scaleAnimate,
  fadeFromBottomAnimate,
  scaleAnimateReverse,
};
