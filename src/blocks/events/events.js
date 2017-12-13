$(document).ready(function() {
    $(".events .toggle").click(function() {
        if ($(this).hasClass("toggle_on")) {
            $(".events .location").hide();
        } else {
            $(".events .location").show(); 
        }
    });

    $(".events .tick-box").click(function() {        
        if ($("input[type='checkbox']", this).prop("checked")) {
            $(".events__calendar").show();
        } else {
            $(".events__calendar").hide();
        }
    });
})