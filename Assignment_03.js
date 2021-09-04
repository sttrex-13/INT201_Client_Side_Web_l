
const prompt = require('prompt-sync')();

let player1 = { name: prompt('Insert Name Player1 : '), dice: { point: [] }, result: [], resultPoint: 0 }; //สร้างobject ที่เก็บ String, Object, Array และ Number
let player2 = { name: prompt('Insert Name Player2 : '), dice: { point: [] }, result: [], resultPoint: 0 };

let round = prompt('How many times you want to play? : '); //ตั้งค่ากำหนดรอบการเล่น

function Roll() { //functionในการทอยลูกเต๋าจากเลข 1-6
    let point = Math.floor(Math.random() * 6) + 1; //Math.floor มีไว้ใช้ปัดเศษทศนิยมให้เป็นจำนวนเต็ม จากนั้นคูณด้วย 6 เพื่อให้ค่าที่สุ่มออกมาสูงสุดได้ 6
    return point;
}

function getResult(i) { //function การบันทึกคะแนนในแต่ละรอบ รับค่า i จากลูปเพื่อเป็นตัวบอกรอบนั้น ๆ

    player1.dice.point[i] = Roll(); //player1 ทำการทอยลูกเต๋า แล้วเก็บใน array point เพื่อเป็นการเก็บคะแนนในแต่ละรอบ
    player2.dice.point[i] = Roll();

    console.log("\n"+player1.name + " get " + player1.dice.point[i] + " point"); //ประกาศว่า player1 ได้กี่แต้ม
    console.log(player2.name + " get " + player2.dice.point[i] + " point");

    if (player1.dice.point[i] == player2.dice.point[i]) { //check ว่าแต้มเท่ากันมั้ยโดยการเทียบ array point ระหว่าง player1 & player2
        console.log("This round is Draw");
        player1.result[i] = "Draw"; //เก็บผลลัพท์ไว้ใน array result ในแต่ละรอบดูได้จากค่าของ i
        player2.result[i] = "Draw";

    }
    else if (player1.dice.point[i] < player2.dice.point[i]) { //check ว่า player1 มีแต้มน้อยกว่า player2 หรือไม่
        console.log("The Winner in this round is " + player2.name);
        player1.result[i] = "Lose";
        player2.result[i] = "Win";
        player2.resultPoint++; //นับว่า player2 ชนะ 1 ครั้ง โดยการบวก resultPoint เพิ่ม 1
    }
    else if (player1.dice.point[i] > player2.dice.point[i]) { //check ว่า player1 มีแต้มมากกว่า player2 หรือไม่
        console.log("The Winner in this round is " + player1.name);
        player1.result[i] = "Win";
        player2.result[i] = "Lose";
        player1.resultPoint++; //นับว่า player1 ชนะ 1 ครั้ง โดยการบวก resultPoint เพิ่ม 1
    }
    else {
        console.log("Error");
    }

    console.log("-------------------");

}

var winner; //สร้างตัวแปรมาเพื่อรับค่า return ชื่อผู้ชนะ

function play() {// function เพื่อเริ่มเล่นเกม

    for (let i = 0; i < round; i++) {  //ทำการวนเรียก function getresult ตามรอบที่กำหนดเพื่อหาผลคะแนน และนับว่าใครชนะมากที่สุด
        getResult(i);
    }
    if (player1.resultPoint > player2.resultPoint) { //ทำการเทียบคะแนนรวมว่า player1 มีคะแนนรวมมากกว่า player2 หรือไม่
        return winner = player1.name; //return ชื่อผู้ชนะออกมา
    }
    else if (player1.resultPoint < player2.resultPoint) { //ทำการเทียบคะแนนรวมว่า player1 มีคะแนนรวมน้อยกว่า player2 หรือไม่
        return winner = player2.name;
    }
    else if (player1.resultPoint == player2.resultPoint) { //ทำการเทียบคะแนนรวมว่า player1มีคะแนนรวมเท่ากับ player2 หรือไม่
        return winner = "Draw";
    }
    else console.log("Error");
}

play(); //ทำการเริ่มเล่นเกมโดยการเรียก function play();

if (winner == "Draw") {
    console.log("All Result is Draw\n");
}
else console.log("All Result " + winner + " is Winner\n");

console.log("Result history of " + player1.name + " : " + player1.result); //ดูประวัติผลการเล่นของ player1
console.log("Result history of " + player1.name + " : " + player2.result + "\n");

console.log("Point history of " + player1.name + " : " + player1.dice.point); //ดูประวัติคะแนนของ player1
console.log("Point history of " + player1.name + " : " + player2.dice.point);
