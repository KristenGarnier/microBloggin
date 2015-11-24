var React = require("react"),
    UserStore = require('../stores/users'),
    ChripStore = require('../stores/chripsStore'),
    utils = require('../utils'),
    FollowButton = require('./followButton');

var UserProfile = React.createClass({
    mixins: [UserStore.mixin, ChripStore.mixin],
    getInitialState: function(){
        var id = parseInt(this.props.params.id, 10);

        return {
            user: UserStore.get(id) || {},
            chirps: ChripStore.byUserId(id)
        };
    },
    componentDidMount: function () {
        UserStore.addChangeListener(this.onChange);
        ChripStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function () {
        UserStore.removeChangeListener(this.onChange);
        ChripStore.removeChangeListener(this.onChange);
    },
    onChange: function () {
        this.setState(this.getInitialState());
    },
    render: function () {
        var chirps = this.state.chirps.map(function(chirp){
            return <li key={chirp.cid}> {chirp.text} </li>;
        });
        return (
            <div>
                <img src={utils.avatar(this.state.user.email)} className="two columns"/>
                <div className="ten columns">
                    <h2>{this.state.user.fullname}</h2>
                    <h3 className="timestamp">{this.state.user.username}</h3>

                    <p>
                        <FollowButton userId={this.state.user.cid} />
                    </p>
                    <ul>
                        {chirps}
                    </ul>
                </div>
            </div>
        )
    }
});

module.exports = UserProfile;
