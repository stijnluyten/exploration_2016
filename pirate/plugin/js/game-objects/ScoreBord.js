define(
    ["jquery"], function () {
        var score = 0;
        var aantalOefeningenGeprobeerd = 0;
        var maxAantalOefeningen = 3;

        var ranking;

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
                console.log(ranking);
            },
            toonRanking: function () {
                chrome.storage.sync.get('ranking', function (items) {
                    $("#topscores ul").empty();
                    ranking = items.ranking;
                    console.log("ranking: " + ranking);
                    if (ranking) {
                        ranking.forEach(function (item) {
                            $("#topscores ul").append("<li>" + item.speler + " : " + item.score + "</li>");
                        });
                    } else {
                        ranking = [];
                    }
                });
            },
            saveRanking: function(speler) {
                console.log(ranking);

                ranking.push({"speler": speler, "score": score});
                var payload = {'ranking': ranking};

                chrome.storage.sync.set(payload, function() {
                    console.log('Settings saved');
                });
            }
        }
    });