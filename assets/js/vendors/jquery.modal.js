/**
  RG ModalJQ - just an ordinary and simple modal with jQuery javascript
  @version v1.0.0
  @author Fayearth a.k.a eRGe
**/
!function(i,s){"function"==typeof define&&define.amd?define(["jquery"],s):s(i.jQuery)}(this,function(o,i){"use strict";var t={classNameModal:"modal",classNameShow:"is-visible"},e=function(i,s){this.$el=o(i),this.options=o.extend(!0,{},t,s),this.init()};e.prototype={constructor:e,hide:function(){this.$el.trigger("modal.hide").removeClass(this.options.classNameShow),o("body").removeClass("show-modal")},init:function(){this.id=this.$el.attr("id"),o(document).on("click",'[data-modal="'+this.id+'"]',o.proxy(this,"onClick")),o('a[href^="#close"]',this.$el).on("click",o.proxy(this,"onClickClose"))},onClick:function(i){o(this.options.classNameModal).removeClass(this.options.classNameShow),this.show(),i.preventDefault()},onClickClose:function(i){this.hide(),i.preventDefault()},show:function(i){this.$el.addClass(this.options.classNameShow),o("body").addClass("show-modal"),setTimeout(function(){this.$el.trigger("modal.show")}.bind(this),5)}},o.fn.modal=function(s){return this.each(function(){var i;if(o.data(this,"modal")){if("string"==typeof s)switch(i=o.data(this,"modal"),s){case"hide":i.hide();break;case"show":i.show()}}else o.data(this,"modal",new e(this,s))})},o.fn.modal.defaults=t,o.fn.modal.Modal=e});
