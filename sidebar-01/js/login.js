function login(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check the hardcoded username and password
  if (username === "admin" && password === "password") {
    // Successful login, redirect to the home page
    window.location.href = "HomeAdmin.html";
  } else if (
    (username === "engy Client" ||
      username === "shouny Client" ||
      username === "khaled Client" ||
      username === "sara Client" ||
      username === "lama Client") &&
    password === "password"
  ) {
    // Successful login, redirect to the home page
    window.location.href = "HomeCient.html";
  } else if (
    (username === "engy Banker" ||
      username === "shouny Banker" ||
      username === "khaled Banker" ||
      username === "sara Banker" ||
      username === "lama Banker") &&
    password === "password"
  ) {
    // Successful login, redirect to the home page
    window.location.href = "HomeBanker.html";
  } else {
    // Incorrect username or password, display an error message
    document.getElementById("login-error").textContent =
      "Invalid username or password";
  }
}
