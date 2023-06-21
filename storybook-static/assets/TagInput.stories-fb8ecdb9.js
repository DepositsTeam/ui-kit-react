import{j as o}from"./jsx-runtime-94f6e698.js";import{r as j}from"./index-8db94870.js";import{c as N,B as M,D as Ne}from"./Box-30be3602.js";import{T as V}from"./Text-c3d56319.js";import{I as Ve}from"./Icon-1a826c67.js";import{C as Ee}from"./Close-87a5e4c0.js";import{P as n}from"./index-58d3fd43.js";import{k as He}from"./keyGen-1dd6a0fe.js";import{T as Xe}from"./TextField-4d13296b.js";import{T as we}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";/* empty css                  */import"./ChevronFilledDown-7400fa3d.js";import"./Error-ff3d77f6.js";import"./inputPropTypes-f7353463.js";import"./allowOnlyNumbers-19f3dc0d.js";import"./number_format-5b1a9256.js";const z=({label:l,className:e,size:r,tagDelimiterKey:De,values:ke,onTagAdded:Pe,onTagDeleted:q,inputProps:xe,tagProps:Se={},tagClassname:Me,onTextChanged:ze,onTagChanged:C,...Ce})=>{const[I,L]=j.useState(""),[d,c]=j.useState(ke||[]),[Ie,K]=j.useState(!1),t=(a,...s)=>{if(typeof a=="function")return a(...s)},Le={space:" ",enter:"Enter",comma:","},_e=N({"ui-tag-input__input":!0}),je=N([`size__${r}`,"ui-tag-input__wrapper"],e),Fe=a=>{L(a.target.value),t(ze,a.target.value)},qe=a=>{const s=I.trim();let x=d;const i=Le[De];if(a.key===i&&s.length&&!d.includes(s)&&(a.preventDefault(),c(g=>[...g,s]),c(g=>(t(Pe,s,g),t(C,x,g),g)),L("")),a.key==="Backspace"&&!I.length&&d.length&&Ie){a.preventDefault();const g=[...d],S=g.pop();c(g),L(S),c(_=>(t(q,S,_),t(C,x,_),_))}K(!1)},Ke=a=>{const s=d[a];let x=d;c(i=>i.filter((g,S)=>S!==a)),c(i=>(t(q,s,i),t(C,x,i),i))};return o.jsxs(M,{className:je,children:[o.jsx(M,{is:"label",children:o.jsx(V,{className:"ui-tag-input__label",scale:"subhead",children:l})}),o.jsxs(M,{className:"ui-tag-input__input-wrapper",children:[d.map((a,s)=>o.jsxs(M,{is:"div",className:`ui-tag-input__input-tag ${Me}`,...Se,children:[o.jsx(V,{className:"ui-tag-input__input-tag-text",scale:"subhead",fontFace:"circularSTD",children:a}),o.jsx(Ve,{icon:Ee,onClick:()=>Ke(s),className:"ui-tag-input__close-icon"})]},`ui-tag-input${He()}`)),o.jsx(Xe,{className:_e,...Ce,invisible:!0,size:r,...xe,onKeyDown:qe,onKeyUp:()=>K(!0),value:I,onChange:Fe,autoFocus:!0,onFocus:a=>a.currentTarget.select()})]})]})},F=z;z.propTypes={label:n.string,size:n.oneOf(["small","medium","large","xlarge","huge","massive"]),values:n.array,tagDelimiterKey:n.oneOf(["enter","comma","space"]),onTagAdded:n.func,onTagDeleted:n.func,onTextChanged:n.func,onTagChanged:n.func,inputProps:n.object,tagProps:n.object,tagClassname:n.string};z.defaultProps={label:"Form Label",size:"medium",values:[],tagDelimiterKey:"enter",inputProps:{placeholder:"Add tag"},onTagDelete:l=>{console.log(l)}};z.__docgenInfo={description:"",methods:[],displayName:"TagInput",props:{tagProps:{defaultValue:{value:"{}",computed:!1},type:{name:"object"},required:!1,description:""},label:{defaultValue:{value:'"Form Label"',computed:!1},type:{name:"string"},required:!1,description:""},size:{defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1},{value:'"xlarge"',computed:!1},{value:'"huge"',computed:!1},{value:'"massive"',computed:!1}]},required:!1,description:""},values:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""},tagDelimiterKey:{defaultValue:{value:'"enter"',computed:!1},type:{name:"enum",value:[{value:'"enter"',computed:!1},{value:'"comma"',computed:!1},{value:'"space"',computed:!1}]},required:!1,description:""},inputProps:{defaultValue:{value:'{ placeholder: "Add tag" }',computed:!1},type:{name:"object"},required:!1,description:""},onTagDelete:{defaultValue:{value:`(index) => {
  console.log(index);
}`,computed:!1},required:!1},onTagAdded:{type:{name:"func"},required:!1,description:""},onTagDeleted:{type:{name:"func"},required:!1,description:""},onTextChanged:{type:{name:"func"},required:!1,description:""},onTagChanged:{type:{name:"func"},required:!1,description:""},tagClassname:{type:{name:"string"},required:!1,description:""}}};const ga={title:"Forms/Tag Input",component:F},u=l=>o.jsx(we,{children:o.jsx(F,{onTagAdded:(e,r)=>{console.log(e,r)},onTagChanged:(e,r)=>{console.log(e,r)},onTagDeleted:(e,r)=>{console.log(e,r)},onTextChanged:e=>{console.log(e)},...l})}),T=l=>o.jsx(we,{children:o.jsx("div",{style:{padding:"3em",background:"#121A26"},children:o.jsx(Ne,{darkMode:!0,children:o.jsx(F,{onTagAdded:(e,r)=>{console.log(e,r)},onTagChanged:(e,r)=>{console.log(e,r)},onTagDeleted:(e,r)=>{console.log(e,r)},onTextChanged:e=>{console.log(e)},...l})})})}),m=u.bind({});m.args={label:"Form Label",size:"massive"};const p=u.bind({});p.args={label:"Form Label",size:"huge"};const y=u.bind({});y.args={label:"Form Label",size:"xlarge"};const A=u.bind({});A.args={label:"Form Label",size:"large"};const v=u.bind({});v.args={label:"Form Label",size:"medium"};const h=u.bind({});h.args={label:"Form Label",size:"small"};const f=T.bind({});f.args={label:"Form Label",size:"massive"};const b=T.bind({});b.args={label:"Form Label",size:"huge"};const w=T.bind({});w.args={label:"Form Label",size:"xlarge"};const D=T.bind({});D.args={label:"Form Label",size:"large"};const k=T.bind({});k.args={label:"Form Label",size:"medium"};const P=T.bind({});P.args={label:"Form Label",size:"small"};var E,H,X;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(X=(H=m.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var $,B,O;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(O=(B=p.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var R,G,U;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(U=(G=y.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var J,Q,W;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`args => <ThemeProvider>
    <TagInput onTagAdded={(newTag, tagsArray) => {
    console.log(newTag, tagsArray);
  }} onTagChanged={(oldTagsArray, newTagsArray) => {
    console.log(oldTagsArray, newTagsArray);
  }} onTagDeleted={(deletedTag, tagsArray) => {
    console.log(deletedTag, tagsArray);
  }} onTextChanged={value => {
    console.log(value);
  }} {...args} />
  </ThemeProvider>`,...(W=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var Y,Z,ee;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,se,ge;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(ge=(se=f.parameters)==null?void 0:se.docs)==null?void 0:ge.source}}};var le,de,te;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(te=(de=b.parameters)==null?void 0:de.docs)==null?void 0:te.source}}};var ie,ce,ue;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(ue=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var Te,me,pe;D.parameters={...D.parameters,docs:{...(Te=D.parameters)==null?void 0:Te.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(pe=(me=D.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,Ae,ve;k.parameters={...k.parameters,docs:{...(ye=k.parameters)==null?void 0:ye.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(ve=(Ae=k.parameters)==null?void 0:Ae.docs)==null?void 0:ve.source}}};var he,fe,be;P.parameters={...P.parameters,docs:{...(he=P.parameters)==null?void 0:he.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(be=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};const la=["SizeMassive","SizeHuge","SizeXLarge","SizeLarge","SizeMedium","SizeSmall","DarkModeSizeMassive","DarkModeSizeHuge","DarkModeSizeXLarge","DarkModeSizeLarge","DarkModeSizeMedium","DarkModeSizeSmall"];export{b as DarkModeSizeHuge,D as DarkModeSizeLarge,f as DarkModeSizeMassive,k as DarkModeSizeMedium,P as DarkModeSizeSmall,w as DarkModeSizeXLarge,p as SizeHuge,A as SizeLarge,m as SizeMassive,v as SizeMedium,h as SizeSmall,y as SizeXLarge,la as __namedExportsOrder,ga as default};
//# sourceMappingURL=TagInput.stories-fb8ecdb9.js.map
