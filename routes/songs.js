'use strict';
var express = require('express');
var router = express.Router();
const songsController=require('../controllers/songs');


router.get('/', songsController.getSongs);

module.exports = router;
