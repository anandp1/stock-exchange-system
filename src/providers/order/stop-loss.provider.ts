import { OrderInput, OrderProvider } from "./order.provider";

class StopLossProvider extends OrderProvider {
  constructor(
    { status, orderType, orderNumber, timeEnforcement, createdAt }: OrderInput,
    private stopPrice: number
  ) {
    super({
      status,
      orderType,
      orderNumber,
      timeEnforcement,
      createdAt,
    });
  }
}

export { StopLossProvider };
