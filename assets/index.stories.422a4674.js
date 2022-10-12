import{r as a,a as g,j as t}from"./jsx-runtime.29dbc6ac.js";import{u as d,a as y}from"./index.64cc5c3c.js";import"./iframe.79dfa89a.js";const V=s=>{const[i,e]=a.exports.useState({});return a.exports.useEffect(()=>{if(s.current){const{height:o}=s.current.getBoundingClientRect();e({height:o})}},[s]),i},C=a.exports.createContext(null);function A(){return a.exports.useContext(C)}function c(s){const i=A();if(i==null)throw new Error("no CollapseContext provied");const{sourceValue:e,inlineValue:o,onChange:l}=i,{name:n,header:h,children:b}=s,m=a.exports.useRef(),{height:w}=V(m),x=o.some(r=>r===n),u=y("collapse-panel"),v=d([u.b()]),k=d([u.e("header")]),N=d([u.e("content")]),P=a.exports.useCallback(()=>{let r;Array.isArray(e)?e.some(p=>p===n)?r=e.filter(p=>p!==n):r=[...e,n]:r=n===e?null:n,l(n,r)},[e,n,l]);return g("div",{className:v,children:[t("div",{className:k,onClick:P,children:h}),t("main",{className:N,style:{height:`${x?w:1}px`},children:t("div",{ref:m,children:b})})]})}function f(s){const{children:i,value:e,onChange:o}=s,l=y("collapse"),n=d([l.b()]),h=a.exports.useMemo(()=>({sourceValue:e,inlineValue:Array.isArray(e)?e:[e],onChange:o}),[e,o]);return t(C.Provider,{value:h,children:t("div",{className:n,children:t("div",{className:l.m("content"),children:i})})})}f.Panel=c;const _={parameters:{storySource:{source:`import { useState } from 'react';
import Collapse, { Panel } from './index';

export default {
  title: 'Display/Collapse',
  component: Collapse,
  argTypes: {
    type: {
      control: 'null',
    },
  },
};

function Template(args) {
  const [index, setIndex] = useState<Array<string>>(['1']);

  return (
    <Collapse
      value={index}
      onChange={(_, nextVal) => {
        setIndex(nextVal as Array<string>);
      }}
    >
      <Panel name="1" header="Consistency">
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used to;
        Consistent within interface: all elements should be consistent, such as:
        design style, icons and texts, position of elements, etc. Consistent
        with real life: in line with the process and logic of real life, and
        comply with languages and habits that the users are used to; Consistent
        within interface: all elements should be consistent, such as: design
        style, icons and texts, position of elements, etc. Consistent with real
        life: in line with the process and logic of real life, and comply with
        languages and habits that the users are used to; Consistent within
        interface: all elements should be consistent, such as: design style,
        icons and texts, position of elements, etc. Consistent with real life:
        in line with the process and logic of real life, and comply with
        languages and habits that the users are used to; Consistent within
        interface: all elements should be consistent, such as: design style,
        icons and texts, position of elements, etc. Consistent with real life:
        in line with the process and logic of real life, and comply with
        languages and habits that the users are used to; Consistent within
        interface: all elements should be consistent, such as: design style,
        icons and texts, position of elements, etc.
      </Panel>
      <Panel name="2" header="Feedback">
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects; Visual feedback:
        reflect current state by updating or rearranging elements of the page.
      </Panel>
      <Panel name="3" header="Efficiency">
        Simplify the process: keep operating process simple and intuitive;
        Definite and clear: enunciate your intentions clearly so that the users
        can quickly understand and make decisions; Easy to identify: the
        interface should be straightforward, which helps the users to identify
        and frees them from memorizing and recalling.
      </Panel>
      <Panel name="4" header="Controllability">
        Decision making: giving advices about operations is acceptable, but do
        not make decisions for the users; Controlled consequences: users should
        be granted the freedom to operate, including canceling, aborting or
        terminating current operation.
      </Panel>
    </Collapse>
  );
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
`,locationsMap:{normal:{startLoc:{col:22,line:68},endLoc:{col:39,line:68},startBody:{col:22,line:68},endBody:{col:39,line:68}}}}},title:"Display/Collapse",component:f,argTypes:{type:{control:"null"}}};function E(s){const[i,e]=a.exports.useState(["1"]);return g(f,{value:i,onChange:(o,l)=>{e(l)},children:[t(c,{name:"1",header:"Consistency",children:"Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc. Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to; Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc."}),t(c,{name:"2",header:"Feedback",children:"Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects; Visual feedback: reflect current state by updating or rearranging elements of the page."}),t(c,{name:"3",header:"Efficiency",children:"Simplify the process: keep operating process simple and intuitive; Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions; Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling."}),t(c,{name:"4",header:"Controllability",children:"Decision making: giving advices about operations is acceptable, but do not make decisions for the users; Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation."})]})}const S=E.bind({});S.args={};const j=["Normal"];export{S as Normal,j as __namedExportsOrder,_ as default};
//# sourceMappingURL=index.stories.422a4674.js.map
