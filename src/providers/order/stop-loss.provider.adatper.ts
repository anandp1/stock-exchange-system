import { OrderProviderAdapter } from "./order.provider.adapter";
import { OrderInput } from "./order.provider.port";
import { StopLossProviderPort } from "./stop-loss.provider.port";

class StopLossProviderAdapter
  extends OrderProviderAdapter
  implements StopLossProviderPort
{
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

export { StopLossProviderAdapter };
