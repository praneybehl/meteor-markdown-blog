
/**
 *  General Helpers
 */

UI.registerHelper('getSetting', function(setting, defaultArgument){
    var defaultArgument = (typeof defaultArgument !== 'undefined') ? defaultArgument : '';
    var setting = getSetting(setting, defaultArgument);
    return setting;
});


/**
 *  User Helpers
 */

UI.registerHelper('isAdmin', function(showError) {
    if (isAdmin(Meteor.user())) {
        return true;
    } else {
        if ((typeof showError === "string") && (showError === "true"))
            throwError(i18n.t('Sorry, you do not have access to this page'));
        return false;
    }
});

UI.registerHelper('isLoggedIn', function() {
    return !!Meteor.user();
});

UI.registerHelper('displayName', function() {
    return getDisplayName(Meteor.user());
});

UI.registerHelper('gravatar', function() {
    return Gravatar.imageUrl(getCurrentUserEmail());
});