// First 

// Description:
// Number must be multiplied by 3 first, Then add that number again with 10, 
// Divide the total result by 2, And subtract five from that number and return

function mindGame(number) {
    const multiplication = number * 3;
    const sum = multiplication + 10;
    const rest = sum / 2;
    const result = rest - 5;
    if (typeof number != 'number') {
        alert("Please provide a valid number")
    }
    return result;

}

const number = 50;
const mindGameResult = mindGame(number);
console.log(mindGameResult)


// Second 

// Description:
// If a number is evenly divisible by 2 without any remainder, then it is an even number;
//  Otherwise, it is an odd number. The modulo operator % is used to check it in such a way as num%2 == 0.

function evenOdd(string) {
    if (typeof string != 'string') {
       alert("Please provide a valid String")

    }
    if (string.length % 2 === 0) {
        console.log('even')
    }
    else {
        console.log('Odd')
    }

}
evenOdd('line')



// Third

// Description:
// First I take a number as input and subtract the number by 7.
//  If the subtraction result is less than 7 then I return that thing and
//  if it is equal to or greater than 7 then I multiply that input by 2 and return it.

function isLGSeven(num) {
    const restNum = num - 7;
    if (restNum <= 7) {
        return restNum;
    }
    else if (restNum >= 7) {
        const result = num * 2;
        return result;
    }

}

const num = 15;
const sevenResult = isLGSeven(num);
console.log(sevenResult);


// Four 

// Description:
// I have taken an egg as input.  It took some age.
//   If there is any negative data in it, then I have
//  extracted it and added how many there are and returned.

function findingBadData(age) {
    let negativesCount = 0;
    for (let i = 0; i < age.length; i++) {
        if (age[i] <= 0) {
            negativesCount++;
            continue;

        }
    }
    return negativesCount;


}

const age = [-4, -9, -5, 33, -55]
const result = findingBadData(age);
console.log(result)



// Five

// Description:
// I have taken three numbers as parameters.  Multiply 21 by
//  the number of jams of the first friend and 32 by the number 
// of the second friend and 43 by the number of the third friend.
//  The total is equal to or greater than twice 1000.  Then I subtracted 2000 from
//  that total and returned the subtraction and if less than 2000 then returned the remainder.


function gemsToDiamond(firstFriend, secondFriend, thirdFriend) {
    const firstFriendGam = firstFriend * 21;
    const secondFriendGam = secondFriend * 32;
    const thirdFriendGam = thirdFriend * 43;
    const totalGam = firstFriendGam + secondFriendGam + thirdFriendGam;
    if (totalGam >= 2000) {
        const restGam = totalGam - 2000;
        return restGam;
    }
    else {
        console.log(totalGam)
        return totalGam;

    }
}
const totalDiamond = gemsToDiamond(100, 5, 1)
console.log(totalDiamond)
