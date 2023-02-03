define("jira/field/issue-picker",["jira/ajs/select/multi-select","jira/ajs/list/group-descriptor","jira/ajs/list/item-descriptor","wrm/context-path","jquery","jira/libs/parse-uri"],function(e,s,i,t,n,r){var a=t(),u=e.extend({_formatResponse:function(e){var t=[],u=function(){var e=r(window.location);return e.protocol+"://"+e.authority}();return e&&e.sections&&n(e.sections).each(function(e,r){var o=new s({weight:e,label:r.label,description:r.sub});r.issues&&r.issues.length>0&&n(r.issues).each(function(){o.addItem(new i({highlighted:!0,value:this.key,label:this.key+" - "+this.summaryText,icon:this.img?u+a+this.img:null,html:this.keyHtml+" - "+this.summary}))}),t.push(o)}),t},_getDefaultOptions:function(){return n.extend(!0,this._super(),{ajaxOptions:{formatResponse:this._formatResponse}})},_launchPopup:function(){function e(e,s){return null==e?s:e}var s,i,t,r,o=this;u.callback=function(e){"string"==typeof e&&(e=JSON.parse(e)),o._addMultipleItems(e,!0),o.$field.focus()},r=this.options.ajaxOptions.data,s=a+"/secure/popups/IssuePicker.jspa?",i={singleSelectOnly:"false",decorator:"popup",currentIssue:r.currentIssueKey||"",showSubTasks:e(r.showSubTasks,!1),showSubTasksParent:e(r.showSubTaskParent,!1)},r.currentProjectId&&(i.currentProjectId=r.currentProjectId),s+=n.param(i),t=window.open(s,"IssueSelectorPopup","status=no,resizable=yes,top=100,left=200,width="+this.options.popupWidth+",height="+this.options.popupHeight+",scrollbars=yes,resizable"),t.opener=self,t.focus()},_createFurniture:function(e){var s;this._super(e),s=this._render("popupLink"),this._assignEvents("popupLink",s),this.$container.addClass("jira-issue-picker"),this.$container.addClass("hasIcon"),this.$container.after(s)},handleFreeInput:function(){var e=this.$field.val().toUpperCase().match(/\S+/g);e&&this._addMultipleItems(n.map(e,function(e){return{value:e,label:e}})),this.$field.val("")},_events:{popupLink:{click:function(e){this._launchPopup(),e.preventDefault()}}},_renders:{popupLink:function(){var e=n("<div class='issue-picker-popup' />").attr({title:this.options.popupLinkMessage}),s=n('<span class="aui-icon aui-icon-small aui-iconfont-add"></span>').text(this.options.popupLinkMessage);return e.append(s)}}});return u.callback=null,u}),AJS.namespace("jira.issuepicker",null,require("jira/field/issue-picker")),AJS.namespace("AJS.IssuePicker",null,require("jira/field/issue-picker")),AJS.namespace("JIRA.IssuePicker",null,require("jira/field/issue-picker"));