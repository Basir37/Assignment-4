//Problem-1:
function seerToMon(seer) {  // function declaration 
    // error handling 
    if (seer <= 0) {
        return 'Please enter a positive number.';
    }
    else if (typeof seer != 'number') {
        return 'Please enter only number';
    }
    //condition
    let mon = seer / 40;   // 40 seer = 1 Mon
    return mon;  
}
const myResult = seerToMon(80);//calling function 
console.log(myResult);




//Problem-2:
function totalSales(shirt, pant, shoes) {   // function declaration 

    // error handling 
    if (typeof shirt != 'number' || typeof pant != "number" || typeof shoes != 'number') {
        return 'Please enter only number';
    }
    else if (shirt >= 0 && pant >= 0 && shoes >= 0) {
        const shirtPrice = shirt * 100;
        const pantPrice = pant * 200;
        const shoesPrice = shoes * 500;
    // totalSales 
        const totalPrice = shirtPrice + pantPrice + shoesPrice;
        return totalPrice;
    } 
    else {
        return 'Invalid input'
    }
}
const total = totalSales(5, 8, 1);//calling function 
console.log(total);



//Problem-3:
function deliveryCost(num) {   // function declaration 
    const firstHundredDelivery = 100;
    const secondHundredDelivery = 80;
    const restDelivery = 50;
    // error handling 
    if (num < 0) {
        return 'Please check again';
    }
    else if (typeof num != 'number') {
        return 'Please enter only number';
    }
        //condition 
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
const totalCost = deliveryCost(200);//calling function 
console.log(totalCost);



//Problem-4:
function perfectFriend(names) {   // function declaration 
    let myPerfectFriend = names[0];  // default value set

    if (typeof names != 'object') { // error handling 
        return 'Please enter an array';
    }
    else {
        for (const friend of names) {
            if (typeof friend != 'string') {
                return 'Please enter only name';
            }
            else if (friend.length == 5) { //condition 
                myPerfectFriend = friend;
                return myPerfectFriend;
            }
        }
    }
   
}
const names = ['roky','humayun kabir', 'Hasan', 'Faysal', 'Kabir', 'Polin', 'Jony', 'Rahi', 'Nabil', 'Masrafi']; // declare array
const result = perfectFriend(names); //calling function 
console.log(result);
