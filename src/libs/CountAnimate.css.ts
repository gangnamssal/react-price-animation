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
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '4%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '6%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '8%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '9%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '10%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '20%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '50%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
});

const one = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '3%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '5%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '7%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '9%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '11%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '13%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '15%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '25%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '50%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
});

const two = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '3%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '5%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '7%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '9%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '11%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '13%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '15%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '25%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '50%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1200%, 0)', opacity: 1 },
});

const three = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '5%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '8%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '11%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '14%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '17%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '20%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '23%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '26%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '29%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '32%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
  '55%': { transform: 'translate3d(0, -1200%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1300%, 0)', opacity: 1 },
});

const four = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '4%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '6%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '8%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '10%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '12%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '14%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '16%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '18%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '20%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
  '30%': { transform: 'translate3d(0, -1200%, 0)', opacity: 1 },
  '60%': { transform: 'translate3d(0, -1300%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1400%, 0)', opacity: 1 },
});

const five = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '3%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '5%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '6%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '8%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '10%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '12%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '14%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '16%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '18%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
  '20%': { transform: 'translate3d(0, -1200%, 0)', opacity: 1 },
  '30%': { transform: 'translate3d(0, -1300%, 0)', opacity: 1 },
  '60%': { transform: 'translate3d(0, -1400%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1500%, 0)', opacity: 1 },
});

const six = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '3%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '4%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '5%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '6%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '8%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '10%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '12%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '14%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '16%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
  '18%': { transform: 'translate3d(0, -1200%, 0)', opacity: 1 },
  '20%': { transform: 'translate3d(0, -1300%, 0)', opacity: 1 },
  '30%': { transform: 'translate3d(0, -1400%, 0)', opacity: 1 },
  '60%': { transform: 'translate3d(0, -1500%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1600%, 0)', opacity: 1 },
});

const seven = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '3%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '4%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '6%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '7%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '8%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '9%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '10%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '12%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '14%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
  '16%': { transform: 'translate3d(0, -1200%, 0)', opacity: 1 },
  '18%': { transform: 'translate3d(0, -1300%, 0)', opacity: 1 },
  '20%': { transform: 'translate3d(0, -1400%, 0)', opacity: 1 },
  '30%': { transform: 'translate3d(0, -1500%, 0)', opacity: 1 },
  '60%': { transform: 'translate3d(0, -1600%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1700%, 0)', opacity: 1 },
});

const eight = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '3%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '4%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '6%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '7%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '9%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '10%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '12%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '13%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '15%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
  '16%': { transform: 'translate3d(0, -1200%, 0)', opacity: 1 },
  '17%': { transform: 'translate3d(0, -1300%, 0)', opacity: 1 },
  '18%': { transform: 'translate3d(0, -1400%, 0)', opacity: 1 },
  '20%': { transform: 'translate3d(0, -1500%, 0)', opacity: 1 },
  '30%': { transform: 'translate3d(0, -1600%, 0)', opacity: 1 },
  '60%': { transform: 'translate3d(0, -1700%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1800%, 0)', opacity: 1 },
});

const nine = keyframes({
  '0%': { transform: 'translate3d(0, 0%, 0)', opacity: 1 },
  '1%': { transform: 'translate3d(0, -100%, 0)', opacity: 1 },
  '2%': { transform: 'translate3d(0, -200%, 0)', opacity: 1 },
  '3%': { transform: 'translate3d(0, -300%, 0)', opacity: 1 },
  '4%': { transform: 'translate3d(0, -400%, 0)', opacity: 1 },
  '5%': { transform: 'translate3d(0, -500%, 0)', opacity: 1 },
  '6%': { transform: 'translate3d(0, -600%, 0)', opacity: 1 },
  '8%': { transform: 'translate3d(0, -700%, 0)', opacity: 1 },
  '9%': { transform: 'translate3d(0, -800%, 0)', opacity: 1 },
  '10%': { transform: 'translate3d(0, -900%, 0)', opacity: 1 },
  '11%': { transform: 'translate3d(0, -1000%, 0)', opacity: 1 },
  '13%': { transform: 'translate3d(0, -1100%, 0)', opacity: 1 },
  '14%': { transform: 'translate3d(0, -1200%, 0)', opacity: 1 },
  '15%': { transform: 'translate3d(0, -1300%, 0)', opacity: 1 },
  '17%': { transform: 'translate3d(0, -1400%, 0)', opacity: 1 },
  '18%': { transform: 'translate3d(0, -1500%, 0)', opacity: 1 },
  '20%': { transform: 'translate3d(0, -1600%, 0)', opacity: 1 },
  '30%': { transform: 'translate3d(0, -1700%, 0)', opacity: 1 },
  '60%': { transform: 'translate3d(0, -1800%, 0)', opacity: 1 },
  '100%': { transform: 'translate3d(0, -1900%, 0)', opacity: 1 },
});

const numberChangeAnimation = keyframes({
  from: { transform: `translate3d(0, ${countAnimateVars.fromTranslateY}, 0)`, opacity: 0 },
  to: { transform: `translate3d(0, ${countAnimateVars.translateY}, 0)`, opacity: 1 },
});

const numberNoChangeAnimation = keyframes({
  to: { transform: `translate3d(0, ${countAnimateVars.translateY}, 0)`, opacity: 1 },
});

export const numberWrap = style({
  display: 'inline-block',
  verticalAlign: 'middle',
  height: heightVars.height,
  lineHeight: heightVars.height,
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
