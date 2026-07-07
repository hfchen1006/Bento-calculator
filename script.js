const seniorInput = document.getElementById("seniorStudents");
const juniorInput = document.getElementById("juniorStudents");
const teacherInput = document.getElementById("teachers");
const priceInput = document.getElementById("price");
const extraInput = document.getElementById("extraLunches");


const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");

const totalLunchesResult = document.getElementById("totalLunches");
const totalStudentsResult = document.getElementById("totalStudents");
const totalPriceResult = document.getElementById("totalPrice");

const inputs = [seniorInput, juniorInput, teacherInput, priceInput, extraInput];

function calculateLunches() {
  const seniorStudents = Number(seniorInput.value) || 0;
  const juniorStudents = Number(juniorInput.value) || 0;
  const teachers = Number(teacherInput.value) || 0;
  const price = Number(priceInput.value) || 0;
  const extraLunches = Number(extraInput.value) || 0;
  const juniorLunches = Math.ceil(juniorStudents / 2);
  const totalLunches = seniorStudents + juniorLunches + teachers + extraLunches;
  const totalPrice = totalLunches * price;
  const totalStudents = seniorStudents + juniorStudents;

  totalLunchesResult.textContent = totalLunches;
  totalStudentsResult.textContent = totalStudents;
  totalPriceResult.textContent = totalPrice.toLocaleString();
}

function clearForm() {
  inputs.forEach((input) => {
    input.value = "";
  });

  calculateLunches();
}

function savePrice() {
  const price = priceInput.value;
  localStorage.setItem("price", price);
}

function loadSavedPrice() {
  const savedPrice = localStorage.getItem("price");
  if (savedPrice) {
    priceInput.value = savedPrice;
  }
}

calculateBtn.addEventListener("click", calculateLunches);
clearBtn.addEventListener("click", clearForm);

inputs.forEach((input) => {
  input.addEventListener("input", calculateLunches);
});

priceInput.addEventListener("input", savePrice);
loadSavedPrice();
