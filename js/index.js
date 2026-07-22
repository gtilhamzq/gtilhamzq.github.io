var navmobile = false
$(".navbar-mobile:eq(0) a").on("click", function() {
    if (!navmobile) {
        $(".navbar-mobile:eq(0) a").text("Close")
        $(".navbar-mobile-child .navbar").animate({ opacity: 1 }, "0.2s", function() {
            $(this).css("visibility", "visible")
        })
        navmobile = true
    } else {
        $(".navbar-mobile:eq(0) a").text("MENU")
        $(".navbar-mobile-child .navbar").animate({ opacity: 0 }, "0.2s", function() {
            $(this).css("visibility", "hidden")
        })
        navmobile = false
    }
})