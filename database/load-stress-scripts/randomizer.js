function generateRandomData(userContext, events, done) {
  const url = Math.floor(Math.random() * 10000000) + 1;
  userContext.vars.url = url;

  return done();
}

module.exports = { generateRandomData };
