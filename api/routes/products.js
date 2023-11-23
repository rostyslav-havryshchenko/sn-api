const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET products work"
    })
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "POST product work"
    })
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    res.status(200).json({
        message: `Get product by ID: ${{id}}`
    })
});


module.exports = router;
