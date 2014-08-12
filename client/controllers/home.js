HomeController = RouteController.extend({
    layoutTemplate: "FrontendLayout",

    fastRender: true,

    waitOn: function () {
    },

    data: function () {
    },

    action: function () {
        document.title = 'Home';
        this.render();
    }
});
