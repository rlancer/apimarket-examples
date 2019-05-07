export {}

declare global  {
  namespace NodeJS {
    interface ProcessEnv {
      API_MARKET_CLIENT_ID: string;
      API_MARKET_CLIENT_SECRET: string;
      API_MARKET_FROM: string
      TO: string
    }
  }
}