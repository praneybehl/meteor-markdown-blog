Meteor.startup(function() {

    AccountsEntry.config({
        // logo: 'logo.png',               // if set displays logo above sign-in options
        homeRoute: '/',                    // path to redirect to after sign-out
        dashboardRoute: '/',               // path to redirect to after successful sign-in
        passwordSignupFields: 'EMAIL_ONLY',
        showOtherLoginServices: false,     // Set to false to hide oauth login buttons on the signin/signup pages.
        extraSignUpFields: [{              // Add extra signup fields on the signup page
            field: "fullName",             // The database property you want to store the data in
            name: "",                      // An initial value for the field, if you want one
            label: "Full Name",            // The html label for the field
            placeholder: "Your Full Name", // A placeholder for the field
            type: "text",                  // The type of field you want
            required: true                 // Adds html 5 required property if true
        }]
    });

});
