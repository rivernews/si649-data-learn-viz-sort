(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),i=(a(18),a(3)),s=a(4),l=a(7),u=a(5),d=a(6),h=(a(20),a(10),a(2)),p=(a(22),a(12)),f=a(0),m=a(8),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).createBarChart=a.createBarChart.bind(Object(h.a)(Object(h.a)(a))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.createBarChart()}},{key:"componentDidUpdate",value:function(){this.createBarChart()}},{key:"createBarChart",value:function(){var e=this,t=this.node,a=Object(f.d)(this.props.data),n=Object(p.a)().domain([0,a]).range([0,this.props.size[1]]);Object(m.a)(t).selectAll("rect").data(this.props.data).enter().append("rect"),Object(m.a)(t).selectAll("rect").data(this.props.data).exit().remove(),Object(m.a)(t).selectAll("rect").data(this.props.data).style("fill","#fe9922").attr("x",function(e,t){return 25*t}).attr("y",function(t){return e.props.size[1]-n(t)}).attr("height",function(e){return n(e)}).attr("width",25)}},{key:"render",value:function(){var e=this;return r.a.createElement("svg",{className:"AnimatedSortBarsSVG",ref:function(t){return e.node=t},width:500,height:500})}}]),t}(n.Component),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h2",null,"D3 Board")),r.a.createElement("div",null,r.a.createElement(b,{data:[5,10,1,3],size:[500,500]})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[13,2,1]]]);
//# sourceMappingURL=main.ff3b2e76.chunk.js.map