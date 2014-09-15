Template.FloatingHeader.events({

    'click .post-settings': function(e) {
        e.preventDefault();
        $('.post-settings, .post-settings-menu').toggleClass('open');
    }

});