module.exports = function(mongoose){
  var Schema = mongoose.Schema;
  var productSchema = new Schema({
    name : String,
    price : Number,
    description : String,
    image : String,
    file : String,
    type : String
  });
  return mongoose.model('Product', productSchema);
};

