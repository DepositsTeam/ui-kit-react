import{j as l}from"./jsx-runtime-94f6e698.js";import{r as s}from"./index-8db94870.js";import{P as m}from"./index-58d3fd43.js";import{B as w,c as O}from"./Box-d3e51d09.js";import{T as _}from"./TextField-587adf9b.js";import{d as N,i as P}from"./inputPropTypes-f7353463.js";import{T as F}from"./Text-8df15dac.js";const C=s.forwardRef(({label:M,onChange:x,onBlur:R,name:$,options:h,initialValue:b,returnObjModel:j,...T},S)=>{const[r,a]=s.useState(""),[d,n]=s.useState(!1),[u,g]=s.useState([]),[c,i]=s.useState(-1),[t,f]=s.useState(null),[p,k]=s.useState(!0),D=e=>typeof e=="object"?e.text:e;s.useLayoutEffect(()=>{b&&a(b)},[]),s.useEffect(()=>{p||n(!0),t?r!==D(t)&&f(null):g(r?[...h].filter(e=>typeof e=="string"?e.toLowerCase().includes(r.toLowerCase()):e.text.toLowerCase().includes(r.toLowerCase())):[...h])},[h,r,t,p]),s.useEffect(()=>{x&&typeof x=="function"&&x(j?t:t==null?void 0:t.value)},[t]),s.useEffect(()=>{if(p&&!t){let e=!1;for(let o of u)if(typeof o=="string"){if(o.toLowerCase()===r.toLowerCase()){e=!0,a(o),f(o);break}}else if(o.text.toLowerCase()===r.toLowerCase()){e=!0,a(o.text),f(o);break}e||(a(""),f(null))}},[p]);const v=()=>{k(!1),n(!0)},y=async()=>{k(!0),setTimeout(()=>{n(!1)},300)},E=async e=>{e&&(a(typeof e=="string"?e:e.text),f(e),setTimeout(()=>{n(!1)},300))},L=e=>{e.target.closest(".ui-dropdown")||y()},B=async e=>{switch(e.key){case"ArrowDown":d||n(!0),c+1<=u.length-1?i(c+1):i(0);break;case"ArrowUp":d||n(!0),c-1>=0?i(c-1):i(u.length-1);break;case"Enter":E(u[c]);break;case"Escape":y(),e.target.blur();break}};s.useEffect(()=>(window.addEventListener("click",L),()=>{window.removeEventListener("click",L)}),[]);const I=u.map((e,o)=>l.jsxs(w,{className:O({"ui-dropdown__option":!0,active:c===o}),onMouseEnter:()=>i(o),onClick:()=>E(e),children:[typeof e=="object"&&e.icon&&l.jsx(w,{className:"ui-dropdown__icon",children:e.icon}),l.jsx(F,{marginY:0,scale:"subhead",fontFace:"circularSTD",children:typeof e=="string"?e:e.text})]},`option-${o}`));return l.jsxs(w,{className:"ui-dropdown",children:[l.jsx(_,{dropDown:!0,...T,value:r,onKeyDown:B,onFocus:v,onBlur:y,onChange:e=>a(e.target.value),onRightIconClick:()=>n(!d),leftIconComponent:t==null?void 0:t.icon,ref:S}),d&&l.jsx(w,{className:"ui-dropdown__options",children:I})]})}),G=C;C.defaultProps={...N};C.propTypes={...P,options:m.array,returnObjModel:m.bool,onChange:m.func,initialValue:m.string};export{G as D};
//# sourceMappingURL=Dropdown-d0f837e2.js.map
