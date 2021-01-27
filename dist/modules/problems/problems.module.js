"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemsModule = void 0;
const common_1 = require("@nestjs/common");
const problems_service_1 = require("./problems.service");
const problems_controller_1 = require("./problems.controller");
const problem_model_1 = require("./models/problem.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const agent_model_1 = require("../agents/models/agent.model");
let ProblemsModule = class ProblemsModule {
};
ProblemsModule = __decorate([
    common_1.Module({
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([problem_model_1.ProblemModel, agent_model_1.AgentsModel])],
        providers: [problems_service_1.ProblemsService],
        controllers: [problems_controller_1.ProblemsController]
    })
], ProblemsModule);
exports.ProblemsModule = ProblemsModule;
//# sourceMappingURL=problems.module.js.map