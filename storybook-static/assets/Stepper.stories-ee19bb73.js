import{j as e}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import{P as o}from"./index-58d3fd43.js";import{B as v,c as x,D as ee}from"./Box-d3e51d09.js";import{T}from"./Text-8df15dac.js";import{t as re,T as Q}from"./ThemeProvider-ea1cf884.js";import{C as ae}from"./Check-fb71556a.js";import{I as se}from"./Icon-91fc37b3.js";import"./_commonjsHelpers-042e6b4d.js";const D=({steps:a,currentStep:s,fontSize:U,spacing:V,indicatorSize:W,scheme:n,activeColor:S,StepComponent:k,...oe})=>{const X={"--spacing":V,"--indicator-size":W,"--active-color":S,"--active-color-bg":S?re(S).lighten(43):null},Z=a.map((t,r)=>e.jsxs(v,{className:x({active:s===r,completed:s>r,todo:s<r,last:r===a.length-1,[n]:n,"ui-step":!0}),children:[e.jsx(v,{className:x({active:s===r,completed:s>r,todo:s<r,last:r===a.length-1,[n]:n,activeColor:S,"ui-step__indicator":!0}),children:s>r&&e.jsx(se,{className:"indicator-icon",icon:ae})}),e.jsx(v,{className:"ui-step__content",children:k?e.jsx(k,{step:t}):e.jsxs(e.Fragment,{children:[e.jsx(T,{marginY:"0",className:"ui-step__content-title",fontSize:U,children:typeof t=="string"?t:t.text}),t.description&&e.jsx(T,{marginY:"0",fontFace:"circularSTD",scale:"subhead",color:"#878B9A",children:t.description})]})})]},`step__${r}`));return e.jsx(v,{className:x(["ui-stepper",n]),style:{...X},children:Z})},P=D;D.propTypes={steps:o.array,currentStep:o.number,fontSize:o.string,spacing:o.string,indicatorSize:o.string,scheme:o.oneOf(["variant-1","variant-2"]),activeColor:o.string};D.defaultProps={currentStep:0,fontSize:"14px",spacing:"50px",indicatorSize:"20px",scheme:"variant-1"};const ue={component:P,title:"Stepper",argTypes:{}},h=a=>e.jsx(Q,{children:e.jsx(P,{...a})}),f=a=>e.jsx(Q,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(ee,{darkMode:!0,children:e.jsx(P,{...a})})})}),c=h.bind({});c.args={steps:[{text:"Complete basic KYB",description:"August 16, 2021 at 5:15 PM"},{text:"Select program use case"},{text:"Configure program"},{text:"Demo & launch program"}]};const p=h.bind({});p.args={steps:[{text:"Complete basic KYB"},{text:"Select program use case"},{text:"Configure program"},{text:"Demo & launch program"}],currentStep:1};const i=h.bind({});i.args={steps:["Complete basic KYB","Select program use case","Configure program","Demo & launch program"]};const d=h.bind({});d.args={steps:["Complete basic KYB","Select program use case","Configure program","Demo & launch program"],currentStep:1};const m=f.bind({});m.args={steps:[{text:"Complete basic KYB"},{text:"Select program use case"},{text:"Configure program"},{text:"Demo & launch program"}]};const g=f.bind({});g.args={steps:[{text:"Complete basic KYB"},{text:"Select program use case"},{text:"Configure program"},{text:"Demo & launch program"}],currentStep:1};const l=f.bind({});l.args={steps:["Complete basic KYB","Select program use case","Configure program","Demo & launch program"]};const u=f.bind({});u.args={steps:["Complete basic KYB","Select program use case","Configure program","Demo & launch program"],currentStep:1};var b,y,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`args => <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var M,A,C;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`args => <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var B,_,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var Y,K,N;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var z,$,E;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(E=($=m.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var F,I,R;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(R=(I=g.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var q,w,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(G=(w=l.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var H,J,L;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(L=(J=u.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};const Se=["Default","SecondStep","ArrayOfStrings","ArrayOfStringsSecondStep","DefaultDark","SecondStepDark","ArrayOfStringsDark","ArrayOfStringsSecondStepDark"];export{i as ArrayOfStrings,l as ArrayOfStringsDark,d as ArrayOfStringsSecondStep,u as ArrayOfStringsSecondStepDark,c as Default,m as DefaultDark,p as SecondStep,g as SecondStepDark,Se as __namedExportsOrder,ue as default};
//# sourceMappingURL=Stepper.stories-ee19bb73.js.map
