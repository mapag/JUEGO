var mapa;
var latlng = new google.maps.LatLng(-34.455939, -58.623700);
var stylez = [{
    featureType: "all",
    elementType: "all",
    stylers: [{
        saturation: -10
            }]
        }];
var mapOptions = {
    zoom: 12,
    center: latlng,
    scrollwheel: false,
    scaleControl: true,
    disableDefaultUI: true,
    mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
    }
};
mapa = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
var geocoder_map = new google.maps.Geocoder();
var address = 'UTN Pacheco';
geocoder_map.geocode({
    'address': address
}, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
        mapa.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
            map: mapa,
            position: mapa.getCenter()
        });
    } else {
        alert("Geocode was not successful for the following reason: " + status);
    }
});
var mapType = new google.maps.StyledMapType(stylez, {
    name: "Grayscale"
});
mapa.mapTypes.set('gMap', mapType);
mapa.setMapTypeId('gMap');