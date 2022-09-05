using static System.Console;

namespace bankingManagementSystem
{
    internal class Register
    {
        public void register()
        {
            WriteLine("Register Here!!");
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



            List<RegisteredUsers> users = new List<RegisteredUsers>();
            users.Add(new RegisteredUsers { accountNumber = "SAV45412", name = name, email = email, age = age, phone = phone, password = password });
            foreach(var i in users)
            {
                i.getDeatils();
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
