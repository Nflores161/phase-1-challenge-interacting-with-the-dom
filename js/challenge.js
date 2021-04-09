
let counter = document.querySelector('#counter');
let newCount = 0
let pause = document.querySelector("#pause");

let timer = setInterval(function run() {
  if (counter) {
  counter.innerHTML = newCount++
  console.log(newCount)
  }
  setInterval(newCount, 1000);
}, 1000);


  function pauseyBoy() {
    if (pause.innerText === "pause") {
      clearInterval(timer);
      pause.innerHTML = "resume";
    } else {
      if (pause.innerText === "resume") {
        setInterval(function run() {
          if (counter) {
          counter.innerHTML = newCount++
          console.log(newCount)
          }
          setInterval(newCount, 0);
        }, 1000);
        pause.innerHTML = "pause"
      }
    }
  }  

  function resumeyBoy() {
    if (pause.innerText === "resume") {
      setInterval(function run() {
        if (counter) {
        counter.innerHTML = newCount++
        console.log(newCount)
        }
        setInterval(newCount, 0);
      }, 1000);
      pause.innerHTML = "pause"
    }
  }

  pause.addEventListener("click", pauseyBoy);
 