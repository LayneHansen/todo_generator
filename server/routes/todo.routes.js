const router = require('express').Router(); 
const { Todo } = require('../models');

// api/todo/
router
    .route('/')
    .get((req, res) => {
        Todo
            .find({})
            .then(data => {
                console.log("TODO GET");
                console.log({ data });
                res.json({ success: true, data });
            })
            .catch(err => {
                console.log({err});
                res.json({ success: false });
            })
    })
    .post((req, res) => {
        console.log({reqBody: req.body});

        Todo
            .create({
                text: req.body.text
            })
            .then(data => {
                console.log({ data });
                res.json({ success: true, data });
            })
            .catch(err => {
                console.log({err});
                res.json({ success: false });
            })

});

module.exports = router;