var express = require('express');
var router = express.Router();
const playListRouter=require('./playlist');
const songsRouter=require('./songs');



router.use('/playlist',playListRouter);
router.use('/songs',songsRouter);

module.exports = router;
