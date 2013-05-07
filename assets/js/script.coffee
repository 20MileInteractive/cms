$ ->
	$(document).foundation()
	# Write scripts here
	
$(".has-children").addClass("has-dropdown");
$(".has-children").children("ul").addClass("dropdown");

$(".top-bar-section li").after("<li class='divider'></li>");
$(".side-nav li").after("<li class='divider'></li>");