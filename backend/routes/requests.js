const router = require("express").Router();
const User = require("../models/User");
const Request = require("../models/Request");

//CREATE NEW REQUEST
router.post("/", async(req, res)=>{
    const newRequest = new Request(req.body);
    try{
        const savedRequest = await newRequest.save();
        res.status(200).json(savedRequest);
    } catch(err) {
        res.status(500).json(err)
    }
})

 
//UPDATE REQUEST
//Not working currently
router.put("/:id", async(req, res)=>{
    try {
        const request = await Request.findById(req.params.id);
        if(request.username === req.body.username){
            try{
                const updatedRequest = await Request.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },{new:true});
                res.status(200).json(updatedRequest);
            }catch(err){
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can update only your request")
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

//DELETE REQUEST
router.delete("/:id", async(req, res)=>{
    try {
        const request = await Request.findById(req.params.id);
        if(request.username === req.body.username){
            try{
                await request.delete();
                res.status(200).json("Post has been deleted...");
            }catch(err){
                res.status(500).json(err);
            }
        } else {
            res.status(401).json("You can delete only your request")
        }
    } catch(err) {
        res.status(500).json(err);
    }
});

//GET REQUEST
router.get("/:id", async(req,res)=>{
    try{
        const request = await Request.findById(req.params.id);
        res.status(200).json(request);
    } catch(err) {
        res.status(500).json(err)
    }
});

//GET ALL REQUESTS
router.get("/", async(req,res)=>{
    const username = req.query.user;
    const track = req.query.track;
    try{
        let requests;
        if(username) {
            requests = await Request.find({username})
        } else if(track) {
            requests = await Request.find({track: {
                $in:[track],
            },
        });
        } else {
            requests = await Request.find();
        }
        res.status(200).json(requests);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router