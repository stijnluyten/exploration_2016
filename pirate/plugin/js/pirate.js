var ScoreBord = function(element){
    var score = 0;

    return {
        verhoogScore :function(){
            score++;
            $(element).text(score + ' punten');
        }
    }
};

var scoreBord;

$(function () {
    scoreBord = new ScoreBord($('#scorebord'));
    initBoot(randomBoot());
});

function initBoot(boot) {
    var voorraad = $('.voorraad')[0];

    boot.oplossingen.forEach(
        function (opl) {
            $(voorraad).append("<div class='bal'>" + opl + "</div>");
        }
    );

    $($(".opgave")[0]).text(boot.som);

    $('.bal').on('click', function(){
        var keuze = $(this).text();
        if (parseInt(keuze) === boot.oplossing) {
            scoreBord.verhoogScore();
            volgendeLevel();
        } else {
            voorraad.removeChild(event.target)
        }
    });
}

function volgendeLevel() {
    var voorraad = $('.voorraad');
    voorraad.empty();
    initBoot(randomBoot());
}

function randomBoot() {
    var index = Math.floor((Math.random() * boten.length));
    return boten[index];
}