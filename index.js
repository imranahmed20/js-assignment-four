// 
function mindGame(number){
    const multiple = number * 3;
    const sum = multiple + 10;
    const rest = sum / 2;
    const result = rest - 5;
    return result;
    

}
const number = 5;
const mindGameResult = mindGame(number);
console.log(mindGameResult)



// second 
function evenOdd(string){
 
        if(string.length % 2 === 0){
            console.log('even')
        }
        else{
            console.log('Odd')
        }
    

}
evenOdd('Batch7')

// Third

function isLGSeven(num){
    const rest  = num - 7;
    if(rest <= 7){
        console.log(rest)
        return rest;
    }
    else if( rest >= 7){
        const result = num * 2;
        console.log(result)
        return result;
    }

}
isLGSeven(15)
// const num = 15;
// const sevenResult = isLGSeven(num);
// // console.log(sevenResult);


// Four 

function findingBadData(age){
    let negativesCount = 0;
    for (let i = 0; i < age.length; i++){
        if(age[i] < 0){
             negativesCount ++;
            return negativesCount;

        }
       
    }

}

const age = [-12, -11, 45, 25, 54]
const result = findingBadData(age);
console.log(result)


// Five
function gemsToDiamond(firstFriend, secondFriend, thirdFriend){
    const firstFriendGam = firstFriend * 21;
    const secondFriendGam = secondFriend * 32;
    const thirdFriendGam = thirdFriend * 43;
    const totalGam = firstFriendGam + secondFriendGam + thirdFriendGam;
    if(totalGam >= 2000){
        const restGam = totalGam - 2000;
        console.log(restGam)
        return restGam;
    }
    else{
        console.log(totalGam)
        return totalGam;

    }
}
gemsToDiamond(100, 5, 1)
