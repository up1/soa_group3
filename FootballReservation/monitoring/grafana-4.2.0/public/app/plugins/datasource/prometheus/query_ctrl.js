/*! grafana - v4.2.0 - 2017-03-22
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","app/plugins/sdk"],function(a,b){"use strict";var c,d,e,f,g=this&&this.__extends||function(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)};b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a}],execute:function(){f=function(a){function b(b,c,e){var f=a.call(this,b,c)||this;f.templateSrv=e;var g=f.target;return g.expr=g.expr||"",g.intervalFactor=g.intervalFactor||2,f.metric="",f.resolutions=d.default.map([1,2,3,4,5,10],function(a){return{factor:a,label:"1/"+a}}),b.$on("typeahead-updated",function(){f.$scope.$apply(function(){f.target.expr+=f.target.metric,f.metric="",f.refreshMetricData()})}),f.suggestMetrics=function(a,b){console.log(f),f.datasource.performSuggestQuery(a).then(b)},f.updateLink(),f}return g(b,a),b.$inject=["$scope","$injector","templateSrv"],b.prototype.refreshMetricData=function(){d.default.isEqual(this.oldTarget,this.target)||(this.oldTarget=c.default.copy(this.target),this.panelCtrl.refresh(),this.updateLink())},b.prototype.updateLink=function(){var a=this.panelCtrl.range;if(a){var b=Math.ceil((a.to.valueOf()-a.from.valueOf())/1e3),c=a.to.utc().format("YYYY-MM-DD HH:mm"),d={expr:this.templateSrv.replace(this.target.expr,this.panelCtrl.panel.scopedVars,this.datasource.interpolateQueryExpr),range_input:b+"s",end_input:c,step_input:this.target.step,stacked:this.panelCtrl.panel.stack,tab:0},e=encodeURIComponent(JSON.stringify([d]));this.linkToPrometheus=this.datasource.directUrl+"/graph#"+e}},b}(e.QueryCtrl),f.templateUrl="partials/query.editor.html",a("PrometheusQueryCtrl",f)}}});