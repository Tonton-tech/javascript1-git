const myContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector('p');


myContainer.addEventListener('click', () => {
    console.log('Click !');
    myContainer.style.border = "4px solid green";
    myContainer.style.background = " red";

});

btn1.addEventListener("click", () => {
    console.log("Hi Matin!");
});

btn2.addEventListener('click', () => {
    console.log("Steve!");
});
