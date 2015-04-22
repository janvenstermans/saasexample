TwitterStreamListener = function() {
    this.streams = {};
}

TwitterStreamListener.prototype.start = function() {
    var self = this;
    var dashboardCursor = Dashboard.find({
        state: "running"
    }).observe({
        added: function(dashboard) {
            console.log("starting dashboard");
            self.startStream(dashboard);
        },
        removed: function(dashboard) {
            self.streams[dashboard._id].stop();
            delete self.streams[dashboard._id];
        }
    });
}

TwitterStreamListener.prototype.startStream = function(dashboard) {
    var twitterStream = new TwitterStream(dashboard);
    this.streams[dashboard._id] = twitterStream;
    twitterStream.start();
}