requirejs.config({
    baseUrl: '../js',
    paths: {
        jquery: './ext/jquery-2.2.2.min',
        gameobjects: './game-objects'
    }

});


require(['game-objects/spel', 'game-objects/scoreBord', 'jquery'], function (spel, scoreBord) {
    $(
        function () {
            $("#startSpelKnop").click(function () {
                spel.start();
            });

            scoreBord.toonRanking();
        });
});

function save() {
    var payload = {'ranking': [ {speler: 'Ruben', score: '3'}, {speler: 'Stijn', score: '1'} ]};
    chrome.storage.sync.set(payload, function() {
        console.log('Settings saved');
    });
}
