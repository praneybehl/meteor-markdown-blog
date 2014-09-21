Template.PostPreview.events({

    'click .post-settings': function(e) {
        e.preventDefault();
        $('.post-settings, .post-settings-menu').toggleClass('open');
    }

});


Template.PostPreview.helpers({

    post: function() {
        return Posts.findOne(this.id);
    }

});