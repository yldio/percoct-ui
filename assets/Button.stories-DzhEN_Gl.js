import{f as q,w as j,u as z,e as G}from"./index-zeKh63HJ.js";import{j as H}from"./jsx-runtime-C-_spy54.js";function e(){var n="/home/runner/work/percoct-ui/percoct-ui/src/Button.tsx",a="bc5bf7a158ae2c089618302c7da5d29e3783a2be",r=window,t="__coverage__",m={path:"/home/runner/work/percoct-ui/percoct-ui/src/Button.tsx",statementMap:{0:{start:{line:2,column:22},end:{line:22,column:1}},1:{start:{line:9,column:15},end:{line:9,column:89}},2:{start:{line:10,column:2},end:{line:21,column:4}},3:{start:{line:24,column:0},end:{line:24,column:1107}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:2,column:22},end:{line:2,column:23}},loc:{start:{line:8,column:6},end:{line:22,column:1}},line:8}},branchMap:{0:{loc:{start:{line:3,column:2},end:{line:3,column:17}},type:"default-arg",locations:[{start:{line:3,column:12},end:{line:3,column:17}}],line:3},1:{loc:{start:{line:4,column:2},end:{line:4,column:24}},type:"default-arg",locations:[{start:{line:4,column:20},end:{line:4,column:24}}],line:4},2:{loc:{start:{line:5,column:2},end:{line:5,column:17}},type:"default-arg",locations:[{start:{line:5,column:9},end:{line:5,column:17}}],line:5},3:{loc:{start:{line:9,column:15},end:{line:9,column:89}},type:"cond-expr",locations:[{start:{line:9,column:25},end:{line:9,column:57}},{start:{line:9,column:60},end:{line:9,column:89}}],line:9},4:{loc:{start:{line:17,column:13},end:{line:17,column:64}},type:"cond-expr",locations:[{start:{line:17,column:40},end:{line:17,column:59}},{start:{line:17,column:62},end:{line:17,column:64}}],line:17}},s:{0:0,1:0,2:0,3:0},f:{0:0},b:{0:[0],1:[0],2:[0],3:[0,0],4:[0,0]},inputSourceMap:{version:3,file:null,sources:["/home/runner/work/percoct-ui/percoct-ui/src/Button.tsx"],names:[],mappings:"AAqBI;AAZG,aAAM,SAAS,CAAC;AAAA,EACrB,UAAU;AAAA,EACV,kBAAkB;AAAA,EAClB,OAAO;AAAA,EACP;AAAA,EACA,GAAG;AACL,MAAa;AACX,QAAM,OAAO,UACT,mCACA;AAEJ,SACE;AAAA,IAAC;AAAA;AAAA,MACC,MAAK;AAAA,MACL,WAAW,CAAC,oBAAoB,qBAAqB,IAAI,IAAI,IAAI,EAAE;AAAA,QACjE;AAAA,MACF;AAAA,MACA,OAAO,oBAAoB,OAAO,EAAE,gBAAgB,IAAI,CAAC;AAAA,MACxD,GAAG;AAAA,MAEH;AAAA;AAAA,EACH;AAEJ;;;"},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bc5bf7a158ae2c089618302c7da5d29e3783a2be"},o=r[t]||(r[t]={});(!o[n]||o[n].hash!==a)&&(o[n]=m);var d=o[n];return e=function(){return d},d}e();e().s[0]++;const T=({primary:n=(e().b[0][0]++,!1),backgroundColor:a=(e().b[1][0]++,null),size:r=(e().b[2][0]++,"medium"),label:t,...m})=>{e().f[0]++;const o=(e().s[1]++,n?(e().b[3][0]++,"storybook-button--primary-test"):(e().b[3][1]++,"storybook-button--secondary"));return e().s[2]++,H.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${r}`,o].join(" "),style:a!==null?(e().b[4][0]++,{backgroundColor:a}):(e().b[4][1]++,{}),...m,children:t})};e().s[3]++;T.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:"",defaultValue:{value:"null",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const U={title:"Atoms/Button",component:T,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:{type:"color",presetColors:["blue","green","red"]}}},args:{label:"Button",onClick:q()}},s={args:{primary:!0}},l={args:{}},c={args:{size:"large"}},A={args:{size:"small"}},u={args:{backgroundColor:"red"}},i={tags:["test"],play:async({args:n,canvasElement:a})=>{const r=j(a);await z.click(r.getByRole("button")),await G(n.onClick).toHaveBeenCalled()}};var p,g,C;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: true
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var y,b,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,B,k;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...(k=(B=c.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var E,h,w;A.parameters={...A.parameters,docs:{...(E=A.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(w=(h=A.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var M,S,x;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    backgroundColor: "red"
  }
}`,...(x=(S=u.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var I,O,_;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  tags: ["test"],
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(_=(O=i.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const V=["Primary","Secondary","Large","Small","CustomBackgrounColor","TestOnClick"];export{u as CustomBackgrounColor,c as Large,s as Primary,l as Secondary,A as Small,i as TestOnClick,V as __namedExportsOrder,U as default};
//# sourceMappingURL=Button.stories-DzhEN_Gl.js.map
