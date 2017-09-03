function buildGround(floors, width, height) {
  var map = new Array(width);
  for (var i = 0; i < width; i++) {
    map[i] = new Array(height);
  }
  for (var j = 0; j < height; j++) {
    for (var i = 0; i < width; i++) {
      var floorIndex = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      console.log("Floor index: " + floorIndex);
      map[j][i] = floors[floorIndex];
    }
  }
  return map;
}
