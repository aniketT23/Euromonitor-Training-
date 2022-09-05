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

            Random randomNumber = new Random();
            int number = randomNumber.Next(10000, 99999);
            string accountNumber="";
            if(accountType == 1)
            {
                accountNumber = "SAV" + number;
            }else if(accountType == 2)
            {
                accountNumber = "CURR" + number;
            }
            else
            {
                WriteLine("Please Choose a Valid Option!!");
            }
            

            List<RegisteredUsers> users = new List<RegisteredUsers>();
            users.Add(new RegisteredUsers { accountNumber = accountNumber, name = name, email = email, age = age, phone = phone, password = password });
            //users.Add(new RegisteredUsers { accountNumber = "SAV45452", name = "Rambhu", email = "rambhu12@gmail.com", age = 25, phone = "7986548695", password = "ramb@312" });
            //users.Add(new RegisteredUsers { accountNumber = "SAV45477", name = "Shivam", email = "shivam345@gmail.com", age = 26, phone = "9946548695", password = "shiv@312" });
            //users.Add(new RegisteredUsers { accountNumber = "SAV45474", name = "Vishnu", email = "mone007@gmail.com", age = 28, phone = "9978562485", password = "sankara@312" });
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

        public void getDeatils()
        {

            WriteLine(this.accountNumber + "    " + this.name + "    " + this.email + "    " + this.phone + "    " + this.age);
        }
    }

}
