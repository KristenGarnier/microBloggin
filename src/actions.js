var dispacher = require('./dispacher'),
    constants = require('./const');

Object.keys(constants).forEach(function (key) {

    var funcName = key.split('_').map(function (word, i) {
        if(i === 0) return word.toLowerCase();
        return word[0] + word.slice(1).toLocaleLowerCase();
    }).join('');

    exports[funcName] = function (data) {
        dispacher.dispatch({
            actionType: constants[key],
            data: data
        });
    };

});

