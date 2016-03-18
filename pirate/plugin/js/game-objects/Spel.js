var Spel = function() {
    var scoreBord;
    var vloot;
    var vaarRoute = new VaarRoute();

    function vulVloot() {
        var bootFabriek = new BootFabriek();
        var boten = [];

        return $.getJSON("../data/DataBank.json", function(jsonFromFile) {
            jsonFromFile.forEach(function(jsonObject) {
                boten.push(bootFabriek.maakBoot(jsonObject));
            });

            vloot = new Vloot(boten);
        });
    }

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
                vaarRoute.zinkBoot(volgendeLevel);
                scoreBord.verhoogScore();
            }
            voorraad.removeChild(event.target)
        });

        vaarRoute.startMetVaren(volgendeLevel);
    }

    function volgendeLevel() {
        var voorraad = $('.voorraad');
        voorraad.empty();
        initBoot(vloot.randomBoot());
        vaarRoute.resetBoot();
    }

    return {
        start: function() {
            scoreBord = new ScoreBord($('#scorebord'));
            vaarRoute = new VaarRoute();
            vulVloot().then(function() {
                initBoot(vloot.randomBoot());
            });
        }
    }
};