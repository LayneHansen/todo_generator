const router = require('express').Router(); 
const { Todo } = require('../models');

// api/todo/
router
    .route('/')
    .get((req, res) => {
        Todo
            .find({})
            .then(data => {
                res.json({ success: true, data });
            })
            .catch(err => {
                console.log({err});
                res.json({ success: false });
            })
    })
    .post((req, res) => {

        Todo
            .create({
                text: req.body.text
            })
            .then(data => {
                res.json({ success: true, data });
            })
            .catch(err => {
                console.log({err});
                res.json({ success: false });
            })

});

router
    .route('/:id')
    .delete((req, res) => {

        Todo
          .findByIdAndDelete(req.params.id)
          .then(data => {
              res.json({ success: true});
          })
          .catch(err => {
              res.json({ success: false });
              console.log({err});
          });
    });

module.exports = router;