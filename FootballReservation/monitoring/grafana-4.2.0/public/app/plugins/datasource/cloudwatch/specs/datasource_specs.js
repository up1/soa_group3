/*! grafana - v4.2.0 - 2017-03-22
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["../datasource","test/lib/common","test/specs/helpers"],function(a,b){"use strict";var c,d,e;b&&b.id;return{setters:[function(a){e=a},function(a){c=a},function(a){d=a}],execute:function(){c.describe("CloudWatchDatasource",function(){function a(a,d){c.describe("metricFindQuery "+a,function(){var e={};e.setup=function(d){c.beforeEach(function(){d(),b.backendSrv.datasourceRequest=function(a){return e.request=a,b.$q.when({data:e.requestResponse})},b.ds.metricFindQuery(a).then(function(a){e.result=a}),b.$rootScope.$apply()})},d(e)})}var b=new d.default.ServiceTestContext,f={jsonData:{defaultRegion:"us-east-1",access:"proxy"}};c.beforeEach(c.angularMocks.module("grafana.core")),c.beforeEach(c.angularMocks.module("grafana.services")),c.beforeEach(c.angularMocks.module("grafana.controllers")),c.beforeEach(b.providePhase(["templateSrv","backendSrv"])),c.beforeEach(c.angularMocks.inject(function(a,c,d,g){b.$q=a,b.$httpBackend=d,b.$rootScope=c,b.ds=g.instantiate(e.CloudWatchDatasource,{instanceSettings:f}),d.when("GET",/\.html$/).respond("")})),c.describe("When performing CloudWatch query",function(){var a,d={range:{from:"now-1h",to:"now"},targets:[{region:"us-east-1",namespace:"AWS/EC2",metricName:"CPUUtilization",dimensions:{InstanceId:"i-12345678"},statistics:["Average"],period:300}]},e={Datapoints:[{Average:1,Timestamp:"Wed Dec 31 1969 16:00:00 GMT-0800 (PST)"},{Average:2,Timestamp:"Wed Dec 31 1969 16:05:00 GMT-0800 (PST)"},{Average:5,Timestamp:"Wed Dec 31 1969 16:15:00 GMT-0800 (PST)"}],Label:"CPUUtilization"};c.beforeEach(function(){b.backendSrv.datasourceRequest=function(c){return a=c,b.$q.when({data:e})}}),c.it("should generate the correct query",function(e){b.ds.query(d).then(function(){var b=a.data.parameters;c.expect(b.namespace).to.be(d.targets[0].namespace),c.expect(b.metricName).to.be(d.targets[0].metricName),c.expect(b.dimensions[0].Name).to.be(Object.keys(d.targets[0].dimensions)[0]),c.expect(b.dimensions[0].Value).to.be(d.targets[0].dimensions[Object.keys(d.targets[0].dimensions)[0]]),c.expect(b.statistics).to.eql(d.targets[0].statistics),c.expect(b.period).to.be(d.targets[0].period),e()}),b.$rootScope.$apply()}),c.it("should generate the correct query with interval variable",function(d){b.templateSrv.data={period:"10m"};var e={range:{from:"now-1h",to:"now"},targets:[{region:"us-east-1",namespace:"AWS/EC2",metricName:"CPUUtilization",dimensions:{InstanceId:"i-12345678"},statistics:["Average"],period:"[[period]]"}]};b.ds.query(e).then(function(){var b=a.data.parameters;c.expect(b.period).to.be(600),d()}),b.$rootScope.$apply()}),c.it("should return series list",function(a){b.ds.query(d).then(function(b){c.expect(b.data[0].target).to.be("CPUUtilization_Average"),c.expect(b.data[0].datapoints[0][0]).to.be(e.Datapoints[0].Average),a()}),b.$rootScope.$apply()}),c.it("should return null for missing data point",function(a){b.ds.query(d).then(function(b){c.expect(b.data[0].datapoints[2][0]).to.be(null),a()}),b.$rootScope.$apply()}),c.it("should generate the correct targets by expanding template variables",function(){var a={variables:[{name:"instance_id",options:[{text:"i-23456789",value:"i-23456789",selected:!1},{text:"i-34567890",value:"i-34567890",selected:!0}]}],replace:function(a,b){return"$instance_id"===a&&"i-34567890"===b.instance_id.text?"i-34567890":""},getVariableName:function(a){return"instance_id"},variableExists:function(a){return!0},containsVariable:function(a,b){return a.indexOf("$"+b)!==-1}},d=[{region:"us-east-1",namespace:"AWS/EC2",metricName:"CPUUtilization",dimensions:{InstanceId:"$instance_id"},statistics:["Average"],period:300}],e=b.ds.expandTemplateVariable(d,{},a);c.expect(e[0].dimensions.InstanceId).to.be("i-34567890")})}),c.describe("When performing CloudWatch query for extended statistics",function(){var a,d={range:{from:"now-1h",to:"now"},targets:[{region:"us-east-1",namespace:"AWS/ApplicationELB",metricName:"TargetResponseTime",dimensions:{LoadBalancer:"lb",TargetGroup:"tg"},statistics:["p90.00"],period:300}]},e={Datapoints:[{ExtendedStatistics:{"p90.00":1},Timestamp:"Wed Dec 31 1969 16:00:00 GMT-0800 (PST)"},{ExtendedStatistics:{"p90.00":2},Timestamp:"Wed Dec 31 1969 16:05:00 GMT-0800 (PST)"},{ExtendedStatistics:{"p90.00":5},Timestamp:"Wed Dec 31 1969 16:15:00 GMT-0800 (PST)"}],Label:"TargetResponseTime"};c.beforeEach(function(){b.backendSrv.datasourceRequest=function(c){return a=c,b.$q.when({data:e})}}),c.it("should return series list",function(a){b.ds.query(d).then(function(b){c.expect(b.data[0].target).to.be("TargetResponseTime_p90.00"),c.expect(b.data[0].datapoints[0][0]).to.be(e.Datapoints[0].ExtendedStatistics["p90.00"]),a()}),b.$rootScope.$apply()})}),a("regions()",function(a){a.setup(function(){a.requestResponse=[{text:"us-east-1"}]}),c.it("should call __GetRegions and return result",function(){c.expect(a.result[0].text).to.contain("us-east-1"),c.expect(a.request.data.action).to.be("__GetRegions")})}),a("namespaces()",function(a){a.setup(function(){a.requestResponse=[{text:"AWS/EC2"}]}),c.it("should call __GetNamespaces and return result",function(){c.expect(a.result[0].text).to.contain("AWS/EC2"),c.expect(a.request.data.action).to.be("__GetNamespaces")})}),a("metrics(AWS/EC2)",function(a){a.setup(function(){a.requestResponse=[{text:"CPUUtilization"}]}),c.it("should call __GetMetrics and return result",function(){c.expect(a.result[0].text).to.be("CPUUtilization"),c.expect(a.request.data.action).to.be("__GetMetrics")})}),a("dimension_keys(AWS/EC2)",function(a){a.setup(function(){a.requestResponse=[{text:"InstanceId"}]}),c.it("should call __GetDimensions and return result",function(){c.expect(a.result[0].text).to.be("InstanceId"),c.expect(a.request.data.action).to.be("__GetDimensions")})}),a("dimension_values(us-east-1,AWS/EC2,CPUUtilization,InstanceId)",function(a){a.setup(function(){a.requestResponse={Metrics:[{Namespace:"AWS/EC2",MetricName:"CPUUtilization",Dimensions:[{Name:"InstanceId",Value:"i-12345678"}]}]}}),c.it("should call __ListMetrics and return result",function(){c.expect(a.result[0].text).to.be("i-12345678"),c.expect(a.request.data.action).to.be("ListMetrics")})})})}}});