$(function() {
    function orientationChange(e) {
        $("body").scrollTop(1);
    }
    $("body").css({ height: "+=300" }).scrollTop(1);
    $(window).bind("orientationchange", orientationChange);
});
