import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderService } from "./order.service";
import { CreateOrder } from "./CreateOrder";

@swagger.ApiTags("orders")
@common.Controller("orders")
export class OrderController {
  constructor(protected readonly service: OrderService) {}

  @common.Get("/:")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateOrder(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateOrder(body);
      }
}
