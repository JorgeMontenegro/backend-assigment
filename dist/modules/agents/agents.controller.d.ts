import { AgentsService } from "./agents.service";
import { AgentsModel } from "./models/agent.model";
import { AgentDto } from "./dto/agents.dto";
export declare class AgentsController {
    private readonly _agentsService;
    constructor(_agentsService: AgentsService);
    getAll(): Promise<AgentsModel[] | null>;
    getOne(id: string): Promise<AgentsModel | null>;
    create(body: AgentDto): Promise<AgentsModel | null>;
    modify(body: AgentDto): Promise<AgentsModel | null>;
    delete(id: string): Promise<any>;
}
