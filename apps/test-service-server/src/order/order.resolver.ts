import * as graphql from "@nestjs/graphql";
import { CreateOrder } from "./CreateOrder";
import { OrderService } from "./order.service";

export class OrderResolver {
  constructor(protected readonly service: OrderService) {}

  @graphql.Query(() => String)
  async CreateOrder(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.CreateOrder(args);
  }
}
