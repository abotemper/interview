import { Publisher, Subjects, TicketCreatedEvent } from "@tiantianwuqing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject =  Subjects.TicketCreated;//只读变量
}
