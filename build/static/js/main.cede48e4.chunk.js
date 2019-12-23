(this["webpackJsonpthe-phonebook"]=this["webpackJsonpthe-phonebook"]||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),c=t.n(o),l=(t(19),t(2)),u=function(e){var n=e.message,t=e.className;return null===n?null:r.a.createElement("div",{className:t},n)},i=function(e){var n=e.filterTerm,t=e.handleFilterChange;return r.a.createElement("div",null,"Filter shown with ",r.a.createElement("input",{value:n,type:"text",onChange:t}))},m=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,o=e.newNumber,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"*Name:"),r.a.createElement("td",null,r.a.createElement("input",{value:t,onChange:a}))),r.a.createElement("tr",null,r.a.createElement("td",null,"*Number:"),r.a.createElement("td",null,r.a.createElement("input",{value:o,onChange:c}))))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add to Phonebook")))},f=function(e){var n=e.text,t=e.onClick;return r.a.createElement("button",{onClick:t},n)},s=function(e){var n=e.name,t=e.number,a=e.handleDeleteClick;return r.a.createElement("div",null,n," - ",t," ",r.a.createElement(f,{onClick:a,text:"Delete"}))},d=function(e){var n=e.persons,t=e.filterTerm,a=e.handleDeleteClick;return r.a.createElement(r.a.Fragment,null,t.length>0?n.filter((function(e){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1})).map((function(e){return r.a.createElement(s,{key:e.id,name:e.name,number:e.number,handleDeleteClick:function(){return a(e)}})})):n.map((function(e){return r.a.createElement(s,{key:e.id,name:e.name,number:e.number,handleDeleteClick:function(){return a(e)}})})))},h=t(3),b=t.n(h),E="/api/persons",p=function(){return b.a.get(E).then((function(e){return e}))},v=function(e){return b.a.post(E,e).then((function(e){return e.data}))},g=function(e,n){return b.a.put("".concat(E,"/").concat(e),n).then((function(e){return e.data}))},k=function(e){return b.a.delete("".concat(E,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(""),f=Object(l.a)(c,2),s=f[0],h=f[1],b=Object(a.useState)(""),E=Object(l.a)(b,2),w=E[0],C=E[1],O=Object(a.useState)(""),j=Object(l.a)(O,2),N=j[0],y=j[1],D=Object(a.useState)(null),T=Object(l.a)(D,2),S=T[0],x=T[1],A=Object(a.useState)("success"),P=Object(l.a)(A,2),F=P[0],I=P[1];Object(a.useEffect)((function(){console.log("effect"),p().then((function(e){o(e.data)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(u,{message:S,className:F}),r.a.createElement(i,{filterTerm:N,handleFilterChange:function(e){y(e.target.value)}}),r.a.createElement("h3",null,"Add New"),r.a.createElement(m,{addPerson:function(e){if(e.preventDefault(),""!==s&&""!==w){var n=!1;if(t.forEach((function(e){e.name===s&&(n=!0)})),n)if(window.confirm("".concat(s," is already added to the Phonebook. Do you want to replace the number with a new one?"))){var a=t.find((function(e){return e.name===s}));a.number=w,g(a.id,a).then((function(e){console.log(e),o(t.map((function(e){return e.id===a.id?Object.assign(e,a):e}))),h(""),C("")})).catch((function(e){I("error"),x("Information of ".concat(a.name," has already been removed.")),setTimeout((function(){x(null)}),3e3),o(t.map((function(e){return e.id===a.id?Object.assign(e,a):e}))),h(""),C("")}))}else h(""),C("");else{var r={name:s,number:w,id:t.length+1};v(r).then((function(e){o(t.concat(e)),h(""),C(""),I("success"),x("Added ".concat(e.name," to phonebook.")),setTimeout((function(){x(null)}),3e3)}))}}else alert("All fields are required for new entries.")},newName:s,handleNameChange:function(e){h(e.target.value)},newNumber:w,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(d,{persons:t,filterTerm:N,handleDeleteClick:function(e){window.confirm("Are you sure you want to delete ".concat(e.name," from the phonebook?"))&&k(e.id).then((function(n){console.log(n),o(t.filter((function(n){return n.id!==e.id}))),I("success"),x("".concat(e.name," has been removed from the phonebook.")),setTimeout((function(){x(null)}),3e3)})).catch((function(n){I("error"),x("Information of ".concat(e.name," has already been removed.")),setTimeout((function(){x(null)}),3e3)}))}}))};c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cede48e4.chunk.js.map