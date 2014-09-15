Template.PostPreview.helpers({
    postPreview: function() {
        return Posts.findOne(this.id).html;
    }
});