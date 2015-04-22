Template.connectToTwitter.events({
    "click #connect-to-twitter": function(event, template) {
        Meteor.connectWith('twitter', {}, function(err) {
            if (err && err[0] && err[0] instanceof Error) {
                Bert.alert(err[0].reason, 'danger');
                return false;
            }
            Bert.alert('Successfully connected to Twitter!', 'success');
        });
    }
});