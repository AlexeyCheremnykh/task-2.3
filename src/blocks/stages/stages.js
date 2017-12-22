$(document).ready(function () {
    $(".stages").each(function() {
        var currentStage = $(this);
        $(".stages__stage", currentStage).click(function() {
            var i = $(this).index();
            var lastIndex = $(".stages__stage", currentStage).last().index();
            for (j = i; j <= lastIndex; j++) {
                $($(".stages__stage", currentStage).get(j))
                    .addClass("stages__stage_inactive")
                    .removeClass("stages__stage_active");
            }        
            while (i >= 0) {            
                $($(".stages__stage", currentStage).get(i))
                    .addClass("stages__stage_active")
                    .removeClass("stages__stage_inactive");
                i = i - 1;    
            }    
        });
    });
})