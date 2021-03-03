module.exports = app => {
    const invoice = require("../controllers/invoice.controller.js");
  
    // Create a new invoice details
    app.post("/invoice", invoice.create);
  
    // Retrieve all invoice details
    app.get("/invoice", invoice.findAll);
  
    // Retrieve a single invoice detals with invoiceid
    app.get("/invoice/:invoiceid", invoice.findOne);
  
    // Update a invoice with invoiceid
    app.put("/invoice/:invoiceid", invoice.update);
  
    // Delete a invoice with invoiceid
    app.delete("/invoice/:invoiceid", invoice.delete);
  
    // Create a new invoice details
    app.delete("/invoice", invoice.deleteAll);
  };