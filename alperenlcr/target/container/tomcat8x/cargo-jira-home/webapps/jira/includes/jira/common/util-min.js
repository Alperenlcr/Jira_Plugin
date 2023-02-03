!function(){var e=require("jira/util/events");AJS.namespace("JIRA.bind",null,e.bind),AJS.namespace("JIRA.unbind",null,e.unbind),AJS.namespace("JIRA.one",null,e.one),AJS.namespace("JIRA.trigger",null,e.trigger)}(),function(){var e=require("jira/util/users/logged-in-user");AJS.namespace("JIRA.isAdmin",null,e.isAdmin),AJS.namespace("JIRA.isSysadmin",null,e.isSysadmin)}(),function(){var e=require("jira/util/elements");AJS.namespace("AJS.elementIsFocused",null,e.elementIsFocused),AJS.namespace("AJS.consumesKeyboardEvents",null,e.consumesKeyboardEvents)}(),function(){var e=require("jira/util/browser");AJS.namespace("AJS.canAccessIframe",null,e.canAccessIframe),AJS.namespace("AJS.isSelenium",null,e.isSelenium),AJS.namespace("AJS.reloadViaWindowLocation",null,e.reloadViaWindowLocation),AJS.namespace("AJS.enableKeyboardScrolling",null,e.enableKeyboardScrolling),AJS.namespace("AJS.disableKeyboardScrolling",null,e.disableKeyboardScrolling)}(),function(){var e=require("jira/util/objects");AJS.namespace("begetObject",window,e.begetObject)}(),function(){var e=require("jira/util/forms");AJS.namespace("submitOnEnter",window,e.submitOnEnter),AJS.namespace("submitOnCtrlEnter",window,e.submitOnCtrlEnter),AJS.namespace("getMultiSelectValues",window,e.getMultiSelectValues),AJS.namespace("getMultiSelectValuesAsArray",window,e.getMultiSelectValuesAsArray)}(),function(){var e=require("jira/data/cookie");AJS.namespace("saveToConglomerateCookie",window,e.saveToConglomerate),AJS.namespace("readFromConglomerateCookie",window,e.readFromConglomerate),AJS.namespace("eraseFromConglomerateCookie",window,e.eraseFromConglomerate),AJS.namespace("getValueFromCongolmerate",window,e.getValueFromCongolmerate),AJS.namespace("addOrAppendToValue",window,e.addOrAppendToValue),AJS.namespace("getCookieValue",window,e.getValue),AJS.namespace("saveCookie",window,e.save),AJS.namespace("readCookie",window,e.read),AJS.namespace("eraseCookie",window,e.erase)}(),jQuery.noConflict(),jQuery.ajaxSettings.traditional=!0,function(){"contextPath"in window||AJS.namespace("contextPath",window,require("wrm/context-path")())}(),function(){var e=require("jira/ajs/layer/layer-constants");AJS.namespace("AJS.LEFT",null,e.LEFT),AJS.namespace("AJS.RIGHT",null,e.RIGHT),AJS.namespace("AJS.ACTIVE_CLASS",null,e.ACTIVE_CLASS),AJS.namespace("AJS.BOX_SHADOW_CLASS",null,e.BOX_SHADOW_CLASS),AJS.namespace("AJS.LOADING_CLASS",null,e.LOADING_CLASS),AJS.namespace("AJS.INTELLIGENT_GUESS",null,e.INTELLIGENT_GUESS)}(),function(){var e=/[.*+?|^$()[\]{\\]/g;RegExp.escape=function(a){return a.replace(e,"\\$&")}}(),function(){var e=require("jquery");e.readData=function(a){var n={},o="";return e(a).children().each(function(a){a%2?n[o]=e.trim(e(this).text()):o=e.trim(e(this).text())}).remove(),e(a).remove(),n}}(),String.prototype.escapejQuerySelector=function(){return this.replace(/([:.])/g,"\\$1")},AJS.extractBodyFromResponse=function(e){var a=e.match(/<body[^>]*>([\S\s]*)<\/body[^>]*>/);return a&&a.length>0?a[1]:e},AJS.isDevMode=function(){return AJS.Meta.get("dev-mode")},function(){function e(e,a){try{return e()}catch(e){return a}}AJS.namespace("tryIt",window,e)}(),function(){function e(e,a){for(var n=0,o=e.length;n<o;n++)if(e[n]==a)return!0;return!1}AJS.namespace("arrayContains",window,e)}(),function(){function e(e,a){n("#"+e).addClass(a)}function a(e,a){n("#"+e).removeClass(a)}var n=require("jquery");AJS.namespace("addClassName",window,e),AJS.namespace("removeClassName",window,a)}(),function(){function e(e){var a=document.getElementById(e);return a.value?e+"="+encodeURIComponent(a.value):""}function a(a){for(var n="",o=0;o<a.length;o++)n=n+"&"+e(a[o]);return n}AJS.namespace("getEscapedFieldValue",window,e),AJS.namespace("getEscapedFieldValues",window,a)}(),function(){function e(e){o.toggleVisibility(e)}var a=require("jquery"),n=require("jira/data/cookie"),o={toggleVisibility:function(e){var o=document.getElementById(e);o&&("1"==n.readFromConglomerateCookie("jira.conglomerate.cookie",e,"1")?(o.style.display="none",a("#"+e+"header").removeClass("headerOpened").addClass("headerClosed"),n.saveToConglomerateCookie("jira.conglomerate.cookie",e,"0")):(o.style.display="",a("#"+e+"header").removeClass("headerClosed").addClass("headerOpened"),n.eraseFromConglomerateCookie("jira.conglomerate.cookie",e)))}};AJS.namespace("GuiPrefs",window,o),AJS.namespace("toggle",window,e)}(),function(){function e(e,a){var n=document.getElementById(e),o=document.getElementById(a);"none"===n.style.display?(o.style.display="none",n.style.display="block",r.saveToConglomerateCookie("jira.viewissue.cong.cookie",e,"1"),r.saveToConglomerateCookie("jira.viewissue.cong.cookie",a,"0")):(n.style.display="none",o.style.display="block",r.saveToConglomerateCookie("jira.viewissue.cong.cookie",a,"1"),r.saveToConglomerateCookie("jira.viewissue.cong.cookie",e,"0"))}function a(e,a,n){null==n&&(n="1");var i=document.getElementById(e);i&&("1"!=r.readFromConglomerateCookie(a,e,n)?(i.style.display="none",o("#"+e+"header").removeClass("headerOpened").addClass("headerClosed")):(i.style.display="",o("#"+e+"header").removeClass("headerClosed").addClass("headerOpened")))}function n(e){a(e,"jira.conglomerate.cookie","1")}var o=require("jquery"),r=require("jira/data/cookie");AJS.namespace("toggleDivsWithCookie",window,e),AJS.namespace("restoreDivFromCookie",window,a),AJS.namespace("restore",window,n)}(),function(){var e=require("jira/tables/legacy-table-utils");AJS.namespace("recolourSimpleTableRows",window,e.recolourSimpleTableRows),AJS.namespace("recolourTableRows",window,e.recolourTableRows)}(),function(){var e=require("jira/util/strings");AJS.namespace("htmlEscape",window,e.escapeHtml),AJS.namespace("AJS.escapeHTML",null,e.escapeHtml)}(),function(){AJS.namespace("atl_token",window,require("jira/util/urls").atl_token)}();