$(function(){

  //get player object from localStorage
  var player = JSON.parse(localStorage.getItem("player"));

  //get player time from localStorage
  var currentTime = new Date(JSON.parse(localStorage.getItem("currentTime")));

  //instantiating flooring and map arrays
  var floors = [];
  var map = [];

  //getting data from objects file
  $.getJSON("../js/objects.json", function(data) {

    $.each(data, function(object) {
      var name = data[object]['name'];
      var width = data[object]['width'];
      var height = data[object]['height'];
      var surface = data[object]['surface'];
      var symbol = data[object]['symbol'];

      //creating Ground objects from said data
      floors.push(new Ground(name, width, height, surface, symbol));
    });
    //once objects are done we do this part
  }).done(function() {
    console.log("success! Building map:");

    //setting our map array equal to our handy dandy buildGround function
    map = buildGround(floors, 10, 10);

    //instantiating row
    var row = '';
    for (var i = 0; i < map.length; i++) {
      for (var j = 0; j < map[i].length; j++) {
        row += map[i][j].symbol;
      }
      //writing each row to the page (for testing purposes don't freak out)
      document.write(row);

      //creating line break each row for readability... also for testing
      $('body').append("<br/>");

      //reseting row
      row = ''
    }
  });
});
