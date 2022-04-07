let btn = document.getElementById("submit").value;

function ageValidate() {
  let inputs = document.getElementsByTagName("input");
  let age = inputs[1].value;
  let spans = document.getElementsByTagName("span");
  let ageSpan = spans[3];
  if (age > 68) {
    ageSpan.innerHTML = "You are not eligible for account";
  } else {
    ageSpan.innerHTML = null;
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
  if (name == "") {
    nameSpan.innerHTML = "Please enter your name";
  }
  if (age == "") {
    ageSpan.innerHTML = "Please enter your age";
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
  if (regex.test(password)) {
    if (accountType == "Saving") {
      if (deposit < 500) {
        depositSpan.innerHTML = "Minimum Amount should be greater than 500";
      } else {
        let arr1 = [name, age, location, email, password, accountType, deposit];
        console.log(arr1);
        depositSpan.innerHTML=null;
        window.location.href="../src/dashboard.html"
      }
    } else {
      if (deposit < 800) {
        depositSpan.innerHTML = "Minimum Amount should be greater than 800";
      }
      else{
        depositSpan.innerHTML=null;
        let arr1 = [name, age, location, email, password, accountType, deposit];
      console.log(arr1);
      window.location.href="../src/dashboard.html"
    
      }
      
    }
  } else {
    passwordSpan.innerHTML =
      "Password must conatin minimum eight characters, at least one letter, one number and one special character";
  }

}
