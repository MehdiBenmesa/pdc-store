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
    console.log(user);
      callback(error, user);
  });
}
  function getUser(id, callback){
    User.findOne({_id:id}, (err, user) => {
      callback(err, user);
    });
  }

  function chargeWallet(id, amount, callback){
    User.findOneAndUpdate({_id: id}, {$inc: {credit:amount}},{new : true}, (err, res)=>{
      callback(err, res);
    });
  }

  function checkOut(id, amount, products, callback){
    User.findOneAndUpdate({_id:id}, {$inc:{credit:-amount}, $push:{products:{$each:products}}},{new : true},(err, res) => {
      callback(err, res);
    });
  }

  function getUserProducts(id, callback){
    User.findOne({_id:id}).populate('products').exec((err, res) => {
      callback(err, res.products);
    });
  }

  return{
    addProduct,
    addUser,
    getUser,
    authenticate,
    chargeWallet,
    checkOut,
    getUserProducts
  }

}
