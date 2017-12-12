$(document).ready(function() {
    $(".location__map")
        .gmap3({            
            address: $(".location__map").data("address"),
            zoom: 14            
        })
        .marker({
            address: $(".location__map").data("address"),
            icon: {
                url: "img/map-marker-icon.png",                
                anchor: new google.maps.Point(20, 56)
            }                      
        })
});