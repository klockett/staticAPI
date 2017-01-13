const url = require('../src/models/url');
const util = require('../../../lib/util');

module.exports = (express)=> {
  const router = express.Router();


router.get("/urls",(req, res)=> {
 url.findAll( (err))=> {
   util.debug("Error: Some tried the url's", err, 'error');
   res.status(500).json(err);
 }, (data)=> {
   res.status(200).json(data);
 })
});



router.post("/urls",(req, res)=> {
 url.findAll( (err))=> {
   res.status(500).json(err);
   util.debug("Error: Some tried the url's", err, 'error');
}, (data)=> {
   res.status(200).json(data);
 })
});
