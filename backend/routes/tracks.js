const router = require("express").Router();
const Track = require("../models/Track");

router.post("/", async(req, res)=>{
    const newTrack = new Track(req.body);
    try{
        const savedTrack = await newTrack.save();
        res.status(200).json(savedTrack);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get("/", async(req, res)=>{
    try{
        const tracks = await Track.find();
        res.status(200).json(tracks);
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router;