import { useState, useMemo, HTMLAttributes, Dispatch, SetStateAction } from 'react';
import CountAnimate from './CountAnimate.client.tsx';

type Options = { delay: number; height: string };
type UseCountArgs = { initialCount: number | string; options?: Partial<Options> };
export default function useCount({
  initialCount,
  options,
}: UseCountArgs): [
  (props: HTMLAttributes<HTMLDivElement>) => JSX.Element,
  Dispatch<SetStateAction<number | null>>,
] {
  const [count, setCount] = useState<number | null>(null);

  const CountComponents = useMemo(
    () => {
      return Object.assign(function HookCount(props: HTMLAttributes<HTMLDivElement>) {
        return <CountAnimate number={count ?? initialCount} {...options} {...props} />;
      }, {});
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [count],
  );

  return [CountComponents, setCount];
}
