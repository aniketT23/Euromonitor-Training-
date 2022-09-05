using static System.Console;

namespace bankingManagementSystem
{
    internal class Register
    {
        public void register()
        {
            WriteLine("Register Here!!");
            WriteLine("Choose your Account Type:   1.Saving Account    2.Current Account ");
            int accountType = Convert.ToInt32(ReadLine());
            WriteLine("Enter your Name: ");
            string name = ReadLine();
            WriteLine("Enter your Email ID: ");
            string email = ReadLine();
            WriteLine("Enter your Age: ");
            int age = Convert.ToInt32(ReadLine());
            WriteLine("Enter your Password");
            string password = ReadLine();
            WriteLine("Enter your Contact Number");
            string phone = ReadLine();
            WriteLine("Enter your Initial amount to be Deposited");
            int amount= Convert.ToInt32(ReadLine());

            Random randomNumber = new Random();
            int number = randomNumber.Next(10000, 99999);
            string accountNumber = "";
            if (accountType == 1)
            {
                accountNumber = "SAV" + number;
            }
            else if (accountType == 2)
            {
                accountNumber = "CURR" + number;
            }
            else
            {
                WriteLine("Please Choose a Valid Option!!");
                return;
            }


            List<RegisteredUsers> users = new List<RegisteredUsers>();
            users.Add(new RegisteredUsers { accountNumber = accountNumber, name = name, email = email, age = age, phone = phone, password = password, amount=amount });
          
            foreach (var i in users)
            {
                if (i.accountNumber == accountNumber)
                {
                    i.getDeatils();
                }

            }
        }
    }

    public class RegisteredUsers
    {
        public string accountNumber;
        public string name;
        public string password;
        public string email;
        public string phone;
        public int age;
        public int amount;

        public void getDeatils()
        {

            WriteLine(this.accountNumber + "    " + this.name + "    " + this.email + "    " + this.phone + "    " + this.age + "     "+ this.amount);
        }
    }

}
