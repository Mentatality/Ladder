if (Matches.find().count() === 0) {
  Matches.insert({
    winner: 'Starfish',
    loser: 'Dupy',
    deltaCups: 2,
    comments: "I'm so angry!",
    createdAt: new Date()
  });
  Matches.insert({
    winner: 'Dupy',
    loser: 'Snarf',
    deltaCups: 3,
    comments: "I suck!",
    createdAt: new Date()
  });
}
