
let number = [];

function randomSet() {
    for (i = 0; i < 3; i++) {
        number[i] = Math.floor(Math.random() * 100) + 1;
    }
    console.log(number);
    return number;
}

function findSum() {
    let sum = 0;
    number.forEach(number => {
        sum += number;
    });
    console.log("Sum");
    return sum
}

function findMin() {
    let minNumber = number[0];
    for (i = 0; i < number.length; i++) {
        if (minNumber > number[i]) {
            minNumber = number[i];
        }
    }
    console.log("Min");
    return minNumber;
}

function findMax() {
    let maxNumber = number[0];
    for (i = 0; i < number.length; i++) {
        if (maxNumber < number[i]) {
            maxNumber = number[i];
        }
    }
    console.log("Max");
    return maxNumber;
}
    randomSet();
    console.log(findSum());
    console.log(findMin());
    console.log(findMax());

// while(true){
//     let input;

//     var input = prompt("input menu 1.Find Sum\n2.FindMin\n3.FindMax\n4.All Function\n5.exit","");
//     switch(input){
//         case 1:
//             console.log(findSum);
//             break;
//         case 2:
//             console.log(findMin);
//             break;
//         case 3:
//             console.log(findMax);
//             break;
//         case 4:
//             console.log(findSum);
//             console.log(findMin);
//             console.log(findMax);
//             break;
//         case 5:
//             console.log("Exit...");
//             break;
//     }
// }