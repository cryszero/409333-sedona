function initMap(){var uluru={lat:34.869,lng:-111.76},map=new google.maps.Map(document.getElementById("map"),{zoom:9,center:{lat:34.706088,lng:-111.781723}});new google.maps.Marker({position:uluru,map:map})}var form=document.querySelector(".search-form"),link=document.querySelector(".form-call"),hotelSubmit=document.querySelector(".hotel-search-submit"),hotelSearch=document.querySelector(".hotel-search"),arrival=document.getElementById("arrival-date"),departure=document.getElementById("departure-date"),adults=document.getElementById("adults-input"),kids=document.getElementById("kids-input");hotelSearch&&hotelSubmit&&hotelSubmit.addEventListener("click",function(evt){evt.preventDefault(),hotelSearch.submit()}),link&&form&&(link.addEventListener("click",function(evt){form.classList.toggle("form-animation"),form.classList.toggle("form-hide"),form.classList.remove("form-error")}),document.addEventListener("DOMContentLoaded",function(evt){form.classList.add("form-hide")}),form.addEventListener("submit",function(evt){arrival.value&&departure.value&&adults.value&&kids.value?form.classList.remove("form-error"):(evt.preventDefault(),form.classList.remove("form-error"),form.offsetWidth=form.offsetWidth,form.classList.add("form-error"))}));