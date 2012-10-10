$(document).ready(function() {

	$('input:checkbox').change(function() {
		classSelector = "." + $(this).val();
		$(classSelector).toggleClass("results-hide")
	});

     $("#results-table").stupidtable();

}); 