Template.recentMatches.helpers({
  matches: function () {
    return Matches.find({}, {sort: {createdAt: -1}});
  }
});
