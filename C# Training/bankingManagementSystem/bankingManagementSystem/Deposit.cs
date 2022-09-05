using static System.Console;

namespace bankingManagementSystem
{
    internal class Deposit
    {
        public int deposit(int amount, string accountType)
        {
            WriteLine("Enter your Amount to be Deposited: ");
            int depositAmount = Convert.ToInt32(ReadLine());
            if (accountType == "Saving" && depositAmount < 800)
            {
                Console.WriteLine("Amount you have entered is below Threshold limit");
                return amount;
            }
            else if (accountType == "Current" && depositAmount < 1000)
            {
                Console.WriteLine("Amount you have entered is below Threshold limit");
                return amount;
            }
            else
            {
                amount +=depositAmount;
                WriteLine($" Your Updated Balance is {amount}");
                return amount;

            }

        }
    }
}
