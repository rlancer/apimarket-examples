import { APIMarketplaceClient } from '@collaborizm/apimarket/out'
import {} from '../global'

const {
  API_MARKET_CLIENT_ID,
  API_MARKET_CLIENT_SECRET,
  API_MARKET_FROM,
  TO
} = process.env

const apiMarketplaceClient = new APIMarketplaceClient({
    grant_type: 'client_credentials',
    client_id: API_MARKET_CLIENT_ID,
    client_secret: API_MARKET_CLIENT_SECRET,
    scope: 'openid'
  })

;(async () => {
  const resp = await apiMarketplaceClient.simpleSmsSend({
    message: 'Hello, World!',
    fromAddress: API_MARKET_FROM,
    toAddress: TO,
    callbackUrl: 'http://example.com'
  })
  console.log(resp)
})()
