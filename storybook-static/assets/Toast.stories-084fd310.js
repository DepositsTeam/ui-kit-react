import{j as s}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{R as k}from"./index-8ce4a492.js";import{P as g}from"./index-58d3fd43.js";import{B as d,c as j,u as _}from"./Box-aee9185f.js";import{A as b}from"./Alert-dc991c6c.js";import{B}from"./Button-b9964649.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-d05ef909.js";import"./Icon-624e5d5f.js";import"./Check-fb71556a.js";import"./Error-ff3d77f6.js";import"./Warning-0ae99abc.js";import"./Close-87a5e4c0.js";import"./Heading-4579b25a.js";import"./ThemeProvider-9c87a391.js";import"./ChevronFilledDown-7400fa3d.js";const f=u.createContext({}),S=document.getElementsByTagName("body")[0],v=({children:t,...n})=>k.createPortal(t,S),l=({children:t,position:n,...r})=>{const[o,e]=u.useState([]),a=i=>{e(p=>p.filter(P=>P.uuuuid!==i.uuuuid))},m=o.map((i,p)=>s.jsx(b,{...i,closable:!0,onClose:()=>a(i)},`toast-_${p}`)),C={toasts:o,setToasts:e};return s.jsxs(f.Provider,{value:C,children:[t,s.jsx(v,{children:o.length?s.jsx(d,{className:j(["ui-toast__wrapper",`position__${n}`]),children:s.jsx(d,{className:"ui-toast__column",children:m})}):""})]})},y=l;l.propTypes={position:g.oneOf(["top-right","top-left","bottom-left","bottom-right"])};l.defaultProps={position:"top-right"};const D=()=>{const{setToasts:t}=u.useContext(f);return{pushToast:r=>{const o=_(30,8),e={...r,uuuuid:o,autoclose:r.autoclose?r.autoclose:3};t(a=>[...a,e]),setTimeout(()=>{t(a=>a.filter(m=>m.uuuuid!==o))},e.autoclose*1e3)}}},Q={title:"Toast",decorators:[t=>s.jsx(y,{children:s.jsx(t,{})})]},E=t=>{const{pushToast:n}=D(),[r,o]=u.useState(0),e=()=>{o(r+1),n({colorScheme:"info",description:"I am some random text",autoclose:190})};return s.jsx(B,{size:"huge",onClick:e,children:"Push Toast"})},c=E.bind({});var T,h,x;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`props => {
  const {
    pushToast
  } = usePushToast();
  const [timesClicked, setTimesClicked] = useState(0);
  const buttonClicked = () => {
    setTimesClicked(timesClicked + 1);
    pushToast({
      colorScheme: "info",
      description: "I am some random text",
      autoclose: 190
    });
  };
  return <Button size={"huge"} onClick={buttonClicked}>
      Push Toast
    </Button>;
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const U=["Default"];export{c as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Toast.stories-084fd310.js.map
