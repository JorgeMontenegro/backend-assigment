"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemsService = void 0;
const common_1 = require("@nestjs/common");
const problem_model_1 = require("./models/problem.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const agent_model_1 = require("../agents/models/agent.model");
let ProblemsService = class ProblemsService {
    constructor(_problemModel, _agentModel) {
        this._problemModel = _problemModel;
        this._agentModel = _agentModel;
        this.findAll = async () => {
            return await this._problemModel.getProblems();
        };
        this.findOne = async (id) => {
            return await this._problemModel.findById(id);
        };
        this.create = async (body) => {
            const problem = new this._problemModel(body);
            const agentsFree = await this._agentModel.findOne({ isFree: true });
            if (agentsFree) {
                problem.agent = agentsFree._id;
                agentsFree.isFree = false;
                agentsFree.problem = problem._id;
                await agentsFree.save();
                await problem.save();
                return { Message: `Problema creado con éxito y se le asignó a ${agentsFree.name}` };
            }
            else {
                return { Message: 'Problema creado, se le asignará un agente cuando esté disponible' };
            }
        };
        this.modify = async (body) => {
            return await this._problemModel.findByIdAndUpdate(body._id, body, { new: true });
        };
        this.solve = async (body) => {
            const problem = await this._problemModel.findById(body.problemId);
            if (!problem) {
                return { message: 'No se encontró el problema por el id' };
            }
            if (problem.isClosed) {
                return { message: 'El problema ya cuenta con una solución ' };
            }
            problem.solution = body.solution;
            problem.isClosed = true;
            problem.save();
            const agent = await this._agentModel.findById(problem.agent);
            if (agent) {
                agent.isFree = true;
                const newProblem = await this._problemModel.findOne({ isClosed: false, agent: { $exists: false } });
                if (newProblem) {
                    newProblem.agent = agent._id;
                    agent.isFree = false;
                    agent.problem = newProblem._id;
                    await newProblem.save();
                    return { message: `Problema solucionado con éxito!, y se le ha asignado un nuevo problema a ${agent.name}` };
                }
                else {
                    agent.problem = null;
                }
                await agent.save();
            }
            return { message: 'Problema solucionado con éxito!!' };
        };
        this.deleteOne = async (id) => {
            return await this._problemModel.findOneAndUpdate({ _id: id }, { $set: { isActive: false } }, { new: true });
        };
    }
};
ProblemsService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(problem_model_1.ProblemModel)),
    __param(1, nestjs_typegoose_1.InjectModel(agent_model_1.AgentsModel)),
    __metadata("design:paramtypes", [Object, Object])
], ProblemsService);
exports.ProblemsService = ProblemsService;
//# sourceMappingURL=problems.service.js.map