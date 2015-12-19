Template.rankingsList.helpers({
  players: function () {
    return Players.find({}, {sort: {elo: -1}});
  }
});
