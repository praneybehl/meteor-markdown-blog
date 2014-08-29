getSiteUrl = function() {
    return getSetting('siteUrl', Meteor.absoluteUrl());
};

getSetting = function(setting, defaultValue) {
    var settings = Settings.find().fetch()[0];
    if (settings && (typeof settings[setting] !== 'undefined')) {
        return settings[setting];
    } else {
        return typeof defaultValue === 'undefined' ? '' : defaultValue;
    }
};

UI.registerHelper('getSetting', function(setting, defaultArgument){
    var defaultArgument = (typeof defaultArgument !== 'undefined') ? defaultArgument : '';
    var setting = getSetting(setting, defaultArgument);
    return setting;
});

scrollPageTo = function(selector) {
    $('body').scrollTop($(selector).offset().top);
};

slugify = function(text) {
    if (text) {
        text = text.replace(/[^-a-zA-Z0-9,&\s]+/ig, '');
        text = text.replace(/-/gi, "_");
        text = text.replace(/\s/gi, "-");
        text = text.toLowerCase();
    }
    return text;
};
