import{j as e}from"./jsx-runtime-94f6e698.js";import{r as or}from"./index-8db94870.js";import{P as r}from"./index-58d3fd43.js";import{c as sr,B as I,D as ar}from"./Box-30be3602.js";import{T as _}from"./Text-abe69b1c.js";import{I as E}from"./Icon-1a826c67.js";import{I as ir,W as tr}from"./Warning-0ae99abc.js";import{E as nr}from"./Error-ff3d77f6.js";import{C as dr}from"./Check-fb71556a.js";import{C as cr}from"./Close-87a5e4c0.js";import{g as A,T as Ve}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";const B=({colorScheme:a,title:Oe,description:He,removable:ze,full:Fe,onRemove:x,alignTop:Ge,icon:L,iconColor:j,noIcon:Je,smartColor:y,className:Ke,...Qe})=>{const[Ue,Xe]=or.useState(!0),Ye={info:ir,warning:tr,error:nr,success:dr},Ze={"--smart-color":y,"--smart-title-color":A(y),"--smart-description-color":A(y,"#6D7786","#94A3B8"),"--icon-color":j},er=sr({"ui-banner":!0,[`color-scheme__${a}`]:!0,alignTop:Ge,full:Fe,smartColor:y,iconColor:j},Ke),rr=()=>{x&&typeof x=="function"&&x(),Xe(!1)};return Ue?e.jsxs(I,{className:er,style:Ze,...Qe,children:[e.jsxs(I,{className:"text-content",children:[(a!=="default"||L)&&!Je&&e.jsx(E,{className:"ui-banner-icon",icon:L||Ye[a]}),e.jsx(_,{scale:"subhead",className:"ui-banner__title text-gray-700","font-face":"circularSTD",children:Oe}),e.jsx(_,{scale:"subhead",className:"ui-banner__description text-gray-600","font-face":"circularSTD",children:e.jsx("span",{dangerouslySetInnerHTML:{__html:He}})})]}),ze&&e.jsx(E,{icon:cr,onClick:rr,className:"ui-banner__close-icon",cursor:"pointer"})]}):e.jsx("div",{})},R=B;B.defaultProps={colorScheme:"default",full:!0,noIcon:!1};B.propTypes={title:r.string,description:r.string,colorScheme:r.oneOf(["default","info","warning","error","success"]),removable:r.bool,onRemove:r.func,full:r.bool,alignTop:r.bool,icon:r.object,iconColor:r.string,noIcon:r.bool,smartColor:r.string};B.__docgenInfo={description:"",methods:[],displayName:"Banner",props:{colorScheme:{defaultValue:{value:'"default"',computed:!1},type:{name:"enum",value:[{value:'"default"',computed:!1},{value:'"info"',computed:!1},{value:'"warning"',computed:!1},{value:'"error"',computed:!1},{value:'"success"',computed:!1}]},required:!1,description:""},full:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},noIcon:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},title:{type:{name:"string"},required:!1,description:""},description:{type:{name:"string"},required:!1,description:""},removable:{type:{name:"bool"},required:!1,description:""},onRemove:{type:{name:"func"},required:!1,description:""},alignTop:{type:{name:"bool"},required:!1,description:""},icon:{type:{name:"object"},required:!1,description:""},iconColor:{type:{name:"string"},required:!1,description:""},smartColor:{type:{name:"string"},required:!1,description:""}}};const Dr={title:"Banner",component:R,argTypes:{}},o=a=>e.jsx(Ve,{children:e.jsx(R,{...a})}),s=a=>e.jsx(Ve,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(ar,{darkMode:!0,children:e.jsx(R,{...a})})})}),i=o.bind({});i.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const t=s.bind({});t.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la."};const n=o.bind({});n.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const d=s.bind({});d.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success"};const c=o.bind({});c.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const m=s.bind({});m.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error"};const l=o.bind({});l.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const u=s.bind({});u.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning"};const p=o.bind({});p.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const g=s.bind({});g.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info"};const v=o.bind({});v.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const b=s.bind({});b.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",removable:!0};const f=o.bind({});f.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const T=s.bind({});T.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"success",removable:!0};const h=o.bind({});h.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const k=s.bind({});k.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"error",removable:!0};const P=o.bind({});P.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const D=s.bind({});D.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"warning",removable:!0};const S=o.bind({});S.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};const M=s.bind({});M.args={title:"Title",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut la.",colorScheme:"info",removable:!0};var q,W,N;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(N=(W=i.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var w,C,$;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...($=(C=t.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var V,O,H;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(H=(O=n.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};var z,F,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;l.parameters={...l.parameters,docs:{...(Z=l.parameters)==null?void 0:Z.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(re=(ee=l.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var oe,se,ae;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ae=(se=u.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,te,ne;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(me=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var le,ue,pe;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(pe=(ue=v.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ge,ve,be;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(be=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var fe,Te,he;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(he=(Te=f.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var ke,Pe,De;T.parameters={...T.parameters,docs:{...(ke=T.parameters)==null?void 0:ke.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(De=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:De.source}}};var Se,Me,ye;h.parameters={...h.parameters,docs:{...(Se=h.parameters)==null?void 0:Se.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(ye=(Me=h.parameters)==null?void 0:Me.docs)==null?void 0:ye.source}}};var Be,xe,Le;k.parameters={...k.parameters,docs:{...(Be=k.parameters)==null?void 0:Be.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Le=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Le.source}}};var Re,je,Ie;P.parameters={...P.parameters,docs:{...(Re=P.parameters)==null?void 0:Re.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(Ie=(je=P.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var _e,Ee,Ae;D.parameters={...D.parameters,docs:{...(_e=D.parameters)==null?void 0:_e.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ae=(Ee=D.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};var qe,We,Ne;S.parameters={...S.parameters,docs:{...(qe=S.parameters)==null?void 0:qe.docs,source:{originalSource:`args => <ThemeProvider>
    <Banner {...args} />
  </ThemeProvider>`,...(Ne=(We=S.parameters)==null?void 0:We.docs)==null?void 0:Ne.source}}};var we,Ce,$e;M.parameters={...M.parameters,docs:{...(we=M.parameters)==null?void 0:we.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Banner {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...($e=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};const Sr=["Default","DarkDefault","Success","DarkSuccess","Error","DarkError","Warning","DarkWarning","Info","DarkInfo","DefaultRemovable","DarkDefaultRemovable","SuccessRemovable","DarkSuccessRemovable","ErrorRemovable","DarkErrorRemovable","WarningRemovable","DarkWarningRemovable","InfoRemovable","DarkInfoRemovable"];export{t as DarkDefault,b as DarkDefaultRemovable,m as DarkError,k as DarkErrorRemovable,g as DarkInfo,M as DarkInfoRemovable,d as DarkSuccess,T as DarkSuccessRemovable,u as DarkWarning,D as DarkWarningRemovable,i as Default,v as DefaultRemovable,c as Error,h as ErrorRemovable,p as Info,S as InfoRemovable,n as Success,f as SuccessRemovable,l as Warning,P as WarningRemovable,Sr as __namedExportsOrder,Dr as default};
//# sourceMappingURL=Banner.stories-fc1c0202.js.map
