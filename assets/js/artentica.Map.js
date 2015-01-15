
function initialize() {


   var styles = [
  {
    "featureType": "administrative",
    "stylers": [
      { "visibility": "simplified" }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#393939" }
    ]
  },{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#303030" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "color": "#2a2a2a" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#393939" }
    ]
  },{
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      { "visibility": "on" },
      { "color": "#393939" }
    ]
  },{
    "featureType": "landscape",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#2a2a2a" }
    ]
  },{
    "featureType": "administrative.neighborhood",
    "elementType": "labels",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#4c4c4b" }
    ]
  },{
  },{
    "featureType": "administrative.locality",
    "stylers": [
      { "visibility": "simplified" },
      { "color": "#838383" }
    ]
  },{
    "featureType": "transit",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
  }
];
   var styledMap = new google.maps.StyledMapType(styles,
    {name: "Artentica Map"});
  var mapOptions = {
    zoom: 12,
    disableDefaultUI: false,

      zoomControl: true,
    zoomControlOptions: {
        style: google.maps.ZoomControlStyle.LARGE,
        position: google.maps.ControlPosition.LEFT_CENTER
    },
            panControl: false,
			mapTypeControl: false,
			scaleControl: false,
			scrollwheel: false,
			disableDoubleClickZoom: false,
            streetViewControl: true,
      mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    },
    center: new google.maps.LatLng(48.407055, -4.495554,17)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  setMarkers(map, beaches);
}
var image1 = 'assets/img/map-blue.png';
var image2 = 'assets/img/map-green.png';
var image3 = 'assets/img/map-purple.png';
var beaches = [
  ['Where I live', 48.429923, -4.5513709, 4],
  ['Where I Work', 48.4068511, -4.418686, 3],
  ['Where I Study', 48.407055, -4.495554, 2]
];
var image;
function setMarkers(map, locations) {


  for (var i = 0; i < locations.length; i++) {
    var beach = locations[i];
    var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
      switch(beach[0]) {
    case 'Where I live':
        image = image1;
        break;
    case 'Where I Work':
        image = image2;
        break;
    case 'Where I Study':
        image = image3;
        break;
}
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: beach[0],
        zIndex: beach[3],
        icon: image
    });
  }
}

google.maps.event.addDomListener(window, 'load', initialize);
