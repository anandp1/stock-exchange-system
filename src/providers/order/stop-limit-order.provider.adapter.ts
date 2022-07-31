import { OrderProviderAdapter } from "./order.provider.adapter";
import { OrderInput } from "./order.provider.port";
import { StopLimitOrderProviderPort } from "./stop-limit-order.provider.port";

class StopLimitOrderProviderAdapter
  extends OrderProviderAdapter
  implements StopLimitOrderProviderPort
{
  constructor(
    { status, orderType, orderNumber, timeEnforcement, createdAt }: OrderInput,
    private limitPrice: number
  ) {
    super({ status, orderType, orderNumber, timeEnforcement, createdAt });
  }
}

export { StopLimitOrderProviderAdapter };
