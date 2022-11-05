import{r as i,j as s}from"./jsx-runtime.308c77b6.js";import{d as a,W as C}from"./YearPicker.8cee07ab.js";import{K as P,C as T}from"./KeyboardDateInput.f1b045f5.js";import{I as v}from"./index.05d7ed15.js";import"./iframe.a4076904.js";import"./index.c5d1d7f8.js";import"./index.96022b4c.js";import"./index.2d297332.js";const b=({togglePopper:r,...n})=>s(v,{endAdornment:s("span",{style:{padding:"0 12px",cursor:"pointer"},onClick:r,children:"\u23F0"}),...n});function u(r){const{label:n,value:t,onChange:p,valueFormat:o="HH:mm",views:d=["hour","minute"],renderInput:f,...g}=r,h={label:n,value:t,valueFormat:o,inputType:"time",renderInput:f||b},[x,y]=i.exports.useState(!1),c=()=>{y(e=>!e)},[l,m]=i.exports.useState(a(t,o));return i.exports.useEffect(()=>{if(!a(t,o).isSame(l)){let e=a(t,o);e.isValid()||(e=a()),m(e)}},[t,o]),s(C,{showPopper:x,togglePopper:c,inputProps:h,KeyboardDateInputComponent:P,children:s(T,{views:d,date:l,onChange:(e,k)=>{m(e),k==="finish"&&(p(e.format(o)),c())},...g})})}const _={parameters:{storySource:{source:`import { useState } from 'react';
import TimePicker from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/TimePicker',
  component: TimePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  const [value, setValue] = useState('');
  return <TimePicker value={value} onChange={(v) => setValue(v)} {...args} />;
}

export const Normal = Template.bind({});
`,locationsMap:{normal:{startLoc:{col:22,line:17},endLoc:{col:39,line:17},startBody:{col:22,line:17},endBody:{col:39,line:17}}}}},title:"Base/TimePicker",component:u};function S(r){const[n,t]=i.exports.useState("");return s(u,{value:n,onChange:p=>t(p),...r})}const E=S.bind({}),F=["Normal"];export{E as Normal,F as __namedExportsOrder,_ as default};
//# sourceMappingURL=index.stories.b0c2a8c0.js.map
