export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  
export const fadeInOut = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

/**
 * @param {string} name - The name of the animation.
 * this animation is used in the @{@link "../features/Section/index.tsx"}
 */  
export const  slideLeftRight = {
    imageHidden: (imagePosition: "left" | "right") => ({
      opacity: 0,
      x: !imagePosition || imagePosition === "left" ? "-100%" : "100%",
    }),
    panelHidden: (imagePosition: "left" | "right") => ({
      opacity: 0,
      x: !imagePosition || imagePosition === "left" ? "100%" : "-100%",
    }),
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        type: "tween",
      },
    },
  };