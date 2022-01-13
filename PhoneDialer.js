var count = 0;
var green = false;

$('.digit').on('click', function () {
  var num = $(this).clone().children().remove().end().text();
  if (count < 13) {
    $('#output').append('<span>' + num.trim() + '</span>');

    count++;
  }
});

$('.fa-long-arrow-alt-left').on('click', function () {
  $('#output span:last-child').remove();
  count--;
});

$('.fa-star').on('click', function () {
  if (green === false) {
    $('i.fa-star').addClass(' green');
    green = true;
  } else {
    $('i.fa-star').removeClass('green');
    green = false;
  }
});
