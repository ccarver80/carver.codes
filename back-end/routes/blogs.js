var express = require("express");
var router = express.Router();

const blog = require("../models").Blog;

router.use(express.json());

// =======POST ROUTE============//
router.post("/api/blog/", async (req, res) => {
    try {
        
        const newBlog = await blog.create(req.body);
        
        
        res.status(201);
        res.json(newBlog.id)
        
      
      
    } catch (err) {
      res.json({
        message: err
      });
    }
  });

  //==============GET ROUTE =================//
  router.get('/api/blog', async(req, res) => {
    try{

      
      const blogPosts = await blog.findAll()
      res.status(200)
      res.json(blogPosts)

    } catch (err) {
      res.json({
        message: err
      });

    }
  })
  

  router.get('/api/blog/:id', async(req, res) => {
    try{
      const blogPost = await blog.findByPk(req.params.id)
      res.json(blogPost)
    }
    catch (err) {
      res.json({
        message: err
      });

    }
  })



  module.exports = router;