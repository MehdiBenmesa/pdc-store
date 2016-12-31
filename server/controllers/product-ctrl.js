module.exports = function(Product){
  function getProduct(_id, callback){
    Product.findOne({_id : _id}, (error, product) => {
       callback(error, product);
    });
  }

  function getProducts(callback){
    Product.find({}, (error, products) => {
      callback(error, products);
    })
  }

  function saveProduct(p , callback){
    var product = new Product(p);
    product.save((err, product) => {
      callback(err, product);
    });
  }

  function removeProducts(callback){
    Product.find({}).remove((error)=>{
      callback(error);
    });
  }

  function removeProduct(_id, callback){
    Product.find({_id : _id}).remove((error)=>{
      callback(error);
    });
  }
  return {
    getProduct,
    getProducts,
    saveProduct,
    removeProducts,
    removeProduct
  }
}
