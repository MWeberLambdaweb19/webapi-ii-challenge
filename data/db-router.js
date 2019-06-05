const express = require('express');

const db = require('./db');

const router = express.Router();

router.get('/', (req, res) => {
    db.find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            message: "Could not retrieve posts",
            err
        })
    })
})

router.get('/:id', (req, res) => {
    db.findById(req.params.id)
    .then(postsbyID => {
        res.status(200).json(postsbyID)
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            message: "Could not retrieve posts by this ID",
            err
        })
    })
})

router.get('/:id/comments', (req, res) => {
    db.findPostComments(req.params.id)
    .then(postsByComment => {
        res.status(200).json(postsByComment)
    })
    .catch(err => {
        res.status(500).json({
            success: false,
            message: "Could not retrieve comments by this ID",
            err
        })
    })
})

module.exports = router;