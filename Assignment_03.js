
// -----Setting Zone---------
let round = 3; //ตั้งค่ารอบการเล่น
let name1 = "T"; //ตั้งค่าชื่อของ player1
let name2 = "Raw"; //ตั้งค่าชื่อของ player2
//---------------------------

let player1 = {name: name1, point: [], result: [], resultPoint: 0}; //สร้างobject ที่เก็บ String, Array และ Number
let player2 = {name: name2, point: [], result: [], resultPoint: 0};


function Roll() { //functionในการทอยลูกเต๋าจากเลข 1-6
    let point = Math.floor(Math.random() * 6) + 1; //Math.floor มีไว้ใช้ปัดเศษทศนิยมให้เป็นจำนวนเต็ม จากนั้นคูณด้วย 6 เพื่อให้ค่าที่สุ่มออกมาสูงสุดได้ 6
    return point;
}

function getResult(i) { //function การบันทึกคะแนนในแต่ละรอบ รับค่า i จากลูปเพื่อเป็นตัวบอกรอบนั้น ๆ

    player1.point[i] = Roll(); //player1 ทำการทอยลูกเต๋า แล้วเก็บใน array point เพื่อเป็นการเก็บคะแนนในแต่ละรอบ
    player2.point[i] = Roll(); 
    
    console.log(player1.name + " get " + player1.point[i] + " point"); //ประกาศว่า player1 ได้กี่แต้ม
    console.log(player2.name + " get " + player2.point[i] + " point");

    if (player1.point[i] == player2.point[i]) { //check ว่าแต้มเท่ากันมั้ยโดยการเทียบ array point ระหว่าง player1 & player2
        console.log("This round is Draw");
        player1.result[i] = "Draw"; //เก็บผลลัพท์ไว้ใน array result ในแต่ละรอบดูได้จากค่าของ i
        player2.result[i] = "Draw";

    }
    else if (player1.point[i] < player2.point[i]) { //check ว่า player1 มีแต้มน้อยกว่า player2 หรือไม่
        console.log("The Winner in this round is " + player2.name);
        player1.result[i] = "Lose";
        player2.result[i] = "Win";
        player2.resultPoint++; //นับว่า player2 ชนะ 1 ครั้ง โดยการบวก resultPoint เพิ่ม 1
    }
    else if (player1.point[i] > player2.point[i]) { //check ว่า player1 มีแต้มมากกว่า player2 หรือไม่
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

function play() {// function เพื่อเริ่มเล่นเกม
    for (let i = 0; i < round; i++) {  //ทำการวนเรียก function getresult ตามรอบที่กำหนดเพื่อหาผลคะแนน และนับว่าใครชนะมากที่สุด
        getResult(i);
    }
    if (player1.resultPoint > player2.resultPoint) { //ทำการเทียบคะแนนรวมว่า player1 มีคะแนนรวมมากกว่า player2 หรือไม่
        console.log("All Result " + player1.name + " is Winner");
    }
    else if (player1.resultPoint < player2.resultPoint) { //ทำการเทียบคะแนนรวมว่า player1 มีคะแนนรวมน้อยกว่า player2 หรือไม่
        console.log("All Result " + player2.name + " is Winner");
    }
    else if (player1.resultPoint == player2.resultPoint) { //ทำการเทียบคะแนนรวมว่า player1มีคะแนนรวมเท่ากับ player2 หรือไม่
        console.log("All Result is Draw");
    }
    else console.log("Error");
}

play(); //ทำการเริ้มเล่นเกมโดยการเรียก function play();

console.log(player1.result); //ดูประวัติผลการเล่นของ player1
console.log(player2.result);

console.log(player1.point); //ดูประวัติคะแนนของ player1
console.log(player2.point);