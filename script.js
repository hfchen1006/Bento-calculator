const seniorInput = document.getElementById("seniorStudents");
const juniorInput = document.getElementById("juniorStudents");
const teacherInput = document.getElementById("teachers");
const priceInput = document.getElementById("price");
const extraInput = document.getElementById("extraLunches");

const calculateBtn = document.getElementById("calculateBtn");

const totalLunchesResult = document.getElementById("totalLunches");
const totalPriceResult = document.getElementById("totalPrice");

function calculateLunches() {
    const seniorStudents = Number(seniorInput.value) || 0;
    const juniorStudents = Number(juniorInput.value) || 0;
    const teachers = Number(teacherInput.value) || 0;
    const price = Number(priceInput.value) || 0;
    const extraLunches = Number(extraInput.value) || 0;

    const totalLunches = seniorStudents + juniorStudents + teachers + extraLunches;
    const totalPrice = totalLunches * price;

    totalLunchesResult.textContent = totalLunches;
    totalPriceResult.textContent = totalPrice.toLocaleString();
}

calculateBtn.addEventListener("click", calculateLunches);