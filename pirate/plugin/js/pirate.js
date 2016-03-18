$(function() {

    $("#startSpelKnop").click(function () {
        var spel = new Spel();
        spel.start();
    });
});




$(function() {
    require(['game-objects/spel'], function(spel){
        $("#startSpelKnop").click(function () {
            spel.start();
        });
    });

   
});
