using static System.Console;

namespace bankingManagementSystem
{
    internal class Dashboard
    {
        public void dashboard()
        {

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
                var x = new Login();
                x.initialize();

            }
            else
            {
                WriteLine("Please choose a valid Option");
            }
        }
    }
}
