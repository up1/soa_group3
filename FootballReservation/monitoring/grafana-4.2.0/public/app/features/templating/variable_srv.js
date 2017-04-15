/*! grafana - v4.2.0 - 2017-03-22
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["angular","lodash","app/core/core_module","./variable"],function(a,b){"use strict";var c,d,e,f,g;b&&b.id;return{setters:[function(a){c=a},function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){g=function(){function a(a,b,c,d,e){this.$rootScope=a,this.$q=b,this.$location=c,this.$injector=d,this.templateSrv=e,a.$on("refresh",this.onDashboardRefresh.bind(this),a),a.$on("template-variable-value-updated",this.updateUrlParamsWithCurrentVariables.bind(this),a)}return a.$inject=["$rootScope","$q","$location","$injector","templateSrv"],a.prototype.init=function(a){var b=this;this.dashboard=a,this.variables=a.templating.list=a.templating.list.map(this.createVariableFromModel.bind(this)),this.templateSrv.init(this.variables);for(var c=0,d=this.variables;c<d.length;c++){var e=d[c];e.initLock=this.$q.defer()}var f=this.$location.search();return this.$q.all(this.variables.map(function(a){return b.processVariable(a,f)})).then(function(){b.templateSrv.updateTemplateData()})},a.prototype.onDashboardRefresh=function(){var a=this,b=this.variables.filter(function(a){return 2===a.refresh}).map(function(b){var d=b.options.slice();return b.updateOptions().then(a.variableUpdated.bind(a,b)).then(function(){c.default.toJson(d)!==c.default.toJson(b.options)&&a.$rootScope.$emit("template-variable-value-updated")})});return this.$q.all(b)},a.prototype.processVariable=function(a,b){for(var c=this,d=[],e=0,f=this.variables;e<f.length;e++){var g=f[e];a.dependsOn(g)&&d.push(g.initLock.promise)}return this.$q.all(d).then(function(){var c=b["var-"+a.name];return void 0!==c?a.setValueFromUrl(c).then(a.initLock.resolve):1===a.refresh||2===a.refresh?a.updateOptions().then(a.initLock.resolve):void a.initLock.resolve()}).finally(function(){c.templateSrv.variableInitialized(a),delete a.initLock})},a.prototype.createVariableFromModel=function(a){var b=f.variableTypes[a.type].ctor;if(!b)throw"Unable to find variable constructor for "+a.type;var c=this.$injector.instantiate(b,{model:a});return c},a.prototype.addVariable=function(a){var b=this.createVariableFromModel(a);return this.variables.push(this.createVariableFromModel(b)),b},a.prototype.updateOptions=function(a){return a.updateOptions()},a.prototype.variableUpdated=function(a){var b=this;if(a.initLock)return this.$q.when();var c=d.default.map(this.variables,function(c){if(c!==a)return c.dependsOn(a)?b.updateOptions(c):void 0});return this.$q.all(c)},a.prototype.selectOptionsForCurrentValue=function(a){var b,c,e,f,g=[];for(b=0;b<a.options.length;b++)if(f=a.options[b],f.selected=!1,d.default.isArray(a.current.value))for(c=0;c<a.current.value.length;c++)e=a.current.value[c],f.value===e&&(f.selected=!0,g.push(f));else f.value===a.current.value&&(f.selected=!0,g.push(f));return g},a.prototype.validateVariableSelectionState=function(a){if(a.current||(a.current={}),d.default.isArray(a.current.value)){var b=this.selectOptionsForCurrentValue(a);return b=0===b.length?a.options[0]:{value:d.default.map(b,function(a){return a.value}),text:d.default.map(b,function(a){return a.text}).join(" + ")},a.setValue(b)}var c=d.default.find(a.options,{text:a.current.text});return c?a.setValue(c):a.options.length?a.setValue(a.options[0]):Promise.resolve()},a.prototype.setOptionFromUrl=function(a,b){var c=this.$q.when();return a.refresh&&(c=a.updateOptions()),c.then(function(){var c=d.default.find(a.options,function(a){return a.text===b||a.value===b});return c=c||{text:b,value:b},a.setValue(c)})},a.prototype.setOptionAsCurrent=function(a,b){return a.current=d.default.cloneDeep(b),d.default.isArray(a.current.text)&&(a.current.text=a.current.text.join(" + ")),this.selectOptionsForCurrentValue(a),this.variableUpdated(a)},a.prototype.updateUrlParamsWithCurrentVariables=function(){var a=this.$location.search();d.default.each(a,function(b,c){0===c.indexOf("var-")&&delete a[c]}),this.templateSrv.fillVariableValuesForUrl(a),this.$location.search(a)},a}(),a("VariableSrv",g),e.default.service("variableSrv",g)}}});