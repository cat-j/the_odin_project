var newLine = "<div class='line'></div>";
var newTile = "<div class='tile'></div>";

var createLine = function(n) {
    $('#container').append(newLine);
    
    for (var count=1; count<n+1; count++) {
        $('.line').last().append(newTile);
    }
}

var createGrid = function(n,m) {
    for (var count=1; count<m+1; count++) {
        createLine(n);
    }
}

var userGrid = function() {
    $('#container').empty();
    
    var width = +prompt('Enter grid width:');
    var height = +prompt('Enter grid height:');
    
    createGrid(width, height);
}

$(document).ready(function() {
    $('#new-grid').on('click', userGrid);
    $('#reset').on('click', function() {
        $('.written').removeClass('written');
    });
    $(document).on('mouseenter', '.tile', function() {
        $(this).addClass('written');
    });
});