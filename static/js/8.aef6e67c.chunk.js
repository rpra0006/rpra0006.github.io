(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[8],{35:function(e,t,r){"use strict";r.r(t);var c=r(44),i=r(0),n=r(2),s=r(42),o=r(11),a=r(109),l=r(12),d=r(1),x=function(e){var t=e.styles,r=e.menuItems,c=Object(n.f)(),i={height:"100vh",width:t.sidebarWidth,position:"fixed",paddingTop:90,backgroundColor:"var(--researchify-color-quaternary)"},s={display:"flex",justifyContent:t.sidebarCollapsed?"center":"flex-start",alignItems:"center",padding:"4px ".concat(t.sidebarCollapsed?0:10,"px")},o={fontSize:26,marginRight:t.sidebarCollapsed?0:10};return Object(d.jsx)("div",{style:i,children:r.map((function(e){return Object(d.jsx)("div",{style:s,children:Object(d.jsxs)(a.a.Link,{style:{color:c.pathname===e.path&&"var(--researchify-link-color"},as:l.b,to:e.path,children:[t.sidebarCollapsed&&Object(d.jsx)("span",{className:"mr-3",style:o,children:e.icon}),!t.sidebarCollapsed&&e.title]},e.title)})}))})},j=r(60),h=r(91),b=r(92),p=r(93),u=r(55),f=r(53),y=r(111),O=r(86),m=function(e){var t=e.pub,r=Object(i.useState)(!1),n=Object(c.a)(r,2),s=n[0],o=n[1],a=Object(i.useState)(!1),l=Object(c.a)(a,2),x=l[0],j=l[1],h=Object(i.useState)(!1),b=Object(c.a)(h,2),p=b[0],u=b[1],m=function(){o(!0)},g=function(){o(!1)},v=Object(d.jsx)(f.a,{in:p,children:Object(d.jsx)("div",{style:{textAlign:"left",marginTop:"15px",marginLeft:"30px",marginRight:"30px",color:x?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:t.description})});return Object(d.jsxs)(y.a,{style:{marginBottom:"10px",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:[Object(d.jsxs)(y.a.Item,{style:{textAlign:"left",backgroundColor:s?"var(--researchify-color-tertiary)":"var(--researchify-color-secondary)"},onMouseOver:m,onFocus:m,onMouseLeave:g,onBlur:g,children:[Object(d.jsx)("div",{style:{fontSize:"17px",fontWeight:"bold",color:"var(--researchify-text-color)"},children:t.title}),t.category.categoryTitle&&Object(d.jsxs)("div",{style:{fontStyle:"italic",color:s?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:[t.category.categoryTitle,t.category.categoryTitle&&", ".concat(t.category.type.charAt(0)+t.category.type.slice(1).toLowerCase()),t.category.issue&&", Issue ".concat(t.category.issue),t.category.volume&&", Volume ".concat(t.category.volume),t.category.pages&&", Page ".concat(t.category.pages),",  ".concat(t.yearPublished)]}),Object(d.jsx)("div",{style:{color:s?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:t.authors.map((function(e){return"".concat(e)})).join(", ")}),t.category.publisher&&Object(d.jsxs)("div",{style:{color:s?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:["Published by"," ",t.category.publisher]}),t.link&&Object(d.jsx)("div",{children:Object(d.jsx)("a",{style:{fontSize:"16px"},href:t.link,target:"_blank",rel:"noreferrer",children:"PDF"})})]}),t.description&&Object(d.jsx)(y.a.Item,{style:{backgroundColor:x?"var(--researchify-color-tertiary)":"var(--researchify-color-secondary)",cursor:x&&"pointer"},onMouseOver:function(){return j(!0)},onFocus:function(){return j(!0)},onMouseLeave:function(){return j(!1)},onBlur:function(){return j(!1)},onClick:function(){return u(!p)},children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--researchify-text-color)"},children:[Object(d.jsx)("div",{style:{textAlign:"left"},children:"Description"}),Object(d.jsxs)("div",{style:{textAlign:"right"},children:[p?Object(d.jsx)(O.b,{}):Object(d.jsx)(O.a,{})," "]})]}),v]})})]})},g=function(){var e=o.e;return Object(d.jsx)(d.Fragment,{children:e.map((function(e){return Object(d.jsx)(m,{pub:e},e._id)}))})},v=function(){var e=o.c.teamName;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{children:Object(d.jsxs)("title",{children:[" ","Publications -"," ",e," "]})}),Object(d.jsx)(u.a,{fluid:!0,children:Object(d.jsx)(g,{})})]})},w=r(102),S=r(103),C=r(104),T=r(99),N=(r(90),o.f.template.theme),k=function(e){var t=e.linkedHandle;return Object(d.jsx)("div",{className:"twitter-feed",style:{boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:Object(d.jsx)(T.a,{dataSource:{sourceType:"profile",screenName:t},options:{height:965,theme:N}})})},M=function(){var e=o.b,t=o.e,r=o.c.teamName,c=o.c.twitterHandle;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{children:Object(d.jsxs)("title",{children:["Home -"," ",r," "]})}),Object(d.jsxs)(u.a,{fluid:!0,className:" mt-3 mb-3",children:[Object(d.jsxs)("h2",{children:["Welcome to"," ",r]}),Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsx)(w.a,{style:{maxWidth:"100%",height:"auto"},src:"https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})}),Object(d.jsx)("div",{className:"mt-2 mb-5",children:e.aboutUs.map((function(e){return Object(d.jsx)("div",{style:{textAlign:"left"},children:e})}))}),Object(d.jsxs)(S.a,{children:[Object(d.jsxs)(C.a,{md:c?9:12,children:[Object(d.jsxs)("div",{className:"mb-4",style:{textAlign:"left"},children:[Object(d.jsx)("b",{children:"RECENT PUBLICATIONS "}),Object(d.jsx)(l.b,{to:"/publication",children:"(VIEW ALL PAPERS)"})]}),t.slice(0,5).map((function(e){return Object(d.jsx)(m,{pub:e},e._id)}))]}),c&&Object(d.jsx)(C.a,{md:3,children:Object(d.jsxs)("div",{className:"mb-4",style:{textAlign:"left"},children:[Object(d.jsx)("b",{children:"UPDATES "}),Object(d.jsx)("div",{className:"mt-4",children:Object(d.jsx)(k,{linkedHandle:c})})]})})]})]})]})},I=r(110),B=function(e){var t=e.member,r=e.hoveredMember;return Object(d.jsx)(y.a,{style:{boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:Object(d.jsxs)(y.a.Item,{style:{padding:"5px",height:"180px",width:"157px",backgroundColor:"var(--researchify-color-secondary"},children:[Object(d.jsx)(w.a,{alt:"img",style:{width:"100%",height:"90%",objectFit:"cover",filter:r!==t&&"opacity(60%)"},src:t.memberPic}),Object(d.jsx)("div",{style:{position:"absolute",left:"16px",color:r===t?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:t.fullName})]})})},A=function(e){var t=e.teamMembers,r=o.c.profilePic,n=Object(i.useState)(null),s=Object(c.a)(n,2),a=s[0],l=s[1],x=function(e){l(e)},j=function(){l(null)};return Object(d.jsxs)("div",{style:{margin:"auto",display:"flex",justifyContent:"flex-start",flexWrap:"wrap"},children:[Object(d.jsx)("div",{children:r&&(a?Object(d.jsxs)(I.a.Body,{style:{height:"180px",width:"490px"},children:[Object(d.jsx)(I.a.Title,{as:"h5",children:a.fullName}),Object(d.jsx)(I.a.Text,{children:Object(d.jsx)("i",{children:a.position})}),Object(d.jsx)(I.a.Text,{as:"h7",children:a.summary})]}):Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"180px",width:"490px"},children:Object(d.jsx)(w.a,{style:{width:"auto",height:"auto"},src:r})}))}),t.map((function(e,t){return Object(d.jsx)("div",{onMouseOver:function(){return x(e)},onFocus:function(){return x(e)},onMouseLeave:j,onBlur:j,style:{paddingBottom:"6px",paddingRight:"6px"},children:Object(d.jsx)(B,{member:e,hoveredMember:a,setHoveredMember:function(){return l}},t)})})),Object(d.jsx)("div",{children:!r&&a&&Object(d.jsxs)(I.a.Body,{style:{height:"180px",width:"490px"},children:[Object(d.jsx)(I.a.Title,{as:"h5",children:a.fullName}),Object(d.jsx)(I.a.Text,{children:Object(d.jsx)("i",{children:a.position})}),Object(d.jsx)(I.a.Text,{as:"h7",children:a.summary})]})})]})},F=function(e){var t=e.teamMembers,r=Object(i.useState)(null),n=Object(c.a)(r,2),s=n[0],o=n[1],a=function(e){o(e)},l=function(){o(null)};return t.map((function(e,t){return Object(d.jsx)(I.a,{style:{marginBottom:"10px",width:"100%",height:"auto",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",backgroundColor:s===t?"var(--researchify-color-tertiary)":"var(--researchify-color-secondary)"},onMouseOver:function(){return a(t)},onFocus:function(){return a(t)},onMouseLeave:l,onBlur:l,children:Object(d.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(d.jsx)("div",{style:{height:"auto",minWidth:"150px",maxWidth:"150px"},children:Object(d.jsx)(I.a.Img,{style:{width:"100%",height:"100%",objectFit:"cover"},src:e.memberPic})}),Object(d.jsx)("div",{children:Object(d.jsxs)(I.a.Body,{children:[Object(d.jsx)(I.a.Title,{style:{fontSize:"17px"},children:e.fullName}),Object(d.jsx)(I.a.Text,{style:{fontSize:"16px"},children:e.position}),Object(d.jsx)(I.a.Text,{style:{fontSize:"14px",color:s===t?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:e.summary})]})})]})})}))},L=function(){var e=Object(i.useState)(0),t=Object(c.a)(e,2),r=t[0],n=t[1],a=o.d,l=o.c.teamName,x=function(){var e="undefined"!==typeof window?window.innerWidth:0;n(e)};return Object(i.useEffect)((function(){window.scrollTo(0,0),x(),window.addEventListener("resize",x)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{children:Object(d.jsxs)("title",{children:["Team -"," ",l," "]})}),Object(d.jsx)(u.a,{fluid:!0,children:r>768?Object(d.jsx)(A,{teamMembers:a}):Object(d.jsx)(F,{teamMembers:a})})]})},z=function(e){var t=e.achievement,r=Object(i.useState)(!1),n=Object(c.a)(r,2),s=n[0],o=n[1],a=function(){o(!0)},l=function(){o(!1)};return Object(d.jsx)(y.a,{style:{marginBottom:"10px",width:"100%",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:Object(d.jsxs)(y.a.Item,{style:{textAlign:"left",backgroundColor:s?"var(--researchify-color-tertiary)":"var(--researchify-color-secondary)",color:"var(--researchify-text-color)"},onMouseOver:a,onFocus:a,onMouseLeave:l,onBlur:l,children:[Object(d.jsxs)("row",{children:[Object(d.jsx)("b",{children:t.title}),Object(d.jsx)("i",{className:"float-right",children:t.yearAwarded})]}),Object(d.jsx)("div",{style:{marginRight:"20px",color:s?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:t.description})]})})},H=function(){var e=o.a,t=o.c.teamName;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(s.a,{children:Object(d.jsxs)("title",{children:[" ","Achievements -"," ",t," "]})}),e.map((function(e){return Object(d.jsx)(z,{achievement:e},e._id)}))]})},W=[{title:"Publications",path:"/publication",exact:!0,component:v,icon:Object(d.jsx)(h.a,{})},{title:"Team",path:"/team",exact:!0,component:L,icon:Object(d.jsx)(h.b,{})},{title:"Achievements",path:"/achievements",exact:!0,component:H,icon:Object(d.jsx)(b.a,{})}],P=[{title:"Home",path:"/",exact:!0,component:M,icon:Object(d.jsx)(p.a,{})}],E=function(){var e=W.filter((function(e){var t=e.title;return o.f.pages.includes(t.toUpperCase())}));return[].concat(P,Object(j.a)(e))},R=(r(94),r(50),r(51),function(e){var t=e.styles,r=e.title,c={position:"fixed",top:0,display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",height:t.mobiletopBarHeight,backgroundColor:"var(--researchify-color-quaternary)",padding:"0px 20px",boxSizing:"border-box",zIndex:3,paddingLeft:20},i=o.c.teamName,n=o.c.orgName;return Object(d.jsxs)("div",{style:c,children:[Object(d.jsx)("span",{children:i}),Object(d.jsx)("span",{style:{fontWeight:"bold"},children:r}),Object(d.jsx)("span",{children:n})]})}),U=function(e){var t=e.styles,r=e.menuItems,c=Object(n.f)();return Object(d.jsx)("div",{style:{display:"flex",alignItems:"stretch",width:"100%",height:t.footerMenuHeight,backgroundColor:"var(--researchify-color-quaternary)",position:"fixed",bottom:0,zIndex:3,color:"var(--researchify-text-color)"},children:r.map((function(e,r){return Object(d.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flex:1},children:Object(d.jsx)(a.a.Link,{style:{color:c.pathname===e.path&&"var(--researchify-link-color"},as:l.b,to:e.path,children:t.showFooterMenuText?e.title:Object(d.jsx)("span",{style:{marginRight:5,fontSize:20},children:e.icon})},e.title)},r)}))})},_=Object(n.g)((function(e){var t=e.children,r=e.location,c=Object(i.useRef)();return Object(i.useEffect)((function(){c.current!==r.pathname&&(window.scrollTo(0,0),c.current=r.pathname)}),[r]),t})),q=function(e){var t=e.styles,r=e.title,c={top:0,width:"100%",height:t.desktoptopBarHeight,fontWeight:"bold",fontSize:34,zIndex:3},i=o.c.teamName,n=o.c.orgName;return Object(d.jsxs)("div",{style:c,children:[Object(d.jsxs)("span",{children:[i," ","@"," "]}),Object(d.jsx)("span",{children:n})," ",Object(d.jsxs)("span",{style:{fontSize:28,fontWeight:"normal"},children:["-"," ",r]})]})},D=o.f.template.theme;"light"===D?r.e(0).then(r.t.bind(null,106,7)):"dark"===D?r.e(2).then(r.t.bind(null,107,7)):r.e(0).then(r.t.bind(null,106,7));t.default=function(){var e=o.c.teamName,t=Object(i.useState)(0),r=Object(c.a)(t,2),a=r[0],l=r[1],j=E(),h=function(){var e="undefined"!==typeof window?window.innerWidth:0;l(e)};Object(i.useEffect)((function(){window.scrollTo(0,0),h(),window.addEventListener("resize",h)}),[]);var b={mobiletopBarHeight:40,desktoptopBarHeight:60,footerMenuHeight:50,showFooterMenuText:a>500,showSidebar:a>768,sidebarWidth:a<1200?50:140,sidebarCollapsed:a<1200},p={paddingTop:b.showSidebar?20:b.mobiletopBarHeight+20,paddingBottom:b.showSidebar?20:b.footerMenuHeight+20,paddingRight:20,paddingLeft:b.showSidebar?b.sidebarWidth+20:20,width:"1200px"},u=j.map((function(e){var t=e.title,r=e.path,c=e.exact,i=e.component;return Object(d.jsxs)(n.a,{exact:c,path:r,children:[!b.showSidebar&&Object(d.jsx)(R,{styles:b,title:t}),Object(d.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(d.jsxs)("div",{style:p,children:[b.showSidebar&&Object(d.jsx)(q,{styles:b,title:t}),i&&Object(d.jsx)(i,{})]})})]},r)}));return Object(d.jsxs)("div",{style:{minHeight:"100vh",position:"relative"},children:[Object(d.jsx)(s.a,{children:Object(d.jsx)("title",{children:e})}),b.showSidebar?Object(d.jsx)(x,{styles:b,menuItems:j}):Object(d.jsx)(U,{styles:b,menuItems:j}),Object(d.jsx)(_,{children:Object(d.jsx)(n.c,{children:u})})]})}},50:function(e,t,r){},51:function(e,t,r){},90:function(e,t,r){},94:function(e,t,r){}}]);
//# sourceMappingURL=8.aef6e67c.chunk.js.map