const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fname = form["fname"].value;
  const lname = form["lname"].value;
  const emailid = form["emailid"].value;
  const password = form["password"].value;

  if (fname === "") {
    addErrorTo("fname");
  } else {
    removeError("fname");
  }

  if (lname === "") {
    addErrorTo("lname");
  } else {
    removeError("lname");
  }

  if (emailid === "" || !validateEmail(emailid)) {
    addErrorTo("emailid");
  } else {
    removeError("emailid");
  }

  if (password === "") {
    addErrorTo("password");
  } else {
    removeError("password");
  }
});

function addErrorTo(field) {
  const select = form[field].parentNode;
  select.querySelector("small").style.opacity = 1;
  select.querySelector("img").style.opacity = 1;

  select.classList.add('error');
}

function removeError(field) {
  const select = form[field].parentNode;
  select.querySelector("small").style.opacity = 0;
  select.querySelector("img").style.opacity = 0;

  select.classList.remove('error');
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
