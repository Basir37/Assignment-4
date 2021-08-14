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