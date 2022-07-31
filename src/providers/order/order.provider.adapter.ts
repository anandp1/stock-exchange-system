import {
  OrderInput,
  OrderProviderPort,
  OrderStatus,
  OrderType,
  TimeEnforcementType,
} from "./order.provider.port";

class OrderProviderAdapter implements OrderProviderPort {
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

export { OrderProviderAdapter };
