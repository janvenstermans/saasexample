Meteor.publish('singleDashboard', function(id) {
    console.log(id);
    check(id, String);

    console.log(this.userId);
    if (!this.userId) {
        self.ready();
        return null;
    }
    return Dashboard.find({
        _id: id,
        userId: this.userId
    });

});

Meteor.publish("tweets", function(dashboardId) {
    check(dashboardId, String);
    if (!this.userId) {
        self.ready();
        return nul;
    }
    return Tweets.find({
        dashboardId: dashboardId
    }, {
        limit: 200,
        sort: {
            createdAt: -1
        }
    });

});