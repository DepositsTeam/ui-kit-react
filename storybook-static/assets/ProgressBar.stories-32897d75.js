import{j as a}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{P as r}from"./index-58d3fd43.js";import{a as gr,B as x,c as M,D as pr}from"./Box-aee9185f.js";import{a as ur,T as ar}from"./ThemeProvider-9c87a391.js";import"./_commonjsHelpers-042e6b4d.js";const D=({variant:e,percentage:v,totalSteps:k,currentStep:T,fillColor:sr,emptyColor:b,darkFillColor:or,darkEmptyColor:tr,height:nr,...dr})=>{const[ir,f]=u.useState(0),{darkMode:cr}=u.useContext(gr),{theme:p}=u.useContext(ur);u.useEffect(()=>{f(v||(T!==void 0&&k!==void 0?Math.round(T/k*100):0))},[v,T,k]);const mr=cr?{"--fill-color":or||p["--dark-primary-action-color"],"--empty-color":tr?b:e==="variant-2"?p["--dark-primary-200"]:"#384860","--height":nr}:{"--fill-color":sr||p["--light-primary-action-color"],"--empty-color":b||e==="variant-2"?p["--light-primary-200"]:"#384860","--height":dr.height};return a.jsx(x,{className:M({"ui-progress-bar":!0,[e]:e}),style:{...mr},children:a.jsx(x,{className:M({"ui-progress-bar__active":!0,[e]:e}),style:{"--width":`${ir}%`}})})},y=D;D.propTypes={percentage:r.oneOfType([r.number,r.string]),totalSteps:r.number,currentStep:r.number,fillColor:r.string,emptyColor:r.string,darkFillColor:r.string,darkEmptyColor:r.string,variant:r.oneOf(["variant-1","variant-2"]),height:r.string};D.defaultProps={variant:"variant-1",height:"6px"};const fr={title:"Progress bar",component:y,argTypes:{}},s=e=>a.jsx(ar,{children:a.jsx(y,{...e})}),h=e=>a.jsx(ar,{children:a.jsx("div",{style:{padding:"3em",background:"#121A26"},children:a.jsx(pr,{darkMode:!0,children:a.jsx(y,{...e})})})}),l=s.bind({}),o=s.bind({});o.args={percentage:50};const t=s.bind({});t.args={percentage:100};const n=s.bind({});n.args={totalSteps:5,currentStep:3};const P=h.bind({}),d=h.bind({});d.args={percentage:50};const i=h.bind({});i.args={percentage:100};const c=h.bind({});c.args={totalSteps:5,currentStep:3};const m=s.bind({});m.args={variant:"variant-2",percentage:25};const g=s.bind({});g.args={variant:"variant-2",percentage:25,height:"8px"};var B,S,O;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(O=(S=l.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var j,C,F;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var H,A,E;t.parameters={...t.parameters,docs:{...(H=t.parameters)==null?void 0:H.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(E=(A=t.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var _,V,N;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(N=(V=n.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var $,W,w;P.parameters={...P.parameters,docs:{...($=P.parameters)==null?void 0:$.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <ProgressBar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(w=(W=P.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};var R,q,z;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <ProgressBar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var G,I,J;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <ProgressBar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(J=(I=i.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var K,L,Q;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,rr,er;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <ThemeProvider>
    <ProgressBar {...args} />
  </ThemeProvider>`,...(er=(rr=g.parameters)==null?void 0:rr.docs)==null?void 0:er.source}}};const Dr=["Default","FiftyPercent","HundredPercent","ThreeOutOfFive","DefaultDark","FiftyPercentDark","HundredPercentDark","ThreeOutOfFiveDark","Variant2","Variant2CustomHeight"];export{l as Default,P as DefaultDark,o as FiftyPercent,d as FiftyPercentDark,t as HundredPercent,i as HundredPercentDark,n as ThreeOutOfFive,c as ThreeOutOfFiveDark,m as Variant2,g as Variant2CustomHeight,Dr as __namedExportsOrder,fr as default};
//# sourceMappingURL=ProgressBar.stories-32897d75.js.map
