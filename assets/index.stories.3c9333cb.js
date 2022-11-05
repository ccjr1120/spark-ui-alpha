import{j as n,F as g,a as s,r as u}from"./jsx-runtime.308c77b6.js";import{a as h}from"./index.c5d1d7f8.js";import{r as C}from"./index.96022b4c.js";import{B as r}from"./index.2d297332.js";import"./iframe.a4076904.js";function i(l){const{open:t,title:e,children:a,onClose:B,onCancel:c,onConfirm:p,showCloseBtn:N=!0,showCancelBtn:m=!0,showConfirmBtn:d=!0,showFooter:f=!0}=l,o=h("dialog");return n(g,{children:t&&C.exports.createPortal(n("div",{className:`${o.b()} ${o.m("root")}`,children:s("div",{className:o.m("wrap"),children:[n("header",{className:o.e("header"),children:e}),n("main",{className:o.e("content"),children:a}),f&&n("footer",{className:o.e("footer"),children:s("span",{className:"dialog-footer",children:[m&&n(r,{onClick:c,type:"plain",style:{marginRight:"10px"},children:"Cancel"}),d&&n(r,{onClick:p,style:{marginLeft:"10px"},children:"Confirm"})]})})]})}),document.body)})}const T={parameters:{storySource:{source:`import { useState } from 'react';
import Dialog from './index';
import Button from '../../Base/Button';
export default {
  title: 'feedback/Dialog',
  component: Dialog,
  argTypes: {
    type: {
      control: 'null',
    },
  },
};

function Template(args) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <Button
        type="text"
        onClick={() => {
          setOpen((v) => !v);
        }}
      >
        Open Dialog
      </Button>
      <Dialog
        open={open}
        title="Tips"
        onClose={() => {
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        onConfirm={() => {
          setOpen(false);
        }}
      >
        this is a message.
      </Dialog>
    </div>
  );
}

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {};
`,locationsMap:{normal:{startLoc:{col:22,line:46},endLoc:{col:39,line:46},startBody:{col:22,line:46},endBody:{col:39,line:46}}}}},title:"feedback/Dialog",component:i,argTypes:{type:{control:"null"}}};function x(l){const[t,e]=u.exports.useState(!1);return s("div",{children:[n(r,{type:"text",onClick:()=>{e(a=>!a)},children:"Open Dialog"}),n(i,{open:t,title:"Tips",onClose:()=>{e(!1)},onCancel:()=>{e(!1)},onConfirm:()=>{e(!1)},children:"this is a message."})]})}const y=x.bind({});y.args={};const w=["Normal"];export{y as Normal,w as __namedExportsOrder,T as default};
//# sourceMappingURL=index.stories.3c9333cb.js.map
