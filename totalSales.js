function totalSales(shirt, pant, shoes) {

    // validation test
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
const total = totalSales(5, 8, 1);
console.log(total);