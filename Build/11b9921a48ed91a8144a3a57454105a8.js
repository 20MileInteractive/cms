(function(t,i,s){"use strict";Foundation.libs.section={name:"section",version:"4.0.8",settings:{deep_linking:!1,one_up:!0,callback:function(){}},init:function(t,i,s){return this.scope=t||this.scope,Foundation.inherit(this,"throttle data_options"),"string"!=typeof i?(this.set_active_from_hash(),this.events(),!0):this[i].call(this,s)},events:function(){var e=this;t(this.scope).on("click.fndtn.section","[data-section] .title",function(i){var s=t(this);s.closest("[data-section]"),e.toggle_active.call(this,i,e)}),t(i).on("resize.fndtn.section",e.throttle(function(){e.resize.call(this)},30)).on("hashchange",function(){e.settings.toggled||(e.set_active_from_hash(),t(this).trigger("resize"))}).trigger("resize"),t(s).on("click.fndtn.section",function(i){1>t(i.target).closest(".title").length&&t("[data-section].vertical-nav, [data-section].horizontal-nav").find("section, .section").removeClass("active").attr("style","")})},toggle_active:function(i,s){var e=t(this),n=e.closest("section, .section"),o=n.find(".content"),a=n.closest("[data-section]"),s=Foundation.libs.section,c=t.extend({},s.settings,s.data_options(a));if(s.settings.toggled=!0,!c.deep_linking&&o.length>0&&i.preventDefault(),n.hasClass("active"))(s.small(a)||s.is_vertical(a)||s.is_horizontal(a)||s.is_accordion(a))&&n.removeClass("active").attr("style","");else{var l=null,r=s.outerHeight(n.find(".title"));(s.small(a)||c.one_up)&&(l=e.closest("[data-section]").find("section.active, .section.active"),s.small(a)?l.attr("style",""):l.attr("style","visibility: hidden; padding-top: "+r+"px;")),s.small(a)?n.attr("style",""):n.css("padding-top",r),n.addClass("active"),null!==l&&l.removeClass("active").attr("style","")}setTimeout(function(){s.settings.toggled=!1},300),c.callback()},resize:function(){var i=t("[data-section]"),s=Foundation.libs.section;i.each(function(){var i=t(this),e=i.find("section.active, .section.active");if(t.extend({},s.settings,s.data_options(i)),e.length>1)e.not(":first").removeClass("active").attr("style","");else if(1>e.length&&!s.is_vertical(i)&&!s.is_horizontal(i)&&!s.is_accordion(i)){var n=i.find("section, .section").first();n.addClass("active"),s.small(i)?n.attr("style",""):n.css("padding-top",s.outerHeight(n.find(".title")))}s.small(i)?e.attr("style",""):e.css("padding-top",s.outerHeight(e.find(".title"))),s.position_titles(i),s.is_horizontal(i)&&!s.small(i)?s.position_content(i):s.position_content(i,!1)})},is_vertical:function(t){return t.hasClass("vertical-nav")},is_horizontal:function(t){return t.hasClass("horizontal-nav")},is_accordion:function(t){return t.hasClass("accordion")},set_active_from_hash:function(){var s=i.location.hash.substring(1),e=t("[data-section]"),n=this;e.each(function(){var i=t(this),e=t.extend({},n.settings,n.data_options(i));s.length>0&&e.deep_linking&&(i.find("section, .section").attr("style","").removeClass("active"),i.find('.content[data-slug="'+s+'"]').closest("section, .section").addClass("active"))})},position_titles:function(i,s){var e=i.find(".title"),n=0,o=this;"boolean"==typeof s?e.attr("style",""):e.each(function(){t(this).css("left",n),n+=o.outerWidth(t(this))})},position_content:function(i,s){var e=i.find(".title"),n=i.find(".content"),o=this;"boolean"==typeof s?(n.attr("style",""),i.attr("style","")):(i.find("section, .section").each(function(){var i=t(this).find(".title"),s=t(this).find(".content");s.css({left:i.position().left-1,top:o.outerHeight(i)-2})}),"function"==typeof Zepto?i.height(this.outerHeight(e.first())):i.height(this.outerHeight(e.first())-2))},small:function(i){return t.extend({},this.settings,this.data_options(i)),i&&i.hasClass("tabs")?!1:i&&this.is_accordion(i)?!0:t("html").hasClass("lt-ie9")?!0:t("html").hasClass("ie8compat")?!0:768>t(this.scope).width()},off:function(){t(this.scope).off(".fndtn.section"),t(i).off(".fndtn.section"),t(s).off(".fndtn.section")}}})(Foundation.zj,this,this.document);
;