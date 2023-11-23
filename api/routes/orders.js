const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "GET orders work"
    })
});

router.post('/', (req, res, next) => {
    const order = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: "POST order work",
        createdOrder: order
    })
});

router.get('/:orderId', (req, res, next) => {
    const id = req.params.orderId;

    res.status(200).json({
        message: `Get order by ID: ${{id}}`
    })
});


module.exports = router;
