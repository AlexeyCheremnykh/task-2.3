$(document).ready(function() {
    $(".event-new__attendees-spinner").spinner();
    $(".event-new__admission-spinner").spinner({
        min: 5,
        max: 2500,
        step: 25,
        start: 1000,
        culture: "en-US",
        numberFormat: "C"        
    });
})