import { Collection, Document } from "mongodb";
import { OrderInput, OrderProvider } from "./order.provider";

class MarketOrderProvider extends OrderProvider {
  constructor(
    { status, orderType, orderNumber, timeEnforcement, createdAt }: OrderInput,
    private customerOrderCollection: Collection<Document>
  ) {
    super({ status, orderType, orderNumber, timeEnforcement, createdAt });
  }
}

export { MarketOrderProvider };
