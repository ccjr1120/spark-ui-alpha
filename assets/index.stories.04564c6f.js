import{r as i,j as s}from"./jsx-runtime.a530fb41.js";import{d as a,W as C,K as P,C as T}from"./KeyboardDateInput.db38f034.js";import{I as v}from"./index.efc16acd.js";import"./iframe.75da3b25.js";import"./index.e8a8db05.js";import"./index.8b58debf.js";import"./index.a6a75662.js";const b=({togglePopper:n,...r})=>s(v,{endAdornment:s("span",{style:{padding:"0 12px",cursor:"pointer"},onClick:n,children:"\u23F0"}),...r});function m(n){const{label:r,value:t,onChange:p,valueFormat:o="HH:mm",views:d=["hour","minute"],renderInput:f,...g}=n,h={label:r,value:t,valueFormat:o,inputType:"time",renderInput:f||b},[x,y]=i.exports.useState(!1),c=()=>{y(e=>!e)},[l,u]=i.exports.useState(a(t,o));return i.exports.useEffect(()=>{if(!a(t,o).isSame(l)){let e=a(t,o);e.isValid()||(e=a()),u(e)}},[t,o]),s(C,{showPopper:x,togglePopper:c,inputProps:h,KeyboardDateInputComponent:P,children:s(T,{views:d,date:l,onChange:(e,k)=>{u(e),k==="finish"&&(p(e.format(o)),c())},...g})})}const N={parameters:{storySource:{source:`import { useState } from 'react';
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
`,locationsMap:{normal:{startLoc:{col:22,line:17},endLoc:{col:39,line:17},startBody:{col:22,line:17},endBody:{col:39,line:17}}}}},title:"Base/TimePicker",component:m};function S(n){const[r,t]=i.exports.useState("");return s(m,{value:r,onChange:p=>t(p),...n})}const _=S.bind({}),E=["Normal"];export{_ as Normal,E as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories.04564c6f.js.map
