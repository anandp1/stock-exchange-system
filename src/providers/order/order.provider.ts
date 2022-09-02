export enum OrderStatus {
  OPEN = "Open",
  CLOSED = "Closed",
  CANCELLED = "Cancelled",
  FILLED = "Filled",
  PARTIALLY_FILLED = "Partially Filled",
}

export enum OrderType {
  BUY = "Buy",
  SELL = "Sell",
}

export enum TimeEnforcementType {
  FILL_OR_KILL = "Fill or Kill",
  GOOD_TILL_CANCELLED = "Good Till Cancelled",
  IMMEDIATE_OR_CANCEL = "Immediate or Cancel",
  ON_THE_OPEN = "On the Open",
  ON_THE_CLOSE = "On the Close",
}

export interface OrderInput {
  status: OrderStatus;
  orderType: OrderType;
  orderNumber: string;
  timeEnforcement: TimeEnforcementType;
  createdAt: Date;
}

class OrderProvider {
  private status: OrderStatus;
  private orderType: OrderType;
  private orderNumber: string;
  private timeEnforcement: TimeEnforcementType;
  private createdAt: Date;

  constructor({
    status,
    orderType,
    orderNumber,
    timeEnforcement,
    createdAt,
  }: OrderInput) {
    this.status = status;
    this.orderType = orderType;
    this.orderNumber = orderNumber;
    this.timeEnforcement = timeEnforcement;
    this.createdAt = createdAt;
  }

  setStatus(status: OrderStatus): void {
    this.status = status;
  }

  saveInDatabase(): void {}
}

export { OrderProvider };
