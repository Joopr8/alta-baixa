var width = $(document).width(); 

if ((width >= 550 )) {
  document.addEventListener("mousemove", logKey);

  function placeDiv(x_pos, y_pos) {
    var d = document.getElementById("1");
    var h = $(d).height();
  
    d.style.position = "absolute";
    d.style.left = x_pos + "px";
    d.style.top = y_pos - h + "px";
  }

  function logKey(e) {
    placeDiv(e.screenX, e.screenY);
    placeDiv(e.clientX, e.clientY);
  }
}