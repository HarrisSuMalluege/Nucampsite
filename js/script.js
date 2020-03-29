//Implement pause/play functionality to carousel
$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass(".fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycel");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    //Week 4 Assignment, using jQuery to show the modal when clicked.
    $("#reserveButton").click(function () {
        $("#reserveModal").modal("show");
    });
    $("#loginButton").click(function () {
        $("#loginModal").modal("show");
    });
});

