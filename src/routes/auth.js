const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        msg: "Auth",
        status: 200
    });
});

module.exports = router;