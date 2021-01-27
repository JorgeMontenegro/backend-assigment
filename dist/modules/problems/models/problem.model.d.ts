import { Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { AgentsModel } from "src/modules/agents/models/agent.model";
export declare class ProblemModel extends TimeStamps {
    description: Record<string, any>;
    agent?: Ref<AgentsModel>;
    solution?: Record<string, any>;
    isClosed: boolean;
    static getProblems(this: ModelType<ProblemModel>): ProblemModel[] | null;
}
