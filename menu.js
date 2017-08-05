$(document).ready(function(){
    // Main menu.
    $("img.tab").mouseover(function() { 
        var src = $(this).attr("src").match(/[^\.]+/) + "_over.png";
        $(this).attr("src", src);
    }).mouseout(function() {
        var src = $(this).attr("src").replace("_over.png", ".png");
        $(this).attr("src", src);
    });
    
    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            (new Image()).src = this;
        });
    }
    preload(['img/tab_illustrations_over.png','img/tab_conceptart_over.png','img/tab_contact_over.png', 'img/tab_gamedev_over.png', 'img/home/home_links_behance_over.png', 'img/home/home_links_linkedin_over.png']);
    
    // Fancybox Stuff.
    
    $(".fancybox").fancybox({
        padding : 0,
        helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.95)'
                }
            },
            title: {
                type: 'outside'
            }
        },
        beforeLoad: function() {
            if (!$(this.element).attr('title')) {
                return;
            }
            
            this.title = '<div class="captiontitle">' + $(this.element).attr('title') + '</div>'
                + '<div class="captionyear">' + $(this.element).attr('year') + '</div>'
                + '<div class="captiontext">' + $(this.element).attr('caption') + '</div>'
                
            if (!$(this.element).attr('link')) {
                return;
            }
            this.title += '<div class="captionlink"><a href="' + $(this.element).attr('linkref') + '" target="_blank">' + $(this.element).attr('link') + '</a></div>'
        }
    });
    
    /*$(".fancybox").attr('rel', 'gallery').fancybox({
        padding : 0
    });*/
});
