// Question#1
let button = document.createElement("button");
let buttonText = document.createTextNode("Click Me!");
button.appendChild(buttonText);
document.body.appendChild(button);
button.addEventListener("click", function () {
  alert("I love everyone.");
});

// Question#2
let num2Button = document.getElementById("num2Button");
let num2TextBox = document.getElementById("number2-text");
num2Button.addEventListener("click", function () {
  alert(num2TextBox.value);
});

// Question#3
let div = document.getElementById("div1");
div.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "black";
});
div.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "yellow";
});

// Question#4
let paragraph = document.querySelector("p");
paragraph.addEventListener("click", getRandomColor);
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  paragraph.style.color = color;
}

// Question#5
let button5 = document.getElementById("5button");
let div5 = document.getElementById("5div");
button5.addEventListener("click", function () {
  let span = document.createElement("span");
  div5.appendChild(span);
  let text = document.createTextNode("Rashad");
  span.appendChild(text);
});

//Question#6
let ul = document.getElementById("ul6");
let button6 = document.getElementById("btn6");
let friends = [
  "John",
  "Jacob",
  "Jingeheimer",
  "Schmidt",
  "Bobo",
  "Janono",
  "Cobo",
  "Sayso",
  "Hellno",
  "Boyno",
];
let counter = 0;
button6.addEventListener("click", function () {
  let name = document.createTextNode(friends[counter]);
  let list = document.createElement("li");
  list.appendChild(name);
  ul.appendChild(list);
  counter++;
});


let refreshBtn = document.getElementById("refresh");
refreshBtn.addEventListener("click", function () {
    window.location.reload();
});