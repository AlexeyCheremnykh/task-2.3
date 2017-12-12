$(document).ready(function() {
    $(".slider").each(function() {
        $(".slider_type-a")
            .slider({
                min: $(this).data("min"),
                max: $(this).data("max"),            
            })
            .slider("float");

        $(".slider_type-b")
            .slider({
                range: "min",            
                min: $(this).data("min"),
                max: $(this).data("max"),
                step: $(this).data("step"),            
                slide: function () {            
                    $(".ui-slider-range", this).css("background", "#4eb7a8");         
                }
            })
            .slider("pips", {
                rest: "label"              
            });
    })
});
