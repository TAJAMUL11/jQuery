$(document).ready(function () {
  function validateForm() {
    let isValid = true;

    if ($("#name").val().trim() === "") {
      $("#nameError").text("Name is required").show();
      $("#name").addClass("invalid").removeClass("valid");
      isValid = false;
    } else {
      $("#nameError").hide();
      $("#name").addClass("valid").removeClass("invalid");
    }

    // Email validation (regex)
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test($("#email").val().trim())) {
      $("#emailError").text("Enter a valid email").show();
      $("#email").addClass("invalid").removeClass("valid");
      isValid = false;
    } else {
      $("#emailError").hide();
      $("#email").addClass("valid").removeClass("invalid");
    }

    // Enable/Disable Submit Button
    if (isValid) {
      $("button[type='submit']").prop("disabled", false).addClass("enabled");
    } else {
      $("button[type='submit']").prop("disabled", true).removeClass("enabled");
    }
  }

  // Real-time validation on keyup/blur
  $("#name, #email").on("keyup blur", validateForm);

  // API Call on Form Submission (POST Request)
  $("#apiForm").submit(function (event) {
    event.preventDefault();

    let formData = {
      name: $("#name").val(),
      email: $("#email").val(),
    };

    $("#statusMsg").text("Submitting...").css("color", "blue");
    $("#submitSpinner").show();

    $.ajax({
      url: "https://reqres.in/api/users",
      method: "POST",
      data: JSON.stringify(formData),
      contentType: "application/json",
      success: function (response) {
        $("#statusMsg")
          .text("Form submitted successfully! ID: " + response.id)
          .css("color", "green");
        $("#submitSpinner").hide();

        $("#name, #email").val("").removeClass("valid invalid");
        $("button[type='submit']")
          .prop("disabled", true)
          .removeClass("enabled");
      },
      error: function () {
        $("#statusMsg").text("Error submitting form").css("color", "red");
        $("#submitSpinner").hide();
      },
    });
  });

  // Fetch & Display All Users (Multiple Pages)
  $("#fetchUsers").click(function () {
    $("#userList").html(""); // Clear previous list
    $("#fetchSpinner").show();

    $.ajax({
      url: "https://reqres.in/api/users?page=1",
      method: "GET",
      success: function (response) {
        let totalPages = response.total_pages; // Get total pages

        let allUsers = []; // Store all users

        // Fetch all pages
        let promises = [];
        for (let page = 1; page <= totalPages; page++) {
          let request = $.ajax({
            url: `https://reqres.in/api/users?page=${page}`,
            method: "GET",
          }).done(function (data) {
            allUsers = allUsers.concat(data.data); // Combine user data
          });

          promises.push(request);
        }

        // When all requests are complete, update the UI
        $.when.apply($, promises).done(function () {
          $("#fetchSpinner").hide();
          $("#userList").empty();
          allUsers.forEach(function (user) {
            $("#userList").append(
              `<li>${user.first_name} ${user.last_name} <span>${user.email}</span></li>`
            );
          });
        });
      },
      error: function () {
        $("#fetchSpinner").hide();
        $("#userList").html("<li>Error fetching users</li>");
      },
    });
  });
});
