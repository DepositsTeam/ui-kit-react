import{j as s}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{c as l,B as r}from"./Box-30be3602.js";import{T as j}from"./Text-c3d56319.js";import{P as e}from"./index-58d3fd43.js";const o=({className:m,children:t,ringed:g,alignToTop:b,label:n,value:y,disabled:x,labelClass:d,alignRight:T,checked:a,onChange:i,labelComponent:p,ringSize:q,ringThickness:R,..._})=>{const u=c.useRef();c.useEffect(()=>{u.current.checked=a},[a]);const h=f=>{a===void 0?i&&typeof i=="function"&&i(f):i&&typeof i=="function"&&i(f,!a)},N=l({ringed:g,"ui-radio__wrapper":!0,alignToTop:b,alignRight:T},m);return s.jsxs(r,{is:"label",className:N,style:{"--ring-size":q,"--ring-thickness":R},children:[s.jsx(r,{is:"input",className:l({"ui-radio":!0,hasLabel:n||t}),type:"radio",..._,disabled:x,ref:u,onChange:h,value:y}),t?s.jsx(r,{className:"ui-radio__label-wrap",children:t}):p?s.jsx(r,{className:"ui-radio__label-text",children:p}):s.jsx(j,{className:l({"ui-radio__label-text":!0,[d]:d}),marginY:0,children:n})]})},P=o;o.defaultProps={ringed:!1,alignToTop:!1,ringSize:"16px",ringThickness:"5px"};o.propTypes={ringed:e.bool,alignToTop:e.bool,label:e.string,value:e.string,disabled:e.bool,labelClass:e.string,labelComponent:e.node,alignRight:e.bool,checked:e.bool,onChange:e.func,ringSize:e.string,ringThickness:e.string};o.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{ringed:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},alignToTop:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},ringSize:{defaultValue:{value:'"16px"',computed:!1},type:{name:"string"},required:!1,description:""},ringThickness:{defaultValue:{value:'"5px"',computed:!1},type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},value:{type:{name:"string"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},labelClass:{type:{name:"string"},required:!1,description:""},labelComponent:{type:{name:"node"},required:!1,description:""},alignRight:{type:{name:"bool"},required:!1,description:""},checked:{type:{name:"bool"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""}}};export{P as R};
//# sourceMappingURL=Radio-d2397f34.js.map
