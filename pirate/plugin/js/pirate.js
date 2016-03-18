requirejs.config({
    baseUrl: '../js',
    paths: {
        jquery: './ext/jquery-2.2.2.min',
        gameobjects: './game-objects'
    }

});


require(['game-objects/spel', 'jquery'], function (spel) {
    $(
        function () {
            $("#startSpelKnop").click(function () {
                spel.start();
            });
        });
});