"use strict";(self.webpackChunkaws_otel_docs=self.webpackChunkaws_otel_docs||[]).push([[6890],{14715:function(e,t,n){var a=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var i=a(n(59713)),r=a(n(6479)),o=a(n(67154)),s=a(n(67294)),c=(a(n(45697)),a(n(75900))),l=(n(73976),a(n(6988))),u=n(53017),d=(a(n(66857)),[0,8,16,24,32,40]),f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return d.forEach((function(e,a){0!==a&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})})),n}(0,"xs"),u.keys.reduce((function(t,n){return function(e,t,n){var a={};f.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.default)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))};function m(e){var t,n=e.alignContent,a=e.alignItems,l=e.classes,u=e.className,d=e.component,f=e.container,p=e.direction,g=e.item,x=e.justify,y=e.lg,h=e.md,v=e.sm,b=e.spacing,w=e.wrap,S=e.xl,W=e.xs,C=e.zeroMinWidth,j=(0,r.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),A=(0,c.default)((t={},(0,i.default)(t,l.container,f),(0,i.default)(t,l.item,g),(0,i.default)(t,l.zeroMinWidth,C),(0,i.default)(t,l["spacing-xs-".concat(String(b))],f&&0!==b),(0,i.default)(t,l["direction-xs-".concat(String(p))],p!==m.defaultProps.direction),(0,i.default)(t,l["wrap-xs-".concat(String(w))],w!==m.defaultProps.wrap),(0,i.default)(t,l["align-items-xs-".concat(String(a))],a!==m.defaultProps.alignItems),(0,i.default)(t,l["align-content-xs-".concat(String(n))],n!==m.defaultProps.alignContent),(0,i.default)(t,l["justify-xs-".concat(String(x))],x!==m.defaultProps.justify),(0,i.default)(t,l["grid-xs-".concat(String(W))],!1!==W),(0,i.default)(t,l["grid-sm-".concat(String(v))],!1!==v),(0,i.default)(t,l["grid-md-".concat(String(h))],!1!==h),(0,i.default)(t,l["grid-lg-".concat(String(y))],!1!==y),(0,i.default)(t,l["grid-xl-".concat(String(S))],!1!==S),t),u);return s.default.createElement(d,(0,o.default)({className:A},j))}t.styles=p,m.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var g=(0,l.default)(p,{name:"MuiGrid"})(m);t.default=g},97322:function(e,t,n){var a=n(95318);Object.defineProperty(t,"Z",{enumerable:!0,get:function(){return i.default}});var i=a(n(14715))},66857:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return function(){return null}};t.default=n},48359:function(e,t,n){var a=n(87462),i=n(63366),r=(n(67294),n(6988)),o=n(97322),s=n(23431),c=["classes","children","className"];function l(e){var t=Object.assign({},e),n=t.classes,r=t.children,l=t.className,u=(0,i.Z)(t,c);return(0,s.tZ)(o.Z,(0,a.Z)({container:!0},u,{className:n.grid+" "+l}),r)}l.defaultProps={className:""},t.Z=(0,r.default)({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(l)},55212:function(e,t,n){var a=n(87462),i=n(63366),r=(n(67294),n(6988)),o=n(97322),s=n(23431),c=["classes","children","className"];t.Z=(0,r.default)({grid:{position:"relative",width:"100%",minHeight:"1px",paddingRight:"15px",paddingLeft:"15px",flexBasis:"auto"}})((function(e){var t=Object.assign({},e),n=t.classes,r=t.children,l=t.className,u=(0,i.Z)(t,c);return(0,s.tZ)(o.Z,(0,a.Z)({item:!0},u,{className:n.grid+" "+l}),r)}))},61944:function(e){e.exports=JSON.parse('{"H7":{"nP":"Introduction","eF":"AWS Distro for OpenTelemetry is a secure, production-ready, AWS-supported distribution of the OpenTelemetry project. Part of the Cloud Native Computing Foundation, OpenTelemetry provides open source APIs, libraries, and agents to collect distributed traces and metrics for application monitoring. With AWS Distro for OpenTelemetry, you can instrument your applications just once to send correlated metrics and traces to multiple AWS and Partner monitoring solutions. Use auto-instrumentation agents to collect traces without changing your code. AWS Distro for OpenTelemetry also collects metadata from your AWS resources and managed services, so you can correlate application performance data with underlying infrastructure data, reducing the mean time to problem resolution. Use AWS Distro for OpenTelemetry to instrument your applications running on Amazon Elastic Compute Cloud (EC2), Amazon Elastic Container Service (ECS), and Amazon Elastic Kubernetes Service (EKS) on EC2, AWS Fargate, and AWS Lambda, as well as on-premises.","Oz":"Benefits","bn":"AWS Distro for OpenTelemetry empowers you to implement broad yet efficient, secure yet flexible, observability solutions. It helps you optimize your production environments by ensuring predictable resource utilization, and can increase your analytical visibility while protecting your investment in standardized observability tools. It is backed by AWS Support, testing, and certification.","xH":"Use Cases","ri":"AWS Distro for OpenTelemetry automates the deep collection and direct exposure of correlated application and infrastructure data needed for AWS monitoring and visualization services. Uses cases include sending metrics and traces to AWS and third-party Partner monitoring services, automate collection of traces, collect metadata on application resources as well as collect, analyze, and alarm on application metrics in CloudWatch.","TH":"Open Source","qL":"We are proud to be a part of the OpenTelemetry developer community upstream. As part of the open source community, we follow an “upstream-first” approach where we contribute all our enhancements, changes and bug fixes upstream. Our open source distribution is built using this upstreamed code. We participate in the open standards discussions in the OpenTelemetry Specification SIG and W3C Tracing Specification."},"AV":{"n":"Get Involved","O":"AWS Distro for OpenTelemetry is committed to being an open, collaborative, community-driven project. Join the community to participate and contribute."}}')}}]);
//# sourceMappingURL=7cfd9b5547f411b21c41876391583416ed99ed78-666a9c32af80b504e3fd.js.map