function validateForm() {
  let x = document.forms["donationForm"]["fname"].value;
  // Empty first name field check
  if (x == "") {
    alert("First name must be filled out");
    return false;
  }

  // Empty currency field or invalid input check
  x = document.forms["donationForm"]["donation"].value;
  if (x == "") {
    alert("Please specify donation amount");
    return false;
  }

  if (isNaN(x) || x < 0) {
    alert("Invalid dollar amount");
    return false;
  }
}
