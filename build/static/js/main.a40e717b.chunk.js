(this.webpackJsonpcourse_information=this.webpackJsonpcourse_information||[]).push([[0],{24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(18),o=n.n(c),a=(n(24),n(3)),s=n(0);var u=function(e){return Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:e.addName,children:["name",Object(s.jsx)("input",{value:e.newName,onChange:function(t){return e.setNewName(t.target.value)}}),"number:",Object(s.jsx)("input",{value:e.newNumber,onChange:function(t){return e.setNewNumber(t.target.value)}}),Object(s.jsx)("input",{type:"submit",value:"add"})]})})},i=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"filter shown with:"}),Object(s.jsx)("input",{value:e.searchName,onChange:e.handleSearch})]})},d=function(e){var t=e.persons,n=e.deletePerson;return Object(s.jsx)("ul",{children:t.map((function(e){return Object(s.jsxs)("li",{children:[e.name," ",e.number,Object(s.jsx)("button",{"data-id":e.id,onClick:n,children:"Delete"})]},e.name)}))})},l=function(e){var t=e.notification;if(!t)return null;var n=t.message,r=t.type,c={fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return c.color="error"===r?"red":"green",Object(s.jsx)("div",{style:c,children:n})},f=n(19),j=n(8),b=n.n(j),h=n(4),m=n.n(h),p="/api/persons",O=function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete("".concat(p,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={getAll:function(){return m.a.get(p).then((function(e){return e.data}))},create:function(e){return m.a.post(p,e).then((function(e){return e.data}))},update:function(e,t){return m.a.put("".concat(p,"/").concat(e),t).then((function(e){return e.data}))},deletePerson:O},w=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],o=Object(r.useState)(""),f=Object(a.a)(o,2),j=f[0],b=f[1],h=Object(r.useState)(""),m=Object(a.a)(h,2),p=m[0],O=m[1],w=Object(r.useState)(""),x=Object(a.a)(w,2),g=x[0],N=x[1],y=Object(r.useState)(null),S=Object(a.a)(y,2),C=S[0],k=S[1],P=g.length>=1?function(){var e=g.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}():n;Object(r.useEffect)((function(){v.getAll().then((function(e){c(e)}))}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(l,{notification:C}),Object(s.jsx)(i,{searchName:g,handleSearch:function(e){N(e.target.value)}}),Object(s.jsx)("h3",{children:"Add a new Contact"}),Object(s.jsx)(u,{addName:function(e){e.preventDefault();var t={name:j,number:p};console.log("new person",t);var r=n.find((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));(console.log("person found",r),r)?window.confirm("Person already in phonebook, replace number with a new one?")&&v.update(r.id,t).then((function(e){c(n.map((function(t){return t.id===e.id?e:t}))),k({type:"success",message:"Updated ".concat(e.name)})})).catch((function(e){console.error(e.response)})):v.create(t).then((function(e){c(n.concat(e)),k({message:"Updated ".concat(e.name),type:"success"})})).catch((function(e){var t=e.response;console.error("".concat(t.status," ").concat(t.statusText,": ").concat(t.data.error)),k({message:t.data.error,type:"error"})}));setTimeout((function(){k(null)}),3e3),b(""),O("")},newName:j,setNewName:b,newNumber:p,setNewNumber:O}),Object(s.jsx)("h2",{children:"Numbers"}),Object(s.jsx)(d,{persons:P,deletePerson:function(e){e.preventDefault();var t=e.target.dataset.id;window.confirm("Do you want to delete this contact?")&&v.deletePerson(t).then((function(e){if("OK"===!e.statusText)throw new Error;c(n.filter((function(e){return e.id!==+t}))),k({message:"Deleted contact",type:"success"}),setTimeout((function(){k(null)}),3e3)})).catch((function(e){console.error(e.response),k({message:"Information for this contact has already been removed from the server",type:"error"}),setTimeout((function(){k(null)}),3e3)}))}})]})};o.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.a40e717b.chunk.js.map