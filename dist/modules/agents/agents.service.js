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
exports.AgentsService = void 0;
const common_1 = require("@nestjs/common");
const agent_model_1 = require("./models/agent.model");
const nestjs_typegoose_1 = require("nestjs-typegoose");
let AgentsService = class AgentsService {
    constructor(_agentModel) {
        this._agentModel = _agentModel;
        this.findAll = async () => {
            return await this._agentModel.getAgents();
        };
        this.findOne = async (id) => {
            return await this._agentModel.findById(id);
        };
        this.create = async (body) => {
            const document = new this._agentModel(body);
            return await document.save();
        };
        this.modify = async (body) => {
            return await this._agentModel.findByIdAndUpdate(body._id, body, { new: true });
        };
        this.deleteOne = async (id) => {
            return await this._agentModel.findOneAndUpdate({ _id: id }, { $set: { isActive: false } }, { new: true });
        };
    }
};
AgentsService = __decorate([
    common_1.Injectable(),
    __param(0, nestjs_typegoose_1.InjectModel(agent_model_1.AgentsModel)),
    __metadata("design:paramtypes", [Object])
], AgentsService);
exports.AgentsService = AgentsService;
//# sourceMappingURL=agents.service.js.map