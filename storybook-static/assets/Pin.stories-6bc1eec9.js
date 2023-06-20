import{j as e}from"./jsx-runtime-94f6e698.js";import{r as h}from"./index-8db94870.js";import{P as i}from"./index-58d3fd43.js";import{u as Se,B as T,c as A,D as Pe}from"./Box-aee9185f.js";import{i as Ee,d as Ne}from"./inputPropTypes-f7353463.js";import{T as B}from"./Text-d05ef909.js";import{T as Ve}from"./TextField-33370517.js";import{E as Ae}from"./Error-ff3d77f6.js";import{I as Be}from"./Icon-624e5d5f.js";import{T as x}from"./ThemeProvider-9c87a391.js";import"./_commonjsHelpers-042e6b4d.js";/* empty css                  */import"./ChevronFilledDown-7400fa3d.js";import"./allowOnlyNumbers-19f3dc0d.js";import"./number_format-5b1a9256.js";const E=({label:t,size:ve,labelClass:fe,labelFontFace:he,spacing:Te,errorMessage:b,invisible:ke,noOfCharacters:N,initialValue:M,placeholder:De,password:xe,onlyNumbers:ye,onChange:j,...Fe})=>{const[o,w]=h.useState([]),[_,Ie]=h.useState(!1),[V,be]=h.useState(!1),Me=(s,r)=>{const a=[...o],S=s.target.value;if(S){if(r<o.length-1){let n=document.getElementById(o[r+1].id);n.focus(),setTimeout(()=>{n.select()})}}else if(!S&&r>0){let n=document.getElementById(o[r-1].id);n.focus(),setTimeout(()=>{n.select()})}a[r].value=S,w(a),j&&typeof j=="function"&&j(o.reduce((n,_e)=>(typeof n=="string"?n:n.value)+_e.value),"")};h.useEffect(()=>{if(!_)for(let s=0;s<N;s++)w(r=>(r.push({value:"",id:Se(19,8)}),r)),Ie(!0);_&&!V&&M.length===o.length&&(w(s=>s.map((r,a)=>({...r,value:M[a]}))),be(!0))},[o,M,_,V,N]);const je=async(s,r)=>{if(s.key==="ArrowLeft"&&r!==0){let a=document.getElementById(o[r-1].id);a.focus(),setTimeout(()=>{a.select()})}if(s.key==="ArrowRight"&&r!==o.length-1){let a=document.getElementById(o[r+1].id);a.focus(),setTimeout(()=>{a.select()})}},we=o.map((s,r)=>e.jsx(Ve,{id:s.id,placeholder:De,onlyNumbers:ye,type:xe?"password":"text",oneCharWide:!0,maxLength:"1",minLength:"1",showError:!!b,value:s.value,onInput:a=>Me(a,r),onKeyDown:a=>je(a,r)},`item__${r}`));return e.jsxs(T,{className:A(["ui-text-field__wrapper",`size__${ve}`]),children:[t&&e.jsx(T,{is:"label",children:e.jsx(B,{marginTop:0,className:A({"ui-text-field__label":!0,labelClass:fe}),fontFace:he,children:t})}),e.jsx(T,{display:"inline-flex",className:"ui-pin-input-container",style:{"--spacing":Te},children:we}),b&&!ke&&e.jsxs(T,{className:"ui-text-field__error",children:[e.jsx(Be,{icon:Ae,className:"ui-text-field__error-icon"}),e.jsx(B,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:b})]})]})},f=E;E.propTypes={...Ee,noOfCharacters:i.number,placeholder:i.string,password:i.bool,spacing:i.string,onChange:i.func,errorMessage:i.string};E.defaultProps={...Ne,noOfCharacters:6,placeholder:"-",spacing:"8px"};const Ze={title:"Forms/Pin Input",component:f,argTypes:{}},y=t=>e.jsx(x,{children:e.jsx(f,{...t})}),I=t=>e.jsx(x,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(Pe,{darkMode:!0,children:e.jsx(f,{...t})})})}),Oe=t=>e.jsx(x,{children:e.jsx(f,{initialValue:"123456",...t})}),d=t=>e.jsx(x,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(Pe,{darkMode:!0,children:e.jsx(f,{initialValue:"123456",...t})})})}),k=Oe.bind({}),D=d.bind({}),c=y.bind({});c.args={password:!0};const u=I.bind({});u.args={password:!0};const m=y.bind({});m.args={password:!1};const l=I.bind({});l.args={password:!1};const p=y.bind({});p.args={onlyNumbers:!0};const g=I.bind({});g.args={onlyNumbers:!0};const P=y.bind({});P.args={errorMessage:"I'll always show an error"};const v=I.bind({});v.args={errorMessage:"I'll always show an error"};var O,F,$;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput initialValue={"123456"} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...($=(F=d.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var H,z,L;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput initialValue={"123456"} {...args} />
  </ThemeProvider>`,...(L=(z=k.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var R,K,q;D.parameters={...D.parameters,docs:{...(R=D.parameters)==null?void 0:R.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput initialValue={"123456"} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(q=(K=D.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var C,W,G;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>`,...(G=(W=c.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};var J,Q,U;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(U=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>`,...(Z=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,ae;l.parameters={...l.parameters,docs:{...(ee=l.parameters)==null?void 0:ee.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ae=(re=l.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,oe,te;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>`,...(te=(oe=p.parameters)==null?void 0:oe.docs)==null?void 0:te.source}}};var ne,ie,de;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(de=(ie=g.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,me;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`args => <ThemeProvider>
    <PinInput {...args} />
  </ThemeProvider>`,...(me=(ue=P.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var le,pe,ge;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <PinInput {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ge=(pe=v.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};const er=["DarkModeDefaultValueTemplate","DefaultVal","DarkDefaultVal","Password","DarkPassword","Text","DarkText","OnlyNumbers","DarkOnlyNumbers","HasError","DarkHasError"];export{D as DarkDefaultVal,v as DarkHasError,d as DarkModeDefaultValueTemplate,g as DarkOnlyNumbers,u as DarkPassword,l as DarkText,k as DefaultVal,P as HasError,p as OnlyNumbers,c as Password,m as Text,er as __namedExportsOrder,Ze as default};
//# sourceMappingURL=Pin.stories-6bc1eec9.js.map
