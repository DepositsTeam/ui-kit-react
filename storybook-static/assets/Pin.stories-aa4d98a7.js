import{j as e}from"./jsx-runtime-94f6e698.js";import{r as h}from"./index-8db94870.js";import{P as i}from"./index-58d3fd43.js";import{u as _e,B as P,c as N,D as ge}from"./Box-30be3602.js";import{i as Se,d as Ve}from"./inputPropTypes-f7353463.js";import{T as A}from"./Text-c3d56319.js";import{T as Ee}from"./TextField-4d13296b.js";import{E as Ne}from"./Error-ff3d77f6.js";import{I as Ae}from"./Icon-1a826c67.js";import{T as b}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";/* empty css                  */import"./ChevronFilledDown-7400fa3d.js";import"./allowOnlyNumbers-19f3dc0d.js";import"./number_format-5b1a9256.js";const x=({label:o,size:ve,labelClass:ye,labelFontFace:he,spacing:Pe,errorMessage:q,invisible:Te,noOfCharacters:V,initialValue:M,placeholder:ke,password:be,onlyNumbers:xe,onChange:j,...Oe})=>{const[t,w]=h.useState([]),[_,De]=h.useState(!1),[E,Ie]=h.useState(!1),qe=(s,r)=>{const a=[...t],S=s.target.value;if(S){if(r<t.length-1){let n=document.getElementById(t[r+1].id);n.focus(),setTimeout(()=>{n.select()})}}else if(!S&&r>0){let n=document.getElementById(t[r-1].id);n.focus(),setTimeout(()=>{n.select()})}a[r].value=S,w(a),j&&typeof j=="function"&&j(t.reduce((n,we)=>(typeof n=="string"?n:n.value)+we.value),"")};h.useEffect(()=>{if(!_)for(let s=0;s<V;s++)w(r=>(r.push({value:"",id:_e(19,8)}),r)),De(!0);_&&!E&&M.length===t.length&&(w(s=>s.map((r,a)=>({...r,value:M[a]}))),Ie(!0))},[t,M,_,E,V]);const Me=async(s,r)=>{if(s.key==="ArrowLeft"&&r!==0){let a=document.getElementById(t[r-1].id);a.focus(),setTimeout(()=>{a.select()})}if(s.key==="ArrowRight"&&r!==t.length-1){let a=document.getElementById(t[r+1].id);a.focus(),setTimeout(()=>{a.select()})}},je=t.map((s,r)=>e.jsx(Ee,{id:s.id,placeholder:ke,onlyNumbers:xe,type:be?"password":"text",oneCharWide:!0,maxLength:"1",minLength:"1",showError:!!q,value:s.value,onInput:a=>qe(a,r),onKeyDown:a=>Me(a,r)},`item__${r}`));return e.jsxs(P,{className:N(["ui-text-field__wrapper",`size__${ve}`]),children:[o&&e.jsx(P,{is:"label",children:e.jsx(A,{marginTop:0,className:N({"ui-text-field__label":!0,labelClass:ye}),fontFace:he,children:o})}),e.jsx(P,{display:"inline-flex",className:"ui-pin-input-container",style:{"--spacing":Pe},children:je}),q&&!Te&&e.jsxs(P,{className:"ui-text-field__error",children:[e.jsx(Ae,{icon:Ne,className:"ui-text-field__error-icon"}),e.jsx(A,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:q})]})]})},y=x;x.propTypes={...Se,noOfCharacters:i.number,placeholder:i.string,password:i.bool,spacing:i.string,onChange:i.func,errorMessage:i.string};x.defaultProps={...Ve,noOfCharacters:6,placeholder:"-",spacing:"8px"};x.__docgenInfo={description:"",methods:[],displayName:"PinInput",props:{size:{defaultValue:{value:'"huge"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"xlarge"',computed:!1},{value:'"huge"',computed:!1},{value:'"massive"',computed:!1}]},required:!1,description:""},noOfCharacters:{defaultValue:{value:"6",computed:!1},type:{name:"number"},required:!1,description:""},placeholder:{defaultValue:{value:'"-"',computed:!1},type:{name:"string"},required:!1,description:""},spacing:{defaultValue:{value:'"8px"',computed:!1},type:{name:"string"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},fontFace:{type:{name:"string"},required:!1,description:""},errorMessage:{type:{name:"string"},required:!1,description:""},showError:{type:{name:"bool"},required:!1,description:""},modelValue:{type:{name:"string"},required:!1,description:""},onlyNumbers:{type:{name:"bool"},required:!1,description:""},wrapperClass:{type:{name:"string"},required:!1,description:""},invisible:{type:{name:"bool"},required:!1,description:""},labelClass:{type:{name:"enum",value:[{value:"String",computed:!0},{value:"Object",computed:!0},{value:"Array",computed:!0}]},required:!1,description:""},leftIcon:{type:{name:"object"},required:!1,description:""},rightIcon:{type:{name:"object"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},labelFontFace:{type:{name:"string"},required:!1,description:""},autocomplete:{type:{name:"string"},required:!1,description:""},form:{type:{name:"string"},required:!1,description:""},list:{type:{name:"string"},required:!1,description:""},minlength:{type:{name:"string"},required:!1,description:""},max:{type:{name:"string"},required:!1,description:""},min:{type:{name:"string"},required:!1,description:""},multiple:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},pattern:{type:{name:"string"},required:!1,description:""},required:{type:{name:"bool"},required:!1,description:""},step:{type:{name:"string"},required:!1,description:""},autofocus:{type:{name:"string"},required:!1,description:""},password:{type:{name:"bool"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""}}};const Ze={title:"Forms/Pin Input",component:y,argTypes:{}},D=o=>e.jsx(b,{children:e.jsx(y,{...o})}),I=o=>e.jsx(b,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(ge,{darkMode:!0,children:e.jsx(y,{...o})})})}),Fe=o=>e.jsx(b,{children:e.jsx(y,{initialValue:"123456",...o})}),d=o=>e.jsx(b,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(ge,{darkMode:!0,children:e.jsx(y,{initialValue:"123456",...o})})})}),T=Fe.bind({}),k=d.bind({}),l=D.bind({});l.args={password:!0};const u=I.bind({});u.args={password:!0};const p=D.bind({});p.args={password:!1};const c=I.bind({});c.args={password:!1};const m=D.bind({});m.args={onlyNumbers:!0};const f=I.bind({});f.args={onlyNumbers:!0};const g=D.bind({});g.args={errorMessage:"I'll always show an error"};const v=I.bind({});v.args={errorMessage:"I'll always show an error"};var F,O,B;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput initialValue={"123456"} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(B=(O=d.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var C,$,z;T.parameters={...T.parameters,docs:{...(C=T.parameters)==null?void 0:C.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput initialValue={"123456"} {...args} />
  </ThemeProvider>`,...(z=($=T.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var H,L,R;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput initialValue={"123456"} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(R=(L=k.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var K,W,G;l.parameters={...l.parameters,docs:{...(K=l.parameters)==null?void 0:K.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>`,...(G=(W=l.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,Q,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>`,...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;c.parameters={...c.parameters,docs:{...(ee=c.parameters)==null?void 0:ee.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ae=(re=c.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,te,oe;m.parameters={...m.parameters,docs:{...(se=m.parameters)==null?void 0:se.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>`,...(oe=(te=m.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ie,de;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(de=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var le,ue,pe;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>`,...(pe=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ce,me,fe;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(fe=(me=v.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};d.__docgenInfo={description:"",methods:[],displayName:"DarkModeDefaultValueTemplate"};const er=["DarkModeDefaultValueTemplate","DefaultVal","DarkDefaultVal","Password","DarkPassword","Text","DarkText","OnlyNumbers","DarkOnlyNumbers","HasError","DarkHasError"];export{k as DarkDefaultVal,v as DarkHasError,d as DarkModeDefaultValueTemplate,f as DarkOnlyNumbers,u as DarkPassword,c as DarkText,T as DefaultVal,g as HasError,m as OnlyNumbers,l as Password,p as Text,er as __namedExportsOrder,Ze as default};
//# sourceMappingURL=Pin.stories-aa4d98a7.js.map
