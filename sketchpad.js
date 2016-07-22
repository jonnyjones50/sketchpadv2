$(document).ready(function ()  {

  for (var i = 0; i < 256; i++) {
    $('.container').append('<div class="grid"></div>');
  }

  $('.grid').hover(function () {
        $(this).css('background-color', 'yellow');
      }, function () {

      $(this).css('background-color', 'red');
    });

});

function resetFunction()  {
  var gridSize = prompt('How large would you like the grid?');
  console.log(gridSize);
};
