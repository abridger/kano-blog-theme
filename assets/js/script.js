jQuery(function(a){function b(){a(".post-list .post .post-image img").each(function(){var b=a(this);b.load(function(){b.parents(".post-image").css({height:"0","padding-bottom":100/b.width()*b.height()+"%"})})});var b=a(".post-list").masonry({itemSelector:".post",isAnimated:!1,gutter:0,columnWidth:1,transitionDuration:0}).imagesLoaded().always(function(){b.masonry("layout")})}function c(){a("pre code").each(function(b,c){hljs.highlightBlock(c);var d=a(this),e=d.html().split(/\n/).length,f=[];for(b=1;b<e;b++)f+='<span class="line">'+b+"</span>";d.parent().addClass("codeblock").append('<div class="lines">'+f+"</div>")})}function d(){a("#wrapper").fitVids()}function e(){if("undefined"!=typeof disqus&&document.getElementById("disqus_thread")){if(window.DISQUS)return DISQUS.reset({reload:!0,config:function(){this.page.identifier=location.pathname,this.page.url=location.origin+location.pathname}});a.ajax({type:"GET",url:"//"+disqus+".disqus.com/embed.js",dataType:"script",cache:!0})}else a(".post-comments").css({display:"none"})}function f(){if("/"!==location.pathname){var a=j.find("article"),b=a.find(".post-reading-time");a.readingTime({readingTimeTarget:b.find(".estimated-reading-time"),wordCountTarget:b.find(".word-count"),error:function(){b.find(".post-reading-time").remove()}})}}function g(){b(),h(),c(),d(),e(),currentMenuFix(),f()}function h(){a('a[href^="'+window.location.origin+'"], .post-image a, .post-title a, .post-more a, .post-meta a, .post-tags a, #pagination a').each(function(){var b=a(this);b.hasClass("rss")||(b.addClass("js-ajax-link"),b.attr("href").indexOf("page")>-1&&b.addClass("js-archive-index"),b.attr("href")==window.location.origin&&b.addClass("js-show-index"),b.attr("href").indexOf("tag")>-1&&b.addClass("js-tag-index"),b.attr("href").indexOf("author")>-1&&b.addClass("js-author-index"))})}var i=a("html"),j=a("body");b(),c(),d(),e(),f(),h();var k=window.History,l=!1,m=a("#ajax-container");return!!k.enabled&&(k.Adapter.bind(window,"statechange",function(){i.addClass("loading");var b=k.getState();a.get(b.url,function(b){var c=a(b),d=a("#ajax-container",c).contents(),e=b.match(/<title>(.*?)<\/title>/)[1];m.fadeOut(500,function(){i.hasClass("push-next")&&(i.removeClass("push-next"),i.addClass("pushed-next")),i.hasClass("push-prev")&&(i.removeClass("push-prev"),i.addClass("pushed-prev")),document.title=a("<textarea/>").html(e).text(),m.html(d),j.removeClass(),j.addClass(a("#body-class").attr("class")),NProgress.done(),m.fadeIn(500),a(document).scrollTop(0),setTimeout(function(){i.removeClass("loading")},50),g(),l=!1})})}),a("body").on("click",".js-ajax-link",function(b){b.preventDefault();var c=a(this);if(c.hasClass("post-nav-item")||c.hasClass("pagination-item")?((c.hasClass("post-nav-next")||c.hasClass("pagination-next"))&&(i.removeClass("pushed-prev"),i.addClass("push-next")),(c.hasClass("post-nav-prev")||c.hasClass("pagination-prev"))&&(i.removeClass("pushed-next"),i.addClass("push-prev"))):(i.removeClass("pushed-next"),i.removeClass("pushed-prev")),l===!1){var d=k.getState(),e=a(this).prop("href"),f=a(this).attr("title")||null;e.replace(/\/$/,"")!==d.url.replace(/\/$/,"")&&(l=!0,i.addClass("loading"),NProgress.start(),k.pushState({},f,e))}}),void a("body").on("click","#post-index .post .js-ajax-link",function(){var b=a(this).parents(".post");b.addClass("initial"),setTimeout(function(){b.addClass("active")},1)}))});