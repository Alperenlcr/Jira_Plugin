define("jira/project/browse/projecttypecollection",["backbone"],function(e){"use strict";return e.Collection.extend({unselect:function(){this.filter(function(e){return e.get("selected")}).forEach(function(e){e.set("selected",!1,{silent:!0})})},getSelected:function(){return this.find(function(e){return e.get("selected")})},selectProjectType:function(e){var t=this.get(e);return!!t&&(this.unselect(),t.set("selected",!0),t)}})});