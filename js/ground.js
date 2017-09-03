//quick and dirty ground object type constructer
function Ground (name, width, height, surface, symbol) {
  this.name = name || "dirt";
  this.width = width || 2;
  this.height = height || 2;
  this.surface = surface || "hard and dusty";
  this.symbol = symbol || " ";
}
