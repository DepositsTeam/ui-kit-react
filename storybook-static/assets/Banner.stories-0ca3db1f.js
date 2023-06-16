import{j as e}from"./jsx-runtime-94f6e698.js";import{r as or}from"./index-8db94870.js";import{P as r}from"./index-58d3fd43.js";import{c as sr,B as I,D as ar}from"./Box-d3e51d09.js";import{T as E}from"./Text-8df15dac.js";import{I as _}from"./Icon-91fc37b3.js";import{I as ir,W as tr}from"./Warning-0ae99abc.js";import{E as nr}from"./Error-ff3d77f6.js";import{C as dr}from"./Check-fb71556a.js";import{C as cr}from"./Close-87a5e4c0.js";import{g as A,T as Ve}from"./ThemeProvider-ea1cf884.js";import"./_commonjsHelpers-042e6b4d.js";const R=({colorScheme:a,title:He,description:qe,removable:ze,full:Fe,onRemove:x,alignTop:Ge,icon:L,iconColor:j,noIcon:Je,smartColor:B,className:Ke,...Qe})=>{const[Ue,Xe]=or.useState(!0),Ye={info:ir,warning:tr,error:nr,success:dr},Ze={"--smart-color":B,"--smart-title-color":A(B),"--smart-description-color":A(B,"#6D7786","#94A3B8"),"--icon-color":j},er=sr({"ui-banner":!0,[`color-scheme__${a}`]:!0,alignTop:Ge,full:Fe,smartColor:B,iconColor:j},Ke),rr=()=>{x&&typeof x=="function"&&x(),Xe(!1)};return Ue?e.jsxs(I,{className:er,style:Ze,...Qe,children:[e.jsxs(I,{className:"text-content",children:[(a!=="default"||L)&&!Je&&e.jsx(_,{className:"ui-banner-icon",icon:L||Ye[a]}),e.jsx(E,{scale:"subhead",className:"ui-banner__title text-gray-700","font-face":"circularSTD",children:He}),e.jsx(E,{scale:"subhead",className:"ui-banner__description text-gray-600","font-face":"circularSTD",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:qe}})})]}),ze&&e.jsx(_,{icon:cr,onClick:rr,className:"ui-banner__close-icon",cursor:"pointer"})]}):e.jsx("div",{})},y=R;R.defaultProps={colorScheme:"default",full:!0,noIcon:!1};R.propTypes={title:r.string,description:r.string,colorScheme:r.oneOf(["default","info","warning","error","success"]),removable:r.bool,onRemove:r.func,full:r.bool,alignTop:r.bool,icon:r.object,iconColor:r.string,noIcon:r.bool,smartColor:r.string};const fr={title:"Banner",component:y,argTypes:{}},o=a=>e.jsx(Ve,{children:e.jsx(y,{...a})}),s=a=>e.jsx(Ve,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(ar,{darkMode:!0,children:e.jsx(y,{...a})})})}),i=o.bind({});i.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const t=s.bind({});t.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const n=o.bind({});n.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const d=s.bind({});d.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const c=o.bind({});c.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const m=s.bind({});m.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const u=o.bind({});u.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const l=s.bind({});l.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const p=o.bind({});p.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const g=s.bind({});g.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const v=o.bind({});v.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const b=s.bind({});b.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const T=o.bind({});T.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const h=s.bind({});h.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const k=o.bind({});k.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const P=s.bind({});P.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const D=o.bind({});D.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const f=s.bind({});f.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const S=o.bind({});S.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const M=s.bind({});M.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};var W,N,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var $,C,O;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(O=(C=t.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var V,H,q;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(q=(H=n.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var z,F,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(G=(F=d.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(re=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,se,ae;l.parameters={...l.parameters,docs:{...(oe=l.parameters)==null?void 0:oe.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ae=(se=l.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,te,ne;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(ne=(te=p.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var de,ce,me;g.parameters={...g.parameters,docs:{...(de=g.parameters)==null?void 0:de.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(me=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var ue,le,pe;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(pe=(le=v.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ge,ve,be;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(be=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Te,he,ke;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(ke=(he=T.parameters)==null?void 0:he.docs)==null?void 0:ke.source}}};var Pe,De,fe;h.parameters={...h.parameters,docs:{...(Pe=h.parameters)==null?void 0:Pe.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(fe=(De=h.parameters)==null?void 0:De.docs)==null?void 0:fe.source}}};var Se,Me,Be;k.parameters={...k.parameters,docs:{...(Se=k.parameters)==null?void 0:Se.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(Be=(Me=k.parameters)==null?void 0:Me.docs)==null?void 0:Be.source}}};var xe,Le,Re;P.parameters={...P.parameters,docs:{...(xe=P.parameters)==null?void 0:xe.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Re=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:Re.source}}};var ye,je,Ie;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(Ie=(je=D.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Ee,_e,Ae;f.parameters={...f.parameters,docs:{...(Ee=f.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ae=(_e=f.parameters)==null?void 0:_e.docs)==null?void 0:Ae.source}}};var We,Ne,we;S.parameters={...S.parameters,docs:{...(We=S.parameters)==null?void 0:We.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(we=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var $e,Ce,Oe;M.parameters={...M.parameters,docs:{...($e=M.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Oe=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.source}}};const Sr=["Default","DarkDefault","Success","DarkSuccess","Error","DarkError","Warning","DarkWarning","Info","DarkInfo","DefaultRemovable","DarkDefaultRemovable","SuccessRemovable","DarkSuccessRemovable","ErrorRemovable","DarkErrorRemovable","WarningRemovable","DarkWarningRemovable","InfoRemovable","DarkInfoRemovable"];export{t as DarkDefault,b as DarkDefaultRemovable,m as DarkError,P as DarkErrorRemovable,g as DarkInfo,M as DarkInfoRemovable,d as DarkSuccess,h as DarkSuccessRemovable,l as DarkWarning,f as DarkWarningRemovable,i as Default,v as DefaultRemovable,c as Error,k as ErrorRemovable,p as Info,S as InfoRemovable,n as Success,T as SuccessRemovable,u as Warning,D as WarningRemovable,Sr as __namedExportsOrder,fr as default};
//# sourceMappingURL=Banner.stories-0ca3db1f.js.map
