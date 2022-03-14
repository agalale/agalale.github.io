

$(document).ready(function(){
    $(".abs_link").parent("li").find("blockquote").hide();
    $(".abs_link").click(function(){
        if ( $(this).hasClass("open") ) {
          $(this).parent("li").find("blockquote").hide();
        } else {
          $(this).parent("li").find("blockquote").show();
        }
        $(this).toggleClass("open");
    });
});
