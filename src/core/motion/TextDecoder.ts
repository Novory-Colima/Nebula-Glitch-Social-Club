import gsap from 'gsap';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}|:"<>?';

export class TextDecoder {
  private element: HTMLElement;
  private originalText: string;
  private iterations: number;
  private currentIteration: number;
  private isDecoding: boolean;

  constructor(element: HTMLElement) {
    this.element = element;
    this.originalText = element.dataset.text || element.innerText.trim();
    this.element.dataset.text = this.originalText;
    this.iterations = 0;
    this.currentIteration = 0;
    this.isDecoding = false;
  }

  public decode(duration: number = 1.5, delay: number = 0) {
    if (this.isDecoding) return;
    this.isDecoding = true;
    
    // We update every ~30ms -> total frames = duration / 0.03
    const totalFrames = duration / 0.03;
    const charsToRevealPerFrame = this.originalText.length / totalFrames;

    this.currentIteration = 0;

    gsap.delayedCall(delay, () => {
      const interval = setInterval(() => {
        this.element.innerText = this.originalText
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < this.currentIteration) {
              return this.originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        this.currentIteration += charsToRevealPerFrame;

        if (this.currentIteration >= this.originalText.length) {
          clearInterval(interval);
          this.element.innerText = this.originalText;
          this.isDecoding = false;
        }
      }, 30);
    });
  }
}

export const initTextDecoders = (selector: string = '.glitch-decode') => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    const decoder = new TextDecoder(el as HTMLElement);
    // Expose it on the element so we can trigger it via ScrollTrigger or other events
    (el as any)._decoder = decoder;
  });
};
