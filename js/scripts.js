$(document).ready(function() {
$(".toggles").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });
  $("#ftoggle").click(function() {
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
  });
  $("#fin").click(function() {
    $("#initially-hidden").fadeIn();
    $("#initially-showing").fadeOut();
  });
  $("#fout").click(function() {
    $("#initially-showing").fadeIn();
    $("#initially-hidden").fadeOut();
  });
  $("#slideDown").click(function() {
    $("#initially-showing").slideDown();
    $("#initially-hidden").slideDown();
  });
  $("#slideUp").click(function() {
    $("#initially-showing").slideUp();
    $("#initially-hidden").slideUp();
  });
  $("#slideToggle").click(function() {
    $("#initially-showing").slideToggle();
    $("#initially-hidden").slideToggle();
  });
});
