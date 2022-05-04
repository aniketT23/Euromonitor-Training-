let btn = document.getElementById("submit").value;
let Year = new Date();
let currYear = Year.getFullYear();
function ageValidate() {
  let inputs = document.getElementsByTagName("input");
  let age = inputs[1].value;
  let spans = document.getElementsByTagName("span");
  let ageSpan = spans[3];
  let newYear = "";
  let enteredDate = new Date(age);
  let enteredYear = enteredDate.getFullYear();

  if (currYear - enteredYear > 68 || currYear - enteredYear <= 0) {
    ageSpan.innerHTML = "You are not eligible for account";
  } else {
    ageSpan.innerHTML = null;
    return true;
  }
}

function OnSubmit(event) {
  event.preventDefault();
  let inputs = document.getElementsByTagName("input");
  let spans = document.getElementsByTagName("span");
  let nameSpan = spans[1];
  let ageSpan = spans[3];
  let stateSpan = spans[5];
  let countrySpan = spans[7];
  let emailSpan = spans[9];
  let passwordSpan = spans[11];
  let depositSpan = spans[13];
  let name = inputs[0].value;
  let age = inputs[1].value;
  let location = inputs[2].value;
  let state = inputs[3].value;
  let country = inputs[4].value;
  let email = inputs[5].value;
  let password = inputs[6].value;
  let deposit = inputs[7].value;
  let accountType = document.getElementById("accountType").value;
  let regex = new RegExp(
    "^(?=.*[0-9])" +
      "(?=.*[a-z])(?=.*[A-Z])" +
      "(?=.*[@#$%^&+=])" +
      "(?=\\S+$).{8,20}$"
  );
  let accountNo = "";

  if (name == "") {
    nameSpan.innerHTML = "Please enter your name";
  }
  if (age == "" || ageValidate()) {
    ageSpan.innerHTML = "Please enter your D.O.B";
  }
  if (state == "") {
    stateSpan.innerHTML = "Please select your State";
  }
  if (country == "") {
    countrySpan.innerHTML = "Please select your country";
  }
  if (email == "") {
    emailSpan.innerHTML = "Please enter a valid email";
  }
  if (!regex.test(password)) {
    passwordSpan.innerHTML =
      "Password must conatin minimum eight characters, at least one letter, one number and one special character";
  }
  if (accountType == "Current" && deposit < 800) {
    depositSpan.innerHTML = "Minimum Amount should be greater than 800";
    return;
  }
  if (accountType == "Saving" && deposit < 500) {
    depositSpan.innerHTML = "Minimum Amount should be greater than 500";
    return;
  } else if (
    name &&
    age &&
    email &&
    password &&
    deposit &&
    regex.test(password) &&
    state &&
    country
  ) {
    if(accountType=="Current"){
      accountNo = "Curr" + Math.floor(Math.random() * 9999999999);
      console.log(accountNo,deposit)
    }
    if(accountType=="Saving"){
      accountNo = "Sav" + Math.floor(Math.random() * 9999999999);
      console.log(accountNo,deposit)
    }
    let details = {
      name: name,
      email: email,
      password: password,
      accountNo: accountNo,
      accountType: accountType,
      deposit: deposit,
    };
    localStorage.setItem("showDetails", JSON.stringify(details));
    addDeatils(details);
    window.location.href = "../src/dashboard.html";
  }
}

function addDeatils(details) {
  if (localStorage.getItem("accountDetails") == null) {
    localStorage.setItem("accountDetails", JSON.stringify([details]));
  } else {
    let data = JSON.parse(localStorage.getItem("accountDetails"));
    data.push(details);
    localStorage.setItem("accountDetails", JSON.stringify(data));
  }
}
