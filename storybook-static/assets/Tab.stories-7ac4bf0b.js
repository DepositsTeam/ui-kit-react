import{j as e}from"./jsx-runtime-94f6e698.js";import{r as d}from"./index-8db94870.js";import{P as i}from"./index-58d3fd43.js";import{c as S,B as $,D as z}from"./Box-aee9185f.js";import{k as K}from"./keyGen-1dd6a0fe.js";import{T as a}from"./Text-d05ef909.js";import{T as p}from"./ThemeProvider-9c87a391.js";import{C as h}from"./Card-518b68b9.js";import"./_commonjsHelpers-042e6b4d.js";import"./Icon-624e5d5f.js";import"./Radio-16b5cdfe.js";import"./Checkbox-adf566e7.js";const k=({is:t,text:n,tabs:s,className:u,initiallyActiveTab:r,horizontal:j,spacing:C,onTabChange:v,...V})=>{const[b,I]=d.useState(0);d.useLayoutEffect(()=>{r!==void 0&&typeof r=="number"&&I(r)},[r]),d.useEffect(()=>{v&&typeof v=="function"&&v(b,s[b])},[b]);const L=S({"ui-tabs":!0,horizontal:j}),O=(o,D)=>{D.disabled||I(o)},q=o=>o<s.length-1?j?{marginRight:C||0}:{marginBottom:C||0}:{},H=s.map(({text:o,is:D,...l},g)=>{const J=q(g);return d.createElement($,{display:"inline-block",cursor:"pointer",...J,...l,key:K(),className:S({"ui-tab":!0,active:b===g,disabled:typeof l=="object"&&l.disabled},u),onClick:()=>O(g,l)},e.jsx(a,{is:"span",scale:"subhead",children:o}))});return e.jsx("div",{className:L,children:H})},f=k;k.propTypes={tabs:i.array,horizontal:i.bool,spacing:i.string,initiallyActiveTab:i.number,onTabChange:i.func};k.defaultProps={horizontal:!0,initiallyActiveTab:0,spacing:"4px"};const ce={title:"Tabs",component:f},Q=t=>e.jsx(p,{children:e.jsx(f,{...t})}),U=t=>e.jsx(p,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(z,{darkMode:!0,children:e.jsx(f,{...t})})})}),c=Q.bind({});c.args={tabs:[{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"}]};const x=U.bind({});x.args={tabs:[{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"},{text:"Test link",href:"#"}]};const G=t=>{const[n,s]=d.useState(0),u=[{text:"Tab 1",href:"#"},{text:"Tab 2",href:"#"},{text:"Tab 3",href:"#"},{text:"Tab 4",href:"#"},{text:"Tab 5 (Disabled)",href:"#",disabled:!0}];return e.jsx(p,{children:e.jsxs($,{children:[e.jsx(f,{...t,onTabChange:r=>s(r),tabs:u}),n===0&&e.jsx(h,{children:e.jsx(a,{children:"First set of content"})}),n===1&&e.jsx(h,{children:e.jsx(a,{children:"Second set of content"})}),n===2&&e.jsx(h,{children:e.jsx(a,{children:"Third set of content"})}),n===3&&e.jsx(h,{children:e.jsx(a,{children:"Fourth set of content"})}),e.jsxs(a,{children:["Active Tab Index: ",n]})]})})},m=G.bind({}),T=G.bind({});T.decorators=[t=>e.jsx(p,{children:e.jsx("div",{style:{padding:"3em",background:"#121A26"},children:e.jsx(z,{darkMode:!0,children:e.jsx(t,{})})})})];var P,A,y;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`args => <ThemeProvider>
    <Tab {...args} />
  </ThemeProvider>`,...(y=(A=c.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var M,B,E;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`args => <ThemeProvider>
    <div style={{
    padding: "3em",
    background: "#121A26"
  }}>
      <DarkModeProvider darkMode={true}>
        <Tab {...args} />
      </DarkModeProvider>
    </div>
  </ThemeProvider>`,...(E=(B=x.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,W,N;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`args => {
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
}`,...(N=(W=m.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var _,w,R;T.parameters={...T.parameters,docs:{...(_=T.parameters)==null?void 0:_.docs,source:{originalSource:`args => {
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
}`,...(R=(w=T.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const xe=["Default","DarkModeDefault","SampleWithContent","DarkModeSampleWithContent"];export{x as DarkModeDefault,T as DarkModeSampleWithContent,c as Default,m as SampleWithContent,xe as __namedExportsOrder,ce as default};
//# sourceMappingURL=Tab.stories-7ac4bf0b.js.map
