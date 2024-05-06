$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });


  // signup signin

  // Function to handle sign-in form submission
function handleSignIn(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Here you can add validation for email and password if needed

  // Example: Simple validation
  if (email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  // Here you can perform AJAX request to authenticate user with backend
  // For the sake of example, just show an alert
  alert(`Sign In: Email - ${email}, Password - ${password}`);
}

// Function to handle sign-up form submission
function handleSignUp(event) {
  event.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Here you can add validation for name, email, and password if needed

  // Example: Simple validation
  if (name === '' || email === '' || password === '') {
    alert('Please fill in all fields');
    return;
  }

  // Here you can perform AJAX request to register user with backend
  // For the sake of example, just show an alert
  alert(`Sign Up: Name - ${name}, Email - ${email}, Password - ${password}`);
}

// Add event listeners to sign-in and sign-up forms
document.getElementById('signin-form').addEventListener('submit', handleSignIn);
document.getElementById('signup-form').addEventListener('submit', handleSignUp);


  