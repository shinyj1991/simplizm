(this["webpackJsonpsimplizm-react"]=this["webpackJsonpsimplizm-react"]||[]).push([[0],{23:function(t,e,n){t.exports=n(45)},28:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(16),s=n.n(o),c=(n(28),n(7));var l=function(){return r.a.createElement("header",{id:"header"},r.a.createElement("h1",{className:"logo"},r.a.createElement(c.b,{to:"/"},"SIMPLIZM")))},i=n(1);var m=function(){return r.a.createElement("div",{id:"home"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/Asset"},"\ub300\ud55c\ubbfc\uad6d \uc21c\uc790\uc0b0 \uc21c\uc704 \uacc4\uc0b0\uae30"))))},u=n(18),g=n(19),h=n(22),p=n(21),d=n(20),E=n.n(d),f=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={myAsset:"",result:""},t.assetChange=function(e){t.setState({myAsset:e.target.value})},t.actionCompute=function(e){if("click"===e.type||"Enter"===e.key){var n=parseInt(t.state.myAsset);if(/^[0-9]*$/.test(n)){var a=0,r=[0,107e5,4331e4,895e5,14065e4,2005e5,27496e4,36914e4,517e6,81012e4,14e8,3e9,124e10,1984e10];r.forEach((function(t,e){n>t&&a++}));var o=new Intl.NumberFormat,s=r[a]-r[a-1],c=s-(n-r[a-1]),l=0,i=0;0===a?t.setState({result:"\ub2f9\uc2e0\uc758 \uc21c\uc790\uc0b0\uc740 \ub300\ud55c\ubbfc\uad6d \uc0c1\uc704 <strong>100%</strong> \uc785\ub2c8\ub2e4"}):a<10?(l=10*(10-a)+c/s*10,i=parseInt(51843195*l/100),t.setState({result:"\ub2f9\uc2e0\uc758 \uc21c\uc790\uc0b0\uc740 \ub300\ud55c\ubbfc\uad6d \uc0c1\uc704 <strong>".concat(l.toFixed(2),"%</strong> \uc785\ub2c8\ub2e4<br>\uc21c\uc704\ub294 <strong>").concat(o.format(i),"\uc704</strong> \uc774\uba70<br>\uc21c\uc704 \uc544\ub798\ub85c\ub294 <strong>").concat(o.format(51843195-i),"\uba85</strong>\uc774 \uc788\uc2b5\ub2c8\ub2e4.")})):(10===a&&(l=5+c/s*5,i=parseInt(51843195*l/100),t.setState({result:"\ub2f9\uc2e0\uc758 \uc21c\uc790\uc0b0\uc740 \ub300\ud55c\ubbfc\uad6d \uc0c1\uc704 <strong>".concat(l.toFixed(2),"%</strong> \uc785\ub2c8\ub2e4<br>\uc21c\uc704\ub294 <strong>").concat(o.format(i),"\uc704</strong> \uc774\uba70<br>\uc21c\uc704 \uc544\ub798\ub85c\ub294 <strong>").concat(o.format(51843195-i),"\uba85</strong>\uc774 \uc788\uc2b5\ub2c8\ub2e4.")})),11===a&&(l=1+c/s*4,i=parseInt(51843195*l/100),t.setState({result:"\ub2f9\uc2e0\uc758 \uc21c\uc790\uc0b0\uc740 \ub300\ud55c\ubbfc\uad6d \uc0c1\uc704 <strong>".concat(l.toFixed(2),"%</strong> \uc785\ub2c8\ub2e4<br>\uc21c\uc704\ub294 <strong>").concat(o.format(i),"\uc704</strong> \uc774\uba70<br>\uc21c\uc704 \uc544\ub798\ub85c\ub294 <strong>").concat(o.format(51843195-i),"\uba85</strong>\uc774 \uc788\uc2b5\ub2c8\ub2e4.")})),12===a&&t.setState({result:"\ub2f9\uc2e0\uc758 \uc21c\uc790\uc0b0\uc740 \ub300\ud55c\ubbfc\uad6d \uc0c1\uc704 <strong>1%</strong> \uc785\ub2c8\ub2e4."}),13===a&&t.setState({result:"\ub2f9\uc2e0\uc758 \uc21c\uc790\uc0b0\uc740 \ub300\ud55c\ubbfc\uad6d \uc0c1\uc704 <strong>0.000001%</strong> \uc785\ub2c8\ub2e4."}),14===a&&t.setState({result:"\ub2f9\uc2e0\uc758 \uc21c\uc790\uc0b0\uc740 \ub300\ud55c\ubbfc\uad6d \uc0c1\uc704 <strong>1\uc704</strong> \uc785\ub2c8\ub2e4."}))}else alert("0\uc774\uc0c1\uc758 \uc815\uc218\ub9cc \uc785\ub825\ud574\uc8fc\uc138\uc694.")}},t}return Object(g.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"asset"},r.a.createElement("h2",null,"\ub300\ud55c\ubbfc\uad6d \uc21c\uc790\uc0b0 \uc21c\uc704 \uad6c\ud558\uae30"),r.a.createElement("div",{className:"bothbox"},r.a.createElement("input",{type:"number",value:this.state.myAsset,onChange:this.assetChange,onKeyPress:this.actionCompute,placeholder:"\uc21c\uc790\uc0b0\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694"}),r.a.createElement("button",{type:"button",onClick:this.actionCompute},"\uacc4\uc0b0\ud558\uae30")),r.a.createElement("p",{className:"result"},E()(this.state.result)),r.a.createElement("p",{className:"notice"},"\u203b \uc704 \uacb0\uacfc\ub294 \ud1b5\uacc4\uccad \uc790\ub8cc\ub97c \uae30\ubc18\uc73c\ub85c \uadfc\uc0ac\uce58\ub97c \uad6c\ud55c\uc218\uce58\uc785\ub2c8\ub2e4."))}}]),n}(a.Component);var v=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{id:"wrap"},r.a.createElement(l,null),r.a.createElement("div",{id:"container"},r.a.createElement(i.a,{exact:!0,path:"/",component:m}),r.a.createElement(i.a,{path:"/Asset",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.8036c975.chunk.js.map