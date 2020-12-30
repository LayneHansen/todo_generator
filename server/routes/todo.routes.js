const router = require('express').Router();

// api/todo/
router.route('/')
.get((req, res) => {
    console.log('hitting the get route');
    res.json({ success: true }); 
})
.post((req, res) => {
    console.log({reqBody: req.body});

    res.json({ success: true })
});

module.exports = router;