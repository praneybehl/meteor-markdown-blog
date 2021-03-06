Settings = new Meteor.Collection("settings");

var settingsSchema = {
    title: {
        type: String,
        label: "Site Title",
        optional: true
    },
    tagline: {
        type: String,
        label: "Tagline",
        optional: true
    },
    postsPerPage: {
        type: Number,
        defaultValue: 10,
        optional: true
    },
    segmentIOId: {
        type: String,
        label: "Segment.io ID",
        optional: true
    },
    footerCode: {
        type: String,
        label: "Footer Code",
        optional: true
    }
};

Settings.attachSchema(new SimpleSchema(settingsSchema));