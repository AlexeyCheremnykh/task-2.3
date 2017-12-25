$(document).ready(function() {
    var marker;
    function geocodePosition(pos) {
        var geocoder = new google.maps.Geocoder();        
        geocoder.geocode({
            latLng: pos
        }, function (responses) {
            if (responses && responses.length > 0) {
                marker.formatted_address = responses[0].formatted_address;
            } else {
                marker.formatted_address = "Cannot determine address at this location.";
            }
            infowindow.setContent(marker.formatted_address + "<br>coordinates: " + marker.getPosition().toUrlValue(6));
            infowindow.open(map, marker);
        });
    }

    google.maps.event.addListener(marker, "dragend", function() {
        geocodePosition(marker.getPosition());
    });
})
