﻿_jsload&&_jsload('othersearch', 't.extend(Gc.prototype,{tc:function(){for(var a=0,b=this.na.length;a<b;a++){var c=this.na[a];this[c.method].apply(this,c.arguments)}delete this.na},kt:function(a,b,c){c=c||"\\u5317\\u4eac\\u5e02";/^[ \\s]*$/.test(a)||lc.Pa(function(a){if(a&&a.result&&35==a.result.type){var c=a.result,a=a.content,f=n,g=n;if(c&&0==c.error&&a)var c=a.cn,g=a.sc,j=a.wd,k=a.prc,l=a.fuzzy_score,m=a.catalog,f=new F(a.coord.x,a.coord.y),f=P.ib(f),g={city:c,citycode:g,address:j,precise:k,confidence:l,level:m};b&&b(f,g)}},{qt:"gc", wd:a,cn:c})},Ro:function(a,b,c){if(!(a instanceof F)&&b)b(n);else{var a=P.ob(a),d=a.lng,a=a.lat,c=c||{};lc.Pa(function(a){var c=n;if(a&&a.result&&44==a.result.type){var d=a.content,j={},k=[];if(0==a.result.error&&d){c=d.address_detail;a=c.city;c&&(j.streetNumber=c.street_number,j.street=c.street,j.district=c.district,j.city=a,j.province=c.province);var c=d.point,c=new F(c.x,c.y),c=P.ib(c),l=d.surround_poi;if(l&&l.length)for(var m=0,p=l.length;m<p;m++){var u={},v=l[m];u.title=v.name;u.uid=v.uid;var w= new F(v.point.x,v.point.y),w=P.ib(w);u.point=w;u.city=a;u.Uf=v.poiType;u.type=0;u.address=v.addr;u.postcode=v.zip||n;u.phoneNumber=v.tel||n;v=u.Uf;0!==v.length&&(u.Km=v.split(","));k.push(u)}c={point:c,address:d.address,addressComponents:j,surroundingPois:k,business:d.business}}}b&&b(c)},{qt:"rgc",x:d,y:a,dis_poi:c.poiRadius||100,poi_num:c.numPois||10})}}});W(Hc,{getPoint:Hc.kt,getLocation:Hc.Ro});t.extend(Geolocation.prototype,{tc:function(){for(var a=0,b=this.na.length;a<b;a++){var c=this.na[a];this[c.method].apply(this,c.arguments)}delete this.na},getCurrentPosition:function(a,b){this.$e=a||q();if(navigator.geolocation){var c=this;navigator.geolocation.getCurrentPosition(function(a){c.wD(a)},function(a){c.Bw(a.code+5)},b)}else this.Bw(7)},wD:function(a){var b=a.coords,c=this;lc.Pa(function(a){a=a&&0==a.error?new F(a.x,a.y):new F(b.longitude,b.latitude);c.vc=0;c.$e({point:a,accuracy:b.accuracy})}, {x:b.longitude,y:b.latitude,from:0,to:4},n,"ag/coord/convert")},Bw:function(a){this.vc=a;this.$e(n)}});W(Ic,{getCurrentPosition:Ic.getCurrentPosition});t.extend(Jc.prototype,{tc:function(){for(var a=0,b=this.na.length;a<b;a++){var c=this.na[a];this[c.method].apply(this,c.arguments)}delete this.na},get:function(a){var b=this;lc.Pa(function(c){if(c&&c.result&&2==c.result.type){var d=c.result,c=c.content;if(d&&0==d.error){var d=b.m.$.map,e=c.level,f=c.cname,g=c.code,j=N.ab(c.geo,i).O,e=N.Ss(e,d);d&&d.Sd(j,e)}a&&a({center:j,level:e,name:f,code:g})}},{qt:"dec"})}});t.extend(Kc.prototype,{tc:function(){for(var a=0,b=this.na.length;a<b;a++){var c=this.na[a];this[c.method].apply(this,c.arguments)}delete this.na},get:function(a,b){var c={boundaries:[]},d=this;lc.Pa(function(e){e&&e.content&&e.content.uid?lc.Pa(function(e){if(e&&e.content&&e.content.geo)if(-1<a.indexOf("\\u798f\\u5efa")||-1<a.indexOf("\\u6d59\\u6c5f"))e=d.BD(e.content.geo),c.boundaries=e;else if(e=N.ab(e.content.geo,o),e.Jc&&e.Jc.length&&0<e.Jc.length){var g=e.Jc.length;for(Ye=0;Ye<g;Ye++){var j=e.Jc[Ye]; if(j&&j.length&&0<j.length){for(var k=j.length-1,l=[],m=0;m<k;m+=2){var p=new F(j[m],j[m+1]),p=P.ib(p);l.push(p.lng+", "+p.lat)}c.boundaries.push(l.join(";"))}}}b&&b(c)},{qt:"ext",num:1E3,l:10,uid:e.content.uid}):b&&b(c)},{qt:"s",wd:a})},BD:function(a){var b=[];if("string"!=typeof a)return b;for(var a=a.split("|")[2].split(";"),c=0;c<a.length-1;c++){for(var d=[],e=a[c].split(","),f=0;f<e.length;f+=2){var g=new F(e[f],e[f+1]),g=P.ib(g);d.push(g.lng+", "+g.lat)}b.push(d.join(";"))}return b}}); W(sd,{get:sd.get}); ');