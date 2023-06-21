import{j as e}from"./jsx-runtime-94f6e698.js";import{r as we}from"./index-8db94870.js";import{P as r}from"./index-58d3fd43.js";import{B as s,c as F,D as Ne}from"./Box-30be3602.js";import{T as P}from"./Text-c3d56319.js";import{A as _e}from"./AutoLayout-7fd52157.js";import{C as qe}from"./Close-87a5e4c0.js";import{E as Ae}from"./Error-ff3d77f6.js";import{u as Ee}from"./useFilePicker.hook-794c241e.js";import{I as A}from"./Icon-1a826c67.js";import{H as Ie}from"./Heading-4e2442f4.js";import{T as Pe}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";const D=({fill:o,smartColor:n,props:a})=>e.jsx(e.Fragment,{children:e.jsx("path",{d:"M23.441 21.9149H17V15.4149H19.127C19.2495 15.4149 19.3695 15.381 19.4739 15.3171C19.5783 15.2532 19.663 15.1617 19.7188 15.0527C19.7745 14.9437 19.7991 14.8215 19.7898 14.6994C19.7805 14.5773 19.7376 14.4602 19.666 14.3609L15.533 8.63593C15.4721 8.55048 15.3916 8.48083 15.2983 8.43276C15.205 8.3847 15.1015 8.35962 14.9965 8.35962C14.8916 8.35962 14.7881 8.3847 14.6948 8.43276C14.6015 8.48083 14.521 8.55048 14.46 8.63593L10.322 14.3609C10.2501 14.4601 10.2069 14.5773 10.1974 14.6995C10.1879 14.8217 10.2125 14.9441 10.2683 15.0533C10.3241 15.1624 10.409 15.2539 10.5136 15.3178C10.6182 15.3816 10.7385 15.4152 10.861 15.4149H12.988V21.9149H5.78104C4.18875 21.7496 2.71493 20.9978 1.64638 19.8057C0.577829 18.6137 -0.00901646 17.0668 4.22965e-05 15.4659C0.00039384 14.3993 0.280118 13.3513 0.81137 12.4264C1.34262 11.5014 2.10687 10.7317 3.02804 10.1939C2.86008 9.73667 2.77508 9.25308 2.77704 8.76594C2.77652 8.22002 2.88366 7.67935 3.09233 7.17488C3.301 6.67042 3.60711 6.21205 3.99313 5.82603C4.37916 5.44 4.83752 5.1339 5.34199 4.92523C5.84645 4.71655 6.38712 4.60942 6.93304 4.60994C7.41819 4.6085 7.89971 4.6935 8.35504 4.86094C9.13143 3.21198 10.4278 1.86358 12.045 1.02294C13.6621 0.182295 15.5106 -0.104078 17.3063 0.207834C19.102 0.519746 20.7456 1.41268 21.9845 2.74942C23.2235 4.08616 23.9892 5.79275 24.164 7.60694C25.8702 7.9438 27.3981 8.88374 28.4681 10.2548C29.538 11.6258 30.0786 13.3362 29.9908 15.0732C29.903 16.8101 29.1928 18.4573 27.9901 19.7135C26.7873 20.9697 25.1725 21.7508 23.441 21.9139V21.9149Z",fill:n||o})}),Le={component:D,viewBox:"0 0 30 22",fill:"none"};D.propTypes={fill:r.string,stroke:r.string,strokeWidth:r.string,strokeLineCap:r.string,strokeLineJoin:r.string,smartColor:r.string};D.defaultProps={stroke:"black",strokeWidth:"1.5",strokeLineCap:"round",strokeLineJoin:"round"};const y=({label:o,disabled:n,labelClass:a,accepts:be,errorMessage:Te,onChange:ye,onCleared:Ce,maxFiles:Fe,fileMaxSize:De,children:j,btnText:Oe,title:S,primaryColorScheme:w,description:N,...Me})=>{const _=we.useRef(null),{emptyFile:je,updateName:Se,computedErrorMessage:q,computedAccepts:C,selectedFileName:k}=Ee({accepts:be,errorMessage:Te,onChange:ye,onCleared:Ce,maxFiles:Fe,fileMaxSize:De},_);return e.jsxs(s,{className:"ui-file-picker-box__wrapper",children:[o&&e.jsx(s,{is:"label",children:e.jsx(P,{marginTop:"0px",className:F({labelClass:a},"ui-text-field__label"),scale:"subhead",fontFace:"labelFontFace",children:o})}),e.jsxs(s,{className:F({"ui-file-picker-box":!0,primaryColorScheme:w}),children:[e.jsx(s,{type:"file",className:"ui-file-picker-input",is:"input",ref:_,...Me,disabled:n,onChange:Se,accept:C}),k&&e.jsx(s,{className:"close-btn",onClick:je,children:e.jsx(A,{icon:qe})}),e.jsx(s,{className:F({"file-picker__icon-wrapper":!0,primaryColorScheme:w}),children:e.jsx(A,{height:"32px",width:"32px",icon:Le})}),k?"":j||e.jsxs(_e,{className:"placeholder",marginTop:"16px",alignment:"center",direction:"vertical",children:[S&&e.jsx(Ie,{center:!0,marginTop:"0px",scale:"h5",color:"#1B1E21",fontFace:"circularSTD",children:S}),N||e.jsxs(e.Fragment,{children:[e.jsxs(P,{center:!0,marginY:"0",fontFace:"circularSTD",children:["Drag & Drop to upload or"," ",e.jsx(s,{is:"span",className:"blue",children:"browse"})," ","to choose files"]}),e.jsxs(P,{center:!0,marginY:"0",fontFace:"circularSTD",children:[C?e.jsxs(s,{is:"span",children:["Supported file types (",C,")."]}):e.jsx(s,{is:"span",children:"("}),"Max upload size: (MB)"]})]})]}),k&&e.jsx(P,{fontFace:"circularSTD",marginTop:"16px",children:k})]}),q&&e.jsxs(s,{className:"ui-text-field__error",children:[e.jsx(Ae,{className:"ui-text-field__error-icon"}),e.jsx(s,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:q})]})]})},M=y;y.propTypes={btnText:r.string,fileMaxSize:r.oneOfType([r.number,r.string]),accepts:(o,n)=>{const a=o[n];if(typeof a=="string"||Array.isArray(a)){if(typeof a=="string"){if(a==="image"&&a==="document"&&a==="csv")throw new Error("The only allowed string values for `accepts` are: 'image', 'document' and 'csv")}else if([...new Set(a)].length!==a.length)throw new Error("`accepts` prop can only accept an array of unique mimetypes")}else throw new Error("`accepts` prop must be either a string or an array")},label:r.string,errorMessage:r.string,disabled:r.bool,labelFontFace:r.string,labelClass:r.string,maxFiles:r.oneOfType([r.number,r.string]),title:r.string,primaryColorScheme:r.bool,description:r.string};y.defaultProps={btnText:"Choose File",fileMaxSize:100,maxFiles:1,accepts:[".csv",".xls",".xlsx",".pdf"]};y.__docgenInfo={description:"",methods:[],displayName:"FilePicker",props:{btnText:{defaultValue:{value:'"Choose File"',computed:!1},type:{name:"string"},required:!1,description:""},fileMaxSize:{defaultValue:{value:"100",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},maxFiles:{defaultValue:{value:"1",computed:!1},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},accepts:{defaultValue:{value:'[".csv", ".xls", ".xlsx", ".pdf"]',computed:!1},type:{name:"custom",raw:`(props, propName) => {
  const value = props[propName];
  if (typeof value === "string" || Array.isArray(value)) {
    if (typeof value === "string") {
      if (value === "image" && value === "document" && value === "csv") {
        throw new Error(
          "The only allowed string values for \`accepts\` are: 'image', 'document' and 'csv"
        );
      }
    } else {
      if ([...new Set(value)].length !== value.length) {
        throw new Error(
          "\`accepts\` prop can only accept an array of unique mimetypes"
        );
      }
    }
  } else {
    throw new Error("\`accepts\` prop must be either a string or an array");
  }
}`},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},errorMessage:{type:{name:"string"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},labelFontFace:{type:{name:"string"},required:!1,description:""},labelClass:{type:{name:"string"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""},primaryColorScheme:{type:{name:"bool"},required:!1,description:""},description:{type:{name:"string"},required:!1,description:""}}};const Qe={title:"Forms/File Picker",component:M,argTypes:{}},i=o=>e.jsx(Pe,{children:e.jsx(M,{...o})}),x=o=>e.jsx(Pe,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(Ne,{darkMode:!0,children:e.jsx(M,{...o})})})}),b=i.bind({}),t=i.bind({});t.args={title:"Upload beneficiary list"};const c=i.bind({});c.args={title:"Upload beneficiary list",primaryColorScheme:!0};const d=i.bind({});d.args={fileMaxSize:1};const l=i.bind({});l.args={accepts:"image"};const p=i.bind({});p.args={accepts:"document"};const m=i.bind({});m.args={accepts:"csv"};const u=i.bind({});u.args={label:"Upload a file"};const T=x.bind({}),g=x.bind({});g.args={fileMaxSize:1};const f=x.bind({});f.args={accepts:"image"};const h=x.bind({});h.args={accepts:"document"};const v=x.bind({});v.args={accepts:"csv"};var E,I,L;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>`,...(L=(I=b.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var O,V,z;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>`,...(z=(V=t.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var H,B,U;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>`,...(U=(B=c.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var W,$,J;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>`,...(J=($=d.parameters)==null?void 0:$.docs)==null?void 0:J.source}}};var R,Y,Z;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var G,K,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,ee,re;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>`,...(re=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,oe;u.parameters={...u.parameters,docs:{...(ae=u.parameters)==null?void 0:ae.docs,source:{originalSource:`args => <ThemeProvider>
    <FilePicker {...args} />
  </ThemeProvider>`,...(oe=(se=u.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ne,te;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePicker {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(te=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};var ce,de,le;g.parameters={...g.parameters,docs:{...(ce=g.parameters)==null?void 0:ce.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePicker {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(le=(de=g.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var pe,me,ue;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePicker {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ue=(me=f.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ge,fe,he;h.parameters={...h.parameters,docs:{...(ge=h.parameters)==null?void 0:ge.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePicker {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(he=(fe=h.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ve,xe,ke;v.parameters={...v.parameters,docs:{...(ve=v.parameters)==null?void 0:ve.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <FilePicker {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ke=(xe=v.parameters)==null?void 0:xe.docs)==null?void 0:ke.source}}};const Xe=["Default","Title","Primary","OneMb","Image","Document","Csv","WithLabel","DarkMode","OneMbDark","ImageDark","DocumentDark","CsvDark"];export{m as Csv,v as CsvDark,T as DarkMode,b as Default,p as Document,h as DocumentDark,l as Image,f as ImageDark,d as OneMb,g as OneMbDark,c as Primary,t as Title,u as WithLabel,Xe as __namedExportsOrder,Qe as default};
//# sourceMappingURL=FilePicker.stories-b18f182f.js.map
