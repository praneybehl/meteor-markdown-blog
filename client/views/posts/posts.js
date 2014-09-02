// Post Item Templates

Template.Posts.helpers({

    posts: function() {
        return Posts.find({}, {
            sort: {
                createdAt: -1
            }
        });
    }

});


Template.Posts.rendered = function () {
    $('body').addClass('manage');  // required for Ghost layout styles to work properly
};

// Post Item Templates

Template.PostItem.helpers({
    isSelected: function () {
        var path = Router._currentController.path;
        var i = path.lastIndexOf('/');
        var routeId = path.substring(i + 1);

        if (routeId === this._id) {
            return "active";
        } else {
            return "";
        }
    }
});