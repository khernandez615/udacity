// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})
//FUNCTION FOR MAKING THE GRID APPEAR
function makeGrid(x, y) {
    //CLEARS OUT GRID WHEN SUBMIT CLICKED
    $('tr').remove();
    //CODE FOR MAKING THE GRID 
    for (var i = 1; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (var j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }
    //COLORING IN THE CELLS
    $('td').click(function addColor(){
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        }
        else {
            $(this).attr('style', 'background-color:' + color);
        }
    })
}