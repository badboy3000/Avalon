exports.ids=[14],exports.modules={241:function(t,e){},270:function(t,e,n){"use strict";n.r(e);var r=n(241),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},282:function(t,e,n){"use strict";var r={name:"ScoreFlowItem",props:{item:{required:!0,type:Object},bangumiId:{type:[Number,String],default:0},userZone:{type:String,default:""}},data:()=>({noScore:0}),computed:{starCount(){return this.item.total/2}}},o=n(0);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"score-flow-item"},[t._ssrNode('<div class="header">',"</div>",[n("el-tooltip",{attrs:{content:t.item.created_at,placement:"top",effect:"dark"}},[n("v-time",{staticClass:"created-at",model:{value:t.item.created_at,callback:function(e){t.$set(t.item,"created_at",e)},expression:"item.created_at"}})],1),t._ssrNode(" "),t._ssrNode('<div class="about">',"</div>",[t.bangumiId?n("user-card",{attrs:{id:t.item.user.id,zone:t.item.user.zone}},[n("v-img",{staticClass:"user-avatar",attrs:{src:t.item.user.avatar,width:"30",height:"30",avatar:!0}}),t._v(" "),n("span",{staticClass:"name href-fade-blue",domProps:{textContent:t._s(t.item.user.nickname)}})],1):n("a",{attrs:{href:t.$alias.bangumi(t.item.bangumi.id),target:"_blank"}},[n("v-img",{staticClass:"bangumi-avatar",attrs:{src:t.item.bangumi.avatar,width:"30",heighr:"30"}}),t._v(" "),n("span",{staticClass:"name href-fade-blue",domProps:{textContent:t._s(t.item.bangumi.name)}})],1),t._ssrNode(" "),t.starCount?n("el-rate",{attrs:{disabled:""},model:{value:t.starCount,callback:function(e){t.starCount=e},expression:"starCount"}}):n("el-rate",{attrs:{disabled:""},model:{value:t.noScore,callback:function(e){t.noScore=e},expression:"noScore"}})],2)],2),t._ssrNode(" <a"+t._ssrAttr("href",t.$alias.score(t.item.id))+' target="_blank" class="title">'+t._ssrEscape(t._s(t.item.title))+"</a> "),t._ssrNode("<a"+t._ssrAttr("href",t.$alias.score(t.item.id))+' target="_blank" class="content clearfix">',"</a>",[t.item.banner?n("v-img",{staticClass:"poster",attrs:{src:t.item.banner.url,width:"190",height:"105"}}):t._e(),t._ssrNode(' <div class="intro">'+t._ssrEscape("\n      "+t._s(t.item.intro)+"…")+'<button>\n        阅读全文<i class="el-icon-arrow-down"></i></button></div>')],2),t._ssrNode(' <div class="footer">'+(t.item.is_creator?'<span class="meta"><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape("投食 ("+t._s(t.item.reward_count)+")")+"</span></span>":'<span class="meta"><i class="iconfont icon-fantuan"></i> <span>'+t._ssrEscape("喜欢 ("+t._s(t.item.like_count)+")")+"</span></span>")+' <span class="meta"><i class="iconfont icon-mark"></i> <span>'+t._ssrEscape("收藏 ("+t._s(t.item.mark_count)+")")+'</span></span> <span class="meta"><i class="iconfont icon-talk"></i> <span>'+t._ssrEscape("评论 ("+t._s(t.item.comment_count)+")")+"</span></span></div>")],2)},[],!1,function(t){var e=n(270);e.__inject__&&e.__inject__(t)},null,"4df5dfec");e.a=component.exports},349:function(t,e){},447:function(t,e,n){"use strict";n.r(e);var r=n(349),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},504:function(t,e,n){"use strict";n.r(e);var r={components:{VeRadar:()=>"undefined"==typeof window?n.e(67).then(n.bind(null,488)):n.e(66).then(n.t.bind(null,489,7))},props:{source:{type:Object,required:!0},loading:{type:Boolean,default:!1},size:{type:String,default:"400px"}},data(){const t={total:"总分",lol:"笑点",cry:"泪点",fight:"燃点",moe:"萌点",sound:"音乐",vision:"画面",story:"情节",role:"人设",express:"内涵",style:"美感"},e=Object.keys(t),n=e.filter(t=>"total"!==t);return{chartExtend:{radar:{indicator:n.map(e=>({name:t[e],max:10})),shape:"polygon",splitArea:{show:!1},axisLine:{show:!0,lineStyle:{color:"##ccd0d7",type:"dotted"}},splitLine:{show:!0,lineStyle:{color:"#ccd0d7",type:"dotted"}},silent:!1,splitNumber:10},series:{areaStyle:{normal:{}},label:{normal:{show:!0}}}},chartSettings:{labelMap:t,dimension:"total",metrics:n},chartData:{columns:e,rows:[this.source]}}}},o=n(0),c=Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("not-ssr",{style:{height:this.size}},[e("ve-radar",{attrs:{data:this.chartData,settings:this.chartSettings,extend:this.chartExtend,loading:this.loading,width:this.size,height:this.size,"legend-visible":!1,"tooltip-visible":!1,resizeable:!1}})],1)},[],!1,null,null,"52033f9f").exports,l=n(59),d={name:"BangumiScore",components:{BangumiScoreChart:c,ScoreFlowItem:n(282).a},props:{id:{required:!0,type:String}},data:()=>({bangumiScore:null}),computed:{totalRate(){return this.bangumiScore.total/20},totalScore(){return this.bangumiScore.total/10}},asyncData:async({app:t,params:e})=>({bangumiScore:await Object(l.g)(t,{id:e.id})}),async fetch({store:t,params:e}){await t.dispatch("flow/initData",{id:e.id,func:"getBangumiScore",type:"seenIds",sort:"active"})}};var m=Object(o.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"bangumi-score"}},[t.bangumiScore?n("el-row",{attrs:{id:"bangumi-score-panel"}},[n("el-col",{staticClass:"bangumi-score-wrap",attrs:{span:12}},[n("bangumi-score-chart",{attrs:{source:t.bangumiScore.radar,size:"300px"}})],1),t._v(" "),n("el-col",{staticClass:"bangumi-score-total",attrs:{span:12}},[n("div",{staticClass:"intro"},[n("div",{staticClass:"total",domProps:{textContent:t._s(t.totalScore)}}),t._v(" "),n("div",{staticClass:"rate"},[n("el-rate",{attrs:{disabled:""},model:{value:t.totalRate,callback:function(e){t.totalRate=e},expression:"totalRate"}}),t._v(" "),n("span",{staticClass:"count"},[t._v(t._s(t.bangumiScore.count)+"人评价")])],1)]),t._v(" "),n("div",{staticClass:"ladder"},t._l(t.bangumiScore.ladder,function(e,r){return n("div",{key:r,staticClass:"star"},[n("span",{staticClass:"label"},[t._v(t._s(e.key)+"星")]),t._v(" "),n("div",{staticClass:"score",style:{width:100*e.val/t.bangumiScore.count+"px"}}),t._v(" "),n("span",{staticClass:"percent",domProps:{textContent:t._s((e.val/t.bangumiScore.count*100).toFixed(1)+"%")}})])}),0)])],1):t._e(),t._ssrNode(" "),n("flow-list",{attrs:{id:t.id,func:"getBangumiScore",type:"seenIds",sort:"active"},scopedSlots:t._u([{key:"header",fn:function(e){var source=e.source;return source.total?n("h3",{staticClass:"sub-title"},[t._v("\n      共 "+t._s(source.total)+" 条漫评\n    ")]):t._e()}},{key:"default",fn:function(e){var r=e.flow;return n("ul",{},t._l(r,function(e){return n("score-flow-item",{key:e.id,attrs:{"bangumi-id":t.id,item:e}})}),1)}}],null,!0)},[t._v(" "),t._v(" "),n("no-content",{attrs:{slot:"nothing"},slot:"nothing"})],1)],2)},[],!1,function(t){var e=n(447);e.__inject__&&e.__inject__(t)},null,"0d939f79");e.default=m.exports}};
//# sourceMappingURL=review.chunk.ff6b86ac.js.map