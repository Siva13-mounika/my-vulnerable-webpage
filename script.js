document.getElementById("myForm").addEventListener("submit", function 
(e) { 
e.preventDefault(); 
 
  const username = document.getElementById("username").value.trim(); 
  const email = document.getElementById("email").value.trim(); 
  const password = document.getElementById("password").value.trim(); 
  const error = document.getElementById("error"); 
 
  error.textContent = ""; 
 
  if (username === "") { 
    error.textContent = "Username is required"; 
    return; 
  } 
 
  if (!email.includes("@")) { 
    error.textContent = "Please enter a valid email"; 
    return; 
  } 
 
  if (password.length < 6) { 
    error.textContent = "Password must be at least 6 characters"; 
    return; 
  } 
 
alert("Form submitted successfully!"); 
document.getElementById("myForm").reset(); 
});