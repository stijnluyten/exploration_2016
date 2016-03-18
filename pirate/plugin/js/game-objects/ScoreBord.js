var ScoreBord = function(element){
    var score = 0;

    return {
        verhoogScore :function(){
            score++;
            $(element).text(score + ' punten');
        }
    }
};