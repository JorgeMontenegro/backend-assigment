import { ProblemModel } from "./models/problem.model";
import { ReturnModelType } from "@typegoose/typegoose";
import { ProblemDto, SolveDto } from './dto/problem.dto';
import { AgentsModel } from '../agents/models/agent.model';
export declare class ProblemsService {
    private readonly _problemModel;
    private readonly _agentModel;
    constructor(_problemModel: ReturnModelType<typeof ProblemModel>, _agentModel: ReturnModelType<typeof AgentsModel>);
    findAll: () => Promise<ProblemModel[] | null>;
    findOne: (id: string) => Promise<ProblemModel | null>;
    create: (body: ProblemDto) => Promise<any>;
    modify: (body: ProblemDto) => Promise<ProblemModel | null>;
    solve: (body: SolveDto) => Promise<any>;
    deleteOne: (id: string) => Promise<any>;
}
