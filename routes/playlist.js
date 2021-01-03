'use strict';
var express = require('express');
var router = express.Router();
const playListController=require('../controllers/playlist');

router.get('/', playListController.getList);

module.exports = router;
