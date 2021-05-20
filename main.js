let ball = document.getElementById("ball");
let field = document.getElementById("field");

function jump() {
  ball.classList.add("animate");
  const wait = function (seconds) {
    return new Promise(function (resolve) {
      setTimeout(resolve, seconds * 500);
    });
  };
  
  
  wait(0.5)// 待って欲しい○秒書く
    .then(() => {
     // ▼▼挙動を書く▼▼
     ball.classList.add("animate1")
     // ▲▲挙動を書く▲▲ 
      return wait(0.5); //待って欲しい○秒書く
    })
    .then(() => {
      // ▼▼挙動を書く▼▼
      ball.classList.add("animate2")
      ball.classList.remove("animate1")
      // ▲▲挙動を書く▲▲ 
      return wait(0.5); //待って欲しい○秒書く
    })
    .then(() => {
      // ▼▼挙動を書く▼▼
      ball.classList.add("animate3")
      ball.classList.remove("animate2")
      // ▲▲挙動を書く▲▲
      return wait(0.5); //待って欲しい○秒書く
    })
    .then(() => {
      // ▼▼挙動を書く▼▼
      ball.classList.add("animate4")
      ball.classList.remove("animate3")
      // ▲▲挙動を書く▲▲
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