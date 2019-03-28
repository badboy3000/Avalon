exports.ids=[56],exports.modules={241:function(t,e){},270:function(t,e,n){"use strict";n.r(e);var r=n(241),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},282:function(t,e,n){"use strict";var r={name:"ScoreFlowItem",props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""}},data:()=>({noScore:0}),computed:{starCount(){return this.item.total/2}}},o=n(0);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"score-flow-item"},[t._ssrNode('<div class="header">',"</div>",[n("el-tooltip",{attrs:{content:t.item.created_at,placement:"top",effect:"dark"}},[n("v-time",{staticClass:"created-at",model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],1),t._ssrNode(" "),t._ssrNode('<div class="about">',"</div>",[t.bangumiId?n("user-card",{attrs:{id:t.item.user.id,zone:t.item.user.zone}},[n("v-img",{staticClass:"user-avatar",attrs:{src:t.item.user.avatar,width:"30",height:"30",avatar:!0}}),t._v(" "),n("span",{staticClass:"name href-fade-blue",domProps:{textContent:t._s(t.item.user.nickname)}})],1):n("a",{attrs:{href:t.$alias.bangumi(t.item.bangumi.id),target:"_blank"}},[n("v-img",{staticClass:"bangumi-avatar",attrs:{src:t.item.bangumi.avatar,width:"30",heighr:"30"}}),t._v(" "),n("span",{staticClass:"name href-fade-blue",domProps:{textContent:t._s(t.item.bangumi.name)}})],1),t._ssrNode(" "),t.starCount?n("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):n("el-rate",{attrs:{disabled:""},model:{value:t.noScore,callback:function(e){t.noScore=e},expression:"noScore"}})],2)],2),t._ssrNode(" <a"+t._ssrAttr("href",t.$alias.score(t.item.id))+' target="_blank" class="title">'+t._ssrEscape(t._s(t.item.title))+"</a> "),t._ssrNode("<a"+t._ssrAttr("href",t.$alias.score(t.item.id))+' target="_blank" class="content clearfix">',"</a>",[t.item.banner?n("v-img",{staticClass:"poster",attrs:{src:t.item.banner.url,width:"190",height:"105"}}):t._e(),t._ssrNode(' <div class="intro">'+t._ssrEscape("\n      "+t._s(t.item.intro)+"…")+'<button>\n        阅读全文<i class="el-icon-arrow-down"></i></button></div>')],2),t._ssrNode(' <div class="footer">'+(t.item.is_creator?'<span class="meta"><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape("投食 ("+t._s(t.item.reward_count)+")")+"</span></span>":'<span class="meta"><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape("喜欢 ("+t._s(t.item.like_count)+")")+"</span></span>")+' <span class="meta"><i class="iconfont icon-mark"></i> <span>'+t._ssrEscape("收藏 ("+t._s(t.item.mark_count)+")")+'</span></span> <span class="meta"><i class="iconfont icon-talk"></i> <span>'+t._ssrEscape("评论 ("+t._s(t.item.comment_count)+")")+"</span></span></div>")],2)},[],!1,function(t){var e=n(270);e.__inject__&&e.__inject__(t)},null,"4df5dfec");e.a=component.exports},515:function(t,e,n){"use strict";n.r(e);var r={name:"UserScore",components:{ScoreFlowItem:n(282).a},computed:{user(){return this.$store.state.users.show}},async asyncData({store:t,params:e}){await t.dispatch("flow/initData",{func:"getUserScore",type:"page",sort:"news",id:e.zone})}},o=n(0),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("flow-list",{attrs:{id:t.user.zone,func:"getUserScore",type:"page",sort:"news"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.flow;return n("ul",{},t._l(r,function(t){return n("score-flow-item",{key:t.id,attrs:{item:t}})}),1)}}])},[t._v(" "),n("no-content",{attrs:{slot:"nothing"},slot:"nothing"})],1)},[],!1,null,null,"22e63f1a");e.default=component.exports}};
//# sourceMappingURL=review.chunk.433c764b.js.map