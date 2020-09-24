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
let $div = $("#div1");
$div.hover(
  function () {
    $div.style.backgroundColor = "Black";
  },
  function () {
    $div.style.backgroundColor = "Yellow";
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
let $button6 = $("#btn6");
let counter = 0;
let $;
let $ul = $("ul6");
let $friends = ["John" , "Jacob", "Jingeheimer", "Schmidt", "Bobo", "Janono", "Cobo", "Sayso", "Hellno", "Boyno",
];
$($button6).click(function () {
let 
$friends[counter]
counter++
});
