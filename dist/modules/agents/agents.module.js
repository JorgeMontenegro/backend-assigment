"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentsModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const problem_model_1 = require("../problems/models/problem.model");
const agents_controller_1 = require("./agents.controller");
const agents_service_1 = require("./agents.service");
const agent_model_1 = require("./models/agent.model");
let AgentsModule = class AgentsModule {
};
AgentsModule = __decorate([
    common_1.Module({
        imports: [nestjs_typegoose_1.TypegooseModule.forFeature([problem_model_1.ProblemModel, agent_model_1.AgentsModel])],
        controllers: [agents_controller_1.AgentsController],
        providers: [agents_service_1.AgentsService]
    })
], AgentsModule);
exports.AgentsModule = AgentsModule;
//# sourceMappingURL=agents.module.js.map