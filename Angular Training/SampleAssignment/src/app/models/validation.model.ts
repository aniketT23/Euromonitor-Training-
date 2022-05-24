class Validation{
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    age: string;
    account: string;
    amount: number;
    accountNo!: string;
    constructor(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        age: string,
        account: string,
        amount: number
      ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.account = account;
        this.amount = amount;
        if (this.account == "Current") {
          this.accountNo = "Curr" + Math.floor(Math.random() * 9999999999);
        } else {
          this.accountNo = "Sav" + Math.floor(Math.random() * 9999999999);
        }
      }
}

export {Validation }