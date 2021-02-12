let screenLog = document.querySelector(".background");
document.addEventListener("mousemove", logKey);

function logKey(e) {
  placeDiv(e.screenX, e.screenY);
  placeDiv(e.clientX, e.clientY);
}

function placeDiv(x_pos, y_pos) {
  var d = document.getElementById("1");

  var w = $(d).width();
  var h = $(d).height();

  d.style.position = "absolute";
  d.style.left = x_pos + "px";
  d.style.top = y_pos - h + "px";
}