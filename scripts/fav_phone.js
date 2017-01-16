"use strict";

$(document).ready(() => {
  $("button").click(() => {
    $("button").after("<p id=\"fav_phone\">Our favourite phone is...</p>");
    setTimeout(() => {
      $("#fav_phone").after("<p style=\"font-weight: bold; font-size: 20px\">The Oneplus 3!</p>");
    }, 1000);
    $("button").remove();
  });
});
