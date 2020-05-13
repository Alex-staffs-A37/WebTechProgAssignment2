const Output = document.getElementById("output");
const Book = document.getElementById("book");
const Delivery = document.querySelectorAll("input[name='delivery']");
const selectedDeli = document.querySelector("input[name='delivery']:checked");
const Show = document.getElementById("shows");
const Eticket = document.getElementById("eticket");
const Post = document.getElementById("post");
const Box = document.getElementById("box");
const Seats = document.getElementById("seats");
const Showput = document.getElementById("showput");
const Deliput = document.getElementById("deliput");
const Name = document.getElementById("name");
const Address = document.getElementById("address");

Show.addEventListener("change", displaySelect);
Seats.addEventListener("change", displaySelect);  //These 2 call for 1 function to adjust calculation//
Book.addEventListener("click", calculateCost);   

var Ticket = Show.options[Show.selectedIndex].value;
var Seatnumber = Seats.value;
for (let i = 0; i < Delivery.length; i++) {
  Delivery[i].addEventListener("change", checkPref);
}
Deliput.innerText = 0;

function checkPref() {
  if (Post.checked) {
    deliveryCost = 3.99;
  }
  else if (Box.checked) {
    deliveryCost = 1.5;
  }
  else if (Eticket.checked) {
    deliveryCost = 0;
  }
  Deliput.innerText = deliveryCost;
}

displaySelect();

function displaySelect() {

  Ticket = Show.options[Show.selectedIndex].value;
  Seatnumber = Seats.value;

  Showput.innerText = Ticket * Seatnumber;

  if ((Seatnumber >= 6) && (Seatnumber <= 9)) {
    Showput.innerText = parseInt((Ticket * Seatnumber) * 0.90);
  }
  else if (Seatnumber >= 10) {
    Showput.innerText = parseInt((Ticket * Seatnumber) * 0.85);
  }
}

function calculateCost() {
  Ticket = Show.options[Show.selectedIndex].value;
  Whatshow = Show.options[Show.selectedIndex].innerText;
  Seatnumber = Seats.value;
  Discount = 0;
  if (Post.checked) {
    deliveryCost = 3.99;
    selectedDeli.value = "Posted";
  }
  else if (Box.checked) {
    deliveryCost = 1.5;
    selectedDeli.value = "Collect from Box Office";
  }
  else if (Eticket.checked) {
    deliveryCost = 0;
    selectedDeli.value = "E-ticket";
  }

  Output.innerText = (`${Seatnumber} ${Whatshow} ticket(s) cost £${Show.value} \n Total cost £${Ticket * Seatnumber}
  Discounted amount £${Discount} \n ${selectedDeli.value} £${deliveryCost}
  Final cost £${(Ticket * Seatnumber) - Discount + deliveryCost}`);

  if ((Seatnumber >= 6) && (Seatnumber <= 9)) {
    Discount = parseInt((Ticket * Seatnumber) * 0.10);
    Output.innerText = (`${Seatnumber} ${Whatshow} ticket(s) cost £${Show.value} \n Total cost £${Ticket * Seatnumber}
    10% discount £${Discount} \n ${selectedDeli.value} £${deliveryCost}
    Final cost £${(Ticket * Seatnumber) - Discount + deliveryCost}`);
  }
  else if (Seatnumber >= 10) {
    Discount = parseInt((Ticket * Seatnumber) * 0.15);
    Output.innerText = (`${Seatnumber} ${Whatshow} ticket(s) cost £${Show.value} \n Total cost £${Ticket * Seatnumber}
    15% discount £${Discount} \n ${selectedDeli.value} £${deliveryCost}
    Final cost £${(Ticket * Seatnumber) - Discount + deliveryCost}`);
  }
}

