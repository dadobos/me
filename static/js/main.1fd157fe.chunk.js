(this["webpackJsonpreact-page"]=this["webpackJsonpreact-page"]||[]).push([[0],{102:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(0),a=n.n(o),c=n(11),i=n.n(c),l=(n(93),n(28)),s=n(149),d=n(139),b={MuiAlert:{root:{fontSize:"16px",borderRadius:0},standardError:{color:"#A72121",fontWeight:300,backgroundColor:"#FFA9A9"},standardWarning:{color:"rgba(0, 0, 0, 0.5)",fontWeight:300,backgroundColor:"#FFDDA9"},standardInfo:{color:"#2176A7",fontWeight:300,backgroundColor:"#A9E5FF"},standardSuccess:{color:"#059346",fontWeight:300,backgroundColor:"#BFFFA9"},icon:{display:"flex",opacity:1,fontsize:"16px",marginLeft:"3rem",marginRight:"1rem"},message:{padding:"16px 0 8px 0"}},MuiInputBase:{input:{height:"1.3rem","&:disabled":{background:p,color:p}}},MuiMenuItem:{root:{fontFamily:"Poppins",fontSize:"14px",lineHeight:"19px",textAlign:"left",color:p,padding:".5rem"}},MuiOutlinedInput:{root:{position:"relative","&:hover:not($disabled):not($focused):not($error) $notchedOutline":{border:"1px solid ".concat(p),"@media (hover: none)":{borderColor:p}},"&$focused $notchedOutline":{borderColor:p},"&$disabled $notchedOutline":{background:p,borderColor:"#E5E5E5",opacity:.8,color:p}},notchedOutline:{borderColor:p},input:{background:"#FFFFFF",padding:".5rem",borderRadius:"3px",fontFamily:"Poppins",fontSize:" 14px",lineHeight:"19px",color:p,"&:disabled":{background:p,opacity:.8,color:p},notchedOutline:{border:"transparent"}},multiline:{padding:".5rem !important",border:"0px",margin:0}},MuiSelect:{root:{background:"#FFFFFF",padding:".5rem",borderRadius:"3px",fontFamily:"Poppins",fontSize:"14px",lineHeight:"19px",textAlign:"left",color:p,border:"1px solid ".concat(p),"&:focus":{borderRadius:"3px",borderColor:"transparent",background:"#FFFFFF"}},select:{minWidth:"5.5rem",borderRadius:"3px",border:"1px solid ".concat(p),fontSize:"16px",lineHeight:"19px","&:focus":{borderRadius:"3px",borderColor:p,background:"#FFFFFF"}},selectMenu:{background:"#FFFFFF",color:p,"&:notchedOutline":{borderColor:"transparent !important"}},outlined:{color:"".concat(p," !important"),borderColor:"transparent",fontSize:"14px",lineHeight:"19px","&:hover ":{borderColor:"transparent",outline:"none"},"&:focus":{background:"#FFFFFF",borderColor:"transparent"}},iconOutlined:{color:p},icon:{color:p}},MuiSwitch:{root:{overflow:"visible",width:"4rem"},switchBase:{background:"transparent","&$checked":{transform:"translateX(26px)","&$checked + $track":{backgroundColor:p,border:"none",boxShadow:"none",width:36},"& $thumb":{backgroundColor:p,boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.25)"}}},thumb:{backgroundColor:p,boxShadow:"0px 2px 5px rgba(0, 0, 0, 0.25)",width:20,height:20},track:{backgroundColor:p,width:36},checked:{}}},u="#004d40",j="#a5d6a7",p=Object(d.a)({palette:{common:{},primary:{main:u,contrastText:j},secondary:{main:j,contrastText:u},contrastThreshold:3},typography:{fontFamily:"Chilanka"},overrides:b}),h=n(12),x=n(150),m=n(75),O=n(76),f=n(82),g=n(81),v=function(e){Object(f.a)(n,e);var t=Object(g.a)(n);function n(e){var r;return Object(m.a)(this,n),(r=t.call(this,e)).state={error:null,errorInfo:null},r}return Object(O.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Something went wrong."}),Object(r.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(r.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),n}(o.Component),k=n(44),F=function(e){var t=e.layout,n=e.component;return Object(r.jsx)(h.a,{render:function(e){return Object(r.jsx)(t,{children:Object(r.jsx)(n,Object(k.a)({},e))})}})},y=n(107),w=n(84),C=n(142),I=n(143),S=n(144),z=n(140),A=n(141),H=function(e){var t=e.children,n=e.window,o=Object(z.a)({target:n?n():void 0});return Object(r.jsx)(A.a,{appear:!1,direction:"down",in:!o,children:t})},T=n(70),D=Object(w.a)((function(e){return{appBar:{position:"relative",zIndex:1301}}})),P=function(){var e=D();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C.a,{}),Object(r.jsx)(H,{children:Object(r.jsx)(I.a,{className:e.appBar,position:"static",elevation:0,children:Object(r.jsx)(S.a,{children:Object(r.jsx)(T.a,{})})})})]})},B=n(145),N=n(46),$=function(){return Object(r.jsx)(B.a,{container:!0,style:{marginTop:"auto",zIndex:1300},justify:"center",children:Object(r.jsx)(B.a,{item:!0,children:Object(r.jsx)(N.a,{inline:"true",variant:"body1",children:"Dan Dobos \xa9 2021 Build with passion"})})})},M=Object(w.a)((function(e){return{container:{minHeight:"calc(100vh-128px)",paddingTop:"2rem",paddingBottom:"2rem",fallbacks:[{minHeight:"-moz-calc(100% - 128px)"},{minHeight:"-webkit-calc(100% - 128px)"},{minHeight:"-o-calc(100% - 128px)"}]}}})),R=function(e){var t=e.children,n=M();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[Object(r.jsx)(P,{}),Object(r.jsx)(y.a,{className:n.container,children:t}),Object(r.jsx)($,{})]})})},E=n(146),W=n(56),q=n(152),L=n(33),J=n(79),V=n.n(J),G=n(147),U=Object(E.a)((function(e){return{icon:Object(L.a)({width:"5rem",height:"5rem"},e.breakpoints.down("md"),{width:"3rem",height:"3rem"})}}));function X(e){var t=e.children,n=e.window,o=Object(z.a)({target:document.querySelector("#footer")?n:void 0});return Object(r.jsx)(G.a,{in:o,children:Object(r.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",children:t})})}var Y=function(e){var t=U();return Object(r.jsx)(B.a,{container:!0,justify:"center",alignItems:"center",id:"footer",children:Object(r.jsx)(X,Object(k.a)(Object(k.a)({},e),{},{children:Object(r.jsx)(V.a,{className:t.icon})}))})},K=n(151),Q=n(148),Z=n(80),_=n.n(Z),ee=Object(w.a)((function(e){return{appBar:{position:"fixed",zIndex:1301,backgroundColor:"#FAFAFA"},name:{textTransform:"uppercase",letterSpacing:".5rem"}}}));function te(e){e.preventDefault();var t=(e.target.ownerDocument||document).querySelector("#footer");t&&t.scrollIntoView({behavior:"smooth",block:"center"})}var ne=function(){var e=ee();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(C.a,{}),Object(r.jsx)(I.a,{className:e.appBar,position:"fixed",elevation:0,children:Object(r.jsx)(S.a,{children:Object(r.jsxs)(B.a,{container:!0,justify:"space-between",children:[Object(r.jsx)(B.a,{item:!0,children:Object(r.jsxs)(K.a,{"aria-label":"breadcrumb",children:[Object(r.jsx)(N.a,{color:"textPrimary",variant:"h5",className:e.name,children:"Dan Dobos"}),Object(r.jsx)(Q.a,{color:"textPrimary",to:"#about",onClick:te,children:"About"})]})}),Object(r.jsx)(B.a,{item:!0,children:Object(r.jsx)(l.b,{color:"textPrimary",to:"/projects",children:Object(r.jsx)(_.a,{})})})]})})}),Object(r.jsx)(S.a,{})]})},re=Object(E.a)((function(e){return{container:{minHeight:"100vh",paddingTop:"2rem",fallbacks:[{minHeight:"-moz-calc(100% - 128px)"},{minHeight:"-webkit-calc(100% - 128px)"},{minHeight:"-o-calc(100% - 128px)"}]}}})),oe=Object(W.a)({typography:{fontFamily:"Yeon Sung",transform:"matrix(1, 0, 0, 1, 0, 0)"}});oe=Object(q.a)(oe);var ae=function(e){var t=e.children,n=re();return Object(r.jsxs)(s.a,{theme:oe,children:[Object(r.jsx)("div",{id:"back-to-top-anchor"}),Object(r.jsx)(ne,{}),Object(r.jsx)(y.a,{className:n.container,children:t}),Object(r.jsx)(Y,{})]})},ce=Object(o.lazy)((function(){return n.e(3).then(n.bind(null,158))})),ie=Object(o.lazy)((function(){return n.e(4).then(n.bind(null,155))})),le=Object(o.lazy)((function(){return n.e(6).then(n.bind(null,154))})),se=Object(o.lazy)((function(){return n.e(5).then(n.bind(null,153))})),de=Object(o.lazy)((function(){return n.e(7).then(n.bind(null,156))})),be=function(){return Object(r.jsx)(o.Suspense,{fallback:Object(r.jsx)(x.a,{color:"secondary"}),children:Object(r.jsx)(v,{children:Object(r.jsxs)(h.c,{children:[Object(r.jsx)(F,{exact:!0,path:"/",component:ce,layout:ae}),Object(r.jsx)(F,{exact:!0,path:"/about",component:ie,layout:R}),Object(r.jsx)(F,{exact:!0,path:"/projects",component:le,layout:R}),Object(r.jsx)(F,{exact:!0,path:"/games",component:se,layout:R}),Object(r.jsx)(F,{exact:!0,path:"/snippets",component:de,layout:R})]})})})};var ue=function(){return Object(r.jsx)(s.a,{theme:p,children:Object(r.jsx)(l.a,{basename:"/me",children:Object(r.jsx)(be,{})})})},je=function(e){e&&e instanceof Function&&n.e(8).then(n.bind(null,157)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),a(e),c(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(ue,{})}),document.getElementById("root")),je()},70:function(e,t,n){"use strict";(function(e){var r=n(2),o=n(65),a=n(33),c=n(0),i=n(28),l=n(105),s=n(107),d=n(85),b=n(108),u=n(114),j=n(110),p=n(111),h=n(112),x=n(115),m=n(113),O=n(78),f=n.n(O),g=n(77),v=n.n(g),k=n(84),F=n(57),y=Object(k.a)((function(e){return{toolbar:e.mixins.toolbar,drawerIconContainer:Object(a.a)({alignSelf:"center","&:hover":{backgroundColor:"transparent"}},e.breakpoints.down("md"),{padding:0}),drawerIcon:{height:"40px",width:"40px",color:e.palette.secondary.main},drawer:{minWidth:"60vw",backgroundColor:e.palette.secondary.main},listitems:{padding:"1.5rem 2rem ",color:e.palette.primary.main,width:"100%","&:hover":{backgroundColor:e.palette.primary.main,color:e.palette.secondary.main}},listText:{alignItems:"flex-start",fontSize:"1.5rem",textTransform:"capitalize"},selected:{"&.Mui-selected":{backgroundColor:e.palette.primary.main,color:e.palette.secondary.main}}}}));t.a=function(t){var n=y(),a=Object(F.a)(),O=Object(l.a)(a.breakpoints.down("sm")),g=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),k=Object(c.useState)(1),w=Object(o.a)(k,2),C=w[0],I=w[1],S=Object(c.useState)(!1),z=Object(o.a)(S,2),A=z[0],H=z[1],T=Object(c.useRef)(null),D=Object(c.createRef)(),P=Object(c.useMemo)((function(){return[{name:"Home",link:"/",activeIndex:0},{name:"Projects",link:"/projects",activeIndex:1},{name:"Games",link:"/games",activeIndex:2},{name:"Snippets",link:"/snippets",activeIndex:3},{name:"About",link:"/about",activeIndex:4}]}),[]);return Object(c.useEffect)((function(){P.forEach((function(e){switch(window.location.pathname){case"".concat(e.link):C!==e.activeIndex&&I(e.activeIndex);break;default:return!1}}))}),[C,P]),Object(c.useEffect)((function(){setTimeout((function(){var e;null===(e=T.current)||void 0===e||e.updateIndicator()}),100)})),Object(r.jsxs)(s.a,{ref:D,children:[Object(r.jsx)(d.a,{mdUp:!0,children:Object(r.jsx)(b.a,{onClick:function(){return H(!A)},disableRipple:!0,className:n.drawerIconContainer,children:A?Object(r.jsx)(v.a,{className:n.drawerIcon}):Object(r.jsx)(f.a,{className:n.drawerIcon})})}),O?Object(r.jsxs)(u.a,{disableBackdropTransition:!g,disableDiscovery:g,open:A,onOpen:function(){H(!0)},onClose:function(){H(!1)},classes:{paper:n.drawer},children:[Object(r.jsx)("div",{className:n.toolbar}),Object(r.jsx)(j.a,{disablePadding:!0,children:P.map((function(e){return Object(r.jsx)(p.a,{className:n.listitems,button:!0,component:i.b,to:e.link,value:e.activeIndex,selected:C===e.activeIndex,classes:{selected:n.selected},onClick:function(){I(e.activeIndex),H(!1)},children:Object(r.jsx)(h.a,{disableTypography:!0,className:n.listText,children:e.name})},"".concat(e).concat(e.activeIndex))}))})]}):Object(r.jsx)(d.a,{smDown:!0,children:Object(r.jsx)(x.a,{action:T,value:C,onChange:function(e,t){I(t)},centered:!0,children:P.map((function(e){return Object(r.jsx)(m.a,{label:e.name,component:i.b,to:e.link},"".concat(e.activeIndex))}))})})]})}}).call(this,n(99))},93:function(e,t,n){}},[[102,1,2]]]);
//# sourceMappingURL=main.1fd157fe.chunk.js.map