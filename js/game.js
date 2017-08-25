$(function(){

  //get player object from localStorage
  var player = JSON.parse(localStorage.getItem("player"));

  //get player time from localStorage
  var currentTime = new Date(JSON.parse(localStorage.getItem("currentTime")));

  //set current-time element value to currentTime
  $("#current-time").val(currentTime);

  //TODO: decide what timeframe a tick represents... maybe 1 hour?
  var tick = function() {
    addHour();
  }

  //function to increment currentTime
  var addHour = function() {
    currentTime.setHours(currentTime.getHours()+1);
    $("#current-time").text(currentTime);
  }

  setInterval(function(){
    tick();
  }, 1000)
});
