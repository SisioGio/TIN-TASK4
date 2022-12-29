// Fibonacci

var n = 10 // Assign n variable

console.log("Fn of " + n + " is " + fibonacci(n)) // Print fibonacci output

function fibonacci(n){
    var values = [0,1,0] // Create array containing 3 values:
                        // [0] = Second last value
                        // [1] = Last value
                        // [2] = n-th fibonacci number
    for( let i =1;i<n;i++){
        var new_value = values[0] + values[1] // Calculate new value
        values[0] = values[1] // Assign fn to values[2]
        values[1] = new_value // Shift values[2] to values[1]
        values[2] = new_value // Shift values[3] to values[2]
    }
    return values[2] // Return fn 
}



// Check if string is palindrome

var str_text = "radar" 

console.log("String " + str_text + " is palindrome? " + isPalindrome(str_text))

function isPalindrome(str_text){

    
    for(let i =0;i<str_text.length;i++){
        if(str_text[i].localeCompare(str_text[str_text.length-1-i]) != 0){ 
            return false;
        } 
    }
    return true;
}


// Find variable type

var arr = [0,2,3]

console.log("The tpye of variable 'arr' is " + typeOf(arr))

function typeOf(obj) {
  return {}.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase();
}






var arr = [25,10,5,2,1] // Array must be already sorted in descending order, coins will be processed from 0 to arr.length-1
var number =46
console.log("Chanding " + number +" in coins...")
amountToCoins(number,arr)

function amountToCoins(number,arr) {
    // Convert array of int into array of arrays:
    //                                          arr[i][0] = coin value
    //                                          arr[i][1] = coin quantity
    for(let i =0;i<arr.length;i++){
        arr[i] = [arr[i],0]
    }
    // Initialize total_amount_coins => Sum of all coins added mulitplied by their value
    total_amount_coins = 0
    for(let i =0;i<arr.length;i++){

        while(number  - total_amount_coins>= arr[i][0]){ // While the difference between number and total_amount_coins is >= than the current coin value
            arr[i][1] = arr[i][1] + 1 // Increase coin quantity
            total_amount_coins = total_amount_coins+(arr[i][0])  // Add coin value to total_amount_coins
            
        }
    }
    // Print output array 
    for(let i =0; i<arr.length;i++){
        console.log(arr[i])
    }
    
    return arr;
    
    
   
 
}