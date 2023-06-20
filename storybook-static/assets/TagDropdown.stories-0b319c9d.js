import{j as r}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{B as s,c as k,D as Ee}from"./Box-aee9185f.js";import{T as c}from"./Text-d05ef909.js";import{P as n}from"./index-58d3fd43.js";import{i as Ie,d as Le}from"./inputPropTypes-f7353463.js";import{k as Ae}from"./keyGen-1dd6a0fe.js";import{I as C}from"./Icon-624e5d5f.js";import{C as Ve}from"./Close-87a5e4c0.js";import{C as Fe}from"./ChevronFilledDown-7400fa3d.js";import{T as He}from"./TextField-33370517.js";import{S as $e}from"./Search-4a310705.js";import{C as Be}from"./Checkbox-adf566e7.js";import{E as Ye}from"./Error-ff3d77f6.js";import{T as me}from"./ThemeProvider-9c87a391.js";import"./_commonjsHelpers-042e6b4d.js";/* empty css                  */import"./allowOnlyNumbers-19f3dc0d.js";import"./number_format-5b1a9256.js";const N=({size:i,options:p,labelClass:I,labelFontFace:he,label:fe,errorMessage:P,leftIcon:L,rightIcon:xe,onChange:ve,placeholder:y,showCheckboxes:T,initiallySelectedTags:S,maxDropdownHeight:we,initiallyClosed:_e,selectOneItem:Te,...ze})=>{const[A,De]=a.useState([]),[t,M]=a.useState([]),[O,V]=a.useState(_e),[D,ke]=a.useState(""),[be,je]=a.useState([]),F=a.useRef(),[Pe,ye]=a.useState(!1);a.useEffect(()=>{De([...p].filter(e=>typeof e=="string"?t.includes(e):t.includes(e.value)))},[p,t]),a.useEffect(()=>{ye(!0),S&&Array.isArray(S)&&p.forEach(e=>{const o=u(e);S.includes(o)&&M(d=>{const Y=[...d];return Y.push(o),Y})})},[]),a.useEffect(()=>{Pe&&ve(t)},[t]);const H=e=>{e.target.closest(".ui-tag-dropdown__wrapper")||V(!1)},Se=()=>{V(!O)},u=e=>typeof e=="object"?e.value:e,$=e=>typeof e=="object"?e.text:e;a.useEffect(()=>{O&&F.current.focus()}),a.useEffect(()=>(window.addEventListener("click",H),()=>{window.removeEventListener("click",H)}),[]),a.useEffect(()=>{const e=[...p];je(e.filter(o=>typeof o=="string"?o.toLowerCase().includes(D.toLowerCase()):o.text.toLowerCase().includes(D.toLowerCase())))},[p,t,D]);const Me=e=>{M([...t].filter(o=>typeof e=="string"?o!==e:o!==e.value))},B=e=>{const o=u(e);let d=[...t];d.includes(o)?d.splice(t.indexOf(o),1):Te?d=[o]:d.push(o),M(d)},Oe=e=>{T||B(e)},Ce=A.map((e,o)=>r.jsxs(s,{className:"ui-tag-dropdown__input-tag",children:[r.jsx(c,{className:"ui-tag-dropdown__input-tag-text",scale:"subhead",fontFace:"circularSTD",children:typeof e=="string"?e:e.text}),r.jsx(C,{icon:Ve,className:"ui-tag-dropdown__close-icon",height:"16px",width:"16px",onClick:()=>Me(e)})]},`ui-tag-dropdown${Ae()}_${o}`)),Ne=be.map((e,o)=>r.jsx(s,{className:k({"ui-tag-dropdown__dropdown__option":!0,dropdownMode:!T,selected:t.includes(u(e))}),cursor:T?"auto":"pointer",onClick:()=>Oe(e),children:T?r.jsx(Be,{checked:t.includes(u(e)),value:u(e),onChange:()=>B(e),children:r.jsx(c,{marginY:0,fontFace:"circularSTD",scale:"subhead",children:$(e)})}):r.jsx(c,{marginY:0,fontFace:"circularSTD",marginLeft:8,scale:"subhead",children:$(e)})},`option-${o}`));return r.jsxs(s,{className:k({"ui-tag-dropdown__wrapper":!0,[`size__${i}`]:!0}),style:{"--dropdown-content-height":we},children:[r.jsx(s,{is:"label",children:r.jsx(c,{className:k({[I]:I,"ui-tag-dropdown__label":!0}),fontFace:he,scale:"subhead",children:fe})}),r.jsxs(s,{className:k({"ui-tag-dropdown__input-wrapper":!0,hasError:!!P}),onClick:Se,children:[L&&r.jsx(s,{className:"ui-tag-dropdown__left-icon",children:L}),r.jsxs(s,{className:"ui-tag-dropdown__input-wrapper__left",children:[Ce,y&&!A.length&&r.jsx(c,{className:"ui-tag-dropdown__placeholder",marginY:0,children:y})]}),r.jsx(s,{className:"ui-tag-dropdown__input-wrapper__right",children:xe||r.jsx(C,{icon:Fe,className:"ui-text-field__right-icon"})})]}),O&&r.jsxs(s,{className:"ui-tag-dropdown__dropdown",children:[r.jsx(s,{className:"ui-tag-dropdown__dropdown__header",children:r.jsx(He,{ref:F,invisible:!0,leftIcon:$e,placeholder:y,size:"large",value:D,onChange:e=>ke(e.target.value)})}),r.jsx(s,{className:"ui-tag-dropdown__dropdown__options",children:Ne})]}),P&&r.jsxs(s,{className:"ui-text-field__error",children:[r.jsx(C,{icon:Ye,className:"ui-text-field__error-icon"}),r.jsx(c,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:P})]})]})},E=N;N.propTypes={...Ie,placeholder:n.string,options:n.array,modelValue:n.array,showCheckboxes:n.bool,onChange:n.func,initiallySelectedTags:n.array,maxDropdownHeight:n.string,initiallyClosed:n.bool,selectOneItem:n.bool};N.defaultProps={...Le,showCheckboxes:!0,maxDropdownHeight:"250px",initiallyClosed:!1};const cr={title:"Forms/Tag Dropdown",component:E},b=i=>r.jsx(me,{children:r.jsx(E,{...i})}),j=i=>r.jsx(me,{children:r.jsx("div",{style:{padding:"3em",background:"#121A26"},children:r.jsx(Ee,{darkMode:!0,children:r.jsx(E,{...i})})})}),l=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],ge=["Commerce","Identity","UI","Money","Banking"],m=b.bind({});m.args={options:[...l],onChange:i=>{console.log(i)}};const g=b.bind({});g.args={options:[...l],maxHeight:"150px"};const h=b.bind({});h.args={options:[...l],label:"Dropdown"};const f=b.bind({});f.args={options:[...ge],label:"String Options"};const x=j.bind({});x.args={options:[...l]};const v=j.bind({});v.args={options:[...l],maxHeight:"150px"};const w=j.bind({});w.args={options:[...l],label:"Dropdown"};const _=j.bind({});_.args={options:[...ge],label:"String Options"};var z,R,U;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(U=(R=m.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var G,q,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,W;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(W=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,oe,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,te,ne;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,de,ce;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var le,pe,ue;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ue=(pe=_.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const lr=["Default","VariableMaxHeight","Label","StringOptions","DarkModeDefault","DarkModeVariableMaxHeight","DarkModeLabel","DarkModeStringOptions"];export{x as DarkModeDefault,w as DarkModeLabel,_ as DarkModeStringOptions,v as DarkModeVariableMaxHeight,m as Default,h as Label,f as StringOptions,g as VariableMaxHeight,lr as __namedExportsOrder,cr as default};
//# sourceMappingURL=TagDropdown.stories-0b319c9d.js.map
