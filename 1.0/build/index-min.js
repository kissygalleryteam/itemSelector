/*! itemSelector - v1.0 - 2013-09-02 5:47:47 PM
* Copyright (c) 2013 知了; Licensed  */
KISSY.add("gallery/itemSelector/1.0/index",function(a,b,c){"use strict";function d(a,b){return this instanceof d?(this.ele=c.one(a),d.superclass.constructor.call(this,b),this.init(b),void 0):new d(a,b)}return a.extend(d,b,{init:function(a){this.cfg=a,this._initHTML(),this._bind()},_initHTML:function(){this._initTarget(),this._initSrc(),this._initNum()},_initTarget:function(){var b=this.get("target"),c="",d=this.get("targetListClass");a.each(b,function(a){c+='<li><input type="checkbox" class="" value="'+a.id+'" data-text="'+a.name+'"/>'+a.name+"</li>"}),this.ele.one(d).html(c)},_initSrc:function(){for(var b=this.get("src"),c=this.get("target"),d="",e=this.get("srcListClass"),f=0;f<c.length;f++)for(var g=c[f],h=0;h<b.length;h++){var i=b[h];if(g.id==i.id){b.splice(h,1);break}}a.each(b,function(a){d+='<li><input type="checkbox" class="" value="'+a.id+'" data-text="'+a.name+'"/>'+a.name+"</li>"}),this.ele.one(e).html(d)},_initNum:function(){var a=this.get("targetListClass"),b=this.ele.one(a).all("input").length;this._setNum(b),this.targetCount=b},_bind:function(){var a=c.one(".wt-itemselector-widget");a.delegate("click","input[type=checkbox], button, .J_Clear",function(a){var b=c.one(a.target);b.hasClass(".J_add")?this._add():b.hasClass(".J_del")?this._del():b.hasClass(".J_Clear")?this._clear():"INPUT"===b.prop("tagName")&&this._clickCheckBox(b)},this)},_add:function(){var a=this.get("targetListClass"),b=this.get("srcListClass");this._moveItem(b,a,!0)},_del:function(){var a=this.get("targetListClass"),b=this.get("srcListClass");this._moveItem(b,a,!1)},_clear:function(){var a=this.get("targetListClass"),b=this.get("srcListClass");this._moveItem(b,a,!1,!0)},getTargetData:function(){var b=this.get("targetListClass"),c=this.ele.one(b).all("input"),d="";return a.each(c,function(a){d=d+a.value+","}),d},_clickCheckBox:function(a){var b=a.parent("li");if(b){b.toggleClass("on");var c=b.one("input")[0].checked;this._handleAllCheckBox(b,c)}else this._handleAll(a)},_handleAll:function(a){var b=a[0].checked,c=this.get("targetListClass"),d=this.get("srcListClass"),e=this.get("srcAllClass"),f=this.get("targetAllClass");b?a.parent(e)?this._toggleChecked(d,b):a.parent(f)&&this._toggleChecked(c,b):a.parent(e)?this._toggleChecked(d,b):a.parent(f)&&this._toggleChecked(c,b)},_toggleChecked:function(b,c){var d=this.ele.one(b),e=d.all("input"),f=this;a.each(e,function(a){var b=f.ele.one(a).parent("li");c?(a.checked=!0,b.addClass("on")):(a.checked=!1,b.removeClass("on"))})},_moveItem:function(b,c,d,e){var f,g,h=this;d?(f=b,g=c):(f=c,g=b);var i=this.ele.one(f),j=i.all("input"),k=[];a.each(j,function(a){var b=h.ele.one(a).parent("li");e?(b.remove(),k.push(b[0])):a.checked&&(b.remove(),k.push(b[0]))}),e?this.targetCount=0:d?this.targetCount+=k.length:this.targetCount-=k.length,this._setNum(this.targetCount),this.ele.one(g).append(k)},_setNum:function(a){var b=this.ele.one(this.get("targetNumClass"));b.html(a)},_handleAllCheckBox:function(a,b){for(var c=a.siblings(),d=c.length,e=this.get("srcListClass"),f=this.get("srcAllClass"),g=this.get("targetAllClass"),h=[],i=[],j=0;d>j;j++){var k=this.ele.one(c[j]).one("input")[0];k.checked?h.push(k):i.push(k)}var l=this.ele.one(g+" input")[0],m=this.ele.one(f+" input")[0];b?h.length===d&&(a.parent(e)?m.checked=!0:l.checked=!0):i.length===d&&(a.parent(e)?m.checked=!1:l.checked=!1)}},{ATTRS:{src:{value:[]},target:{value:[]},srcListClass:{value:".src-list"},targetListClass:{value:".target-list"},srcAllClass:{value:".src-all"},targetAllClass:{value:".target-all"},targetNumClass:{value:".target-num"}}}),d},{requires:["base","node","sizzle","overlay"]});