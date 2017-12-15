$(document).ready(function() {
    $(".articles .articles__filter-form .dropdown").select2({
        multiple: true
    });
    $(".articles .articles__filter-form .dropdown").val("").change();
})