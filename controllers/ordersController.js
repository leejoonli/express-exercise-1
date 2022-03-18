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
        // if found
        if(order) {
            // send response in JSON
            res.json(order);
        } else {
            // else send status 404 not found
            res.sendStatus(404);
        }
    } catch(err) {
        next(err);
    }
});

// POST
router.post('/', async (req, res, next) => {
    try {
        // find order to update
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {new: true, overwrite: true});
        // send response in JSON
        res.json(updatedOrder);
    } catch(err) {
        next(err);
    }
});

// PUT

// PATCH

// DELETE

// export
module.exports = router;