import { AgentsModel } from "./models/agent.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { AgentDto } from './dto/agents.dto';
export declare class AgentsService {
    private readonly _agentModel;
    constructor(_agentModel: ReturnModelType<typeof AgentsModel>);
    findAll: () => Promise<AgentsModel[] | null>;
    findOne: (id: string) => Promise<AgentsModel | null>;
    create: (body: AgentDto) => Promise<AgentsModel | null>;
    modify: (body: AgentDto) => Promise<AgentsModel | null>;
    deleteOne: (id: string) => Promise<any>;
}
