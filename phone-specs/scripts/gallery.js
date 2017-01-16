"use strict";

$(document).ready(() => {
  let current_img = parseInt($('.current_img')[0].innerHTML);
  const total_img = parseInt($('.total_img')[0].innerHTML);
  const img_src = $('img')[0].src;
  const path = img_src.substr(0, img_src.indexOf('_')) + "_";
  const img_format = "." + img_src.substr(img_src.lastIndexOf('.') + 1);

  $("#prev").click(() => {
    if (current_img > 1) {
      current_img--;
    } else {
      current_img = total_img;
    }
    $('.current_img')[0].innerHTML = current_img.toString();
    $('.current_img').css('font-weight', 'bold');
    $('img')[0].src = path + current_img.toString() + img_format;
  });

  $("#next").click(() => {
    if (current_img < total_img) {
      current_img++;
    } else {
      current_img = 1;
    }
    $('.current_img')[0].innerHTML = current_img.toString();
    $('.current_img').css('font-weight', 'bold');
    $('img')[0].src = path + current_img.toString() + img_format;
  });
});
