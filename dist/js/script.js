$(document).ready(function () {
	$("#search-bar").hide();

	$("#search-btn").click(function () {
		$("#search-bar").show();

		$("#close-btn").click(function () {
			$("#search-bar").hide();
		});
		
	});
});