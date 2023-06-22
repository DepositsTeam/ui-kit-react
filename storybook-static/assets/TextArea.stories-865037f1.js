import{j as e}from"./jsx-runtime-94f6e698.js";import{r as G}from"./index-8db94870.js";import{c as x,B as n,D as J}from"./Box-30be3602.js";import{T as b}from"./Text-abe69b1c.js";import{P as h}from"./index-58d3fd43.js";import{I as K}from"./Icon-1a826c67.js";import{E as Q}from"./Error-ff3d77f6.js";import{T as w}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";const i=G.forwardRef(({label:r,errorMessage:c,textAreaClassName:q,className:B,isHookForm:U,onChange:C,onBlur:R,name:V,...$},H)=>{const O=x({"ui-text-area__textarea":!0,"has-error":c},q),z=x(["ui-text-area__wrapper"],B);return e.jsxs(n,{children:[e.jsx(n,{is:"label",className:z,children:e.jsx(b,{scale:"subhead",className:"ui-text-area__label",children:r})}),e.jsx(n,{className:O,is:"textarea",...$,ref:H,onChange:C,onBlur:R,name:V}),c&&e.jsxs(n,{className:"ui-text-area__error",children:[e.jsx(K,{icon:Q,className:"ui-text-area__error-icon"}),e.jsx(b,{className:"ui-text-area__error-text",scale:"footnote",fontFace:"circularSTD",children:c})]})]})}),p=i;i.propTypes={label:h.string,disabled:h.bool};i.defaultProps={label:"Form Label",disabled:!1};i.__docgenInfo={description:"",methods:[],displayName:"TextArea",props:{label:{defaultValue:{value:'"Form Label"',computed:!1},type:{name:"string"},required:!1,description:""},disabled:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""}}};const de={title:"Forms/Text Area",component:p},m=r=>e.jsx(w,{children:e.jsx(p,{...r})}),u=r=>e.jsx(w,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(J,{darkMode:!0,children:e.jsx(p,{...r})})})}),a=m.bind({});a.args={label:"Form Label",placeholder:"Input placeholder"};const o=m.bind({});o.args={label:"Form Label",placeholder:"Input placeholder",disabled:!0};const s=m.bind({});s.args={label:"Form Label",placeholder:"Input placeholder",errorMessage:"Error message"};const d=u.bind({});d.args={label:"Form Label",placeholder:"Input placeholder"};const t=u.bind({});t.args={label:"Form Label",placeholder:"Input placeholder",disabled:!0};const l=u.bind({});l.args={label:"Form Label",placeholder:"Input placeholder",errorMessage:"Error message"};var T,g,v;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`props => <ThemeProvider>
    <TextArea {...props} />
  </ThemeProvider>`,...(v=(g=a.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,D,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`props => <ThemeProvider>
    <TextArea {...props} />
  </ThemeProvider>`,...(k=(D=o.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var P,M,_;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`props => <ThemeProvider>
    <TextArea {...props} />
  </ThemeProvider>`,...(_=(M=s.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var A,j,E;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TextArea {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var F,y,I;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TextArea {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(I=(y=t.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var L,N,S;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TextArea {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(S=(N=l.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const te=["Default","Disabled","Error","DarkModeDefault","DarkModeDisabled","DarkModeError"];export{d as DarkModeDefault,t as DarkModeDisabled,l as DarkModeError,a as Default,o as Disabled,s as Error,te as __namedExportsOrder,de as default};
//# sourceMappingURL=TextArea.stories-865037f1.js.map
