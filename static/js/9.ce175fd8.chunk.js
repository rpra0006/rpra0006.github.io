(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[9],{35:function(e,t,r){"use strict";r.r(t);var n=r(48),c=r(0),i=r(2),o=r(42),s=r(11),a=r(83),A=r(12),l=r(1),x=function(e){var t=e.styles,r=e.menuItems,n=Object(i.f)(),c={height:"100vh",width:t.sidebarWidth,position:"fixed",paddingTop:90,backgroundColor:"var(--researchify-color-quaternary)"},o={display:"flex",justifyContent:t.sidebarCollapsed?"center":"flex-start",alignItems:"center",padding:"4px ".concat(t.sidebarCollapsed?0:10,"px")},s={fontSize:26,marginRight:t.sidebarCollapsed?0:10};return Object(l.jsx)("div",{style:c,children:r.map((function(e){return Object(l.jsx)("div",{style:o,children:Object(l.jsxs)(a.a.Link,{style:{color:n.pathname===e.path&&"var(--researchify-link-color"},as:A.b,to:e.path,children:[t.sidebarCollapsed&&Object(l.jsx)("span",{className:"mr-3",style:s,children:e.icon}),!t.sidebarCollapsed&&e.title]},e.title)})}))})},j=r(59),d=r(93),b=r(94),h=r(95),u=r(108),p=r(109),y=r(44),f=r(53),O=r(110),m=r(88),g=function(e){var t=e.pub,r=Object(c.useState)(!1),i=Object(n.a)(r,2),o=i[0],s=i[1],a=Object(c.useState)(!1),A=Object(n.a)(a,2),x=A[0],j=A[1],d=Object(c.useState)(!1),b=Object(n.a)(d,2),h=b[0],u=b[1],p=function(){s(!0)},y=function(){s(!1)},g=Object(l.jsx)(f.a,{in:h,children:Object(l.jsx)("div",{style:{fontSize:"15px",textAlign:"left",marginTop:"15px",marginLeft:"30px",marginRight:"30px",color:x?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:t.description})});return Object(l.jsxs)(O.a,{style:{marginBottom:"5px",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:[Object(l.jsxs)(O.a.Item,{style:{textAlign:"left",backgroundColor:o?"var(--researchify-color-tertiary)":"var(--researchify-color-secondary)"},onMouseOver:p,onFocus:p,onMouseLeave:y,onBlur:y,children:[Object(l.jsx)("div",{style:{fontSize:"16px",fontWeight:"bold",color:"var(--researchify-text-color)"},children:t.title}),t.category.categoryTitle&&Object(l.jsxs)("div",{style:{fontSize:"15px",fontStyle:"italic",color:o?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:[t.category.categoryTitle,t.category.categoryTitle&&", ".concat(t.category.type.charAt(0)+t.category.type.slice(1).toLowerCase()),t.category.issue&&", Issue ".concat(t.category.issue),t.category.volume&&", Volume ".concat(t.category.volume),t.category.pages&&", Page ".concat(t.category.pages),",  ".concat(t.yearPublished)]}),Object(l.jsx)("div",{style:{fontSize:"15px",color:o?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:t.authors.map((function(e){return"".concat(e)})).join(", ")}),t.category.publisher&&Object(l.jsxs)("div",{style:{fontSize:"15px",color:o?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:["Published by"," ",t.category.publisher]}),t.link&&Object(l.jsx)("div",{children:Object(l.jsx)("a",{style:{fontSize:"15px"},href:t.link,target:"_blank",rel:"noreferrer",children:"PDF"})})]}),t.description&&Object(l.jsx)(O.a.Item,{style:{backgroundColor:x?"var(--researchify-color-tertiary)":"var(--researchify-color-secondary)",cursor:x&&"pointer"},onMouseOver:function(){return j(!0)},onFocus:function(){return j(!0)},onMouseLeave:function(){return j(!1)},onBlur:function(){return j(!1)},onClick:function(){return u(!h)},children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",color:"var(--researchify-text-color)"},children:[Object(l.jsx)("div",{style:{textAlign:"left"},children:"Description"}),Object(l.jsxs)("div",{style:{textAlign:"right"},children:[h?Object(l.jsx)(m.b,{}):Object(l.jsx)(m.a,{})," "]})]}),g]})})]})},v=function(e){var t=e.teamPublications,r=e.groupBy;return Object(l.jsx)(l.Fragment,{children:r?t.filter((function(e){return e.category.type.toUpperCase()===r.toUpperCase()})).map((function(e){return Object(l.jsx)(g,{pub:e},e._id)})):t.map((function(e){return Object(l.jsx)(g,{pub:e},e._id)}))})},w=function(e){var t=e.teamPublications;return Object(l.jsx)(p.a,{className:"mb-2",children:Object.keys(y.categoryTypes).map((function(e){return r=e,t.filter((function(e){return e.category.type.toUpperCase()===r.toUpperCase()})).length>0&&Object(l.jsx)(u.a,{style:{color:"var(--researchify-text-color)"},eventKey:r,title:r.toUpperCase(),children:Object(l.jsx)(v,{groupBy:r,teamPublications:t})});var r}))})},T=r(49),P=function(){var e=s.f.publicationOptions,t=Object(T.a)(s.e,e.sortBy);return Object(l.jsx)(l.Fragment,{children:function(){switch(e.groupBy){case y.groupByOptions.CATEGORY:return Object(l.jsx)(w,{teamPublications:t});default:return Object(l.jsx)(v,{teamPublications:t})}}()})},C=function(){var e=s.c.teamName;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{children:Object(l.jsxs)("title",{children:[" ","Publications -"," ",e," "]})}),Object(l.jsx)(P,{})]})},S=r(102),E=r(103),N=r(104),k=r(100),B=(r(92),s.f.template.theme),L=function(e){var t=e.linkedHandle;return Object(l.jsx)("div",{className:"twitter-feed",style:{boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:Object(l.jsx)(k.a,{dataSource:{sourceType:"profile",screenName:t},options:{height:888,theme:B}})})},z=function(){var e=s.b,t=s.e,r=s.c.teamName,n=s.c.twitterHandle;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{children:Object(l.jsxs)("title",{children:["Home -"," ",r," "]})}),Object(l.jsxs)("h2",{children:["Welcome to"," ",r]}),Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)(S.a,{style:{maxWidth:"100%",height:"auto"},src:"https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"})}),Object(l.jsx)("div",{className:"mt-2 mb-5",children:e.aboutUs.map((function(e){return Object(l.jsx)("div",{style:{textAlign:"left"},children:e})}))}),Object(l.jsxs)(E.a,{children:[Object(l.jsxs)(N.a,{md:n?9:12,children:[Object(l.jsxs)("div",{className:"mb-4",style:{textAlign:"left"},children:[Object(l.jsx)("b",{children:"RECENT PUBLICATIONS "}),Object(l.jsx)(A.b,{to:"/publication",children:"(VIEW ALL PAPERS)"})]}),t.slice(0,5).map((function(e){return Object(l.jsx)(g,{pub:e},e._id)}))]}),n&&Object(l.jsx)(N.a,{md:3,children:Object(l.jsxs)("div",{className:"mb-4",style:{textAlign:"left"},children:[Object(l.jsx)("b",{children:"UPDATES "}),Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)(L,{linkedHandle:n})})]})})]})]})},M=r(107),W=r(47),I=function(e){var t,r=e.member,n=e.hoveredMember;return Object(l.jsx)(O.a,{style:{boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:Object(l.jsxs)(O.a.Item,{style:{padding:"5px",height:"180px",width:"157px",backgroundColor:"var(--researchify-color-secondary"},children:[Object(l.jsx)(S.a,{alt:"img",style:{width:"100%",height:"90%",objectFit:"cover",filter:n!==r&&"opacity(60%)"},src:null!==(t=r.memberPic)&&void 0!==t?t:W.a}),Object(l.jsx)("div",{style:{position:"absolute",left:"16px",color:n===r?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:r.fullName})]})})},H=function(e){var t=e.teamMembers,r=s.c.profilePic,i=Object(c.useState)(null),o=Object(n.a)(i,2),a=o[0],A=o[1],x=function(e){A(e)},j=function(){A(null)};return Object(l.jsxs)("div",{style:{margin:"auto",display:"flex",justifyContent:"flex-start",flexWrap:"wrap"},children:[Object(l.jsx)("div",{children:r&&(a?Object(l.jsxs)(M.a.Body,{style:{height:"180px",width:"490px"},children:[Object(l.jsx)(M.a.Title,{as:"h5",children:a.fullName}),Object(l.jsx)(M.a.Text,{children:Object(l.jsx)("i",{children:a.position})}),Object(l.jsx)(M.a.Text,{as:"h7",children:a.summary})]}):Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center",height:"180px",width:"490px"},children:Object(l.jsx)(S.a,{style:{width:"auto",height:"auto"},src:r})}))}),t.map((function(e,t){return Object(l.jsx)("div",{onMouseOver:function(){return x(e)},onFocus:function(){return x(e)},onMouseLeave:j,onBlur:j,style:{paddingBottom:"6px",paddingRight:"6px"},children:Object(l.jsx)(I,{member:e,hoveredMember:a,setHoveredMember:function(){return A}},t)})})),Object(l.jsx)("div",{children:!r&&a&&Object(l.jsxs)(M.a.Body,{style:{height:"180px",width:"490px"},children:[Object(l.jsx)(M.a.Title,{as:"h5",children:a.fullName}),Object(l.jsx)(M.a.Text,{children:Object(l.jsx)("i",{children:a.position})}),Object(l.jsx)(M.a.Text,{as:"h7",children:a.summary})]})})]})},R=function(e){var t=e.teamMembers,r=Object(c.useState)(null),i=Object(n.a)(r,2),o=i[0],s=i[1],a=function(e){s(e)},A=function(){s(null)};return t.map((function(e,t){var r;return Object(l.jsx)(M.a,{style:{marginBottom:"5px",width:"100%",height:"auto",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",backgroundColor:o===t?"var(--researchify-color-tertiary)":"var(--researchify-color-secondary)"},onMouseOver:function(){return a(t)},onFocus:function(){return a(t)},onMouseLeave:A,onBlur:A,children:Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"flex-start"},children:[Object(l.jsx)("div",{style:{height:"auto",minWidth:"150px",maxWidth:"150px"},children:Object(l.jsx)(M.a.Img,{style:{width:"100%",height:"100%",objectFit:"cover"},src:null!==(r=e.memberPic)&&void 0!==r?r:W.a})}),Object(l.jsx)("div",{children:Object(l.jsxs)(M.a.Body,{children:[Object(l.jsx)(M.a.Title,{style:{fontSize:"17px"},children:e.fullName}),Object(l.jsx)(M.a.Text,{style:{fontSize:"16px"},children:e.position}),Object(l.jsx)(M.a.Text,{style:{fontSize:"14px",color:o===t?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:e.summary})]})})]})})}))},V=function(){var e=Object(c.useState)(0),t=Object(n.a)(e,2),r=t[0],i=t[1],a=s.d,A=s.c.teamName,x=function(){var e="undefined"!==typeof window?window.innerWidth:0;i(e)};return Object(c.useEffect)((function(){window.scrollTo(0,0),x(),window.addEventListener("resize",x)}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{children:Object(l.jsxs)("title",{children:["Team -"," ",A," "]})}),r>768?Object(l.jsx)(H,{teamMembers:a}):Object(l.jsx)(R,{teamMembers:a})]})},Y=function(e){var t=e.achievement,r=Object(c.useState)(!1),i=Object(n.a)(r,2),o=i[0],s=i[1],a=function(){s(!0)},A=function(){s(!1)};return Object(l.jsx)(O.a,{style:{marginBottom:"5px",width:"100%",boxShadow:"0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"},children:Object(l.jsxs)(O.a.Item,{style:{textAlign:"left",backgroundColor:o?"var(--researchify-color-tertiary)":"var(--researchify-color-secondary)",color:"var(--researchify-text-color)"},onMouseOver:a,onFocus:a,onMouseLeave:A,onBlur:A,children:[Object(l.jsxs)("row",{children:[Object(l.jsx)("b",{children:t.title}),Object(l.jsx)("i",{className:"float-right",children:t.yearAwarded})]}),Object(l.jsx)("div",{style:{fontSize:"14px",marginRight:"20px",color:o?"var(--researchify-text-color)":"var(--researchify-text-color-secondary)"},children:t.description})]})})},F=function(){var e=s.a,t=s.c.teamName;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.a,{children:Object(l.jsxs)("title",{children:[" ","Achievements -"," ",t," "]})}),e.map((function(e){return Object(l.jsx)(Y,{achievement:e},e._id)}))]})},K=[{title:"Publications",path:"/publication",exact:!0,component:C,icon:Object(l.jsx)(d.a,{})},{title:"Team",path:"/team",exact:!0,component:V,icon:Object(l.jsx)(d.b,{})},{title:"Achievements",path:"/achievements",exact:!0,component:F,icon:Object(l.jsx)(b.a,{})}],D=[{title:"Home",path:"/",exact:!0,component:z,icon:Object(l.jsx)(h.a,{})}],J=function(){var e=K.filter((function(e){var t=e.title;return s.f.pages.includes(t.toUpperCase())}));return[].concat(D,Object(j.a)(e))},U=(r(96),r(50),r(51),function(e){var t=e.styles,r=e.menuItems,n=Object(i.f)();return Object(l.jsx)("div",{style:{display:"flex",alignItems:"stretch",width:"100%",height:t.footerMenuHeight,backgroundColor:"var(--researchify-color-quaternary)",position:"fixed",bottom:0,zIndex:3,color:"var(--researchify-text-color)"},children:r.map((function(e,r){return Object(l.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flex:1},children:Object(l.jsx)(a.a.Link,{style:{color:n.pathname===e.path&&"var(--researchify-link-color"},as:A.b,to:e.path,children:t.showFooterMenuText?e.title:Object(l.jsx)("span",{style:{marginRight:5,fontSize:20},children:e.icon})},e.title)},r)}))})}),q=Object(i.g)((function(e){var t=e.children,r=e.location,n=Object(c.useRef)();return Object(c.useEffect)((function(){n.current!==r.pathname&&(window.scrollTo(0,0),n.current=r.pathname)}),[r]),t})),Q=function(e){var t=e.styles,r=e.title,n={top:0,width:"100%",height:t.desktoptopBarHeight,fontWeight:"bold",fontSize:34,zIndex:3},c=s.c.teamName,i=s.c.orgName;return Object(l.jsxs)("div",{style:n,children:[Object(l.jsxs)("span",{children:[c," ","@"," "]}),Object(l.jsx)("span",{children:i})," ",Object(l.jsxs)("span",{style:{fontSize:28,fontWeight:"normal"},children:["-"," ",r]})]})},G=s.f.template.theme;"light"===G?r.e(0).then(r.t.bind(null,105,7)):"dark"===G?r.e(2).then(r.t.bind(null,106,7)):r.e(0).then(r.t.bind(null,105,7));t.default=function(){var e=s.c.teamName,t=Object(c.useState)(0),r=Object(n.a)(t,2),a=r[0],A=r[1],j=J(),d=function(){var e="undefined"!==typeof window?window.innerWidth:0;A(e)};Object(c.useEffect)((function(){window.scrollTo(0,0),d(),window.addEventListener("resize",d)}),[]);var b={desktoptopBarHeight:60,footerMenuHeight:50,showFooterMenuText:a>500,showSidebar:a>768,sidebarWidth:a<1200?50:140,sidebarCollapsed:a<1200},h={paddingTop:15,paddingBottom:b.showSidebar?20:b.footerMenuHeight+20,paddingRight:20,paddingLeft:b.showSidebar?b.sidebarWidth+20:20,width:"1200px"},u=j.map((function(e){var t=e.title,r=e.path,n=e.exact,c=e.component;return Object(l.jsx)(i.a,{exact:n,path:r,children:Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsxs)("div",{style:h,children:[b.showSidebar&&Object(l.jsx)(Q,{styles:b,title:t}),c&&Object(l.jsx)(c,{})]})})},r)}));return Object(l.jsxs)("div",{style:{minHeight:"100vh",position:"relative"},children:[Object(l.jsx)(o.a,{children:Object(l.jsx)("title",{children:e})}),b.showSidebar?Object(l.jsx)(x,{styles:b,menuItems:j}):Object(l.jsx)(U,{styles:b,menuItems:j}),Object(l.jsx)(q,{children:Object(l.jsx)(i.c,{children:u})})]})}},44:function(e,t){e.exports={pageSize:10,categoryPageSize:5,categoryTypes:{Journal:"Journal",Conference:"Conference",Book:"Book",Other:"Other"},groupByOptions:{NONE:"None",CATEGORY:"Category"},sortingOptions:{TITLE:"Title",AUTHOR:"Author",YEAR:"Year"}}},47:function(e,t,r){"use strict";t.a="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMQEA4QEBEPEA4PDxAOEA0NDw8SDQ4PFRcWFhURFRYYKCggGBomGxYVITEhJSkrLi4uGR8zODMuNygtLisBCgoKDg0NDw0NDisZHxkrKysrKysrLSsrKysrKysrKysrKys3KysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADgQAQACAQEDBwsDAwUAAAAAAAABAgMRBSExBAYSUVJhcTJBYoGRkqGxwdHhExUiM0NyI0Jjc5P/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMsM2WKVm1p0rG+ZVbaO0rZZmN9cfmpHn77dYJvlO2sVN0TN59Dh7eDivzhnzY49d/wAIMVE3XnDPnxx6rz9nXyfbmO262tJ9LfX2wrIC80tExExMTE8JidYeqfyHl18M61nWvnpPkz9p71q5JymuWsWrO7zx54nqlFbgAAAAAAAAAAAAAAAAAAAAauVZuhS9+zWZ9fmBAbf5Z0r/AKcT/Gk7++/4+6JezOu+d8zvmeuXioAAAAO7Y/LP0skaz/C+lbd3VPqcIC9Dj2Tn6eGkzxiOjPjG7X5OxFAAAAAAAAAAAAAAAAAAEbzgvphmO1asfX6JJFc5P6Uf9kfKQVoBUAAAAAAWHmzf+GSvVaJ9sfhMoPmxwy+NPqnEUAAAAAAAAAAAAAAAAAAcG28fSwX666W9k7/hq73l6xMTE8JiYnwkFGGzlGGaXtSeNZ08eqfY1qgAAAAD2tZmYiN8zOkR1zPAFj5t49MVrdq8+yN33SzTyTB+nSlOzWInvnzz7W5FAAAAAAAAAAAAAAAAAAAAQ+3uQdOP1Kx/KsaWjtV6/GFdXpDbS2L0pm+LSLTvmk7qzPd1Arw2ZsNqTpes1nvjj4dbWqAMseObTpWJtPVWJmQYpvYHINZ/VtG6PIjrntPdnbE3xbNw4xjjz/5T9E7EaIr0AAAAAAAAAAAAAAAAAAAAY3vFY1tMRHXM6QjeUbcx18nW8+jGlfbIJQV3Lt+8+TWlfHW0/RzztrN2ojwrUFotSJ3TETHVMaw5r7NxT/br6o0+Sv8A7zm7ce7U/ec3bj3agsFdmYY/t19es/N048cV3ViKx1ViIj4Kt+85u3Hu1P3nN2492qi1iqxtnN2o92rdj29kjyq0t6piUFkERg29SfLranf5Vfhv+CTw563jWlotHdINgAAAAAAAAAAAAAAEyAidobarTWuPS9+HS/2V+7i2vtWb648c6U4WtHG/h3fNEA28o5TbJOt7TbunhHhHmagVAAAAAAAABnjyTWdazNZ66zpLABOcg25wrl/9Kx84+ydpeJiJiYmJ3xMcJUZ27N2jbDPXjmf5V+sd4LaMMOWL1i1Z1rMaxLNFAAAAAAAAAAEPzg5b0axjrO+8a27q9XrTCn7Ty9PLkn0piPCN0fIHKAqAAAAAAAAAAAAAAJbYHLejf9OZ/jfh6N/z9lkUattJiY4xMTHjC74r9KtbRwtET7UVkAAAAAAAAADHLfo1tbsxM+xR9Vv2tfTBln0dPbu+qoAAKgAAAAAAAAAAAAAAt2yL9LBinqr0fZu+iorPzdtrh07N7R8p+qKkwAAAAAAAAAR235/0Ld81j4qstHOH+hP+VVXEAFAAAAAAAAAAAAAABYubM/wyR6f0hXVg5s+Rk/yj5CpoBAAAAAAAABx7XxdLDkiOMR0o9U6qivSvbT2NNdb4o1rxmkca+HXHcCGAVAAAAAAAAAAAAAABZubuPTFr27TPqjSPpKH2bs62adeGOON+vujvWrFjisRWsaRWIiI7kVkAAAAAAAAAAADk5Zs7Hl32jS3brut+UNynYV430mLx1T/G32WQBSc2C1PLravjE6Na9TDky7NxW446+NY0n4AqAsuTYOOeE3r4TEx8XPfm91ZPbX8qIIS9ub+TzWxz4zaPownYWX/j9Vp+wiLEn+x5vQ978PY2Fl68fvT9gRYl6838nnvSPDpT9G+nN7tZPdr9wQIs+PYWKOPTt420j4OzByPHTyaVieuI3+0VV+T7OyZPJpOnatur8UvyPYVa6Tknpz2Y3U/KYEHla6RpG6I3REcIegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//Z"},49:function(e,t,r){"use strict";var n=r(44);t.a=function(e,t){switch(t){case n.sortingOptions.AUTHOR:e.sort((function(e,t){return e.authors[0].toLowerCase()>t.authors[0].toLowerCase()?1:e.authors[0].toLowerCase()<t.authors[0].toLowerCase()?-1:0}));break;case n.sortingOptions.TITLE:e.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?1:e.title.toLowerCase()<t.title.toLowerCase()?-1:0}));break;case n.sortingOptions.YEAR:e.sort((function(e,t){return e.yearPublished>t.yearPublished?-1:e.yearPublished<t.yearPublished?1:0}));break;case"Category Title":e.sort((function(e,t){return e.category.categoryTitle.toLowerCase()>t.category.categoryTitle.toLowerCase()?1:e.category.categoryTitle.toLowerCase()<t.category.categoryTitle.toLowerCase()?-1:0}));break;default:e.sort((function(e,t){return e.title.toLowerCase()>t.title.toLowerCase()?1:e.title.toLowerCase()<t.title.toLowerCase()?-1:0})),e.sort((function(e,t){return e.yearPublished>t.yearPublished?-1:e.yearPublished<t.yearPublished?1:0}))}return e}},50:function(e,t,r){},51:function(e,t,r){},92:function(e,t,r){},96:function(e,t,r){}}]);
//# sourceMappingURL=9.ce175fd8.chunk.js.map