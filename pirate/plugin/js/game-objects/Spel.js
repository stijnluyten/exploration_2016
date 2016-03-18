define(
    ["game-objects/bootFabriek", "game-objects/vaarRoute","game-objects/ScoreBord","jquery", "game-objects/Boot", "game-objects/Vloot"],
    function (bootFabriek,vaarRoute,scoreBord) {
        var vloot;

        function vulVloot() {
            var boten = [];

            return $.getJSON("../data/DataBank.json", function (jsonFromFile) {
                jsonFromFile.forEach(function (jsonObject) {
                    boten.push(bootFabriek.maakBoot(jsonObject));
                });

                vloot = new Vloot(boten);
            });
        }

        function initBoot(boot) {
            $('.voorraad').empty();
            var voorraad = $('.voorraad')[0];

            boot.oplossingen.forEach(
                function (opl) {
                    $(voorraad).append("<div class='bal'>" + opl + "</div>");
                }
            );

            $($(".opgave")[0]).text(boot.som);

            $('.bal').on('click', function () {
                var keuze = $(this).text();
                if (parseInt(keuze) === boot.oplossing) {
                    vaarRoute.zinkBoot(volgendeLevel);
                    scoreBord.oefeningJuist();
                }
                voorraad.removeChild(event.target)
            });

            vaarRoute.startMetVaren(bootIsVoorbijGegaan);
        }

        function bootIsVoorbijGegaan() {
            scoreBord.oefeningFout();
            volgendeLevel();
        }

        function volgendeLevel() {
            if (scoreBord.isSpelGedaan()) {
                scoreBord.toonRanking();
                $(".overlay").show();
            } else {
                initBoot(vloot.randomBoot());
                vaarRoute.resetBoot();
            }
        }


        return {
            start: function () {
                $(".overlay").hide();
                scoreBord.reset();
                vulVloot().then(function () {
                    initBoot(vloot.randomBoot());
                });
            }
        }
    });
