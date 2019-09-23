const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

function handleSuccess(resolve){
    console.log(resolve);
}

function handleFailure (rejectionReason){
    console.log(rejectionReason);
};

let prom = checkInventory(order);
prom.then(handleSuccess, handleFailure);
