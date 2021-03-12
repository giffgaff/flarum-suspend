module.exports=function(t){var e={};function s(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=14)}([function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat.Model},function(t,e){t.exports=flarum.core.compat["models/User"]},function(t,e){t.exports=flarum.core.compat["utils/Stream"]},function(t,e){t.exports=flarum.core.compat["components/Button"]},function(t,e){t.exports=flarum.core.compat["components/Modal"]},function(t,e){t.exports=flarum.core.compat["components/Notification"]},function(t,e){t.exports=flarum.core.compat["utils/withAttr"]},function(t,e){t.exports=flarum.core.compat.extend},function(t,e){t.exports=flarum.core.compat["utils/UserControls"]},function(t,e){t.exports=flarum.core.compat["components/Badge"]},function(t,e){t.exports=flarum.core.compat["utils/ItemList"]},function(t,e){t.exports=flarum.core.compat["helpers/fullTime"]},function(t,e){t.exports=flarum.core},function(t,e,s){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}return t}).apply(this,arguments)}s.r(e);var a=s(8),r=s(0),o=s.n(r),i=s(9),u=s.n(i),p=s(4),l=s.n(p),d=s(10),c=s.n(d),f=s(1),h=s.n(f),y=s(2),b=s.n(y);function g(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var v=s(5),_=s.n(v),x=s(3),w=s.n(x),R=s(7),M=s.n(R),N=s(11),S=s.n(N),U=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var s=e.prototype;return s.oninit=function(e){t.prototype.oninit.call(this,e);var s=this.attrs.user.suspendedUntil(),n=this.attrs.user.suspendReason(),a=this.attrs.user.suspendReasonRaw(),r=this.attrs.user.suspendMessage(),o=this.attrs.user.suspendMessageRaw(),i=null;new Date>s&&(s=null),s&&(i=9999===s.getFullYear()?"indefinitely":"limited"),this.status=w()(i),this.reason=w()(n),this.reasonRaw=w()(a),this.message=w()(r),this.messageRaw=w()(o),this.daysRemaining=w()("limited"===i&&1-dayjs().diff(s,"days")),this.editingReason=!n,this.editingMessage=!r},s.className=function(){return"SuspendUserModal Modal--medium"},s.title=function(){return app.translator.trans("flarum-suspend.forum.suspend_user.title",{user:this.attrs.user})},s.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("div",{className:"Form-group"},m("label",null,app.translator.trans("flarum-suspend.forum.suspend_user.status_heading")),m("div",null,this.formItems().toArray())),m("div",{className:"Form-group"},m(l.a,{className:"Button Button--primary",loading:this.loading,type:"submit"},app.translator.trans("flarum-suspend.forum.suspend_user.submit_button")))))},s.formItems=function(){var t=this,e=new S.a;e.add("not-suspended",m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:!this.status(),value:"",onclick:M()("value",this.status)}),app.translator.trans("flarum-suspend.forum.suspend_user.not_suspended_label")),100),e.add("indefinitely",m("label",{className:"checkbox"},m("input",{type:"radio",name:"status",checked:"indefinitely"===this.status(),value:"indefinitely",onclick:M()("value",this.status)}),app.translator.trans("flarum-suspend.forum.suspend_user.indefinitely_label")),90),e.add("time-suspension",m("label",{className:"checkbox SuspendUserModal-days"},m("input",{type:"radio",name:"status",checked:"limited"===this.status(),value:"limited",onclick:function(e){t.status(e.target.value),m.redraw.sync(),t.$(".SuspendUserModal-days-input input").select(),e.redraw=!1}}),app.translator.trans("flarum-suspend.forum.suspend_user.limited_time_label"),"limited"===this.status()?m("div",{className:"SuspendUserModal-days-input"},m("input",{type:"number",min:"0",value:this.daysRemaining(),oninput:M()("value",this.daysRemaining),className:"FormControl"}),app.translator.trans("flarum-suspend.forum.suspend_user.limited_time_days_text")):""),80);var s=this.editingReason?m("textarea",{className:"FormControl",bidi:this.reasonRaw,placeholder:"optional",rows:"2"}):m("div",{className:"Suspend-content",onclick:this.editReason.bind(this)},m.trust(this.reason()));e.add("reason",m("label",null,app.translator.trans("flarum-suspend.forum.suspend_user.reason"),s),70);var n=this.editingMessage?m("textarea",{className:"FormControl",bidi:this.messageRaw,placeholder:"optional",rows:"2"}):m("div",{className:"Suspend-content",onclick:this.editMessage.bind(this)},m.trust(this.message()));return e.add("message",m("label",null,app.translator.trans("flarum-suspend.forum.suspend_user.display_message"),n),60),e},s.onsubmit=function(t){var e=this;t.preventDefault(),this.loading=!0;var s=null;switch(this.status()){case"indefinitely":s=new Date("2038-01-01");break;case"limited":s=dayjs().add(this.daysRemaining(),"days").toDate()}this.attrs.user.save({suspendedUntil:s,suspendReasonRaw:this.reasonRaw(),suspendMessageRaw:this.messageRaw()}).then((function(){return e.hide()}),this.loaded.bind(this))},s.editReason=function(){this.editingReason=!0,m.redraw()},s.editMessage=function(){this.editingMessage=!0,m.redraw()},e}(_.a),j=s(6),k=s.n(j),O=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var s=e.prototype;return s.icon=function(){return"fas fa-ban"},s.href=function(){return app.route.user(this.attrs.notification.subject())},s.content=function(){var t=this.attrs.notification,e=t.content(),s=dayjs(e).from(t.createdAt(),!0);return app.translator.trans("flarum-suspend.forum.notifications.user_suspended_text",{user:t.fromUser(),timeReadable:s})},e}(k.a),F=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var s=e.prototype;return s.icon=function(){return"fas fa-ban"},s.href=function(){return app.route.user(this.attrs.notification.subject())},s.content=function(){var t=this.attrs.notification;return app.translator.trans("flarum-suspend.forum.notifications.user_unsuspended_text",{user:t.fromUser()})},e}(k.a),B=s(12),C=s.n(B),P=function(t){function e(){return t.apply(this,arguments)||this}g(e,t);var s=e.prototype;return s.oninit=function(e){t.prototype.oninit.call(this,e),this.message=this.attrs.message,this.until=this.attrs.until},s.className=function(){return"SuspendInfoModal Modal"},s.title=function(){return app.translator.trans("flarum-suspend.forum.infomodal.title")},s.content=function(){var t=2038===this.until.getFullYear()?app.translator.trans("flarum-suspend.forum.infomodal.indefinite"):app.translator.trans("flarum-suspend.forum.infomodal.limited",{date:C()(this.until)});return m("div",{className:"Modal-body"},m("div",{className:"Form Form--centered"},m("p",{className:"helpText"},m.trust(this.message)),m("p",{className:"helpText"},t),m("div",{className:"Form-group"},m(l.a,{className:"Button Button--primary Button--block",onclick:this.hide.bind(this)},app.translator.trans("flarum-suspend.forum.infomodal.dismiss_button")))))},e}(_.a),D=function(){return new Promise((function(){setTimeout((function(){if(o.a.session.user){var t=o.a.session.user.suspendMessage(),e=o.a.session.user.suspendedUntil();t&&o.a.modal.show(P,{message:t,until:e})}}),1e3)}))},T={"suspend/components/suspendUserModal":U,"suspend/components/suspensionInfoModal":P,"suspend/components/UserSuspendedNotification":O,"suspend/components/UserUnsuspendedNotification":F,"suspend/checkForSuspension":D},I=s(13);o.a.initializers.add("flarum-suspend",(function(){o.a.notificationComponents.userSuspended=O,o.a.notificationComponents.userUnsuspended=F,b.a.prototype.canSuspend=h.a.attribute("canSuspend"),b.a.prototype.suspendedUntil=h.a.attribute("suspendedUntil",h.a.transformDate),b.a.prototype.suspendReason=h.a.attribute("suspendReason"),b.a.prototype.suspendReasonRaw=h.a.attribute("suspendReasonRaw"),b.a.prototype.suspendMessage=h.a.attribute("suspendMessage"),b.a.prototype.suspendMessageRaw=h.a.attribute("suspendMessageRaw"),Object(a.extend)(u.a,"moderationControls",(function(t,e){e.canSuspend()&&t.add("suspend",l.a.component({icon:"fas fa-ban",onclick:function(){return o.a.modal.show(U,{user:e})}},o.a.translator.trans("flarum-suspend.forum.user_controls.suspend_button")))})),Object(a.extend)(b.a.prototype,"badges",(function(t){var e=this.suspendedUntil();new Date<e&&t.add("suspended",c.a.component({icon:"fas fa-ban",type:"suspended",label:o.a.translator.trans("flarum-suspend.forum.user_badge.suspended_tooltip")}))})),D()})),n(I.compat,T)}]);
//# sourceMappingURL=forum.js.map