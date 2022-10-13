import{r as p,j as a,a as g}from"./jsx-runtime.43c3873c.js";import{u as x,a as d}from"./index.7c0ea6c3.js";import"./iframe.09713547.js";const b=p.exports.createContext(null);function m(){return p.exports.useContext(b)}function C(t){const{shrink:e,children:n}=t,{isError:o,focused:s,filled:l,hasStartAdornment:u}=m(),c=d("form-label");let r=e;r===void 0&&(r=l||s||u);const i=x([c.b(),c.useIs("shrink",r)]);return a("div",{className:i,children:n})}function y(t){const e=d("form-helper-text");return m(),a("p",{className:e.b(),...t})}function N(t){const e=d("form-controller"),{value:n,children:o,isError:s,hasStartAdornment:l,hasLabel:u,className:c}=t,[r,i]=p.exports.useState(!1),f=p.exports.useMemo(()=>({hasLabel:u,isError:s,filled:!!n,hasStartAdornment:l,focused:r,onFocus:()=>{i(!0)},onBlur:()=>{i(!1)}}),[r,u,s,l,n]);return a(b.Provider,{value:f,children:a("div",{className:`${e.m("wrap")} ${c}`,children:o})})}function I(t){const e=d("input-base"),{value:n,onChange:o,placeholder:s}=t,l=m(),{hasLabel:u,focused:c,onFocus:r,onBlur:i}=l,f=h=>{o&&o(h.target.value,h)};return a("input",{className:e.b(),value:n,onChange:f,placeholder:u&&!c?"":s,onFocus:r,onBlur:i})}function S({children:t,...e}){const n=d("input-adornment"),{focused:o}=m(),s=x([n.b(),n.useIs("focus",o)]);return a("div",{className:s,children:t})}function v(t){const{label:e,placeholder:n,isError:o,helperText:s,value:l,onChange:u,startAdornment:c,endAdornment:r}=t,i=d("input");return g(N,{value:l,isError:o,hasLabel:!!e,hasStartAdornment:!!c,className:i.b(),children:[e&&a(C,{children:e}),g(S,{children:[c,a(I,{value:l,onChange:u,placeholder:n}),r]}),s&&a(y,{children:s})]})}const A={parameters:{storySource:{source:`import { useState } from 'react';
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
`,locationsMap:{normal:{startLoc:{col:22,line:24},endLoc:{col:39,line:24},startBody:{col:22,line:24},endBody:{col:39,line:24}}}}},title:"Base/Input",component:v,argTypes:{label:{control:"text",defaultValue:"\u59D3\u540D",table:{category:"base"}}}};function k(t){const[e,n]=p.exports.useState("");return a(v,{value:e,onChange:o=>n(o),...t})}const F=k.bind({});F.args={};const L=["Normal"];export{F as Normal,L as __namedExportsOrder,A as default};
//# sourceMappingURL=index.stories.45b6e88d.js.map
