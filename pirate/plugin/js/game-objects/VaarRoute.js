var VaarRoute = function () {
    var resetBootVar = function () {
        $(".vijand img").css("transform", "rotate(0deg)");
        $(".vijand")
            .css("left", "-120px")
            .css("top", "150px")
            .show();
    };

    return {
        startMetVaren: function (doneFunction) {
            $(".vijand").animate(
                {
                    left: "+=920px"
                },
                {
                    duration: 10000,
                    easing: "linear",
                    done: function () {
                        doneFunction();
                    }
                });
        },
        stopBoot: function () {
            $(".vijand").stop();
        },
        zinkBoot: function (doneFunction) {
            $(".vijand").stop();
            $(".vijand img").css("transform", "rotate(270deg)");
            $(".vijand").animate({
                height: "toggle",
                top: "+=120"
            }, {
                duration: 2000,
                done: function () {
                    resetBootVar();
                    doneFunction();
                }
            });
        },
        resetBoot: resetBootVar
    }
};
