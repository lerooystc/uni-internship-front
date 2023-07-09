prevButton = document.getElementById("prev");
nextButton = document.getElementById("next");
reviews = document.getElementById("review-examples");

var i = 0;

function ready() {
  prevButton.disabled = true;
}

function prev() {
  i--;
  reviews.style.marginLeft = (i*-100).toString() + "%";
  if (i == 0) {
    prevButton.disabled = true;
  }
  nextButton.disabled = false;
}

function next() {
  i++
  reviews.style.marginLeft = (i*-100).toString() + "%";
  if (i == 2) {
    nextButton.disabled = true;
  }
  prevButton.disabled = false;
}

$('html').on('touchstart',function(event) {
  if ($(event.target).closest('#nav-menu').length === 0 && !$(event.target).is('.menu-bar')) {
      $('#mobile-menu').removeClass('open');
  }
});

$('.menu-bar').click(function() {
  if (!$('#mobile-menu').hasClass('open')) { 
    $('#mobile-menu').addClass('open');
  } else {
    $('#mobile-menu').removeClass('open');
  }
})

$('.nl-text').click(function() {
  $('#mobile-menu').removeClass('open');
})

$('#nav-menu').on("touchmove", function() {
  $('#mobile-menu').removeClass('open');
})

$('#day-amount > label > .diet-picker-buttons > .diet-picker-button').click(function() {
  $("#day-amount > label > .diet-picker-buttons > .diet-picker-button.selected").removeClass('selected');
  $(event.target).addClass('selected');
})

$('#person-amount > label > .diet-picker-buttons > .diet-picker-button').click(function() {
  $("#person-amount > label > .diet-picker-buttons > .diet-picker-button.selected").removeClass('selected');
  $(event.target).addClass('selected');
})

$('.filter-button').click(function () {
  $('.filter-button').removeClass('selected');
  $(event.target).addClass('selected');
})

$('.faq-button').click(function () {
  $('.faq-button').removeClass('selected');
  $(event.target).addClass('selected');
})

$('.diet-cat-button').click(function () {
  $('.diet-cat-button').removeClass('selected');
  $(event.target).addClass('selected');
})