(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){t.exports=n(29)},23:function(t,e,n){},26:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(3),r=n.n(a),i=n(17),o=n.n(i),c=(n(23),n(10)),s=n(11),u=n(13),h=n(12),l=n(14);function d(){for(var t,e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=[],i=0;i<n;i++)r.push({id:"haha-".concat(i),value:(t=0,e=a,Math.floor(Math.random()*(e-t))+t)});return console.log("generated",r),r}n(16);var p=n(8),v=(n(26),n(7)),f=(n(28),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(h.a)(e).call(this,t))).setupInitialScale=function(){return{x:v.b().domain(n.props.data.map(function(t){return t.id})).range([0,n.props.svgSize.width]).padding(.1),y:v.c().domain([0,n.dataMax]).range([0,n.props.svgSize.height])}},n.createBarChart=n.createBarChart.bind(Object(p.a)(Object(p.a)(n))),n}return Object(l.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.createBarChart()}},{key:"componentDidUpdate",value:function(){this.createBarChart()}},{key:"createBarChart",value:function(){var t=this,e=this.node;this.dataMax=v.a(this.props.data.map(function(t){return t.value}));var n=this.setupInitialScale(),a=n.x,r=n.y,i=v.d(e).selectAll("rect").data(this.props.data,function(t,e){return t.id}),o=v.e().duration(800);i.enter().append("rect").styles({opacity:0,fill:"orange"}).attrs({rx:5,ry:5,x:function(t){return a(t.id)},y:this.props.svgSize.height,height:0,width:function(){return a.bandwidth()}}).transition(o).styles({opacity:1}).attrs({y:function(e,n){return t.props.svgSize.height-r(e.value)},height:function(t){return r(t.value)}}),i.exit().attrs({class:"exit"}).transition(o).attrs({height:0}).styles({opacity:0}).remove(),i.transition(o).attr("x",function(t,e){return a(t.id)}).attr("y",function(e){return t.props.svgSize.height-r(e.value)}).attr("height",function(t){return r(t.value)}).attr("width",a.bandwidth())}},{key:"render",value:function(){var t=this;return r.a.createElement("svg",{className:"AnimatedSortBarsSVG",ref:function(e){return t.node=e},width:this.props.svgSize.width,height:this.props.svgSize.height})}}]),e}(a.Component)),g=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(h.a)(e).call(this,t))).random=function(){n.setState(function(t){return{data:d(400,40)}})},n.shuffle=function(){n.setState(function(t){return{data:t.data.sort(function(t,e){return t.value-e.value>0?1:-1})}})},n.state={data:d(400,40),svgSize:{width:900,height:350}},n}return Object(l.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"D3 Board")),r.a.createElement("div",null,r.a.createElement(f,{data:this.state.data,svgSize:this.state.svgSize})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.random},"Random"),r.a.createElement("button",{onClick:this.shuffle},"Sort")))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.243af08a.chunk.js.map