define('jira/backbone/backbone-paginator', [
    'backbone',
    'underscore',
    'atlassian/libs/factories/backbone.paginator-2.0.2'
], function(Backbone, _, PaginatorFactory) {
    return PaginatorFactory(_, Backbone);
});

AJS.namespace('Backbone.PageableCollection', null, require('jira/backbone/backbone-paginator'));
