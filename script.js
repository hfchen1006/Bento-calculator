const seniorInput = document.getElementById("seniorStudents");
const juniorInput = document.getElementById("juniorStudents");
const teacherInput = document.getElementById("teachers");
const priceInput = document.getElementById("price");
const extraInput = document.getElementById("extraLunches");
const mealTypeSelect = document.getElementById("mealType");
const recordsList = document.getElementById("recordsList");

const calculateBtn = document.getElementById("calculateBtn");
const clearBtn = document.getElementById("clearBtn");
const addRecordBtn = document.getElementById("addRecordBtn");

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

function createRecord() {
  const seniorStudents = Number(seniorInput.value) || 0;
  const juniorStudents = Number(juniorInput.value) || 0;
  const teachers = Number(teacherInput.value) || 0;
  const price = Number(priceInput.value) || 0;
  const extraLunches = Number(extraInput.value) || 0;

  const juniorLunches = Math.ceil(juniorStudents / 2);
  const totalLunches = seniorStudents + juniorLunches + teachers + extraLunches;
  const totalPrice = totalLunches * price;
  const totalStudents = seniorStudents + juniorStudents;
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");

  const record = {
    id: Date.now(),
    date: `${year}/${month}/${day}`,
    time: `${hour}:${minute}`,
    mealType: mealTypeSelect.value,

    seniorStudents,
    juniorStudents,
    teachers,
    extraLunches,

    price,
    totalStudents,
    totalLunches,
    totalPrice,

    note: "",
  };

  return record;
}

function saveRecord() {
  const record = createRecord();

  const savedRecords = localStorage.getItem("records");
  const records = savedRecords ? JSON.parse(savedRecords) : [];

  records.push(record);

  localStorage.setItem("records", JSON.stringify(records));

  renderRecords(records);
  clearForm();
}

function renderRecords(records) {
  if (records.length === 0) {
    recordsList.innerHTML = `<p class="empty-message">目前還沒有紀錄。</p>`;
    return;
  }

  recordsList.innerHTML = "";

  records
    .slice()
    .reverse()
    .forEach((record) => {
      const recordCard = document.createElement("div");
      recordCard.classList.add("record-card");

      recordCard.innerHTML = `
        <div class="record-header">
          <div class="record-meta">
            <span>🕒 ${record.time}</span>
            <span>📅 ${record.date}</span>
          </div>
          <div class="record-actions"></div>
        </div>

        <div class="record-meal">
          <span class="record-icon">🍱</span>
          <strong>${record.mealType === "lunch" ? "午餐" : "晚餐"}</strong>
        </div>

        <div class="record-row">
          <span class="record-icon">👨‍🎓</span>
          <div>
            <strong>${record.totalStudents} 人</strong>
            <p>高年級 ${record.seniorStudents}｜低年級 ${record.juniorStudents}</p>
          </div>
        </div>

        <div class="record-row">
          <span class="record-icon">📦</span>
          <strong>${record.totalLunches} 個便當</strong>
        </div>
      
        <div class="record-row">
          <span class="record-icon">💰</span>
          <strong>$${record.totalPrice.toLocaleString()}</strong>
        </div>

        <div class="record-note">
          <span class="record-icon">📝</span>
          <div>
            <strong>備註</strong>
            <p>${record.note ? escapeHTML(record.note) : "尚未新增備註"}</p>
          </div>
        </div>
      `;
      const recordActions = recordCard.querySelector(".record-actions");
      const addNoteBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-record-btn");
      deleteBtn.textContent = "🗑️";
      deleteBtn.title = "刪除紀錄";

      deleteBtn.addEventListener("click", () => {
        deleteRecord(record.id);
      });

      recordActions.appendChild(deleteBtn);

      addNoteBtn.textContent = record.note ? "編輯備註" : "新增備註";

      addNoteBtn.addEventListener("click", () => {
        addNote(record.id);
      });

      recordCard.appendChild(addNoteBtn);

      recordsList.appendChild(recordCard);
    });
}

function loadRecords() {
  const savedRecords = localStorage.getItem("records");
  const records = savedRecords ? JSON.parse(savedRecords) : [];

  renderRecords(records);
}

function addNote(recordId) {
  
  const savedRecords = localStorage.getItem("records");
  const records = savedRecords ? JSON.parse(savedRecords) : [];

  const record = records.find((r) => r.id === recordId);
  if (!record) return;

  const note = prompt("請輸入備註：", record.note || "");
  if (note === null) return;

  record.note = note;

  localStorage.setItem("records", JSON.stringify(records));

  renderRecords(records);
}

function deleteRecord(recordId) {
  if (!confirm("確定要刪除此紀錄嗎？")) {
    return;
  }

  const savedRecords = localStorage.getItem("records");
  const records = savedRecords ? JSON.parse(savedRecords) : [];

  const updatedRecords = records.filter((r) => r.id !== recordId);

  localStorage.setItem("records", JSON.stringify(updatedRecords));

  renderRecords(updatedRecords);
}

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

calculateBtn.addEventListener("click", calculateLunches);
clearBtn.addEventListener("click", clearForm);
addRecordBtn.addEventListener("click", saveRecord);

inputs.forEach((input) => {
  input.addEventListener("input", calculateLunches);
  input.addEventListener("input", saveSettings);
});

loadSettings();
loadRecords();
