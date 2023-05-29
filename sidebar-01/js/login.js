function login(event) {
  event.preventDefault();

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check the hardcoded username and password
  if (username === "admin" && password === "admin") {
    // Successful login, redirect to the home page
    window.location.href = "HomeAdmin.html";
  } else if (
    (username === "ingy" || username === "shouny") &&
    password === "password"
  ) {
    // Successful login, redirect to the home page
    window.location.href = "HomeClient.html";
  } else if (
    (username === "khaled" || username === "sara" || username === "lama") &&
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
