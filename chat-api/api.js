import express from "express";
import User from"./controller/user";
import Messages from "./controller/messages"
let router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Pivot3 vSTAC Mock Web Service',message:"hello" });
  });
  
  router.get('/add', function(req, res, next) {
    res.render('index', { title: 'Pivot3 vSTAC Mock Web Service' });
  });
  router.use("/user",User);
  router.use("/message",Messages)
  export default router;
  