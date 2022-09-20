import { useState } from 'react';
import Collapse, { Panel } from './index';

export default {
  title: 'Components/Collapse',
  component: Collapse,
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'plain', 'text'],
      defaultValue: 'default',
      table: { category: 'base' },
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      defaultValue: 'default',
      table: { category: 'base' },
    },
    children: {
      control: 'text',
      defaultValue: 'Button',
      table: { category: 'base' },
    },
  },
};

function Template(args) {
  const [index, setIndex] = useState<number | string>('1');
  return (
    <Collapse
      value={index}
      onChange={(i) => {
        setIndex(i);
      }}
    >
      <Panel name="1" />
      <Panel name="2" />
      <Panel name="3" />
      <Panel name="4" />
    </Collapse>
  );
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
