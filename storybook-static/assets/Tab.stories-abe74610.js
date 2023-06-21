import{j as e}from"./jsx-runtime-94f6e698.js";import{r as d}from"./index-8db94870.js";import{P as i}from"./index-58d3fd43.js";import{c as D,B as w,D as z}from"./Box-30be3602.js";import{k as J}from"./keyGen-1dd6a0fe.js";import{T as a}from"./Text-c3d56319.js";import{T as f}from"./ThemeProvider-6ae8e1ed.js";import{C as b}from"./Card-34f57719.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-1a826c67.js";import"./Radio-d2397f34.js";import"./Checkbox-415ed6fa.js";const u=({is:t,text:n,tabs:s,className:v,initiallyActiveTab:r,horizontal:C,spacing:j,onTabChange:g,...U})=>{const[l,I]=d.useState(0);d.useLayoutEffect(()=>{r!==void 0&&typeof r=="number"&&I(r)},[r]),d.useEffect(()=>{g&&typeof g=="function"&&g(l,s[l])},[l]);const $=D({"ui-tabs":!0,horizontal:C}),G=(o,y)=>{y.disabled||I(o)},L=o=>o<s.length-1?C?{marginRight:j||0}:{marginBottom:j||0}:{},O=s.map(({text:o,is:y,...p},k)=>{const H=L(k);return d.createElement(w,{display:"inline-block",cursor:"pointer",...H,...p,key:J(),className:D({"ui-tab":!0,active:l===k,disabled:typeof p=="object"&&p.disabled},v),onClick:()=>G(k,p)},e.jsx(a,{is:"span",scale:"subhead",children:o}))});return e.jsx("div",{className:$,children:O})},h=u;u.propTypes={tabs:i.array,horizontal:i.bool,spacing:i.string,initiallyActiveTab:i.number,onTabChange:i.func};u.defaultProps={horizontal:!0,initiallyActiveTab:0,spacing:"4px"};u.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{horizontal:{defaultValue:{value:"true",computed:!1},type:{name:"bool"},required:!1,description:""},initiallyActiveTab:{defaultValue:{value:"0",computed:!1},type:{name:"number"},required:!1,description:""},spacing:{defaultValue:{value:'"4px"',computed:!1},type:{name:"string"},required:!1,description:""},tabs:{type:{name:"array"},required:!1,description:""},onTabChange:{type:{name:"func"},required:!1,description:""}}};const ce={title:"Tabs",component:h},K=t=>e.jsx(f,{children:e.jsx(h,{...t})}),Q=t=>e.jsx(f,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(z,{darkMode:!0,children:e.jsx(h,{...t})})})}),c=K.bind({});c.args={tabs:[{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"}]};const x=Q.bind({});x.args={tabs:[{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"}]};const R=t=>{const[n,s]=d.useState(0),v=[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",href:"#",disabled:!0}];return e.jsx(f,{children:e.jsxs(w,{children:[e.jsx(h,{...t,onTabChange:r=>s(r),tabs:v}),n===0&&e.jsx(b,{children:e.jsx(a,{children:"First set of content"})}),n===1&&e.jsx(b,{children:e.jsx(a,{children:"Second set of content"})}),n===2&&e.jsx(b,{children:e.jsx(a,{children:"Third set of content"})}),n===3&&e.jsx(b,{children:e.jsx(a,{children:"Fourth set of content"})}),e.jsxs(a,{children:["Active Tab Index: ",n]})]})})},m=R.bind({}),T=R.bind({});T.decorators=[t=>e.jsx(f,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(z,{darkMode:!0,children:e.jsx(t,{})})})})];var S,P,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`args => <ThemeProvider>
    <Tab {...args} />
  </ThemeProvider>`,...(A=(P=c.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var M,B,E;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Tab {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(E=(B=x.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,q,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [{
    text: "Tab 1",
    href: "#"
  }, {
    text: "Tab 2",
    href: "#"
  }, {
    text: "Tab 3",
    href: "#"
  }, {
    text: "Tab 4",
    href: "#"
  }, {
    text: "Tab 5 (Disabled)",
    href: "#",
    disabled: true
  }];
  return <ThemeProvider>
      <Box>
        <Tab {...args} onTabChange={index => setActiveTabIndex(index)} tabs={tabs} />
        {activeTabIndex === 0 && <Card>
            <Text>First set of content</Text>
          </Card>}
        {activeTabIndex === 1 && <Card>
            <Text>Second set of content</Text>
          </Card>}
        {activeTabIndex === 2 && <Card>
            <Text>Third set of content</Text>
          </Card>}
        {activeTabIndex === 3 && <Card>
            <Text>Fourth set of content</Text>
          </Card>}
        <Text>Active Tab Index: {activeTabIndex}</Text>
      </Box>
    </ThemeProvider>;
}`,...(N=(q=m.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var W,_,V;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabs = [{
    text: "Tab 1",
    href: "#"
  }, {
    text: "Tab 2",
    href: "#"
  }, {
    text: "Tab 3",
    href: "#"
  }, {
    text: "Tab 4",
    href: "#"
  }, {
    text: "Tab 5 (Disabled)",
    href: "#",
    disabled: true
  }];
  return <ThemeProvider>
      <Box>
        <Tab {...args} onTabChange={index => setActiveTabIndex(index)} tabs={tabs} />
        {activeTabIndex === 0 && <Card>
            <Text>First set of content</Text>
          </Card>}
        {activeTabIndex === 1 && <Card>
            <Text>Second set of content</Text>
          </Card>}
        {activeTabIndex === 2 && <Card>
            <Text>Third set of content</Text>
          </Card>}
        {activeTabIndex === 3 && <Card>
            <Text>Fourth set of content</Text>
          </Card>}
        <Text>Active Tab Index: {activeTabIndex}</Text>
      </Box>
    </ThemeProvider>;
}`,...(V=(_=T.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};const xe=["Default","DarkModeDefault","SampleWithContent","DarkModeSampleWithContent"];export{x as DarkModeDefault,T as DarkModeSampleWithContent,c as Default,m as SampleWithContent,xe as __namedExportsOrder,ce as default};
//# sourceMappingURL=Tab.stories-abe74610.js.map
