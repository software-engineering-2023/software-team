$(document).ready(function () {
  $("#registration-form").submit(function (e) {
    e.preventDefault(); // Prevent form submission

    // Perform form validation here
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();

    if (password !== confirm_password) {
      Swal.fire("Error", "Passwords do not match.", "error");
      return;
    }

    var userType = $("#user_type").val();
    if (userType === "") {
      Swal.fire("Error", "Please select a user type.", "error");
      return;
    }

    // If form validation passes, show success message and redirect
    Swal.fire("Success", "Account created successfully!", "success").then(
      function () {
        window.location.href = "Login.html";
      }
    );
  });
});
