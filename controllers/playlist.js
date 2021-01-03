const db = require('../models');

exports.getList =  (req, res) => {
    try {
        db.PlayList.findAll({
        }).then(result => {
            res.status(200).json(result)
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Something went wrong while fetching the playlist."
            })
        })
    }
    catch(err) {
        res.status(500).json({
            message: err.message || "Something went wrong while fetching the playlist."
        })
    }
}