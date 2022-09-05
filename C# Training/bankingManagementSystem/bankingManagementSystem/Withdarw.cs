using static System.Console;

namespace bankingManagementSystem
{
    internal class Withdarw
    {
        public int withdraw(int amount)
        {
            WriteLine("Please enter amount you want to withdraw");
            int withdrawAmount = Convert.ToInt32(ReadLine());
            if (amount < withdrawAmount)
            {
                WriteLine("Insufficent Balance!!");
                return amount;
            }
            else
            {

                amount -= withdrawAmount;
                WriteLine($" Your Updated Balance is {amount}");
                return amount;
            }

        }
    }
}
