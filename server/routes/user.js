module.exports = function(express, userCtrl){
  var userRoute = express.Router();
  userRoute.post('/user', (req, res) => {
    userCtrl.addUser(req.body,(err, user)=>{
      if(err) throw err;
      res.send(user);
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
  userRoute.get('/user/:id', (req, res) => {
        userCtrl.getUser(req.params.id, (err, result) => {
							if(err) throw err;
              res.json(result);
        });
  });
  return userRoute;

}

