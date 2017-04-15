/*! grafana - v4.2.0 - 2017-03-22
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

define(["lodash"],function(a){"use strict";function b(a,b,c){this.datasource=a,this.query=b,this.range=c.timeRange()}return b.prototype.process=function(){var a=/^label_values\((?:(.+),\s*)?([a-zA-Z_][a-zA-Z0-9_]+)\)$/,b=/^metrics\((.+)\)$/,c=/^query_result\((.+)\)$/,d=this.query.match(a);if(d)return d[1]?this.labelValuesQuery(d[2],d[1]):this.labelValuesQuery(d[2],null);var e=this.query.match(b);if(e)return this.metricNameQuery(e[1]);var f=this.query.match(c);return f?this.queryResultQuery(f[1]):this.metricNameAndLabelsQuery(this.query)},b.prototype.labelValuesQuery=function(b,c){var d;if(c){var e=this.datasource.getPrometheusTime(this.range.from,!1),f=this.datasource.getPrometheusTime(this.range.to,!0);return d="/api/v1/series?match[]="+encodeURIComponent(c)+"&start="+e+"&end="+f,this.datasource._request("GET",d).then(function(c){return a.map(c.data.data,function(a){return{text:a[b],expandable:!0}})})}return d="/api/v1/label/"+b+"/values",this.datasource._request("GET",d).then(function(b){return a.map(b.data.data,function(a){return{text:a}})})},b.prototype.metricNameQuery=function(b){var c="/api/v1/label/__name__/values";return this.datasource._request("GET",c).then(function(c){return a.chain(c.data.data).filter(function(a){var c=new RegExp(b);return c.test(a)}).map(function(a){return{text:a,expandable:!0}}).value()})},b.prototype.queryResultQuery=function(b){var c=this.datasource.getPrometheusTime(this.range.to,!0),d="/api/v1/query?query="+encodeURIComponent(b)+"&time="+c;return this.datasource._request("GET",d).then(function(b){return a.map(b.data.data.result,function(b){var c=b.metric.__name__||"";return delete b.metric.__name__,c+="{"+a.map(b.metric,function(a,b){return b+'="'+a+'"'}).join(",")+"}",c+=" "+b.value[1]+" "+1e3*b.value[0],{text:c,expandable:!0}})})},b.prototype.metricNameAndLabelsQuery=function(b){var c=this.datasource.getPrometheusTime(this.range.from,!1),d=this.datasource.getPrometheusTime(this.range.to,!0),e="/api/v1/series?match[]="+encodeURIComponent(b)+"&start="+c+"&end="+d,f=this;return this.datasource._request("GET",e).then(function(b){return a.map(b.data.data,function(a){return{text:f.datasource.getOriginalMetricName(a),expandable:!0}})})},b});