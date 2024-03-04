window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let x=document.getElementById("output");




let randomTime1 = (Math.floor(Math.random() * 5) + 1) * 1000;
let randomTime2 = (Math.floor(Math.random() * 5) + 1) * 1000;
let randomTime3 = (Math.floor(Math.random() * 5) + 1) * 1000;
let randomTime4 = (Math.floor(Math.random() * 5) + 1) * 1000;
let randomTime5 = (Math.floor(Math.random() * 5) + 1) * 1000;

const P1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P1resolved");
  }, randomTime1);
});
const P2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P2resolved");
  }, randomTime2);
});
const P3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P3resolved");
  }, randomTime3);
});
const P4 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P4resolved");
  }, randomTime4);
});
const P5 = new Promise((res, rej) => {
  setTimeout(() => {
    res("P5resolved");
  }, randomTime5);
});
promises.push(P1,P2,P3,P4,P5);

async function promresolv() {
  const startTime = new Date();

await  Promise.any(promises)
    .then((data) => {
     x.innerHTML=data;
      })
    .catch((err) => {
      console.log(err);
    });

  

}

promresolv();
