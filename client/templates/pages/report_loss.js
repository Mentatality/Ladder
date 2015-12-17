Template.reportLoss.helpers({
  players: function () {
    return Players.find({});
  }
});


Template.reportLoss.events({
  'submit form': function() {
    var comment = prompt("You are shamed in your loss. Do you have any comments on the match?");
    var x = document.getElementById("player-name");

    
    //call method to log with a (winner elo, loser elo, comment string)
  }
});
