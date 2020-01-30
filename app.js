let positionLat;
let positionLong;
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("error");
    }
  }
  
  function showPosition(position) {
      positionLat = position.coords.latitude;
      positionLong = position.coords.longitude;
      showLocation();
   
  }


function showLocation(){
//var mymap = L.map('mapid').setView([positionLat, positionLong], 13);

var map = L.map('mapid').fitWorld();

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZXJuMGxkIiwiYSI6ImNrNjByMHI3ODA2c2IzbHFpc2lmemZrZTYifQ.hPQL649P0KTUqQhIAMLLPQ'

}).addTo(map);
//var marker = L.marker([positionLat, positionLong]).addTo(map); 
map.locate({setView: true, maxZoom: 16});
function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("Olet " + radius + " metrin säteellä. ÄIJJJÄÄÄÄ").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}


function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);
}



getLocation();
//console.log(mymap);
