var React = require("react");

var ChirpInput = React.createClass({
    propTypes: {
        onSave: React.PropTypes.func.isRequired
    },
    getInitialState: function () {
        return {
            value: '',

        };
    },
    render: function () {
        return (
            <div className="row">
                <div className="nine columns">
                    <input type="text" ref="box" className="u-full-width" placeholder="Say something"
                           value={this.state.value} onChange={this.handleChange}/>
                </div>
                <div className="three columns">
                    <button className="u-full-width button-primary" onClick={this.handleClick}>
                        Chirp !
                    </button>
                </div>
            </div>
        )
    },
    handleChange: function () {
        this.setState({
            value: this.refs.box.getDOMNode().value
        });
    },
    handleClick: function (evt) {
        this.props.onSave(this.state.value);
        this.setState({
            value: ''
        })
    }
});

module.exports = ChirpInput;
