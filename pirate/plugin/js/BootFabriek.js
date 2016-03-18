var BootFabriek = function() {
    return {
        maakBoot: function(jsonBoot) {
            var boot = new Boot();
            boot.som = jsonBoot.som;
            boot.tijd = jsonBoot.tijd;
            boot.oplossingen = jsonBoot.oplossingen;
            boot.oplossing = jsonBoot.oplossing;
            return boot;
        }
    }
};