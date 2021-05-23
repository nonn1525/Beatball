let ball = document.getElementById("ball");
let field = document.getElementById("field");

function jump() {
  const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 500);
    });
  };
  
  ball.classList.remove("animate4")
  
  wait(1)
    .then(() => {
     ball.classList.add("animate1")
      return wait(1);
    })
    .then(() => {
      ball.classList.add("animate2")
      ball.classList.remove("animate1")
      return wait(1);
    })
    .then(() => {
      ball.classList.add("animate3")
      ball.classList.remove("animate2")
      return wait(1);
    })
    .then(() => {
      ball.classList.add("animate4")
      ball.classList.remove("animate3")
      setTimeout(function(){
        ball.classList.remove("animate4")
      }, 1200);
    });
    setTimeout(function(){
        ball.classList.remove("animate4")
      }, 400);
  // ball.classList.add("animate");
  // setTimeout(function(){
  //   if(ball.classList != "animate") {
  //     ball.classList.add("animate")
  //   }
  //   ball.classList.remove("animate")
  // }, 400);
}



// let miss = setInterval(function() {
//   let ballTop =parseInt(window.getComputedStyle(ball).getPropertyValue("top"));
// }, 10);