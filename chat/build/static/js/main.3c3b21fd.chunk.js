(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a(205)},116:function(e,t,a){},119:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},120:function(e,t,a){},121:function(e,t,a){},165:function(e,t){},174:function(e,t,a){},177:function(e,t,a){},187:function(e,t,a){},198:function(e,t){},200:function(e,t){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(24),r=a.n(s),c=(a(116),a(117),a(118),a(7)),i=a(8),l=a(10),u=a(9),m=a(11),d=(a(119),a(120),a(208)),p=a(209),f=a(98),h=a(211),g=a(215),v=(a(121),a(18)),b=a(59),E=a.n(b),O=function(e,t){return new Promise(function(a,n){E.a.post("http://18.223.186.79:3030"+e,t).then(function(e){200==e.status?a(e.data):n({status:e.status,data:e.data})}).catch(function(e){n({status:e.status,data:e.data})})})},j=function(){return e="/api/user/userList",new Promise(function(t,a){E.a.get("http://18.223.186.79:3030"+e).then(function(e){t(e.data)}).catch(function(e){a({status:e.status,data:e.data})})});var e},k=function(e,t){return O("/api/user/login",{userName:e,password:t})},y=function(e,t,a,n,o){return O("/api/user/createUser",{userName:e,phoneNo:t,email:a,gender:n,password:o})},I=a(97),x=a.n(I),w=function(){function e(t){Object(c.a)(this,e),this.userId=t,this.socket=x.a.connect("http://18.223.186.79:3030")}return Object(i.a)(e,null,[{key:"socket",set:function(t){var a=new e(t);e.instance=a,a.socket.on("userIdRequest",function(e){a.socket.emit("register",t)})},get:function(){return e.instance.socket}}]),e}(),C=a(62),N=a(34),U=a(51),M=function(e,t){return O("/api/user/getMessages",{userId:e,selected_user_id:t})},S=o.a.createContext({}),_=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).getUserList=function(){j().then(function(t){console.log(t),e.setState({userList:t.data})})},e.getAllMessage=function(){M(e.state.user.id,e.state.selectedUser._id).then(function(t){e.setState({userMessages:Object(U.a)({},e.state.userMessages,Object(N.a)({},e.state.selectedUser._id,t.result))})})},e.selectUserToChat=function(t){e.setState({selectedUser:t},e.getAllMessage)},e.storeUser=function(t){var a=t.userName,n=t.phoneNo,o=t.gender,s=t._id;sessionStorage.setItem("user_id",t._id),w.socket=s,w.socket.on("message",function(t){console.log(t),e.setState({userMessages:Object(U.a)({},e.state.userMessages,Object(N.a)({},t.fromId,e.state.userMessages[t.fromId]?[].concat(Object(C.a)(e.state.userMessages[t.fromId]),[t]):[t]))})}),e.setState({user:{userName:a,phoneNo:n,gender:o,id:s},auth:!0},e.getUserList)},e.sendCallBack=function(t,a){e.setState({userMessages:Object(U.a)({},e.state.userMessages,Object(N.a)({},t.toId,e.state.userMessages[t.toId]?[].concat(Object(C.a)(e.state.userMessages[t.toId]),[t]):[t]))},a)},e.state={auth:!1,user:{},userList:[],selectedUser:null,storeUser:e.storeUser,selectUserToChat:e.selectUserToChat,sendCallBack:e.sendCallBack,userMessages:{}},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(S.Provider,{value:this.state},this.props.children)}}]),t}(o.a.Component),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).login=function(e){e.preventDefault(),e.stopPropagation();var t=a.userName.value,n=a.password.value;k(t,n).then(function(e){console.log(e),a.context.storeUser(e.data)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){j().then(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return console.log(this.context),o.a.createElement("div",{className:"login-form"},o.a.createElement(d.a,{fluid:!0},o.a.createElement(p.a,null,o.a.createElement(f.a,{sm:12,md:4,lg:4,xl:4,xs:12,className:"login-container card"},o.a.createElement(d.a,null,o.a.createElement("form",{className:"form-container",onSubmit:this.login},o.a.createElement(h.a.Group,{as:p.a},o.a.createElement(h.a.Label,{column:!0,sm:4},"User Name"),o.a.createElement(f.a,{sm:8},o.a.createElement(h.a.Control,{ref:function(t){return e.userName=t},column:!0,sm:10,id:"username",type:"text",placeholder:"Please type User name"}))),o.a.createElement(h.a.Group,{as:p.a},o.a.createElement(h.a.Label,{column:!0,sm:4},"Password"),o.a.createElement(f.a,{sm:8},o.a.createElement(h.a.Control,{ref:function(t){return e.password=t},column:!0,sm:10,id:"password",type:"password",placeholder:"Please type Password"}))),o.a.createElement(h.a.Group,null,o.a.createElement(g.a,{onClick:this.login,type:"submit",className:"login-btn"},"login"),o.a.createElement(v.b,{className:"pl-10 link",to:"/signup"},"sign up"))),"  ")),o.a.createElement(f.a,{sm:12,md:6,lg:6,xl:6,xs:12,className:"offset-lg-6 offset-xl-6 offset-md-6 offset-sm-0 aside-container"},o.a.createElement("h1",null,"TINDER 2.0 APPLICATION"),o.a.createElement("p",{className:"content"})))))}}]),t}(o.a.Component);P.contextType=S;var L=P,T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).createUser=function(){y(a.userName.value,a.phoneNumber.value,a.email.value,"MALE",a.password.value).then(function(e){a.context.storeUser(e.data)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"login-form"},o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(f.a,{sm:5,className:"login-container card"},o.a.createElement(d.a,null,o.a.createElement(h.a,null,o.a.createElement(h.a.Group,{as:p.a},o.a.createElement(h.a.Label,{column:!0,sm:4},"User Name"),o.a.createElement(f.a,{sm:8},o.a.createElement(h.a.Control,{ref:function(t){return e.userName=t},column:!0,sm:10,type:"text",placeholder:"Please type User name"}))),o.a.createElement(h.a.Group,{as:p.a},o.a.createElement(h.a.Label,{column:!0,sm:4},"phone"),o.a.createElement(f.a,{sm:8},o.a.createElement(h.a.Control,{ref:function(t){return e.phoneNumber=t},column:!0,sm:10,type:"text",placeholder:"Please type phone"}))),o.a.createElement(h.a.Group,{as:p.a},o.a.createElement(h.a.Label,{column:!0,sm:4},"email"),o.a.createElement(f.a,{sm:8},o.a.createElement(h.a.Control,{ref:function(t){return e.email=t},column:!0,sm:10,type:"email",placeholder:"Please type email"}))),o.a.createElement(h.a.Group,{as:p.a},o.a.createElement(h.a.Label,{column:!0,sm:4},"Password"),o.a.createElement(f.a,{sm:8},o.a.createElement(h.a.Control,{ref:function(t){return e.password=t},column:!0,sm:10,type:"text",placeholder:"Please type Password"}))),o.a.createElement(h.a.Group,null,o.a.createElement(g.a,{onClick:this.createUser},"SignUp"),o.a.createElement(v.b,{className:"pl-10",to:"/login"},"goto login"))),"  ")))))}}]),t}(o.a.Component);T.contextType=S;var A=T,D=a(26),G=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(D.d,null,o.a.createElement(D.a,{path:"/",exact:!0,to:"/login"}),o.a.createElement(D.b,{path:"/login",component:L}),o.a.createElement(D.b,{path:"/signup",component:A}))}}]),t}(o.a.Component),R=a(214),B=a(110),F=(a(174),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.context),o.a.createElement("div",{className:"chat_list"},o.a.createElement(R.a,null,this.context.userList.map(function(t){return e.context.user.id!=t._id&&o.a.createElement(B.a,{className:"userlist_group "+(t==e.context.selectedUser?" active":""),onClick:function(){return e.context.selectUserToChat(t)}},o.a.createElement("div",{className:"user-icon"},t.userName[0]),o.a.createElement("div",{className:"user-name"},t.userName))})))}}]),t}(o.a.Component));F.contextType=S;var V=a(213),K=a(210),W=a(99),H=(a(177),a(109)),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).sendMessage=function(){var e=a.messageInput.value;a.messageInput.value="",e&&w.socket.emit("message_user",{message:e,toId:a.context.selectedUser._id},function(e){console.log(a.context),a.context.sendCallBack(e,function(){a.sendMessageRef.scrollTop=a.sendMessageRef.scrollHeight})})},a.onKeyEnter=function(e){13==e.keyCode&&e.preventDefault()},a.videoCall=function(){a.props.videoCall(a.context.selectedUser._id,!0)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.context.selectedUser),o.a.createElement(d.a,{fluid:!0,className:"p-0"},o.a.createElement("div",{className:"message_container",ref:function(t){return e.sendMessageRef=t}},this.context.selectedUser&&this.context.userMessages[this.context.selectedUser._id]&&this.context.userMessages[this.context.selectedUser._id].map(function(t,a){return o.a.createElement(V.a,{key:a,className:"message-card "+(t.fromId==e.context.selectedUser._id?" left":" float-right")},t.fromId==e.context.selectedUser._id&&o.a.createElement("div",{className:"user-icon-content "},e.context.selectedUser.userName[0]," "),t.message)})),this.context.selectedUser&&o.a.createElement(K.a,{className:"mb-1"},o.a.createElement(W.a,{ref:function(t){return e.messageInput=t},onKeyPress:this.onKeyEnter,className:"message_input",placeholder:"start conversion","aria-label":"Recipient's username","aria-describedby":"basic-addon2"}),o.a.createElement(K.a.Append,null,o.a.createElement(g.a,{onClick:this.sendMessage,variant:"outline-secondary"},"Send"))),this.context.selectedUser&&o.a.createElement("div",{className:"chat-action-icon-container"},o.a.createElement(H.a,{onClick:this.videoCall,icon:"video"})))}}]),t}(o.a.Component);J.contextType=S;var q=a(212),z=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(q.a,{variant:"dark"},o.a.createElement(q.a.Brand,{href:"#home"},o.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," McHat"))}}]),t}(o.a.Component),$=(a(187),a(108)),Q=a.n($),X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this))).receiveSocketIdFromInitiator=function(e){console.log("receiver"),a.peer.signal(e)},a.sendData=function(){},a.onCancel=function(){var e=window.MediaStream;"undefined"===typeof e&&"undefined"!==typeof window.webkitMediaStream&&(e=window.webkitMediaStream),a.peer.removeAllListeners(),a.peer.destroy(),a.peer=null,console.log(" this.stream.stop()"),a.props.onCancel()},a.state={connecting:!0},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.initiator);var t=function(t){e.peer=new Q.a({initiator:e.props.initiator,trickle:!1,stream:t}),e.peer.on("signal",function(t){console.log("myid",t),e.props.initiator?(console.log("sockete emitted"),w.socket.emit("sendPeerId",e.props.toID,t)):w.socket.emit("sendIdToIntiator",e.props.initiatorSocketId,t)}),e.props.initiator||(console.log(e.props.initiatorId),e.peer.signal(e.props.initiatorId)),e.peer.on("error",function(e){return console.log("error",e)}),e.peer.on("connect",function(){e.peer.send("hey peer2, how is it going?")}),e.peer.on("data",function(t){console.log("got a message from "+(e.props.initiator?"initi":"none")+" + data")}),e.peer.on("stream",function(t){e.videoRef.srcObject=t,e.videoRef.play()}),e.peer.on("close",function(){console.log("close connection"),e.onCancel()}),w.socket.on("receiveSocketIdFromInitiator",e.receiveSocketIdFromInitiator)};navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getUserMedia({video:!0,audio:!0},t,function(){return t()})}},{key:"componentWillUnmount",value:function(){w.socket.removeListener("receiveSocketIdFromInitiator",this.receiveSocketIdFromInitiator)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"video-container"},1==this.state.connecting&&"connecting",o.a.createElement("video",{ref:function(t){return e.videoRef=t}}),o.a.createElement("button",{onClick:this.sendData}," send"),o.a.createElement("button",{onClick:this.onCancel},"cancel"))}}]),t}(o.a.Component),Y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={showVideo:!1,initiator:!1},a.videoCall=function(e,t){a.setState({showVideo:!0,toID:e,initiator:t})},a.closeCall=function(){a.setState({showVideo:!1,initiator:!1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.socket.on("receiveInitiatorId",function(t,a){console.log("reivedsss"),e.setState({showVideo:!0,initiatorId:t,initiatorSocketId:a})})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(z,null),o.a.createElement(d.a,{fluid:!0,className:"p-0"},o.a.createElement(p.a,{className:"no-gutters"},o.a.createElement(f.a,{sm:6,xs:6,md:3,lg:3,xl:3},o.a.createElement(F,null)),o.a.createElement(f.a,{style:{background:"rgba(252, 252, 255, 0.92)"},sm:6,xs:6,md:9,lg:9,xl:9},o.a.createElement(J,{videoCall:this.videoCall}))),this.state.showVideo&&o.a.createElement(X,{onCancel:this.closeCall,initiatorSocketId:this.state.initiatorSocketId,toID:this.state.toID,initiatorId:this.state.initiatorId,initiator:this.state.initiator})))}}]),t}(o.a.Component);Y.contextType=S;var Z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={loading:!0},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=sessionStorage.getItem("user_id");console.log(a),a?(e=a,O("/api/user/getUserById",{id:e})).then(function(e){t.setState({loading:!1},function(){t.context.storeUser(e.data)})}):this.setState({loading:!1})}},{key:"render",value:function(){return console.log(this.context),this.state.loading?o.a.createElement("div",{className:"App"},"...loading"):o.a.createElement("div",{className:"App"},this.context.auth?o.a.createElement(Y,null):o.a.createElement(G,null))}}]),t}(o.a.Component);Z.contextType=S;var ee=Object(D.f)(Z),te=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(_,null,this.props.children)}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v.a,null,o.a.createElement(te,null,o.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[111,1,2]]]);
//# sourceMappingURL=main.3c3b21fd.chunk.js.map