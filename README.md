AT&T API Marketplace Examples
---

## Getting started

Create an account at https://apimarket.att.com/

 
Clone the repository and create a `.env` file in the projects root directory 

Sample populated `.env` file
```dotenv
API_MARKET_CLIENT_ID=PRIV-orgname.v094.Project Name
API_MARKET_CLIENT_SECRET=XXXXXXX-XXXX-XXX-XXX-XXXXXXXXX
API_MARKET_FROM=5554443333
# The phone number you want to text
TO=5558889999
``` 

Run `npm i` and the `npm run dev` and it should send you a Hello, World! sms. 







