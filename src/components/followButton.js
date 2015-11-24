var React = require("react"),
    actions = require('../actions'),
    UserStore = require('../stores/users');

var FollowButton = React.createClass({
    mixins : [UserStore.mixin],
    proptypes: {
        userId : React.PropTypes.string.isRequired
    },
    getInitialState: function(){
        return {
            id: UserStore.currentUser.cid,
            currentlyFollowing: UserStore.currentUser.following
        }
    },
    onChange: function () {
        this.setState(this.getInitialState());
    },
    render: function () {
        if(this.state.id === this.props.userId) return <span>This is you !</span>;
        var text, action;
        if (this.state.currentlyFollowing.indexOf(this.props.userId) > -1){
            text = 'Unfollow';
            action = this.unfollow;
        } else {
            text = 'Follow';
            action = this.follow;
        }
        return (
            <button onClick={action}>
                {text}
            </button>
        )
    },
    unfollow : function () {
        actions.unfollow(this.props.userId);
    },
    follow : function(){
        actions.follow(this.props.userId);
    }
});

module.exports = FollowButton;
