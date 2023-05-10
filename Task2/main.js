console.log("Kalkulator started");

const input1 = document.querySelector("#input1");
const input2 = document.getElementById("input2");
const result = document.getElementById("result");
const operatorButton = document.querySelectorAll(".operator");

let operator = null;
input1.value = null;
input2.value = null;


operatorButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    console.log(input1.value);
    console.log(input2.value);
    if (input1.value == null || input2.value == null) {
        input1.value = 0;
        input2.value = 0;
        console.log("Please enter a number");
        alert("Please enter a number");
        return;
    } 
    else {
      operator = event.target.innerText;
      result.value = eval(input1.value + operator + input2.value);
    }
  });
});


function clear() {
  input1.value = null;
  input2.value = null;
  operator = null;
  result.value = null;
}

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  console.log("reset");
  clear();
});
