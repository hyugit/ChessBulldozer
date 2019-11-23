var tiles = document.getElementsByClassName('move-text-component');
var result = Array.prototype.map.call(tiles, function(e) {
  return e.textContent.replace(/\s/g,'');
});
result
