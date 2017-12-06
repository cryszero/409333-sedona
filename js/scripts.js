var form = document.querySelector(".search-form");
var link = document.querySelector(".form-call");
var hotelSubmit = document.querySelector(".hotel-search-submit");
var hotelSearch = document.querySelector(".hotel-search");

var arrival = document.getElementById("arrival-date");
var departure = document.getElementById("departure-date");
var adults = document.getElementById("adults-input");
var kids = document.getElementById("kids-input");

if (hotelSearch && hotelSubmit) {
hotelSubmit.addEventListener("click", function(evt) {
  evt.preventDefault();
  hotelSearch.submit();
});
}

if (link && form) {
link.addEventListener("click", function(evt) {
  form.classList.toggle("form-animation");
  form.classList.toggle("form-hide");
  form.classList.remove("form-error");
});

document.addEventListener("DOMContentLoaded", function(evt) {
  form.classList.add("form-hide");
});

form.addEventListener("submit", function(evt) {
  if(!arrival.value || !departure.value || !adults.value || !kids.value) {
    evt.preventDefault();
    form.classList.remove("form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("form-error");
  }
  else {
    form.classList.remove("form-error");
  }
});
}

function initMap() {
  var uluru = {lat: 34.869, lng: -111.760};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: {lat: 34.706088, lng: -111.781723}
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}