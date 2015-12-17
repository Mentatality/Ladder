Meteor.methods({
  recordLoss: function (selectedUser, comment, winnerElo, deltaCups, loserName) {
    //var elo = Meteor.npmRequire('elo-rank')(15);
    //var playerA = game.winnerElo;
    //var playerB = game.loserElo;

    //var expectedScoreA = elo.getExpected(playerA,playerB);
    //var expectedScoreB = elo.getExpected(playerB,playerA);
    //playerA = elo.updateRating(expectedScoreA,1,playerA);
    //playerB = elo.updateRating(expectedScoreB,0,playerB);

    Matches.insert({
      winner: selectedUser,
      loser: loserName,
      deltaCups: deltaCups,
      comment: comment,
      createdAt: new Date()
    });
  }
});
