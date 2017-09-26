
function createGrid(x) {
    var x= 16;
    for(var rows = 0; rows < x; rows++) {
        for(var columns = 0; columns < x; columns++) {
            var unit = $("<div class='unit'></div>");
            unit.appendTo('.container');
        };
    };
    $('.unit').width(960/x);
    $('.unit').height(960/x);
};

function clearGrid() {
  $('.unit').css("background-color", "white");
};

function refreshGrid() {
var z = prompt("how many boxes?");
  clearGrid();
  createGrid(z);
};



$(document).ready(function() {
  createGrid(16);

  $('.unit').on('mouseenter', function() {
    $(this).css("background-color", "black");
  });

  $('.newGrid').on('click', function()  {
    refreshGrid();
  });

});
