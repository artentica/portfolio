var Map = (function($) {

	var googleMapStyle;
	var googleMapType;
	var googleMapOptions;
	var googleMapIcon;
	var map;

	var init = function() {

		// set src of google map icon for markers
		/*googleMapIcon = 'http://Kabertech.com/assets/img/map-pin.png';*/

		// custom google map styling
		/*googleMapStyle = [
		  {
		    "projectsType": "administrative",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "projectsType": "road",
		    "stylers": [
		      { "visibility": "simple" },
		      { "color": "#393939" }
		    ]
		  },{
		    "elementType": "labels",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "projectsType": "water",
		    "stylers": [
		      { "color": "#303030" }
		    ]
		  },{
		    "projectsType": "landscape",
		    "stylers": [
		      { "color": "#2a2a2a" }
		    ]
		  },{
		    "projectsType": "poi",
		    "stylers": [
		      { "color": "#393939" },
		      { "visibility": "simplified" }
		    ]
		  },{
		    "projectsType": "transit",
		    "elementType": "geometry",
		    "stylers": [
		      { "visibility": "off" }
		    ]
		  },{
		    "projectsType": "administrative",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      { "visibility": "on" },
		      { "color": "#393939" }
		    ]
		  }
		];*/

		// render the map
		renderMap([48.4293972,-4.5514872,17], 12, 'map');
		plotMapPoint(48.4293972,-4.5514872,17,"https://www.google.com/maps/place/352+Rue+Xavier+Grall,+29820+Guilers,+France/@48.4293972,-4.5491805,17z/data=!3m1!4b1!4m2!3m1!1s0x4816bcff5166c919:0x8f661a249c620ab1");

	};

	var renderMap = function(center, zoom, element) {

		// if element doesnt exist we need to bail out
		if($('#' + element).length == 0) return;

		// create a new StyledMapType object, passing it the array of styles, as well as the name to be displayed on the map type control.
		googleMapType = new google.maps.StyledMapType(googleMapStyle, {name: "Artentica"});

		// create a map object, and include the MapTypeId to add to the map type control.
		googleMapOptions = {
			zoom: zoom,
			disableDefaultUI: true,
			mapTypeControl: false,
			zoomControl: false,
			scaleControl: false,
			scrollwheel: false,
			disableDoubleClickZoom: true,
			center: new google.maps.LatLng(center[0],center[1]),
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN, 'Artentica']
			}
		};

		// set up new google map
		map = new google.maps.Map(document.getElementById(element), googleMapOptions);

		// associate the styled map with the MapTypeId and set it to display.
		map.mapTypes.set('Artentica', googleMapType);
		map.setMapTypeId('Artentica');

	}

	var plotMapPoint = function(lat, lng, url) {

		var googleMapMarker = new google.maps.Marker({
			url:url,
			map: map,
			position: new google.maps.LatLng(lat,lng),
			icon: googleMapIcon
		});

		googleMapMarker.setMap(map);

		google.maps.event.addListener(googleMapMarker, 'click', function() {
			window.open(googleMapMarker.url);
		});

	};

	return {
		init: init
	};

}(jQuery));
