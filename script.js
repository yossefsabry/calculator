let input = document.querySelectorAll("input");
let display = document.querySelector(".display");

// make foucus on input
display.focus();

// event for the keys
input.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.value == "DE") {
      display.value = "";
    } else if (item.value == "=") {
      display.value = eval(display.value);
    } else if (item.value == "AC") {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += item.value;
    }
  });
});

// for key
display.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    display.value = eval(display.value);
  }
  else if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  }
  else if (event.key === "Delete") {
    display.value = "";
  }
});
