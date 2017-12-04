document.getElementById("search-form").style.display="none";
var visible = false;
function close_open_form() {
  if(visible) {
    document.getElementById("search-form").style.display="none";
    visible = false;
  }
  else {
    document.getElementById("search-form").style.display="flex";
    visible = true;
  }
}

function initMap() {
  var uluru = {lat: 34.869, lng: -111.760};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}