const db = require('../models');

exports.getSongs =  (req, res) => {
    try {
        db.PlayList.findAll({
            include:[{
                model: db.Songs, through: { attributes: [] },
                include:[{
                        model: db.Genre 
                }]
            },
            
        ],
            where: {
                id: req.query.id
            }
            
        }).then(result => {
            res.status(200).json(result)
        }).catch(err => {
            res.status(500).json({
                message: err.message || "Something went wrong while fetching the songs."
            })
        })
    }
    catch(err) {
        res.status(500).json({
            message: err.message || "Something went wrong while fetching the songs."
        })
    }
}