import{r as a}from"./index-8db94870.js";const b=(e,u)=>{const[o,s]=a.useState(""),[n,i]=a.useState(""),[f,l]=a.useState(""),[d,m]=a.useState("");return a.useEffect(()=>{if(Array.isArray(e.accepts))s(e.accepts.join(", "));else switch(e.accepts){case"image":s(".png, .jpg, .jpeg, .svg, .bmp, .gif");break;case"document":s(".csv, .xls, .xlsx, .pdf, .doc, .docx");break;case"csv":s(".csv");break;default:s(void 0)}},[e.accepts]),a.useEffect(()=>{m(n||(e.errorMessage?e.errorMessage:void 0))},[n,e.errorMessage]),{computedAccepts:o,computedErrorMessage:d,emptyFile:()=>{l("");const c=u.current;c.setAttribute("type","text"),c.setAttribute("type","file"),typeof e.onCleared=="function"&&e.onCleared()},updateName:c=>{let t=c.target.files||c.dataTransfer.files;l(t?t[0].name:""),t.length>e.maxFiles?i(`You cannot upload more than ${e.maxFiles} file(s) at once`):i("");for(let r of t)r.size>e.fileMaxSize*1e6&&i(`You cannot upload a file larger than ${e.fileMaxSize}MB`);if(n.value){const r=u.current.$el;r.setAttribute("type","text"),r.setAttribute("type","file"),l("")}else typeof e.onChange=="function"&&e.onChange(t.length>1?t:t[0])},selectedFileName:f}};export{b as u};
//# sourceMappingURL=useFilePicker.hook-794c241e.js.map
