if (Matches.find().count() === 0) {
  Matches.insert({
    winner: 'Starfish',
    loser: 'Dupy',
    deltaCups: 2,
    createdAt: new Date()
  });
  Matches.insert({
    winner: 'Dupy',
    loser: 'Snarf',
    deltaCups: 3,
    createdAt: new Date()
  });
}
