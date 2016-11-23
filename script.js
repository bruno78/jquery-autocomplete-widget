$(document).ready(function() {

  var books = ["Pride and Prejudice", "Running with Scissors", "The DaVinci Code", "The Aeneid"];
  $("#tags").autocomplete({source: books});
});
