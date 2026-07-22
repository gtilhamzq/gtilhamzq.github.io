$(function() {
    setTimeout(() => {
        // location.reload()
    }, 3000)
})

var navmobile = false
$(".navbar-mobile a").on("click", function() {
    if (!navmobile) {
        $(".navbar-mobile a").text("Close")
        $(".navbar-mobile-child .navbar").animate({ opacity: 1 }, "0.2s", function() {
            $(this).css("visibility", "visible")
        })
        navmobile = true
    } else {
        $(".navbar-mobile a").text("MENU")
        $(".navbar-mobile-child .navbar").animate({ opacity: 0 }, "0.2s", function() {
            $(this).css("visibility", "hidden")
        })
        navmobile = false
    }
})