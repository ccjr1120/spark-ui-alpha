import{r as E,j as m,a as L}from"./jsx-runtime.308c77b6.js";import{d as M,l as F,a as H,D as V,Y as Q,P as K,W}from"./YearPicker.8cee07ab.js";import{I as j}from"./index.05d7ed15.js";import{u as Y,a as T}from"./index.c5d1d7f8.js";import{c as G}from"./iframe.a4076904.js";import"./index.96022b4c.js";import"./index.2d297332.js";const z=E.exports.forwardRef((a,e)=>{const{togglePopper:n,startProps:o,endProps:i,renderInput:r}=a;return r({ref:e,togglePopper:c=>{c.nativeEvent.stopImmediatePropagation(),n()},startProps:{...o},endProps:{...i}})}),J=["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"],U=({view:a,date:e,openType:n,calendars:o,onChange:i})=>{var P;const r=a==="day"?"month":a==="year"?null:"year",[t,c]=E.exports.useState(null),[l,f]=E.exports.useState(e),[y,D]=E.exports.useMemo(()=>l,[l]),[B,u]=E.exports.useState(n==="start"?(P=e[0])!=null?P:M():e[1]?e[1].add(-o+1,r):M().add(-o+1,r));return{opDate:B,opType:r,goNextDate:()=>{u(d=>d.add(1,r))},backPreDate:()=>{u(d=>d.add(-1,r))},getDateOpLabel:d=>{const s=B.add(d,r);return`${r==="month"?J[s.month()]:""}  ${s.year()}\u5E74`},selectStartDate:y,selectEndDate:D,hoverDate:t,setHoverDate:d=>{D||c(d)},changeSelectDate:d=>{if(y&&D){f([d,null]);return}if(!y){f([d,null]);return}if(y&&d.isBefore(y)){f([d,null]);return}f([y,d]),i==null||i([y,d])}}};function q(a){const{isStartDate:e,isEndDate:n,isHoverDate:o,hasEndDate:i,isInRange:r,label:t,date:c,onFocusedDayChange:l,borderRadius:f,sidesBorder:y,innerRadius:D,height:B=49,...u}=a,h=T("date-range-picker-item"),b=Y([h.m("wrapper"),h.useIs("select-range",r&&!i),h.useIs("selected-range",r&&i)]),p=Y([h.e("content"),h.useIs("today",M().isSame(c,"day")),h.useIs("active",e||n)]);return m("div",{style:{height:`${B}px;`,...f,...y},className:b,onMouseMove:()=>{l(c)},...u,children:m("div",{className:p,style:{borderRadius:D,lineHeight:`${B}px`},children:t})})}const X=["\u4E00\u6708","\u4E8C\u6708","\u4E09\u6708","\u56DB\u6708","\u4E94\u6708","\u516D\u6708","\u4E03\u6708","\u516B\u6708","\u4E5D\u6708","\u5341\u6708","\u5341\u4E00\u6708","\u5341\u4E8C\u6708"];function Z(a){const{date:e,onChange:n,renderMonth:o}=a,i=T("month-picker"),r=E.exports.useMemo(()=>{const t=e.year(),c=e.month();return F.exports.times(12,l=>({key:`${t}-${l+1}`,date:e.month(l),label:X[l],isActive:l===c}))},[e]);return m("div",{className:i.b(),children:o?r.map(t=>o(t)):r.map(t=>m(H,{height:48,borderRadius:"1.5rem",onClick:()=>n(t.date),...t},t.key))})}const N=({dateType:a,date:e,isStartDate:n,isEndDate:o,isHoverDate:i})=>{const r=a==="day"?"50%":"1.5rem";let t=0;return a==="day"?((e.date()===1||e.day()===1||n)&&(t+=1),(e.date()===e.daysInMonth()||e.day()===0||o||i)&&(t+=2)):a==="month"?(((e.month()+1)%3===1||n)&&(t+=1),((e.month()+1)%3===0||o||i)&&(t+=2)):a==="quarter"?((e.quarter()%2===1||n)&&(t+=1),(e.quarter()%2===0||o||i)&&(t+=2)):a==="year"&&((e.year()%4===0||n)&&(t+=1),(e.year()%4===3||o||i)&&(t+=2)),t===1?{borderTopLeftRadius:r,borderBottomLeftRadius:r}:t===2?{borderTopRightRadius:r,borderBottomRightRadius:r}:t===3?{borderRadius:r}:{}},A=({dateType:a,date:e,isHoverDate:n,isInRange:o,hasEndDate:i,borderColor:r})=>{if(!o||i)return{};let t=0;return a==="day"?((e.date()===1||e.day()===1)&&(t+=1),(e.date()===e.daysInMonth()||e.day()===0||n)&&(t+=2)):a==="month"?((e.month()+1)%3===1&&(t+=1),((e.month()+1)%3===0||n)&&(t+=2)):a==="quarter"?(e.quarter()%2===1&&(t+=1),(e.quarter()%2===0||n)&&(t+=2)):a==="year"&&(e.year()%4===0&&(t+=1),(e.year()%4===3||n)&&(t+=2)),t===1?{borderLeftColor:r}:t===2?{borderRightColor:r}:t===3?{borderColor:r}:{}},ee=["","\u7B2C\u4E00\u5B63\u5EA6","\u7B2C\u4E8C\u5B63\u5EA6","\u7B2C\u4E09\u5B63\u5EA6","\u7B2C\u56DB\u5B63\u5EA6"];function te(a){const{date:e,onChange:n,renderQuarter:o}=a,i=T("quarter-picker"),r=E.exports.useMemo(()=>{const t=e.year(),c=e.quarter();return F.exports.times(4,l=>({key:`${t}-${l+1}`,date:e.quarter(l+1),label:ee[l+1],isActive:l+1===c}))},[e]);return m("div",{className:i.b(),children:o?r.map(t=>o(t)):r.map(t=>m(H,{height:48,borderRadius:"1.5rem",...t},t.key))})}function re({...a}){return m(K,{className:"spark-date-range-picker__arrow-switcher",...a})}const ne=a=>{const{view:e,date:n,calendars:o,openDateType:i,onChange:r,...t}=a,c=T("date-range-picker-view"),{opDate:l,opType:f,goNextDate:y,backPreDate:D,getDateOpLabel:B,selectStartDate:u,selectEndDate:h,changeSelectDate:b,hoverDate:p,setHoverDate:w}=U({view:e,date:n,calendars:o,openType:i,onChange:r});return m("div",{className:c.b(),...t,children:F.exports.times(o).map(P=>L("div",{className:c.e("calendar--wrap"),children:[e!=="year"&&m(re,{leftBtnHidden:P!==0,rightBtnHidden:P!==o-1,onLeftClick:D,onRightClick:y,children:m("div",{className:c.e("date-label"),children:B(P)})}),L("div",{className:c.e("date-content"),children:[e==="day"&&m(V,{date:l.add(P,f),renderDay:d=>{const{date:s}=d,R=u&&s.isBetween(u,h||(p!=null&&p.isAfter(u,"day")?p:u),"day","[]"),x=()=>{b(s)},k=s.isSame(u,"day"),S=s.isSame(h,"day"),C=!!h,g=s.isSame(p,"day"),v=N({dateType:"day",date:s,isStartDate:k,isEndDate:S,isHoverDate:g}),I=A({dateType:"day",date:s,isInRange:R,hasEndDate:C,isHoverDate:g,borderColor:"#666"});return m(q,{...d,isInRange:R,isStartDate:k,hasEndDate:C,isHoverDate:g,isEndDate:S,onFocusedDayChange:w,onClick:x,borderRadius:v,sidesBorder:I,innerRadius:"50%"})}}),e==="month"&&m(Z,{date:l.add(P,f),renderMonth:d=>{const{date:s}=d,R=u&&s.isBetween(u,h||(p!=null&&p.isAfter(u,"month")?p:u),"day","[]"),x=()=>{b(s)},k=s.isSame(u,"month"),S=s.isSame(h,"month"),C=!!h,g=s.isSame(p,"month"),v=N({dateType:"month",date:s,isStartDate:k,isEndDate:S,isHoverDate:g}),I=A({dateType:"month",date:s,isInRange:R,hasEndDate:C,isHoverDate:g,borderColor:"#666"});return m(q,{...d,isInRange:R,isStartDate:k,hasEndDate:C,isEndDate:S,isHoverDate:g,onFocusedDayChange:w,onClick:x,borderRadius:v,sidesBorder:I,innerRadius:"1.5rem"})}}),e==="quarter"&&m(te,{date:l.add(P,f),renderQuarter:d=>{const{date:s}=d,R=u&&s.isBetween(u,h||(p!=null&&p.isAfter(u,"quarter")?p:u),"day","[]"),x=()=>{b(s)},k=s.isSame(u,"quarter"),S=s.isSame(h,"quarter"),C=!!h,g=s.isSame(p,"quarter"),v=N({dateType:"quarter",date:s,isStartDate:k,isEndDate:S,isHoverDate:g}),I=A({dateType:"quarter",date:s,isInRange:R,hasEndDate:C,isHoverDate:g,borderColor:"#666"});return m(q,{...d,isInRange:R,isStartDate:k,hasEndDate:C,isEndDate:S,isHoverDate:g,onFocusedDayChange:w,onClick:x,borderRadius:v,sidesBorder:I,innerRadius:"1.5rem"})}}),e==="year"&&m(Q,{date:l,renderYear:d=>{const{date:s}=d,R=u&&s.isBetween(u,h||(p!=null&&p.isAfter(u,"year")?p:u),"day","[]"),x=()=>{b(s)},k=s.isSame(u,"year"),S=s.isSame(h,"year"),C=!!h,g=s.isSame(p,"year"),v=N({dateType:"year",date:s,isStartDate:k,isEndDate:S,isHoverDate:g}),I=A({dateType:"year",date:s,isInRange:R,hasEndDate:C,isHoverDate:g,borderColor:"#666"});return m(q,{...d,isInRange:R,isStartDate:k,hasEndDate:C,isEndDate:S,isHoverDate:g,onFocusedDayChange:w,onClick:x,borderRadius:v,sidesBorder:I,height:56,innerRadius:"1.5rem"})}})]})]},P))})};var O={exports:{}};(function(a,e){(function(n,o){a.exports=o()})(G,function(){return function(n,o,i){o.prototype.isBetween=function(r,t,c,l){var f=i(r),y=i(t),D=(l=l||"()")[0]==="(",B=l[1]===")";return(D?this.isAfter(f,c):!this.isBefore(f,c))&&(B?this.isBefore(y,c):!this.isAfter(y,c))||(D?this.isBefore(f,c):!this.isAfter(f,c))&&(B?this.isAfter(y,c):!this.isBefore(y,c))}}})})(O);const se=O.exports;M.extend(se);const ae=({ref:a,startProps:e,endProps:n,togglePopper:o,...i})=>L("div",{ref:a,style:{display:"inline-flex",alignItems:"center"},onClick:o,...i,children:[m(j,{...e}),m("span",{children:"\u81F3"}),m(j,{...n})]});function _(a){const{label:e,value:n,onChange:o,calendars:i=2,valueFormat:r="YYYY-MM-DD",view:t="day",renderInput:c}=a,l={label:e,startProps:{value:n[0]||""},endProps:{value:n[1]||""},valueFormat:r,inputType:"date",renderInput:c||ae},[f,y]=E.exports.useState(!1),D=()=>{y(b=>!b)},B=E.exports.useMemo(()=>n&&n.length===2?[M(n[0],r),M(n[1],r)]:[null,null],[n,r]),[u]=E.exports.useState("start");return m(W,{showPopper:f,togglePopper:D,inputProps:l,KeyboardDateInputComponent:z,children:m(ne,{view:t,date:B,openDateType:u,calendars:i,onChange:b=>{b.length===2&&o(b.map(p=>p.format(r)))}})})}const he={parameters:{storySource:{source:`import { useState } from 'react';
import DateRangePicker from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Base/DateRangePicker',
  component: DateRangePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template(args) {
  const [value, setValue] = useState('');
  return <DateRangePicker value={value} onChange={(v) => setValue(v)} {...args} />;
}

export const Normal = Template.bind({});
`,locationsMap:{normal:{startLoc:{col:22,line:17},endLoc:{col:39,line:17},startBody:{col:22,line:17},endBody:{col:39,line:17}}}}},title:"Base/DateRangePicker",component:_};function oe(a){const[e,n]=E.exports.useState("");return m(_,{value:e,onChange:o=>n(o),...a})}const ye=oe.bind({}),fe=["Normal"];export{ye as Normal,fe as __namedExportsOrder,he as default};
//# sourceMappingURL=index.stories.2cacc349.js.map
