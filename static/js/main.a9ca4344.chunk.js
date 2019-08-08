(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports={controls:"Controls_controls__2ASSO"}},15:function(e,a,t){e.exports={history:"TransactionsHistory_history__6jiXr"}},16:function(e,a,t){e.exports={dashboard:"Dashboard_dashboard__1zCUf"}},21:function(e,a,t){e.exports=t(41)},27:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(3),c=t.n(r),o=(t(27),t(8)),s=t(11),i=t(12),u=t(19),d=t(13),h=t(20),p=t(7),m=t.n(p),b=t(2),w=t(14),E=t.n(w),f=function(e){var a=e.handleGetValue,t=e.handleDeposit,n=e.handleWithdrawal,r=e.inputValue;return l.a.createElement("section",{className:E.a.controls},l.a.createElement("input",{type:"number",name:"value",onChange:a,placeholder:"0",value:r}),l.a.createElement("button",{type:"button",onClick:t},"Deposit"),l.a.createElement("button",{type:"button",onClick:n},"Withdraw"))},_=t(6),y=t.n(_),v=function(e){var a=e.balance,t=e.sumDeposit,n=e.sumWithdrawal;return l.a.createElement("section",{className:y.a.balance},l.a.createElement("span",{className:y.a.balanceDeposit},(t/100).toFixed(2),"$"),l.a.createElement("span",{className:y.a.balanceWithdrawal},(n/100).toFixed(2),"$"),l.a.createElement("span",null,"Balance: ",(a/100).toFixed(2),"$"))},V=t(15),D=t.n(V),W=function(e){var a=e.transactions;return l.a.createElement("table",{className:D.a.history},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Transaction"),l.a.createElement("th",null,"Amount"),l.a.createElement("th",null,"Date"))),l.a.createElement("tbody",null,a.map(function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.type),l.a.createElement("td",null,(e.amount/100).toFixed(2),"$"),l.a.createElement("td",null,e.date))})))},x=t(16),g=t.n(x),j=(t(36),{incorrectValue:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",noMoney:"\u041d\u0430 \u0441\u0447\u0435\u0442\u0443 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0441\u0440\u0435\u0434\u0441\u0442\u0432 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438!",success:"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"}),N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(u.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={inputValue:"",transactions:[],balance:0,deposit:0,withdrawal:0},t.handleGetValue=function(e){t.setState({inputValue:e.target.value})},t.handleDeposit=function(){var e=t.state.inputValue,a=100*Number(e);if(a>0&&Math.ceil(a)===a){var n={id:m.a.generate(),type:"deposit",amount:a,date:(new Date).toLocaleString()};t.setState(function(e){return{transactions:[].concat(Object(o.a)(e.transactions),[n]),deposit:e.deposit+a,balance:e.balance+a}}),t.resetInput(),b.b.success(j.success)}else b.b.error(j.incorrectValue)},t.handleWithdrawal=function(){var e=t.state,a=e.inputValue,n=e.balance,l=100*Number(a);if(l<=0||Math.ceil(l)!==l)b.b.error(j.incorrectValue);else if(n>=l){var r={id:m.a.generate(),type:"withdrawal",amount:l,date:(new Date).toLocaleString()};t.setState(function(e){return{transactions:[].concat(Object(o.a)(e.transactions),[r]),withdrawal:e.withdrawal+l,balance:e.balance-l}}),t.resetInput(),b.b.success(j.success)}else b.b.error(j.noMoney)},t.resetInput=function(){t.setState({inputValue:""})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state,a=e.balance,t=e.withdrawal,n=e.deposit,r=e.transactions,c=e.inputValue;return l.a.createElement("div",{className:g.a.dashboard},l.a.createElement(f,{inputValue:c,handleGetValue:this.handleGetValue,handleDeposit:this.handleDeposit,handleWithdrawal:this.handleWithdrawal}),l.a.createElement(v,{balance:a,sumDeposit:n,sumWithdrawal:t}),l.a.createElement(W,{transactions:r}),l.a.createElement(b.a,{closeButton:!1}))}}]),a}(n.Component);c.a.render(l.a.createElement(N,null),document.getElementById("root"))},6:function(e,a,t){e.exports={balance:"Balance_balance__18_HM",balanceDeposit:"Balance_balanceDeposit__2lYv1",balanceWithdrawal:"Balance_balanceWithdrawal__1QEel"}}},[[21,1,2]]]);
//# sourceMappingURL=main.a9ca4344.chunk.js.map