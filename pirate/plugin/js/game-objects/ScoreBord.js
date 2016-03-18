define(
    ["jquery"], function () {
        var score = 0;
        var aantalOefeningenGeprobeerd = 0;
        var maxAantalOefeningen = 3;

        var toonScore = function () {
            $('#scorebord').text(score + '/' + maxAantalOefeningen + ' punten');
        }

        return {
            oefeningJuist: function () {
                score++;
                aantalOefeningenGeprobeerd++;
                toonScore();
            },
            oefeningFout: function () {
                aantalOefeningenGeprobeerd++;
                toonScore();
            },
            isSpelGedaan: function () {
                return aantalOefeningenGeprobeerd === maxAantalOefeningen;
            },
            reset: function () {
                score = 0;
                aantalOefeningenGeprobeerd = 0;
                toonScore();
            },
            toonRanking: function () {
                chrome.storage.sync.get('ranking', function (items) {
                    $("#topscores ul").empty();

                    if (items.ranking) {
                        items.ranking.forEach(function (item) {
                            $("#topscores ul").append("<li>" + item.speler + " : " + item.score + "</li>");
                        });
                    }
                });
            },
            saveRanking: function() {

            }
        }
    });