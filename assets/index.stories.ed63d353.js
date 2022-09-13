import{j as c}from"./jsx-runtime.cf39c914.js";import"./iframe.3feebf72.js";const p="spark",r=(t,n,s)=>{let o=`${p}-${t}`;return n&&(o+=`__${n}`),s&&(o+=`--${s}`),o},d=t=>({b:()=>r(t,"",""),e:e=>r(t,e,""),m:e=>r(t,"",e),bem:(e,i)=>r(t,e,i),is:e=>`is-${e}`}),m=t=>[...new Set(t)].join(" ");function u(t){const{children:n,size:s,type:o}=t,a=d("button"),l=m([a.b(),a.is(s),a.is(o)]);return c("button",{type:"button",className:l,children:n})}const x={parameters:{storySource:{source:`import Button from './index';

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
`,locationsMap:{normal:{startLoc:{col:22,line:35},endLoc:{col:39,line:35},startBody:{col:22,line:35},endBody:{col:39,line:35}}}}},title:"Components/Button",component:u,argTypes:{type:{control:"select",options:["default","plain","text"],defaultValue:"default",table:{category:"base"}},size:{control:"select",options:["small","default","large"],defaultValue:"default",table:{category:"base"}},children:{control:"text",defaultValue:"Button",table:{category:"base"}}}};function g(t){return c(u,{...t})}const b=g.bind({});b.args={};const B=["Normal"];export{b as Normal,B as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories.ed63d353.js.map
