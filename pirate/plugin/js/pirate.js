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

    $('.bal').on('click', function(){
        var keuze = $(this).text();
        if(parseInt(keuze) === boot.oplossing){
            verhoogScore();
        }else{
            console.log('niet correct');
        }
    });
});

function verhoogScore() {
    score++;
    $('#scorebord').text(score + ' punten');
}