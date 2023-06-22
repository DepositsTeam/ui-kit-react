import{j as e}from"./jsx-runtime-94f6e698.js";import{r as E}from"./index-8db94870.js";import{P as r}from"./index-58d3fd43.js";/* empty css                  */import{B as a,c as o,D as Ne}from"./Box-30be3602.js";import{T as P}from"./Text-abe69b1c.js";import{i as Ce,d as Ee}from"./inputPropTypes-f7353463.js";import{E as Oe}from"./Error-ff3d77f6.js";import{I as Ae}from"./Icon-1a826c67.js";import{u as ze}from"./useFilePicker.hook-794c241e.js";import{B as Ve}from"./Button-622b4947.js";import{T as ye}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";import"./ChevronFilledDown-7400fa3d.js";const x=({size:n,labelFontFace:xe,labelClass:be,variant:b,label:I,disabled:T,fontFace:Te,btnText:F,placeholder:Me,onChange:qe,onCleared:De,accepts:Ie,errorMessage:Fe,maxFiles:je,fileMaxSize:_e,...j})=>{const M=E.useRef(null),[Se,_]=E.useState(!1),{updateName:S,computedErrorMessage:q,computedAccepts:N,selectedFileName:C}=ze({accepts:Ie,errorMessage:Fe,onChange:qe,onCleared:De,maxFiles:je,fileMaxSize:_e},M);return b==="inline"?e.jsxs(a,{className:o(["ui-text-field__wrapper d-file-picker-inline",`size__${n}`,`variant__${b}`]),children:[!!I&&b!=="button"&&e.jsx(a,{is:"label",children:e.jsx(P,{marginTop:0,scale:"subhead",fontFace:xe,className:o(["ui-text-field__label",be]),children:I})}),e.jsxs(a,{display:"inline-flex",className:`pseudo-input ${T}`,children:[e.jsx(a,{is:"input",ref:M,...j,disabled:T,onChange:S,accept:N,type:"file"}),e.jsx(a,{display:"flex",alignItems:"center",className:o({"ui-text-field__input":!0,"has-error":q}),children:e.jsx(P,{marginY:0,scale:"subhead",fontFace:Te,className:o({placeholder:C===Me}),children:C})}),e.jsx(a,{className:"pseudo-button",children:e.jsx(P,{scale:"subhead",fontFace:"hero-new",marginY:0,children:F})})]}),q&&e.jsxs(a,{className:"ui-text-field__error",children:[e.jsx(Ae,{icon:Oe,className:"ui-text-area__error-icon"}),e.jsx(P,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:q})]})]}):e.jsxs(a,{className:"ui-text-field__wrapper d-file-picker-inline-btn",children:[e.jsx(a,{is:"input",ref:M,disabled:T,onChange:S,accept:N,onMouseEnter:()=>_(!0),onMouseLeave:()=>_(!1),type:"file"}),e.jsx(Ve,{className:o({hover:Se}),...j,children:F})]})},D=x;x.propTypes={...Ce,placeholder:r.string,btnText:r.string,fileMaxSize:r.oneOfType([r.number,r.string]),accepts:r.oneOfType([r.array,r.oneOf(["image","document","csv"])]),variant:r.oneOf(["inline","button"]),onChange:r.func,onCleared:r.func};x.defaultProps={...Ee,placeholder:"No file selected...",btnText:"Choose File",fileMaxSize:100,accepts:[".csv",".xls",".xlsx",".pdf"],variant:"inline"};x.__docgenInfo={description:"",methods:[],displayName:"FilePickerInline",props:{size:{defaultValue:{value:'"huge"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"xlarge"',computed:!1},{value:'"huge"',computed:!1},{value:'"massive"',computed:!1}]},required:!1,description:""},placeholder:{defaultValue:{value:'"No file selected..."',computed:!1},type:{name:"string"},required:!1,description:""},btnText:{defaultValue:{value:'"Choose File"',computed:!1},type:{name:"string"},required:!1,description:""},fileMaxSize:{defaultValue:{value:"100",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},accepts:{defaultValue:{value:'[".csv", ".xls", ".xlsx", ".pdf"]',computed:!1},type:{name:"union",value:[{name:"array"},{name:"enum",value:[{value:'"image"',computed:!1},{value:'"document"',computed:!1},{value:'"csv"',computed:!1}]}]},required:!1,description:""},variant:{defaultValue:{value:'"inline"',computed:!1},type:{name:"enum",value:[{value:'"inline"',computed:!1},{value:'"button"',computed:!1}]},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},fontFace:{type:{name:"string"},required:!1,description:""},errorMessage:{type:{name:"string"},required:!1,description:""},showError:{type:{name:"bool"},required:!1,description:""},modelValue:{type:{name:"string"},required:!1,description:""},onlyNumbers:{type:{name:"bool"},required:!1,description:""},wrapperClass:{type:{name:"string"},required:!1,description:""},invisible:{type:{name:"bool"},required:!1,description:""},labelClass:{type:{name:"enum",value:[{value:"String",computed:!0},{value:"Object",computed:!0},{value:"Array",computed:!0}]},required:!1,description:""},leftIcon:{type:{name:"object"},required:!1,description:""},rightIcon:{type:{name:"object"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},labelFontFace:{type:{name:"string"},required:!1,description:""},autocomplete:{type:{name:"string"},required:!1,description:""},form:{type:{name:"string"},required:!1,description:""},list:{type:{name:"string"},required:!1,description:""},minlength:{type:{name:"string"},required:!1,description:""},max:{type:{name:"string"},required:!1,description:""},min:{type:{name:"string"},required:!1,description:""},multiple:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},pattern:{type:{name:"string"},required:!1,description:""},required:{type:{name:"bool"},required:!1,description:""},step:{type:{name:"string"},required:!1,description:""},autofocus:{type:{name:"string"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""},onCleared:{type:{name:"func"},required:!1,description:""}}};const Ze={title:"Forms/File Picker (Inline)",component:D,argTypes:{}},s=n=>e.jsx(ye,{children:e.jsx(D,{...n})}),i=n=>e.jsx(ye,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(Ne,{darkMode:!0,children:e.jsx(D,{...n})})})}),k=s.bind({}),t=s.bind({});t.args={variant:"button",btnText:"+ Upload front of driver's license"};const d=s.bind({});d.args={errorMessage:"This is a random error"};const c=s.bind({});c.args={fileMaxSize:1};const l=s.bind({});l.args={accepts:"image"};const m=s.bind({});m.args={accepts:"document"};const p=s.bind({});p.args={accepts:"csv"};const y=i.bind({}),u=i.bind({});u.args={errorMessage:"This is a random error"};const f=i.bind({});f.args={fileMaxSize:1};const g=i.bind({});g.args={accepts:"image"};const v=i.bind({});v.args={accepts:"document"};const h=i.bind({});h.args={accepts:"csv"};var O,A,z;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(z=(A=k.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var V,$,B;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(B=($=t.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var w,H,R;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(R=(H=d.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var Y,L,U;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var G,J,K;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(K=(J=l.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(X=(W=m.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePickerInline {...args} />
  </ThemeProvider>`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,ie;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ie=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ne,oe,te;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(te=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var de,ce,le;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(le=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var me,pe,ue;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ue=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var fe,ge,ve;v.parameters={...v.parameters,docs:{...(fe=v.parameters)==null?void 0:fe.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ve=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:ve.source}}};var he,Pe,ke;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePickerInline {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ke=(Pe=h.parameters)==null?void 0:Pe.docs)==null?void 0:ke.source}}};const er=["Default","Button","Error","OneMb","Image","Document","Csv","DarkMode","ErrorDark","OneMbDark","ImageDark","DocumentDark","CsvDark"];export{t as Button,p as Csv,h as CsvDark,y as DarkMode,k as Default,m as Document,v as DocumentDark,d as Error,u as ErrorDark,l as Image,g as ImageDark,c as OneMb,f as OneMbDark,er as __namedExportsOrder,Ze as default};
//# sourceMappingURL=FilePickerInline.stories-177b90fa.js.map
