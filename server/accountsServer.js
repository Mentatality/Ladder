Accounts.onCreateUser(function (user, options) {
  Players.insert({
    name: user.username,
    elo: 1500
  });
  return user;
});
