// Post Item Templates

Template.Posts.helpers({

    posts: function() {
        return Posts.find({}, { sort: {createdAt: -1} });
    }

});


Template.Posts.rendered = function () {
    $('body').addClass('manage');  // required for Ghost layout styles to work properly
};

// Post Item Templates

Template.PostItem.helpers({
    isSelected: function () {
        var routeId = Router.current().params._id;

        if (routeId === this._id) {
            return "active";
        } else {
            return "";
        }
    }
});