$(document).ready(function() {
    $(".calendar__datepicker").datepicker({
        dayNamesMin: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],        
        showOtherMonths: true,
        onSelect: function() {
            var currentDate = $(".calendar__datepicker").datepicker("getDate");
            $(".calendar__day").text($.datepicker.formatDate("d", currentDate));
        },
        /*onChangeMonthYear: function (year, month, inst) {   
            $(".calendar__datepicker").datepicker("setDate", month + "/" + "1" +"/" + year);
            $(".calendar__day").text(1); 
        }   */        
    });
    var currentDate = $(".calendar__datepicker").datepicker("getDate"); //??????
    $(".calendar__day").text($.datepicker.formatDate("d", currentDate)); 
    
    $(".calendar__today").click(function() {
        $(".calendar__datepicker").datepicker("setDate", currentDate);
        $(".calendar__day").text($.datepicker.formatDate("d", currentDate)); 
    });
})