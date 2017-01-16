module.exports = function(express, productCtrl ){
  var router = express.Router();

  router.get('/', (req, res) => {
       res.send("hello world");
  });

  router.get('/products', (req, res) => {
    productCtrl.getProducts((error, products) => {
       if(error) throw error;
       res.send(products);
    });
  });

  router.get('/product/:id', (req, res) => {
    productCtrl.getProduct(req.params.id , (error, product) => {
      if(error) throw error;
      res.send(product);
    });
  });

  router.post('/product', (req, res) => {
    productCtrl.saveProduct(req.body , (error, product) => {
      if(error) throw error;
      res.send(product);
    })
  });

  router.delete('/', (req, res) => {
    productCtrl.removeProducts((error) => {
      if(error) throw error;
      res.send({message : 'done'});
    });

  router.delete('/product/:id', (req, res) => {
      productCtrl.removeProduct(req.params.id, (error) => {
        if(error) throw error;
        res.send({message : 'done'});
      });
    });
  });

  router.post('/user-products',(req, res) => {
    productCtrl.getUserProducts(req.body,(err, res) => {
      if(err) throw err;
      res.json(res);
    });
  })
  return router;
}
