module.exports = app => {
    const product = require("../controllers/product.controller.js");
  
    // Create a new product details
    app.post("/product", product.create);
  
    // Retrieve all products details
    app.get("/product", product.findAll);
  
    // Retrieve a single product detals with product Id 
    app.get("/product/:productid", product.findOne);
  
    // Update a product with productId
    app.put("/product/:productid", product.update);
  
    // Delete a product with productId
    app.delete("/product/:productid", product.delete);
  
    // Create a new product details
    app.delete("/product", product.deleteAll);
  };