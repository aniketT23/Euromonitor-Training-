using System;
using System.Data.SqlClient;
using Azure.Identity;

class Program
{
    static void Main()
    {
        string clientId = "635d8b8a-9ac3-47e8-82ce-4867e37a8918";  // Your "TestExternalClientApp" Client ID
        string tenantId = "251c4782-827b-4033-b7b5-12500263871f";  // Your Azure AD Tenant ID
        string sqlServer = "emi-qa-numberstation-we-svm.database.windows.net";  // Your Azure SQL Server
        string database = "GenAIStatistics";  // Your Azure SQL Database

        // Authenticate using Azure Identity
        var credential = new DefaultAzureCredential(new DefaultAzureCredentialOptions
        {
            ManagedIdentityClientId = clientId,
            TenantId = tenantId,
            ExcludeSharedTokenCacheCredential = true
        });

        // Get Access Token
        string accessToken = credential.GetToken(new Azure.Core.TokenRequestContext(
            new[] { "https://database.windows.net/.default" })).Token;

        // Connect to Azure SQL
        string connectionString = $"Server={sqlServer};Database={database};Authentication=Active Directory Access Token;";

        using (SqlConnection conn = new SqlConnection(connectionString))
        {
            conn.AccessToken = accessToken;
            conn.Open();

            using (SqlCommand cmd = new SqlCommand("SELECT GETDATE();", conn))
            {
                var result = cmd.ExecuteScalar();
                Console.WriteLine("Connected! Server Time: " + result);
            }
        }
    }
}
