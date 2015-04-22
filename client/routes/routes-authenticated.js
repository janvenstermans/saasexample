/*
* Routes: Authenticated
* Routes that are only visible to authenticated users.
*/

Router.route('index', {
  path: '/',
  template: 'index',
  subscriptions: function(){
    return Meteor.subscribe('examplePublication');
    /* 
    return [
      Meteor.subscribe('examplePublication'),
      Meteor.subscribe('examplePublication2')
    ];
    */
  },
  onBeforeAction: function(){
    // Code to run before route goes here.
    this.next();
  }
});
Router.route('connect-to-twitter', {
    path: '/connect-to-twitter',
    template: 'connectToTwitter'
});
Router.route('dashboard.new', {
    path: '/dashboard/new',
    template: 'newDashboard'
});

Router.route('dashboard.show', {
    path: '/dashboard/:_id',
    template: 'showDashboard',
    waitOn: function() {
        return Meteor.subscribe('singleDashboard', this.params._id);
    }
});