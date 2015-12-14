Accounts.onCreateUser(function (user, options) {
  Players.insert({
    name: user.username,
    id: user._id,
    elo: 1500
  });
  user.profile = {elo: 1500};
  return user;
});
