function buildGround(floors, width, height) {
  //instantiating map arry with specified size equal to width
  var map = new Array(width);

  //creating inner arrays with lengths based on height
  for (var i = 0; i < width; i++) {
    map[i] = new Array(height);
  }

  //creation of the map
  for (var j = 0; j < height; j++) {
    for (var i = 0; i < width; i++) {
      //getting random floor object... for now
      var floorIndex = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      map[j][i] = floors[floorIndex];
    }
  }
  //returning the populated map array
  return map;
}
