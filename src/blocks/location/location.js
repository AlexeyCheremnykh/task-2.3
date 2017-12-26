$(document).ready(function() {
    /*var geocoder = new google.maps.Geocoder;
    var infowindow = new google.maps.InfoWindow;*/

    $(".location__map")
        .gmap3({            
            address: $(".location__map").data("address"),
            zoom: 14            
        })
        .marker({
            address: $(".location__map").data("address"),
            draggable: true,
            icon: {
                url: "img/map-marker-icon.png",                
                anchor: new google.maps.Point(20, 56),                
            }                   
        })
        /*.on({    // Плохо определяет
            dragend: function(marker, event) {
                marker.getPosition();                
                geocoder.geocode({ 'location': marker.getPosition()}, function (results, status) {
                    if (status === 'OK') {
                        if (results[1]) {                            
                            infowindow.setContent(results[1].formatted_address);
                            infowindow.open(this, marker);
                        } else {
                            window.alert('No results found');
                        }
                    } else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
                $(".location__address").text();
            } 
        });*/
});