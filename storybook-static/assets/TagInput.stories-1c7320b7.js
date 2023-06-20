import{j as o}from"./jsx-runtime-94f6e698.js";import{r as _}from"./index-8db94870.js";import{c as E,B as z,D as Ee}from"./Box-aee9185f.js";import{T as H}from"./Text-d05ef909.js";import{I as He}from"./Icon-624e5d5f.js";import{C as Xe}from"./Close-87a5e4c0.js";import{P as n}from"./index-58d3fd43.js";import{k as $e}from"./keyGen-1dd6a0fe.js";import{T as Be}from"./TextField-33370517.js";import{T as De}from"./ThemeProvider-9c87a391.js";import"./_commonjsHelpers-042e6b4d.js";/* empty css                  */import"./ChevronFilledDown-7400fa3d.js";import"./Error-ff3d77f6.js";import"./inputPropTypes-f7353463.js";import"./allowOnlyNumbers-19f3dc0d.js";import"./number_format-5b1a9256.js";const F=({label:d,className:e,size:r,tagDelimiterKey:ke,values:Pe,onTagAdded:Se,onTagDeleted:K,inputProps:xe,tagProps:Me={},tagClassname:ze,onTextChanged:Ce,onTagChanged:C,...fe})=>{const[f,I]=_.useState(""),[l,c]=_.useState(Pe||[]),[Ie,N]=_.useState(!1),t=(a,...s)=>{if(typeof a=="function")return a(...s)},Le={space:" ",enter:"Enter",comma:","},_e=E({"ui-tag-input__input":!0}),Fe=E([`size__${r}`,"ui-tag-input__wrapper"],e),je=a=>{I(a.target.value),t(Ce,a.target.value)},Ke=a=>{const s=f.trim();let x=l;const i=Le[ke];if(a.key===i&&s.length&&!l.includes(s)&&(a.preventDefault(),c(g=>[...g,s]),c(g=>(t(Se,s,g),t(C,x,g),g)),I("")),a.key==="Backspace"&&!f.length&&l.length&&Ie){a.preventDefault();const g=[...l],M=g.pop();c(g),I(M),c(L=>(t(K,M,L),t(C,x,L),L))}N(!1)},Ne=a=>{const s=l[a];let x=l;c(i=>i.filter((g,M)=>M!==a)),c(i=>(t(K,s,i),t(C,x,i),i))};return o.jsxs(z,{className:Fe,children:[o.jsx(z,{is:"label",children:o.jsx(H,{className:"ui-tag-input__label",scale:"subhead",children:d})}),o.jsxs(z,{className:"ui-tag-input__input-wrapper",children:[l.map((a,s)=>o.jsxs(z,{is:"div",className:`ui-tag-input__input-tag ${ze}`,...Me,children:[o.jsx(H,{className:"ui-tag-input__input-tag-text",scale:"subhead",fontFace:"circularSTD",children:a}),o.jsx(He,{icon:Xe,onClick:()=>Ne(s),className:"ui-tag-input__close-icon"})]},`ui-tag-input${$e()}`)),o.jsx(Be,{className:_e,...fe,invisible:!0,size:r,...xe,onKeyDown:Ke,onKeyUp:()=>N(!0),value:f,onChange:je,autoFocus:!0,onFocus:a=>a.currentTarget.select()})]})]})},j=F;F.propTypes={label:n.string,size:n.oneOf(["small","medium","large","xlarge","huge","massive"]),values:n.array,tagDelimiterKey:n.oneOf(["enter","comma","space"]),onTagAdded:n.func,onTagDeleted:n.func,onTextChanged:n.func,onTagChanged:n.func,inputProps:n.object,tagProps:n.object,tagClassname:n.string};F.defaultProps={label:"Form Label",size:"medium",values:[],tagDelimiterKey:"enter",inputProps:{placeholder:"Add tag"},onTagDelete:d=>{console.log(d)}};const ga={title:"Forms/Tag Input",component:j},T=d=>o.jsx(De,{children:o.jsx(j,{onTagAdded:(e,r)=>{console.log(e,r)},onTagChanged:(e,r)=>{console.log(e,r)},onTagDeleted:(e,r)=>{console.log(e,r)},onTextChanged:e=>{console.log(e)},...d})}),u=d=>o.jsx(De,{children:o.jsx("div",{style:{padding:"3em",background:"#121A26"},children:o.jsx(Ee,{darkMode:!0,children:o.jsx(j,{onTagAdded:(e,r)=>{console.log(e,r)},onTagChanged:(e,r)=>{console.log(e,r)},onTagDeleted:(e,r)=>{console.log(e,r)},onTextChanged:e=>{console.log(e)},...d})})})}),m=T.bind({});m.args={label:"Form Label",size:"massive"};const p=T.bind({});p.args={label:"Form Label",size:"huge"};const y=T.bind({});y.args={label:"Form Label",size:"xlarge"};const A=T.bind({});A.args={label:"Form Label",size:"large"};const v=T.bind({});v.args={label:"Form Label",size:"medium"};const h=T.bind({});h.args={label:"Form Label",size:"small"};const w=u.bind({});w.args={label:"Form Label",size:"massive"};const b=u.bind({});b.args={label:"Form Label",size:"huge"};const D=u.bind({});D.args={label:"Form Label",size:"xlarge"};const k=u.bind({});k.args={label:"Form Label",size:"large"};const P=u.bind({});P.args={label:"Form Label",size:"medium"};const S=u.bind({});S.args={label:"Form Label",size:"small"};var X,$,B;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(B=($=m.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var O,R,G;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(G=(R=p.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var U,q,J;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(J=(q=y.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,V,W;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(W=(V=A.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,re,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,se,ge;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagInput onTagAdded={(newTag, tagsArray) => {
        console.log(newTag, tagsArray);
      }} onTagChanged={(oldTagsArray, newTagsArray) => {
        console.log(oldTagsArray, newTagsArray);
      }} onTagDeleted={(deletedTag, tagsArray) => {
        console.log(deletedTag, tagsArray);
      }} onTextChanged={value => {
        console.log(value);
      }} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ge=(se=w.parameters)==null?void 0:se.docs)==null?void 0:ge.source}}};var de,le,te;b.parameters={...b.parameters,docs:{...(de=b.parameters)==null?void 0:de.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagInput onTagAdded={(newTag, tagsArray) => {
        console.log(newTag, tagsArray);
      }} onTagChanged={(oldTagsArray, newTagsArray) => {
        console.log(oldTagsArray, newTagsArray);
      }} onTagDeleted={(deletedTag, tagsArray) => {
        console.log(deletedTag, tagsArray);
      }} onTextChanged={value => {
        console.log(value);
      }} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(te=(le=b.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var ie,ce,Te;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagInput onTagAdded={(newTag, tagsArray) => {
        console.log(newTag, tagsArray);
      }} onTagChanged={(oldTagsArray, newTagsArray) => {
        console.log(oldTagsArray, newTagsArray);
      }} onTagDeleted={(deletedTag, tagsArray) => {
        console.log(deletedTag, tagsArray);
      }} onTextChanged={value => {
        console.log(value);
      }} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Te=(ce=D.parameters)==null?void 0:ce.docs)==null?void 0:Te.source}}};var ue,me,pe;k.parameters={...k.parameters,docs:{...(ue=k.parameters)==null?void 0:ue.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagInput onTagAdded={(newTag, tagsArray) => {
        console.log(newTag, tagsArray);
      }} onTagChanged={(oldTagsArray, newTagsArray) => {
        console.log(oldTagsArray, newTagsArray);
      }} onTagDeleted={(deletedTag, tagsArray) => {
        console.log(deletedTag, tagsArray);
      }} onTextChanged={value => {
        console.log(value);
      }} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(pe=(me=k.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,Ae,ve;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagInput onTagAdded={(newTag, tagsArray) => {
        console.log(newTag, tagsArray);
      }} onTagChanged={(oldTagsArray, newTagsArray) => {
        console.log(oldTagsArray, newTagsArray);
      }} onTagDeleted={(deletedTag, tagsArray) => {
        console.log(deletedTag, tagsArray);
      }} onTextChanged={value => {
        console.log(value);
      }} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ve=(Ae=P.parameters)==null?void 0:Ae.docs)==null?void 0:ve.source}}};var he,we,be;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <TagInput onTagAdded={(newTag, tagsArray) => {
        console.log(newTag, tagsArray);
      }} onTagChanged={(oldTagsArray, newTagsArray) => {
        console.log(oldTagsArray, newTagsArray);
      }} onTagDeleted={(deletedTag, tagsArray) => {
        console.log(deletedTag, tagsArray);
      }} onTextChanged={value => {
        console.log(value);
      }} {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(be=(we=S.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};const da=["SizeMassive","SizeHuge","SizeXLarge","SizeLarge","SizeMedium","SizeSmall","DarkModeSizeMassive","DarkModeSizeHuge","DarkModeSizeXLarge","DarkModeSizeLarge","DarkModeSizeMedium","DarkModeSizeSmall"];export{b as DarkModeSizeHuge,k as DarkModeSizeLarge,w as DarkModeSizeMassive,P as DarkModeSizeMedium,S as DarkModeSizeSmall,D as DarkModeSizeXLarge,p as SizeHuge,A as SizeLarge,m as SizeMassive,v as SizeMedium,h as SizeSmall,y as SizeXLarge,da as __namedExportsOrder,ga as default};
//# sourceMappingURL=TagInput.stories-1c7320b7.js.map
