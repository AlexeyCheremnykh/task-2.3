/*mport "./__place/event-new__place.js";
import "./__options/event-new__options.js";

$(document).ready(function () {
    $(".event-new__content").tabs();

    var NUM_OF_STAGES = 4;
    var currentStage = 0;
    var stage = $(".event-new .stages__stage");
    var buttonNext = $(".event-new .arrow-button_right");
    var buttonPrev = $(".event-new .arrow-button_left");

    // 1st stage init
    $(stage[currentStage]).removeClass("stages__stage_inactive").addClass("stages__stage_active");

    // Hide finish button
    $(".event-new__finish").hide();

    buttonNext.click(function() {
        if (currentStage < NUM_OF_STAGES - 1) {
            currentStage++;

            // stage paint
            $(stage[currentStage]).removeClass("stages__stage_inactive").addClass("stages__stage_active");

            // goto next tab
            $(".event-new__content").tabs(
                "option",
                "active",
                $(".event-new__content").tabs('option', 'active') + 1);
        }

        if (currentStage == NUM_OF_STAGES - 1) {
            $(this).attr("disabled", "disabled");
            $(".event-new__finish").show();
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

        if (currentStage == NUM_OF_STAGES - 2) {
            buttonNext.removeAttr("disabled");
            $(".event-new__finish").hide();
        }
    });
})*/