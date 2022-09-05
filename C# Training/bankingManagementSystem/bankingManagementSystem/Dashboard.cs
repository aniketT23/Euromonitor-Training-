using static System.Console;

namespace bankingManagementSystem
{
    internal class Dashboard
    {
        public void dashboard()
        {
            List<RegisteredUsers> users = new List<RegisteredUsers>();
            users.Add(new RegisteredUsers { accountNumber = "SAV45452", name = "Rambhu", email = "rambhu12@gmail.com", age = 25, phone = "7986548695", password = "ramb@312" , amount=40000});
            users.Add(new RegisteredUsers { accountNumber = "SAV45477", name = "Shivam", email = "shivam345@gmail.com", age = 26, phone = "9946548695", password = "shiv@312" , amount = 50000 });
            users.Add(new RegisteredUsers { accountNumber = "SAV45474", name = "Vishnu", email = "mone007@gmail.com", age = 28, phone = "9978562485", password = "sankara@312", amount = 90000 });

            WriteLine("Hello !! Please select an Option :-");
            WriteLine("1.Register a new Account    2.Login    ");
            int input = Convert.ToInt32(ReadLine());
            if (input == 1)
            {
                var register = new Register();
                register.register();
            }
            else if (input == 2)
            {
                var login = new Login();
                login.initializeLogin(users);

            }
            else
            {
                WriteLine("Please choose a valid Option");
            }

        }
    }
}
