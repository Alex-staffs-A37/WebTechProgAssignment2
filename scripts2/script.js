const Coutput = document.getElementById("creditoutput");
const Woutput = document.getElementById("winoutput");
const Credit = document.getElementById("credit");
const Slot1 = document.getElementById("slot1");
const Slot2 = document.getElementById("slot2");
const Slot3 = document.getElementById("slot3");
const Spin = document.getElementById("spin");
const Collect = document.getElementById("collect");
const Message = document.getElementById("msgoutput");
const roll = []
    roll[1] = "images/bar.png",
    roll[2] = "images/apple.png",
    roll[3] = "images/banana.png",
    roll[4] = "images/cherries.png",
    roll[5] = "images/grapes.png",
    roll[6] = "images/lemon.png",
    roll[7] = "images/melon.png",
    roll[8] = "images/orange.png",

document.getElementById("spin").disabled = true;
document.getElementById("collect").disabled = true;
let count = 0;
let win = 0;
   
var one = Math.floor(Math.random() * 8 + 1);
Slot1.setAttribute("src", roll[one]);
var two = Math.floor(Math.random() * 8 + 1);
Slot2.setAttribute("src", roll[two]);
var three = Math.floor(Math.random() * 8 + 1);
Slot3.setAttribute("src", roll[three]);


Credit.addEventListener("click", addcredit);
Spin.addEventListener("click", imgchange);
Collect.addEventListener("click", winnings);

function addcredit() {
    count += 1;
    Coutput.innerText = count;
    if (count >= 1) {
        document.getElementById("spin").disabled = false;
    }
}
function imgchange() {
    count -= 1;
    Coutput.innerText = count;
    Message.innerText = "";
    if (count <= 0) {
        document.getElementById("spin").disabled = true;
    }
    var one = Math.floor(Math.random() * 8 + 1);
    Slot1.setAttribute("src", roll[one]);
    var two = Math.floor(Math.random() * 8 + 1);
    Slot2.setAttribute("src", roll[two]);
    var three = Math.floor(Math.random() * 8 + 1);
    Slot3.setAttribute("src", roll[three]);

    
    if ((Slot1.src === Slot2.src) && (Slot1.src === Slot3.src)) {
        win += 10;
        Woutput.innerText = win;
        Message.innerText = "Scored 10 points";
        document.getElementById("collect").disabled = false;
    }
    else if (Slot2.src === Slot3.src) {
        win += 5;
        Woutput.innerText = win;
        Message.innerText = "Scored 5 points"
        document.getElementById("collect").disabled = false;
    }
}
function winnings() {
    Message.innerText = (`Total winnings collected: ${win} points`);
    win = 0;
    Woutput.innerText = 0;
    document.getElementById("collect").disabled = true;
}


