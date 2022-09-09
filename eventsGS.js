$(window).on("scroll", function() {
  if($(window).scrollTop()) {
       $('nav').addClass('bgcolor');
  }
  else {
        $('nav').removeClass('bgcolor');
  }
})

google.maps.event.addDomListener(window, 'load', function() {
  var places = new google.maps.places.Autocomplete(document
          .getElementById('txtPlaces'));
  google.maps.event.addListener(places, 'place_changed', function() {
      var place = places.getPlace();
      var address = place.formatted_address;
      var  value = address.split(",");
      count=value.length;
      country=value[count-1];
      state=value[count-2];
      city=value[count-3];
      var z=state.split(" ");
      document.getElementById("selCountry").text = country;
      var i =z.length;
      document.getElementById("pstate").value = z[1];
      if(i>2)
      document.getElementById("pzcode").value = z[2];
      document.getElementById("pCity").value = city;
      var latitude = place.geometry.location.lat();
      var longitude = place.geometry.location.lng();
      var mesg = address;
      document.getElementById("txtPlaces").value = mesg;
      var lati = latitude;
      document.getElementById("plati").value = lati;
      var longi = longitude;
      document.getElementById("plongi").value = longi;            
  });
});
// // Get the modal
// //var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }