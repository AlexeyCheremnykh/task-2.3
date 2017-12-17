$(document).ready(function() {
    $(".events .toggle").click(function() {
        if ($(this).hasClass("toggle_on")) {
            $(".events .location").slideUp(250);
        } else {
            $(".events .location").slideDown(250); 
        }
    });

    $(".events .tick-box").click(function() {        
        if ($("input[type='checkbox']", this).prop("checked")) {
            $(".events__calendar").slideDown(250);
        } else {
            $(".events__calendar").slideUp(250);
        }
    });
})