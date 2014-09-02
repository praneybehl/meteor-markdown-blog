
Template.PublishBar.events({

    'click .post-settings-popup': function(e) {
        e.preventDefault();
        $('.post-settings-popup').addClass('open');
    },

    'click .publish-options-menu': function(e) {
        e.preventDefault();
        $('.publish-options-menu').toggleClass('open');
    }

});