import{j as r}from"./jsx-runtime-94f6e698.js";import"./index-8db94870.js";import{c as yr,B as Br,D as fr}from"./Box-30be3602.js";import{P as d}from"./index-58d3fd43.js";import{T as te}from"./Text-c3d56319.js";import{I as Gr}from"./Icon-1a826c67.js";import{C as _r}from"./ChevronFilledDown-7400fa3d.js";import{k as Rr}from"./keyGen-1dd6a0fe.js";import{T as Tr}from"./ThemeProvider-6ae8e1ed.js";import"./_commonjsHelpers-042e6b4d.js";const Nr=(s,o="?")=>!s||typeof s!="string"?o:s.replace(/\s+/," ").split(" ").slice(0,3).map(H=>H&&H[0]).join(""),W=["cyan","green","orange","red","gray","blue"],Ur=(s,o)=>s.colorScheme||(o<W.length?W[o]:W[o%W.length]),xr=(s,o=0)=>yr({[`background__${Ur(s,o)}`]:!s.imgURL,[`status__${s.status}`]:s.status},"ui-avatar"),X=({avatar:s,subtle:o,dropdown:H,size:Z,visibleAvatars:re,stacked:Q,avatars:n,className:Ar,...Dr})=>{const Cr=yr({"ui-avatars__wrapper":!0,subtle:o,[`size__${Z}`]:!0,padded:n.length&!Q,stacked:n.length&&Q},Ar),se=n&&n.length?n.length-re:0,oe=(t,ee=0)=>r.jsxs(r.Fragment,{children:[r.jsxs("div",{style:{...t.imgURL?{backgroundImage:`url(${t.imgURL})`}:{}},className:xr(t,ee),children:[!t.imgURL&&r.jsx(te,{equalLineHeight:!0,scale:Z==="small"?"overline":"footnote",children:Nr(t.name)}),t.status&&!Q&&r.jsx("div",{className:"ui-avatar__avatar-status"})]}),H&&!Q&&r.jsx(Gr,{className:"ui-avatar__dropdown-icon",icon:_r})]}),Mr=n.length?n.slice(0,re).map((t,ee)=>r.jsx("div",{className:"ui-avatar__wrapper",children:oe(t,ee)},`ui-avatar__${Rr()}`)):r.jsx("div",{className:"ui-avatar__wrapper",children:oe(s)});return r.jsxs(Br,{is:"div",className:Cr,...Dr,children:[Mr,se>0&&r.jsx("div",{className:"ui-avatar__wrapper",children:r.jsx("div",{className:"ui-avatar background__extra",children:r.jsxs(te,{scale:Z==="small"?"overline":"footnote",children:["+",se]})})})]})};X.propTypes={subtle:d.bool,stacked:d.bool,size:d.oneOf(["small","medium","large"]),avatar:d.object,avatars:d.array,dropdown:d.bool,visibleAvatars:d.number};X.defaultProps={subtle:!1,stacked:!1,size:"large",avatar:{name:"Eric Aprioku"},dropdown:!1,visibleAvatars:6,avatars:[]};const ae=X;X.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{subtle:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},stacked:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},size:{defaultValue:{value:'"large"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]},required:!1,description:""},avatar:{defaultValue:{value:`{
  name: "Eric Aprioku",
}`,computed:!1},type:{name:"object"},required:!1,description:""},dropdown:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},visibleAvatars:{defaultValue:{value:"6",computed:!1},type:{name:"number"},required:!1,description:""},avatars:{defaultValue:{value:"[]",computed:!1},type:{name:"array"},required:!1,description:""}}};const Jr={title:"Avatar",component:ae,argTypes:{}},e=s=>r.jsx(Tr,{children:r.jsx(ae,{...s})}),a=s=>r.jsx(Tr,{children:r.jsx("div",{style:{padding:"3em",background:"#121A26"},children:r.jsx(fr,{darkMode:!0,children:r.jsx(ae,{...s})})})}),P=e.bind({});P.args={avatars:[{status:"green",name:"Charles Babbage",smartColor:"#3f3f3f"},{status:"green",name:"Charles Babbage",smartColor:"#000000"},{status:"green",name:"Charles Babbage",smartColor:"#6b32a8"},{status:"green",name:"Charles Babbage",smartColor:"#e00b64"},{status:"green",name:"Charles Babbage",smartColor:"#efefef"}]};const y=e.bind({});y.args={subtle:!0,avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const T=a.bind({});T.args={subtle:!0,avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const A=e.bind({});A.args={subtle:!0,size:"medium",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const D=a.bind({});D.args={subtle:!0,size:"medium",avatars:[{status:"grey",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const C=e.bind({});C.args={subtle:!0,size:"small",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const M=a.bind({});M.args={subtle:!0,size:"small",avatars:[{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage"},{status:"green",name:"Charles Babbage",imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}]};const B=e.bind({});B.args={subtle:!0,avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};const f=a.bind({});f.args={subtle:!0,avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};const G=e.bind({});G.args={subtle:!0,avatar:{colorScheme:"green",name:"Steven Taliban"}};const _=a.bind({});_.args={subtle:!0,avatar:{colorScheme:"green",name:"Steven Taliban"}};const R=e.bind({});R.args={subtle:!0,avatar:{colorScheme:"orange",name:"John Doe"}};const N=a.bind({});N.args={subtle:!0,avatar:{colorScheme:"orange",name:"John Doe"}};const U=e.bind({});U.args={subtle:!0,avatar:{colorScheme:"red",name:"Cynthia Karen"}};const x=a.bind({});x.args={subtle:!0,avatar:{colorScheme:"red",name:"Cynthia Karen"}};const j=e.bind({});j.args={subtle:!0,avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};const L=a.bind({});L.args={subtle:!0,avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};const O=e.bind({});O.args={subtle:!0,avatar:{colorScheme:"blue",name:"Steven Taliban"}};const I=a.bind({});I.args={subtle:!0,avatar:{colorScheme:"blue",name:"Steven Taliban"}};const m=e.bind({});m.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};m.storyName="Solid Cyan";const i=a.bind({});i.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe"}};i.storyName="Solid Cyan Dark";const c=e.bind({});c.args={avatar:{colorScheme:"green",name:"Steven Taliban"}};c.storyName="Solid Green";const u=a.bind({});u.args={avatar:{colorScheme:"green",name:"Steven Taliban"}};u.storyName="Solid Green Dark";const g=e.bind({});g.args={avatar:{colorScheme:"orange",name:"John Doe"}};g.storyName="Solid Orange";const l=a.bind({});l.args={avatar:{colorScheme:"orange",name:"John Doe"}};l.storyName="Solid Orange Dark";const v=e.bind({});v.args={avatar:{colorScheme:"orange",name:"Cynthia Karen"}};v.storyName="Solid Red";const p=a.bind({});p.args={avatar:{colorScheme:"orange",name:"Cynthia Karen"}};p.storyName="Solid Red Dark";const b=e.bind({});b.args={avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};b.storyName="Solid Gray";const h=a.bind({});h.args={avatar:{colorScheme:"gray",name:"Yasmine Belle Deuce"}};h.storyName="Solid Gray Dark";const k=e.bind({});k.args={avatar:{colorScheme:"blue",name:"Steven Taliban"}};k.storyName="Solid Blue";const S=a.bind({});S.args={avatar:{colorScheme:"blue",name:"Steven Taliban"}};S.storyName="Solid Blue Dark";const w=e.bind({});w.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"green"}};const q=a.bind({});q.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"green"}};const V=e.bind({});V.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"orange"}};const $=a.bind({});$.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"orange"}};const z=e.bind({});z.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"gray"}};const E=a.bind({});E.args={avatar:{colorScheme:"cyan",name:"Charles Ukpe",status:"gray"}};const J=e.bind({});J.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}};const K=a.bind({});K.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png"}};const Y=e.bind({});Y.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",status:"green"}};const F=a.bind({});F.args={avatar:{imgURL:"https://assets.ondeposits.com/img/ui-kit-demo/avatar/lady1.png",status:"green"}};var ne,de,me;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ie,ce,ue;y.parameters={...y.parameters,docs:{...(ie=y.parameters)==null?void 0:ie.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ue=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var ge,le,ve;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(ve=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ve.source}}};var pe,be,he;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(he=(be=A.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ke,Se,Pe;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Pe=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:Pe.source}}};var ye,Te,Ae;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Ae=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:Ae.source}}};var De,Ce,Me;M.parameters={...M.parameters,docs:{...(De=M.parameters)==null?void 0:De.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Me=(Ce=M.parameters)==null?void 0:Ce.docs)==null?void 0:Me.source}}};var Be,fe,Ge;B.parameters={...B.parameters,docs:{...(Be=B.parameters)==null?void 0:Be.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Ge=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:Ge.source}}};var _e,Re,Ne;f.parameters={...f.parameters,docs:{...(_e=f.parameters)==null?void 0:_e.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ne=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};var Ue,xe,je;G.parameters={...G.parameters,docs:{...(Ue=G.parameters)==null?void 0:Ue.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(je=(xe=G.parameters)==null?void 0:xe.docs)==null?void 0:je.source}}};var Le,Oe,Ie;_.parameters={..._.parameters,docs:{...(Le=_.parameters)==null?void 0:Le.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ie=(Oe=_.parameters)==null?void 0:Oe.docs)==null?void 0:Ie.source}}};var we,qe,Ve;R.parameters={...R.parameters,docs:{...(we=R.parameters)==null?void 0:we.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Ve=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var $e,ze,Ee;N.parameters={...N.parameters,docs:{...($e=N.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ee=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};var Je,Ke,Ye;U.parameters={...U.parameters,docs:{...(Je=U.parameters)==null?void 0:Je.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Ye=(Ke=U.parameters)==null?void 0:Ke.docs)==null?void 0:Ye.source}}};var Fe,He,Qe;x.parameters={...x.parameters,docs:{...(Fe=x.parameters)==null?void 0:Fe.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Qe=(He=x.parameters)==null?void 0:He.docs)==null?void 0:Qe.source}}};var We,Xe,Ze;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(ma=(da=I.parameters)==null?void 0:da.docs)==null?void 0:ma.source}}};var ia,ca,ua;m.parameters={...m.parameters,docs:{...(ia=m.parameters)==null?void 0:ia.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ua=(ca=m.parameters)==null?void 0:ca.docs)==null?void 0:ua.source}}};var ga,la,va;i.parameters={...i.parameters,docs:{...(ga=i.parameters)==null?void 0:ga.docs,source:{originalSource:`args => <ThemeProvider>
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
  </ThemeProvider>`,...(ha=(ba=c.parameters)==null?void 0:ba.docs)==null?void 0:ha.source}}};var ka,Sa,Pa;u.parameters={...u.parameters,docs:{...(ka=u.parameters)==null?void 0:ka.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Pa=(Sa=u.parameters)==null?void 0:Sa.docs)==null?void 0:Pa.source}}};var ya,Ta,Aa;g.parameters={...g.parameters,docs:{...(ya=g.parameters)==null?void 0:ya.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Aa=(Ta=g.parameters)==null?void 0:Ta.docs)==null?void 0:Aa.source}}};var Da,Ca,Ma;l.parameters={...l.parameters,docs:{...(Da=l.parameters)==null?void 0:Da.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ma=(Ca=l.parameters)==null?void 0:Ca.docs)==null?void 0:Ma.source}}};var Ba,fa,Ga;v.parameters={...v.parameters,docs:{...(Ba=v.parameters)==null?void 0:Ba.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Ga=(fa=v.parameters)==null?void 0:fa.docs)==null?void 0:Ga.source}}};var _a,Ra,Na;p.parameters={...p.parameters,docs:{...(_a=p.parameters)==null?void 0:_a.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Na=(Ra=p.parameters)==null?void 0:Ra.docs)==null?void 0:Na.source}}};var Ua,xa,ja;b.parameters={...b.parameters,docs:{...(Ua=b.parameters)==null?void 0:Ua.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ja=(xa=b.parameters)==null?void 0:xa.docs)==null?void 0:ja.source}}};var La,Oa,Ia;h.parameters={...h.parameters,docs:{...(La=h.parameters)==null?void 0:La.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ia=(Oa=h.parameters)==null?void 0:Oa.docs)==null?void 0:Ia.source}}};var wa,qa,Va;k.parameters={...k.parameters,docs:{...(wa=k.parameters)==null?void 0:wa.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Va=(qa=k.parameters)==null?void 0:qa.docs)==null?void 0:Va.source}}};var $a,za,Ea;S.parameters={...S.parameters,docs:{...($a=S.parameters)==null?void 0:$a.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Ea=(za=S.parameters)==null?void 0:za.docs)==null?void 0:Ea.source}}};var Ja,Ka,Ya;w.parameters={...w.parameters,docs:{...(Ja=w.parameters)==null?void 0:Ja.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Ya=(Ka=w.parameters)==null?void 0:Ka.docs)==null?void 0:Ya.source}}};var Fa,Ha,Qa;q.parameters={...q.parameters,docs:{...(Fa=q.parameters)==null?void 0:Fa.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Qa=(Ha=q.parameters)==null?void 0:Ha.docs)==null?void 0:Qa.source}}};var Wa,Xa,Za;V.parameters={...V.parameters,docs:{...(Wa=V.parameters)==null?void 0:Wa.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(Za=(Xa=V.parameters)==null?void 0:Xa.docs)==null?void 0:Za.source}}};var er,ar,rr;$.parameters={...$.parameters,docs:{...(er=$.parameters)==null?void 0:er.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(rr=(ar=$.parameters)==null?void 0:ar.docs)==null?void 0:rr.source}}};var sr,or,tr;z.parameters={...z.parameters,docs:{...(sr=z.parameters)==null?void 0:sr.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(tr=(or=z.parameters)==null?void 0:or.docs)==null?void 0:tr.source}}};var nr,dr,mr;E.parameters={...E.parameters,docs:{...(nr=E.parameters)==null?void 0:nr.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(mr=(dr=E.parameters)==null?void 0:dr.docs)==null?void 0:mr.source}}};var ir,cr,ur;J.parameters={...J.parameters,docs:{...(ir=J.parameters)==null?void 0:ir.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(ur=(cr=J.parameters)==null?void 0:cr.docs)==null?void 0:ur.source}}};var gr,lr,vr;K.parameters={...K.parameters,docs:{...(gr=K.parameters)==null?void 0:gr.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(vr=(lr=K.parameters)==null?void 0:lr.docs)==null?void 0:vr.source}}};var pr,br,hr;Y.parameters={...Y.parameters,docs:{...(pr=Y.parameters)==null?void 0:pr.docs,source:{originalSource:`args => <ThemeProvider>
    <Avatar {...args} />
  </ThemeProvider>`,...(hr=(br=Y.parameters)==null?void 0:br.docs)==null?void 0:hr.source}}};var kr,Sr,Pr;F.parameters={...F.parameters,docs:{...(kr=F.parameters)==null?void 0:kr.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Avatar {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(Pr=(Sr=F.parameters)==null?void 0:Sr.docs)==null?void 0:Pr.source}}};const Kr=["SmartColorAvatars","SubtleLargeAvatars","SubtleDarkLargeAvatars","SubtleMediumAvatars","SubtleDarkMediumAvatars","SubtleSmallAvatars","SubtleDarkSmallAvatars","SubtleCyan","SubtleDarkCyan","SubtleGreen","SubtleDarkGreen","SubtleOrange","SubtleDarkOrange","SubtleRed","SubtleDarkRed","SubtleGray","SubtleDarkGray","SubtleBlue","SubtleDarkBlue","Cyan","DarkCyan","Green","DarkGreen","Orange","DarkOrange","Red","DarkRed","Gray","DarkGray","Blue","DarkBlue","CyanStatusGreen","DarkCyanStatusGreen","CyanStatusOrange","DarkCyanStatusOrange","CyanStatusGray","DarkCyanStatusGray","ImageAvatar","DarkImageAvatar","ImageAvatarStatus","DarkImageAvatarStatus"];export{k as Blue,m as Cyan,z as CyanStatusGray,w as CyanStatusGreen,V as CyanStatusOrange,S as DarkBlue,i as DarkCyan,E as DarkCyanStatusGray,q as DarkCyanStatusGreen,$ as DarkCyanStatusOrange,h as DarkGray,u as DarkGreen,K as DarkImageAvatar,F as DarkImageAvatarStatus,l as DarkOrange,p as DarkRed,b as Gray,c as Green,J as ImageAvatar,Y as ImageAvatarStatus,g as Orange,v as Red,P as SmartColorAvatars,O as SubtleBlue,B as SubtleCyan,I as SubtleDarkBlue,f as SubtleDarkCyan,L as SubtleDarkGray,_ as SubtleDarkGreen,T as SubtleDarkLargeAvatars,D as SubtleDarkMediumAvatars,N as SubtleDarkOrange,x as SubtleDarkRed,M as SubtleDarkSmallAvatars,j as SubtleGray,G as SubtleGreen,y as SubtleLargeAvatars,A as SubtleMediumAvatars,R as SubtleOrange,U as SubtleRed,C as SubtleSmallAvatars,Kr as __namedExportsOrder,Jr as default};
//# sourceMappingURL=Avatar.stories-72c10315.js.map
