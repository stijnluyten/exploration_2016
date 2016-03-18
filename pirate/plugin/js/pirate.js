var boot = {
    som: "1+1",
    tijd: 5,
    oplossingen: [1, 2, 3, 4],
    oplossing: 2
};

var score = 0;

$(function () {
    var voorraad = $('.voorraad')[0];

    boot.oplossingen.forEach(
        function (opl) {
            $(voorraad).append("<div class='bal'>" + opl + "</div>");
        }
    );

    $($(".opgave")[0]).text(boot.som);


    var scoreBord = new ScoreBord($('#scorebord'));
    $('.bal').on('click', function(){
        var keuze = $(this).text();
        if(parseInt(keuze) === boot.oplossing){
            scoreBord.verhoogScore();
        }else{
            console.log('niet correct');
        }
    });
});


var ScoreBord = function(element){
    var score = 0;

    return {
        verhoogScore :function(){
            score++;
            $(element).text(score + ' punten');
        }
    }
}