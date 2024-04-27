// library
import { v4 as uuidv4 } from 'uuid';
import { HTMLAttributes, useEffect, useRef } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';

// stories
import * as styles from './CountAnimate.css.ts';

// types
import type { ArrayUnion } from '../global.d.ts';

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
            key={Math.random() * parseInt(srtNum) + index}
          >
            {numbers.map(number => (
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
                key={uuidv4()}
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
