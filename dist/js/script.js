$(document).ready(function () {
  $("#search-bar").hide(),
    $("#search-btn").click(function () {
      $("#search-bar").show(),
        $("#close-btn").click(function () {
          $("#search-bar").hide();
        });
    }),
    $("#sidebar").hide(),
    $(document).scroll(function () {
      let y = $(this).scrollTop();
      y > 150 && y < 1600 ? $("#sidebar").show() : $("#sidebar").hide();
    });
});
