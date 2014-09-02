Posts = new Meteor.Collection("posts", {
    schema: new SimpleSchema({
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
                var slug = slugify(title);
                return slug;
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
            optional: false,
            autoValue: function() {
                return getDisplayNameById(this.userId);
            },
        },
        authorId: {
            type: String,
            label: "Author ID",
            autoValue: function() {
                return this.userId
            },
            optional: false
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
    })
});