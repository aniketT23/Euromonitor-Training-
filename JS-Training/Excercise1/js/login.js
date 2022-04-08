let data = JSON.parse(localStorage.getItem("accountDetails"));
function OnSubmit(event) {
  event.preventDefault();
  let inputs = document.getElementsByTagName("input");
  let account = inputs[0].value;
  let password = inputs[1].value;
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    if (account == data[i].accountNo && password == data[i].password) {
        details=data[i];
      localStorage.setItem("showDetails", JSON.stringify(details));
      window.location.href = "../src/dashboard.html";
      return;
    } else {
      count++;
    }
  }
  alert("Invalid Details")
}
