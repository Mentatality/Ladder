Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('matches');}
});

Router.route('/', {name: 'rankingsList'});
Router.route('report_loss', {name: 'reportLoss'});
Router.route('recent_matches', {name: 'recentMatches'});
