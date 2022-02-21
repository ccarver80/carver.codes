var express = require("express");
var router = express.Router();

const Mail = require("../models").Mail;

router.use(express.json());


// ============POST ROUTE===============//
router.post('/api/mail', async(req, res) => {
    try{
        const newMail = await  Mail.create(req.body)

        res.status(201).json({
            message: "Your message has been sent!"
        })
    }catch(err) {
        res.json({
            message: "Something went wrong:", err
        })
    }
})

//==========GET ROUTE========================//
router.get('/api/mail', async(req, res) => {
    try{
        const allMail = await Mail.findAll()
        res.status(200).json(allMail)
    }catch(err) {
        res.json({
            message: err
        })
    }
})

router.get('/api/mail/:id', async(req, res) => {
    try{
        const singleMail = await Mail.findByPk(req.params.id)
        res.status(200).json(singleMail)
    }catch(err) {
        res.json({
            message: err
        })
    }
})


//============DELETE ROUTE =================//
router.delete('/api/mail/:id', async(req, res) => {
    try{
        const findMail = await Mail.findByPk(req.params.id)
        findMail.destroy()
        res.status(204)
    }catch(err) {
        res.json({
            message: err
        })
    }
})

module.exports = router; 