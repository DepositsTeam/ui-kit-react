import{j as r}from"./jsx-runtime-94f6e698.js";import{r as x}from"./index-8db94870.js";import{T as _}from"./Text-c3d56319.js";import{c as l,B as c}from"./Box-30be3602.js";import{P as e}from"./index-58d3fd43.js";const i=({children:t,label:p,alignToTop:h,dashed:y,disabled:d,labelClass:n,wrapperClass:u,labelComponent:a,className:f,checked:o,onChange:s,size:k,...g})=>{const m=x.useRef();x.useEffect(()=>{m.current.checked=o},[o]);const q=b=>{o===void 0?s&&typeof s=="function"&&s(b):s&&typeof s=="function"&&s(b,!o)},T=l({"ui-checkbox__wrapper":!0,alignToTop:h,dashed:y,disabled:d,[u]:u,[f]:f});return r.jsxs(c,{is:"label",className:T,style:{"--checkbox-size":k},children:[r.jsx(c,{is:"input",className:l({"ui-checkbox":!0,hasLabel:p||a||t}),type:"checkbox",disabled:d,...g,ref:m,onChange:q}),t||a?r.jsx(c,{className:"ui-checkbox__label-wrap",children:a||t}):r.jsx(_,{className:l({"ui-checkbox__label-text":!0,[n]:n}),marginY:0,children:p})]})},z=i;i.defaultProps={alignToTop:!1,disabled:!1,dashed:!1,checked:void 0,size:"16px"};i.propTypes={label:e.string,alignToTop:e.bool,dashed:e.bool,disabled:e.bool,labelClass:e.string,wrapperClass:e.string,labelComponent:e.node,checked:e.bool,onChange:e.func,size:e.string};i.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{alignToTop:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},dashed:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},checked:{defaultValue:{value:"undefined",computed:!0},type:{name:"bool"},required:!1,description:""},size:{defaultValue:{value:'"16px"',computed:!1},type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},labelClass:{type:{name:"string"},required:!1,description:""},wrapperClass:{type:{name:"string"},required:!1,description:""},labelComponent:{type:{name:"node"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""}}};export{z as C};
//# sourceMappingURL=Checkbox-415ed6fa.js.map
