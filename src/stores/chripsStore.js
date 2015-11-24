var constants = require('../const');

var ChirpStore = module.exports = require('./store').extend({
    init: function () {
        this.bind(constants.GOT_CHIRPS, this.set);
        this.bind(constants.CHIRPED, this.add);
    }
});


