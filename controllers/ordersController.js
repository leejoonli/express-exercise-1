// require express module
const express = require('express');

// instantiate the router
const router = express.Router();

// import Order model
const Order = require('../models/Order');

// ROUTES
// GET, Index
router.get('/', async (req, res, next) => {
    try {
        // get all orders
        const orders = await Order.find({});
        // send response in JSON
        res.json(orders);
    } catch(err) {
        next(err);
    }
});

// GET, single
router.get('/:id', async (req, res, next) => {
    try {
        // get single order
        const order = await Order.findById(req.params.id);
        if(order) {
            res.json(order);
        } else {
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// POST

// PUT

// PATCH

// DELETE

// export
module.exports = router;