/*! grafana - v4.2.0 - 2017-03-22
 * Copyright (c) 2017 Torkel Ödegaard; Licensed Apache-2.0 */

System.register(["lodash","app/core/core_module","tether-drop"],function(a,b){"use strict";function c(){return{restrict:"E",template:'<i class="fa fa-info-circle"></i>',transclude:!0,link:function(a,b,c,e,g){var h=c.offset||"0 -10px",i=c.position||"right middle",j="drop-help drop-hide-out-of-bounds",k="hover";b.addClass("gf-form-help-icon"),c.wide&&(j+=" drop-wide"),c.mode&&b.addClass("gf-form-help-icon--"+c.mode),g(function(c,e){var g=document.createElement("div");d.default.each(c,function(a){g.appendChild(a)});var l=new f.default({target:b[0],content:g,position:i,classes:j,openOn:k,hoverOpenDelay:400,tetherOptions:{offset:h}}),m=a.$on("$destroy",function(){l.destroy(),m()})})}}}b&&b.id;a("infoPopover",c);var d,e,f;return{setters:[function(a){d=a},function(a){e=a},function(a){f=a}],execute:function(){e.default.directive("infoPopover",c)}}});