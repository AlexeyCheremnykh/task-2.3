$(document).ready(function(){
    $(".toggle").click(function() {
        if ($(this).hasClass("toggle_on")) {            
            $(this).addClass("toggle_off").removeClass("toggle_on");
            return
        }
        if ($(this).hasClass("toggle_off")) {           
            $(this).addClass("toggle_on").removeClass("toggle_off");
            return
        }        
    })
})