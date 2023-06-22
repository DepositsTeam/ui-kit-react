import{j as e}from"./jsx-runtime-94f6e698.js";import{r as c}from"./index-8db94870.js";import{R as P}from"./index-8ce4a492.js";import{P as v}from"./index-58d3fd43.js";import{B as d,c as _,u as b}from"./Box-30be3602.js";import{A as k}from"./Alert-78af6f29.js";import{B as j}from"./Button-622b4947.js";import"./_commonjsHelpers-042e6b4d.js";import"./Text-abe69b1c.js";import"./Icon-1a826c67.js";import"./Check-fb71556a.js";import"./Error-ff3d77f6.js";import"./Warning-0ae99abc.js";import"./Close-87a5e4c0.js";import"./Heading-4e2442f4.js";import"./ThemeProvider-6ae8e1ed.js";import"./ChevronFilledDown-7400fa3d.js";const x=c.createContext({}),y=document.getElementsByTagName("body")[0],B=({children:t,...a})=>P.createPortal(t,y),p=({children:t,position:a,...r})=>{const[o,s]=c.useState([]),n=i=>{s(l=>l.filter(g=>g.uuuuid!==i.uuuuid))},m=o.map((i,l)=>e.jsx(k,{...i,closable:!0,onClose:()=>n(i)},`toast-_${l}`)),C={toasts:o,setToasts:s};return e.jsxs(x.Provider,{value:C,children:[t,e.jsx(B,{children:o.length?e.jsx(d,{className:_(["ui-toast__wrapper",`position__${a}`]),children:e.jsx(d,{className:"ui-toast__column",children:m})}):""})]})},S=p;p.propTypes={position:v.oneOf(["top-right","top-left","bottom-left","bottom-right"])};p.defaultProps={position:"top-right"};p.__docgenInfo={description:"",methods:[],displayName:"ToastProvider",props:{position:{defaultValue:{value:'"top-right"',computed:!1},type:{name:"enum",value:[{value:'"top-right"',computed:!1},{value:'"top-left"',computed:!1},{value:'"bottom-left"',computed:!1},{value:'"bottom-right"',computed:!1}]},required:!1,description:""}}};const D=()=>{const{setToasts:t}=c.useContext(x);return{pushToast:r=>{const o=b(30,8),s={...r,uuuuid:o,autoclose:r.autoclose?r.autoclose:3};t(n=>[...n,s]),setTimeout(()=>{t(n=>n.filter(m=>m.uuuuid!==o))},s.autoclose*1e3)}}},Q={title:"Toast",decorators:[t=>e.jsx(S,{children:e.jsx(t,{})})]},N=t=>{const{pushToast:a}=D(),[r,o]=c.useState(0),s=()=>{o(r+1),a({colorScheme:"info",description:"I am some random text",autoclose:190})};return e.jsx(j,{size:"huge",onClick:s,children:"Push Toast"})},u=N.bind({});var T,f,h;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`props => {
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
}`,...(h=(f=u.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const U=["Default"];export{u as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=Toast.stories-5bcda4f4.js.map
