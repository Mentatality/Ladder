Accounts.onCreateUser(function (user, options) {
  Players.insert({
    name: user.username,
    elo: 1500,
    cups: 0
  });
  return user;
});
