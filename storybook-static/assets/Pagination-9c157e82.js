import{j as r}from"./jsx-runtime-94f6e698.js";import{r as d}from"./index-8db94870.js";import{c as _,B as b}from"./Box-d3e51d09.js";import{P as x}from"./index-58d3fd43.js";import{T as S}from"./Text-8df15dac.js";import{I as y}from"./Icon-91fc37b3.js";import{C as A,a as D}from"./ChevronArrowRight-2d745259.js";import{g as w}from"./ThemeProvider-ea1cf884.js";const h=(e,o,a=!0)=>(a||(e+=1,o-=1),Array.from({length:o-e+1},(c,l)=>e+l)),g="...",E=({totalPages:e,currentPage:o,onPageChange:a,currentPageSiblings:c})=>{const[l,n]=d.useState([]),[t,u]=d.useState(1),[P,C]=d.useState(!1),[m,f]=d.useState(!1),N=s=>{s>e||s<1||s==="..."||(u(s),a&&typeof a=="function"&&a(s))};return d.useEffect(()=>{u(o)},[]),d.useEffect(()=>{C(t===1),f(t===e);const s=c*2;let j=t-c,v=t+c;if(e<=s+2)n(h(1,e));else if(t<s)n([...h(1,s),g,e]);else if(t<e-s){const i=h(j,v),p=i.includes(1)?[...i,g]:[1,g,...i,g];n([...p,e])}else n([1,g,...h(e-s,e)])},[t,e]),{renderedPages:l,disableNext:m,disablePrev:P,initializedCurrentPage:t,updatePage:N}},T=({currentPage:e,totalPages:o,currentPageSiblings:a,onPageChange:c,className:l,smartColor:n,...t})=>{const{renderedPages:u,disableNext:P,disablePrev:C,initializedCurrentPage:m,updatePage:f}=E({totalPages:o,currentPage:e,currentPageSiblings:a,onPageChange:c}),N=(i,p=0)=>_({"ui-pagination__page-number__active":i===m},"ui-pagination__page-number"),s=_({disabled:C},"ui-pagination__control"),j=_({disabled:P},"ui-pagination__control"),v=u==null?void 0:u.map((i,p)=>r.jsx(b,{className:N(i,p),onClick:()=>f(i),children:r.jsx(S,{scale:"subhead",fontFace:"circularSTD",children:i})},p));return r.jsxs(b,{is:"div",...t,className:_({"ui-pagination":!0,[l]:l,smartColor:n}),style:{"--smart-color":n,"--smart-text-color":w(n)},children:[r.jsxs(b,{className:s,onClick:()=>f(m-1),children:[r.jsx(y,{className:"ui-pagination__left-arrow",icon:A}),r.jsx(S,{className:"ui-pagination__text-previous ui-pagination__text",scale:"subhead",fontFace:"circularSTD",children:"Previous"})]}),v,r.jsxs(b,{className:j,onClick:()=>f(m+1),children:[r.jsx(S,{className:"ui-pagination__text-next ui-pagination__text",scale:"subhead",fontFace:"circularSTD",children:"Next"}),r.jsx(y,{className:"ui-pagination__right-arrow",icon:D})]})]})},H=T;T.propTypes={currentPage:x.number,totalPages:x.number,currentPageSiblings:x.number,onPageChange:x.func,smartColor:x.string};T.defaultProps={currentPage:1,totalPages:30,currentPageSiblings:3};export{H as P};
//# sourceMappingURL=Pagination-9c157e82.js.map
