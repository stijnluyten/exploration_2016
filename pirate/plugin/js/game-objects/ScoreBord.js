var ScoreBord = function(element){
    var score = 0;
    var aantalOefeningenGeprobeerd = 0;
    var maxAantalOefeningen = 3;

    var toonScore = function() {
        $(element).text(score + '/' + maxAantalOefeningen + ' punten');
    }

    return {
        oefeningJuist :function(){
            score++;
            aantalOefeningenGeprobeerd++;
            toonScore();
        },
        oefeningFout :function(){
            aantalOefeningenGeprobeerd++;
            toonScore();
        },
        isSpelGedaan: function() {
            return aantalOefeningenGeprobeerd === maxAantalOefeningen;
        },
        reset: function() {
            score = 0;
            aantalOefeningenGeprobeerd = 0;
            toonScore();
        }
    }
};