/*var map, foodMap ;
    var infowindow;
    var pos;
    function test () {
    var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: pos,
        radius: 500,
        type: ['restaurant']
      }, callback);
}

initMap()

    function initMap() {
       var pyrmont = {lat: 25.7617, lng: -80.1918};
       var pyrmont3 = {lat: 25.7622, lng: -80.1918};

     map = new google.maps.Map(document.getElementById('map'), {
       center: pyrmont,
       zoom: 15
     });

    foodMap = new google.maps.Map(document.getElementById('foodMap'), {
      center: pyrmont3,
      zoom: 13
    });

   
      infowindow = new google.maps.InfoWindow();
      
      if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(function(position) {
          pos = {
           lat: position.coords.latitude,
           lng: position.coords.longitude
         };
         //infoWindow.setPosition(pos);
         //infoWindow.setContent('Location found.');
         //infoWindow.open(map);
         map.setCenter(pos);
         foodMap.setCenter(pos);
         test()
       }, function() {
         handleLocationError(true, infoWindow, map.getCenter());
       });
     } else {
       // Browser doesn't support Geolocation
       handleLocationError(false, infoWindow, map.getCenter());
     }
 

   function handleLocationError(browserHasGeolocation, infoWindow, pos) {
      
     infoWindow.setPosition(pos);
     infoWindow.setContent(browserHasGeolocation ?
                           'Error: The Geolocation service failed.' :
                           'Error: Your browser doesn\'t support geolocation.');
     infoWindow.open(map);
   }


    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
      }
    }

    function createMarker(place) {
      var placeLoc = place.geometry.location;

      var markerc = new google.maps.Marker({
        map: map, 
        position: placeLoc
        
      });

      var markerPalmetto = new google.maps.Marker({
        map: map, 
        position: {lat: 25.855605, lng: -80.326038}
        
      });

      

      var markert = new google.maps.Marker({
        map: foodMap, 
        position: place.geometry.location
        
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name)
        infowindow.open(map, this);
      });
    }
  } */
  function initAutocomplete() {
    var dispoMap = new google.maps.Map(document.getElementById('dispoMap'), {
        center: { lat: 39.8283, lng: -98.5795 },
        zoom: 5,
        mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = document.getElementById('pac-input');
    var searchBox = new google.maps.places.SearchBox(input);
    dispoMap.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    dispoMap.addListener('bounds_changed', function () {
        searchBox.setBounds(dispoMap.getBounds());
    })


    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function (marker) {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function (place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            var marker = new google.maps.Marker({
                position: { lat: 34.1403471, lng: -118.3837512 },
                map: dispoMap,
                title: "WEED"
            });

            var marker1 = new google.maps.Marker({
                position: { lat: 34.0442797, lng: -118.4323648 },
                map: dispoMap,
                title: "WEED"
            });

            var marker2 = new google.maps.Marker({
                position: { lat: 34.0354029, lng: -118.3670099 },
                map: dispoMap,
                title: "WEED"
            });

            var marker3 = new google.maps.Marker({
                position: { lat: 34.0438973, lng: -118.3086318 },
                map: dispoMap,
                title: "WEED"
            });

            var marker4 = new google.maps.Marker({
                position: { lat: 34.0445981, lng: -118.352096 },
                map: dispoMap,
                title: "WEED"
            });

            var marker5 = new google.maps.Marker({
                position: { lat: 33.9963099, lng: -118.4280272 },
                map: dispoMap,
                title: "WEED"
            });

            var marker6 = new google.maps.Marker({
                position: { lat: 33.9925454, lng: -118.4231952 },
                map: dispoMap,
                title: "WEED"
            });

            var marker7 = new google.maps.Marker({
                position: { lat: 33.9450117, lng: -118.3724138 },
                map: dispoMap,
                title: "WEED"
            });

            var marker8 = new google.maps.Marker({
                position: { lat: 34.0173479, lng: -118.1439611 },
                map: dispoMap,
                title: "WEED"
            });

            var marker9 = new google.maps.Marker({
                position: { lat: 34.035696, lng: -118.250401 },
                map: dispoMap,
                title: "WEED"
            });

            var marker10 = new google.maps.Marker({
                position: { lat: 34.0344982, lng: -118.2164644 },
                map: dispoMap,
                title: "WEED"
            });

            var marker11 = new google.maps.Marker({
                position: { lat: 34.0734353, lng: -118.1637715 },
                map: dispoMap,
                title: "WEED"
            });

            var marker12 = new google.maps.Marker({
                position: { lat: 34.0216046, lng: -118.3290906 },
                map: dispoMap,
                title: "WEED"
            });

            var marker13 = new google.maps.Marker({
                position: { lat: 33.9619254, lng: -118.4207356 },
                map: dispoMap,
                title: "WEED"
            });

            var marker14 = new google.maps.Marker({
                position: { lat: 33.98485, lng: -118.278649 },
                map: dispoMap,
                title: "WEED"
            });

            var marker15 = new google.maps.Marker({
                position: { lat: 34.1403471, lng: -118.3837512 },
                map: dispoMap,
                title: "WEED"
            });

            var marker16 = new google.maps.Marker({
                position: { lat: 34.1530991, lng: -118.4687597 },
                map: dispoMap,
                title: "WEED"
            });

            var marker17 = new google.maps.Marker({
                position: { lat: 34.1363812, lng: -118.362165 },
                map: dispoMap,
                title: "WEED"
            });

            var marker18 = new google.maps.Marker({
                position: { lat: 34.1413307, lng: -118.372015 },
                map: dispoMap,
                title: "WEED"
            });

            var marker19 = new google.maps.Marker({
                position: { lat: 34.1492147, lng: -118.4398425 },
                map: dispoMap,
                title: "WEED"
            });

            var marker20 = new google.maps.Marker({
                position: { lat: 34.1343516, lng: -118.3602862 },
                map: dispoMap,
                title: "WEED"
            });

            var marker21 = new google.maps.Marker({
                position: { lat: 34.1418329, lng: -118.3879959 },
                map: dispoMap,
                title: "WEED"
            });

            var marker22 = new google.maps.Marker({
                position: { lat: 33.9908434, lng: -118.2562337 },
                map: dispoMap,
                title: "WEED"
            });

            var marker23 = new google.maps.Marker({
                position: { lat: 34.2009945, lng: -118.4258885 },
                map: dispoMap,
                title: "WEED"
            });

            var marker24 = new google.maps.Marker({
                position: { lat: 34.2094049, lng: -118.35357 },
                map: dispoMap,
                title: "WEED"
            });

            var marker25 = new google.maps.Marker({
                position: { lat: 34.3150079, lng: -118.4404127 },
                map: dispoMap,
                title: "WEED"
            });

            var marker26 = new google.maps.Marker({
                position: { lat: 33.9860423, lng: -118.2596455 },
                map: dispoMap,
                title: "WEED"
            });

            var marker27 = new google.maps.Marker({
                position: { lat: 33.7376845, lng: -118.2913613 },
                map: dispoMap,
                title: "WEED"
            });

            var marker28 = new google.maps.Marker({
                position: { lat: 34.0442797, lng: -118.4323648 },
                map: dispoMap,
                title: "WEED"
            });

            var marker29 = new google.maps.Marker({
                position: { lat: 34.1973579, lng: -118.5353165 },
                map: dispoMap,
                title: "WEED"
            });

            var marker30 = new google.maps.Marker({
                position: { lat: 34.228425, lng: -118.373787 },
                map: dispoMap,
                title: "WEED"
            });

            var marker31 = new google.maps.Marker({
                position: { lat: 33.93215, lng: -118.279095 },
                map: dispoMap,
                title: "WEED"
            });

            var marker32 = new google.maps.Marker({
                position: { lat: 34.0155309, lng: -118.2012532 },
                map: dispoMap,
                title: "WEED"
            });

            var marker33 = new google.maps.Marker({
                position: { lat: 34.0216046, lng: -118.3290906 },
                map: dispoMap,
                title: "WEED"
            });

            var marker34 = new google.maps.Marker({
                position: { lat: 33.9619254, lng: -118.4207356 },
                map: dispoMap,
                title: "WEED"
            });

            var marker35 = new google.maps.Marker({
                position: { lat: 33.791155, lng: -118.2482891 },
                map: dispoMap,
                title: "WEED"
            });

            var marker36 = new google.maps.Marker({
                position: { lat: 34.0300408, lng: -118.3897138 },
                map: dispoMap,
                title: "WEED"
            });

            var marker37 = new google.maps.Marker({
                position: { lat: 34.1403471, lng: -118.3837512 },
                map: dispoMap,
                title: "WEED"
            });

            var marker38 = new google.maps.Marker({
                position: { lat: 34.0376503, lng: -118.2575445 },
                map: dispoMap,
                title: "WEED"
            });

            var marker39 = new google.maps.Marker({
                position: { lat: 34.2130467, lng: -118.5007831 },
                map: dispoMap,
                title: "WEED"
            });

            var marker40 = new google.maps.Marker({
                position: { lat: 34.2901165, lng: -118.412149 },
                map: dispoMap,
                title: "WEED"
            });

            var marker41 = new google.maps.Marker({
                position: { lat: 33.782509, lng: -118.233228 },
                map: dispoMap,
                title: "WEED"
            });

            var marker42 = new google.maps.Marker({
                position: { lat: 33.985456, lng: -118.3118286 },
                map: dispoMap,
                title: "WEED"
            });

            var marker43 = new google.maps.Marker({
                position: { lat: 33.951768, lng: -118.277832 },
                map: dispoMap,
                title: "WEED"
            });

            var marker44 = new google.maps.Marker({
                position: { lat: 34.083677, lng: -118.2998125 },
                map: dispoMap,
                title: "WEED"
            });

            var marker45 = new google.maps.Marker({
                position: { lat: 34.002341, lng: -118.277761 },
                map: dispoMap,
                title: "WEED"
            });

            var marker46 = new google.maps.Marker({
                position: { lat: 34.2374698, lng: -118.3703608 },
                map: dispoMap,
                title: "WEED"
            });

            var marker47 = new google.maps.Marker({
                position: { lat: 33.9364035, lng: -118.2736522 },
                map: dispoMap,
                title: "WEED"
            });

            var marker48 = new google.maps.Marker({
                position: { lat: 34.1638419, lng: -118.3700182 },
                map: dispoMap,
                title: "WEED"
            });
            var marker49 = new google.maps.Marker({
                map: dispoMap,
                title: "Maggies Farm Manitou - Adult use",
                position: { lat: 38.8580585, lng: -104.8951003 }
            });

            var marker50 = new google.maps.Marker({
                map: dispoMap,
                title: "Maggies Farm Pueblo East - Adult Use",
                position: { lat: 38.2450679, lng: -104.5827595 }
            });

            var marker51 = new google.maps.Marker({
                map: dispoMap,
                title: "The Green Stop",
                position: { lat: 40.2682568, lng: -103.8319037 }
            });

            var marker52 = new google.maps.Marker({
                map: dispoMap,
                title: "Fresh Baked Dispensary Boulder - Adult Use",
                position: { lat: 40.0217996, lng: -105.2620239 }
            });

            var marker53 = new google.maps.Marker({
                map: dispoMap,
                title: "The Clinic Colorado - Medical",
                position: { lat: 39.6797444, lng: -104.9404338 }
            });

            var marker54 = new google.maps.Marker({
                map: dispoMap,
                title: "The Clinic High lands - Medical",
                position: { lat: 39.7619493, lng: -105.0336993 }
            });

            var marker55 = new google.maps.Marker({
                map: dispoMap,
                title: "ORGANIX - Adult Use",
                position: { lat: 39.5076381, lng: -106.0522591 }
            });

            var marker56 = new google.maps.Marker({
                map: dispoMap,
                title: "MiNDFUL - Berthoud",
                position: { lat: 40.31144, lng: -105.076472 }
            });

            var marker57 = new google.maps.Marker({
                map: dispoMap,
                title: "ANIMAS HERBAL RECREATIONAL",
                position: { lat: 37.2761574, lng: -107.8825031 }
            });

            var marker58 = new google.maps.Marker({
                map: dispoMap,
                title: "Buds, Ltd.",
                position: { lat: 39.449618, lng: -108.051901 }
            });

            var marker59 = new google.maps.Marker({
                map: dispoMap,
                title: "The Clinic on Wadsworth - Medical",
                position: { lat: 39.6494538, lng: -105.0807339 }
            });

            var marker60 = new google.maps.Marker({
                map: dispoMap,
                title: "Trinidads HIgher Calling U",
                position: { lat: 37.1910345, lng: -104.4971459 }
            });

            var marker61 = new google.maps.Marker({
                map: dispoMap,
                title: "Terrapin Care Station - 33rd Ave. - Adult Use",
                position: { lat: 39.7632071, lng: -104.849567 }
            });

            var marker62 = new google.maps.Marker({
                map: dispoMap,
                title: "Organic Alternatives",
                position: { lat: 40.5874049, lng: -105.072621 }
            });

            var marker63 = new google.maps.Marker({
                map: dispoMap,
                title: "The Clinicon Colfax - Recreational",
                position: { lat: 39.7403736, lng: -104.9331564 }
            });

            var marker64 = new google.maps.Marker({
                map: dispoMap,
                title: "Rocky Mountain Remedies - Recreational",
                position: { lat: 40.5085261, lng: -106.8590881 }
            });

            var marker65 = new google.maps.Marker({
                map: dispoMap,
                title: "LaContes Clone Bar + Dispensary Medical",
                position: { lat: 39.7909335, lng: -104.978028 }
            });

            var marker66 = new google.maps.Marker({
                map: dispoMap,
                title: "Headquarters Cannabis Company Longmont - Recreational",
                position: { lat: 40.2127392, lng: -105.2492154 }
            });

            var marker67 = new google.maps.Marker({
                map: dispoMap,
                title: "Native Roots Dispensary Denver @ South SantaFe - Recreational",
                position: { lat: 39.6683721, lng: -104.9964899 }
            });

            var marker68 = new google.maps.Marker({
                map: dispoMap,
                title: "Native Roots Dispensary Frisco - Recreational",
                position: { lat: 39.5874055, lng: -106.0941866 }
            });

            var marker69 = new google.maps.Marker({
                map: dispoMap,
                title: "Mountain Medicinals Retail Center - Recreational",
                position: { lat: 39.7415678, lng: -105.5071529 }
            });

            var marker70 = new google.maps.Marker({
                map: dispoMap,
                title: "Native Roots Dispensary Aspen - Recreational",
                position: { lat: 39.1882096, lng: -106.8172347 }
            });

            var marker71 = new google.maps.Marker({
                map: dispoMap,
                title: "Natural Mystic Wellness Center",
                position: { lat: 38.8419755, lng: -106.131925 }
            });

            var marker72 = new google.maps.Marker({
                map: dispoMap,
                title: "Infinite Wellness Center - Adult Use",
                position: { lat: 40.5988632, lng: -105.0760546 }
            });

            var marker73 = new google.maps.Marker({
                map: dispoMap,
                title: "Pueblo West Organics - Adult Use",
                position: { lat: 38.329202, lng: -104.7176051 }
            });

            var marker74 = new google.maps.Marker({
                map: dispoMap,
                title: "SANTE - Durango",
                position: { lat: 37.2714478, lng: -107.88148 }
            });

            var marker75 = new google.maps.Marker({
                map: dispoMap,
                title: "The 64 Store",
                position: { lat: 38.8329656, lng: -104.8345768 }
            });

            var marker76 = new google.maps.Marker({
                map: dispoMap,
                title: "Fox Cannabis - Street Wellness Medical",
                position: { lat: 39.7832493, lng: -104.9947467 }
            });

            var marker77 = new google.maps.Marker({
                map: dispoMap,
                title: "Faragosi Farms",
                position: { lat: 37.1661697, lng: -104.5097627 }
            });

            var marker78 = new google.maps.Marker({
                map: dispoMap,
                title: "Breckenridge Organic Therapy",
                position: { lat: 39.5087024, lng: -106.0514578 }
            });

            var marker79 = new google.maps.Marker({
                map: dispoMap,
                title: "The Station Dispensary Boulder Colorado",
                position: { lat: 40.0294339, lng: -105.2588454 }
            });

            var marker80 = new google.maps.Marker({
                map: dispoMap,
                title: "Live Green Edgewater-Recreational",
                position: { lat: 39.7533363, lng: -105.0534842 }
            });

            var marker81 = new google.maps.Marker({
                map: dispoMap,
                title: "La Contes Clone Bar + Dispensary - Central Medical",
                position: { lat: 39.7274414, lng: -104.9855883 }
            });

            var marker82 = new google.maps.Marker({
                map: dispoMap,
                title: "Natures Medicine Salida",
                position: { lat: 38.5251075, lng: -106.0057398 }
            });

            var marker83 = new google.maps.Marker({
                map: dispoMap,
                title: "Roots Rx Aspen",
                position: { lat: 39.1891472, lng: -106.8194306 }
            });

            var marker84 = new google.maps.Marker({
                map: dispoMap,
                title: "Sedgwick Alternative Relief",
                position: { lat: 40.934542, lng: -102.523778 }
            });

            var marker85 = new google.maps.Marker({
                map: dispoMap,
                title: "Native Roots Dispensary Longmont - Medical",
                position: { lat: 40.1617004, lng: -105.1220415 }
            });

            var marker86 = new google.maps.Marker({
                map: dispoMap,
                title: "Kush Gardens",
                position: { lat: 39.3371537, lng: -108.1944133 }
            });

            var marker87 = new google.maps.Marker({
                map: dispoMap,
                title: "Terrapin Care Station - Denver Downtown (Rec)",
                position: { lat: 39.7170634, lng: -104.9878785 }
            });

            var marker88 = new google.maps.Marker({
                map: dispoMap,
                title: "Herbal Bliss",
                position: { lat: 39.5858206, lng: -106.094337 }
            });

            var marker89 = new google.maps.Marker({
                map: dispoMap,
                title: "Light Shade - Sheridan Recreational",
                position: { lat: 39.696056, lng: -105.0527649 }
            });

            var marker90 = new google.maps.Marker({
                map: dispoMap,
                title: "Lightshade - Peoria Recreational",
                position: { lat: 39.7732121, lng: -104.8491092 }
            });

            var marker91 = new google.maps.Marker({
                map: dispoMap,
                title: "Maggies Farm Pueblo West ... Adult Use",
                position: { lat: 38.3390017, lng: -104.740745 }
            });

            var marker92 = new google.maps.Marker({
                map: dispoMap,
                title: "Medicine Man Aurora - Adult Use",
                position: { lat: 39.6817321, lng: -104.8664385 }
            });

            var marker93 = new google.maps.Marker({
                map: dispoMap,
                title: "Native Roots Dispensary Dillon",
                position: { lat: 39.6296516, lng: -106.0615648 }
            });

            var marker94 = new google.maps.Marker({
                map: dispoMap,
                title: "The Secret Stash",
                position: { lat: 38.847991, lng: -104.870091 }
            });

            var marker95 = new google.maps.Marker({
                map: dispoMap,
                title: "Solace Meds - Recreational",
                position: { lat: 40.5060447, lng: -105.0732263 }
            });

            var marker96 = new google.maps.Marker({
                map: dispoMap,
                title: "The Highway",
                position: { lat: 39.766943, lng: -105.6183501 }
            });

            var marker97 = new google.maps.Marker({
                map: dispoMap,
                title: "Green Tree (Medicinals) of Berthoud",
                position: { lat: 40.3122074, lng: -105.0758103 }
            });

            var marker98 = new google.maps.Marker({
                map: dispoMap,
                title: "GS Warehouse Dispensary",
                position: { lat: 40.2691015, lng: -103.8296927 }
            });

            var marker99 = new google.maps.Marker({
                map: dispoMap,
                title: "CannaCo",
                position: { lat: 37.1372909, lng: -104.5222011 }
            });

            var marker100 = new google.maps.Marker({
                map: dispoMap,
                title: "Green Tree (Medicinals) of Boulder",
                position: { lat: 40.0153379, lng: -105.2234614 }
            });
            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: dispoMap,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        dispoMap.fitBounds(bounds);


    });

}