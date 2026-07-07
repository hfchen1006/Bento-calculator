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

function saveSettings() {
  const settings = {
    price: priceInput.value,
    defaultSeniorStudents: seniorInput.value,
    defaultJuniorStudents: juniorInput.value,
    defaultTeachers: teacherInput.value,
  };

  localStorage.setItem("settings", JSON.stringify(settings));
}

function loadSettings() {
  const savedSettings = localStorage.getItem("settings");
  if (savedSettings) {
    const settings = JSON.parse(savedSettings);
    priceInput.value = settings.price || "";
    seniorInput.value = settings.defaultSeniorStudents || "";
    juniorInput.value = settings.defaultJuniorStudents || "";
    teacherInput.value = settings.defaultTeachers || "";
  }
  calculateLunches();
}

calculateBtn.addEventListener("click", calculateLunches);
clearBtn.addEventListener("click", clearForm);

inputs.forEach((input) => {
  input.addEventListener("input", calculateLunches);
  input.addEventListener("input", saveSettings);
});

loadSettings();

