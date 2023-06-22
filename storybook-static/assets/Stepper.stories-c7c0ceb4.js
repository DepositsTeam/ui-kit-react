import{j as e}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import{P as t}from"./index-58d3fd43.js";import{B as f,c as D,D as ee}from"./Box-30be3602.js";import{T as k}from"./Text-abe69b1c.js";import{t as re,T as L}from"./ThemeProvider-6ae8e1ed.js";import{C as ae}from"./Check-fb71556a.js";import{I as se}from"./Icon-1a826c67.js";import"./_commonjsHelpers-042e6b4d.js";const v=({steps:a,currentStep:s,fontSize:Q,spacing:U,indicatorSize:W,scheme:n,activeColor:S,StepComponent:P,...te})=>{const X={"--spacing":U,"--indicator-size":W,"--active-color":S,"--active-color-bg":S?re(S).lighten(43):null},Z=a.map((o,r)=>e.jsxs(f,{className:D({active:s===r,completed:s>r,todo:s<r,last:r===a.length-1,[n]:n,"ui-step":!0}),children:[e.jsx(f,{className:D({active:s===r,completed:s>r,todo:s<r,last:r===a.length-1,[n]:n,activeColor:S,"ui-step__indicator":!0}),children:s>r&&e.jsx(se,{className:"indicator-icon",icon:ae})}),e.jsx(f,{className:"ui-step__content",children:P?e.jsx(P,{step:o}):e.jsxs(e.Fragment,{children:[e.jsx(k,{marginY:"0",className:"ui-step__content-title",fontSize:Q,children:typeof o=="string"?o:o.text}),o.description&&e.jsx(k,{marginY:"0",fontFace:"circularSTD",scale:"subhead",color:"#878B9A",children:o.description})]})})]},`step__${r}`));return e.jsx(f,{className:D(["ui-stepper",n]),style:{...X},children:Z})},y=v;v.propTypes={steps:t.array,currentStep:t.number,fontSize:t.string,spacing:t.string,indicatorSize:t.string,scheme:t.oneOf(["variant-1","variant-2"]),activeColor:t.string};v.defaultProps={currentStep:0,fontSize:"14px",spacing:"50px",indicatorSize:"20px",scheme:"variant-1"};v.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{currentStep:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},fontSize:{defaultValue:{value:'"14px"',computed:!1},type:{name:"string"},required:!1,description:""},spacing:{defaultValue:{value:'"50px"',computed:!1},type:{name:"string"},required:!1,description:""},indicatorSize:{defaultValue:{value:'"20px"',computed:!1},type:{name:"string"},required:!1,description:""},scheme:{defaultValue:{value:'"variant-1"',computed:!1},type:{name:"enum",value:[{value:'"variant-1"',computed:!1},{value:'"variant-2"',computed:!1}]},required:!1,description:""},steps:{type:{name:"array"},required:!1,description:""},activeColor:{type:{name:"string"},required:!1,description:""}}};const ge={component:y,title:"Stepper",argTypes:{}},h=a=>e.jsx(L,{children:e.jsx(y,{...a})}),x=a=>e.jsx(L,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(ee,{darkMode:!0,children:e.jsx(y,{...a})})})}),i=h.bind({});i.args={steps:[{text:"Complete basic KYB",description:"August 16, 2021 at 5:15 PM"},{text:"Select program use case"},{text:"Configure program"},{text:"Demo & launch program"}]};const p=h.bind({});p.args={steps:[{text:"Complete basic KYB"},{text:"Select program use case"},{text:"Configure program"},{text:"Demo & launch program"}],currentStep:1};const c=h.bind({});c.args={steps:["Complete basic KYB","Select program use case","Configure program","Demo & launch program"]};const d=h.bind({});d.args={steps:["Complete basic KYB","Select program use case","Configure program","Demo & launch program"],currentStep:1};const m=x.bind({});m.args={steps:[{text:"Complete basic KYB"},{text:"Select program use case"},{text:"Configure program"},{text:"Demo & launch program"}]};const u=x.bind({});u.args={steps:[{text:"Complete basic KYB"},{text:"Select program use case"},{text:"Configure program"},{text:"Demo & launch program"}],currentStep:1};const l=x.bind({});l.args={steps:["Complete basic KYB","Select program use case","Configure program","Demo & launch program"]};const g=x.bind({});g.args={steps:["Complete basic KYB","Select program use case","Configure program","Demo & launch program"],currentStep:1};var T,b,j;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>`,...(j=(b=i.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var C,M,A;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`args => <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var _,B,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`args => <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>`,...(O=(B=c.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var Y,K,N;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`args => <ThemeProvider>
    <Stepper {...args} />
  </ThemeProvider>`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var q,z,V;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(V=(z=m.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var I,$,E;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(E=($=u.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var F,R,w;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(w=(R=l.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var G,H,J;g.parameters={...g.parameters,docs:{...(G=g.parameters)==null?void 0:G.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Stepper {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(J=(H=g.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const Se=["Default","SecondStep","ArrayOfStrings","ArrayOfStringsSecondStep","DefaultDark","SecondStepDark","ArrayOfStringsDark","ArrayOfStringsSecondStepDark"];export{c as ArrayOfStrings,l as ArrayOfStringsDark,d as ArrayOfStringsSecondStep,g as ArrayOfStringsSecondStepDark,i as Default,m as DefaultDark,p as SecondStep,u as SecondStepDark,Se as __namedExportsOrder,ge as default};
//# sourceMappingURL=Stepper.stories-c7c0ceb4.js.map
