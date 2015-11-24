var React = require('react'),
    RouteHandler = require('react-router').RouteHandler,
    Navigation = require('./navigation');

var App = React.createClass({
    render: function(){
        return(
            <div>
                <div className="row">
                    <h1>Chriper</h1>
                </div>
                <div className="row">
                    <div className="three columns">
                        <Navigation />
                    </div>
                    <div className="nine columns">
                        <RouteHandler />
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = App;
