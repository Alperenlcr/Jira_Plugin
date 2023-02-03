define("jira/ajs/select/security/default-comment-security-level-model",["jira/issue","jira/analytics","jira/lib/class","jira/util/strings","jquery","wrm/context-path"],function(e,t,n,i,s,a){"use strict";return n.extend({DEFAULT_COMMENT_SECURITY_LEVEL_KEY_PREFIX:"default-comment-security-level-",_currentDefault:null,_preferenceKey:null,init:function(e){this.NOT_SELECTED_DEFAULT=new this.LvlObj("",""),this._preferenceKey=this.DEFAULT_COMMENT_SECURITY_LEVEL_KEY_PREFIX+e},LvlObj:function(e,t){this.level=e,this.levelName=t},_isLvlObjValid:function(e){return!(void 0===e.level||void 0===e.levelName)},_getDefaultStoreRequest:function(e){return s.ajax({url:a()+"/rest/api/2/mypreferences?key="+this._preferenceKey,type:"PUT",contentType:"application/json",dataType:"json",data:JSON.stringify(e)})},_getDefaultLoadRequest:function(){return s.ajax({url:a()+"/rest/api/2/mypreferences?key="+this._preferenceKey,type:"GET",contentType:"application/json",dataType:"json"})},updateDefault:function(e,t,n){this._sendDefaultChangedAnalytics(e),this._getDefaultStoreRequest(e).done(function(){this._currentDefault=e,t()}.bind(this)).fail(function(e){n(e)})},getDefault:function(e,t){null==this._currentDefault?this._getDefaultLoadRequest().done(function(t){this._isLvlObjValid(t)?this._currentDefault=t:this._currentDefault=this.NOT_SELECTED_DEFAULT,e(this._currentDefault)}.bind(this)).fail(function(n){404===n.status?(this._currentDefault=this.NOT_SELECTED_DEFAULT,e(this._currentDefault)):t(n)}.bind(this)):e(this._currentDefault)},getCurrentDefault:function(){return this._currentDefault},_sendDefaultChangedAnalytics:function(n){var s=i.hashCode(this._preferenceKey);t.send({name:"jira.issue.comment.level.default.set",data:{newDefaultlevelHash:i.hashCode(n.level.toString()),projectIdHash:s,issueIdHash:i.hashCode(e.getIssueId().toString()),wasSetToByAll:""===n.level}})}})});