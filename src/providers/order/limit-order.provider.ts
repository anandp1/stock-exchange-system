import { OrderInput, OrderProvider } from "./order.provider";

class LimitOrderProvider extends OrderProvider {
  constructor(
    { status, orderType, orderNumber, timeEnforcement, createdAt }: OrderInput,
    private limitPrice: number
  ) {
    super({ status, orderType, orderNumber, timeEnforcement, createdAt });
  }
}

export { LimitOrderProvider };
