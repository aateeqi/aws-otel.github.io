"use strict";(self.webpackChunkaws_otel_docs=self.webpackChunkaws_otel_docs||[]).push([[3201],{14715:function(e,t,n){var a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=a(n(59713)),r=a(n(6479)),s=a(n(67154)),o=a(n(67294)),c=(a(n(45697)),a(n(75900))),l=(n(73976),a(n(6988))),u=n(53017),d=(a(n(66857)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(e){return(0,s.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach((function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})})),n}(0,"xs"),u.keys.reduce((function(t,n){return function(e,t,n){var a={};f.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,s.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))};function m(e){var t,n=e.alignContent,a=e.alignItems,l=e.classes,u=e.className,d=e.component,f=e.container,p=e.direction,g=e.item,x=e.justify,h=e.lg,y=e.md,b=e.sm,v=e.spacing,j=e.wrap,w=e.xl,O=e.xs,Z=e.zeroMinWidth,C=(0,r.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),S=(0,c.default)((t={},(0,i.default)(t,l.container,f),(0,i.default)(t,l.item,g),(0,i.default)(t,l.zeroMinWidth,Z),(0,i.default)(t,l["spacing-xs-".concat(String(v))],f&&0!==v),(0,i.default)(t,l["direction-xs-".concat(String(p))],p!==m.defaultProps.direction),(0,i.default)(t,l["wrap-xs-".concat(String(j))],j!==m.defaultProps.wrap),(0,i.default)(t,l["align-items-xs-".concat(String(a))],a!==m.defaultProps.alignItems),(0,i.default)(t,l["align-content-xs-".concat(String(n))],n!==m.defaultProps.alignContent),(0,i.default)(t,l["justify-xs-".concat(String(x))],x!==m.defaultProps.justify),(0,i.default)(t,l["grid-xs-".concat(String(O))],!1!==O),(0,i.default)(t,l["grid-sm-".concat(String(b))],!1!==b),(0,i.default)(t,l["grid-md-".concat(String(y))],!1!==y),(0,i.default)(t,l["grid-lg-".concat(String(h))],!1!==h),(0,i.default)(t,l["grid-xl-".concat(String(w))],!1!==w),t),u);return o.default.createElement(d,(0,s.default)({className:S},C))}t.styles=p,m.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,l.default)(p,{name:"MuiGrid"})(m);t.default=g},97322:function(e,t,n){var a=n(95318);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return i.default}});var i=a(n(14715))},66857:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return function(){return null}};t.default=n},48359:function(e,t,n){var a=n(87462),i=n(63366),r=(n(67294),n(6988)),s=n(97322),o=n(23431),c=["classes","children","className"];function l(e){var t=Object.assign({},e),n=t.classes,r=t.children,l=t.className,u=(0,i.Z)(t,c);return(0,o.tZ)(s.Z,(0,a.Z)({container:!0},u,{className:n.grid+" "+l}),r)}l.defaultProps={className:""},t.Z=(0,r.default)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(l)},55212:function(e,t,n){var a=n(87462),i=n(63366),r=(n(67294),n(6988)),s=n(97322),o=n(23431),c=["classes","children","className"];t.Z=(0,r.default)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}})((function(e){var t=Object.assign({},e),n=t.classes,r=t.children,l=t.className,u=(0,i.Z)(t,c);return(0,o.tZ)(s.Z,(0,a.Z)({item:!0},u,{className:n.grid+" "+l}),r)}))},6442:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(94578),i=n(67294),r=n(6988),s=n(48359),o=n(55212),c=n(4942);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={section:{padding:"70px 0 100px 0",textAlign:"center"},title:u(u({},n(35985).TN),{},{marginBottom:"1rem",marginTop:"30px",minHeight:"32px",textDecoration:"none"}),description:{color:"#999"}},f=JSON.parse('{"TN":"Contributing","X8":"Many open source projects follow a similar organizational structure. AWS Distro for OpenTelementry implements the best of breed of large scale multi-discipline, intensely collaborative projects. It is the downstream packaging of the upstream observability OpenTelemetry project. The distribution emphasizes and is focused on seamlessly integrating components of OpenTelemetry into cloud computing services, especially, but not limited to, services offered by AWS.","i7":"Contributors to the OpenTelemetry project come from a very large community of authors, maintainers and other contributors. The project also includes a large community of users who present a rich variety of use cases and provide a vibrant discussion of issues related to the project. Many contributors are from large and heavily invested organizations. Other contributors are concerned and passionate individuals.","jH":"The AWS Distro for OpenTelemetry maintainers participate heavily in the technical SIGs of the upstream OpenTelemetry project. It also abides by the Code of Conduct of the upstream project."}'),p=n(23431),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e=this.props.classes;return(0,p.tZ)("div",{className:e.section},(0,p.tZ)(s.Z,{justify:"center"},(0,p.tZ)(o.Z,{xs:12,sm:12,md:8},(0,p.tZ)("h1",{className:e.title},f.TN)),(0,p.tZ)("div",{style:{height:"120px"}}),(0,p.tZ)(o.Z,{xs:12,sm:12,md:10,style:{textAlign:"left"}},(0,p.tZ)("p",{className:e.about}," ",f.X8," "),(0,p.tZ)("p",{className:e.about}," ",f.i7," "),(0,p.tZ)("p",{className:e.about}," ",f.jH," "))))},t}(i.Component),g=(0,r.default)(d)(m)}}]);
//# sourceMappingURL=e998bf5fc15182ef5e72ad2f6d420be7f31cb5e9-c0f69cd7e82bf0c19875.js.map