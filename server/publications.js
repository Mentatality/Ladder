Meteor.publish('matches', function() {
  return Matches.find();
});
Meteor.publish('players', function() {
  return Players.find();
});
