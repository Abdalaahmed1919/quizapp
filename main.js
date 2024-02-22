
// select element 
let btnstart = document.querySelector(".btnstart");
let quizsection =  document.querySelector(".quiz-section");
let closebtn = document.querySelector(".close");
let homepage = document.querySelector(".home");
let btncal = document.querySelector(".cal");
let btnphy = document.querySelector(".phys");
let btorga = document.querySelector(".organic")
let btnprog = document.querySelector(".prog")
let quizpage = document.querySelector(".queeee");
let headerque = document.querySelector(".header p");
let divanswers = document.querySelector(".answers");
let bullets = document.querySelector(".bullets");
let nextbtn = document.querySelector(".next");
let timer = document.querySelector(".timer");
let rsult = document.querySelector(".rsult");
let gohomebtn = document.querySelector(".gohome");
let numrightele = document.querySelector(".numright");
let textresulttbn = document.querySelector(".textresult");
let backbtn = document.querySelector(".back");

const uniqueNumberGenerator = (function () {
  let selectedNumbers = [];
  let counter = 0;
  return function () {
      if (selectedNumbers.length === 10) {
          return -1; 
      }
      let randomNumber;
      do {
          randomNumber = Math.floor(Math.random() * 20); 
      } while (selectedNumbers.includes(randomNumber));
      selectedNumbers.push(randomNumber);
      return randomNumber;
  };
})();
let bulletnumber = 0;
let current = uniqueNumberGenerator();
let reightanswer = 0;
console.log(current);
// to open quizsection 
btnstart.onclick = () => {
    quizsection.classList.add("active");
    homepage.classList.add("hidden");
}
// to close quizsection
    closebtn.onclick = () => {
    quizsection.classList.remove("active");
    homepage.classList.remove("hidden");
}
// click on subject to go to questions page
// calculas
btncal.onclick = function () {
    quizsection.classList.remove("active");
    homepage.classList.add("none");
    quizpage.classList.add("active");
    mainfunctioncalc ();
    // countdocwntimer (4,10);
}
// physics
btnphy.onclick = () => {
    quizsection.classList.remove("active");
    homepage.classList.add("none");
    quizpage.classList.add("active");
    mainfunctionphy ();
}
// organic
btorga.onclick = () => {
    quizsection.classList.remove("active");
    homepage.classList.add("none");
    quizpage.classList.add("active");
    mainfunctionorga ();
}
// programming
btnprog.onclick = () => {
    quizsection.classList.remove("active");
    homepage.classList.add("none");
    quizpage.classList.add("active");
    mainfunctionprog ();
}
// function for Calculas Page
function mainfunctioncalc () {
    let myrequest = new XMLHttpRequest();
     myrequest.onreadystatechange = function () {
         if (this.readyState === 4 && this.status === 200) {
          let mydata = JSON.parse(myrequest.responseText);
          let count = mydata.length;
          count= 10;
          tomakedata (mydata[current] , count);
          makebullets(count);
          countdocwntimer (180 , count);
          nextbtn.onclick = () => {
              console.log(current);
              let righranswere = mydata[current].reight_answer;
              bulletnumber++;
              current = uniqueNumberGenerator();
              righransweres(righranswere , count);
              divanswers.innerHTML = "";
              tomakedata (mydata[current] , count);
              handelbullets ();
              clearInterval(countdowninterval);
              countdocwntimer (180 , count);
              showresult (count);
          }
         }
     }
    myrequest.open("GET" , "jsonfiles/calc.json");
    myrequest.send();
}
// function for oraganic page 
function mainfunctionorga () {
  let myrequest = new XMLHttpRequest();
  myrequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
       let mydata = JSON.parse(myrequest.responseText);
       let count = mydata.length;
       count= 10;
       console.log(mydata[18]);
       tomakedata (mydata[current] , count);
       makebullets(count);
       countdocwntimer (60 , count);
       nextbtn.onclick = () => {
           console.log(current);
           let righranswere = mydata[current].reight_answer;
           bulletnumber++;
           current = uniqueNumberGenerator();
           righransweres(righranswere , count);
           divanswers.innerHTML = "";
           tomakedata (mydata[current] , count);
           handelbullets ();
           clearInterval(countdowninterval);
           countdocwntimer (60 , count);
           showresult (count);
       }
      }
  }
  myrequest.open("GET" , "jsonfiles/orga.json");
  myrequest.send();
}
// function for programming page
function mainfunctionphy () {
  let myrequest = new XMLHttpRequest();
   myrequest.onreadystatechange = function () {
       if (this.readyState === 4 && this.status === 200) {
        let mydata = JSON.parse(myrequest.responseText);
        let count = mydata.length;
        count= 10;
        console.log(mydata[18]);
        tomakedata (mydata[current] , count);
        makebullets(count);
        countdocwntimer (60 , count);
        nextbtn.onclick = () => {
            console.log(current);
            let righranswere = mydata[current].reight_answer;
            bulletnumber++;
            current = uniqueNumberGenerator();
            righransweres(righranswere , count);
            divanswers.innerHTML = "";
            tomakedata (mydata[current] , count);
            handelbullets ();
            clearInterval(countdowninterval);
            countdocwntimer (60 , count);
            showresult (count);
        }
       }
   }
  myrequest.open("GET" , "jsonfiles/phys.json");
  myrequest.send();
}
// funcction for programming page 
function mainfunctionprog () {
  let myrequest = new XMLHttpRequest();
   myrequest.onreadystatechange = function () {
       if (this.readyState === 4 && this.status === 200) {
        let mydata = JSON.parse(myrequest.responseText);
        let count = mydata.length;
        count= 10;
        console.log(mydata[18]);
        tomakedata (mydata[current] , count);
        makebullets(count);
        countdocwntimer (60 , count);
        nextbtn.onclick = () => {
            console.log(current);
            let righranswere = mydata[current].reight_answer;
            bulletnumber++;
            current = uniqueNumberGenerator();
            righransweres(righranswere , count);
            divanswers.innerHTML = "";
            tomakedata (mydata[current] , count);
            handelbullets ();
            clearInterval(countdowninterval);
            countdocwntimer (60 , count);
            showresult (count);
        }
       }
   }
  myrequest.open("GET" , "jsonfiles/prog.json");
  myrequest.send();
}
// to get data from json
function tomakedata (obj , count) {
    if (current > -1) {
     headerque.innerHTML = obj[`title`];
     for (let i = 1; i<= 4; i++) {
      let maindivanswe = document.createElement("div");
      maindivanswe.className = "anwer";
      let input = document.createElement("input");
      let label = document.createElement("label");
      input.type = "radio";
      input.id = `answer_${i}`
      input.name = "queas";
      if (i === 1) {
        input.checked = true;
      }
      input.dataset.answer = obj[`answer_${i}`];
      label.htmlFor = `answer_${i}`;
      let answers = document.createTextNode(obj[`answer_${i}`])
      label.appendChild(answers);
      maindivanswe.appendChild(input);
      maindivanswe.appendChild(label);
      divanswers.appendChild(maindivanswe);
     }
   }
}
// function to create bullets
function makebullets (count) {
 for (let i = 0; i <count; i++) {
   let span = document.createElement("span");
   bullets.appendChild(span);
   if (i === 0) {
       span.className = "on";
   }
 }
}
// function to handle bullets
function handelbullets () {
    let bulletsspan = document.querySelectorAll(".bullets span");
    let arraybullet = Array.from(bulletsspan);
    arraybullet.forEach((span , index) => {
        if (bulletnumber < 10 ) {
          arraybullet[bulletnumber].className = "on";
        }
    })
}
function handelbullets2 () {
  let bulletsspan = document.querySelectorAll(".bullets span");
  let arraybullet = Array.from(bulletsspan);
  arraybullet.forEach((span , index) => {
      if (current === index-1) {
          span.classList.remove("on");
      }
  })
}
// function to calc righranswers 
function righransweres (r,count) {
            let answers = document.getElementsByName("queas");
            let chosenanswer;
            for (let i =0; i < answers.length; i++) {
              if (answers[i].checked) {
                chosenanswer = answers[i].dataset.answer;
              }
            }  
            if (r === chosenanswer) {
                reightanswer++;
            }
          console.log(reightanswer);
        
}
function righransweres2 (r,count) {
  let answers = document.getElementsByName("queas");
  let chosenanswer;
  for (let i =0; i < answers.length; i++) {
    if (answers[i].checked) {
      chosenanswer = answers[i].dataset.answer;
    }
  }  
  console.log(chosenanswer);
  if (r === chosenanswer) {
      reightanswer--;
  }
console.log(reightanswer);
}
// function to show result 
function showresult (count) {
  if (current === -1) {
    quizpage.remove();
    rsult.classList.add("active"); 
    gohomebtn.onclick = () => {
      window.location.href = "index.html";
    } 
    numrightele.innerHTML = reightanswer;
    if (reightanswer === count) {
     textresulttbn.innerHTML = `Your Rate is <span class="perfect">Perfect</span>`;
    } else if (reightanswer >  count/2 && reightanswer < count) {
      textresulttbn.innerHTML = `Your Rate is <span class="good">good</span>`;
    } else {
      textresulttbn.innerHTML = `Your Rate is <span class="bad">Bad</span>`;
    }
  }
}
// function to timer 
function countdocwntimer (dureation , count) {
  if (current  > -1 ) {
    let min,sec;
     countdowninterval = setInterval(function (){
      min = parseInt(dureation / 60);
      sec = parseInt(dureation % 60);
       min = min < 10 ? `0${min}` : min; 
       sec = sec < 10 ? `0${sec}` : sec; 
      timer.innerHTML = `${min}:${sec}`;
      if (--dureation < 0) {
        clearInterval(countdowninterval);
        nextbtn.click();
      }
     } , 1000)
  }
}


