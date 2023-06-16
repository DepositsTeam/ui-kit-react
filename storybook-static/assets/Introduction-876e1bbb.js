import{j as s}from"./jsx-runtime-94f6e698.js";import{M as i}from"./index-b5206870.js";import{R as o}from"./repo-d810fc91.js";import{u as n}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-0ede4ec6.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./index-8ce4a492.js";import"./index-d37d4223.js";import"./inheritsLoose-50ceb98b.js";import"./index-f8236e9a.js";import"./index-356e4a49.js";const a=""+new URL("code-brackets-9ef6443e.svg",import.meta.url).href,l=""+new URL("colors-ac9401f3.svg",import.meta.url).href,c=""+new URL("comments-f15a6837.svg",import.meta.url).href,d=""+new URL("direction-94a9917f.svg",import.meta.url).href,p=""+new URL("flow-275142c6.svg",import.meta.url).href,m=""+new URL("plugin-57148314.svg",import.meta.url).href,h=""+new URL("stackalt-2ad81543.svg",import.meta.url).href;function r(t){const e=Object.assign({h1:"h1",p:"p",strong:"strong",code:"code",a:"a"},n(),t.components);return s.jsxs(s.Fragment,{children:[s.jsx(i,{title:"Example/Introduction"}),`
`,s.jsx("style",{children:`
    .subheading {
      --mediumdark: '#999999';
      font-weight: 700;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span,
    .link-item p {
      margin: 0;
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `}),`
`,s.jsx(e.h1,{id:"welcome-to-storybook",children:"Welcome to Storybook"}),`
`,s.jsxs(e.p,{children:[`Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,s.jsx(e.strong,{children:"stories"})," to revisit during development, testing, or QA."]}),`
`,s.jsxs(e.p,{children:[`Browse example stories now by navigating to them in the sidebar.
View their code in the `,s.jsx(e.code,{children:"stories"}),` directory to learn how they work.
We recommend building UIs with a `,s.jsx(e.a,{href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer",children:s.jsx(e.strong,{children:"component-driven"})})," process starting with atomic components and ending with pages."]}),`
`,s.jsx("div",{className:"subheading",children:"Configure"}),`
`,s.jsxs("div",{className:"link-list",children:[s.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank",children:[s.jsx("img",{src:m,alt:"plugin"}),s.jsx("span",{children:s.jsxs(e.p,{children:[s.jsx("strong",{children:"Presets for popular tools"}),`
Easy setup for TypeScript, SCSS and more.`]})})]}),s.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank",children:[s.jsx("img",{src:h,alt:"Build"}),s.jsx("span",{children:s.jsxs(e.p,{children:[s.jsx("strong",{children:"Build configuration"}),`
How to customize webpack and Babel`]})})]}),s.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank",children:[s.jsx("img",{src:l,alt:"colors"}),s.jsx("span",{children:s.jsxs(e.p,{children:[s.jsx("strong",{children:"Styling"}),`
How to load and configure CSS libraries`]})})]}),s.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank",children:[s.jsx("img",{src:p,alt:"flow"}),s.jsx("span",{children:s.jsxs(e.p,{children:[s.jsx("strong",{children:"Data"}),`
Providers and mocking for data libraries`]})})]})]}),`
`,s.jsx("div",{className:"subheading",children:"Learn"}),`
`,s.jsxs("div",{className:"link-list",children:[s.jsxs("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank",children:[s.jsx("img",{src:o,alt:"repo"}),s.jsx("span",{children:s.jsxs(e.p,{children:[s.jsx("strong",{children:"Storybook documentation"}),`
Configure, customize, and extend`]})})]}),s.jsxs("a",{className:"link-item",href:"https://storybook.js.org/tutorials/",target:"_blank",children:[s.jsx("img",{src:d,alt:"direction"}),s.jsx("span",{children:s.jsxs(e.p,{children:[s.jsx("strong",{children:"In-depth guides"}),`
Best practices from leading teams`]})})]}),s.jsxs("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank",children:[s.jsx("img",{src:a,alt:"code"}),s.jsx("span",{children:s.jsxs(e.p,{children:[s.jsx("strong",{children:"GitHub project"}),`
View the source and add issues`]})})]}),s.jsxs("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank",children:[s.jsx("img",{src:c,alt:"comments"}),s.jsx("span",{children:s.jsxs(e.p,{children:[s.jsx("strong",{children:"Discord chat"}),`
Chat with maintainers and the community`]})})]})]}),`
`,s.jsx("div",{className:"tip-wrapper",children:s.jsxs(e.p,{children:[s.jsx("span",{className:"tip",children:"Tip"}),"Edit the Markdown in"," ",`
`,s.jsx("code",{children:"stories/Introduction.stories.mdx"})]})})]})}function D(t={}){const{wrapper:e}=Object.assign({},n(),t.components);return e?s.jsx(e,Object.assign({},t,{children:s.jsx(r,t)})):r(t)}export{D as default};
//# sourceMappingURL=Introduction-876e1bbb.js.map
