module.exports = function(User, jwt){
  function addProduct(product){

  }

  function addUser(obj, callback){
    var user = new User(obj);
    user.save((err, user ) => {
      callback(err,user );
    });
  }

function authenticate(obj, callback){
  User.findOne({username: obj.username, password:obj.password}, (error, user) => {
      callback(error, user);
  });

}
  function getUser(id, callback){
    User.findOne({_id:id}, (err, user) => {
      callback(err, user);
    });
  }

  return{
    addProduct,
    addUser,
    getUser,
    authenticate
  }

}
