import{j as r}from"./jsx-runtime-94f6e698.js";import{r as a}from"./index-8db94870.js";import{B as s,c as j,D as Re}from"./Box-aee9185f.js";import{T as l}from"./Text-d05ef909.js";import{P as n}from"./index-58d3fd43.js";import{i as Ue,d as Ge}from"./inputPropTypes-f7353463.js";import{k as qe}from"./keyGen-1dd6a0fe.js";import{I}from"./Icon-624e5d5f.js";import{C as Je}from"./Close-87a5e4c0.js";import{C as Ke}from"./ChevronFilledDown-7400fa3d.js";import{T as Qe}from"./TextField-33370517.js";import{S as We}from"./Search-4a310705.js";import{C as Xe}from"./Checkbox-adf566e7.js";import{E as Ze}from"./Error-ff3d77f6.js";import{L as er}from"./Loader-167744db.js";import{T as be}from"./ThemeProvider-9c87a391.js";import"./_commonjsHelpers-042e6b4d.js";/* empty css                  */import"./allowOnlyNumbers-19f3dc0d.js";import"./number_format-5b1a9256.js";const A=({size:c,options:u,labelClass:V,labelFontFace:ke,label:Se,errorMessage:M,leftIcon:F,rightIcon:Pe,onChange:je,placeholder:O,showCheckboxes:k,initiallySelectedTags:C,maxDropdownHeight:ye,initiallyClosed:Me,selectOneItem:Oe,onScrolledToBottom:N,loading:Ce,...rr})=>{const[B,Ne]=a.useState([]),[t,L]=a.useState([]),[E,$]=a.useState(Me),[S,Le]=a.useState(""),[Ee,Ie]=a.useState([]),z=a.useRef(),[Ae,He]=a.useState(!1);a.useEffect(()=>{Ne([...u].filter(e=>typeof e=="string"?t.includes(e):t.includes(e.value)))},[u,t]),a.useEffect(()=>{He(!0),C&&Array.isArray(C)&&u.forEach(e=>{const o=m(e);C.includes(o)&&L(i=>{const P=[...i];return P.push(o),P})})},[]),a.useEffect(()=>{Ae&&je(t)},[t]);const Y=e=>{e.target.closest(".ui-tag-dropdown__wrapper")||$(!1)},Ve=()=>{$(!E)},m=e=>typeof e=="object"?e.value:e,R=e=>typeof e=="object"?e.text:e;a.useEffect(()=>{E&&z.current.focus()}),a.useEffect(()=>(window.addEventListener("click",Y),()=>{window.removeEventListener("click",Y)}),[]),a.useEffect(()=>{const e=[...u];Ie(e.filter(o=>typeof o=="string"?o.toLowerCase().includes(S.toLowerCase()):o.text.toLowerCase().includes(S.toLowerCase())))},[u,t,S]);const Fe=e=>{L([...t].filter(o=>typeof e=="string"?o!==e:o!==e.value))},U=e=>{const o=m(e);let i=[...t];i.includes(o)?i.splice(t.indexOf(o),1):Oe?i=[o]:i.push(o),L(i)},Be=e=>{k||U(e)},$e=e=>{const{scrollHeight:o,scrollTop:i,clientHeight:P}=e.target;Math.abs(o-P-i)<1&&N&&typeof N=="function"&&N(e)},ze=B.map((e,o)=>r.jsxs(s,{className:"ui-tag-dropdown__input-tag",children:[r.jsx(l,{className:"ui-tag-dropdown__input-tag-text",scale:"subhead",fontFace:"circularSTD",children:typeof e=="string"?e:e.text}),r.jsx(I,{icon:Je,className:"ui-tag-dropdown__close-icon",height:"16px",width:"16px",onClick:()=>Fe(e)})]},`ui-tag-dropdown${qe()}_${o}`)),Ye=Ee.map((e,o)=>r.jsx(s,{className:j({"ui-tag-dropdown__dropdown__option":!0,dropdownMode:!k,selected:t.includes(m(e))}),cursor:k?"auto":"pointer",onClick:()=>Be(e),children:k?r.jsx(Xe,{checked:t.includes(m(e)),value:m(e),onChange:()=>U(e),children:r.jsx(l,{marginY:0,fontFace:"circularSTD",scale:"subhead",children:R(e)})}):r.jsx(l,{marginY:0,fontFace:"circularSTD",marginLeft:8,scale:"subhead",children:R(e)})},`option-${o}`));return r.jsxs(s,{className:j({"ui-tag-dropdown__wrapper":!0,[`size__${c}`]:!0}),style:{"--dropdown-content-height":ye},children:[r.jsx(s,{is:"label",children:r.jsx(l,{className:j({[V]:V,"ui-tag-dropdown__label":!0}),fontFace:ke,scale:"subhead",children:Se})}),r.jsxs(s,{className:j({"ui-tag-dropdown__input-wrapper":!0,hasError:!!M}),onClick:Ve,children:[F&&r.jsx(s,{className:"ui-tag-dropdown__left-icon",children:F}),r.jsxs(s,{className:"ui-tag-dropdown__input-wrapper__left",children:[ze,O&&!B.length&&r.jsx(l,{className:"ui-tag-dropdown__placeholder",marginY:0,children:O})]}),r.jsx(s,{className:"ui-tag-dropdown__input-wrapper__right",children:Pe||r.jsx(I,{icon:Ke,className:"ui-text-field__right-icon"})})]}),E&&r.jsxs(s,{className:"ui-tag-dropdown__dropdown",children:[r.jsx(s,{className:"ui-tag-dropdown__dropdown__header",children:r.jsx(Qe,{ref:z,invisible:!0,leftIcon:We,placeholder:O,size:"large",value:S,onChange:e=>Le(e.target.value)})}),r.jsxs(s,{className:"ui-tag-dropdown__dropdown__options",onScroll:$e,children:[Ye,Ce&&r.jsx(s,{className:"ui-tag-dropdown__loader",children:r.jsx(er,{loaderSize:"48px"})})]})]}),M&&r.jsxs(s,{className:"ui-text-field__error",children:[r.jsx(I,{icon:Ze,className:"ui-text-field__error-icon"}),r.jsx(l,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:M})]})]})},H=A;A.propTypes={...Ue,placeholder:n.string,options:n.array,modelValue:n.array,showCheckboxes:n.bool,onChange:n.func,initiallySelectedTags:n.array,maxDropdownHeight:n.string,initiallyClosed:n.bool,selectOneItem:n.bool,onScrolledToBottom:n.func,loading:n.bool};A.defaultProps={...Ge,showCheckboxes:!0,maxDropdownHeight:"250px",initiallyClosed:!1};const br={title:"Forms/Tag Dropdown",component:H},p=c=>r.jsx(be,{children:r.jsx(H,{...c})}),y=c=>r.jsx(be,{children:r.jsx("div",{style:{padding:"3em",background:"#121A26"},children:r.jsx(Re,{darkMode:!0,children:r.jsx(H,{...c})})})}),d=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],De=["Commerce","Identity","UI","Money","Banking"],g=p.bind({});g.args={options:[...d],onChange:c=>{console.log(c)}};const h=p.bind({});h.args={options:[...d],maxHeight:"150px"};const f=p.bind({});f.args={options:[...d],label:"Dropdown"};const x=p.bind({});x.args={options:[...De],label:"String Options"};const v=y.bind({});v.args={options:[...d]};const T=y.bind({});T.args={options:[...d],maxHeight:"150px"};const w=y.bind({});w.args={options:[...d],label:"Dropdown"};const _=y.bind({});_.args={options:[...De],label:"String Options"};const b=p.bind({});b.args={options:[...d],label:"Loading",loading:!0};const D=p.bind({});D.args={options:[...d],label:"Alert at bottom scroll",onScrolledToBottom:()=>{alert("Scrolled to the bottom")}};var G,q,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(J=(q=g.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,W;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(W=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,ee;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,oe,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(ae=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,te,ne;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ne=(te=v.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ie,de,ce;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ce=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var le,pe,ue;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ue=(pe=w.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ge,he;_.parameters={..._.parameters,docs:{...(me=_.parameters)==null?void 0:me.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(he=(ge=_.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var fe,xe,ve;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(ve=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var Te,we,_e;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(_e=(we=D.parameters)==null?void 0:we.docs)==null?void 0:_e.source}}};const Dr=["Default","VariableMaxHeight","Label","StringOptions","DarkModeDefault","DarkModeVariableMaxHeight","DarkModeLabel","DarkModeStringOptions","Loading","TrackBottomScroll"];export{v as DarkModeDefault,w as DarkModeLabel,_ as DarkModeStringOptions,T as DarkModeVariableMaxHeight,g as Default,f as Label,b as Loading,x as StringOptions,D as TrackBottomScroll,h as VariableMaxHeight,Dr as __namedExportsOrder,br as default};
//# sourceMappingURL=TagDropdown.stories-6ead34c7.js.map
