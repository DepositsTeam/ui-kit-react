import{j as e}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{B as t,c as i,D as K}from"./Box-d3e51d09.js";/* empty css                  */import{P as r}from"./index-58d3fd43.js";import{n as L}from"./number_format-5b1a9256.js";import{T as P}from"./Text-8df15dac.js";import"./SortDescending-506e4540.js";import"./Withdraw-cd2615df.js";import"./Message-9f0ab44c.js";import"./Calendar-d7ffa913.js";import"./ScanCard-cad4ddbf.js";import"./Check-fb71556a.js";import"./ChevronArrowRight-2d745259.js";import"./ChevronFilledDown-7400fa3d.js";import"./Close-87a5e4c0.js";import{E as Q}from"./Error-ff3d77f6.js";import"./Filter-b30fb447.js";import"./Warning-0ae99abc.js";import"./Search-4a310705.js";import{T as A}from"./ThemeProvider-ea1cf884.js";import"./_commonjsHelpers-042e6b4d.js";const g=({label:s,size:V,max:c,min:u,errorMessage:p,coloredButtons:_,labelClass:b,labelFontFace:$,inputClass:z,disabled:w,decimal:B,alterMagnitude:j,spacing:O,value:R,onChange:f,className:v,...q})=>{const[o,x]=l.useState(null),[G,T]=l.useState(0);l.useEffect(()=>{x(R)},[]),l.useEffect(()=>{f&&typeof f=="function"&&f(o),T(B?L(o,2):o)},[o]);const H=()=>{const a=o+j;x((c===0||c)&&a>=c?c:a)},J=()=>{const a=o-j;x((u===0||u)&&a<=u?u:a)};return e.jsx(t,{className:`ui-counter ${v??v}`,style:{"--counter-spacing":O},children:e.jsxs(t,{className:i(["ui-text-field__wrapper",`size__${V}`]),children:[!!s&&e.jsx(t,{is:"label",children:e.jsx(P,{marginTop:"0px",className:i({"ui-text-field__label":!0,[b]:b}),scale:"subhead",fontFace:$,children:s})}),e.jsxs(t,{className:"ui-text-field__input-wrapper",children:[e.jsx(t,{is:"button",className:i({"ui-text-field--counter_input_button left":!0,coloredButtons:_}),onClick:J,children:"-"}),e.jsx(t,{is:"input",className:i({"ui-text-field__input":!0,"has-error":p,disabled:w,[z]:!0}),value:G,readonly:!0,...q}),e.jsx(t,{is:"button",className:i({"ui-text-field--counter_input_button right":!0,coloredButtons:_}),onClick:H,children:"+"})]}),!!p&&e.jsxs(t,{className:"ui-text-field__error",children:[e.jsx(Q,{className:"ui-text-field__error-icon"}),e.jsx(P,{className:"ui-text-field__error-text",scale:"subhead",fontFace:"circularSTD",children:p})]})]})})},h=g;g.propTypes={label:r.string,size:r.oneOf(["small","medium","large","xlarge","huge","massive"]),errorMessage:r.string,coloredButtons:r.bool,labelClass:r.string,inputClass:r.string,disabled:r.bool,decimal:r.bool,alterMagnitude:r.number,spacing:r.string,value:r.number,onChange:r.func,max:r.number,min:r.number};g.defaultProps={size:"huge",spacing:"16px",alterMagnitude:1,value:0};const _e={title:"Forms/Counter",component:h,argTypes:{}},F=s=>e.jsx(A,{children:e.jsx(h,{...s})}),U=s=>e.jsx(A,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(K,{darkMode:!0,children:e.jsx(h,{...s})})})}),m=F.bind({}),d=U.bind({}),n=F.bind({});n.args={max:10,min:0};var k,D,C;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`args => <ThemeProvider>
    <Counter {...args} />
  </ThemeProvider>`,...(C=(D=m.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var M,N,y;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => <ThemeProvider>
      <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
        <DarkModeProvider darkMode={true}>
          <Counter {...args} />
        </DarkModeProvider>
      </div>
    </ThemeProvider>`,...(y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var E,S,I;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`args => <ThemeProvider>
    <Counter {...args} />
  </ThemeProvider>`,...(I=(S=n.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};const be=["Default","DarkDefault","MaxIs10AndMinIs0"];export{d as DarkDefault,m as Default,n as MaxIs10AndMinIs0,be as __namedExportsOrder,_e as default};
//# sourceMappingURL=Counter.stories-4f2976f5.js.map
