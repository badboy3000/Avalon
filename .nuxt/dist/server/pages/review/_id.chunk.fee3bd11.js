exports.ids=[35],exports.modules={233:function(t,e){},234:function(t,e){},235:function(t,e){},236:function(t,e){},237:function(t,e){},238:function(t,e){},241:function(t,e,n){"use strict";var r={name:"CommentReplyForm",props:{type:{required:!0,type:String},id:{required:!0,type:Number},toUserId:{required:!0,type:Number},value:{type:Boolean,default:!1,required:!0}},data(){return{open:this.value,submitting:!1,content:""}},mounted(){this.$watch("value",t=>{this.open=t,t&&this.$nextTick(()=>{this.$refs.input.focus()})}),this.$watch("open",t=>{this.$emit("input",t)})},methods:{cancel(){this.open=!1},async submit(){if(this.$store.state.login){if(this.content&&!this.submitting){this.submitting=!0;try{const t=await this.$store.dispatch("comment/createSubComment",{id:this.id,ctx:this,type:this.type,content:this.content,targetUserId:this.toUserId});this.open=!1,this.content="",this.$toast.success(t.message),this.$store.commit("UPDATE_USER_EXP",t.exp)}catch(t){this.$toast.error(t)}finally{this.submitting=!1}}}else this.$channel.$emit("sign-in")}}},o=n(0);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.open?n("div",{staticClass:"comment-reply-form"},[t._ssrNode('<div class="btn-group">',"</div>",[n("el-button",{attrs:{size:"mini",type:"info",plain:""},on:{click:t.cancel}},[t._v("取消")]),t._ssrNode(" "),n("el-button",{attrs:{loading:t.submitting,size:"mini",type:"primary"},on:{click:t.submit}},[t._v("发表")])],2),t._ssrNode(' <div class="input-wrap"><input type="text" placeholder="请缩减至100字以内" maxlength="100"'+t._ssrAttr("value",t.content)+"></div>")],2):t._e()},[],!1,function(t){var e=n(249);e.__inject__&&e.__inject__(t)},null,"f8f6afc8");e.a=component.exports},246:function(t,e){},247:function(t,e,n){"use strict";var r=n(241),o={name:"VSubCommentItem",components:{CommentReplyForm:r.a},props:{comment:{required:!0,type:Object},parentUserId:{required:!0,type:Number},type:{required:!0,type:String,default:""}},data:()=>({showReplyArea:!1,deleting:!1}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},isMine(){return this.currentUserId===this.comment.from_user_id},canDelete(){return this.isMine||this.currentUserId===this.parentUserId},focusThisComment(){return parseInt(this.$route.query["reply-id"])===this.comment.id}},methods:{openReplyForm(){this.currentUserId?this.showReplyArea=!this.showReplyArea:this.$channel.$emit("sign-in")},deleteComment(){this.deleting||(this.deleting=!0,this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$store.dispatch("comment/deleteSubComment",{ctx:this,type:this.type,id:this.comment.id,parentId:this.comment.parent_id})}).catch(t=>{this.deleting=!1,"cancel"!==t&&this.$toast.error(t)}))}}},c=n(0);var d={name:"VSubCommentList",components:{SubCommentItem:Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-comment-item",class:{"focused-sub-comment":t.focusThisComment},attrs:{id:"sub-comment-"+t.comment.id}},[t._ssrNode('<div class="sub-user">',"</div>",[t._ssrNode('<div class="avatar">',"</div>",[n("user-card",{attrs:{id:t.comment.from_user_id,zone:t.comment.from_user_zone}},[n("v-img",{attrs:{src:t.comment.from_user_avatar,avatar:!0,width:24,height:24}})],1)],1)]),t._ssrNode(" "),t._ssrNode('<div class="sub-body">',"</div>",[n("user-card",{attrs:{id:t.comment.from_user_id,zone:t.comment.from_user_zone,"custom-class":"from-user href-fade-blue"}},[t._v("\n      "+t._s(t.comment.from_user_name)+"\n    ")]),t._ssrNode(" "),t._ssrNode('<span class="sub-text">',"</span>",[t.comment.to_user_id&&t.comment.to_user_id!==t.parentUserId?[t._ssrNode("\n        回复\n        "),n("user-card",{attrs:{id:t.comment.to_user_id,zone:t.comment.to_user_zone,"custom-class":"to-user"}},[t._v("\n          @"+t._s(t.comment.to_user_name)+"\n        ")])]:t._e(),t._ssrNode(t._ssrEscape("\n      "+t._s(t.comment.content)+"\n    "))],2),t._ssrNode(" "),t._ssrNode('<div class="sub-extra">',"</div>",[n("el-tooltip",{attrs:{content:t.comment.created_at,placement:"top",effect:"dark"}},[n("v-time",{model:{value:t.comment.created_at,callback:function(e){t.$set(t.comment,"created_at",e)},expression:"comment.created_at"}})],1),t._ssrNode(' <button class="reply-btn">回复</button> '),t.canDelete?t._ssrNode("<button>","</button>",[t._ssrNode('<i class="iconfont icon-shanchu"></i>')],2):n("report-dialog",{attrs:{id:t.comment.id,type:t.type+"_reply"}},[n("button",{staticClass:"reply-btn"},[t._v("举报")])])],2),t._ssrNode(" "),n("comment-reply-form",{attrs:{id:t.comment.parent_id,type:t.type,"to-user-id":t.comment.from_user_id},model:{value:t.showReplyArea,callback:function(e){t.showReplyArea=e},expression:"showReplyArea"}})],2)],2)},[],!1,function(t){var e=n(250);e.__inject__&&e.__inject__(t)},null,"984d8742").exports},props:{parentComment:{required:!0,type:Object},type:{required:!0,type:String,default:""}},data:()=>({loading:!1,showCollapse:!1,collapsed:!1}),computed:{comments(){return this.parentComment.comments},authorId(){return this.parentComment.from_user_id},filterComments(){if(!this.collapsed)return this.comments.list;const data=this.comments,t=data.list,e=t.slice(0,5);if(t.every(t=>t.id<=data.maxId))return e;const n=e.map(t=>t.id);return e.concat(t.filter(t=>t.id>data.maxId&&-1===n.indexOf(t.id)))}},methods:{async loadMore(){if(!this.loading){this.loading=!0;try{await this.$store.dispatch("comment/getSubComments",{ctx:this,type:this.type,id:this.parentComment.id}),this.showCollapse=!0}catch(t){this.$toast.error(t)}finally{this.loading=!1}}}}};var m={name:"VCommentItem",components:{SubCommentList:Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sub-comment-list-wrap"},[t._l(t.filterComments,function(e){return n("sub-comment-item",{key:e.id,attrs:{comment:e,"parent-user-id":t.authorId,type:t.type}})}),t._ssrNode(" "+(!t.comments.noMore||t.comments.list.length>5?'<div class="view-more">\n    共<strong>'+t._ssrEscape(t._s(t.comments.total))+"</strong>条回复\n    "+(t.comments.noMore?"\x3c!----\x3e":'\n      ，\n      <button class="more-btn">查看更多</button>')+" "+(t.showCollapse?'<button class="collapse-btn">'+t._ssrEscape("\n      "+t._s(t.collapsed?"展开":"收起")+"\n    ")+"</button>":"\x3c!----\x3e")+"</div>":"\x3c!----\x3e"))],2)},[],!1,function(t){var e=n(251);e.__inject__&&e.__inject__(t)},null,"8442972c").exports,CommentReplyForm:r.a},props:{comment:{required:!0,type:Object},masterId:{required:!0,type:[Number,String]},type:{required:!0,type:String,default:""}},data:()=>({deleting:!1,liking:!1,showReplyArea:!1}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},authorId(){return this.comment.from_user_id},isMine(){return this.currentUserId===this.authorId},canDelete(){return this.isMine||this.currentUserId===this.masterId},focusThisComment(){return parseInt(this.$route.query["comment-id"])===this.comment.id}},methods:{async toggleLike(){if(this.currentUserId){if(!this.liking){this.liking=!0;try{await this.$store.dispatch("comment/toggleLikeMainComment",{ctx:this,type:this.type,id:this.comment.id})}catch(t){}finally{this.liking=!1}}}else this.$channel.$emit("sign-in")},deleteComment(){this.deleting||(this.deleting=!0,this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.$store.dispatch("comment/deleteMainComment",{ctx:this,type:this.type,id:this.comment.id}),this.$emit("delete")}).catch(t=>{this.deleting=!1,"cancel"!==t&&this.$toast.error(t)}))},replyComment(){this.currentUserId?this.showReplyArea=!this.showReplyArea:this.$channel.$emit("sign-in")}}};var l=Object(c.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"def-comment-item",class:{"focused-main-comment":t.focusThisComment},attrs:{id:"comment-"+t.comment.id}},[t._ssrNode('<div class="user">',"</div>",[n("user-card",{attrs:{id:t.comment.from_user_id,zone:t.comment.from_user_zone}},[n("v-img",{staticClass:"avatar",attrs:{src:t.comment.from_user_avatar,avatar:!0,width:48,height:48}})],1)],1),t._ssrNode(" "),t._ssrNode('<div class="body">',"</div>",[t._ssrNode('<div class="header">',"</div>",[t._ssrNode("<a"+t._ssrAttr("href",t.$alias.user(t.comment.from_user_zone))+' target="_blank" class="blue-link">'+t._ssrEscape(t._s(t.comment.from_user_name))+"</a> "+(t.comment.is_owner?"<span>(楼主)</span>":"\x3c!----\x3e")+" "),t.comment.is_leader?n("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"版主"}},[n("i",{staticClass:"iconfont icon-leader"})]):t.comment.is_master?n("el-tooltip",{attrs:{placement:"top",effect:"dark",content:"代行者"}},[n("i",{staticClass:"iconfont icon-master"})]):t._e()],2),t._ssrNode(' <div class="content">'+t._s(t.comment.content)+"</div> "),t._ssrNode('<div class="footer">',"</div>",[t._ssrNode('<span class="floor-count">'+t._ssrEscape("#"+t._s(t.comment.floor_count-1))+"</span> "),n("el-tooltip",{attrs:{content:t.comment.created_at,placement:"top",effect:"dark"}},[n("v-time",{attrs:{datetime:t.comment.created_at}})],1),t._ssrNode(' <button class="like-btn"><i'+t._ssrClass("iconfont",[t.comment.liked?"icon-dianzan-active":"icon-dianzan"])+"></i> "+(t.comment.like_count?"<span>"+t._ssrEscape(t._s(t.comment.like_count))+"</span>":"\x3c!----\x3e")+'</button> <button class="reply-btn">回复</button> '),t.canDelete?t._ssrNode('<button class="delete-btn">',"</button>",[t._ssrNode('<i class="iconfont icon-shanchu"></i>')],2):n("report-dialog",{attrs:{id:t.comment.id,type:t.type+"_comment"}},[n("button",{staticClass:"reply-btn main-comment-report-btn"},[t._v("举报")])])],2),t._ssrNode(" "),n("comment-reply-form",{attrs:{id:t.comment.id,"to-user-id":t.authorId,type:t.type},model:{value:t.showReplyArea,callback:function(e){t.showReplyArea=e},expression:"showReplyArea"}}),t._ssrNode(" "),n("sub-comment-list",{attrs:{"parent-comment":t.comment,type:t.type}})],2)],2)},[],!1,function(t){var e=n(252);e.__inject__&&e.__inject__(t)},null,"8deb9696").exports,h={name:"CreateCommentForm",props:{type:{type:String,required:!0},id:{type:[Number,String],required:!0},masterId:{type:Number,required:!0}},data:()=>({content:""}),computed:{isGuest(){return!this.$store.state.login},submitting(){return this.$store.state.comment.submitting},userAvatar(){return this.isGuest?"https://image.calibur.tv/default/user-avatar":this.$store.state.user.avatar}},methods:{async submit(){if(this.isGuest)return this.$toast.info("继续操作前请先登录"),void this.$channel.$emit("sign-in");if(this.content&&!this.submitting){this.$store.commit("comment/SET_SUBMITTING",{result:!0});try{const t=await this.$store.dispatch("comment/createMainComment",{content:this.content,images:[],type:this.type,id:this.id,ctx:this});this.content="",this.withImage&&this.$refs.uploader.clearFiles(),this.$toast.success(t.message),this.$store.commit("UPDATE_USER_EXP",t.exp),window.__closeImageLazy__||setTimeout(()=>{const e=document.getElementById(`comment-${t.data.id}`);e&&this.$scrollToY(this.$utils.getOffsetTop(e)-200,600)},400),this.$emit("submit")}catch(t){this.$toast.error(t)}finally{this.$store.commit("comment/SET_SUBMITTING",{result:!1})}}},handleTextAreaFocus(){this.isGuest&&this.$channel.$emit("sign-in")}}};var _={name:"CommentMain",components:{CommentCreateForm:Object(c.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"create-comment-form"},[e("v-img",{staticClass:"avatar",attrs:{src:this.userAvatar,width:48,height:48,avatar:!0}}),this._ssrNode(' <div class="main-area"><button class="submit-btn">发表<br>评论</button> <div class="text-wrap"><textarea placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" maxlength="1000"></textarea></div></div>')],2)},[],!1,function(t){var e=n(253);e.__inject__&&e.__inject__(t)},null,"0c39bf82").exports,CommentItem:l},props:{id:{required:!0,type:[Number,String]},type:{required:!0,type:String,validator:t=>~["post","video","image","score","question","answer","role"].indexOf(t)},onlySeeMaster:{type:Boolean,default:!1},masterId:{type:[Number,String],required:!0},emptyText:{type:String,default:"暂无评论，快来抢沙发吧╮(￣▽￣)╭！"},auto:{type:Boolean,default:!1},lazy:{type:Boolean,default:!1},showHeader:{type:Boolean,default:!0}},data:()=>({loading:!1}),computed:{store(){return this.$store.state.comment},list(){return this.store.list},noMore(){return this.store.noMore},total(){return this.store.total}},mounted(){this.auto&&this.$channel.$on(`fire-load-comment-${this.type}-${this.id}`,()=>{this.loadMore(!0)}),this.lazyLoadComment()},methods:{async loadMore(t=!1){if(!this.loading){this.loading=!0;try{await this.$store.dispatch("comment/getMainComments",{ctx:this,type:this.type,id:this.id,onlySeeMaster:this.onlySeeMaster?1:0,firstRequest:t})}catch(t){this.$toast.error(t)}finally{this.loading=!1}}},async lazyLoadComment(){if(!this.lazy)return void this.$nextTick(()=>{this.scrollToReply()});const{query:t}=this.$route;await this.$store.dispatch("comment/getMainComments",{id:this.id,type:this.type,seeReplyId:t["comment-id"],onlySeeMaster:t.only&&parseInt(t.only,10)?1:0}),this.$nextTick(()=>{this.scrollToReply()})},scrollToReply(){const t=this.$route.query["comment-id"];if(!t)return;const e=document.getElementById(`comment-${t}`);e&&this.$nextTick(()=>{this.$scrollToY(this.$utils.getOffsetTop(e)-200,400)})}}};var f=Object(c.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"comment-wrap"}},[t._t("header",[t.showHeader?n("h3",{staticClass:"sub-title"},[t._v("\n      评论"+t._s(t.total?"("+t.total+")":"")+"\n    ")]):t._e(),t._v(" "),n("comment-create-form",{attrs:{id:t.id,type:t.type,"master-id":t.masterId},on:{submit:function(e){return t.$emit("create-main-comment")}}})]),t._ssrNode(" "),t.list.length?t._ssrNode('<div id="comment-list-wrap">',"</div>",t._l(t.list,function(e){return t._ssrNode('<div class="comment-item-wrap">',"</div>",[t._t("comment-item",[n("comment-item",{attrs:{comment:e,type:t.type,"master-id":t.masterId},on:{delete:function(e){return t.$emit("delete-main-comment")}}})],{comment:e})],2)}),0):t.emptyText?t._ssrNode('<p class="no-content">'+t._ssrEscape(t._s(t.emptyText))+"</p>"):t._e(),t._ssrNode(" "),t._ssrNode('<div id="comment-list-footer">',"</div>",[t._ssrNode('<div class="load-more-btn">',"</div>",[t.noMore?t._e():n("el-button",{attrs:{loading:t.loading,type:"info",plain:"",round:""},on:{click:function(e){return t.loadMore(!1)}}},[t._v(t._s(t.loading?"加载中...":"加载更多"))])],1),t._ssrNode(" "),t._t("reply",[t.list.length>=10?n("comment-create-form",{attrs:{id:t.id,type:t.type,"master-id":t.masterId},on:{submit:function(e){return t.$emit("create-main-comment")}}}):t._e()])],2)],2)},[],!1,function(t){var e=n(254);e.__inject__&&e.__inject__(t)},null,"7259fc5b");e.a=f.exports},249:function(t,e,n){"use strict";n.r(e);var r=n(233),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},250:function(t,e,n){"use strict";n.r(e);var r=n(234),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},251:function(t,e,n){"use strict";n.r(e);var r=n(235),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},252:function(t,e,n){"use strict";n.r(e);var r=n(236),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},253:function(t,e,n){"use strict";n.r(e);var r=n(237),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},254:function(t,e,n){"use strict";n.r(e);var r=n(238),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},279:function(t,e,n){"use strict";n.r(e);var r=n(246),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},283:function(t,e,n){"use strict";var r={name:"SocialPanel",props:{isCreator:{required:!0,type:Boolean},isMine:{required:!0,type:Boolean},id:{required:!0,type:Number},type:{required:!0,type:String,validator:t=>~["post","video","image","score","answer","video"].indexOf(t)}},computed:{isAuth(){return this.$store.state.isAuth},isGuest(){return!this.$store.state.login},source(){return this.$store.getters["social/getState"](this.type,this.id)}},methods:{computeTextByAction:t=>"reward"===t?"投食":"like"===t?"喜欢":"mark"===t?"收藏":"操作",toggleAction(t){if(this.isGuest)this.$channel.$emit("sign-in");else if(this.isMine)this.$toast.info(`不能${this.computeTextByAction(t)}自己的内容`);else if("reward"===t){if(this.source.reward)return void this.$toast.info("已投食过");this.$confirm("向TA投食需要消耗你一个团子，是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{this.submitAction("reward")}).catch(()=>{})}else this.submitAction(t)},async submitAction(t){const data=await this.$store.dispatch("social/toggleAction",{type:this.type,id:this.id,action:t});data.success&&this.$emit(`${t}-callback`,{result:data.result})}}},o=n(0);var component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.source?n("div",{staticClass:"what-the-ad-block-fucked-panel"},[t._ssrNode('<div class="dont-block-me-please-buttons">',"</div>",[t._t("default"),t._ssrNode(" "),t.isCreator?n("el-button",{class:{"is-plain":t.source.reward},attrs:{loading:t.source.reward_loading,type:"warning",icon:"iconfont icon-fantuan",round:""},on:{click:function(e){return t.toggleAction("reward")}}},[t._v("\n      "+t._s(t.source.reward?"已投食":"投食")+t._s(t.source.reward_users.total?"  |  "+t.source.reward_users.total:"")+"\n    ")]):t._e(),t._ssrNode(" "),n("el-button",{class:{"is-plain":t.source.like},attrs:{loading:t.source.like_loading,type:"danger",icon:"iconfont icon-like",round:""},on:{click:function(e){return t.toggleAction("like")}}},[t._v("\n      "+t._s(t.source.like?"已喜欢":"喜欢")+t._s(t.source.like_users.total?"  |  "+t.source.like_users.total:"")+"\n    ")]),t._ssrNode(" "),n("el-button",{class:{"is-plain":t.source.mark},attrs:{loading:t.source.mark_loading,type:"success",icon:"iconfont icon-mark",round:""},on:{click:function(e){return t.toggleAction("mark")}}},[t._v("\n      "+t._s(t.source.mark?"已收藏":"收藏")+t._s(t.source.mark_users.total?"  |  "+t.source.mark_users.total:"")+"\n    ")])],2),t._ssrNode(" "),t._ssrNode('<div class="users">',"</div>",[n("ava-dialog",{attrs:{id:t.id,title:t.isCreator?"投食的人":"喜欢的人",action:t.isCreator?"reward":"like",type:t.type}})],1)],2):t._e()},[],!1,function(t){var e=n(279);e.__inject__&&e.__inject__(t)},null,"7ba00a31");e.a=component.exports},332:function(t,e,n){"use strict";n.d(e,"e",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return d}),n.d(e,"f",function(){return m}),n.d(e,"c",function(){return l});const r=(t,{id:e,hash:n,time:time})=>t.$axios.$get(`score/${e}/show`,{params:{hash:n,time:time}}),o=(t,{id:e})=>t.$axios.$get(`score/${e}/edit`),c=(t,{id:e})=>t.$axios.$get("score/check",{params:{id:e}}),d=(t,e)=>t.$axios.$post("score/create",e),m=(t,e)=>t.$axios.$post("score/update",e),l=(t,{id:e})=>t.$axios.$post("score/delete",{id:e})},373:function(t,e){},464:function(t,e,n){"use strict";n.r(e);var r=n(373),o=n.n(r);for(var c in r)"default"!==c&&function(t){n.d(e,t,function(){return r[t]})}(c);e.default=o.a},516:function(t,e,n){"use strict";n.r(e);var r=n(247),o=n(62),c=n(283),d=n(332);const m={lol:"笑点",cry:"泪点",fight:"燃点",moe:"萌点",sound:"音乐",vision:"画面",story:"情节",role:"人设",express:"内涵",style:"美感"},l=Object.keys(m);var h={name:"ScoreShow",validate:({params:t})=>/^\d+$/.test(t.id),components:{CommentMain:r.a,JsonContent:o.a,SocialPanel:c.a},props:{id:{type:String,required:!0}},data:()=>({info:null,bangumi:null,user:null,labelMap:m,columns:l}),computed:{currentUserId(){return this.$store.state.login?this.$store.state.user.id:0},isMine(){return this.currentUserId===this.user.id}},asyncData({app:t,store:e,params:n,query:r,error:o}){const{id:c}=n,{hash:m,time:time}=r;return Object(d.e)(t,{id:c,hash:m,time:time}).then(data=>{const t={},{bangumi:n}=data;return Object.keys(data).forEach(e=>{const n=data[e];t[e]=-1!==l.indexOf(e)?+n:n}),e.commit("social/SET_STATE",{type:"score",id:c,data:{like:data.liked,reward:data.rewarded,mark:data.marked,like_users:data.like_users,mark_users:data.mark_users,reward_users:data.reward_users}}),e.commit("social/SET_STATE",{type:"bangumi",id:n.id,data:{follow:n.followed}}),{user:data.user,bangumi:n,info:t}}).catch(t=>{o({statusCode:t.statusCode,message:t.message})})},head(){return{title:this.info.title}},methods:{deleteScore(){this.$confirm("删除后无法找回, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{try{await Object(d.c)(this,{id:this.info.id}),this.$toast.success("操作成功"),setTimeout(()=>{window.location.reload()},1e3)}catch(t){this.$toast.error(t)}}).catch(()=>{})}}},_=n(0);var component=Object(_.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"score-show"}},[t.info.banner?[n("v-header",{attrs:{type:"pure"}}),t._ssrNode(" "+(t.info.banner.width>1400?'<div class="score-banner full-size"'+t._ssrStyle(null,{backgroundImage:"url("+t.$resize(t.info.banner.url,{width:2e3})+")"},null)+"></div>":"\x3c!----\x3e"))]:n("v-header"),t._ssrNode(" "),t._ssrNode('<div class="center-layout">',"</div>",[t.info.deleted_at?n("el-alert",{attrs:{title:"该内容已被删除",type:"error",center:"","show-icon":""}}):t._e(),t._ssrNode(" "),t.info.banner.width<=1400?n("v-img",{staticClass:"score-banner normal-size",attrs:{src:t.info.banner.url,width:t.info.banner.width,height:t.info.banner.height,full:!0,blur:!0,lazy:!1}}):t._e(),t._ssrNode(" "),t._ssrNode('<div class="score-header">',"</div>",[t._ssrNode("<div>","</div>",[t._ssrNode('<div class="total">'+t._ssrEscape(t._s(t.info.total)+"分")+"</div> "),t.isMine?[n("el-button",{staticClass:"control-btn",attrs:{round:"",plain:"",type:"danger",size:"mini"},on:{click:t.deleteScore}},[t._v("删除")]),t._ssrNode(" "),t._ssrNode("<a"+t._ssrAttr("href",t.$alias.editScore(t.info.id))+">","</a>",[n("el-button",{staticClass:"control-btn",attrs:{round:"",plain:"",type:"primary",size:"mini"}},[t._v("编辑")])],1)]:t._e(),t._ssrNode(" "),t._ssrNode('<div class="title">',"</div>",[t._ssrNode('<h1 class="sub-title">'+t._ssrEscape(t._s(t.info.title))+"</h1> "),t._ssrNode('<div class="user">',"</div>",[t._ssrNode("\n            作者：\n            "),n("user-card",{attrs:{id:t.user.id,zone:t.user.zone}},[n("v-img",{staticClass:"avatar",attrs:{src:t.user.avatar,avatar:!0,width:30,height:30}}),t._v(" "),n("span",{staticClass:"name",domProps:{textContent:t._s(t.user.nickname)}})],1),t._ssrNode("\n             ·  发表于：\n            "),n("el-tooltip",{attrs:{content:t.info.published_at,placement:"top",effect:"dark"}},[n("v-time",{model:{value:t.info.published_at,callback:function(e){t.$set(t.info,"published_at",e)},expression:"info.published_at"}})],1),t._ssrNode(" "+(t.info.like_count?t._ssrEscape("\n               ·  赞："+t._s(t.info.like_count)+"\n            "):"\x3c!----\x3e")+" "+(t.info.comment_count?t._ssrEscape("\n               ·  评论："+t._s(t.info.comment_count)+"\n            "):"\x3c!----\x3e")+"\n             · \n            "),n("report-dialog",{attrs:{id:t.info.id,type:"score"}},[t._v("\n              举报\n            ")])],2)],2)],2),t._ssrNode(" "),t._ssrNode('<div class="star-row">',"</div>",t._l(t.columns,function(e,r){return t._ssrNode('<div class="star-item">',"</div>",[t._ssrNode('<div class="label">'+t._ssrEscape(t._s(t.labelMap[e]))+"</div> "),n("el-tooltip",{attrs:{content:2*t.info[e]+"分",placement:"top",effect:"dark"}},[n("el-rate",{attrs:{disabled:"","allow-half":""},model:{value:t.info[e],callback:function(n){t.$set(t.info,e,n)},expression:"info[item]"}})],1)],2)}),0)],2),t._ssrNode(" "),t._ssrNode('<div class="score-body">',"</div>",[n("json-content",{attrs:{content:t.info.content}})],1),t._ssrNode(" "),n("social-panel",{attrs:{id:t.info.id,"is-creator":t.info.is_creator,"is-mine":t.isMine,type:"score"}}),t._ssrNode(" "),n("v-lazy",[n("comment-main",{attrs:{id:t.info.id,"master-id":t.user.id,lazy:!0,type:"score"}})],1),t._ssrNode(" "),n("bangumi-panel",{attrs:{id:t.bangumi.id,avatar:t.bangumi.avatar,name:t.bangumi.name,summary:t.bangumi.summary}})],2)],2)},[],!1,function(t){var e=n(464);e.__inject__&&e.__inject__(t)},null,"465bfb0e");e.default=component.exports}};
//# sourceMappingURL=_id.chunk.fee3bd11.js.map