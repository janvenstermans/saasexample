Meteor.publish('singleDashboard', function(id) {
  check(id, String);

  if (!this.userId) {
    this.ready();
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
      this.ready();
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