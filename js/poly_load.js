﻿_jsload&&_jsload('poly', 'function Rd(a,b){Q.call(this);this.O=a;this.type=b;this.w={}}t.lang.ia(Rd,Q,"Vertex"); t.extend(Rd.prototype,{initialize:function(a){this.map=a;var b="",b=this.type?"BMap_vectex BMap_vectex_nodeT":"BMap_vectex BMap_vectex_node",c=this.Jv=this.J=document.createElement("div");c.className=b;a.Me().NJ.appendChild(c);this.Sq();return c},draw:function(){var a=this.map.Re(this.O);this.Jv.style.left=a.x-5+"px";this.Jv.style.top=a.y-5+"px"},ga:function(a){a instanceof F&&(this.O=this.w.O=new F(a.lng,a.lat),this.draw())},ba:s("O"),Sq:function(){function a(a,b){b.pixel=b.Oa=a.Oa;b.point=b.O=a.O; return b}function b(a){var b=a.clientX,c=a.clientY;a.changedTouches&&(b=a.changedTouches[0].clientX,c=a.changedTouches[0].clientY);return new O(b,c)}if(this.J&&!this.J.Pf){this.J.Pf=i;var c=this.map,d=this,e=0,f=0,g=0,j={x:0,y:0};this.Ll=function(a){ka(a);if(2!=a.button){d.Eh=i;var j=c.kb(d.O),m=b(a);e=m.x-j.x;f=m.y-j.y;g=Ea();d.map.D.mn=d;t.C(document,"mousemove",d.hg);t.C(document,"mouseup",d.gg);t.C(document,"touchmove",d.hg);t.C(document,"touchend",d.gg);d.J&&d.J.setCapture&&d.J.setCapture(); d.J.style.cursor=d.w.kc;"touchstart"==a.type&&A(a)}};this.hg=function(g){if(d.Eh){g=b(g);j=g=new O(g.x-e,g.y-f);d.yq=g;var l=d.map.Sa(g),m={Oa:g,O:l};d.Mh=d.Nh=0;if(20>=g.x||g.x>=d.map.width-20||50>=g.y||g.y>=d.map.height-10){if(20>=g.x?d.Mh=8:g.x>=d.map.width-20&&(d.Mh=-8),50>=g.y?d.Nh=8:g.y>=d.map.height-10&&(d.Nh=-8),!d.Zc)d.Zc=setInterval(function(){c.qe(d.Mh,d.Nh,{noAnimation:i});var a=c.Sa(d.yq);d.ga(a)},30)}else d.Zc&&(clearInterval(d.Zc),d.Zc=n),d.ga(l);d.xh||(d.dispatchEvent(a(m,new L("ondragstart"))), d.xh=i);d.dispatchEvent(a(m,new L("ondragging")))}};this.gg=function(){d.J&&d.J.releaseCapture&&d.J.releaseCapture();d.Eh=o;d.map.D.mn=n;t.Uc(document,"mousemove",d.hg);t.Uc(document,"mouseup",d.gg);t.Uc(document,"touchmove",d.hg);t.Uc(document,"touchend",d.gg);e=f=0;d.Zc&&(clearInterval(d.Zc),d.Zc=n);if(100<=Ea()-g&&(2<j.x||2<j.y))d.xh=o,d.dispatchEvent(a({Oa:d.map.kb(d.ba()),O:d.ba()},new L("ondragend"))),j.x=j.y=0;d.Uh();d.J&&(d.J.style.cursor=d.w.sd?"pointer":"")};t.C(this.J,"mousedown",this.Ll); t.C(this.J,"touchstart",this.Ll)}}});t.extend(Gb.prototype,{initialize:function(a){a&&this.yn&&a.addEventListener("onmousemove",this.yn);a=Q.prototype.initialize.call(this,a);this.w.Ud==i&&(this.Lg(),this.Xh());return a},Bk:function(){this.J=(this.qn=Sd.Tl(this.map)).Aj()},N:function(){function a(a,b){var c=a.srcElement||a.target,g=eb(),j=a.pageX?a.pageX:a.clientX+g[1],g=a.pageY?a.pageY:a.clientY+g[0];if(a&&b&&j&&g&&c){var c=t.lang.Mc(c.L).map,k=t.z.ba(c.xa);b.Oa=new O(j-k.left,g-k.top);b.O=c.Sa(b.Oa);b.pixel=b.Oa;b.point=b.O}return b} var b=this.J,c=this;"canvas"!=Sd.Tl(this.map).Pj()&&!H()&&(c.w.sd&&(b.style.cursor="pointer",t.C(b,"click",function(b){c.vw&&c.vw.pb(c.map.Ga())&&c.dispatchEvent(a(b,z(new L("onclick"),b)))}),t.C(b,"dblclick",function(b){c.dispatchEvent(a(b,z(new L("ondblclick"),b)))}),(!t.M.vf||4>t.M.vf)&&t.C(this.J,"contextmenu",function(b){c.dispatchEvent(a(b,z(new L("onrightclick"),b)))})),t.C(b,"mousedown",function(b){c.dispatchEvent(a(b,z(new L("onmousedown"),b)));c.vw=c.map.Ga()}),t.C(b,"mouseup",function(b){c.dispatchEvent(a(b, z(new L("onmouseup"),b)))}),t.C(this.J,"mouseup",function(b){c.dispatchEvent(a(b,z(new L("onmouseup"),b)));t.M.vf>=4&&(b.button==2&&c.w.sd)&&c.dispatchEvent(a(b,z(new L("onrightclick"),b)))}));b=n;this.Pf||(this.Pf=i,this.yn=function(a){if(c.map&&!c.map.D.mn){var b=c.RC(a.O),f=parseFloat(b.qa),g;if(f<c.w.Jz){g=c.pa.ap?new L("onmousemove"):new L("onmouseover");c.pa.nz=o;c.pa.ap=i}else if(!c.pa.nz&&c.pa.ap){g=new L("onmouseout");c.pa.ap=o;c.pa.nz=i}if(g){if(!(c instanceof Ob)&&g.type=="onmousemove"&& c.pa.ap==i&&(f==0||f>c.w.Jz)){g.pixel=g.Oa=a.Oa;g.point=g.O=a.O}else{g.point=g.O=this.Uz(b.Oa);g.pixel=g.Oa=this.kb(g.O)}c.dispatchEvent(g)}}},this.map.addEventListener("onmousemove",this.yn),this.addEventListener("mouseover",q()),this.addEventListener("mouseout",q()))},draw:function(){this.J&&this.qn&&this.qn.Sc(this.J,this.Hq(this.W))},Tb:function(){this.map&&(this.initialize(this.map),this.J.style.WebkitUserSelect="none",this.draw())},Hq:function(a){var b=this.map,c=[];if(0==a.length||!this.J|| !this.ng())return[c];if(!this.w.Ud){var d=this.zi(b.U());this.qd[d]?a=this.qd[d]:(a=Td(a,this.Ug(b.U())),a=this.qd[d]=a)}d=this.w.JJ;c.push(b.Re(a[0],n,d));for(var e=1,f=1,g=a.length;e<g;e++){var j=b.Re(a[e],n,d);j.pb(c[f-1])||(c.push(j),f++)}return[c]},zi:function(a){return this.w.zi?this.w.zi(a):6>a?0:10>a?1:15>a?2:3},Ug:function(a){return this.w.Ug?this.w.Ug(a):Gb.bu[this.zi(a)]},pl:function(a){this.qd.length=0;a=Gb.Po(a);this.wj=a.slice(0,a.length-1);this.W=a.slice(0);this.Ze();this.draw();this.dispatchEvent(new L("onlineupdate"))}, Sc:function(a){this.pl(a);this.w.Ud==i&&(this.Lg(),this.Xh())},Vi:function(a,b){b&&this.W[a]&&(this.qd.length=0,this.W[a]=new F(b.lng,b.lat),this.Ze(),this.w.Ud==i&&(this.Lg(),this.Xh()),this.draw(),this.dispatchEvent(new L("onlineupdate")))},setStrokeColor:function(a){this.w&&(this.w.strokeColor=a);this.Ph("strokecolor",a)},Cm:function(a){0<a&&(this.w.Ve=a,this.Ph("strokeweight",a),"dashed"==this.Ly()&&(this.map&&"svg"==Sd.Tl(this.map).Pj())&&this.Ph("strokestyle","dashed"))},Am:function(a){a==aa|| (1<a||0>a)||(this.w.ue=a,this.map&&this.Ph("strokeopacity",a))},Ap:function(a){1<a||0>a||(this.w.qi=a,this.Ph("fillopacity",a))},Bm:function(a){"solid"!=a&&"dashed"!=a||(this.w.strokeStyle=a,this.Ph("strokestyle",a))},setFillColor:function(a){this.w.fillColor=a||"";this.Ph("fillcolor",a)},Ph:function(a,b){this.qn&&(this.qn.setAttribute(this.J,a,b||"",this.My()),this.dispatchEvent(new L("onlineupdate")))},Xh:function(){var a=this;if(!a.mb.length)for(var b=this.Oy(),c=0,d=b.length;c<d;c++){var e=b[c], f=new Rd(e.Wa,e.Tc);f.addEventListener("ondragging",function(b){a.Nn(b)});f.addEventListener("ondragstart",q());f.addEventListener("ondragend",function(b){a.lr(b)});f.index=c;f.Tc=e.Tc;this.mb.push(f);this.map.Ua(f)}},Lg:function(){for(var a;a=this.mb.pop();)this.map.Qc(a),delete a;this.mb.length=0},Oy:function(){for(var a=[],b=0,c=this.W.length;b<c;b++){var d=this.W[b];a.push({Wa:d,Tc:0});if(b<c-1){var e=this.W[b+1],d=new F((d.lng+e.lng)/2,(d.lat+e.lat)/2);a.push({Wa:d,Tc:1})}}return this.Ib=a}, lK:q(),lr:function(a){this.pa.fg&&(this.map.Qc(this.pa.fg),delete this.pa.fg);this.pa.Ff&&(this.map.Qc(this.pa.Ff),delete this.pa.Ff);this.pa.Cf&&(this.map.Qc(this.pa.Cf),delete this.pa.Cf);var b=a.O,a=a.currentTarget.index,c;if(0!=a%2){this.wq(a);this.Ck(a,b,0);var d=this.Ib[a-1].Wa;c=this.Ib[a+1].Wa;d=this.Sl(d,b);c=this.Sl(b,c);this.Ck(a,d,1);this.Ck(a+2,c,1);a=Math.ceil(a/2);c=this.W.slice();a=c.splice(a,this.W.length-a);c[c.length]=b;c=c.concat(a)}else this.Ib[a].Wa=b,0<=a-2&&(d=this.Ib[a-2].Wa, d=this.Sl(d,b),this.mb[a-1].show(),this.mb[a-1].ga(d)),a+2<this.Ib.length&&(c=this.Ib[a+2].Wa,c=this.Sl(b,c),this.mb[a+1].show(),this.mb[a+1].ga(c)),this instanceof Nb&&this.Ib.length-1==a&&(this.wq(0),this.Ck(0,b,0),this.wq(1),this.Ck(1,this.Sl(this.Ib[0].Wa,this.Ib[1].Wa),1),this.mb[0].J.style.zIndex="-10000000"),a/=2,this.W.splice(a,1,b),this instanceof Nb&&this.W.length-1==a&&this.W.splice(0,1,b),c=this.W;b=0;for(a=this.mb.length;b<a;b++)this.mb[b].index=b;this.W=c;this.pl(c)},Ck:function(a,b, c){var d=this;this.Ib.splice(a,0,{Wa:b,Tc:c});b=new Rd(b,c);b.addEventListener("ondragging",function(a){d.Nn(a)});b.addEventListener("ondragstart",q());b.addEventListener("ondragend",function(a){d.lr(a)});b.index=a;b.Tc=c;this.mb.splice(a,0,b);this.map.Ua(b)},wq:function(a){this.map.Qc(this.mb[a]);this.Ib.splice(a,1);this.mb.splice(a,1)},Sl:function(a,b){return new F((a.lng+b.lng)/2,(a.lat+b.lat)/2)},RC:function(a){var b,c,d,e,f,g,j=[],k=this.map.Re(a),j=this.Hq(this.W)[0],l=j.length;if(1<l){for(e= 1;e<l;e++){var m=j[e-1],p=j[e];if(m&&p){m.x!=p.x?(f=(p.y-m.y)/(p.x-m.x),f=Math.abs(f*k.x+(p.y-f*p.x)-k.y)/Math.sqrt(f*f+1)):f=Math.abs(k.x-p.x);var u=Math.pow(p.y-m.y,2)+Math.pow(p.x-m.x,2),p=Math.pow(p.y-k.y,2)+Math.pow(p.x-k.x,2),m=Math.pow(m.y-k.y,2)+Math.pow(m.x-k.x,2),v=Math.pow(f,2);p-v+m-v>u&&(f=Math.sqrt(Math.min(p,m)));if(b==n||b>f)c=Math.sqrt(m-v)/Math.sqrt(u),d=Math.sqrt(p-v)/Math.sqrt(u),b=f,g=e;b=Math.min(b,f)}}if(!(this instanceof Ob)){f=k=0;u=this.W;for(e=0;e<l;e++)k=e==l-1?0:k+1,u[e].lat!= u[k].lat&&((a.lat>=u[e].lat&&a.lat<u[k].lat||a.lat>=u[k].lat&&a.lat<u[e].lat)&&a.lng<(u[k].lng-u[e].lng)*(a.lat-u[e].lat)/(u[k].lat-u[e].lat)+u[e].lng)&&f++;b=Math.min(b,0<f%2?0:b)}1<c&&(c=1);1<d&&(c=0);a=j[g-1].y-j[g].y;e=j[g-1].x-(j[g-1].x-j[g].x)*c;f=j[g-1].y-a*c}return{Oa:new O(e,f),qa:b}},show:function(){Q.prototype.show.call(this);this.draw();this.w.Ud==i&&this.Xh()},H:function(){Q.prototype.H.call(this);this.w.Ud==i&&this.Lg()},remove:function(){Eb.prototype.remove.call(this);this.w.Ud==i&& this.Lg()}});function Ud(a,b){var c={top:0,bottom:0,right:0,left:0,all:0},d=a.x,e=a.y;e<b.Iz?(c.top=8,c.all+=c.top):e>b.Fz&&(c.bottom=4,c.all+=c.bottom);d>b.Ez?(c.right=2,c.all+=c.right):d<b.Hz&&(c.left=1,c.all+=c.left);return c} function Td(a,b){if(0==b)return a;for(var c=0,d=0,e=1,f=a.length-1;e<f;e++){var g;g=a[e];var j=a[0],k=a[a.length-1],l=j.lng-k.lng,k=j.lat-k.lat;0==l?g=Math.abs(g.lng-j.lng):0==k?g=Math.abs(g.lat-j.lat):(l=k/l,g=Math.abs(l*g.lng-g.lat+(j.lat-l*j.lng))/Math.sqrt(l*l+1));g>c&&(d=e,c=g)}g=[];if(c>=b){e=a.slice(0,d);f=a.slice(d,a.length);d=Td(e,b);c=Td(f,b);e=0;for(f=d.length;e<f;e++)g.push(d[e]);e=0;for(f=c.length;e<f;e++)g.push(c[e])}else g.push(a[0]),g.push(a[a.length-1]);return g} W(ad,{show:ad.show,hide:ad.H,remove:ad.remove,setPath:ad.Sc,setPositionAt:ad.Vi,setStrokeColor:ad.setStrokeColor,setStrokeWeight:ad.Cm,setStrokeOpacity:ad.Am,setFillOpacity:ad.Ap,setStrokeStyle:ad.Bm,setFillColor:ad.setFillColor});t.extend(Ob.prototype,{initialize:function(a){Gb.prototype.initialize.call(this,a);this.setFillColor("");this.setStrokeColor(this.w.strokeColor);this.Cm(this.w.Ve);this.Bm(this.w.strokeStyle);this.Am(this.w.ue);return this.J},Hq:function(a){var b=this.map,c=[];if(0==a.length||!this.J||!this.ng())return[c];if(!(H()&&5E3<a.length)&&!this.w.Ud){var d=this.zi(b.U());if(this.qd[d])a=this.qd[d];else var e=Td(a,this.Ug(b.U())),a=this.qd[d]=e}c.push(b.Re(a[0]));for(var f=d=1,e=a.length;d<e;d++){var g=b.Re(a[d]); g.pb(c[f-1])||(c.push(g),f++)}a=[];d=b.offsetX;e=b.offsetY;f=b.F.ws;b={Hz:-d-f,Iz:-e-f,Ez:-d+f+b.width,Fz:-e+f+b.height};d=0;for(e=c.length-1;d<e;d++){var j=c[d],k=c[d+1],f=b,l=g=o,m=o,j=new O(j.x,j.y),k=new O(k.x,k.y),p=Ud(j,f),u=Ud(k,f),v=aa,w=aa,y=aa,E=f.Hz,x=f.Iz,I=f.Ez,D=f.Fz;do 0==p.all&&0==u.all?m=g=i:0!=(p.all&u.all)?m=i:(v=0!=p.all?p:u,v.top?(w=j.x+(k.x-j.x)*(x-j.y)/(k.y-j.y),y=x):v.bottom?(w=j.x+(k.x-j.x)*(D-j.y)/(k.y-j.y),y=D):v.right?(y=j.y+(k.y-j.y)*(I-j.x)/(k.x-j.x),w=I):v.left&&(y= j.y+(k.y-j.y)*(E-j.x)/(k.x-j.x),w=E),l=i,v.all==p.all)?(j.x=Math.round(w),j.y=Math.round(y),p=Ud(j,f)):(k.x=Math.round(w),k.y=Math.round(y),u=Ud(k,f));while(!m);f=g?{Xz:new O(j.x,j.y),Yz:new O(k.x,k.y),clip:l?i:o}:aa;f&&a.push(f)}c=[[]];d=0;for(e=a.length;d<e;d++)a[d].clip?(c[c.length-1].push(a[d].Xz),c[c.length-1].push(a[d].Yz),a[d+1]&&a[d+1].clip&&c.push([])):(c[c.length-1].push(a[d].Xz),d==a.length-1&&c[c.length-1].push(a[d].Yz));return c},Nn:function(a){var b=a.currentTarget,c=a.O,d=b.index,e= this.Ib,f,g=a=n;if(0==d){var j=e[d+2].Wa;f=[c,j];a=new F((j.lng+c.lng)/2,(j.lat+c.lat)/2);this.mb[d+1]&&this.mb[d+1].H()}else if(d==e.length-1){var k=e[d-2].Wa;f=[k,c];a=new F((k.lng+c.lng)/2,(k.lat+c.lat)/2);this.mb[d-1]&&this.mb[d-1].H()}else k=e[d-1].Wa,j=e[d+1].Wa,f=[k,c,j],b.Tc||(k=e[d-2].Wa,j=e[d+2].Wa,f=[k,c,j],a=new F((k.lng+c.lng)/2,(k.lat+c.lat)/2),g=new F((j.lng+c.lng)/2,(j.lat+c.lat)/2),this.mb[d-1]&&this.mb[d-1].H(),this.mb[d+1]&&this.mb[d+1].H());this.pa.fg?(this.pa.fg.Sc(f),this.pa.fg.show()): (b=new Ob(f,{strokeStyle:"dashed",strokeColor:this.w.strokeColor,Ve:this.w.Ve,ue:this.w.ue}),this.map.Ua(b),b.H(),this.pa.fg=b);!this.pa.Ff&&a?(this.pa.Ff=new Rd(a,1),this.map.Ua(this.pa.Ff)):a&&this.pa.Ff.ga(a);!this.pa.Cf&&g?(this.pa.Cf=new Rd(g,1),this.map.Ua(this.pa.Cf)):g&&this.pa.Cf.ga(g)}});t.extend(Nb.prototype,{initialize:function(a){Gb.prototype.initialize.call(this,a);this.setStrokeColor(this.w.strokeColor);this.Cm(this.w.Ve);this.Bm(this.w.strokeStyle);this.setFillColor(this.w.fillColor);this.Am(this.w.ue);this.Ap(this.w.qi);return this.J},Vi:function(a,b){this.wj[a]&&(this.qd.length=0,this.wj[a]=new F(b.lng,b.lat),this.W[a]=new F(b.lng,b.lat),0==a&&!this.W[0].pb(this.W[this.W.length-1])&&(this.W[this.W.length-1]=new F(b.lng,b.lat)),this.Ze(),this.w.Ud==i&&(this.Lg(),this.Xh()), this.draw(),this.dispatchEvent(new L("onlineupdate")))},Nn:function(a){var b=a.currentTarget,c=a.O,d=b.index,e=this.Ib,f,g=a=n;if(0==d){var j=e[e.length-2].Wa,k=e[d+2].Wa;f=[j,c,k];b.Tc||(a=new F((j.lng+c.lng)/2,(j.lat+c.lat)/2),g=new F((k.lng+c.lng)/2,(k.lat+c.lat)/2))}else d==e.length-1?(k=e[2].Wa,j=e[d-2].Wa,f=[j,c,k],b.Tc||(a=new F((j.lng+c.lng)/2,(j.lat+c.lat)/2),g=new F((k.lng+c.lng)/2,(k.lat+c.lat)/2))):(j=e[d-1].Wa,k=e[d+1].Wa,f=[j,c,k],b.Tc||(j=e[d-2].Wa,k=e[d+2].Wa,f=[j,c,k],a=new F((j.lng+ c.lng)/2,(j.lat+c.lat)/2),g=new F((k.lng+c.lng)/2,(k.lat+c.lat)/2),this.mb[d-1]&&this.mb[d-1].H(),this.mb[d+1]&&this.mb[d+1].H()));this.pa.fg?this.pa.fg.Sc(f):(b=new Ob(f,{strokeStyle:"dashed",strokeColor:this.w.strokeColor,Ve:this.w.Ve,ue:this.w.ue}),this.map.Ua(b),this.pa.fg=b);!this.pa.Ff&&a?(this.pa.Ff=new Rd(a,1),this.map.Ua(this.pa.Ff)):a&&this.pa.Ff.ga(a);!this.pa.Cf&&g?(this.pa.Cf=new Rd(g,1),this.map.Ua(this.pa.Cf)):g&&this.pa.Cf.ga(g)}});W(cd,{setPositionAt:cd.Vi});t.extend(Pb.prototype,{initialize:function(a){Nb.prototype.initialize.call(this,a);this.W=this.wn(this.O,this.Ca);this.Ze();return this.J},se:function(a,b){a&&(this.qd.length=0,b||(this.Ib=n),this.O=a,this.W=this.wn(a,this.Ca),this.Ze(),this.draw(),this.dispatchEvent(new L("onlineupdate")))},Dp:function(a,b){isNaN(a)||(this.qd.length=0,b||(this.Ib=n),this.Ca=Math.abs(a),this.W=this.wn(this.O,this.Ca),this.Ze(),this.draw(),this.dispatchEvent(new L("onlineupdate")))},Ug:function(a){return this.w.Ug? this.w.Ug(a):Pb.bu[this.zi(a)]},Nn:function(a){var b,a=a.currentTarget,c=this.Ib;b=c[0].Wa;c=c[c.length-1].Wa;0==a.index?(b=a.ba(),a=c):a=a.ba();this.Dp(P.Xs(b,a),i);this.se(b,i)},lr:function(a){var a=a.currentTarget,b=a.index;this.Ib[0]={Wa:this.O,Tc:0};1==b&&(this.Ib[1]={Wa:a.O,Tc:0});this.Lg();this.Xh()},Oy:function(){if(!this.Ib){var a=[];a.push({Wa:this.O,Tc:0});a.push({Wa:this.W[Math.floor(3*this.W.length/4)],Tc:0});this.Ib=a}return this.Ib}});W(bd,{setCenter:bd.se,setRadius:bd.Dp});var Sd={Tl:function(a){Sd["_"+a.L]||(Sd["_"+a.L]={});if(Sd.JH())return Sd.ZG(a);if(Sd.KH())return Sd.gH(a);if(Sd.HH())return Sd.uG(a)},ZG:function(a){Sd["_"+a.L].bx||(Sd["_"+a.L].bx=new B.kB(a));return Sd["_"+a.L].bx},gH:function(a){Sd["_"+a.L].kx||(Sd["_"+a.L].kx=new B.mB(a));return Sd["_"+a.L].kx},uG:function(a){Sd["_"+a.L].Bv||(Sd["_"+a.L].Bv=new B.SA(a));return Sd["_"+a.L].Bv},KH:function(){if(hb(Sd.AA))return Sd.AA;var a=mb();return Sd.AA=a},JH:function(){hb(Sd.zA)||(Sd.zA=nb());return Sd.zA}, HH:function(){hb(Sd.yA)||(Sd.yA=ob());return Sd.yA}};B.Vm=Sd; ');