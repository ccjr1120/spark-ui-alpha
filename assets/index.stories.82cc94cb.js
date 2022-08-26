import{j as t}from"./jsx-runtime.8401ffb7.js";import"./iframe.d0ecd0a2.js";function o(){return t("button",{type:"button",className:"test",children:"button"})}const c={parameters:{storySource:{source:`import React from 'react';

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:17,line:16},endLoc:{col:47,line:16},startBody:{col:17,line:16},endBody:{col:47,line:16}}}}},title:"Example/Button",component:o,argTypes:{backgroundColor:{control:"color"}}},n=r=>t(o,{...r}),e=n.bind({});e.args={primary:!0,label:"Button"};const i=["Primary"];export{e as Primary,i as __namedExportsOrder,c as default};
//# sourceMappingURL=index.stories.82cc94cb.js.map
