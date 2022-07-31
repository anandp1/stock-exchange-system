import { LimitOrderProviderPort } from "./limit-order.provider.port";
import { OrderProviderAdapter } from "./order.provider.adapter";
import { OrderInput } from "./order.provider.port";

class LimitOrderProviderAdapter
  extends OrderProviderAdapter
  implements LimitOrderProviderPort
{
  constructor(
    { status, orderType, orderNumber, timeEnforcement, createdAt }: OrderInput,
    private limitPrice: number
  ) {
    super({ status, orderType, orderNumber, timeEnforcement, createdAt });
  }
}

export { LimitOrderProviderAdapter };
