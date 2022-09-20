import{u as c,a as u}from"./index.b09cd3d3.js";import{j as e}from"./jsx-runtime.f89815c5.js";import"./iframe.e9463f5a.js";function n(t){const{children:a,size:s,type:r}=t,o=u("button"),l=c([o.b(),o.is(s),o.is(r)]);return e("button",{type:"button",className:l,children:a})}const f={parameters:{storySource:{source:`import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
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
`,locationsMap:{normal:{startLoc:{col:22,line:35},endLoc:{col:39,line:35},startBody:{col:22,line:35},endBody:{col:39,line:35}}}}},title:"Components/Button",component:n,argTypes:{type:{control:"select",options:["default","plain","text"],defaultValue:"default",table:{category:"base"}},size:{control:"select",options:["small","default","large"],defaultValue:"default",table:{category:"base"}},children:{control:"text",defaultValue:"Button",table:{category:"base"}}}};function i(t){return e(n,{...t})}const p=i.bind({});p.args={};const b=["Normal"];export{p as Normal,b as __namedExportsOrder,f as default};
//# sourceMappingURL=index.stories.f013e57b.js.map
