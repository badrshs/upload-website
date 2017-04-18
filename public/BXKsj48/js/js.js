var map = new GMaps({
  div: '.map',
  lat: 24.795445,
  lng: 46.633557,
  zoom: 16,
    scrollwheel: false
});

map.addMarker({
  lat: 24.795445,
  lng: 46.633557,
  title: 'Our location',
  infoWindow: {
  content: '<p>Welcome to our Company</p>'
}
});