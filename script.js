// SIGNUP
function signup() {

  let name = document.getElementById("signupName").value;
  let email = document.getElementById("signupEmail").value;
  let password = document.getElementById("signupPassword").value;
  let message = document.getElementById("signupMessage");

  if (name === "" || email === "" || password === "") {
    message.innerText = "Please fill all fields";
    return;
  }

  if (password.length < 6) {
    message.innerText = "Password must be at least 6 characters";
    return;
  }

  let user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("resumeUser", JSON.stringify(user));

  message.innerText = "Account created successfully!";

  setTimeout(function () {
    window.location.href = "login.html";
  }, 1000);
}


// LOGIN
function login() {

  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;
  let message = document.getElementById("loginMessage");

  let savedUser = localStorage.getItem("resumeUser");

  if (savedUser === null) {
    message.innerText = "Please create an account first";
    return;
  }

  let user = JSON.parse(savedUser);

  if (email === user.email && password === user.password) {

    message.innerText = "Login successful!";

    setTimeout(function () {
      window.location.href = "templates.html";
    }, 800);

  } else {

    message.innerText = "Invalid email or password";

  }
}


// TEMPLATE SELECTION
function selectTemplate(color) {

  localStorage.setItem("selectedTemplate", color);

  window.location.href = "resume.html";
}


// CREATE RESUME
function createResume() {

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let education = document.getElementById("education").value;
  let skills = document.getElementById("skills").value;
  let experience = document.getElementById("experience").value;
  let about = document.getElementById("about").value;

  let color = localStorage.getItem("selectedTemplate") || "blue";

  let preview = document.getElementById("resumePreview");

  preview.innerHTML = `
    <div class="resume ${color}">

      <h1>${name}</h1>

      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>

      <hr>

      <h2>About Me</h2>
      <p>${about}</p>

      <h2>Education</h2>
      <p>${education}</p>

      <h2>Skills</h2>
      <p>${skills}</p>

      <h2>Experience</h2>
      <p>${experience}</p>

      <button onclick="window.print()">Print / Save Resume</button>

    </div>
  `;
}