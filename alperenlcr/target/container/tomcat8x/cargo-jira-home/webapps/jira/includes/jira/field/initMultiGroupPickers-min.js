define("jira/field/init-multi-group-pickers",["jquery","wrm/context-path","jira/ajs/select/multi-select","jira/util/events/reasons","jira/util/events/types","jira/util/events","jira/field/group-picker-util"],function(e,t,i,r,a,s,n){"use strict";function u(t){t.find(".js-default-multi-group-picker").each(function(){var t=e(this),r=!0===t.data("show-labels"),a=t.data("user-name");new i({element:this,itemAttrDisplayed:"label",showDropdownButton:!1,ajaxOptions:{data:function(e){return{userName:a,query:e,exclude:t.val()}},url:l+"/rest/api/2/groups/picker",query:!0,formatResponse:r?n.formatResponseWithLabels:n.formatResponse}})})}var l=t();s.bind(a.NEW_CONTENT_ADDED,function(e,t,i){i!==r.panelRefreshed&&u(t)})});