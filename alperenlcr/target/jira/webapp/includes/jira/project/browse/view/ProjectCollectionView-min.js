define("jira/project/browse/projectcollectionview",["jira/analytics","jira/util/formatter","jira/util/data/meta","marionette","jquery","jira/project/browse/projectview","jira/project/browse/projecttypesservice","jira/project/project-type-keys","jira/util/users/logged-in-user","jira/util/data/meta"],function(e,t,i,o,r,c,s,n,a,p){"use strict";return o.CompositeView.extend({template:function(e){return e.isAdmin=a.isSysadmin()||a.isAdmin(),e.isAdminMode=p.get("in-admin-mode"),JIRA.Templates.Project.Browse.projects(e)},itemView:c,itemViewOptions:function(){return{filters:this.model,hasArchivedProjects:!!this.model.filterByCategory("archived",this.collection.originalCollection).length}},itemEvents:{"project-view.click-project-name":function(e,t,i){var o=this.collection.indexOf(i);this.trigger("project-view.click-project-name",i,o)},"project-view.click-lead-user":function(e,t,i){var o=this.collection.indexOf(i);this.trigger("project-view.click-lead-user",i,o)},"project-view.click-category":function(e,t,i){var o=this.collection.indexOf(i);this.trigger("project-view.click-category",i,o)},"project-view.click-url":function(e,t,i){var o=this.collection.indexOf(i);this.trigger("project-view.click-url",i,o)}},emptyView:o.ItemView.extend({events:{"click .empty-state-add-project-button":"_handleAddProjectClicked"},shouldUseCallToActionTemplate:function(){var e=[n.SOFTWARE,n.SERVICE_DESK,n.BUSINESS];return this.options.filters.get("projectType")&&"all"===this.options.filters.get("category").id&&""===this.options.filters.get("contains")&&-1!==e.indexOf(this.options.filters.get("projectType").key)},getTemplate:function(){return this.options.hasArchivedProjects||"archived"!==this.options.filters.get("category").id?this.shouldUseCallToActionTemplate()?JIRA.Templates.Project.Browse.emptyRowWithCallToAction:JIRA.Templates.Project.Browse.emptyRow:JIRA.Templates.Project.Browse.archivedProjectsEmptyState},onRender:function(){this.unwrapTemplate()},_handleAddProjectClicked:function(t){e.send({name:"projects.browse.empty.state.add.projects.clicked",properties:{projectTypeKey:r(t.target).data("project-type")}})},serializeData:function(){var e={};if(this.shouldUseCallToActionTemplate()){var o=this.options.filters.get("projectType").key;o===n.SOFTWARE?e={headerText:t.I18n.getText("browse.projects.software.projects.title"),descriptionText:t.I18n.getText("browse.projects.software.projects.description"),callToActionText:t.I18n.getText("browse.projects.create.new.project.link"),projectType:o}:o===n.SERVICE_DESK?e={headerText:t.I18n.getText("browse.projects.servicedesk.projects.title"),descriptionText:t.I18n.getText("browse.projects.servicedesk.projects.description"),callToActionText:t.I18n.getText("browse.projects.create.new.project.link"),projectType:o}:o===n.BUSINESS&&(e={imageClassName:"create-business-project-image",headerText:t.I18n.getText("browse.projects.business.projects.not.created"),descriptionText:t.I18n.getText("browse.projects.business.projects.description"),callToActionText:t.I18n.getText("browse.projects.create.new.project.link"),projectType:o})}return r.extend({isAdmin:i.get("is-admin"),adminMode:p.get("in-admin-mode")},e)}}),itemViewContainer:"tbody",onRender:function(){this.unwrapTemplate()}})});