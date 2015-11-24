var React = require("react"),
    Box = require('./chirpBox'),
    moment = require('moment'),
    UserStore = require('../stores/users');

var ChirpList = React.createClass({
    proptypes: {
        chrips : React.PropTypes.array.isRequired
    },
    render: function () {
        var items = this.props.chrips.map(function(item){
            return <Box key={item.cid}
                        user={item}
                        timestamp={moment(item.$created).fromNow()}>
                    {item.text}
                </Box>;
        });
        return (
            <ul>
                {items}
            </ul>
        )
    }
});

module.exports = ChirpList;
