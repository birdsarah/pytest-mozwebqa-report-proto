$(document).ready(function() {

	reset_sort_headers();

	$('.sortable').click(toggle_sort_states);

	$('input:checkbox').change(function() {
		classSelector = "." + $(this).val();
		$(classSelector).toggleClass("results-hide");
	});

	$('#results-table-head > .col-result').click(function() {
		sort_rows_alpha($(this), 'col-result');
	});

	$('#results-table-head > .col-class').click(function() {
		sort_rows_alpha($(this), 'col-class');
	});

	$('#results-table-head > .col-name').click(function() {
		sort_rows_alpha($(this), 'col-name');
	});

	$('#results-table-head > .col-duration').click(function() {
		sort_rows_num($(this), 'col-duration');
	});

});

function sort_rows_alpha(clicked, sortclass) {
	var therows = $('.results-table-row');
	therows.sort(function(s, t) {
		var a = s.getElementsByClassName(sortclass)[0].innerHTML.toLowerCase();
		var b = t.getElementsByClassName(sortclass)[0].innerHTML.toLowerCase();
		if (clicked.hasClass('asc')) {
			if (a < b)
				return -1;
			if (a > b)
				return 1;
			return 0;
		} else {
			if (a < b)
				return 1;
			if (a > b)
				return -1;
			return 0;
		}
	});
	$('#results-table-body').append(therows);
}

function sort_rows_num(clicked, sortclass) {
	var therows = $('.results-table-row');
	therows.sort(function(s, t) {
		var a = s.getElementsByClassName(sortclass)[0].innerHTML
		var b = t.getElementsByClassName(sortclass)[0].innerHTML
		if (clicked.hasClass('asc')) {
			return a - b;
		} else {
			return b - a;
		}
	});
	$('#results-table-body').append(therows);
}

function reset_sort_headers() {
	$('.sort-icon').remove();
	$('.sortable').prepend('<div class="sort-icon">vvv</div>');
	$('.sortable').removeClass('asc desc inactive active');
	$('.sortable').addClass('asc inactive');
}

function toggle_sort_states() {
	//if active, toggle between asc and desc
	if ($(this).hasClass('active')) {
		$(this).toggleClass('asc');
		$(this).toggleClass('desc');
	}

	//if inactive, reset all other functions and add ascending active
	if ($(this).hasClass('inactive')) {
		reset_sort_headers();
		$(this).removeClass('inactive');
		$(this).addClass('active');
	}
}
