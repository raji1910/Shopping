module.exports = app => {
    const  = require("../controllers/feedback.controller.js");
  
    // Create a new feedback details
    app.post("/feedback", feedback.create);
  
    // Retrieve all feedback details
    app.get("/feedback", feedback.findAll);
  
    // Retrieve a single feedback detals with customerphone
    app.get("/feedback/:customerphone", feedback.findOne);
  
    // Update a feedback with customerphone
    app.put("/feedback/:customerphone", feedback.update);
  
    // Delete a feedback with custtomerphone
    app.delete("/feedback/:customerphone", feedback.delete);
  
    // Create a new feedback details
    app.delete("/feedback", feedback.deleteAll);
  };