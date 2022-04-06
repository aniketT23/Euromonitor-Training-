let btn = document.getElementById("submit").value;

function OnSubmit(event) {
  event.preventDefault();
  var inputs = document.getElementsByTagName("input");
  let name = inputs[0].value;
  let age = inputs[1].value;
  let location = inputs[2].value;
  let email = inputs[5].value;
  let password = inputs[6].value;
  let deposit = inputs[7].value;
  let accountType = document.getElementById("accountType").value;
  let regex = new RegExp(
    "^(?=.*[0-9])"
    + "(?=.*[a-z])(?=.*[A-Z])"
    + "(?=.*[@#$%^&+=])"
    + "(?=\\S+$).{8,20}$"
  );

  if (age < 69) {
      console.log(regex.test(password));
    if (regex.test(password)) {
      if (accountType == "Saving") {
        if (deposit < 500) {
          alert("Minimum Amount should be greater than 500");
        }else{let arr1 = [name, age, location, email, password, accountType, deposit];
            console.log(arr1);}
     
      } else {
        if (deposit < 800) {
          alert("Minimum Amount should be greater than 800");
        }
        let arr1 = [name, age, location, email, password, accountType, deposit];
      console.log(arr1);
      }
      
    } else {
      alert(
        "Password must conatin minimum eight characters, at least one letter, one number and one special character:"
      );
    }
  } else {
    alert("You are not eligible for account opening");
  }

  // console.log(arr1);
}
