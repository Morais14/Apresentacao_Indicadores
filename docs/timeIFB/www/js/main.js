/*function resize_div() {
  $("#timeline-embed").css("max-height", ($(window).outerHeight() - $("#menu").outerHeight()) + "px");
}

window.onresize = function(event) { resize_div(); };*/

$(document).ready(function() {
  $(".dive").click(function() { 
    location.href = "www/files/" + $(this).attr("id") + "/" + $(this).attr("id") + ".html";
  });
});