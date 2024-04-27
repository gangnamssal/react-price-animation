# React-price-animation

은행, 이커머스 사이트 등에서 거래가 이루어질 때, 가격이나 숫자의 변동을 사용자에게 더욱 생생하게 전달하기 위해 애니메이션 효과를 적용할 수 있습니다.

## Install

npm

```markdown
npm install react-price-animation
```

yarn

```markdown
yarn add react-price-animation
```

pnpm

```markdown
pnpm install react-price-animation
```

## Usage

React 컴포넌트에 react-price-animation를 import하여 사용합니다.

```jsx
import { Count } from 'react-price-animation';

function App() {
  return (
    <div className='App'>
      <Count number={12345} />
    </div>
  );
}

export default App;
```

## Props

- `number` : 숫자나 "123,000"과 같이 쉼표로 구분된 형식의 문자열을 입력받습니다.
- `delay` : 각 자릿수의 애니메이션 시작 시간을 나타냅니다. 기본값은 0.15입니다.
- `height` : 숫자의 높이를 지정합니다. 높이는 최소한 글자 크기만큼이어야 합니다. 기본값은 20px입니다.
- `startDirection` : 애니메이션의 시작 방향을 지정합니다. 'left'는 왼쪽에서 시작하는 것을 의미하며, 'right'는 오른쪽에서 시작하는 것을 나타냅니다. 기본값은 'right'입니다.
- `comma` : 쉼표 표시 여부를 결정합니다. 기본값은 true입니다.
- `initialAnimation` : 첫 렌더링 시 애니메이션을 보여줄지 여부를 나타냅니다. 기본값은 true입니다.
- `other` : HTMLAttributes<HTMLDivElement> 속성을 사용할 수 있습니다.

|      속성명      |   필수 여부    | 기본값 |           가능한 타입            |
| :--------------: | :------------: | :----: | :------------------------------: |
|      number      | required(필수) |   -    |        `number`,`string`         |
|      delay       |  option(선택)  |  0.15  |             `number`             |
|      height      |  option(선택)  |  20px  |             `string`             |
|  startDirection  |  option(선택)  | right  |          `left`,`right`          |
|      comma       |  option(선택)  |  true  |            `boolean`             |
| initialAnimation |  option(선택)  |  true  |            `boolean`             |
|      other       |  option(선택)  |   -    | `HTMLAttributes<HTMLDivElement>` |

## Example

- number 값이 문자열일 때

```jsx
import { Count } from 'react-price-animation';

function App() {
  return (
    <div className='App'>
      <Count number={'12,345'} />
    </div>
  );
}

export default App;
```

- 모든 props를 적용했을 때

```jsx
import { Count } from 'react-price-animation';

function App() {
  return (
    <div className='App'>
      <Count number={12345} delay={0.1} height={'15px'} startDirection={'left'} />
    </div>
  );
}

export default App;
```

- css 적용

```jsx
import { Count } from 'react-price-animation';

function App() {
  return (
    <div className='App'>
      <Count className={price} number={price?.toLocaleString('ko-KR')} delay={0.1} />
    </div>
  );
}

export default App;
```

- 이벤트 적용

```jsx
import { Count } from 'react-price-animation';

function App() {
  return (
    <div className='App'>
      <Count
        className={styles.price}
        number={price?.toLocaleString('ko-KR')}
        delay={0.1}
        onClick={() => console.log(123)}
      />
    </div>
  );
}

export default App;
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
