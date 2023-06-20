import{j as r}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import{c as yr,B as Br,D as Gr}from"./Box-aee9185f.js";import{P as d}from"./index-58d3fd43.js";import{T as te}from"./Text-d05ef909.js";import{I as Rr}from"./Icon-624e5d5f.js";import{C as _r}from"./ChevronFilledDown-7400fa3d.js";import{k as Ur}from"./keyGen-1dd6a0fe.js";import{T as Tr}from"./ThemeProvider-9c87a391.js";import"./_commonjsHelpers-042e6b4d.js";const fr=(s,o="?")=>!s||typeof s!="string"?o:s.replace(/\s+/," ").split(" ").slice(0,3).map(Q=>Q&&Q[0]).join(""),W=["cyan","green","orange","red","gray","blue"],xr=(s,o)=>s.colorScheme||(o<W.length?W[o]:W[o%W.length]),Nr=(s,o=0)=>yr({[`background__${xr(s,o)}`]:!s.imgURL,[`status__${s.status}`]:s.status},"ui-avatar"),ee=({avatar:s,subtle:o,dropdown:Q,size:X,visibleAvatars:re,stacked:V,avatars:n,className:Dr,...Ar})=>{const Cr=yr({"ui-avatars__wrapper":!0,subtle:o,[`size__${X}`]:!0,padded:n.length&!V,stacked:n.length&&V},Dr),se=n&&n.length?n.length-re:0,oe=(t,Z=0)=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{...t.imgURL?{backgroundImage:`url(${t.imgURL})`}:{}},className:Nr(t,Z),children:[!t.imgURL&&r.jsx(te,{equalLineHeight:!0,scale:X==="small"?"overline":"footnote",children:fr(t.name)}),t.status&&!V&&r.jsx("div",{className:"ui-avatar__avatar-status"})]}),Q&&!V&&r.jsx(Rr,{className:"ui-avatar__dropdown-icon",icon:_r})]}),Mr=n.length?n.slice(0,re).map((t,Z)=>r.jsx("div",{className:"ui-avatar__wrapper",children:oe(t,Z)},`ui-avatar__${Ur()}`)):r.jsx("div",{className:"ui-avatar__wrapper",children:oe(s)});return r.jsxs(Br,{is:"div",className:Cr,...Ar,children:[Mr,se>0&&r.jsx("div",{className:"ui-avatar__wrapper",children:r.jsx("div",{className:"ui-avatar background__extra",children:r.jsxs(te,{scale:X==="small"?"overline":"footnote",children:["+",se]})})})]})};ee.propTypes={subtle:d.bool,stacked:d.bool,size:d.oneOf(["small","medium","large"]),avatar:d.object,avatars:d.array,dropdown:d.bool,visibleAvatars:d.number};ee.defaultProps={subtle:!1,stacked:!1,size:"large",avatar:{name:"Eric Aprioku"},dropdown:!1,visibleAvatars:6,avatars:[]};const ae=ee,Er={title:"Avatar",component:ae,argTypes:{}},e=s=>r.jsx(Tr,{children:r.jsx(ae,{...s})}),a=s=>r.jsx(Tr,{children:r.jsx("div",{style:{padding:"3em",background:"#121A26"},children:r.jsx(Gr,{darkMode:!0,children:r.jsx(ae,{...s})})})}),P=e.bind({});P.args={avatars:[{status:"green",name:"Charles Babbage",smartColor:"#3f3f3f"},{status:"green",name:"Charles Babbage",smartColor:"#000000"},{status:"green",name:"Charles Babbage",smartColor:"#6b32a8"},{status:"green",name:"Charles Babbage",smartColor:"#e00b64"},{status:"green",name:"Charles Babbage",smartColor:"#efefef"}]};const y=e.bind({});y.args={subtle:!0,avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const T=a.bind({});T.args={subtle:!0,avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const D=e.bind({});D.args={subtle:!0,size:"medium",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const A=a.bind({});A.args={subtle:!0,size:"medium",avatars:[{status:"grey",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const C=e.bind({});C.args={subtle:!0,size:"small",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const M=a.bind({});M.args={subtle:!0,size:"small",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const B=e.bind({});B.args={subtle:!0,avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};const G=a.bind({});G.args={subtle:!0,avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};const R=e.bind({});R.args={subtle:!0,avatar:{colorScheme:"green",name:"Steven Taliban"}};const _=a.bind({});_.args={subtle:!0,avatar:{colorScheme:"green",name:"Steven Taliban"}};const U=e.bind({});U.args={subtle:!0,avatar:{colorScheme:"orange",name:"John Doe"}};const f=a.bind({});f.args={subtle:!0,avatar:{colorScheme:"orange",name:"John Doe"}};const x=e.bind({});x.args={subtle:!0,avatar:{colorScheme:"red",name:"Cynthia Karen"}};const N=a.bind({});N.args={subtle:!0,avatar:{colorScheme:"red",name:"Cynthia Karen"}};const j=e.bind({});j.args={subtle:!0,avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};const L=a.bind({});L.args={subtle:!0,avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};const O=e.bind({});O.args={subtle:!0,avatar:{colorScheme:"blue",name:"Steven Taliban"}};const I=a.bind({});I.args={subtle:!0,avatar:{colorScheme:"blue",name:"Steven Taliban"}};const m=e.bind({});m.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};m.storyName="Solid Cyan";const i=a.bind({});i.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};i.storyName="Solid Cyan Dark";const c=e.bind({});c.args={avatar:{colorScheme:"green",name:"Steven Taliban"}};c.storyName="Solid Green";const g=a.bind({});g.args={avatar:{colorScheme:"green",name:"Steven Taliban"}};g.storyName="Solid Green Dark";const u=e.bind({});u.args={avatar:{colorScheme:"orange",name:"John Doe"}};u.storyName="Solid Orange";const l=a.bind({});l.args={avatar:{colorScheme:"orange",name:"John Doe"}};l.storyName="Solid Orange Dark";const v=e.bind({});v.args={avatar:{colorScheme:"orange",name:"Cynthia Karen"}};v.storyName="Solid Red";const p=a.bind({});p.args={avatar:{colorScheme:"orange",name:"Cynthia Karen"}};p.storyName="Solid Red Dark";const b=e.bind({});b.args={avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};b.storyName="Solid Gray";const h=a.bind({});h.args={avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};h.storyName="Solid Gray Dark";const k=e.bind({});k.args={avatar:{colorScheme:"blue",name:"Steven Taliban"}};k.storyName="Solid Blue";const S=a.bind({});S.args={avatar:{colorScheme:"blue",name:"Steven Taliban"}};S.storyName="Solid Blue Dark";const w=e.bind({});w.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"green"}};const $=a.bind({});$.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"green"}};const z=e.bind({});z.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"orange"}};const J=a.bind({});J.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"orange"}};const K=e.bind({});K.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"gray"}};const Y=a.bind({});Y.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"gray"}};const E=e.bind({});E.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}};const F=a.bind({});F.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}};const q=e.bind({});q.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",status:"green"}};const H=a.bind({});H.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",status:"green"}};var ne,de,me;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ie,ce,ge;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ge=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};var ue,le,ve;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ve=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ve.source}}};var pe,be,he;D.parameters={...D.parameters,docs:{...(pe=D.parameters)==null?void 0:pe.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(he=(be=D.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ke,Se,Pe;A.parameters={...A.parameters,docs:{...(ke=A.parameters)==null?void 0:ke.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Pe=(Se=A.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var ye,Te,De;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(De=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Ae,Ce,Me;M.parameters={...M.parameters,docs:{...(Ae=M.parameters)==null?void 0:Ae.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Me=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Me.source}}};var Be,Ge,Re;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Re=(Ge=B.parameters)==null?void 0:Ge.docs)==null?void 0:Re.source}}};var _e,Ue,fe;G.parameters={...G.parameters,docs:{...(_e=G.parameters)==null?void 0:_e.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(fe=(Ue=G.parameters)==null?void 0:Ue.docs)==null?void 0:fe.source}}};var xe,Ne,je;R.parameters={...R.parameters,docs:{...(xe=R.parameters)==null?void 0:xe.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(je=(Ne=R.parameters)==null?void 0:Ne.docs)==null?void 0:je.source}}};var Le,Oe,Ie;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ie=(Oe=_.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var we,$e,ze;U.parameters={...U.parameters,docs:{...(we=U.parameters)==null?void 0:we.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ze=($e=U.parameters)==null?void 0:$e.docs)==null?void 0:ze.source}}};var Je,Ke,Ye;f.parameters={...f.parameters,docs:{...(Je=f.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ye=(Ke=f.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Ee,Fe,qe;x.parameters={...x.parameters,docs:{...(Ee=x.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(qe=(Fe=x.parameters)==null?void 0:Fe.docs)==null?void 0:qe.source}}};var He,Qe,Ve;N.parameters={...N.parameters,docs:{...(He=N.parameters)==null?void 0:He.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ve=(Qe=N.parameters)==null?void 0:Qe.docs)==null?void 0:Ve.source}}};var We,Xe,Ze;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Ze=(Xe=j.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var ea,aa,ra;L.parameters={...L.parameters,docs:{...(ea=L.parameters)==null?void 0:ea.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ra=(aa=L.parameters)==null?void 0:aa.docs)==null?void 0:ra.source}}};var sa,oa,ta;O.parameters={...O.parameters,docs:{...(sa=O.parameters)==null?void 0:sa.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ta=(oa=O.parameters)==null?void 0:oa.docs)==null?void 0:ta.source}}};var na,da,ma;I.parameters={...I.parameters,docs:{...(na=I.parameters)==null?void 0:na.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ma=(da=I.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ia,ca,ga;m.parameters={...m.parameters,docs:{...(ia=m.parameters)==null?void 0:ia.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ga=(ca=m.parameters)==null?void 0:ca.docs)==null?void 0:ga.source}}};var ua,la,va;i.parameters={...i.parameters,docs:{...(ua=i.parameters)==null?void 0:ua.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(va=(la=i.parameters)==null?void 0:la.docs)==null?void 0:va.source}}};var pa,ba,ha;c.parameters={...c.parameters,docs:{...(pa=c.parameters)==null?void 0:pa.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ha=(ba=c.parameters)==null?void 0:ba.docs)==null?void 0:ha.source}}};var ka,Sa,Pa;g.parameters={...g.parameters,docs:{...(ka=g.parameters)==null?void 0:ka.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Pa=(Sa=g.parameters)==null?void 0:Sa.docs)==null?void 0:Pa.source}}};var ya,Ta,Da;u.parameters={...u.parameters,docs:{...(ya=u.parameters)==null?void 0:ya.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Da=(Ta=u.parameters)==null?void 0:Ta.docs)==null?void 0:Da.source}}};var Aa,Ca,Ma;l.parameters={...l.parameters,docs:{...(Aa=l.parameters)==null?void 0:Aa.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ma=(Ca=l.parameters)==null?void 0:Ca.docs)==null?void 0:Ma.source}}};var Ba,Ga,Ra;v.parameters={...v.parameters,docs:{...(Ba=v.parameters)==null?void 0:Ba.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Ra=(Ga=v.parameters)==null?void 0:Ga.docs)==null?void 0:Ra.source}}};var _a,Ua,fa;p.parameters={...p.parameters,docs:{...(_a=p.parameters)==null?void 0:_a.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(fa=(Ua=p.parameters)==null?void 0:Ua.docs)==null?void 0:fa.source}}};var xa,Na,ja;b.parameters={...b.parameters,docs:{...(xa=b.parameters)==null?void 0:xa.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ja=(Na=b.parameters)==null?void 0:Na.docs)==null?void 0:ja.source}}};var La,Oa,Ia;h.parameters={...h.parameters,docs:{...(La=h.parameters)==null?void 0:La.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ia=(Oa=h.parameters)==null?void 0:Oa.docs)==null?void 0:Ia.source}}};var wa,$a,za;k.parameters={...k.parameters,docs:{...(wa=k.parameters)==null?void 0:wa.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(za=($a=k.parameters)==null?void 0:$a.docs)==null?void 0:za.source}}};var Ja,Ka,Ya;S.parameters={...S.parameters,docs:{...(Ja=S.parameters)==null?void 0:Ja.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ya=(Ka=S.parameters)==null?void 0:Ka.docs)==null?void 0:Ya.source}}};var Ea,Fa,qa;w.parameters={...w.parameters,docs:{...(Ea=w.parameters)==null?void 0:Ea.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(qa=(Fa=w.parameters)==null?void 0:Fa.docs)==null?void 0:qa.source}}};var Ha,Qa,Va;$.parameters={...$.parameters,docs:{...(Ha=$.parameters)==null?void 0:Ha.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Va=(Qa=$.parameters)==null?void 0:Qa.docs)==null?void 0:Va.source}}};var Wa,Xa,Za;z.parameters={...z.parameters,docs:{...(Wa=z.parameters)==null?void 0:Wa.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Za=(Xa=z.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var er,ar,rr;J.parameters={...J.parameters,docs:{...(er=J.parameters)==null?void 0:er.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(rr=(ar=J.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var sr,or,tr;K.parameters={...K.parameters,docs:{...(sr=K.parameters)==null?void 0:sr.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(tr=(or=K.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var nr,dr,mr;Y.parameters={...Y.parameters,docs:{...(nr=Y.parameters)==null?void 0:nr.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(mr=(dr=Y.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var ir,cr,gr;E.parameters={...E.parameters,docs:{...(ir=E.parameters)==null?void 0:ir.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(gr=(cr=E.parameters)==null?void 0:cr.docs)==null?void 0:gr.source}}};var ur,lr,vr;F.parameters={...F.parameters,docs:{...(ur=F.parameters)==null?void 0:ur.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(vr=(lr=F.parameters)==null?void 0:lr.docs)==null?void 0:vr.source}}};var pr,br,hr;q.parameters={...q.parameters,docs:{...(pr=q.parameters)==null?void 0:pr.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(hr=(br=q.parameters)==null?void 0:br.docs)==null?void 0:hr.source}}};var kr,Sr,Pr;H.parameters={...H.parameters,docs:{...(kr=H.parameters)==null?void 0:kr.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Pr=(Sr=H.parameters)==null?void 0:Sr.docs)==null?void 0:Pr.source}}};const Fr=["SmartColorAvatars","SubtleLargeAvatars","SubtleDarkLargeAvatars","SubtleMediumAvatars","SubtleDarkMediumAvatars","SubtleSmallAvatars","SubtleDarkSmallAvatars","SubtleCyan","SubtleDarkCyan","SubtleGreen","SubtleDarkGreen","SubtleOrange","SubtleDarkOrange","SubtleRed","SubtleDarkRed","SubtleGray","SubtleDarkGray","SubtleBlue","SubtleDarkBlue","Cyan","DarkCyan","Green","DarkGreen","Orange","DarkOrange","Red","DarkRed","Gray","DarkGray","Blue","DarkBlue","CyanStatusGreen","DarkCyanStatusGreen","CyanStatusOrange","DarkCyanStatusOrange","CyanStatusGray","DarkCyanStatusGray","ImageAvatar","DarkImageAvatar","ImageAvatarStatus","DarkImageAvatarStatus"];export{k as Blue,m as Cyan,K as CyanStatusGray,w as CyanStatusGreen,z as CyanStatusOrange,S as DarkBlue,i as DarkCyan,Y as DarkCyanStatusGray,$ as DarkCyanStatusGreen,J as DarkCyanStatusOrange,h as DarkGray,g as DarkGreen,F as DarkImageAvatar,H as DarkImageAvatarStatus,l as DarkOrange,p as DarkRed,b as Gray,c as Green,E as ImageAvatar,q as ImageAvatarStatus,u as Orange,v as Red,P as SmartColorAvatars,O as SubtleBlue,B as SubtleCyan,I as SubtleDarkBlue,G as SubtleDarkCyan,L as SubtleDarkGray,_ as SubtleDarkGreen,T as SubtleDarkLargeAvatars,A as SubtleDarkMediumAvatars,f as SubtleDarkOrange,N as SubtleDarkRed,M as SubtleDarkSmallAvatars,j as SubtleGray,R as SubtleGreen,y as SubtleLargeAvatars,D as SubtleMediumAvatars,U as SubtleOrange,x as SubtleRed,C as SubtleSmallAvatars,Fr as __namedExportsOrder,Er as default};
//# sourceMappingURL=Avatar.stories-d00d7036.js.map
