import Lenis from 'lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Singleton state encapsulated in the module
let lenisInstance: Lenis | null = null;

export const initScroll = () => {
  if (lenisInstance) return;

  lenisInstance = new Lenis({
    lerp: 0.08,
    wheelMultiplier: 1,
    autoResize: true,
  });

  lenisInstance.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenisInstance?.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

export const destroyScroll = () => {
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
};

export const refreshScroll = () => {
  // Required for Astro View Transitions to recalculate triggers 
  // when the DOM morphs and changes height.
  ScrollTrigger.refresh();
};

export const getLenis = () => lenisInstance;
