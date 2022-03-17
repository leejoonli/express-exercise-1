// require model
const Order = require('../models/Order');

// require seeds.json
const orderSeeds = require('./seed.json');

// Empty database and reseed
Order.deleteMany({})
    .then(()=>{
        console.log('Deleted all orders!');
    })
    .then(()=>{
        return Order.insertMany(orderSeeds);
    })
    .then((newOrders)=>{
        console.log('Creaded new Orders!', newOrders);
    })
    .catch(console.error)
    .finally(()=>{
        process.exit();
    });