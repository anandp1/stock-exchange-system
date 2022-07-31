import { MarketOrderProviderPort } from "./market-order.provider.port";
import { OrderProviderAdapter } from "./order.provider.adapter";
import { OrderInput } from "./order.provider.port";

class MarketOrderProviderAdapter
  extends OrderProviderAdapter
  implements MarketOrderProviderPort
{
  constructor({
    status,
    orderType,
    orderNumber,
    timeEnforcement,
    createdAt,
  }: OrderInput) {
    super({ status, orderType, orderNumber, timeEnforcement, createdAt });
  }
}

export { MarketOrderProviderAdapter };
