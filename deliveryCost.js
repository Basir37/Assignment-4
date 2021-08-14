function deliveryCost(num) {
    const firstHundredDelivery = 100;
    const secondHundredDelivery = 80;
    const restDelivery = 50;

    if (num < 0) {
        return 'Please check again';
    }
    else if (typeof num != 'number') {
        return 'Please enter only number';
    }
    else if (num <= 100) {
        const cost = num * firstHundredDelivery;
        return cost;
    }
    else if (num <= 200) {
        const first100Delivery = 100 * firstHundredDelivery;
        const restNumberOfDelivery = num - 100;
        const second100Delivery = restNumberOfDelivery * secondHundredDelivery;
        const totalDeliveryCost = first100Delivery + second100Delivery;
        return totalDeliveryCost;
    }
    else {
        const first100Delivery = 100 * firstHundredDelivery;
        const second100Deliver = 100 * secondHundredDelivery;
        const restNumberOfDelivery = num - 200;
        const RestNumberOfDelivery = restNumberOfDelivery * restDelivery;
        const totalDeliveryCost = first100Delivery + second100Deliver + RestNumberOfDelivery;
        return totalDeliveryCost;
    }
}
const totalCost = deliveryCost('200');
console.log(totalCost);
