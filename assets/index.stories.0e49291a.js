import{B as t}from"./index.e1f61227.js";import{j as e}from"./jsx-runtime.4ba094b0.js";import"./index.46307c1f.js";import"./iframe.8fbb55c0.js";const i={parameters:{storySource:{source:`import Button from './index';

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
`,locationsMap:{normal:{startLoc:{col:22,line:35},endLoc:{col:39,line:35},startBody:{col:22,line:35},endBody:{col:39,line:35}}}}},title:"Base/Button",component:t,argTypes:{type:{control:"select",options:["default","plain","text"],defaultValue:"default",table:{category:"base"}},size:{control:"select",options:["small","default","large"],defaultValue:"default",table:{category:"base"}},children:{control:"text",defaultValue:"Button",table:{category:"base"}}}};function n(o){return e(t,{...o})}const r=n.bind({});r.args={};const u=["Normal"];export{r as Normal,u as __namedExportsOrder,i as default};
//# sourceMappingURL=index.stories.0e49291a.js.map
