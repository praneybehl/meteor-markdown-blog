/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
    layoutTemplate: 'FrontendLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound'
});


Router.map(function() {

    this.route('Home', { path: '/'});
    this.route('Settings', {path: '/settings'});

    this.route('Posts', { path: '/posts'});
    this.route('PostsNew', { path: '/posts/new'});
    this.route('PostsShow', { path: '/posts/:_idOrSlug'});
    this.route('PostsUpdate', { path: '/posts/:_idOrSlug/edit'});

});