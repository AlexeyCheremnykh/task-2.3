import "./__stage-info/event-new__stage-info.js";
import "./__stage-map/event-new__stage-map.js";

$(document).ready(function () {
    $(".event-new__content").tabs();
  
    var currentStage = 0;
    var stage = $(".event-new .stages__stage");
    var buttonNext = $(".event-new .arrow-button_right");
    var buttonPrev = $(".event-new .arrow-button_left");

    // 1st stage init
    $(stage[currentStage]).removeClass("stages__stage_inactive").addClass("stages__stage_active");    

    buttonNext.click(function() {
        if (currentStage < 2) {
            currentStage++;
            
            // stage paint
            $(stage[currentStage]).removeClass("stages__stage_inactive").addClass("stages__stage_active");

            // goto next tab
            $(".event-new__content").tabs(
                "option",
                "active",
                $(".event-new__content").tabs('option', 'active') + 1);
        }

        if (currentStage == 2) {
            $(this).attr("disabled", "disabled");
        }

        if (currentStage == 1) {
            buttonPrev.removeAttr("disabled");
        }
    });

    buttonPrev.click(function () {
        if (currentStage > 0) {
            // stage paint    
            $(stage[currentStage]).removeClass("stages__stage_active").addClass("stages__stage_inactive");
            currentStage--;

            // goto prev tab
            $(".event-new__content").tabs(
                "option",
                "active",
                $(".event-new__content").tabs('option', 'active') - 1);
        }
        
        if (currentStage == 0) {
            $(this).attr("disabled", "disabled");            
        }

        if (currentStage == 1) {
            buttonNext.removeAttr("disabled");
        }
    });
})