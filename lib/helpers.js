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


// --- Dynamic Templates --- //

templates = {};

getTemplate = function (name) {
  // if template has been overwritten, return this; else return template name
  return !!templates[name] ? templates[name] : name;
};


