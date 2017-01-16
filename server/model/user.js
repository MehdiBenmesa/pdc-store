module.exports = function(mongoose){
  var Schema = mongoose.Schema;
  var productSchema = new Schema({
    username : String,
    email : String,
    password : String,
    type : String,
    credit : {type:Number, default:0},
    products :[{type:mongoose.Schema.Types.ObjectId, ref:'Product'}]
  });
  return mongoose.model('User', productSchema);
};

