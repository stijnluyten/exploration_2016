
function animateBoot() {
    $(".vijand").animate(
        {
            left: "+=200"
        },
        {
            duration: 10000,
            easing: "linear",
            fail: function () {
                console.log("animation failed...");
            }
        });
}

function zinkBoot() {
    $(".vijand").stop();
    $(".vijand img").css("transform", "rotate(270deg)");
    $(".vijand").animate({
        height: "toggle",
        top: "+=120"
    }, {
        duration: 2000,
        done: function () {
            console.log("start hier een nieuwe boot");
            resetBoot();
        }
    });
}

function resetBoot() {
    $(".vijand img").css("transform", "rotate(0deg)")
    $(".vijand")
        .css("left", "0px")
        .css("top", "150px")
        .show();
}
