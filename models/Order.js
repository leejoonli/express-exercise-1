// require mongoose package from the connection pool
const mongoose = require('../db/connection');

// new schema
const OrderSchema = new mongoose.Schema({
    order: Number,
    year: Number,
    paid: Boolean,
    cost: {
        price: Number,
        currency: String,
    },
    items: [{
        product: String,
        colors: [String],
        quantity: Number,
    }]
});

// instantiate the model
const Order = mongoose.model('Order', OrderSchema);

// export
module.exports = Order;