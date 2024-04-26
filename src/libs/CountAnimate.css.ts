// library
import { recipe } from '@vanilla-extract/recipes';
import { createThemeContract, keyframes, style } from '@vanilla-extract/css';

export const heightVars = createThemeContract({
  height: null,
});

export const countAnimateVars = createThemeContract({
  delay: null,
  translateY: null,
  fromTranslateY: null,
});

const zero = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '2%': { transform: 'translateY(-200%)', opacity: 1 },
  '4%': { transform: 'translateY(-300%)', opacity: 1 },
  '6%': { transform: 'translateY(-400%)', opacity: 1 },
  '8%': { transform: 'translateY(-500%)', opacity: 1 },
  '9%': { transform: 'translateY(-600%)', opacity: 1 },
  '10%': { transform: 'translateY(-700%)', opacity: 1 },
  '20%': { transform: 'translateY(-800%)', opacity: 1 },
  '50%': { transform: 'translateY(-900%)', opacity: 1 },
  '100%': { transform: 'translateY(-1000%)', opacity: 1 },
});

const one = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '3%': { transform: 'translateY(-200%)', opacity: 1 },
  '5%': { transform: 'translateY(-300%)', opacity: 1 },
  '7%': { transform: 'translateY(-400%)', opacity: 1 },
  '9%': { transform: 'translateY(-500%)', opacity: 1 },
  '11%': { transform: 'translateY(-600%)', opacity: 1 },
  '13%': { transform: 'translateY(-700%)', opacity: 1 },
  '15%': { transform: 'translateY(-800%)', opacity: 1 },
  '25%': { transform: 'translateY(-900%)', opacity: 1 },
  '50%': { transform: 'translateY(-1000%)', opacity: 1 },
  '100%': { transform: 'translateY(-1100%)', opacity: 1 },
});

const two = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '2%': { transform: 'translateY(-200%)', opacity: 1 },
  '3%': { transform: 'translateY(-300%)', opacity: 1 },
  '5%': { transform: 'translateY(-400%)', opacity: 1 },
  '7%': { transform: 'translateY(-500%)', opacity: 1 },
  '9%': { transform: 'translateY(-600%)', opacity: 1 },
  '11%': { transform: 'translateY(-700%)', opacity: 1 },
  '13%': { transform: 'translateY(-800%)', opacity: 1 },
  '15%': { transform: 'translateY(-900%)', opacity: 1 },
  '25%': { transform: 'translateY(-1000%)', opacity: 1 },
  '50%': { transform: 'translateY(-1100%)', opacity: 1 },
  '100%': { transform: 'translateY(-1200%)', opacity: 1 },
});

const three = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '2%': { transform: 'translateY(-100%)', opacity: 1 },
  '5%': { transform: 'translateY(-200%)', opacity: 1 },
  '8%': { transform: 'translateY(-300%)', opacity: 1 },
  '11%': { transform: 'translateY(-400%)', opacity: 1 },
  '14%': { transform: 'translateY(-500%)', opacity: 1 },
  '17%': { transform: 'translateY(-600%)', opacity: 1 },
  '20%': { transform: 'translateY(-700%)', opacity: 1 },
  '23%': { transform: 'translateY(-800%)', opacity: 1 },
  '26%': { transform: 'translateY(-900%)', opacity: 1 },
  '29%': { transform: 'translateY(-1000%)', opacity: 1 },
  '32%': { transform: 'translateY(-1100%)', opacity: 1 },
  '55%': { transform: 'translateY(-1200%)', opacity: 1 },
  '100%': { transform: 'translateY(-1300%)', opacity: 1 },
});

const four = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '2%': { transform: 'translateY(-200%)', opacity: 1 },
  '4%': { transform: 'translateY(-300%)', opacity: 1 },
  '6%': { transform: 'translateY(-400%)', opacity: 1 },
  '8%': { transform: 'translateY(-500%)', opacity: 1 },
  '10%': { transform: 'translateY(-600%)', opacity: 1 },
  '12%': { transform: 'translateY(-700%)', opacity: 1 },
  '14%': { transform: 'translateY(-800%)', opacity: 1 },
  '16%': { transform: 'translateY(-900%)', opacity: 1 },
  '18%': { transform: 'translateY(-1000%)', opacity: 1 },
  '20%': { transform: 'translateY(-1100%)', opacity: 1 },
  '30%': { transform: 'translateY(-1200%)', opacity: 1 },
  '60%': { transform: 'translateY(-1300%)', opacity: 1 },
  '100%': { transform: 'translateY(-1400%)', opacity: 1 },
});

