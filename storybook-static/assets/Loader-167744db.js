import{j as e}from"./jsx-runtime-94f6e698.js";import{r as n}from"./index-8db94870.js";import{P as r}from"./index-58d3fd43.js";import{a as j,B as s,c as f}from"./Box-aee9185f.js";import{a as h}from"./ThemeProvider-9c87a391.js";const a=({fullPage:c,loading:i,loader:o,loaderSize:d,smartColor:t,translucent:m,ringThickness:p,customLoader:z,children:x,size:k,...L})=>{const{theme:l}=n.useContext(h),{darkMode:u}=n.useContext(j),g=t||(u?l["--dark-primary-color"]:l["--light-primary-color"]);return e.jsx(s,{style:{"--smart-color":g,"--loader-size":d,"--ring-thickness":p},className:f({"ui-d-loader":!0,fullPage:c,loading:i,translucent:m}),children:i?e.jsxs(s,{className:"ui-d-loader__wrapper",children:[o==="ring"&&e.jsxs(s,{className:"ring-loader",children:[e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{}),e.jsx(s,{})]}),o==="equalizer"&&e.jsx(s,{className:"equalizer-loader"}),o==="ringed-circle"&&e.jsx(s,{className:"ringed-circle-loader"})]}):x})},q=a;a.propTypes={fullPage:r.bool,loading:r.bool,loader:r.oneOf(["ring","equalizer","ringed-circle"]),size:r.string,thickness:r.string,customLoader:r.oneOf([r.element,r.node]),color:r.string};a.defaultProps={loading:!0,loader:"ring",loaderSize:"80px",ringThickness:"8px"};export{q as L};
//# sourceMappingURL=Loader-167744db.js.map
