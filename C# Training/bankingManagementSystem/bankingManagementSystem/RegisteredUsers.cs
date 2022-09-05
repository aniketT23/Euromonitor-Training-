using static System.Console;

namespace bankingManagementSystem
{
    public class RegisteredUsers
    {
        public string accountNumber;
        public string name;
        public string password;
        public string email;
        public string phone;
        public int age;
        public int amount;
        public string accountType;

        public void getDeatils()
        {

            WriteLine(this.accountNumber + "    " + this.name + "    " + this.email + "    " + this.phone + "    " + this.age + "     " + this.amount + "    " + this.accountType);
        }
    }

}
