function saveData() {

  let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  let record = {
    name: name,
    password: password,
    email: email,
    timestamp: new Date().toISOString()
  };

  let users = JSON.parse(localStorage.getItem("users")) || [];

  users.push(record);

  localStorage.setItem("users", JSON.stringify(users));

  alert("Data inserted successfully!");

  document.getElementById("name").value = "";
  document.getElementById("password").value = "";
  document.getElementById("email").value = "";
}
