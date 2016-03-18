var Vloot = function(vloot) {
    var deVloot = vloot;

    return {
        randomBoot: function() {
            var index = Math.floor((Math.random() * vloot.length));
            return vloot[index];
        }
    }
};
