function appendValue(value) {
  document.getElementById("display").value += value;
}

function deleteLast() {
  let screen = document.getElementById("display");
  screen.value = screen.value.slice(0, -1);
}

function clearScreen() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch (e) {
    alert("Error!");
    clearScreen();
  }
}
