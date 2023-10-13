//Mouse over event!!

var cols = document.querySelectorAll(".col");

cols.forEach(function(col) {
  col.addEventListener("mouseover", function() {
    col.style.backgroundColor = "black";
  });
});

//Input Event

// var input = document.getElementById("input");
// var Bar = document.getElementById("bar");


// input.addEventListener("input", function () {
//     var value = parseFloat(input.value);

//     value = isNaN(value) ? 0 : Math.min(Math.max(value, 0), 100);

//     Bar.style.width = value + "%";
// });

function ProgressBar(inputElement, progressBarElement) {
  inputElement.addEventListener("input", function () {
    const value = parseFloat(inputElement.value) || 0;
    progressBarElement.style.width = `${Math.min(Math.max(value, 0), 100)}%`;
  });
}

const input = document.getElementById("input");
const bar = document.getElementById("bar");

ProgressBar(input, bar);

// click Event!!

const bg = document.getElementById('color');
const cy = document.getElementById('yellow');
const cg = document.getElementById('green');
const cb = document.getElementById('blue');
const co = document.getElementById('orange');

cy.addEventListener('click' , function(){
  bg.style.backgroundColor = 'yellow';
});
cg.addEventListener('click' , function(){
  bg.style.backgroundColor = 'green';
});
cb.addEventListener('click' , function(){
  bg.style.backgroundColor = 'blue';
});
co.addEventListener('click' , function(){
  bg.style.backgroundColor = 'orange';
});

// otherwise

// const bg = document.getElementById('color');
// const buttons = document.querySelectorAll('button');

// buttons.forEach(button => {
//   button.addEventListener('click', function() {
//     const bgColor = this.getAttribute('data-color');
//     bg.style.backgroundColor = bgColor;
//   });
// });
