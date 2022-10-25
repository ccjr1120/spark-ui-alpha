import{r as a,j as s}from"./jsx-runtime.2ac33f33.js";import{I as t}from"./index.0fb55177.js";import"./iframe.6e83c2ed.js";import"./index.1014c4ff.js";const g={parameters:{storySource:{source:`import { useState } from 'react';
import Input from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      control: 'text',
      defaultValue: '\u59D3\u540D',
      table: { category: 'base' },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  const [value, setValue] = useState('');
  return <Input value={value} onChange={(v) => setValue(v)} {...args} />;
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
`,locationsMap:{normal:{startLoc:{col:22,line:24},endLoc:{col:39,line:24},startBody:{col:22,line:24},endBody:{col:39,line:24}}}}},title:"Base/Input",component:t,argTypes:{label:{control:"text",defaultValue:"\u59D3\u540D",table:{category:"base"}}}};function l(o){const[e,n]=a.exports.useState("");return s(t,{value:e,onChange:r=>n(r),...o})}const p=l.bind({});p.args={};const d=["Normal"];export{p as Normal,d as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories.6ba8d2f7.js.map
