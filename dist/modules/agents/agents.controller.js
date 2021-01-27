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
exports.AgentsController = void 0;
const common_1 = require("@nestjs/common");
const agents_service_1 = require("./agents.service");
const agents_dto_1 = require("./dto/agents.dto");
const http_exception_filter_1 = require("../../config/http-exception.filter");
const validation_pipe_1 = require("../../pipes/validation.pipe");
let AgentsController = class AgentsController {
    constructor(_agentsService) {
        this._agentsService = _agentsService;
    }
    async getAll() {
        return this._agentsService.findAll();
    }
    async getOne(id) {
        return this._agentsService.findOne(id);
    }
    async create(body) {
        try {
            return await this._agentsService.create(body);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async modify(body) {
        try {
            return await this._agentsService.modify(body);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async delete(id) {
        try {
            return await this._agentsService.deleteOne(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
__decorate([
    common_1.Get(),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agents_dto_1.AgentDto]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "create", null);
__decorate([
    common_1.Put(),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [agents_dto_1.AgentDto]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "modify", null);
__decorate([
    common_1.Delete('/:id'),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AgentsController.prototype, "delete", null);
AgentsController = __decorate([
    common_1.Controller('agents'),
    __metadata("design:paramtypes", [agents_service_1.AgentsService])
], AgentsController);
exports.AgentsController = AgentsController;
//# sourceMappingURL=agents.controller.js.map