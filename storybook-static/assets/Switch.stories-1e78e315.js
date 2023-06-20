import{j as e}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import{T as D}from"./Text-d05ef909.js";import{c as P,B as o,D as M}from"./Box-aee9185f.js";import{P as s}from"./index-58d3fd43.js";import{T as w}from"./ThemeProvider-9c87a391.js";import"./_commonjsHelpers-042e6b4d.js";const a=({label:r,colorScheme:d,disabled:n,className:_,switchColor:m,thumbColor:l,switchHeight:f,alignRight:j,switchWidth:v,thumbSize:S,...T})=>{const k=P({"ui-switch__wrapper":!0,state__disabled:n,[`semantic__${d}`]:d,custom_color:m,custom_thumb_color:l,alignRight:j},_);return e.jsxs(o,{is:"label",className:k,style:{"--customswitchcolor":m,"--customthumbcolor":l,"--switch-height":f,"--switch-width":v,"--thumb-size":S},children:[e.jsxs(o,{is:"div",className:"ui-switch",children:[e.jsx(o,{is:"input",className:"ui-slider",type:"checkbox",disabled:n&&!0,...T}),e.jsx(o,{is:"span",className:"ui-slider round"})]}),e.jsx(D,{className:"ui-switch__label-text",children:r})]})},c=a;a.propTypes={colorScheme:s.oneOf(["primary","danger","success","outline","invisible"]),disabled:s.bool,switchColor:s.string,thumbColor:s.string,alignRight:s.bool,thumbSize:s.string,switchWidth:s.string,switchHeight:s.string};a.defaultProps={colorScheme:"success",disabled:!1,thumbSize:"18px",switchWidth:"56px",switchHeight:"26px"};const O={title:"Forms/Switch",component:c},y=r=>e.jsx(w,{children:e.jsx(c,{...r})}),N=r=>e.jsx(w,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(M,{darkMode:!0,children:e.jsx(c,{...r})})})}),t=y.bind({});t.args={label:"I agree to the terms and conditions"};const i=N.bind({});i.args={label:"I agree to the terms and conditions"};var h,u,p;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => <ThemeProvider>
    <Switch {...args} />
  </ThemeProvider>`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,x,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Switch {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const R=["Default","DarkModeDefault"];export{i as DarkModeDefault,t as Default,R as __namedExportsOrder,O as default};
//# sourceMappingURL=Switch.stories-1e78e315.js.map
