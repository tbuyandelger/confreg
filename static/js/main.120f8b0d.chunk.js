(this.webpackJsonpconfrence=this.webpackJsonpconfrence||[]).push([[0],{189:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(12),r=a.n(i),s=a(60),o=a(22),l=a(13),j=a(99),d=a.n(j).a.create({baseURL:"http://khu.edu.mn:3000/api/v1/"}),h=a(2),u=c.a.createContext(),m={success:!1,researcher:[],pagination:{}},b=function(e){var t=localStorage.getItem("token"),a=localStorage.getItem("role"),c=localStorage.getItem("userId");Object(n.useEffect)((function(){q()}),[]);var i=Object(n.useState)(m),r=Object(l.a)(i,2),s=r[0],j=r[1],b=Object(n.useState)("Mongolia"),x=Object(l.a)(b,2),g=x[0],p=x[1],O=Object(n.useState)({success:!1,researchs:[]}),f=Object(l.a)(O,2),v=f[0],y=f[1],C=Object(n.useState)({success:!1,journals:[]}),A=Object(l.a)(C,2),T=A[0],k=A[1],I=Object(n.useState)({success:!1,researchEvents:[]}),N=Object(l.a)(I,2),E=N[0],L=N[1],S=Object(n.useState)({value:!1,type:""}),R=Object(l.a)(S,2),w=R[0],M=R[1],B=Object(n.useState)(!1),W=Object(l.a)(B,2),z=W[0],U=W[1],F=function(e){d.get("research?teacher_id=".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){y(Object(o.a)({},e.data))})).catch((function(e){return console.log(e)}))},_=function(){d.get("research",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){y(Object(o.a)({},e.data))})).catch((function(e){return console.log(e)}))},q=function(){d.get("researcher",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){j(Object(o.a)({},e.data))})).catch((function(e){return console.log(e)}))};return Object(h.jsx)(u.Provider,{value:{lang:g,setLang:p,getResearchDep:function(e){d.get("research?department_id=".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){y(Object(o.a)({},e.data))})).catch((function(e){return console.log(e)}))},eventState:E,AllEvent:function(){d.get("event",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){L(Object(o.a)({},e.data))})).catch((function(e){return console.log(e)}))},Alljournal:function(){d.get("journal",{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){k(Object(o.a)({},e.data))})).catch((function(e){return console.log(e)}))},journalState:T,getResearch:F,addResearch:function(e){M({value:!1,type:""}),d.post("research",e,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(t){M({value:!0,type:"\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439"}),F(e.teacher_id)})).catch((function(e){return M({value:!0,type:e.response.data.error})}))},resState:s,addRes:function(e){U(!1),d.post("researcher",e,{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(t){U(!0),d.post("researcher/forgot-password",{email:e.email}).then((function(e){q()})).catch((function(e){return w("no")}))})).catch((function(e){return console.log(e.response.data.error)}))},loading:z,deleteRes:function(e){d.delete("researcher/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){q()})).catch((function(e){return console.log(e.response.data.error)}))},AllResearch:_,alert:w,setAlert:M,researchState:v,deleteResearch:function(e){M({value:!1,type:""}),d.delete("research/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){M({value:!0,type:"\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439"}),"teacher"===a?F(c):_()})).catch((function(e){return M({value:!0,type:e.response.data.error})}))}},children:e.children})},x=u,g=a(242),p=a(66),O=a(230),f=a(249),v=a(107),y=a.n(v),C=a(253),A=a(108),T=a.n(A),k=a(254),I=a(241),N=a(243),E=a(244),L=a(245),S=a(238),R=a(246),w=a(247),M=a(255),B=a(248),W=a(191),z=a(250),U=a(239),F=a(8),_=a(81),q=a.n(_),P=a(106),G=a.n(P),D=a(237),Y=a(20),V=a(100),H=a.n(V),Z=a(101),J=a(233),K=a(235),X=a(236),Q=Object(Z.autoPlay)(H.a),$=[{label:"\u201c\u0425\u042d\u041b, \u0421\u041e\u0401\u041b, \u0421\u041e\u0401\u041b \u0425\u041e\u041e\u0420\u041e\u041d\u0414\u042b\u041d \u0425\u0410\u0420\u0418\u041b\u0426\u0410\u0410\u201d",tailbar:"\u043e\u043b\u043e\u043d \u0443\u043b\u0441\u044b\u043d \u044d\u0440\u0434\u044d\u043c \u0448\u0438\u043d\u0436\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 VIII \u0445\u0443\u0440\u0430\u043b",imgPath:"http://khu.edu.mn:3000/upload/programfiles/conf01.jpg"}],ee=[{label:"\u201cLANGUAGE, CULTURE, INTERCULTURAL COMMUNICATION\u201d ",tailbar:"8th international scientific conference",imgPath:"http://khu.edu.mn:3000/upload/programfiles/conf01.jpg"}],te=Object(O.a)((function(e){return{root:{maxWidth:"100%",flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},media:{height:800,textAlign:"center",paddingTop:e.spacing(20)}}})),ae=function(){var e=Object(n.useContext)(x),t=e.lang,a=(e.setLang,te()),i=Object(Y.a)(),r=c.a.useState(0),s=Object(l.a)(r,2),o=s[0],j=s[1],d=c.a.useState(!1),u=Object(l.a)(d,2),m=u[0],b=u[1],g=function(){b(!0)};return Object(h.jsxs)("div",{className:a.root,children:[Object(h.jsx)(J.a,{open:m,onClose:function(){b(!1)},"aria-labelledby":"form-dialog-title",children:Object(h.jsx)("img",{style:{width:"100%"},src:"http://khu.edu.mn:3000/upload/programfiles/zar.jpg",alt:""})}),Object(h.jsx)(Q,{axis:"rtl"===i.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){j(e)},enableMouseEvents:!0,children:("Mongolia"===t?$:ee).map((function(e,t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(K.a,{children:Object(h.jsx)(X.a,{className:a.media,image:e.imgPath,title:"Contemplative Reptile",children:Object(h.jsx)(D.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:Object(h.jsxs)(D.a,{style:{padding:15,height:"300%",backgroundColor:"rgba(0,0,0,0.5)",color:"#fff"},item:!0,xs:12,children:[Object(h.jsx)("img",{style:{height:100},src:"http://khu.edu.mn:3000/upload/programfiles/conflogo.png",alt:""}),Object(h.jsx)(p.a,{gutterBottom:!0,variant:"h3",children:e.label}),Object(h.jsx)(p.a,{gutterBottom:!0,variant:"h4",children:e.tailbar}),Object(h.jsx)(p.a,{style:{color:"#fff"},children:"2022-09-30, 09.00 AM. UTC+7"}),Object(h.jsx)(W.a,{onClick:g,size:"medium",variant:"contained",style:{backgroundColor:"#f1c40f",margin:10},children:"VIII \u0425\u0423\u0420\u0410\u041b"})]})})})},t)})}))})]})},ne=Object(O.a)((function(e){return{root:{maxWidth:"100%"},media:{height:1080,backgroundColor:"",color:"#2d3436"},paper:{padding:e.spacing(1),textAlign:"center"},paper1:{padding:e.spacing(1),textAlign:"left"},root1:{maxWidth:"100%"}}}));function ce(e){var t=e.data;console.log(t);ne();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(ae,{data:t}),Object(h.jsx)(D.a,{container:!0,direction:"row","flex-start":!0,alignItems:"flex-start",children:Object(h.jsx)(D.a,{item:!0,xs:12,children:Object(h.jsx)(S.a,{})})})]})}var ie=a(251);Object(O.a)((function(e){return{root:{padding:e.spacing(3)}}}));var re=function(){var e=Object(n.useContext)(x),t=(e.resState,e.addRes),a=e.loading,i=c.a.useState({imagePath:"",lname:"",fname:"",regnum:"",gender:"",email:"",password:"1234568",phone:"",phone_order:"",bname:"",about:"",aimag:"",mergejil:"",tugsen_surguuli:"",zeregtsol:"",amjilt:""}),r=Object(l.a)(i,2),s=r[0],o=(r[1],c.a.useState(!1)),j=Object(l.a)(o,2);j[0],j[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(D.a,{style:{marginTop:20},container:!0,justify:"center",children:a?Object(h.jsxs)(D.a,{style:{textAlign:"center",color:"#013a91"},container:!0,justify:"center",item:!0,xs:4,children:[Object(h.jsx)(p.a,{children:"\u0411\u04ae\u0420\u0422\u0413\u042d\u041b \u0410\u041c\u0416\u0418\u041b\u0422\u0422\u0410\u0419 \u0411\u041e\u041b\u041b\u041e\u041e"}),Object(h.jsxs)(p.a,{variant:"body1",children:["\u0422\u043e\u0434\u0440\u0443\u0443\u043b\u0430\u0445 \u0437\u04af\u0439\u043b \u0431\u0430\u0439\u0432\u0430\u043b \u0434\u0430\u0440\u0430\u0430\u0445 \u0445\u0430\u044f\u0433\u0430\u0430\u0440 \u043b\u0430\u0432\u043b\u0430\u043d\u0430 \u0443\u0443? tseveensuren@khu.edu.mn,"," ",Object(h.jsx)("p",{children:"\u0425\u043e\u043b\u0431\u043e\u043e \u0431\u0430\u0440\u0438\u0445 \u0434\u0443\u0433\u0430\u0430\u0440: 99008092, 89770628"})]})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(D.a,{style:{maxWidth:700},container:!0,justify:"center",spacing:2,children:Object(h.jsx)(D.a,{style:{marginTop:20},container:!0,justify:"flex-end",item:!0,xs:12,children:Object(h.jsx)(W.a,{fullWidth:!0,size:"medium",onClick:function(){t(s)},variant:"contained",color:"secondary",children:"\u0416\u0430\u0433\u0441\u0430\u0430\u043b\u0442"})})})})}),Object(h.jsx)(D.a,{style:{marginTop:20,marginBottom:20},container:!0,justify:"center"})]})},se=a(61),oe=a(252);function le(e){return Object(h.jsx)(ie.a,Object(o.a)({elevation:6,variant:"filled"},e))}var je=Object(O.a)((function(e){return{root:{padding:e.spacing(3)}}})),de=function(){var e=Object(n.useContext)(x),t=(e.resState,e.addRes),a=e.loading,i=(Object(F.f)(),je(),c.a.useState({imagePath:"",lname:"",fname:"",regnum:"",gender:"",email:"",password:"12345689",phone:"",phone_order:"",bname:"",about:"",aimag:"",mergejil:"",tugsen_surguuli:"",zeregtsol:"",amjilt:""})),r=Object(l.a)(i,2),s=r[0],j=r[1],d=function(e){j(Object(o.a)(Object(o.a)({},s),{},Object(se.a)({},e.target.name,e.target.value.trim())))},u=c.a.useState(!1),m=Object(l.a)(u,2),b=(m[0],m[1]),g=function(e,t){"clickaway"!==t&&b(!1)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(oe.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:a,autoHideDuration:6e3,onClose:g,children:Object(h.jsxs)(le,{onClose:g,severity:"success",children:["\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0431\u04af\u0440\u0442\u0433\u044d\u0433\u0434\u043b\u044d\u044d"," ",Object(h.jsx)(p.a,{children:"Email \u0445\u0430\u044f\u0433\u0430\u0430 \u0448\u0430\u043b\u0433\u0430\u043d\u0430 \u0443\u0443!!!"})]})}),Object(h.jsx)(D.a,{style:{marginTop:20},container:!0,justify:"center",children:a?Object(h.jsxs)(D.a,{style:{textAlign:"center",color:"#013a91"},container:!0,justify:"center",item:!0,xs:4,children:[Object(h.jsx)(p.a,{children:"\u0411\u04ae\u0420\u0422\u0413\u042d\u041b \u0410\u041c\u0416\u0418\u041b\u0422\u0422\u0410\u0419 \u0411\u041e\u041b\u041b\u041e\u041e"}),Object(h.jsxs)(p.a,{variant:"body1",children:["\u0422\u043e\u0434\u0440\u0443\u0443\u043b\u0430\u0445 \u0437\u04af\u0439\u043b \u0431\u0430\u0439\u0432\u0430\u043b \u0434\u0430\u0440\u0430\u0430\u0445 \u0445\u0430\u044f\u0433\u0430\u0430\u0440 \u043b\u0430\u0432\u043b\u0430\u043d\u0430 \u0443\u0443? tseveensuren@khu.edu.mn,"," ",Object(h.jsx)("p",{children:"\u0425\u043e\u043b\u0431\u043e\u043e \u0431\u0430\u0440\u0438\u0445 \u0434\u0443\u0433\u0430\u0430\u0440: 99008092, 89770628"})]})]}):Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(D.a,{style:{maxWidth:700},container:!0,justify:"center",spacing:2,children:[Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"email",required:!0,fullWidth:!0,label:"\u0415-\u043c\u044d\u0439\u043b"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"lname",required:!0,fullWidth:!0,label:"\u042d\u0446\u044d\u0433/\u044d\u0445\u0438\u0439\u043d \u043d\u044d\u0440"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"fname",required:!0,fullWidth:!0,label:"\u041d\u044d\u0440"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsxs)(z.a,{variant:"outlined",onChange:d,name:"gender",label:"\u0425\u04af\u0439\u0441",fullWidth:!0,select:!0,SelectProps:{native:!0},children:[Object(h.jsx)("option",{"aria-label":"None",value:""}),"l",["\u042d\u0440\u044d\u0433\u0442\u044d\u0439","\u042d\u043c\u044d\u0433\u0442\u044d\u0439"].map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))]})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"phone",required:!0,fullWidth:!0,label:"\u0423\u0442\u0430\u0441"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,required:!0,name:"phone_order",fullWidth:!0,label:"\u042f\u0430\u0440\u0430\u043b\u0442\u0430\u0439 \u04af\u0435\u0434 \u0445\u043e\u043b\u0431\u043e\u043e \u0431\u0430\u0440\u0438\u0445 \u0434\u0443\u0433\u0430\u0430\u0440"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"bname",required:!0,fullWidth:!0,label:"\u0411\u0430\u0439\u0433\u0443\u0443\u043b\u043b\u0430\u0433\u044b\u043d \u043d\u044d\u0440"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"about",required:!0,fullWidth:!0,label:"\u0418\u043b\u0442\u0433\u044d\u043b\u0438\u0439\u043d \u043d\u044d\u0440"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"aimag",required:!0,fullWidth:!0,label:"\u0423\u043b\u0441, \u0425\u043e\u0442"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"mergejil",required:!0,fullWidth:!0,label:"\u041c\u044d\u0440\u0433\u044d\u0436\u0438\u043b"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"tugsen_surguuli",required:!0,fullWidth:!0,label:"\u0422\u04e9\u0433\u0441\u0441\u04e9\u043d \u0441\u0443\u0440\u0433\u0443\u0443\u043b\u044c"})}),Object(h.jsx)(D.a,{item:!0,xs:12,md:6,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"zeregtsol",required:!0,fullWidth:!0,label:"\u0411\u0430\u0433\u0448\u0438\u0439\u043d \u0437\u044d\u0440\u044d\u0433 \u0446\u043e\u043b"})}),Object(h.jsx)(D.a,{item:!0,xs:12,children:Object(h.jsx)(z.a,{variant:"outlined",onChange:d,name:"amjilt",required:!0,fullWidth:!0,label:"\u0413\u0430\u0440\u0433\u0430\u0441\u0430\u043d \u0430\u043c\u0436\u0438\u043b\u0442"})}),Object(h.jsx)(D.a,{style:{marginTop:20},container:!0,justify:"flex-end",item:!0,xs:12,children:Object(h.jsx)(W.a,{fullWidth:!0,size:"medium",onClick:function(){t(s)},variant:"contained",color:"secondary",children:"\u0411\u04af\u0440\u0442\u0433\u04af\u04af\u043b\u044d\u0445"})})]})})}),Object(h.jsx)(D.a,{style:{marginTop:20,marginBottom:20},container:!0,justify:"center"})]})},he=Object(O.a)((function(e){return{paper:{padding:"6px 16px"},secondaryTail:{backgroundColor:e.palette.secondary.main},paper1:{padding:e.spacing(1),textAlign:"center"}}}));function ue(e){var t=he();return Object(h.jsx)(h.Fragment,{children:"Mongolia"===e.data?Object(h.jsxs)(D.a,{style:{textAlign:"justify"},container:!0,justify:"flex-start",spacing:3,children:[Object(h.jsx)(D.a,{style:{alignItems:"center"},item:!0,xs:12}),Object(h.jsx)(D.a,{style:{color:"#013a91",textTransform:"uppercase"},item:!0,xs:12,children:Object(h.jsx)(p.a,{className:t.paper1,variant:"h5",component:"h2",gutterBottom:!0,children:"\u0425\u0443\u0440\u043b\u044b\u043d \u0443\u0434\u0438\u0440\u0434\u0430\u043c\u0436"})}),Object(h.jsxs)(D.a,{item:!0,xs:12,children:[Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"\u0417\u043e\u0440\u0438\u043b\u0433\u043e"}),Object(h.jsx)(p.a,{style:{marginLeft:40},children:"\u0418\u0445 \u0410\u043b\u0442\u0430\u0439\u043d \u0431\u04af\u0441 \u043d\u0443\u0442\u0433\u0438\u0439\u043d \u0430\u0440\u0434 \u0442\u04af\u043c\u043d\u0438\u0439 \u0445\u044d\u043b, \u0441\u043e\u0451\u043b, \u0431\u043e\u043b\u043e\u0432\u0441\u0440\u043e\u043b, \u043d\u0438\u0439\u0433\u043c\u0438\u0439\u043d \u0441\u0430\u043b\u0431\u0430\u0440\u044b\u043d \u0441\u0443\u0434\u0430\u043b\u0433\u0430\u0430\u0433 \u0448\u0438\u043d\u0436\u043b\u044d\u0445 \u0443\u0445\u0430\u0430\u043d\u044b \u044d\u0440\u0433\u044d\u043b\u0442\u044d\u0434 \u043e\u0440\u0443\u0443\u043b\u0436, \u0441\u0443\u0434\u043b\u0430\u0430\u0447 \u044d\u0440\u0434\u044d\u043c\u0442\u044d\u0434 \u0441\u0443\u0434\u0430\u043b\u0433\u0430\u0430\u043d\u044b \u0430\u0436\u043b\u044b\u043d \u04af\u0440 \u0434\u04af\u043d\u0433\u044d\u044d \u0445\u044d\u043b\u044d\u043b\u0446\u04af\u04af\u043b\u044d\u0445, \u0442\u044d\u0434\u043d\u0438\u0439 \u0446\u0430\u0430\u0448\u0434\u044b\u043d \u0441\u0443\u0434\u0430\u043b\u0433\u0430\u0430 \u0448\u0438\u043d\u0436\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0430\u0436\u043b\u044b\u043d \u0443\u044f\u043b\u0434\u0430\u0430 \u0445\u043e\u043b\u0431\u043e\u043e\u0433 \u0441\u0430\u0439\u0436\u0440\u0443\u0443\u043b\u0430\u0445, \u043e\u043b\u043e\u043d \u0443\u043b\u0441\u044b\u043d \u0442\u04e9\u0441\u04e9\u043b, \u0445\u04e9\u0442\u04e9\u043b\u0431\u04e9\u0440\u0442 \u043e\u0440\u043e\u043b\u0446\u043e\u0445, \u0445\u0430\u043c\u0442\u0440\u0430\u043d \u0430\u0436\u0438\u043b\u043b\u0430\u0445 \u0441\u0430\u043d\u0430\u043b \u0441\u043e\u043b\u0438\u043b\u0446\u043e\u0445 \u0442\u0430\u0430\u0442\u0430\u0439 \u043d\u04e9\u0445\u0446\u04e9\u043b\u0438\u0439\u0433 \u0431\u04af\u0440\u0434\u04af\u04af\u043b\u0436, \u0441\u0443\u0440\u0433\u0430\u043b\u0442, \u0441\u0443\u0434\u0430\u043b\u0433\u0430\u0430\u043d\u044b \u0447\u0438\u0433\u043b\u044d\u043b\u044d\u044d \u04e9\u0440\u0433\u04e9\u0436\u04af\u04af\u043b\u044d\u0445, \u044d\u0440\u0434\u044d\u043c \u0448\u0438\u043d\u0436\u0438\u043b\u0433\u044d\u044d, \u0441\u0443\u0434\u0430\u043b\u0433\u0430\u0430\u043d\u044b \u0430\u0436\u043b\u0430\u0430 \u0445\u04e9\u0433\u0436\u04af\u04af\u043b\u044d\u0445 \u04e9\u0440\u0433\u04e9\u043d \u0431\u043e\u043b\u043e\u043c\u0436\u0438\u0439\u0433 \u0431\u0438\u0439 \u0431\u043e\u043b\u0433\u043e\u0445\u043e\u0434 \u0447\u0438\u0433\u043b\u044d\u0433\u0434\u044d\u043d\u044d."})]}),Object(h.jsxs)(D.a,{item:!0,xs:12,children:[Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"\u0425\u044d\u043b\u044d\u043b\u0446\u044d\u0445 \u0430\u0441\u0443\u0443\u0434\u043b\u044b\u043d \u04af\u043d\u0434\u0441\u044d\u043d \u0447\u0438\u0433\u043b\u044d\u043b, \u0445\u0430\u043c\u0440\u0430\u0445 \u0445\u04af\u0440\u044d\u044d:"}),Object(h.jsxs)(p.a,{style:{marginLeft:40},children:[Object(h.jsx)("p",{children:"1. \u0410\u043b\u0442\u0430\u0439\u043d \u0431\u04af\u0441\u0438\u0439\u043d \u0445\u044d\u043b \u0431\u0430 \u0441\u043e\u0451\u043b\u044b\u043d \u0430\u0441\u0443\u0443\u0434\u0430\u043b (\u0430\u0437\u0438 \u0445\u044d\u043b \u0441\u0443\u0434\u043b\u0430\u043b; \u0435\u0432\u0440\u043e\u043f \u0445\u044d\u043b \u0441\u0443\u0434\u043b\u043b\u0430\u043b; \u0445\u044d\u043b \u0441\u043e\u0451\u043b\u044b\u043d \u0445\u0430\u0440\u0438\u043b\u0446\u0430\u0430; \u0441\u043e\u0451\u043b \u0445\u043e\u043e\u0440\u043e\u043d\u0434\u044b\u043d \u0445\u0430\u0440\u0438\u043b\u0446\u0430\u0430; \u0431\u04af\u0441 \u043d\u0443\u0442\u0430\u0433 \u0441\u0443\u0434\u043b\u0430\u043b; \u0431\u04af\u0441 \u043d\u0443\u0442\u0433\u0438\u0439\u043d \u0445\u044d\u043b, \u0441\u043e\u0451\u043b\u044b\u043d \u0445\u0430\u0440\u0438\u043b\u0446\u0430\u0430; \u0431\u04af\u0441\u0438\u0439\u043d \u0445\u0430\u043c\u0442\u044b\u043d \u0430\u0436\u0438\u043b\u043b\u0430\u0433\u0430\u0430);"}),Object(h.jsx)("p",{children:"2. \u0421\u043e\u0451\u043b \u0443\u0440\u043b\u0430\u0433, \u0443\u0440\u043b\u0430\u0433 \u0441\u0443\u0434\u043b\u0430\u043b, \u0441\u043e\u0451\u043b \u0441\u0443\u0434\u043b\u0430\u043b, \u0441\u043e\u0451\u043b\u044b\u043d \u0445\u04af\u043d \u0441\u0443\u0434\u043b\u0430\u043b, \u0441\u043e\u0451\u043b\u044b\u043d \u043e\u043d\u043e\u043b, \u0442\u04af\u04af\u0445\u0438\u0439\u043d \u0430\u0441\u0443\u0443\u0434\u0430\u043b;"}),Object(h.jsx)("p",{children:"3. \u0411\u04af\u0441 \u043d\u0443\u0442\u0433\u0438\u0439\u043d \u0431\u043e\u043b\u043e\u0432\u0441\u0440\u043e\u043b, \u043d\u0438\u0439\u0433\u044d\u043c, \u044d\u0434\u0438\u0439\u043d \u0437\u0430\u0441\u0433\u0438\u0439\u043d \u0430\u0441\u0443\u0443\u0434\u0430\u043b (\u0430\u0440\u0434\u044b\u043d \u0441\u0443\u0440\u0433\u0430\u043d \u0445\u04af\u043c\u04af\u04af\u0436\u04af\u04af\u043b\u044d\u0445 \u0443\u0445\u0430\u0430\u043d, \u0431\u043e\u043b\u043e\u0432\u0441\u0440\u043e\u043b\u044b\u043d \u0448\u0438\u043d\u044d\u0447\u043b\u044d\u043b, \u043c\u0435\u043d\u0435\u0436\u043c\u0435\u043d\u0442, \u0442\u043e\u0433\u0442\u0432\u043e\u0440\u0442\u043e\u0439 \u0445\u04e9\u0433\u0436\u043b\u0438\u0439\u043d \u0431\u043e\u043b\u043e\u0432\u0441\u0440\u043e\u043b\u044b\u043d \u04af\u0437\u044d\u043b \u0431\u0430\u0440\u0438\u043c\u0442\u043b\u0430\u043b, \u0431\u04af\u0441 \u043d\u0443\u0442\u0433\u0438\u0439\u043d \u044d\u0434\u0438\u0439\u043d \u0437\u0430\u0441\u0433\u0438\u0439\u043d \u0430\u0441\u0443\u0443\u0434\u0430\u043b);"})]})]}),Object(h.jsxs)(D.a,{item:!0,xs:12,children:[Object(h.jsx)(p.a,{className:t.paper1,variant:"h5",component:"h3",gutterBottom:!0,children:"\u0417\u043e\u0445\u0438\u043e\u043d \u0431\u0430\u0439\u0433\u0443\u0443\u043b\u0430\u043b\u0442"}),Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"\u0425\u0443\u0433\u0430\u0446\u0430\u0430:"}),Object(h.jsx)(p.a,{style:{marginLeft:40},children:"2022 \u043e\u043d\u044b 09 \u0441\u0430\u0440\u044b\u043d 30, 10 \u0441\u0430\u0440\u044b\u043d 1-\u043d\u0438\u0439 \u04e9\u0434\u0440\u04af\u04af\u0434"})]})," ",Object(h.jsxs)(D.a,{item:!0,xs:12,children:[Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"\u0425\u043e\u043b\u0431\u043e\u043e \u0431\u0430\u0440\u0438\u0445 \u0434\u0443\u0433\u0430\u0430\u0440:"}),Object(h.jsx)(p.a,{style:{marginLeft:40},children:"99967723, 99038342, 99434005"}),Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"\u0418\u043b\u0442\u0433\u044d\u043b \u0445\u04af\u043b\u044d\u044d\u043d \u0430\u0432\u0430\u0445 \u0445\u0430\u044f\u0433:"}),Object(h.jsx)(p.a,{style:{marginLeft:40},children:"mrs.altansuvd@gmail.com \u0445\u0430\u044f\u0433\u0430\u0430\u0440 \u0445\u04af\u043b\u044d\u044d\u043d \u0430\u0432\u043d\u0430."})]}),Object(h.jsxs)(D.a,{item:!0,xs:12,children:[Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"\u04e8\u0433\u04af\u04af\u043b\u043b\u0438\u0439\u043d \u043d\u044d\u0440, \u0442\u043e\u0432\u0447\u043b\u043e\u043b:"}),Object(h.jsx)(p.a,{style:{marginLeft:40},children:"2022 \u043e\u043d\u044b 09 \u0441\u0430\u0440\u044b\u043d 12-\u043d\u044b \u0434\u043e\u0442\u043e\u0440 \u0434\u044d\u044d\u0440\u0445 \u0438\u043c\u044d\u0439\u043b \u0445\u0430\u044f\u0433\u0430\u0430\u0440 \u0445\u04af\u043b\u044d\u044d\u043d \u0430\u0432\u043d\u0430."})]}),Object(h.jsx)(D.a,{item:!0,xs:12})]}):Object(h.jsxs)(D.a,{style:{textAlign:"justify"},container:!0,justify:"flex-start",spacing:3,children:[Object(h.jsx)(D.a,{style:{alignItems:"center"},item:!0,xs:12}),Object(h.jsx)(D.a,{style:{color:"#013a91",textTransform:"uppercase"},item:!0,xs:12,children:Object(h.jsx)(p.a,{className:t.paper1,variant:"h5",component:"h2",gutterBottom:!0,children:"\u201cLANGUAGE, CULTURE, INTERCULTURAL COMMUNICATION\u201d 8TH INTERNATIONAL SCIENTIFIC CONFERENCE"})}),Object(h.jsxs)(D.a,{item:!0,xs:12,children:[Object(h.jsxs)(p.a,{variant:"h6",component:"h1",children:["Mongolia"===e.data&&"\u0417\u043e\u0440\u0438\u043b\u0433\u043e","English"===e.data&&"Purpose"]}),Object(h.jsx)(p.a,{style:{marginLeft:40},children:"To launch the studies in the language, culture, education and social sectors of the peoples of the Great Altai Region into scientific circulation, to provide pleasant environment where researchers and scientists can discuss their findings, improve their research linkages, and exchange joint research proposals and participation of international projects and programs, as well as to provide ample opportunities for expanding their training and research areas, and further developing the researchs."})]}),Object(h.jsxs)(D.a,{item:!0,xs:12,children:[Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"Scope and guidelines:"}),Object(h.jsxs)(p.a,{style:{marginLeft:40},children:[Object(h.jsx)("p",{children:"1. Language and culture issues (linguistics, linguistic anthropology, language and cultural communication, intercultural communication);"}),Object(h.jsx)("p",{children:"2. Culture and art, art studies, culture studies, cultural anthropology theoretical and historical issues of culture;"}),Object(h.jsx)("p",{children:"3. Regional educational, social and economic issues (traditional pedagogy, education innovation and management, sustainable development education, regional economic issues);"})]})]}),Object(h.jsxs)(D.a,{item:!0,xs:12,children:[Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"Call for abstracts:"}),Object(h.jsx)(p.a,{style:{marginLeft:40},children:"The presentation title and abstract will be received until September 12th, 2022 to the following address mrs.altansuvd@gmail.com. Institutions and researchers interested in attending the conference are encouraged to submit the following information and articles to the organizing committee by September 12th, 2022 in Mongolian, Russian, English and Chinese languages. Both in-person and corresspondence participations are possible."}),Object(h.jsx)(p.a,{variant:"h6",component:"h1",children:"Contact:"}),Object(h.jsx)(p.a,{style:{marginLeft:40},children:"99967723, 99038342, 99434005"})]})," ",Object(h.jsx)(D.a,{item:!0,xs:12}),Object(h.jsx)(D.a,{item:!0,xs:12})]})})}var me=a(65),be=Object(O.a)((function(e){return{root:{maxWidth:"80%"},media:{width:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:me.a[500]}}}));function xe(e){Object(F.f)();var t=be(),a=c.a.useState(!1),n=Object(l.a)(a,2);n[0],n[1];return Object(h.jsxs)(D.a,{style:{marginTop:10},container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:2,children:[Object(h.jsxs)(D.a,{children:["Mongolia"===e.data&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(p.a,{children:"\u0425\u0443\u0440\u043b\u044b\u043d \u0445\u04e9\u0442\u04e9\u043b\u0431\u04e9\u0440 \u0442\u0443\u043d \u0443\u0434\u0430\u0445\u0433\u04af\u0439..."}),Object(h.jsx)("iframe",{src:"",width:"800",height:"1200",allow:"autoplay"})]}),"English"===e.data&&Object(h.jsx)("iframe",{src:"",width:"800",height:"1200",allow:"autoplay"}),"China"===e.data&&Object(h.jsx)("iframe",{src:"",width:"800",height:"1200",allow:"autoplay"}),"Russia"===e.data&&Object(h.jsx)("iframe",{src:"",width:"800",height:"1200",allow:"autoplay"})]}),Object(h.jsx)("div",{}),Object(h.jsx)(D.a,{style:{alignItems:"center"},item:!0,xs:12,children:Object(h.jsx)("img",{className:t.media,src:"http://khu.edu.mn:3000/images/khu_link01.pdf",alt:""})}),Object(h.jsx)(D.a,{style:{alignItems:"center"},item:!0,xs:12,children:Object(h.jsx)("img",{className:t.media,src:"http://clouduni.mn:5000/images/khu_link03.jpg",alt:""})})]})}var ge=a(52),pe=a.n(ge),Oe=Object(O.a)((function(e){return{root:{maxWidth:"80%"},media:{width:"100%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:me.a[500]}}}));function fe(e){Object(F.f)();var t=Oe(),a=c.a.useState(!1),n=Object(l.a)(a,2);n[0],n[1];return Object(h.jsxs)(D.a,{style:{marginTop:30},container:!0,direction:"row",justify:"center",alignItems:"flex-start",spacing:2,children:[Object(h.jsx)(D.a,{style:{alignItems:"center"},item:!0,xs:10,children:Object(h.jsxs)("h2",{style:{textAlign:"center"},children:["Mongolia"===e.data&&"\u201c\u0425\u042d\u041b, \u0421\u041e\u0401\u041b, \u0421\u041e\u0401\u041b \u0425\u041e\u041e\u0420\u041e\u041d\u0414\u042b\u041d \u0425\u0410\u0420\u0418\u041b\u0426\u0410\u0410\u201d \u043e\u043b\u043e\u043d \u0443\u043b\u0441\u044b\u043d \u044d\u0440\u0434\u044d\u043c \u0448\u0438\u043d\u0436\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 VIII \u0445\u0443\u0440\u0430\u043b","English"===e.data&&"\u201cLANGUAGE, CULTURE, INTERCULTURAL COMMUNICATION\u201d 8th international scientific conference","China"===e.data&&'\u7b2c\u5341\u4e94\u5c4a"\u8499\u53e4\u897f\u90e8\u53ca\u5176\u90bb\u8fd1\u5730\u533a\u81ea\u7136\u6761\u4ef6\u3001\u8d44\u6e90\u3001\u5386\u53f2\u3001\u8bed\u8a00\u4e0e\u6587\u5316"\u56fd\u9645\u5b66\u672f\u7814\u8ba8\u4f1a',"Russia"===e.data&&"\u201c\u041f\u0420\u0418\u0420\u041e\u0414\u041d\u042b\u0415 \u0423\u0421\u041b\u041e\u0412\u0418\u042f, \u0420\u0415\u0421\u0423\u0420\u0421\u042b, \u0418\u0421\u0422\u041e\u0420\u0418\u042f, \u041a\u0423\u041b\u042c\u0422\u0423\u0420\u0410 \u0418 \u042f\u0417\u042b\u041a \u041d\u0410\u0420\u041e\u0414\u041e\u0412 \u0417\u0410\u041f\u0410\u0414\u041d\u041e\u0419 \u041c\u041e\u041d\u0413\u041e\u041b\u0418\u0418 \u0418 \u0421\u041e\u041f\u0420\u0415\u0414\u0415\u041b\u042c\u041d\u042b\u0425 \u0420\u0415\u0413\u0418\u041e\u041d\u041e\u0412\u201d XV \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u043e\u0439 \u043d\u0430\u0443\u0447\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0438"]})}),Object(h.jsx)(D.a,{style:{alignItems:"right",marginBottom:20},item:!0,xs:15,children:Object(h.jsx)(D.a,{children:Object(h.jsxs)("h3",{children:["2022-09-30, 09.00a.m. UTC+7"," ",Object(h.jsx)(W.a,{target:"_blank",href:"https://teams.microsoft.com/l/meetup-join/19%3ameeting_OTk0ZDdmM2EtZWYyYS00NDA1LTlkZDUtYTYzNjQxNzA1ZWYx%40thread.v2/0?context=%7b%22Tid%22%3a%2221bc79ca-3a3f-4e1a-a8ba-a8355e6135e5%22%2c%22Oid%22%3a%2205a9cb6b-80e6-46b2-b00e-fce2f39d54cf%22%7d",size:"medium",variant:"contained",color:"primary",startIcon:Object(h.jsx)(pe.a,{}),children:"Join Meeting"})]})})}),"Mongolia"===e.data&&Object(h.jsx)(h.Fragment,{}),Object(h.jsxs)(D.a,{style:{alignItems:"center"},item:!0,xs:12,children:[Object(h.jsx)("br",{}),Object(h.jsx)("img",{className:t.media,style:{width:"50%"},src:"http://khu.edu.mn:3000/upload/programfiles/confregback.jpg",alt:""})]})]})}function ve(){return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"\u0417\u043e\u0445\u0438\u043e\u043d \u0431\u0430\u0439\u0433\u0443\u0443\u043b\u0430\u0433\u0447:"}),Object(h.jsx)(p.a,{variant:"body",gutterBottom:!0,children:Object(h.jsx)("p",{children:"\u041c\u0423\u0418\u0421-\u0438\u0439\u043d \u0425\u043e\u0432\u0434 \u0434\u0430\u0445\u044c \u0441\u0430\u043b\u0431\u0430\u0440 \u0441\u0443\u0440\u0433\u0443\u0443\u043b\u044c"})}),Object(h.jsxs)(p.a,{variant:"h6",gutterBottom:!0,children:[" ",(new Date).getFullYear(),"\u043e\u043d"]})]})}function ye(){return Object(h.jsxs)("div",{style:{textAlign:"center"},children:[Object(h.jsx)(p.a,{variant:"h6",gutterBottom:!0,children:"Organizer"}),Object(h.jsx)(p.a,{variant:"body",gutterBottom:!0,children:"Khovd branch of National University of Mongolia"}),Object(h.jsxs)(p.a,{variant:"h6",gutterBottom:!0,children:[" ",(new Date).getFullYear(),""]})]})}var Ce=Object(O.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh"},texts:{color:"white"},footer:{padding:e.spacing(3,2),marginTop:"auto",color:"#ecf0f1",backgroundColor:"#006cff"},appBar:{color:"#fff",backgroundColor:"#007eff ",borderBottom:"1px solid ".concat(e.palette.divider),marginBottom:e.spacing(0)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},menu:{width:300,textTransform:"uppercase"}}})),Ae=Object(C.a)()((function(e){var t=Object(n.useContext)(x),a=t.lang,i=t.setLang,r=e.width,s=Ce(),o=Object(F.f)(),j=c.a.useState(null),d=Object(l.a)(j,2),u=(d[0],d[1],c.a.useState(!1)),m=Object(l.a)(u,2),b=(m[0],m[1],Object(n.useState)(!1)),O=Object(l.a)(b,2),v=O[0],C=O[1],A=function(){C(!1)},_=Object(n.useState)([{Mname:"\u041d\u04af\u04af\u0440",Ename:"HOME",Cname:"\u4e3b\u9875",Rname:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",Link:"/home",icon:Object(h.jsx)(G.a,{color:"primary",fontSize:"small"})},{Mname:"\u0423\u0414\u0418\u0420\u0414\u0410\u041c\u0416",Ename:"GUIDANCE",Cname:"\u6307\u5357",Rname:"\u041c\u0415\u0422\u041e\u0414\u0418\u0427\u0415\u0421\u041a\u0418\u0415 \u0420\u0415\u041a\u041e\u041c\u0415\u041d\u0414\u0410\u0426\u0418\u0418",Link:"/guidance",icon:Object(h.jsx)(y.a,{color:"primary",fontSize:"small"})},{Mname:"\u0425\u04e9\u0442\u04e9\u043b\u0431\u04e9\u0440",Ename:"PROGRAM",Cname:"\u4f1a\u8bae\u8bae\u7a0b",Rname:"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430",Link:"/program",icon:Object(h.jsx)(q.a,{color:"primary",fontSize:"small"})},{Mname:"\u0425\u0443\u0440\u043b\u044b\u043d \u043b\u0438\u043d\u043a",Ename:"CONFERENCE LINK",Cname:"\u5173\u8054",Rname:"\u0421\u0441\u044b\u043b\u043a\u0430",Link:"/link",icon:Object(h.jsx)(q.a,{color:"primary",fontSize:"small"})}]),P=Object(l.a)(_,2),D=P[0];P[1];return Object(h.jsx)("div",{className:s.root,children:Object(h.jsxs)(g.a,{children:[Object(h.jsx)(k.a,{style:{},anchor:"right",open:v,onClose:A,children:Object(h.jsx)("div",{className:s.menu,role:"presentation",onClick:A,onKeyDown:A,children:Object(h.jsx)(I.a,{children:D.map((function(e,t){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(N.a,{button:!0,onClick:function(){o.push("".concat(e.Link)),A()},children:[Object(h.jsx)(E.a,{children:e.icon}),Object(h.jsx)(L.a,{primary:e.Mname})]}),Object(h.jsx)(S.a,{})]})}))})})}),Object(h.jsx)(R.a,{position:"sticky",color:"inherit",className:s.appBar,children:Object(h.jsxs)(w.a,{className:s.toolbar,children:[Object(h.jsx)(M.a,{onClick:function(){o.push("/")},"aria-label":"recipe",src:"http://khu.edu.mn:3000/upload/programfiles/num.png"}),Object(h.jsxs)(p.a,{variant:"h6",color:"inherit",noWrap:!0,className:s.toolbarTitle,style:{marginLeft:20,textTransform:"uppercase"},children:["Mongolia"===a&&("sm"===r||"md"===r||"lg"===r||"xl"===r)&&"\u042d\u0420\u0414\u042d\u041c \u0428\u0418\u041d\u0416\u0418\u041b\u0413\u042d\u042d\u041d\u0418\u0419 \u0425\u0423\u0420\u0410\u041b","China"===a&&("sm"===r||"md"===r||"lg"===r||"xl"===r)&&"\u7b2c\u5341\u4e94\u5c46\u570b\u969b\u6703\u8b70","Russia"===a&&("sm"===r||"md"===r||"lg"===r||"xl"===r)&&"XV \u041c\u0415\u0416\u0414\u0423\u041d\u0410\u0420\u041e\u0414\u041d\u041e\u0419 \u041d\u0410\u0423\u0427\u041d\u041e\u0419 \u041a\u041e\u041d\u0424\u0415\u0420\u0415\u041d\u0426\u0418\u0418","English"===a&&("sm"===r||"md"===r||"lg"===r||"xl"===r)&&"INTERNATIONAL CONFERENCE"]}),("xl"===r||"lg"===r||"md"===r)&&Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(B.a,{size:"small",variant:"text",children:[D.map((function(e,t){return Object(h.jsxs)(W.a,{onClick:function(){o.push("".concat(e.Link))},color:"inherit",children:["Mongolia"===a&&e.Mname,"China"===a&&e.Cname,"Russia"===a&&e.Rname,"English"===a&&e.Ename]})}))," ",Object(h.jsx)(z.a,{onChange:function(e){i(e.target.value)},style:{marginLeft:10,color:"#fff"},variant:"standard",name:"gender",fullWidth:!0,select:!0,SelectProps:{native:!0},children:["Mongolia","English"].map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))})]})}),("xs"===r||"sm"===r)&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(z.a,{onChange:function(e){i(e.target.value)},style:{marginLeft:10,color:"#fff",width:80},variant:"standard",name:"gender",fullWidth:!0,select:!0,SelectProps:{native:!0},children:["Mongolia","English"].map((function(e,t){return Object(h.jsx)("option",{value:e,children:e},t)}))}),Object(h.jsx)(U.a,{color:"inherit",onClick:function(){C(!0)},children:Object(h.jsx)(T.a,{color:"primary"})})]})]})}),Object(h.jsxs)(F.c,{children:[Object(h.jsx)(F.a,{path:"/home",children:Object(h.jsx)(ce,{data:a})}),Object(h.jsx)(F.a,{path:"/jagsaalt",exact:!0,component:re}),Object(h.jsx)(F.a,{path:"/",exact:!0,component:ce}),Object(h.jsxs)(f.a,{fixed:!0,children:[Object(h.jsx)(F.a,{path:"/burtgel",exact:!0,component:de}),Object(h.jsx)(F.a,{path:"/guidance",children:Object(h.jsx)(ue,{data:a})}),Object(h.jsx)(F.a,{path:"/program",children:Object(h.jsx)(xe,{data:a})}),Object(h.jsx)(F.a,{path:"/link",children:Object(h.jsx)(fe,{data:a})})]})]}),Object(h.jsx)("footer",{className:s.footer,children:Object(h.jsxs)(f.a,{maxWidth:"sm",children:["Mongolia"===a&&Object(h.jsx)(ve,{}),"English"===a&&Object(h.jsx)(ye,{}),"Russia"===a&&Object(h.jsx)(ye,{}),"China"===a&&Object(h.jsx)(ye,{})]})})]})})}));r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(b,{children:Object(h.jsx)(Ae,{})})})}),document.getElementById("root"))}},[[189,1,2]]]);