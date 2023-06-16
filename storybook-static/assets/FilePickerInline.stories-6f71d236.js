import{j as e}from"./jsx-runtime-94f6e698.js";import{r as O}from"./index-8db94870.js";import{P as r}from"./index-58d3fd43.js";/* empty css                  */import{B as s,c as i,D as Ee}from"./Box-d3e51d09.js";import{T as h}from"./Text-8df15dac.js";import{i as Ce,d as Oe}from"./inputPropTypes-f7353463.js";import{E as Ae}from"./Error-ff3d77f6.js";import{I as $e}from"./Icon-91fc37b3.js";import{u as Be}from"./useFilePicker.hook-794c241e.js";import{B as ze}from"./Button-bd2f6f73.js";import{T as xe}from"./ThemeProvider-ea1cf884.js";import"./_commonjsHelpers-042e6b4d.js";import"./ChevronFilledDown-7400fa3d.js";const I=({size:n,labelFontFace:Te,labelClass:Me,variant:T,label:j,disabled:M,fontFace:be,btnText:_,placeholder:De,onChange:Ie,onCleared:Fe,accepts:je,errorMessage:_e,maxFiles:Se,fileMaxSize:ye,...S})=>{const b=O.useRef(null),[Ne,y]=O.useState(!1),{updateName:N,computedErrorMessage:D,computedAccepts:E,selectedFileName:C}=Be({accepts:je,errorMessage:_e,onChange:Ie,onCleared:Fe,maxFiles:Se,fileMaxSize:ye},b);return T==="inline"?e.jsxs(s,{className:i(["ui-text-field__wrapper d-file-picker-inline",`size__${n}`,`variant__${T}`]),children:[!!j&&T!=="button"&&e.jsx(s,{is:"label",children:e.jsx(h,{marginTop:0,scale:"subhead",fontFace:Te,className:i(["ui-text-field__label",Me]),children:j})}),e.jsxs(s,{display:"inline-flex",className:`pseudo-input ${M}`,children:[e.jsx(s,{is:"input",ref:b,...S,disabled:M,onChange:N,accept:E,type:"file"}),e.jsx(s,{display:"flex",alignItems:"center",className:i({"ui-text-field__input":!0,"has-error":D}),children:e.jsx(h,{marginY:0,scale:"subhead",fontFace:be,className:i({placeholder:C===De}),children:C})}),e.jsx(s,{className:"pseudo-button",children:e.jsx(h,{scale:"subhead",fontFace:"hero-new",marginY:0,children:_})})]}),D&&e.jsxs(s,{className:"ui-text-field__error",children:[e.jsx($e,{icon:Ae,className:"ui-text-area__error-icon"}),e.jsx(h,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:D})]})]}):e.jsxs(s,{className:"ui-text-field__wrapper d-file-picker-inline-btn",children:[e.jsx(s,{is:"input",ref:b,disabled:M,onChange:N,accept:E,onMouseEnter:()=>y(!0),onMouseLeave:()=>y(!1),type:"file"}),e.jsx(ze,{className:i({hover:Ne}),...S,children:_})]})},F=I;I.propTypes={...Ce,placeholder:r.string,btnText:r.string,fileMaxSize:r.oneOfType([r.number,r.string]),accepts:r.oneOfType([r.array,r.oneOf(["image","document","csv"])]),variant:r.oneOf(["inline","button"]),onChange:r.func,onCleared:r.func};I.defaultProps={...Oe,placeholder:"No file selected...",btnText:"Choose File",fileMaxSize:100,accepts:[".csv",".xls",".xlsx",".pdf"],variant:"inline"};const Ze={title:"Forms/File Picker (Inline)",component:F,argTypes:{}},a=n=>e.jsx(xe,{children:e.jsx(F,{...n})}),o=n=>e.jsx(xe,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(Ee,{darkMode:!0,children:e.jsx(F,{...n})})})}),f=a.bind({}),c=a.bind({});c.args={variant:"button",btnText:"+ Upload front of driver's license"};const d=a.bind({});d.args={errorMessage:"This is a random error"};const t=a.bind({});t.args={fileMaxSize:1};const m=a.bind({});m.args={accepts:"image"};const l=a.bind({});l.args={accepts:"document"};const p=a.bind({});p.args={accepts:"csv"};const x=o.bind({}),u=o.bind({});u.args={errorMessage:"This is a random error"};const g=o.bind({});g.args={fileMaxSize:1};const v=o.bind({});v.args={accepts:"image"};const P=o.bind({});P.args={accepts:"document"};const k=o.bind({});k.args={accepts:"csv"};var A,$,B;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(B=($=f.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var z,w,H;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(H=(w=c.parameters)==null?void 0:w.docs)==null?void 0:H.source}}};var R,Y,L;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(L=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var U,q,G;t.parameters={...t.parameters,docs:{...(U=t.parameters)==null?void 0:U.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(G=(q=t.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var V,W,X;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(X=(W=l.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,ae,oe;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(oe=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,ie,ce;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ce=(ie=u.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var de,te,me;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(me=(te=g.parameters)==null?void 0:te.docs)==null?void 0:me.source}}};var le,pe,ue;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ue=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,ve,Pe;P.parameters={...P.parameters,docs:{...(ge=P.parameters)==null?void 0:ge.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Pe=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:Pe.source}}};var ke,he,fe;k.parameters={...k.parameters,docs:{...(ke=k.parameters)==null?void 0:ke.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(fe=(he=k.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};const er=["Default","Button","Error","OneMb","Image","Document","Csv","DarkMode","ErrorDark","OneMbDark","ImageDark","DocumentDark","CsvDark"];export{c as Button,p as Csv,k as CsvDark,x as DarkMode,f as Default,l as Document,P as DocumentDark,d as Error,u as ErrorDark,m as Image,v as ImageDark,t as OneMb,g as OneMbDark,er as __namedExportsOrder,Ze as default};
//# sourceMappingURL=FilePickerInline.stories-6f71d236.js.map
