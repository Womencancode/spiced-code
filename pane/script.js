var animationArea = $(".container");
var bar = $(".bar");
var startPoint;
var actualPoint;
var barPosition;
var containerOffset = animationArea.offset().left;

bar.on("mousedown", function(e) {
    startPoint = e.pageX;
    console.log(startPoint);
    animationArea
        .on("mousemove.mover", function(e) {
            actualPoint = e.pageX;
            barPosition = actualPoint;
            console.log(barPosition);
            $(".top-image").css({
                width: barPosition - containerOffset - 10 + "px"
            });
            bar.css({ left: barPosition - containerOffset - 10 + "px" });
        })
        .on("mouseup", function(e) {
            $(e.currentTarget).off(".mover");
        });
});
