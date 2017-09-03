$(function(){

  //get player object from localStorage
  var player = JSON.parse(localStorage.getItem("player"));

  //get player time from localStorage
  var currentTime = new Date(JSON.parse(localStorage.getItem("currentTime")));

  //set current-time element value to currentTime

  var floors = [];
  var map = [];
  $.getJSON("../js/objects.json", function(data) {

    $.each(data, function(object) {
      var name = data[object]['name'];
      var width = data[object]['width'];
      var height = data[object]['height'];
      var surface = data[object]['surface'];
      var symbol = data[object]['symbol'];

      floors.push(new Ground(name, width, height, surface, symbol));
    });
  }).done(function() {
    console.log("success! Building map:");
    map = buildGround(floors, 10, 10);
    console.log(map[0][0].symbol);
    var row = '';
    for (var i = 0; i < map.length; i++) {
      for (var j = 0; j < map[i].length; j++) {
        row += map[i][j].symbol;
      }
      document.write(row);
      $('body').append("<br/>");
      row = ''
    }
  });
});
