import { ProblemsService } from "./problems.service";
import { ProblemModel } from "./models/problem.model";
import { ProblemDto, SolveDto } from "./dto/problem.dto";
export declare class ProblemsController {
    private readonly _problemService;
    constructor(_problemService: ProblemsService);
    getAll(): Promise<ProblemModel[] | null>;
    getOne(id: string): Promise<ProblemModel | null>;
    create(body: ProblemDto): Promise<any>;
    modify(body: ProblemDto): Promise<ProblemModel | null>;
    solve(body: SolveDto): Promise<ProblemModel | null>;
    delete(id: string): Promise<any>;
}
