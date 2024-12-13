import{f as v,w as b,u as y,e as E}from"./index-D4bc88Lo.js";var C={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k=Symbol.for("react.transitional.element"),B=Symbol.for("react.fragment");function g(o,e,n){var a=null;if(n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),"key"in e){n={};for(var t in e)t!=="key"&&(n[t]=e[t])}else n=e;return e=n.ref,{$$typeof:k,type:o,key:a,ref:e!==void 0?e:null,props:n}}d.Fragment=B;d.jsx=g;d.jsxs=g;C.exports=d;var f=C.exports;function r(){var o="/home/runner/work/percoct-ui/percoct-ui/src/Button.tsx",e="43805dd734295b9df666e67a5f55a015fbdd5776",n=window,a="__coverage__",t={path:"/home/runner/work/percoct-ui/percoct-ui/src/Button.tsx",statementMap:{0:{start:{line:2,column:22},end:{line:22,column:1}},1:{start:{line:9,column:15},end:{line:9,column:84}},2:{start:{line:10,column:2},end:{line:21,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:22},end:{line:2,column:23}},loc:{start:{line:8,column:6},end:{line:22,column:1}},line:8}},branchMap:{0:{loc:{start:{line:3,column:2},end:{line:3,column:17}},type:"default-arg",locations:[{start:{line:3,column:12},end:{line:3,column:17}}],line:3},1:{loc:{start:{line:4,column:2},end:{line:4,column:24}},type:"default-arg",locations:[{start:{line:4,column:20},end:{line:4,column:24}}],line:4},2:{loc:{start:{line:5,column:2},end:{line:5,column:17}},type:"default-arg",locations:[{start:{line:5,column:9},end:{line:5,column:17}}],line:5},3:{loc:{start:{line:9,column:15},end:{line:9,column:84}},type:"cond-expr",locations:[{start:{line:9,column:25},end:{line:9,column:52}},{start:{line:9,column:55},end:{line:9,column:84}}],line:9},4:{loc:{start:{line:17,column:13},end:{line:17,column:64}},type:"cond-expr",locations:[{start:{line:17,column:40},end:{line:17,column:59}},{start:{line:17,column:62},end:{line:17,column:64}}],line:17}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0],1:[0],2:[0],3:[0,0],4:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/percoct-ui/percoct-ui/src/Button.tsx"],names:[],mappings:"AAoBI;AAXG,aAAM,SAAS,CAAC;AAAA,EACrB,UAAU;AAAA,EACV,kBAAkB;AAAA,EAClB,OAAO;AAAA,EACP;AAAA,EACA,GAAG;AACL,MAAa;AACX,QAAM,OAAO,UACT,8BACA;AACJ,SACE;AAAA,IAAC;AAAA;AAAA,MACC,MAAK;AAAA,MACL,WAAW,CAAC,oBAAoB,qBAAqB,IAAI,IAAI,IAAI,EAAE;AAAA,QACjE;AAAA,MACF;AAAA,MACA,OAAO,oBAAoB,OAAO,EAAE,gBAAgB,IAAI,CAAC;AAAA,MACxD,GAAG;AAAA,MAEH;AAAA;AAAA,EACH;AAEJ;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"43805dd734295b9df666e67a5f55a015fbdd5776"},s=n[a]||(n[a]={});(!s[o]||s[o].hash!==e)&&(s[o]=t);var p=s[o];return r=function(){return p},p}r();r().s[0]++;const x=({primary:o=(r().b[0][0]++,!1),backgroundColor:e=(r().b[1][0]++,null),size:n=(r().b[2][0]++,"medium"),label:a,...t})=>{r().f[0]++;const s=(r().s[1]++,o?(r().b[3][0]++,"storybook-button--primary"):(r().b[3][1]++,"storybook-button--secondary"));return r().s[2]++,f.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${n}`,s].join(" "),style:e!==null?(r().b[4][0]++,{backgroundColor:e}):(r().b[4][1]++,{}),...t,children:a})},S={title:"Atoms/Button",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"color",presetColors:["blue","green","red"]}}},args:{label:"Button",onClick:v()}},l={args:{primary:!0}},c={args:{}},A={args:{size:"large"}},u={args:{size:"small"}},i={args:{backgroundColor:"red"}},m={tags:["test"],play:async({args:o,canvasElement:e})=>{const n=b(e);await y.click(n.getByRole("button")),await E(o.onClick).toHaveBeenCalled()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...c.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...A.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: "red"
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  tags: ["test"],
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...m.parameters?.docs?.source}}};const h=["Primary","Secondary","Large","Small","CustomBackgrounColor","TestOnClick"];export{i as CustomBackgrounColor,A as Large,l as Primary,c as Secondary,u as Small,m as TestOnClick,h as __namedExportsOrder,S as default};
//# sourceMappingURL=Button.stories-CNzhf6pK.js.map
