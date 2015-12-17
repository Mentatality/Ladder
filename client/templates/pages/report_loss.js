Template.reportLoss.helpers({
  players: function () {
    return Players.find({});
  }
});


Template.reportLoss.events({
  'submit .report-loss': function(e, tmpl) {
    e.preventDefault();
    var comment = prompt("You are shamed in your loss. Do you have any comments on the match?");
    var selectedUser = tmpl.find('.player-name :selected').text;
    var winnerElo = Players.findOne({name: selectedUser}).elo;
    var loserName = Meteor.user().username;
    //var loserElo = Players.findOne({name: loserName}).elo;
    var deltaCups = tmpl.find('.delta-cups :selected').text;

    Meteor.call("recordLoss", selectedUser, comment, winnerElo, deltaCups, loserName);
  }
});
