import { DomainEvent } from "src/common/Domain/domain-event/domain-event";
import { UserId } from "src/user/domain/value-objects/user-id";
import { TrainerId } from "../value-objects/trainer-id";

export class TrainerUnfollowed extends DomainEvent {
    protected constructor(
        public trainerId: TrainerId,
        public userId: UserId
    )
    {
        super();
    }

    static create( trainerId:TrainerId, userId:UserId ): TrainerUnfollowed
    {
        return new TrainerUnfollowed(trainerId, userId);
    }
}