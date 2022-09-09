import{j as c}from"./jsx-runtime.9e5bec4e.js";import"./iframe.7336810b.js";const d="spark",a=(t,n,s)=>{let e=`${d}-${t}`;return n&&(e+=`__${n}`),s&&(e+=`--${s}`),e},p=t=>({b:()=>a(t,"",""),e:o=>a(t,o,""),m:o=>a(t,"",o),bem:(o,i)=>a(t,o,i),is:o=>`is-${o}`}),m=t=>[...new Set(t)].join(" ");function u(t){const{children:n,size:s,type:e}=t,r=p("button"),l=m([r.b(),r.is(s),r.is(e)]);return c("button",{type:"button",className:l,children:n})}const x={parameters:{storySource:{source:`import Button from './index';

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
      table: { category: 'base' },
    },
    type: {
      control: 'select',
      options: ['default', 'plain', 'decorated', 'text'],
      defaultValue: 'default',
      table: { category: 'base' },
    },
    children: {
      control: 'text',
      defaultValue: 'Button',
      table: { category: 'base' },
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
`,locationsMap:{normal:{startLoc:{col:22,line:35},endLoc:{col:39,line:35},startBody:{col:22,line:35},endBody:{col:39,line:35}}}}},title:"Components/Button",component:u,argTypes:{size:{control:"select",options:["small","default","large"],defaultValue:"default",table:{category:"base"}},type:{control:"select",options:["default","plain","decorated","text"],defaultValue:"default",table:{category:"base"}},children:{control:"text",defaultValue:"Button",table:{category:"base"}},color:{control:"color",table:{category:"custom"}}}};function g(t){return c(u,{...t})}const b=g.bind({});b.args={};const B=["Normal"];export{b as Normal,B as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories.8665b1bd.js.map
