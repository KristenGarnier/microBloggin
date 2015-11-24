var constants = require('../const');

var UserStore = module.exports = require('./store').extend({
    init: function () {
        this.bind(constants.GOT_USERS, this.set);
        this.bind(constants.FOLLOWED, this.udpateUser);
        this.bind(constants.UNFOLLOWED, this.udpateUser);
    },
    currentUser: USER,
    udpateUser: function(data){
        this.currentUser = data;
    }
});
