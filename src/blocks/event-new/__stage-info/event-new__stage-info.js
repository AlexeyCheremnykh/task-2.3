$(document).ready(function() {
    // Limited attendees
    $(".event-new__attendees-spinner").spinner({
        min: 0
    });
    $(".event-new__attendees-spinner-wrapper").hide();

    $(".event-new__option_attendees .tick-box").click(function() {
        if ($("input[type='checkbox']", this).prop("checked")) {
            $(".event-new__attendees-spinner-wrapper").show();
        } else {
            $(".event-new__attendees-spinner-wrapper").hide();
        }
    });

    // Speakers
    $(".event-new__speakers").hide();
    $(".event-new__option_speakers .tick-box").click(function() {
        if ($("input[type='checkbox']", this).prop("checked")) {
            $(".event-new__speakers").show();
        } else {
            $(".event-new__speakers").hide();
        }
    });
})