let buttons = document.querySelectorAll('input[type="button"');
let input = document.getElementById("display");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // when a button gets clicked, an function will fire
    input.value += this.value; // 'this' is the button that gets clicked. We add its value to the input field
  });
}

function solve() {
  let x = document.getElementById("display").value;

  let y = eval(x);

  document.getElementById("display").value = y;

  return y;
}
