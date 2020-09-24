//Question 1
let $button = $("<button>Click Me!</button>");
$button.appendTo("body");
$button.click(function () {
  alert("I love everyone.");
});

//Question 2
let $num2button = $("#button");
$num2button.click(function () {
  let num2TextBox = $("#textbox").val();
  alert(num2TextBox);
});

//Question 3
let $numdiv = $("#number3 div");
$num3Div.hover(
  function () {
    $num3Div.css("backgroundColor", "Black");
  },
  function () {
    $num3Diiv.css("backgroundColor", "Yellow");
  }
);

//Question 4
let colorArray = [""]
let $paragraph = $("#p");
$paragraph.click(function () {
  const randomNum = Math.floor(Math.random() * colorArray.length);
  $paragraph.css("color", colorArray[randomNum]);
});

//Question 5
let $button5 = $("#5button");
let $nameSpan = $("<span></span>");
let $div5 = $("#space");
$("body").append($div5);

$button5.click(function () {
  $($span).appendTo($div5);
});

//Queston 6
let $num6Btn = $("number6-button");
let $num6ul = $("number6-ul")
let $friends = ["John" , "Jacob", "Jingeheimer", "Schmidt", "Bobo", "Janono", "Cobo", "Sayso", "Hellno", "Boyno",];
let counter = 0;
$num6Btn.on("click", function () {
let li = $("<li></li>");
li.text (freinds[counter]);
$num6ul.append(li);
counter++
});

