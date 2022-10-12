import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
    // color: { control: 'color', table: { category: 'custom' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Button {...args} />;
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
