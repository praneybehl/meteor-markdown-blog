/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
    layoutTemplate: 'AdminLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound',

    waitOn: function () {
        return [
            Meteor.subscribe('settings'),
            Meteor.subscribe('user-profile'),
            Meteor.subscribe('posts')
        ]
    },
    data: function() {
        return {
            user: Meteor.user(),
            latestPostId: function() {
                var post = Posts.find({},{sort: { createdAt: -1 }, limit: 1}).fetch();
                var id = _.pluck(post, '_id');
                return id;
        }
    }
});


var mustBeSignedIn = function() {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        Router.go('entrySignIn');
    }
};

Router.onBeforeAction(mustBeSignedIn, {
    except: [
        'entrySignIn',
        'entrySignUp',
        'entryForgotPassword',
        'entryResetPassword',
        'Loading',
        'apiRoute'
    ]
});


Router.map(function() {

    this.route('Home', { path: '/' });
    this.route('Settings', { path: '/settings' });

    this.route('Posts', { path: '/posts/:_id' });
    this.route('PostsNew', { path: '/write' });
    this.route('PostsShow', { path: '/writing/:slug' });
    this.route('PostsEdit', { path: '/posts/:_id/edit' });


});