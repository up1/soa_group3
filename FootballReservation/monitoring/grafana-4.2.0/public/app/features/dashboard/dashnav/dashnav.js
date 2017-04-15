/*! grafana - v4.2.0 - 2017-03-22
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","moment","angular"],function(a,b){"use strict";function c(){return{restrict:"E",templateUrl:"public/app/features/dashboard/dashnav/dashnav.html",controller:g,transclude:!0}}b&&b.id;a("dashNavDirective",c);var d,e,f,g;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b,c,g,h,i,j,k){a.init=function(){if(a.onAppEvent("save-dashboard",a.saveDashboard),a.onAppEvent("delete-dashboard",a.deleteDashboard),a.onAppEvent("quick-snapshot",a.quickSnapshot),a.showSettingsMenu=a.dashboardMeta.canEdit||a.contextSrv.isEditor,a.dashboardMeta.isSnapshot){a.showSettingsMenu=!1;var b=a.dashboardMeta;a.titleTooltip="Created: &nbsp;"+e.default(b.created).calendar(),b.expires&&(a.titleTooltip+="<br>Expires: &nbsp;"+e.default(b.expires).fromNow()+"<br>")}},a.openEditView=function(a){var b=d.default.extend(g.search(),{editview:a});g.search(b)},a.showHelpModal=function(){a.appEvent("show-modal",{templateHtml:"<help-modal></help-modal>"})},a.starDashboard=function(){a.dashboardMeta.isStarred?i.delete("/api/user/stars/dashboard/"+a.dashboard.id).then(function(){a.dashboardMeta.isStarred=!1}):i.post("/api/user/stars/dashboard/"+a.dashboard.id).then(function(){a.dashboardMeta.isStarred=!0})},a.shareDashboard=function(b){var c=a.$new();c.tabIndex=b,a.appEvent("show-modal",{src:"public/app/features/dashboard/partials/shareModal.html",scope:c})},a.quickSnapshot=function(){a.shareDashboard(1)},a.openSearch=function(){a.appEvent("show-dash-search")},a.hideTooltip=function(b){f.default.element(b.currentTarget).tooltip("hide"),a.appEvent("hide-dash-search")},a.makeEditable=function(){return a.dashboard.editable=!0,c.saveDashboard({makeEditable:!0,overwrite:!1}).then(function(){window.location.href=window.location.href})},a.saveDashboard=function(a){return c.saveDashboard(a)},a.deleteDashboard=function(){var b="",c=a.dashboard.title,d=a.dashboard.rows.reduce(function(a,b){return a+=b.panels.filter(function(a){return a.alert}).length},0);d>0&&(b="DELETE",c="This dashboad contains "+d+" alerts. Deleting this dashboad will also delete those alerts"),a.appEvent("confirm-modal",{title:"Delete",text:"Do you want to delete this dashboard?",text2:c,icon:"fa-trash",confirmText:b,yesText:"Delete",onConfirm:function(){a.dashboardMeta.canSave=!1,a.deleteDashboardConfirmed()}})},a.deleteDashboardConfirmed=function(){i.delete("/api/dashboards/db/"+a.dashboardMeta.slug).then(function(){a.appEvent("alert-success",["Dashboard Deleted",a.dashboard.title+" has been deleted"]),g.url("/")})},a.saveDashboardAs=function(){return c.saveDashboardAs()},a.viewJson=function(){var b=a.dashboard.getSaveModelClone(),c=f.default.toJson(b,!0),d="data:application/json;charset=utf-8,"+encodeURIComponent(c);window.open(d)},a.snapshot=function(){a.dashboard.snapshot=!0,b.$broadcast("refresh"),j(function(){a.dashboard.snapshot=!1,a.appEvent("dashboard-snapshot-cleanup")},1e3)},a.editJson=function(){var b=a.dashboard.getSaveModelClone();a.appEvent("show-json-editor",{object:b})},a.stopPlaylist=function(){h.stop(1)},a.init()}return a.$inject=["$scope","$rootScope","dashboardSrv","$location","playlistSrv","backendSrv","$timeout","datasourceSrv"],a}(),a("DashNavCtrl",g),f.default.module("grafana.directives").directive("dashnav",c)}}});