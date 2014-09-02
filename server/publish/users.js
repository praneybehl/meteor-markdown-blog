/*****************************************************************************/
/* Users Publish Functions
/*****************************************************************************/

Meteor.publish('all-users', function () {
    if (isAdminById(this.userId)){
        return Meteor.users.find({}, {
            fields: {services: 0}
        });
    } else {
        this.ready();
    }
});

Meteor.publish('user-profile', function () {
    if (this.userId){
        return Meteor.users.find(this.userId, {
            fields: {services: 0}
        });
    } else {
        this.ready();
    }
});