const five = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '2%': { transform: 'translateY(-200%)', opacity: 1 },
  '3%': { transform: 'translateY(-300%)', opacity: 1 },
  '5%': { transform: 'translateY(-400%)', opacity: 1 },
  '6%': { transform: 'translateY(-500%)', opacity: 1 },
  '8%': { transform: 'translateY(-600%)', opacity: 1 },
  '10%': { transform: 'translateY(-700%)', opacity: 1 },
  '12%': { transform: 'translateY(-800%)', opacity: 1 },
  '14%': { transform: 'translateY(-900%)', opacity: 1 },
  '16%': { transform: 'translateY(-1000%)', opacity: 1 },
  '18%': { transform: 'translateY(-1100%)', opacity: 1 },
  '20%': { transform: 'translateY(-1200%)', opacity: 1 },
  '30%': { transform: 'translateY(-1300%)', opacity: 1 },
  '60%': { transform: 'translateY(-1400%)', opacity: 1 },
  '100%': { transform: 'translateY(-1500%)', opacity: 1 },
});

const six = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '2%': { transform: 'translateY(-200%)', opacity: 1 },
  '3%': { transform: 'translateY(-300%)', opacity: 1 },
  '4%': { transform: 'translateY(-400%)', opacity: 1 },
  '5%': { transform: 'translateY(-500%)', opacity: 1 },
  '6%': { transform: 'translateY(-600%)', opacity: 1 },
  '8%': { transform: 'translateY(-700%)', opacity: 1 },
  '10%': { transform: 'translateY(-800%)', opacity: 1 },
  '12%': { transform: 'translateY(-900%)', opacity: 1 },
  '14%': { transform: 'translateY(-1000%)', opacity: 1 },
  '16%': { transform: 'translateY(-1100%)', opacity: 1 },
  '18%': { transform: 'translateY(-1200%)', opacity: 1 },
  '20%': { transform: 'translateY(-1300%)', opacity: 1 },
  '30%': { transform: 'translateY(-1400%)', opacity: 1 },
  '60%': { transform: 'translateY(-1500%)', opacity: 1 },
  '100%': { transform: 'translateY(-1600%)', opacity: 1 },
});

const seven = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '2%': { transform: 'translateY(-200%)', opacity: 1 },
  '3%': { transform: 'translateY(-300%)', opacity: 1 },
  '4%': { transform: 'translateY(-400%)', opacity: 1 },
  '6%': { transform: 'translateY(-500%)', opacity: 1 },
  '7%': { transform: 'translateY(-600%)', opacity: 1 },
  '8%': { transform: 'translateY(-700%)', opacity: 1 },
  '9%': { transform: 'translateY(-800%)', opacity: 1 },
  '10%': { transform: 'translateY(-900%)', opacity: 1 },
  '12%': { transform: 'translateY(-1000%)', opacity: 1 },
  '14%': { transform: 'translateY(-1100%)', opacity: 1 },
  '16%': { transform: 'translateY(-1200%)', opacity: 1 },
  '18%': { transform: 'translateY(-1300%)', opacity: 1 },
  '20%': { transform: 'translateY(-1400%)', opacity: 1 },
  '30%': { transform: 'translateY(-1500%)', opacity: 1 },
  '60%': { transform: 'translateY(-1600%)', opacity: 1 },
  '100%': { transform: 'translateY(-1700%)', opacity: 1 },
});

