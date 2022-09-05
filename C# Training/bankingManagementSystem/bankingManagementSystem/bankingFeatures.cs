using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace bankingManagementSystem
{
    internal class bankingFeatures
    {
        public int bankingfeatures(int amount, string accountType)
        {
            WriteLine("Please select a feature you want to use: ");
            WriteLine("1.Deposit Money              2.Withdraw Money ");
            int userInput=Convert.ToInt32(ReadLine());
            if (userInput == 1)
            {
                var deposit=new Deposit();
                var depositAmount = deposit.deposit(amount,accountType);
                return depositAmount;

            }else if(userInput == 2)
            {
                var withdraw = new Withdarw();
                var withdrawAmount = withdraw.withdraw(amount);
                return withdrawAmount;

            }
            else
            {
                WriteLine("Please Select a Valid Option");
                return amount;
            }
        }
    }
}
