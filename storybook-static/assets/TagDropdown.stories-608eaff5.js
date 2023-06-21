import{j as r}from"./jsx-runtime-94f6e698.js";import{r as o}from"./index-8db94870.js";import{B as s,c as j,D as Ye}from"./Box-30be3602.js";import{T as c}from"./Text-c3d56319.js";import{P as i}from"./index-58d3fd43.js";import{i as Re,d as Ue}from"./inputPropTypes-f7353463.js";import{k as Ge}from"./keyGen-1dd6a0fe.js";import{I as L}from"./Icon-1a826c67.js";import{C as Je}from"./Close-87a5e4c0.js";import{C as Ke}from"./ChevronFilledDown-7400fa3d.js";import{T as Qe}from"./TextField-4d13296b.js";import{S as We}from"./Search-4a310705.js";import{C as Xe}from"./Checkbox-415ed6fa.js";import{E as Ze}from"./Error-ff3d77f6.js";import{L as er}from"./Loader-d81ae0eb.js";import{T as Te}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";/* empty css                  */import"./allowOnlyNumbers-19f3dc0d.js";import"./number_format-5b1a9256.js";const q=({size:l,options:u,labelClass:A,labelFontFace:De,label:ke,errorMessage:M,leftIcon:F,rightIcon:Se,onChange:je,placeholder:O,showCheckboxes:D,initiallySelectedTags:C,maxDropdownHeight:qe,initiallyClosed:Pe,selectOneItem:Me,onScrolledToBottom:N,loading:Oe,...rr})=>{const[H,Ce]=o.useState([]),[t,I]=o.useState([]),[E,B]=o.useState(Pe),[k,Ne]=o.useState(""),[Ie,Ee]=o.useState([]),$=o.useRef(),[Le,Ve]=o.useState(!1);o.useEffect(()=>{Ce([...u].filter(e=>typeof e=="string"?t.includes(e):t.includes(e.value)))},[u,t]),o.useEffect(()=>{Ve(!0),C&&Array.isArray(C)&&u.forEach(e=>{const a=m(e);C.includes(a)&&I(n=>{const S=[...n];return S.push(a),S})})},[]),o.useEffect(()=>{Le&&je(t)},[t]);const z=e=>{e.target.closest(".ui-tag-dropdown__wrapper")||B(!1)},Ae=()=>{B(!E)},m=e=>typeof e=="object"?e.value:e,Y=e=>typeof e=="object"?e.text:e;o.useEffect(()=>{E&&$.current.focus()}),o.useEffect(()=>(window.addEventListener("click",z),()=>{window.removeEventListener("click",z)}),[]),o.useEffect(()=>{const e=[...u];Ee(e.filter(a=>typeof a=="string"?a.toLowerCase().includes(k.toLowerCase()):a.text.toLowerCase().includes(k.toLowerCase())))},[u,t,k]);const Fe=e=>{I([...t].filter(a=>typeof e=="string"?a!==e:a!==e.value))},R=e=>{const a=m(e);let n=[...t];n.includes(a)?n.splice(t.indexOf(a),1):Me?n=[a]:n.push(a),I(n)},He=e=>{D||R(e)},Be=e=>{const{scrollHeight:a,scrollTop:n,clientHeight:S}=e.target;Math.abs(a-S-n)<1&&N&&typeof N=="function"&&N(e)},$e=H.map((e,a)=>r.jsxs(s,{className:"ui-tag-dropdown__input-tag",children:[r.jsx(c,{className:"ui-tag-dropdown__input-tag-text",scale:"subhead",fontFace:"circularSTD",children:typeof e=="string"?e:e.text}),r.jsx(L,{icon:Je,className:"ui-tag-dropdown__close-icon",height:"16px",width:"16px",onClick:()=>Fe(e)})]},`ui-tag-dropdown${Ge()}_${a}`)),ze=Ie.map((e,a)=>r.jsx(s,{className:j({"ui-tag-dropdown__dropdown__option":!0,dropdownMode:!D,selected:t.includes(m(e))}),cursor:D?"auto":"pointer",onClick:()=>He(e),children:D?r.jsx(Xe,{checked:t.includes(m(e)),value:m(e),onChange:()=>R(e),children:r.jsx(c,{marginY:0,fontFace:"circularSTD",scale:"subhead",children:Y(e)})}):r.jsx(c,{marginY:0,fontFace:"circularSTD",marginLeft:8,scale:"subhead",children:Y(e)})},`option-${a}`));return r.jsxs(s,{className:j({"ui-tag-dropdown__wrapper":!0,[`size__${l}`]:!0}),style:{"--dropdown-content-height":qe},children:[r.jsx(s,{is:"label",children:r.jsx(c,{className:j({[A]:A,"ui-tag-dropdown__label":!0}),fontFace:De,scale:"subhead",children:ke})}),r.jsxs(s,{className:j({"ui-tag-dropdown__input-wrapper":!0,hasError:!!M}),onClick:Ae,children:[F&&r.jsx(s,{className:"ui-tag-dropdown__left-icon",children:F}),r.jsxs(s,{className:"ui-tag-dropdown__input-wrapper__left",children:[$e,O&&!H.length&&r.jsx(c,{className:"ui-tag-dropdown__placeholder",marginY:0,children:O})]}),r.jsx(s,{className:"ui-tag-dropdown__input-wrapper__right",children:Se||r.jsx(L,{icon:Ke,className:"ui-text-field__right-icon"})})]}),E&&r.jsxs(s,{className:"ui-tag-dropdown__dropdown",children:[r.jsx(s,{className:"ui-tag-dropdown__dropdown__header",children:r.jsx(Qe,{ref:$,invisible:!0,leftIcon:We,placeholder:O,size:"large",value:k,onChange:e=>Ne(e.target.value)})}),r.jsxs(s,{className:"ui-tag-dropdown__dropdown__options",onScroll:Be,children:[ze,Oe&&r.jsx(s,{className:"ui-tag-dropdown__loader",children:r.jsx(er,{loaderSize:"48px"})})]})]}),M&&r.jsxs(s,{className:"ui-text-field__error",children:[r.jsx(L,{icon:Ze,className:"ui-text-field__error-icon"}),r.jsx(c,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:M})]})]})},V=q;q.propTypes={...Re,placeholder:i.string,options:i.array,modelValue:i.array,showCheckboxes:i.bool,onChange:i.func,initiallySelectedTags:i.array,maxDropdownHeight:i.string,initiallyClosed:i.bool,selectOneItem:i.bool,onScrolledToBottom:i.func,loading:i.bool};q.defaultProps={...Ue,showCheckboxes:!0,maxDropdownHeight:"250px",initiallyClosed:!1};q.__docgenInfo={description:"",methods:[],displayName:"TagDropdown",props:{size:{defaultValue:{value:'"huge"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"xlarge"',computed:!1},{value:'"huge"',computed:!1},{value:'"massive"',computed:!1}]},required:!1,description:""},showCheckboxes:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},maxDropdownHeight:{defaultValue:{value:'"250px"',computed:!1},type:{name:"string"},required:!1,description:""},initiallyClosed:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},label:{type:{name:"string"},required:!1,description:""},fontFace:{type:{name:"string"},required:!1,description:""},errorMessage:{type:{name:"string"},required:!1,description:""},showError:{type:{name:"bool"},required:!1,description:""},modelValue:{type:{name:"array"},required:!1,description:""},onlyNumbers:{type:{name:"bool"},required:!1,description:""},wrapperClass:{type:{name:"string"},required:!1,description:""},invisible:{type:{name:"bool"},required:!1,description:""},labelClass:{type:{name:"enum",value:[{value:"String",computed:!0},{value:"Object",computed:!0},{value:"Array",computed:!0}]},required:!1,description:""},leftIcon:{type:{name:"object"},required:!1,description:""},rightIcon:{type:{name:"object"},required:!1,description:""},disabled:{type:{name:"bool"},required:!1,description:""},labelFontFace:{type:{name:"string"},required:!1,description:""},autocomplete:{type:{name:"string"},required:!1,description:""},form:{type:{name:"string"},required:!1,description:""},list:{type:{name:"string"},required:!1,description:""},minlength:{type:{name:"string"},required:!1,description:""},max:{type:{name:"string"},required:!1,description:""},min:{type:{name:"string"},required:!1,description:""},multiple:{type:{name:"string"},required:!1,description:""},name:{type:{name:"string"},required:!1,description:""},pattern:{type:{name:"string"},required:!1,description:""},placeholder:{type:{name:"string"},required:!1,description:""},required:{type:{name:"bool"},required:!1,description:""},step:{type:{name:"string"},required:!1,description:""},autofocus:{type:{name:"string"},required:!1,description:""},options:{type:{name:"array"},required:!1,description:""},onChange:{type:{name:"func"},required:!1,description:""},initiallySelectedTags:{type:{name:"array"},required:!1,description:""},selectOneItem:{type:{name:"bool"},required:!1,description:""},onScrolledToBottom:{type:{name:"func"},required:!1,description:""},loading:{type:{name:"bool"},required:!1,description:""}}};const Tr={title:"Forms/Tag Dropdown",component:V},p=l=>r.jsx(Te,{children:r.jsx(V,{...l})}),P=l=>r.jsx(Te,{children:r.jsx("div",{style:{padding:"3em",background:"#121A26"},children:r.jsx(Ye,{darkMode:!0,children:r.jsx(V,{...l})})})}),d=[{text:"Banking kit",value:"banking"},{text:"Money kit",value:"money"},{text:"Identity kit",value:"identity"},{text:"UI kit",value:"ui"},{text:"Commerce kit",value:"commerce"},{text:"Benefits",value:"benefits"},{text:"API Docs",value:"api_docs"},{text:"Console",value:"console"},{text:"Statements",value:"statements"},{text:"Payouts",value:"payouts"}],_e=["Commerce","Identity","UI","Money","Banking"],g=p.bind({});g.args={options:[...d],onChange:l=>{console.log(l)}};const f=p.bind({});f.args={options:[...d],maxHeight:"150px"};const h=p.bind({});h.args={options:[...d],label:"Dropdown"};const v=p.bind({});v.args={options:[..._e],label:"String Options"};const x=P.bind({});x.args={options:[...d]};const y=P.bind({});y.args={options:[...d],maxHeight:"150px"};const b=P.bind({});b.args={options:[...d],label:"Dropdown"};const w=P.bind({});w.args={options:[..._e],label:"String Options"};const T=p.bind({});T.args={options:[...d],label:"Loading",loading:!0};const _=p.bind({});_.args={options:[...d],label:"Alert at bottom scroll",onScrolledToBottom:()=>{alert("Scrolled to the bottom")}};var U,G,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,W;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(W=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Z,ee;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,oe;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(oe=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,te,ie;x.parameters={...x.parameters,docs:{...(se=x.parameters)==null?void 0:se.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ie=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ne,de,le;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(le=(de=y.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,pe,ue;b.parameters={...b.parameters,docs:{...(ce=b.parameters)==null?void 0:ce.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ue=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var me,ge,fe;w.parameters={...w.parameters,docs:{...(me=w.parameters)==null?void 0:me.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagDropdown {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(fe=(ge=w.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var he,ve,xe;T.parameters={...T.parameters,docs:{...(he=T.parameters)==null?void 0:he.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(xe=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var ye,be,we;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`args => <ThemeProvider>
    <TagDropdown {...args} />
  </ThemeProvider>`,...(we=(be=_.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const _r=["Default","VariableMaxHeight","Label","StringOptions","DarkModeDefault","DarkModeVariableMaxHeight","DarkModeLabel","DarkModeStringOptions","Loading","TrackBottomScroll"];export{x as DarkModeDefault,b as DarkModeLabel,w as DarkModeStringOptions,y as DarkModeVariableMaxHeight,g as Default,h as Label,T as Loading,v as StringOptions,_ as TrackBottomScroll,f as VariableMaxHeight,_r as __namedExportsOrder,Tr as default};
//# sourceMappingURL=TagDropdown.stories-608eaff5.js.map
