module.exports = function (express) {
  var router = express.Router();
  router.post('/', function(req, res){
    const shortener = require('../src/shortener');
    req.body.shortend_url = returnStringGen(6);
       res.json({shortend_url: req.body.shortened_url});
  });
  return router;
}
