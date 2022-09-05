using static System.Console;

namespace bankingManagementSystem
{
    internal class Login
    {
        public void initializeLogin(List<RegisteredUsers> users)
        {
            WriteLine("Login into your account: ");
            WriteLine("Enter your Account Number");
            string accountNumber = ReadLine();
            WriteLine("Enter your password");
            string password = ReadLine();

            foreach (var i in users)
            {
                if (accountNumber == i.accountNumber && password == i.password)
                {
                    WriteLine($"Welcome {i.name} here are your Details:-");
                    i.getDeatils();
                    return;
                }
                else
                {
                    WriteLine("Wrong Credentials!!");
                }

            }


        }
    }
}
