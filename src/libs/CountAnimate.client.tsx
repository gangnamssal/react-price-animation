// library
import { HTMLAttributes, useEffect, useRef } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

// stories
import * as styles from './CountAnimate.css.ts';

// types
import type { ArrayUnion } from '../global';

const zeroToNine = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

const numbers = [...zeroToNine, ...zeroToNine];

type CountAnimateProps = {
  number: number | string;
  delay?: number;
  height?: string;
  startDirection?: 'left' | 'right';
  comma?: boolean;
  initialAnimation?: boolean;
} & HTMLAttributes<HTMLDivElement>;

/**
 * @param number - 숫자 or 123,000 같은 문자 형식만 가능합니다.
 * @param delay - 숫자가 변경되는 딜레이 시간입니다. (default: 0.15)
 * @param height - 숫자의 높이를 지정합니다. (default: 20px)
 * @param startDirection - 숫자가 변경되는 방향을 지정합니다. (default: right)
 * @param comma - 숫자에 ,를 추가할지 여부를 지정합니다. (default: true)
 * @param initialAnimation - 초기 애니메이션을 실행할지 여부를 지정합니다. (default: true)
 * @returns
 */
export default function Count({
  number = 12345,
  delay = 0.15,
  height = '20px',
  startDirection = 'right',
  comma = true,
  initialAnimation = true,
  ...props
}: CountAnimateProps) {
  const firstRender = useRef(true);
  const numberStore = useRef<number | string>(number);

  useEffect(() => {
    numberStore.current = number;
    firstRender.current = false;
  }, [number]);

  useEffect(() => {
    const element = document.getElementById('element');

    if (element) {
      element.style.willChange = 'transform';

      element.classList.add('animate');

      setTimeout(() => {
        element.style.willChange = 'auto';
      }, 200);
    }
  }, [number]);

  if (number && !isNumericOrFormattedString(number))
    return <p>'숫자 or 123,000 같은 문자 형식만 가능합니다.'</p>;

  const pureNumString = typeof number == 'string' ? number.replace(/,/g, '') : number.toString();

  const pureNumberStoreString =
    typeof numberStore.current == 'string'
      ? numberStore.current.replace(/,/g, '')
      : numberStore.current.toString();

  return (
    <div {...props}>
      {pureNumString.split('').map((srtNum, index) => {
        const isEqual = srtNum === pureNumberStoreString[index];
        const currentNum = Number(srtNum);
        const prevNum = Number(pureNumberStoreString[index]);

        return (
          <span
            className={styles.numberWrap}
            style={assignInlineVars(styles.heightVars, { height })}
            key={`${srtNum}-${index}`}
            id='element'
          >
            {numbers.map((number, numIndex) => (
              <span
                className={
                  firstRender.current && initialAnimation
                    ? styles.number({
                        number: parseInt(srtNum) as ArrayUnion<typeof zeroToNine>,
                        delay: 'delay',
                      })
                    : isEqual
                      ? styles.number({ change: 'noChange', delay: 'delay' })
                      : styles.number({ change: 'change', delay: 'delay' })
                }
                style={assignInlineVars(styles.countAnimateVars, {
                  delay:
                    startDirection == 'left'
                      ? `${delay * index}s`
                      : `${delay * (pureNumString.length - index)}s`,
                  translateY: `${-currentNum * 100}%`,
                  fromTranslateY: `${-prevNum * 100}%`,
                })}
                key={`num-${index}-${numIndex}`}
              >
                {comma ? addComma(pureNumString, number, index) : number}
              </span>
            ))}
          </span>
        );
      })}
    </div>
  );
}

// 숫자 or 123,000 같은 문자 형식을 체크하는 함수
function isNumericOrFormattedString(value: any): value is number | string {
  return typeof value === 'number' || /^\d{1,3}(,\d{3})*$/.test(value) || /^\d+$/.test(value);
}

// ,를 추가하는 함수
function addComma(pureNumString: string, number: number, index: number) {
  if (pureNumString.length < 4 || pureNumString.length - 1 == index) return number;

  if (pureNumString.length % 3 == 1 && index % 3 == 0) return `${number},`;
  if (pureNumString.length % 3 == 2 && index % 3 == 1) return `${number},`;
  if ((pureNumString.length % 3 == 3 || pureNumString.length % 3 == 0) && index % 3 == 2) return `${number},`;

  return number;
}
