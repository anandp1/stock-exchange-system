import { getMongoClient } from "../middleware/mongodb";
import { LimitOrderProvider } from "./order/limit-order.provider";
import { MarketOrderProvider } from "./order/market-order.provider";
import {
  OrderProvider,
  OrderStatus,
  OrderType,
  TimeEnforcementType,
} from "./order/order.provider";
import { StopLimitProvider } from "./order/stop-limit.provider";
import { StopLossProvider } from "./order/stop-loss.provider";

// const getLimitOrderProvider = async () => {
//   const client = await getMongoClient();
//   const customerOrders = client
//     .db(process.env.MONGODB_NAME)
//     .collection("customerOrders");
//   const orderProvider = new OrderProvider(customerOrders);

//   return new LimitOrderProvider(customerOrders);
// };

const getMarketOrderProvider = async () => {
  const client = await getMongoClient();
  const customerOrders = client
    .db(process.env.MONGODB_NAME)
    .collection("customerOrders");

  return new MarketOrderProvider(
    {
      status: OrderStatus.OPEN,
      orderType: OrderType.BUY,
      orderNumber: "1",
      timeEnforcement: TimeEnforcementType.GOOD_TILL_CANCELLED,
      createdAt: new Date(),
    },
    customerOrders
  );
};

// const getStopLossProvider = async () => {
//   const client = await getMongoClient();
//   const customerOrders = client
//     .db(process.env.MONGODB_NAME)
//     .collection("customerOrders");
//   const orderProvider = new OrderProvider(customerOrders);

//   return new StopLossProvider(customerOrders);
// };

// const getStopLimitProvider = async () => {
//   const client = await getMongoClient();
//   const customerOrders = client
//     .db(process.env.MONGODB_NAME)
//     .collection("customerOrders");
//   const orderProvider = new OrderProvider(customerOrders);

//   return new StopLimitProvider(customerOrders);
// };
