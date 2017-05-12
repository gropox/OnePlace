var steem = require('./steem.service');
const STEEM = 'steem';
const GOLOS = 'golos';
module.exports = function (app) {

  app.get('/api/steem/trending/:tag/:guid', function (req, res) {
    steem.getTrending(STEEM, req.params.guid, req.params.tag, 6, function (err, posts) {
      res.send(posts);
    })
  });

  app.get('/api/steem/recent/:tag', function (req, res) {
    steem.getRecent(STEEM, req.params.tag, 6, function (err, posts) {
      res.send(posts);
    })
  });

  app.get('/api/golos/trending/:tag/:guid', function (req, res) {
    steem.getTrending(GOLOS, req.params.guid, req.params.tag, 6, function (err, posts) {
      res.send(posts);
    })
  });

  app.get('/api/golos/recent/:tag', function (req, res) {
    steem.getRecent(GOLOS, req.params.tag, 6, function (err, posts) {
      res.send(posts);
    })
  });
  
  app.delete('/api/cache/:guid', function (req, res) {
    steem.deleteCache(req.params.guid);
  });
  
};