(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[10],{36:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(2),i=c(42),r=c(98),l=c(55),d=c(109),j=c(12),b=c(11),o=c(60),m=c(97),h=c(100),u=c(44),x=c(110),p=c(105),O=c(108),g=c(1),v=function(e){var t=e.pub,c=s.a.useState(!1),a=Object(u.a)(c,2),n=a[0],i=a[1];return Object(g.jsx)(x.a,{className:"publication-card",children:Object(g.jsxs)(m.a.Toggle,{as:x.a.Header,eventKey:t._id,className:"publication-title-column",children:[Object(g.jsx)("div",{className:"pub-category-above-title",children:t.category.type}),Object(g.jsxs)("div",{className:"publication-title",children:[" ",t.title]}),Object(g.jsxs)("div",{className:"pub-year-below-title",children:[" ",t.yearPublished," "]}),Object(g.jsx)(p.a,{variant:"",className:"button-pub",onClick:function(){return i(!0)},children:"View this Publication"}),Object(g.jsx)(r,{pub:t,show:n,onHide:function(){return i(!1)}})]})});function r(e){return Object(g.jsxs)(O.a,Object(h.a)(Object(h.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",children:[Object(g.jsx)(O.a.Header,{closeButton:!0,children:Object(g.jsx)(O.a.Title,{id:"contained-modal-title-vcenter",children:t.title})}),Object(g.jsx)(O.a.Body,{children:Object(g.jsxs)(x.a.Body,{className:"publication-body-column",children:[Object(g.jsx)("div",{className:"pub-body-subheader",children:"Authors"}),Object(g.jsx)("div",{className:"pub-body-content",children:t.authors.map((function(e){return"".concat(e)})).join(", ")}),Object(g.jsx)("div",{className:"pub-body-subheader",children:"Description"}),Object(g.jsx)("div",{className:"pub-body-content pub-body-paragraph",children:t.description}),Object(g.jsx)("div",{className:"pub-body-subheader",children:t.category.categoryTitle?t.category.type.charAt(0)+t.category.type.slice(1).toLowerCase():""}),Object(g.jsx)("div",{className:"pub-body-content",children:t.category.categoryTitle?t.category.categoryTitle+(t.category.issue?", Issue ".concat(t.category.issue):"")+(t.category.volume?", Volume ".concat(t.category.volume):"")+(t.category.pages?", Page ".concat(t.category.pages):""):""}),Object(g.jsx)("div",{className:"pub-body-subheader",children:t.category.publisher?"Published by":null}),Object(g.jsx)("div",{className:"pub-body-content",children:t.category.publisher})]})}),Object(g.jsx)(O.a.Footer,{children:Object(g.jsx)(p.a,{onClick:e.onHide,children:"Close"})})]}))}},y=function(){var e=b.e;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(m.a,{children:e.map((function(e){return Object(g.jsx)(v,{pub:e},e._id)}))})})},N=function(){var e=b.c.teamName;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.a,{children:Object(g.jsxs)("title",{children:[" ","Publications -"," ",e," "]})}),Object(g.jsx)(l.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(g.jsx)("div",{className:"publication-pg-title",children:"Our Publications"})}),Object(g.jsx)(l.a,{fluid:!0,children:Object(g.jsx)(y,{})})]})},f=c.p+"static/media/glenn-carstens-peters-npxXWgQ33ZQ-unsplash.41d84077.jpg",w=function(){var e=b.b,t=b.c.teamName;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.a,{children:Object(g.jsxs)("title",{children:[" ","Home -"," ",t," "]})}),Object(g.jsxs)(l.a,{fluid:!0,className:"pages-top-padding",children:[Object(g.jsx)("div",{className:"landing-center-title",children:"About Us"}),Object(g.jsx)("img",{src:f,align:"left",className:"left"}),e.aboutUs.map((function(e){return Object(g.jsx)("div",{className:"landing-center-content",children:e})}))]})]})},k=c(82),F=function(e){var t=e.member;return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)("div",{className:"row mb-2",style:{width:"70%",padding:"5px"},children:Object(g.jsxs)("div",{className:"row g-0",children:[Object(g.jsx)("div",{className:"col-md-auto",children:Object(g.jsx)(x.a.Img,{style:{width:"160px",height:"160px"},src:t.memberPic,className:"team-member-picture "})}),Object(g.jsxs)("div",{className:"col teamMemberBody",children:[Object(g.jsx)("div",{className:"fontx team-member-name d-block w-100 text-left",children:t.fullName}),Object(g.jsx)("div",{className:"team-member-position d-block w-100 text-left",children:t.position}),Object(g.jsx)("div",{className:"team-member-summary d-block w-100 text-left",children:t.summary})]})]})})})},T=function(){var e=b.d,t=b.c.teamName;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.a,{children:Object(g.jsxs)("title",{children:[" ","Team -"," ",t," "]})}),Object(g.jsx)(l.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(g.jsx)("div",{className:"team-pg-title",children:"Meet Our Team"})}),Object(g.jsx)(l.a,{fluid:!0,className:"team-card-container",children:Object(g.jsx)(k.a,{className:"card-deck",children:e.map((function(e){return Object(g.jsx)(F,{member:e},e._id)}))})})]})},P=c.p+"static/media/certificatepic.a3028e4e.png",A="bg-secondary",H=function(e){var t=e.achievement;return A="bg-secondary"===A?"bg-light":"bg-secondary",Object(g.jsx)("div",{className:"row mb-2",style:{width:"70%"},children:Object(g.jsxs)("div",{className:"row g-0",id:"achievementImage",children:[Object(g.jsx)("div",{className:"col-md-auto h-100",children:Object(g.jsx)(x.a.Img,{variant:"top",src:P,style:{height:"60px",width:"60px"}})}),Object(g.jsxs)("div",{className:"col achievementBody",children:[Object(g.jsx)("div",{className:"fontx award-name d-block w-100 text-left",children:t.title}),Object(g.jsx)("div",{className:"award-year d-block w-100 text-left",children:t.yearAwarded}),Object(g.jsx)("div",{className:"award-summary d-block w-100 text-left",children:t.description})]})]})})},B=[{title:"Publications",path:"/publication",exact:!0,component:N},{title:"Team",path:"/team",exact:!0,component:T},{title:"Achievements",path:"/achievements",exact:!0,component:function(){var e=b.a,t=b.c.teamName;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.a,{children:Object(g.jsxs)("title",{children:[" ","Achievements -"," ",t," "]})}),Object(g.jsx)(l.a,{className:"pages-top-padding text-center mt-3 mb-3",children:Object(g.jsx)("div",{className:"team-pg-title w-100 text-center",children:"Achievements"})}),Object(g.jsx)(l.a,{fluid:!0,className:"team-card-container",children:Object(g.jsx)(k.a,{className:"card-deck",children:e.map((function(e,t){return Object(g.jsx)(H,{style:{display:"flex",flexDirection:t%2===0?"row":"row-reverse"},achievement:e},e._id)}))})})]})}}],C=[{title:"Home",path:"/",exact:!0,component:w}],I=function(){var e=B.filter((function(e){var t=e.title;return b.f.pages.includes(t.toUpperCase())}));return[].concat(C,Object(o.a)(e))},_=function(){b.c.twitterHandle;var e=b.c.orgName,t=b.c.teamName,c=I();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(r.a,{collapseOnSelect:!0,expand:"md",variant:"",fixed:"top",children:Object(g.jsxs)(l.a,{fluid:!0,children:[Object(g.jsxs)(r.a.Brand,{as:j.b,to:"/",children:[t," ","@",e]}),Object(g.jsx)(r.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsxs)(r.a.Collapse,{id:"responsive-navbar-nav",children:[Object(g.jsx)(d.a,{className:"me-auto"}),Object(g.jsx)(d.a,{children:c.map((function(e,t){var c=e.path,a=e.title;return Object(g.jsx)(d.a.Link,{as:j.b,to:c,children:a},t)}))})]})]})})})},U=(c(96),c(50),c(51),b.f.template.theme);"light"===U?c.e(0).then(c.t.bind(null,106,7)):"dark"===U?c.e(2).then(c.t.bind(null,107,7)):c.e(0).then(c.t.bind(null,106,7));t.default=function(){var e=b.c.teamName,t=I().map((function(e){var t=e.path,c=e.exact,a=e.component;return Object(g.jsx)(n.a,{exact:c,path:t,children:Object(g.jsx)("div",{children:a?Object(g.jsx)(a,{}):null})},t)}));return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(i.a,{children:Object(g.jsx)("title",{children:e})}),Object(g.jsx)(_,{}),Object(g.jsx)(n.c,{children:t})]})}},50:function(e,t,c){},51:function(e,t,c){},96:function(e,t,c){}}]);
//# sourceMappingURL=10.01b7dd59.chunk.js.map