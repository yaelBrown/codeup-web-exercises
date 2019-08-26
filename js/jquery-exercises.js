"use strict";


$(document).ready(function() {
  // alert("DOM has finished loading.");
  // alert($('#para').html());
  // alert($('#h3tag').html());
  $('.codeup').css("border", "1px solid red");
});

// $('#h3tag').css("background-color", "green");
$('li').css("font-size", "20px");
$('#para').removeClass("codeup");

// $('h1')
// $('p')
// $('li')

// alert($('h1').html());

// multiple selectors
$('h1, p, li')


// selects first item if 2 of the same id tags are used. Ignores the rest.

// element does not get the border, because gets border






// Event handlers

$('h1').click(() => {
  $('h1').css({"background-color": "green", "color": "white"});
});

$('p').dblclick(() => {
  $('p').css("font-size", "18px");
});

$('li').hover(() => {
  $('li').css("color", "red");
}, () => {
  $('li').css("color", "black");
});
