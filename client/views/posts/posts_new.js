
Template.PostsNew.events({
    'click .button-save': function (e, t) {
        e.preventDefault();

        var post = {
            title: $('#entry-title').val(),
            markdown: Session.get('editorValue'),
            wordCount: Session.get('wordCount')
        };

        // console.log(post);
        if(post){
            if(!post.title){
                throw new Meteor.Error(602, 'Please fill in a title');
            }
            if(!post.markdown){
                throw new Meteor.Error(603, 'Please write some post content!');
            }
            var id = Posts.insert(post);
            Router.go('Posts', {_id: id});
        }
    }
});