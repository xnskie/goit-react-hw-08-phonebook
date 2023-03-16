"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[204],{6204:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,i,a,o,s,d,c,l=r(9434),p=r(6907),u=r(2791),x=r(7038),m=r(168),g=r(225),b=g.Z.div(t||(t=(0,m.Z)(["\n  margin: 0 auto;\n  margin-top: 30px;\n  padding: 20px 20px;\n  width: 500px;\n  text-align: center;\n  justify-content: center;\n  border-radius: 10px;\n  border: 3px solid #333340;\n"]))),h=(g.Z.h1(i||(i=(0,m.Z)(["\n  display: block;\n  margin: 0 0 20px;\n  color: #333340;\n  font-size: 32px;\n  font-style: italic;\n"]))),g.Z.h2(a||(a=(0,m.Z)(["\n  display: block;\n  padding-top: 30px;\n  margin: 0 0 20px;\n  color: #333340;\n  font-size: 24px;\n"]))),g.Z.p(o||(o=(0,m.Z)(["\n  display: block;\n  margin: 0 0 20px;\n  color: #333340;\n  font-size: 18px;\n"]))),r(2007)),f=r.n(h),j=g.Z.li(s||(s=(0,m.Z)(["\ndisplay: flex;\ngap: 40px;\nalign-items: center;\n"]))),Z=g.Z.button(d||(d=(0,m.Z)(["\n  padding: 5px 20px;\n  color: #333340;\n  background-color: transparent;\n  border: 1px solid #333340;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 250ms;\n  &&:hover{\n    background-color: gray;\n    color: white;\n  }\n"]))),v=r(3329),y=function(n){var e=n.name,r=n.number,t=n.id,i=n.onDelete,a=n.idx;return(0,v.jsxs)(j,{children:[(0,v.jsx)("div",{children:a+1}),e,": ",r,(0,v.jsx)(Z,{onClick:function(){return i(t)},children:"delete"})]},t)},k=g.Z.ul(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  list-style: none;\n"]))),w=function(n){return n.contacts.items},C=function(n){return n.filter};function z(){var n=(0,l.v9)(C),e=(0,l.v9)(w),r=(0,l.I0)(),t=e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})),i=function(n){r((0,x.GK)(n))};return(0,v.jsx)(k,{children:t.map((function(n,e){var r=n.id,t=n.name,a=n.number;return(0,v.jsx)(y,{onDelete:i,name:t,number:a,id:r,idx:e},r)}))})}var q=z;z.propeTypes={contacts:f().arrayOf(f().shape({id:f().string.isRequired,name:f().string.isRequired,number:f().string.isRequired})),onDelete:f().func};var A,N,L,B,I=r(9439),R=r(5705),_=(g.Z.div(A||(A=(0,m.Z)(["\n  margin: 0 auto;\n  margin-top: 30px;\n  padding: 20px 20px;\n  width: 500px;\n  text-align: center;\n  justify-content: center;\n  border-radius: 10px;\n  border: 3px solid #333340;\n"]))),g.Z.label(N||(N=(0,m.Z)(["\n  margin: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])))),D=(0,g.Z)(R.gN)(L||(L=(0,m.Z)(["\n  margin: 0;\n  outline: none;\n  width: 200px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border: 1px solid #333340;\n  border-radius: 5px;\n"]))),S=g.Z.button(B||(B=(0,m.Z)(["\n  margin-top: 10px;\n  width: 150px;\n  height: 40px;\n  color: #fff;\n  font-size: 15px;\n  font-style: italic;\n  font-weight: bold;\n  border: 1px solid #333340;\n  border-radius: 10px;\n  background: rgb(63,160,251);\n  background: radial-gradient(circle, rgba(63,160,251,1) 0%, rgba(0,0,0,1) 95%);\n  cursor: pointer;\n  box-shadow: 4px 4px 10px 0px rgba(0,0,0,0.65);\n"])));var T,J=function(){var n=(0,l.I0)(),e=(0,u.useState)(""),r=(0,I.Z)(e,1)[0],t=(0,u.useState)(""),i=(0,I.Z)(t,1)[0];return(0,v.jsx)(R.J9,{initialValues:{name:r,number:i},onSubmit:function(e){n((0,x.uK)(e))},children:(0,v.jsxs)(R.l0,{children:[(0,v.jsxs)(_,{children:["Name",(0,v.jsx)(D,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,v.jsx)(R.Bc,{name:"name",component:"div"})]}),(0,v.jsxs)(_,{children:["Number",(0,v.jsx)(D,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,v.jsx)(R.Bc,{name:"number",component:"div"}),(0,v.jsx)(S,{type:"submit",children:"Add contact"})]})})},K=g.Z.input(T||(T=(0,m.Z)(["\n  margin: 0;\n  outline: none;\n  width: 200px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  border: 1px solid #333340;\n  border-radius: 5px;\n"]))),P=r(7127);function E(){var n=(0,l.I0)(),e=(0,l.v9)(C);return(0,v.jsx)("label",{children:(0,v.jsx)(K,{type:"text",value:e,onChange:function(e){return n((0,P.x)(e.currentTarget.value.toLowerCase()))}})})}var F=E;E.propeTypes={value:f().string,onChange:f().func};var G={};function M(){var n=(0,l.v9)((function(n){return n.contacts.isLoading})),e=(0,l.v9)((function(n){return n.contacts.error})),r=(0,l.I0)();return(0,u.useEffect)((function(){r((0,x.CL)())}),[r]),(0,v.jsx)(p.B6,{children:(0,v.jsxs)(b,{children:[(0,v.jsx)(p.ql,{children:(0,v.jsx)("title",{children:"Your tasks"})}),(0,v.jsx)("h1",{className:G.title,children:"Phonebook"}),(0,v.jsx)(J,{}),(0,v.jsx)("h2",{className:G.title,children:"Contacts"}),(0,v.jsx)(F,{}),n&&!e&&(0,v.jsx)("b",{children:"Request in progress..."}),(0,v.jsx)(q,{})]})})}}}]);
//# sourceMappingURL=204.f6a0cc2c.chunk.js.map