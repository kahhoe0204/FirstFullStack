var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const yes = document.querySelector("#yes");
yes.addEventListener("click", yesF);

const no = document.querySelector("#no");
no.addEventListener("click", noF);

var imageElement = document.getElementById("imgC");
var msg = document.getElementById("msg");

var speed = 2000;
var colorChangeInterval;

imageElement.style.width(screenWidth-100+"px");

imageElement.style.width("auto");


function noF() {
  var i = Math.floor(Math.random() * screenWidth);
  var j = Math.floor(Math.random() * screenHeight);

  no.style.left = i + "px";
  no.style.top = j + "px";
  no.style.position = "absolute";

  imageElement.src = "https://pic4.zhimg.com/v2-a93b434ad448f3c648da023eebbf4497_b.webp";
  imageElement.alt = "Loopy";
  changecolor();
  speed = speed-100;
}

function yesF() {
  // Change the image source
  imageElement.src = "https://pic4.zhimg.com/v2-1e69a85d1b48293b3c5192cce5765d5b_b.webp";
  imageElement.alt = "Loopy"; 
  speed = speed+100;
    alert("我爱你哦宝贝 muah muah");


}

function changecolor() {
  colorChangeInterval = setInterval(function () {

    const hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    msg.style.color = hexColor;
  }, speed); // Change color every 3000 milliseconds (3 seconds)
}

// Stop the color change after 10 seconds (adjust as needed)
setTimeout(function () {
  clearInterval(colorChangeInterval);
}, 20000); // Stop after 10000 milliseconds (10 seconds)

// Start the initial color change

