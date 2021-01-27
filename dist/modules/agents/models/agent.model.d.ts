import { Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { ModelType } from "@typegoose/typegoose/lib/types";
import { ProblemModel } from "src/modules/problems/models/problem.model";
export declare class AgentsModel extends TimeStamps {
    name: Record<string, any>;
    position?: Record<string, any>;
    isFree?: boolean;
    problem: Ref<ProblemModel>;
    static getAgents(this: ModelType<AgentsModel>): AgentsModel[] | null;
}
