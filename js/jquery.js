$(document).ready(function () {
    $("#sermons_id").tablesorter({
        theme: 'green',
        widgets: ['zebra'],
        // sort on the first column in ascending order
        sortList: [[0, 0], [0, 1]]
    });
    
      $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
    
});

