var images1 = [
  "img/1957 Mercedes 300SL Gullwing/1.jfif",
  "img/1957 Mercedes 300SL Gullwing/2.jpg",
  "img/1957 Mercedes 300SL Gullwing/3.jfif",
  "img/1957 Mercedes 300SL Gullwing/4.jfif",
  "img/1957 Mercedes 300SL Gullwing/5.jfif",
  "img/1957 Mercedes 300SL Gullwing/6.jpg",
];
var index = 0;
function changeImages1() {
  imageSlideShow1.src = images1[index];
  if (index < images1.length - 1) {
    index++;
  } else {
    index = 0;
  }
  setTimeout("changeImages1()", 1200);
}
changeImages1();

var images2 = [
  "img/1960s Jaguar E-Type/2.jfif",
  "img/1960s Jaguar E-Type/3.jfif",
  "img/1960s Jaguar E-Type/4.jfif",
  "img/1960s Jaguar E-Type/5.jfif",
  "img/1960s Jaguar E-Type/6.jfif",
];
var index = 0;
function changeImages2() {
  imageSlideShow2.src = images2[index];
  if (index < images2.length - 1) {
    index++;
  } else {
    index = 0;
  }
  setTimeout("changeImages2()", 1200);
}
changeImages2();

var images3 = [
  "img/Aston Martin DB5/2.jfif",
  "img/Aston Martin DB5/3.jfif",
  "img/Aston Martin DB5/4.jfif",
  "img/Aston Martin DB5/5.jfif",
  "img/Aston Martin DB5/6.jfif",
];

var index = 0;

function changeImages3() {
  imageSlideShow3.src = images3[index];
  if (index < images3.length - 1) {
    index++;
  } else {
    index = 0;
  }
  setTimeout("changeImages3()", 1200);
}
changeImages3();

var images4 = [
  "img/1953 Chevrolet Corvette/1.jfif",
  "img/1953 Chevrolet Corvette/2.jfif",
  "img/1953 Chevrolet Corvette/3.jfif",
  "img/1953 Chevrolet Corvette/4.jfif",
  "img/1953 Chevrolet Corvette/5.jpg",
  "img/1953 Chevrolet Corvette/6.jfif",
];
var index = 0;
function changeImages4() {
  imageSlideShow4.src = images4[index];
  if (index < images4.length - 1) {
    index++;
  } else {
    index = 0;
  }
  setTimeout("changeImages4()", 1200);
}
changeImages4();
