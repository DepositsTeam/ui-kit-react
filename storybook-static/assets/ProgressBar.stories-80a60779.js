import{j as a}from"./jsx-runtime-94f6e698.js";import{r as g}from"./index-8db94870.js";import{P as e}from"./index-58d3fd43.js";import{a as pe,B as x,c as M,D as ue}from"./Box-30be3602.js";import{a as ge,T as ae}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";const P=({variant:r,percentage:f,totalSteps:k,currentStep:y,fillColor:se,emptyColor:D,darkFillColor:oe,darkEmptyColor:te,height:ne,...ie})=>{const[de,T]=g.useState(0),{darkMode:ce}=g.useContext(pe),{theme:u}=g.useContext(ge);g.useEffect(()=>{T(f||(y!==void 0&&k!==void 0?Math.round(y/k*100):0))},[f,y,k]);const me=ce?{"--fill-color":oe||u["--dark-primary-action-color"],"--empty-color":te?D:r==="variant-2"?u["--dark-primary-200"]:"#384860","--height":ne}:{"--fill-color":se||u["--light-primary-action-color"],"--empty-color":D||r==="variant-2"?u["--light-primary-200"]:"#384860","--height":ie.height};return a.jsx(x,{className:M({"ui-progress-bar":!0,[r]:r}),style:{...me},children:a.jsx(x,{className:M({"ui-progress-bar__active":!0,[r]:r}),style:{"--width":`${de}%`}})})},b=P;P.propTypes={percentage:e.oneOfType([e.number,e.string]),totalSteps:e.number,currentStep:e.number,fillColor:e.string,emptyColor:e.string,darkFillColor:e.string,darkEmptyColor:e.string,variant:e.oneOf(["variant-1","variant-2"]),height:e.string};P.defaultProps={variant:"variant-1",height:"6px"};P.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{variant:{defaultValue:{value:'"variant-1"',computed:!1},type:{name:"enum",value:[{value:'"variant-1"',computed:!1},{value:'"variant-2"',computed:!1}]},required:!1,description:""},height:{defaultValue:{value:'"6px"',computed:!1},type:{name:"string"},required:!1,description:""},percentage:{type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:""},totalSteps:{type:{name:"number"},required:!1,description:""},currentStep:{type:{name:"number"},required:!1,description:""},fillColor:{type:{name:"string"},required:!1,description:""},emptyColor:{type:{name:"string"},required:!1,description:""},darkFillColor:{type:{name:"string"},required:!1,description:""},darkEmptyColor:{type:{name:"string"},required:!1,description:""}}};const ye={title:"Progress bar",component:b,argTypes:{}},s=r=>a.jsx(ae,{children:a.jsx(b,{...r})}),h=r=>a.jsx(ae,{children:a.jsx("div",{style:{padding:"3em",background:"#121A26"},children:a.jsx(ue,{darkMode:!0,children:a.jsx(b,{...r})})})}),l=s.bind({}),o=s.bind({});o.args={percentage:50};const t=s.bind({});t.args={percentage:100};const n=s.bind({});n.args={totalSteps:5,currentStep:3};const v=h.bind({}),i=h.bind({});i.args={percentage:50};const d=h.bind({});d.args={percentage:100};const c=h.bind({});c.args={totalSteps:5,currentStep:3};const m=s.bind({});m.args={variant:"variant-2",percentage:25};const p=s.bind({});p.args={variant:"variant-2",percentage:25,height:"8px"};var B,S,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,j,F;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(F=(j=o.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var q,_,E;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(E=(_=t.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var H,V,A;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(A=(V=n.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var N,$,W;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <ProgressBar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(W=($=v.parameters)==null?void 0:$.docs)==null?void 0:W.source}}};var w,I,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <ProgressBar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var z,G,J;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <ProgressBar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,L,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <ProgressBar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Q=(L=c.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(re=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};const Te=["Default","FiftyPercent","HundredPercent","ThreeOutOfFive","DefaultDark","FiftyPercentDark","HundredPercentDark","ThreeOutOfFiveDark","Variant2","Variant2CustomHeight"];export{l as Default,v as DefaultDark,o as FiftyPercent,i as FiftyPercentDark,t as HundredPercent,d as HundredPercentDark,n as ThreeOutOfFive,c as ThreeOutOfFiveDark,m as Variant2,p as Variant2CustomHeight,Te as __namedExportsOrder,ye as default};
//# sourceMappingURL=ProgressBar.stories-80a60779.js.map
