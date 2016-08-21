$(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();
    let ipAddress;
    let latLong;

    var gitIt = $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'https://api.ipify.org?format=json'
    }).done(function(ipaddress) {

    var getLocationInfo= $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'http://ipinfo.io/json'

    }).done(function(location) {
      var ipAddressLocation = location.ip;
      var latLong = location.loc;
      var city = location.city;
      var state = location.region;
      initialize(latLong);

      var putItOnPage = $('.spotonpage').append('<p>IP '+ ipAddressLocation +' </p>');

      putItOnPage = $('.spotonpage').append('<p>IP.Info ' + city + ',' + state + '</p>');
      return latLong;


    function initialize() {
      let lat = parseFloat(latLong);
      let long = parseFloat(latLong.substring(8));

      var mapProp = {
        center: new google.maps.LatLng(lat, long),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
      }
    });

    });
  });
});

//Things I learned:
//parseInt will not turn a decimal into a number with a decimal
