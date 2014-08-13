Settings = new Meteor.Collection("settings", {
    schema: new SimpleSchema({
        title: {
            type: String,
            label: "Title",
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
            optional: true
        },
        footerCode: {
            type: String,
            optional: true
        }
    })
});