var Flux = require('flux');

var dispacher = module.exports = new Flux.Dispatcher();

dispacher.register(function(action){
    console.log(action);
});
