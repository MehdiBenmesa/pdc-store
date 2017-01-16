module.exports = function(express, userCtrl){
  var userRoute = express.Router();
  userRoute.post('/user', (req, res) => {
    userCtrl.addUser(req.body,(err, user)=>{
      if(err) throw err;
      console.log(user);
      res.json(user);
    });
  });

  userRoute.get('/user', (req, res) => {
    userCtrl.getUser(req.body,(err, user)=>{
      if(err) throw err;
      res.send(user);
    });
  });

  userRoute.post('/authenticate', (req, res) => {
        userCtrl.authenticate(req.body, (err, result) => {
							if(err) throw err;
              res.json( result);
        });
  });

  userRoute.post('/charge-wallet', (req, res) => {
    userCtrl.chargeWallet(req.body.id, req.body.amount, (err, result) => {
							if(err) throw err;
              res.json(result);
    });
  });

  userRoute.post('/check-out', (req, res) => {
    userCtrl.checkOut(req.body.id, req.body.amount, req.body.products, (err , result) => {
							if(err) throw err;
              res.json(result);
    });
  });

  userRoute.get('/user/:id', (req, res) => {
        userCtrl.getUser(req.params.id, (err, result) => {
							if(err) throw err;
              res.json(result);
        });
  });
  userRoute.get('/user-products/:id', (req, res) => {
        userCtrl.getUserProducts(req.params.id, (err, result) => {
							if(err) throw err;
              res.json(result);
        });
  });
  return userRoute;

}

