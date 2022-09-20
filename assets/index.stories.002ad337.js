import{r,a as i,j as e}from"./jsx-runtime.f89815c5.js";import{u as d,a as m}from"./index.b09cd3d3.js";import"./iframe.e9463f5a.js";const h=r.exports.createContext(null);function g(){return r.exports.useContext(h)}function l(c){const{name:n}=c,t=g();if(t==null)throw new Error("no CollapseContext provied");const{value:a,onChange:o}=t,s=m("collapse-panel"),u=d([s.b()]),x=d([s.e("header"),s.useIs("active",n===a)]),f=d([s.e("content"),s.useIs("active",n===a)]),C=r.exports.useCallback(()=>{o(n)},[n,o]);return i("div",{className:u,children:[i("div",{className:x,onClick:C,children:[e("span",{children:">"}),"header"]}),i("main",{className:f,children:[e("div",{children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;"}),e("div",{children:"Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."})]})]})}function p(c){const{children:n,value:t,onChange:a}=c,o=m("collapse"),s=d([o.b()]),u=r.exports.useMemo(()=>({value:t,onChange:a}),[t,a]);return e(h.Provider,{value:u,children:e("div",{className:s,children:e("div",{className:o.m("content"),children:n})})})}p.Panel=l;const w={parameters:{storySource:{source:`import { useState } from 'react';
import Collapse, { Panel } from './index';

export default {
  title: 'Components/Collapse',
  component: Collapse,
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
  },
};

function Template(args) {
  const [index, setIndex] = useState<number | string>('1');
  return (
    <Collapse
      value={index}
      onChange={(i) => {
        setIndex(i);
      }}
    >
      <Panel name="1" />
      <Panel name="2" />
      <Panel name="3" />
      <Panel name="4" />
    </Collapse>
  );
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
`,locationsMap:{normal:{startLoc:{col:22,line:45},endLoc:{col:39,line:45},startBody:{col:22,line:45},endBody:{col:39,line:45}}}}},title:"Components/Collapse",component:p,argTypes:{type:{control:"select",options:["default","plain","text"],defaultValue:"default",table:{category:"base"}},size:{control:"select",options:["small","default","large"],defaultValue:"default",table:{category:"base"}},children:{control:"text",defaultValue:"Button",table:{category:"base"}}}};function b(c){const[n,t]=r.exports.useState("1");return i(p,{value:n,onChange:a=>{t(a)},children:[e(l,{name:"1"}),e(l,{name:"2"}),e(l,{name:"3"}),e(l,{name:"4"})]})}const y=b.bind({});y.args={};const V=["Normal"];export{y as Normal,V as __namedExportsOrder,w as default};
//# sourceMappingURL=index.stories.002ad337.js.map
