import { Publisher, Subjects, TicketUpdatedEvent } from "@tiantianwuqing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject =  Subjects.TicketUpdated;//只读变量
}