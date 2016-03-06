function comprobar() {
  p1 = document.getElementById('mostrar');
  if (Modernizr.geolocation) {
     p1.innerHTML = "geolocalizacion soportado";
     navigator.geolocation.getCurrentPosition(showPosition);

  }else{
     p1.innerHTML = "geolocalizacion no soportado";
  }
}
lat = 0;
lng = 0;
function showPosition(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    initMap();
    lat = lat * (-1);
    lng = 180 - lng;
    antipodas();
}
function initMap(){
  var mapDiv = document.getElementById("map");
    var map = new google.maps.Map(mapDiv, {
      center: {lat: lat , lng: lng },
      zoom: 15
    });
}
function antipodas(){
  var mapDiv = document.getElementById("antipoda");
  var map = new google.maps.Map(mapDiv, {
    center: {lat: lat , lng: lng },
    zoom: 5
  });
}
