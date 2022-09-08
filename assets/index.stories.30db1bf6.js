import{j as l}from"./jsx-runtime.d1431757.js";import"./iframe.32a959c1.js";const i="spark",s=(t,n,e)=>{let o=`${i}-${t}`;return n&&(o+=`__${n}`),e&&(o+=`--${e}`),o},p=t=>({b:()=>s(t,"",""),e:r=>s(t,r,""),m:r=>s(t,"",r),bem:(r,u)=>s(t,r,u)}),d=t=>[...new Set(t)].join(" ");function c(t){const{children:n,size:e}=t,o=p("button"),a=d([o.b(),o.e("base"),o.m(e),o.bem("custom","color")]);return l("button",{type:"button",className:a,children:n})}const y={parameters:{storySource:{source:`import Button from './index';

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
`,locationsMap:{normal:{startLoc:{col:22,line:32},endLoc:{col:39,line:32},startBody:{col:22,line:32},endBody:{col:39,line:32}}}}},title:"Components/Button",component:c,argTypes:{size:{control:"select",options:["small","default","large"],defaultValue:"default"},type:{control:"select",options:["default","plain","round","circle"],defaultValue:"default"},children:{control:"text",defaultValue:"Button"},color:{control:"color",table:{category:"custom"}}}};function m(t){return l(c,{...t})}const f=m.bind({});f.args={};const x=["Normal"];export{f as Normal,x as __namedExportsOrder,y as default};
//# sourceMappingURL=index.stories.30db1bf6.js.map
