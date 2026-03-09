document.getElementById("sign-btn").addEventListener("click", function () {
  // console.log("sign in button clicked");

  // get the user input
  const userInput = document.getElementById("input-user");
  const contactuser = userInput.value;
  console.log(contactuser);

  // get the pin input
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);

  // match pin & user
  if (contactuser == "admin" && pin == "admin123") {
    // true:::>> aleart> homepage
    alert("sign in success");
    // window.location.replace("/home.html");
    window.location.assign("/home.html");
  } else {
    // true:::>> aleart> return
    alert("sing in failed");
    return;
  }
});