const eight = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '2%': { transform: 'translateY(-200%)', opacity: 1 },
  '3%': { transform: 'translateY(-300%)', opacity: 1 },
  '4%': { transform: 'translateY(-400%)', opacity: 1 },
  '6%': { transform: 'translateY(-500%)', opacity: 1 },
  '7%': { transform: 'translateY(-600%)', opacity: 1 },
  '9%': { transform: 'translateY(-700%)', opacity: 1 },
  '10%': { transform: 'translateY(-800%)', opacity: 1 },
  '12%': { transform: 'translateY(-900%)', opacity: 1 },
  '13%': { transform: 'translateY(-1000%)', opacity: 1 },
  '15%': { transform: 'translateY(-1100%)', opacity: 1 },
  '16%': { transform: 'translateY(-1200%)', opacity: 1 },
  '17%': { transform: 'translateY(-1300%)', opacity: 1 },
  '18%': { transform: 'translateY(-1400%)', opacity: 1 },
  '20%': { transform: 'translateY(-1500%)', opacity: 1 },
  '30%': { transform: 'translateY(-1600%)', opacity: 1 },
  '60%': { transform: 'translateY(-1700%)', opacity: 1 },
  '100%': { transform: 'translateY(-1800%)', opacity: 1 },
});

const nine = keyframes({
  '0%': { transform: 'translateY(0%)', opacity: 1 },
  '1%': { transform: 'translateY(-100%)', opacity: 1 },
  '2%': { transform: 'translateY(-200%)', opacity: 1 },
  '3%': { transform: 'translateY(-300%)', opacity: 1 },
  '4%': { transform: 'translateY(-400%)', opacity: 1 },
  '5%': { transform: 'translateY(-500%)', opacity: 1 },
  '6%': { transform: 'translateY(-600%)', opacity: 1 },
  '8%': { transform: 'translateY(-700%)', opacity: 1 },
  '9%': { transform: 'translateY(-800%)', opacity: 1 },
  '10%': { transform: 'translateY(-900%)', opacity: 1 },
  '11%': { transform: 'translateY(-1000%)', opacity: 1 },
  '13%': { transform: 'translateY(-1100%)', opacity: 1 },
  '14%': { transform: 'translateY(-1200%)', opacity: 1 },
  '15%': { transform: 'translateY(-1300%)', opacity: 1 },
  '17%': { transform: 'translateY(-1400%)', opacity: 1 },
  '18%': { transform: 'translateY(-1500%)', opacity: 1 },
  '20%': { transform: 'translateY(-1600%)', opacity: 1 },
  '30%': { transform: 'translateY(-1700%)', opacity: 1 },
  '60%': { transform: 'translateY(-1800%)', opacity: 1 },
  '100%': { transform: 'translateY(-1900%)', opacity: 1 },
});

const numberChangeAnimation = keyframes({
  from: { transform: `translateY(${countAnimateVars.fromTranslateY})`, opacity: 0 },
  to: { transform: `translateY(${countAnimateVars.translateY})`, opacity: 1 },
});

const numberNoChangeAnimation = keyframes({
  to: { transform: `translateY(${countAnimateVars.translateY})`, opacity: 1 },
});

export const numberWrap = style({
  display: 'inline-block',
  verticalAlign: 'bottom',
  height: heightVars.height,
  overflow: 'hidden',
});

export const number = recipe({
  base: { display: 'block', textAlign: 'center' },

  variants: {
    number: {
      0: { animation: `${zero} 2s ease-out forwards` },
      1: { animation: `${one} 2s ease-out forwards` },
      2: { animation: `${two} 2s ease-out forwards` },
      3: { animation: `${three} 2s ease-out forwards` },
      4: { animation: `${four} 2s ease-out forwards` },
      5: { animation: `${five} 2s ease-out forwards` },
      6: { animation: `${six} 2s ease-out forwards` },
      7: { animation: `${seven} 2s ease-out forwards` },
      8: { animation: `${eight} 2s ease-out forwards` },
      9: { animation: `${nine} 2s ease-out forwards` },
    },
    delay: { delay: { opacity: 0, animationDelay: countAnimateVars.delay } },
    change: {
      change: { animation: `${numberChangeAnimation} 0.5s ease-out forwards` },
      noChange: { animation: `${numberNoChangeAnimation} forwards` },
    },
  },
});
