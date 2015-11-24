var API = require('./api'),
    React = require('react'),
    Router = require('react-router'),
    Route = Router.Route,
    App = require('./components/app'),
    Home = require('./components/home'),
    UserList = require('./components/userList'),
    UserProfile = require('./components/userProfile');

var routes = (
        <Route handler={App}>
            <Route name="home" path="/" handler={Home}/>
            <Route name="users" handler={UserList}/>
            <Route name="user" path="/user/:id" handler={UserProfile}/>
        </Route>
    );

API.startFetchingChirps();
API.startFetchingUsers();

Router.run(routes, Router.HashLocation, function(Root){
    React.render(<Root />, document.getElementById('app'));
});