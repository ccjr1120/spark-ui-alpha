import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      defaultValue: 'default',
    },
    type: {
      control: 'select',
      options: ['default', 'plain', 'round', 'circle'],
      defaultValue: 'default',
    },
    children: {
      control: 'text',
      defaultValue: 'Button',
    },
    color: { control: 'color', table: { category: 'custom' } },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Button {...args} />;
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
