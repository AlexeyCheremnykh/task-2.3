$(document).ready(function () {
    // Select category placeholder
    $(".event-new__options .dropdown").select2({
        placeholder: "Select category",
        minimumResultsForSearch: -1
    });
    
    // Limited attendees
    $(".event-new__attendees-number").spinner({
        min: 0
    });
    $(".event-new__attendees-number-wrapper").hide();

    $(".event-new__option_attendees .tick-box").click(function () {
        if ($("input[type='checkbox']", this).prop("checked")) {
            $(".event-new__attendees-number-wrapper").slideDown(150);;
        } else {
            $(".event-new__attendees-number-wrapper").slideUp(150);
        }
    });

    // Event Image
    $(".event-new__add-image").hide();
    $(".event-new__option_image .tick-box").click(function () {
        if ($("input[type='checkbox']", this).prop("checked")) {
            $(".event-new__add-image").slideDown(200);
        } else {
            $(".event-new__add-image").slideUp(200);
        }
    });

    // Speakers
    $(".event-new__speakers").hide();
    $(".event-new__option_speakers .tick-box").click(function () {
        if ($("input[type='checkbox']", this).prop("checked")) {
            $(".event-new__speakers").slideDown(250);
        } else {
            $(".event-new__speakers").slideUp(250);
        }
    });
})