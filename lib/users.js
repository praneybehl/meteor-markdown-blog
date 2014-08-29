isAdminById = function(userId) {
    var user = Meteor.users.findOne(userId);
    return !!(user && isAdmin(user));
};

isAdmin = function(user) {
    user = (typeof user === 'undefined') ? Meteor.user() : user;
    return !!user && !! user.isAdmin;
};

UI.registerHelper('isAdmin', function(showError) {
    if (isAdmin(Meteor.user())) {
        return true;
    } else {
        if ((typeof showError === "string") && (showError === "true"))
            throwError(i18n.t('Sorry, you do not have access to this page'));
        return false;
    }
});

getUserName = function(user) {
    if (user.username)
        return user.username;
    if (user.services.twitter && user.services.twitter.screenName)
        return user.services.twitter.screenName
    return null;
};

getDisplayName = function(user) {
    return (user.profile && user.profile.name) ? user.profile.name : getUserName(user);
};

getDisplayNameById = function(userId) {
    return getDisplayName(Meteor.users.findOne(userId));
};

getProfileUrl = function(user) {
    return Meteor.absoluteUrl() + 'users/' + slugify(getUserName(user));
};

getProfileUrlById = function(id) {
    return Meteor.absoluteUrl() + 'users/' + id;
};

getProfileUrlBySlug = function(slug) {
    return Meteor.absoluteUrl() + 'users/' + slug;
};

getEmail = function(user) {
    if (user.profile && user.profile.email) {
        return user.profile.email;
    } else {
        return null;
    }
};

getCurrentUserEmail = function() {
    return Meteor.user() ? getEmail(Meteor.user()) : '';
};

getUserSetting = function(setting, defaultValue, user) {
    var user = (typeof user == 'undefined') ? Meteor.user() : user;
    var defaultValue = (typeof defaultValue == "undefined") ? null : defaultValue;
    var settingValue = getProperty(user.profile, setting);
    return (settingValue == null) ? defaultValue : settingValue;
};

setUserSetting = function(setting, value, userArgument) {
    // note: for some very weird reason, doesn't work when called from Accounts.onCreateUser

    var user;

    if (Meteor.isClient) {
        user = Meteor.user(); // on client, default to current user
    } else if (Meteor.isServer) {
        user = userArgument; // on server, use argument
    }

    if (!user)
        throw new Meteor.Error(500, 'User not defined')

    console.log('Setting user setting "' + setting + '" to "' + value + '" for ' + getUserName(user))
    var find = {
        _id: user._id
    };
    var field = {};
    field['profile.' + setting] = value;
    var options = {
        $set: field
    };
    console.log(find)
    console.log(options)
    var result = Meteor.users.update(find, options, {
        validate: false
    });
};

getProperty = function(object, property) {
    // recursive function to get nested properties
    var array = property.split('.');
    if (array.length > 1) {
        var parent = array.shift();
        // if our property is not at this level, call function again one level deeper if we can go deeper, else return null
        return (typeof object[parent] == "undefined") ? null : getProperty(object[parent], array.join('.'));
    } else {
        // else return property
        return object[array[0]];
    }
};

UI.registerHelper('isLoggedIn', function() {
    return !!Meteor.user();
});
