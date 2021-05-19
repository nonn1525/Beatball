let ball = document.getElementById("ball");
let field = document.getElementById("field");

function jump() {
  ball.classList.add("animate");
  setTimeout(function(){
    if(ball.classList != "animate") {
      ball.classList.add("animate")
    }
    ball.classList.remove("animate")
  }, 400);
}

// let miss = setInterval(function() {
//   let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
// }, 10);