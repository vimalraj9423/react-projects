import express from "express";
import User from"./controller/user"
let router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Pivot3 vSTAC Mock Web Service',message:"hello" });
  });
  
  router.get('/add', function(req, res, next) {
    res.render('index', { title: 'Pivot3 vSTAC Mock Web Service' });
  });
  router.use("/user",User);
  export default router;
  