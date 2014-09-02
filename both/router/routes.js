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
});


Router.map(function() {

    this.route('Home', { path: '/'});
    this.route('Settings', {path: '/settings'});

    this.route('Posts', { path: '/posts'});
    this.route('PostsNew', { path: '/posts/new'});
    this.route('PostsShow', { path: '/posts/:_idOrSlug'});
    this.route('PostsUpdate', { path: '/posts/:_idOrSlug/edit'});

});