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

export interface OrderProviderPort {
  setStatus(status: OrderStatus): void;
  saveInDatabase(): void;
}
