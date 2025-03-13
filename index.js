import { SolanaAgentKit, ACTIONS, startMcpServer } from "solana-agent-kit";
import * as dotenv from "dotenv";

dotenv.config();

const agent = new SolanaAgentKit(
  process.env.SOLANA_PRIVATE_KEY,
  process.env.RPC_URL,
  {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
);

const finalActions = {
  BALANCE_ACTION: ACTIONS.BALANCE_ACTION,
  TOKEN_BALANCE_ACTION: ACTIONS.TOKEN_BALANCES_ACTION,
  GET_WALLET_ADDRESS_ACTION: ACTIONS.WALLET_ADDRESS_ACTION,
};

startMcpServer(finalActions, agent, { name: "solana-agent", version: "0.0.1" });
