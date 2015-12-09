Meteor.methods({
  recordLoss: function (loser, winner) {
    var elo = Meteor.npmRequire('elo-rank')(15);
    var playerA = winner;
    var playerB = loser;

    var expectedScoreA = elo.getExpected(playerA,playerB);
    var expectedScoreB = elo.getExpected(playerB,playerA);
    playerA = elo.updateRating(expectedScoreA,1,playerA);
    playerB = elo.updateRating(expectedScoreB,0,playerB);

    Matches.insert({
      winner: 'Test Winner',
      loser: 'Test Loser',
      winnerElo: playerA,
      deltaCups: 3,
      createdAt: new Date()
    });

  },
  checkServer: function () {
    return "Everything looks ok here";
  }
});
