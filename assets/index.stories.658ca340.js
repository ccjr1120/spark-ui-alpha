import{j as c}from"./jsx-runtime.d8706dca.js";import"./iframe.8443d3c1.js";const p="spark",s=(t,n,e)=>{let o=`${p}-${t}`;return n&&(o+=`__${n}`),e&&(o+=`--${e}`),o},u=t=>({b:()=>s(t,"",""),e:r=>s(t,r,""),m:r=>s(t,"",r),bem:(r,l)=>s(t,r,l)}),m=t=>[...new Set(t)].join(" ");function i(t){const{children:n,size:e}=t,o=u("button"),a=m([o.b(),o.e("base"),o.m(e),o.bem("custom","color")]);return c("button",{type:"button",className:a,children:n})}const x={parameters:{storySource:{source:`import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: 'text' },
    size: { control: 'radio', options: ['small', 'default', 'large'] },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  return <Button {...args} />;
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  children: 'Button',
};
`,locationsMap:{normal:{startLoc:{col:22,line:19},endLoc:{col:39,line:19},startBody:{col:22,line:19},endBody:{col:39,line:19}}}}},title:"Components/Button",component:i,argTypes:{children:{control:"text"},size:{control:"radio",options:["small","default","large"]}}};function d(t){return c(i,{...t})}const g=d.bind({});g.args={children:"Button"};const y=["Normal"];export{g as Normal,y as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories.658ca340.js.map
