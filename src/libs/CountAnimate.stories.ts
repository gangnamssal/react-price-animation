// stories
import CountAnimate from './CountAnimate.client.tsx';

const meta = {
  component: CountAnimate,
  title: 'Count',
  tags: ['autodocs'],

  parameters: {
    componentSubtitle: 'react-price-animation',
    docs: {
      description: {
        component: `react-price-animation 라이브러리를 사용한 컴포넌트입니다.`,
      },
    },
  },

  argTypes: {
    number: {
      description: '숫자나 "123,000"과 같이 쉼표로 구분된 형식의 문자열을 입력받습니다.',
      table: {
        type: { summary: 'number | string' },
        defaultValue: { summary: 12345 },
      },
      control: {
        type: 'text',
      },
    },

    delay: {
      description: '각 자릿수의 애니메이션 시작 시간을 나타냅니다. 기본값은 0.15입니다.',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 0.15 },
      },
      control: {
        type: 'number',
      },
    },

    height: {
      description: '숫자의 높이를 지정합니다. 높이는 최소한 글자 크기만큼이어야 합니다. 기본값은 20px입니다.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '20px' },
      },
      control: {
        type: 'other',
      },
    },

    startDirection: {
      description:
        '애니메이션의 시작 방향을 지정합니다. left는 왼쪽에서 시작하는 것을 의미하며, right는 오른쪽에서 시작하는 것을 나타냅니다. 기본값은 right입니다.',
      table: {
        type: { summary: 'left | right' },
        defaultValue: { summary: 'right' },
      },
      control: {
        type: 'radio',
        options: ['left', 'right'],
      },
    },

    comma: {
      description: '쉼표를 표시할지 여부를 나타냅니다. 기본값은 true입니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },

    initialAnimation: {
      description: '첫 렌더링 시 애니메이션을 보여줄지 여부를 나타냅니다. 기본값은 true입니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

export const numberValue = {
  args: {
    number: 12345,
  },
};

export const stringValue = {
  args: {
    number: '123,000',
  },
};

export const delayZeroDotThreeValue = {
  args: {
    number: 12345,
    delay: 0.3,
  },
};

export const height40px = {
  args: {
    number: 12345,
    height: '40px',
    style: { fontSize: '40px' },
  },
};

export const startDirectionLeft = {
  args: {
    number: 12345,
    startDirection: 'left',
  },
};

export const commaFalse = {
  args: {
    number: 12345,
    comma: false,
  },
};

export const initialAnimationFalse = {
  args: {
    number: 12345,
    initialAnimation: false,
  },
};
