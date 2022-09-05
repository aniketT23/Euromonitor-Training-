using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Console;

namespace bankingManagementSystem
{
    internal class Deposit
    {
        public int deposit()
        {
            WriteLine("Enter your Amount to be Deposited: ");
            int amount =Convert.ToInt32(ReadLine());
            if(amount < 800)
            {
                Console.WriteLine("Amount you have entered is below Threshold limit");
                return 0;
            }
            else
            {
            return amount;

            }

        }
    }
}
