require(["jira/util/logger","wrm/data","jquery","jira/flag"],function(s,a,e,i){"use strict";e(function(){var c=a.claim("jira.webresources:user-message-flags.adminLockout")||{};if(c.noprojects){var n=JIRA.Templates.Flags.Admin,r=n.adminIssueAccessFlagTitle({}),l=n.adminIssueAccessFlagBody({manageAccessUrl:c.manageAccessUrl}),g=i.showWarningMsg(r,l,{dismissalKey:c.flagId});e(g).find("a").on("click",function(){g.dismiss()})}s.trace("admin.flags.done")})});