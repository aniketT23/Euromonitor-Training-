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
                return 0;
            }
            else
            {

                amount -= withdrawAmount; ;
                return amount;
            }

        }
    }
}
