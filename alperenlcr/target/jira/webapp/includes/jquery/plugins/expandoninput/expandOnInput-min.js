!function(t){function i(){var i=t(this),e=this;setTimeout(function(){i.keyup(),e.scrollTop=e.scrollHeight},0)}function e(){var s=t(this),a="border-box"===(s.css("boxSizing")||s.css("-mozBoxSizing")||s.css("-webkitBoxSizing")||s.css("-msBoxSizing"));this.scrollHeight;var h,r=parseInt(s.css("maxHeight"),10)||s.data("expandOnInput_maxHeight")||t(window).height()-160;if(a){var o=s.outerHeight();h=Math.max(o+this.scrollHeight-this.clientHeight,o)}else{var c=s.height();h=Math.max(this.scrollHeight-(s.innerHeight()-c),c)}if(h<r)s.css({overflow:"hidden",height:h+"px"});else{var l=this.selectionStart;s.css({"overflow-y":"auto",height:r+"px"}),s.unbind(n,e),s.unbind("paste",i),this.selectionStart!==l&&(this.selectionStart=l,this.selectionEnd=l),h=r}if(s.trigger("expandedOnInput"),!s.data("hasFixedParent")){var d=t(window),g=d.scrollTop(),u=s.offset().top+h-d.height()+29;g<u&&d.scrollTop(u)}s.trigger("stalkerHeightUpdated")}var n="input keyup";t.fn.expandOnInput=function(s){var a=this.filter("textarea");return a.unbind(n,e).bind(n,e),(t.browser.mozilla||t.browser.msie)&&a.unbind("paste",i).bind("paste",i),a.unbind("refreshInputHeight").bind("refreshInputHeight",function(){t(this).css("height",""),e.call(this)}),a.data("expandOnInput_maxHeight",s),a.each(function(){var i=t(this);i.each(function(){var i=t(this);i.data("hasFixedParent",!!i.hasFixedParent())}),""!==i.val()&&e.call(this)}),this}}(jQuery);