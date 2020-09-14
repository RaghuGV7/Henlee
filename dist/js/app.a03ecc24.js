(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var s=a("2b0e"),i=a("5f5b");a("9537"),a("3e48");s["default"].use(i["a"]);a("92ec");var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("main",{staticClass:"main-container"},[a("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:150}},[a("router-view")],1)],1),a("Footer")],1)},o=[],r=a("7c76"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-navbar",{staticClass:"navbar-bg",attrs:{toggleable:"lg",fixed:"top",type:"light"}},[a("div",{staticClass:"top-logo d-none d-md-block"}),a("div",{staticClass:"top-logo top-logo-sm d-md-none d-block"}),a("b-navbar-brand",{staticClass:"p-0",attrs:{to:"/"}},[a("h2",{staticClass:"brand-title"},[t._v("Henlee Ltd")])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-item",{attrs:{href:"#home",right:""}},[t._v("Home")]),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v("Services")]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"#services"}},[a("i",{staticClass:"fa fa-angle-double-up"}),t._v(" Business Process Improvement")]),a("b-dropdown-item",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-wrench"}),t._v(" Change Management")]),a("b-dropdown-item",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-cogs"}),t._v(" ERP Implementations")]),a("b-dropdown-item",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-chart-line"}),t._v(" Data Management & Business Intelligence")]),a("b-dropdown-item",{attrs:{href:"#"}},[a("i",{staticClass:"fa fa-sync"}),t._v(" Data Integrations")])],1),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v("Technologies")]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Microsoft Dynamics AX 2012")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Microsoft Dynamics 365 F&O")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Microsoft Dynamics 365 Sales")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Microsoft Dynamics 365 Field Service")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Power BI")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("SQL Services")])],1),a("b-nav-item",{attrs:{right:"",href:"#contact"}},[t._v("Contact")]),a("b-nav-item",{attrs:{right:"",href:"#about"}},[t._v("About Us")])],1)],1)],1)},c=[],u={},d=u,m=a("2877"),p=Object(m["a"])(d,l,c,!1,null,null,null),v=p.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"bg-dark text-white p-1"},[a("div",{staticClass:"container"},[a("b-row",[a("b-col",{attrs:{sm:"12",md:"6"}}),a("b-col",{attrs:{sm:"12",md:"6","align-h":"end"}},[a("p",{staticClass:"copyright m-0 p-3 text-muted"},[a("span",{staticClass:"float-right"},[t._v("Copyright © 2020 Henlee Ltd. All rights reserved")])])])],1)],1)])},h=[],b={},g=b,C=Object(m["a"])(g,f,h,!1,null,null,null),_=C.exports,w={components:{FadeTransition:r["a"],Header:v,Footer:_}},x=w,y=Object(m["a"])(x,n,o,!1,null,null,null),E=y.exports,j=a("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("Hero"),a("Services"),a("About"),a("Technologies"),a("ContactUs")],1)},O=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"p-0",attrs:{id:"home"}},[a("div",{staticClass:"jumbotron jumbotron-fluid home-hero"},[a("div",{staticClass:"container"},[a("h1",{staticClass:"d-none d-md-block display-3"},[t._v("Experts in ERP implementations, Data migration and Business Intelligence")]),a("h1",{staticClass:"d-md-none d-block"},[t._v("Experts in ERP implementations, Data migration and Business Intelligence")]),a("p",{staticClass:"lead p-2"},[t._v("We migrate, maintain and transform our data.")]),a("b-button",{staticClass:"m-2",attrs:{variant:"primary",href:"#services"}},[t._v("Our Services")])],1)])])},$=[],M={},D=M,P=Object(m["a"])(D,S,$,!1,null,null,null),q=P.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"contact",attrs:{id:"contact"}},[a("b-container",[a("div",{staticClass:"section-title"},[a("h2",[t._v("Contact")])]),a("b-row",[a("b-col",{attrs:{sm:"12",md:"4"}},[a("div",{staticClass:"info-box"},[a("i",{staticClass:"fa fa-map-marked-alt fa-2x"}),a("h3",[t._v("Our Address")]),a("p",[t._v("6 Woodchester, Westlea, SN5 7BQ")])])]),a("b-col",{attrs:{sm:"12",md:"4"}},[a("div",{staticClass:"info-box"},[a("i",{staticClass:"fa fa-envelope-open-text fa-2x"}),a("h3",[t._v("Email Us")]),a("p",[t._v("abc@henlee.com")])])]),a("b-col",{attrs:{sm:"12",md:"4"}},[a("div",{staticClass:"info-box"},[a("i",{staticClass:"fa fa-mobile-alt fa-2x"}),a("h3",[t._v("Call Us")]),a("p",[t._v("+44 0123 456 789")])])])],1),a("b-row",[a("b-col",[a("iframe",{attrs:{width:"100%",height:"400",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",src:"https://maps.google.com/maps?width=100%25&height=400&hl=en&q=6%20woodchester,%20sn5%207bq+(Henlee%20Ltd)&t=&z=14&ie=UTF8&iwloc=B&output=embed"}})])],1)],1)],1)},B=[],T={},H=T,L=Object(m["a"])(H,A,B,!1,null,null,null),F=L.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"about",attrs:{id:"about"}},[a("b-container",[a("div",{staticClass:"section-title"},[a("h2",[t._v("About Us")]),a("p",[t._v(" Henlee is a specialists in improving clients business processes, ERP implementations of Microsoft dynamics AX 2012, Dynamics 365 Finance and Operations, Customer Engagement (D365 CRM) and Business intelligence. They are one shop stop for industry expertise skills in health check of database, application and presentation layer servers. ")]),a("p",[t._v(" In their data migration process, they define steps and drive the whole project using the proven methodology of Discovery, Analysis, Build and Deployment process. They have a 20 years of expertise in designing, customizing and implementing Dynamics AX implementations. ")])]),a("b-row")],1)],1)},U=[],z={},R=z,G=Object(m["a"])(R,I,U,!1,null,null,null),N=G.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"services"},[a("b-container",[a("div",{staticClass:"section-title"},[a("h2",{attrs:{id:"technologies"}},[t._v("Technologies")])]),a("b-row")],1)],1)},X=[],Y={},J=Y,Q=Object(m["a"])(J,W,X,!1,null,null,null),K=Q.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"services",attrs:{id:"services"}},[a("b-container",[a("div",{staticClass:"section-title"},[a("h2",[t._v("Services")])]),a("b-row")],1)],1)},Z=[],tt={},et=tt,at=Object(m["a"])(et,V,Z,!1,null,null,null),st=at.exports,it={name:"Home",components:{Hero:q,Services:st,Technologies:K,About:N,ContactUs:F}},nt=it,ot=Object(m["a"])(nt,k,O,!1,null,null,null),rt=ot.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ct=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"title-area"}},[a("h2",{staticClass:"text-primary"},[t._v("Kannada Rajyotsava 2020")]),a("h5",{staticClass:"text-muted"},[t._v("ಕನ್ನಡ ರಾಜ್ಯೋತ್ಸವ 2020")]),a("hr"),a("ul",{staticClass:"list-inline text-muted"},[a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fas fa-calendar-alt"}),t._v(" Nov, 1 2020")]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fas fa-clock"}),t._v(" 9:00 AM (BST)")]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fas fa-map-marker-alt"}),t._v(" Swindon hindu temple")]),a("li",{staticClass:"list-inline-item"},[a("i",{staticClass:"fas fa-user"}),t._v(" Brijesh Gattapur")])])]),a("div",{attrs:{id:"details-area"}},[a("div",{attrs:{id:"short-detail"}},[a("p",[t._v(" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, veritatis impedit error sunt fugit, molestias, vel cum laudantium eveniet illum minus sed. Perferendis quidem non vel nisi sunt. Obcaecati, sint! ")])]),a("div",{staticClass:"row media-row",attrs:{id:"event-gallery"}},[a("div",{staticClass:"col-lg-4 col-md-6 media-container",attrs:{"data-aos":"zoom-in","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("img",{attrs:{width:"100%",src:"http://www.swindonhindutemple.org.uk/images/big1.jpg",alt:""}})]),a("div",{staticClass:"col-lg-4 col-md-6 media-container",attrs:{"data-aos":"zoom-in","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("div",{staticClass:"embed-responsive embed-responsive-3by2"},[a("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/W_xFr-XLBcA",allowfullscreen:""}})])]),a("div",{staticClass:"col-lg-4 col-md-6 media-container",attrs:{"data-aos":"zoom-in","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("img",{attrs:{width:"100%",src:"http://www.swindonhindutemple.org.uk/images/big1.jpg",alt:""}})])]),a("div",{attrs:{id:"event-story"}},[a("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod fugiat, voluptatibus molestiae expedita possimus alias incidunt, accusamus impedit distinctio nisi tempora animi laborum voluptas excepturi in asperiores, atque porro? ")]),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod fugiat, voluptatibus molestiae expedita possimus alias incidunt, accusamus impedit distinctio nisi tempora animi laborum voluptas excepturi in asperiores, atque porro? ")]),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod fugiat, voluptatibus molestiae expedita possimus alias incidunt, accusamus impedit distinctio nisi tempora animi laborum voluptas excepturi in asperiores, atque porro? ")]),a("p",[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quod fugiat, voluptatibus molestiae expedita possimus alias incidunt, accusamus impedit distinctio nisi tempora animi laborum voluptas excepturi in asperiores, atque porro? ")])])])])}],ut={},dt=ut,mt=Object(m["a"])(dt,lt,ct,!1,null,null,null),pt=mt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-primary"},[t._v("Upcoming Events")]),a("hr"),a("EventCard"),a("EventCard"),a("h2",{staticClass:"text-primary"},[t._v("Recent Events")]),a("hr"),a("EventCard"),a("EventCard"),a("EventCard"),a("EventCard")],1)},ft=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"mb-3 rounded-lg",attrs:{title:"Event title","img-src":"https://picsum.photos/600/200/?image=25","img-alt":"Image","img-top":"",tag:"article","data-aos":"fade-up","data-aos-duration":"1200","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("b-card-text",[t._v(" Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. ")]),a("b-link",{attrs:{to:"event/1"}},[t._v("More Detials")])],1)},bt=[],gt={},Ct=gt,_t=Object(m["a"])(Ct,ht,bt,!1,null,null,null),wt=_t.exports,xt={components:{EventCard:wt}},yt=xt,Et=Object(m["a"])(yt,vt,ft,!1,null,null,null),jt=Et.exports,kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container contact-form"},[a("h2",{staticClass:"text-primary"},[t._v("Contact Us")]),a("hr"),a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col text-center"},[a("h5",{staticClass:"text-primary"},[t._v("eMail us @")]),a("b-link",{staticClass:"text-muted",attrs:{href:"mailto:mail2kbs@gmail.com"}},[a("i",{staticClass:"far fa-envelope"}),t._v(" mail2kbs@gmail.com")]),a("h5",{staticClass:"mt-5 text-primary mb-3"},[t._v("Connect on social media")]),t._m(1),t._m(2)],1)])])},Ot=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col  border-right"},[a("form",{attrs:{method:"post"}},[a("h5",{staticClass:"text-info"},[t._v("You can drop us a message, we shall get back to you shortly.")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("Name:")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"txtName",placeholder:"Your Name *",value:""}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"control-label"},[t._v("Email:")]),a("input",{staticClass:"form-control",attrs:{type:"text",name:"txtEmail",placeholder:"Your Email *",value:""}})]),a("div",{staticClass:"form-group"},[a("textarea",{staticClass:"form-control",attrs:{name:"txtMsg",placeholder:"Your Message *",rows:"6"}})]),a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-primary",attrs:{type:"submit",name:"btnSubmit",value:"Send Message"}})])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"p-3 text-primary",attrs:{href:"https://www.facebook.com/groups/287147064772710"}},[a("i",{staticClass:"fab fa-facebook fa-3x"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"p-3 text-danger",attrs:{href:""}},[a("i",{staticClass:"fab fa-youtube fa-3x"})])}],St={},$t=St,Mt=Object(m["a"])($t,kt,Ot,!1,null,null,null),Dt=Mt.exports,Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("EventGallery"),a("hr",{staticClass:"pb-3"}),a("EventGallery"),a("hr",{staticClass:"pb-3"}),a("EventGallery")],1)},qt=[],At=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"event-gallery"},[a("h2",{staticClass:"text-secondary"},[t._v("Event Name")]),a("div",{staticClass:"row media-row"},[a("div",{staticClass:"col-lg-4 col-md-6 media-container",attrs:{"data-aos":"zoom-in","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("img",{attrs:{width:"100%",src:"http://www.swindonhindutemple.org.uk/images/big1.jpg",alt:""}})]),a("div",{staticClass:"col-lg-4 col-md-6 media-container",attrs:{"data-aos":"zoom-in","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("div",{staticClass:"embed-responsive embed-responsive-3by2"},[a("iframe",{staticClass:"embed-responsive-item",attrs:{src:"https://www.youtube.com/embed/W_xFr-XLBcA",allowfullscreen:""}})])]),a("div",{staticClass:"col-lg-4 col-md-6 media-container",attrs:{"data-aos":"zoom-in","data-aos-duration":"500","data-aos-easing":"ease-in-out","data-aos-mirror":"true","data-aos-once":"true"}},[a("img",{attrs:{width:"100%",src:"http://www.swindonhindutemple.org.uk/images/big1.jpg",alt:""}})])])])}],Tt={},Ht=Tt,Lt=Object(m["a"])(Ht,At,Bt,!1,null,null,null),Ft=Lt.exports,It={components:{EventGallery:Ft}},Ut=It,zt=Object(m["a"])(Ut,Pt,qt,!1,null,null,null),Rt=zt.exports;s["default"].use(j["a"]);var Gt=[{path:"/",name:"Home",component:rt},{path:"/events",name:"events",component:jt},{path:"/event/:id",name:"EventDetail",component:pt},{path:"/gallery",name:"Gallery",component:Rt},{path:"/Contact",name:"Contact",component:Dt}],Nt=new j["a"]({mode:"history",base:"/",routes:Gt}),Wt=Nt,Xt=a("2f62");s["default"].use(Xt["a"]);var Yt=new Xt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Jt=a("f5af"),Qt=a.n(Jt);a("e829");s["default"].config.productionTip=!1,new s["default"]({created:function(){Qt.a.init()},router:Wt,store:Yt,render:function(t){return t(E)}}).$mount("#app")},"92ec":function(t,e,a){}});
//# sourceMappingURL=app.a03ecc24.js.map