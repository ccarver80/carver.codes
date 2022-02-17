var express = require("express");
var router = express.Router();

const blog = require("../models").Blog;

router.use(express.json());

// =======POST ROUTE============//
router.post("/api/blog/", async (req, res) => {
    try {
        
        const newBlog = await courses.create(req.body);
        
     
        res.status(201);
        res.json(newCourse.id)
      
      
    } catch (err) {
      res.json({
        message: err
      });
    }
  });



  module.exports = router;