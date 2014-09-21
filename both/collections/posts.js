Posts = new Meteor.Collection("posts");

var postSchema = {
    title: {
        type: String,
        label: "Title",
        optional: false
    },
    slug: {
        type: String,
        label: "Slug",
        autoValue: function() {
            var title = this.field("title").value;
            return slugify(title);
        },
        optional: true
    },
    markdown: {
        type: String,
        optional: true,
        defaultValue: ''
    },
    html: {
        type: String,
        autoValue: function() {
            return marked(this.field("markdown").value);
        },
        optional: true
    },
    wordCount: {
        type: Number,
        optional: true
    },
    image: {
        type: String,
        optional: true
    },
    featured: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    isPage: {
        type: Boolean,
        optional: false,
        defaultValue: false
    },
    status: {
        type: String,
        optional: true,
        defaultValue: 'draft'
    },
    author: {
        type: String,
        optional: true,
        autoValue: function() {
            return Meteor.user().profile.name;
        }
    },
    authorId: {
        type: String,
        label: "Author ID",
        autoValue: function() {
            return this.userId
        },
        optional: true
    },
    createdAt: {
        type: Date,
        autoValue: function() {
            if (this.isInsert) {
                return new Date;
            } else if (this.isUpsert) {
                return {
                    $setOnInsert: new Date
                };
            } else {
                this.unset();
            }
        },
        denyUpdate: true
    },
    updatedAt: {
        type: Date,
        autoValue: function() {
            if (this.isUpdate) {
                return new Date();
            }
        },
        denyInsert: true,
        optional: true
    },
    publishedAt: {
        type: Date,
        optional: true
    },
    publishedBy: {
        type: String,
        optional: true
    },
    tags: {
        type: [String],
        optional: true
    },
    isPublished: {
        type: Boolean,
        optional: true,
        defaultValue: false
    },
    isDraft: {
        type: Boolean,
        optional: true,
        defaultValue: true
    },
};

Posts.attachSchema(new SimpleSchema(postSchema));