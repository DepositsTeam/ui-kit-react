import{j as e}from"./jsx-runtime-94f6e698.js";import{r as k}from"./index-8db94870.js";import{M as h}from"./Modal-f18a0a67.js";import{T as r}from"./TextField-587adf9b.js";import{B as o}from"./Button-bd2f6f73.js";import{T as y}from"./ThemeProvider-ea1cf884.js";import{D as P}from"./Box-d3e51d09.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-58d3fd43.js";import"./Icon-91fc37b3.js";import"./Close-87a5e4c0.js";import"./Heading-8f8132bf.js";import"./index-8ce4a492.js";/* empty css                  */import"./Text-8df15dac.js";import"./ChevronFilledDown-7400fa3d.js";import"./Error-ff3d77f6.js";import"./inputPropTypes-f7353463.js";import"./allowOnlyNumbers-19f3dc0d.js";import"./number_format-5b1a9256.js";const X={title:"Modal",component:h},F=({children:d,...i})=>{const[c,s]=k.useState(!1),m=()=>s(!1);return e.jsx(e.Fragment,{children:e.jsxs(y,{children:[e.jsx(h,{show:c,requestClose:m,...i,children:d}),e.jsx(o,{onClick:()=>{s(!0)},children:"Toggle Modal"})]})})},B=({children:d,...i})=>{const[c,s]=k.useState(!1),m=()=>s(!1);return e.jsx(e.Fragment,{children:e.jsx(y,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsxs(P,{darkMode:!0,children:[e.jsx(h,{show:c,requestClose:m,...i,children:d}),e.jsx(o,{onClick:()=>{s(!0)},children:"Toggle Modal"})]})})})})},n=F.bind({});n.args={heading:"Title",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{width:"900px",label:"Form label"}),e.jsx(r,{label:"Form label"}),e.jsx(r,{label:"Form label"}),e.jsx(o,{responsive:!0,size:"huge",marginTop:"2rem",colorScheme:"primary",children:"Primary Button"})]})};const a=F.bind({});a.args={heading:"Title",greyContent:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Form label"}),e.jsx(r,{label:"Form label"}),e.jsx(r,{label:"Form label"}),e.jsx(o,{marginTop:"2rem",responsive:!0,size:"huge",colorScheme:"primary",children:"Primary Button"})]})};const t=B.bind({});t.args={heading:"Title",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{width:"900px",label:"Form label"}),e.jsx(r,{label:"Form label"}),e.jsx(r,{label:"Form label"}),e.jsx(o,{responsive:!0,size:"huge",marginTop:"2rem",colorScheme:"primary",children:"Primary Button"})]})};const l=B.bind({});l.args={heading:"Title",greyContent:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{label:"Form label"}),e.jsx(r,{label:"Form label"}),e.jsx(r,{label:"Form label"}),e.jsx(o,{marginTop:"2rem",responsive:!0,size:"huge",colorScheme:"primary",children:"Primary Button"})]})};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  return <>
      <ThemeProvider>
        <Modal show={show} requestClose={closeModal} {...args}>
          {children}
        </Modal>
        <Button onClick={() => {
        setShow(true);
      }}>
          Toggle Modal
        </Button>
      </ThemeProvider>
    </>;
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var M,x,j;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  return <>
      <ThemeProvider>
        <Modal show={show} requestClose={closeModal} {...args}>
          {children}
        </Modal>
        <Button onClick={() => {
        setShow(true);
      }}>
          Toggle Modal
        </Button>
      </ThemeProvider>
    </>;
}`,...(j=(x=a.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,w,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  return <>
      <ThemeProvider>
        <div style={{
        padding: "3em",
        background: "#121A26"
      }}>
          <DarkModeProvider darkMode={true}>
            <Modal show={show} requestClose={closeModal} {...args}>
              {children}
            </Modal>
            <Button onClick={() => {
            setShow(true);
          }}>
              Toggle Modal
            </Button>
          </DarkModeProvider>
        </div>
      </ThemeProvider>
    </>;
}`,...(S=(w=t.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var T,f,v;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`({
  children,
  ...args
}) => {
  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);
  return <>
      <ThemeProvider>
        <div style={{
        padding: "3em",
        background: "#121A26"
      }}>
          <DarkModeProvider darkMode={true}>
            <Modal show={show} requestClose={closeModal} {...args}>
              {children}
            </Modal>
            <Button onClick={() => {
            setShow(true);
          }}>
              Toggle Modal
            </Button>
          </DarkModeProvider>
        </div>
      </ThemeProvider>
    </>;
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Y=["Default","GreyBody","DarkModeDefault","DarkModeGreyBody"];export{t as DarkModeDefault,l as DarkModeGreyBody,n as Default,a as GreyBody,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Modals.stories-51dd29cb.js.map
