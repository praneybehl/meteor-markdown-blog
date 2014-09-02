Tags = new Meteor.Collection("tags", {
    schema: new SimpleSchema({
        name: {
            type: String,
            label: "Title",
            optional: false
        },
        slug: {
            type: String,
            label: "Slug",
            autoValue: function() {
                var title = this.field("name").value;
                var slug = slugify(title);
                return slug;
            },
            optional: true
        },
        description: {
            type: String,
            label: "Description",
            optional: true
        },
        addedBy: {
            type: String,
            label: "Added By",
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
        }
    })
});
