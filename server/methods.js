Meteor.methods({
  recordLoss: function (selectedUser, comment, winnerElo, deltaCups, loserName, loserElo) {
    var elo = Meteor.npmRequire('elo-rank')(15);
    var expectedScoreA = elo.getExpected(winnerElo,loserElo);
    var expectedScoreB = elo.getExpected(loserElo,winnerElo);
    winnerElo = elo.updateRating(expectedScoreA,1,winnerElo);
    loserElo = elo.updateRating(expectedScoreB,0,loserElo);

    var winnerCups = parseInt(Players.findOne({name: selectedUser}).cups);
    var loserCups = parseInt(Players.findOne({name: loserName}).cups);
    deltaCups = parseInt(deltaCups);
    
    Players.update(
      {name: selectedUser},
      {$set: {elo: winnerElo, cups: winnerCups += deltaCups}}
    );

    Players.update(
      {name: loserName},
      {$set: {elo: loserElo, cups: loserCups -= deltaCups}}
    );

    Matches.insert({
      winner: selectedUser,
      loser: loserName,
      deltaCups: deltaCups,
      comment: comment,
      createdAt: new Date()
    });
  }
});
