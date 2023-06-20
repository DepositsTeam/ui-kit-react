import{j as e}from"./jsx-runtime-94f6e698.js";import{r as J}from"./index-8db94870.js";import{c as x,B as n,D as K}from"./Box-aee9185f.js";import{T as b}from"./Text-d05ef909.js";import{P as h}from"./index-58d3fd43.js";import{I as Q}from"./Icon-624e5d5f.js";import{E as U}from"./Error-ff3d77f6.js";import{T as w}from"./ThemeProvider-9c87a391.js";import"./_commonjsHelpers-042e6b4d.js";const i=J.forwardRef(({label:r,errorMessage:c,textAreaClassName:B,className:C,isHookForm:V,onChange:R,onBlur:$,name:H,...O},q)=>{const z=x({"ui-text-area__textarea":!0,"has-error":c},B),G=x(["ui-text-area__wrapper"],C);return e.jsxs(n,{children:[e.jsx(n,{is:"label",className:G,children:e.jsx(b,{scale:"subhead",className:"ui-text-area__label",children:r})}),e.jsx(n,{className:z,is:"textarea",...O,ref:q,onChange:R,onBlur:$,name:H}),c&&e.jsxs(n,{className:"ui-text-area__error",children:[e.jsx(Q,{icon:U,className:"ui-text-area__error-icon"}),e.jsx(b,{className:"ui-text-area__error-text",scale:"footnote",fontFace:"circularSTD",children:c})]})]})}),p=i;i.propTypes={label:h.string,disabled:h.bool};i.defaultProps={label:"Form Label",disabled:!1};const de={title:"Forms/Text Area",component:p},m=r=>e.jsx(w,{children:e.jsx(p,{...r})}),u=r=>e.jsx(w,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(K,{darkMode:!0,children:e.jsx(p,{...r})})})}),a=m.bind({});a.args={label:"Form Label",placeholder:"Input placeholder"};const o=m.bind({});o.args={label:"Form Label",placeholder:"Input placeholder",disabled:!0};const s=m.bind({});s.args={label:"Form Label",placeholder:"Input placeholder",errorMessage:"Error message"};const d=u.bind({});d.args={label:"Form Label",placeholder:"Input placeholder"};const t=u.bind({});t.args={label:"Form Label",placeholder:"Input placeholder",disabled:!0};const l=u.bind({});l.args={label:"Form Label",placeholder:"Input placeholder",errorMessage:"Error message"};var T,g,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`props => <ThemeProvider>
    <TextArea {...props} />
  </ThemeProvider>`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var D,k,P;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`props => <ThemeProvider>
    <TextArea {...props} />
  </ThemeProvider>`,...(P=(k=o.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var f,M,j;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`props => <ThemeProvider>
    <TextArea {...props} />
  </ThemeProvider>`,...(j=(M=s.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var A,_,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TextArea {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var F,I,L;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TextArea {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(L=(I=t.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var N,S,y;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TextArea {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const te=["Default","Disabled","Error","DarkModeDefault","DarkModeDisabled","DarkModeError"];export{d as DarkModeDefault,t as DarkModeDisabled,l as DarkModeError,a as Default,o as Disabled,s as Error,te as __namedExportsOrder,de as default};
//# sourceMappingURL=TextArea.stories-fae0103a.js.map
