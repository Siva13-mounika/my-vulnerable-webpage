const form = document.getElementById("surveyForm"); 
const output = document.getElementById("output"); 
function loadData() { 
const data = JSON.parse(localStorage.getItem("surveyData")) || []; 
output.textContent = JSON.stringify(data, null, 2); 
} 
form.addEventListener("submit", function (e) { 
e.preventDefault(); 
const surveyEntry = { 
name: document.getElementById("name").value, 
age: document.getElementById("age").value, 
subject: document.getElementById("subject").value, 
timestamp: new Date().toISOString() 
}; 
const existingData = JSON.parse(localStorage.getItem("surveyData")) || 
[]; 
existingData.push(surveyEntry); 
localStorage.setItem("surveyData", JSON.stringify(existingData)); 
form.reset(); 
loadData(); 
}); 
loadData(); 
