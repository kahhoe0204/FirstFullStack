var pass = '0302';
let msg = document.getElementById("text");

function verifying(){
  let password = document.getElementById("secret").value;
  let passwordStr = pass.toString();
  console.log(password);

  if(password.length !== 0){
    if(password === passwordStr){
      msg.innerHTML = "恭喜你，你成功了";
      msg.style.color = "white";
      window.location.href = 'content.html'
    } else {
      msg.innerHTML = "要给打是吗";
      msg.style.color = "red";
    }
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    verifying();
  }
});