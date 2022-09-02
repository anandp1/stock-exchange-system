import { OrderInput, OrderProvider } from "./order.provider";

class StopLimitProvider extends OrderProvider {
  constructor(
    { status, orderType, orderNumber, timeEnforcement, createdAt }: OrderInput,
    private limitPrice: number
  ) {
    super({ status, orderType, orderNumber, timeEnforcement, createdAt });
  }
}

export { StopLimitProvider };
