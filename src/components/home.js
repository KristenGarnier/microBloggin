var React = require("react"),
    ChirpInput = require('./chirpInput'),
    actions = require('../actions'),
    ChripStore = require('../stores/chripsStore'),
    ChirpList = require('./chirpList');

var Home = React.createClass({
    mixins: [ChripStore.mixin],
    getInitialState: function () {
        return {
            chrips: ChripStore.timeline()
        };
    },
    onChange: function(){
        this.setState(this.getInitialState());
    },
    render: function () {
        return (
            <div>
                <ChirpInput onSave={this.saveChirp}/>
                <ChirpList chrips={this.state.chrips}/>
            </div>
        )
    },
    saveChirp: function (text) {
        actions.chirp(text);
    }
});

module.exports = Home;
