import pyodbc
from azure.identity import DefaultAzureCredential
import struct
from itertools import chain, repeat
def bytes2mswin_bstr(value: bytes) -> bytes:
  """Convert a sequence of bytes into a (MS-Windows) BSTR (as bytes).

          See https://github.com/mkleehammer/pyodbc/issues/228#issuecomment-319190980
          for the original code.  It appears the input is converted to an
          MS-Windows BSTR (in 'Little-endian' format).
      
          See https://docs.microsoft.com/en-us/openspecs/windows_protocols/ms-dtyp\
             /692a42a9-06ce-4394-b9bc-5d2a50440168
          for more info on BSTR.
      
          :param value: the sequence of bytes to convert
          :return: the converted value (as a sequence of bytes)
          """
  # The original code from the provided github URL applies 'Little-endian'
  # to the byte conversion in a python for-loop.
  # The following is code is assumed to be faster.
  encoded_bytes = bytes(chain.from_iterable(zip(value, repeat(0))))
  # The original code applies native endianness for encoding the length
  # prefix. My working assumption that also the length should be encoded
  # 'Little-endian', regardless of the CPU (and OS) this code is running on.
  return struct.pack("<i", len(encoded_bytes)) + encoded_bytes
# Azure credentials
client_id = "635d8b8a-9ac3-47e8-82ce-4867e37a8918"
tenant_id = "251c4782-827b-4033-b7b5-12500263871f"
sql_server = "emi-qa-numberstation-we-svm.database.windows.net" 
database = "GenAIStatistics"

# Authenticate using Azure Identity
credential = DefaultAzureCredential(managed_identity_client_id=client_id)

# Get Access Token for Azure SQL
token = credential.get_token("https://database.windows.net/.default").token
print("hello")
# Connection string
conn_str = (
    f"DRIVER={{ODBC Driver 17 for SQL Server}};"
    f"SERVER={sql_server};DATABASE={database};"
    f"Encrypt=yes;TrustServerCertificate=no;")

try:
    exptoken = ""
    for i in token:
        exptoken += i
        exptoken += chr(0)
    tokenstruct = bytes2mswin_bstr(token.encode())
    # Connect to Azure SQL using the access token
    conn = pyodbc.connect(conn_str, attrs_before={1256: tokenstruct})
    cursor = conn.cursor()
    print("Connected to Azure SQL Database!")

    # Execute query
    cursor.execute("SELECT top 10 * FROM dbo.MarketSize")
    for row in cursor.fetchall():
        print(row)

    cursor.close()
    conn.close()
except Exception as e:
    print(f"Error: {e}")
