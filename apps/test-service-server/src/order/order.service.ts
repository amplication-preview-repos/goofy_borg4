import { Injectable } from "@nestjs/common";
import { CreateOrder } from "./CreateOrder";

@Injectable()
export class OrderService {
  constructor() {}
  async CreateOrder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
