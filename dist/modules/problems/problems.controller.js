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
exports.ProblemsController = void 0;
const common_1 = require("@nestjs/common");
const problems_service_1 = require("./problems.service");
const problem_dto_1 = require("./dto/problem.dto");
const http_exception_filter_1 = require("../../config/http-exception.filter");
const validation_pipe_1 = require("../../pipes/validation.pipe");
let ProblemsController = class ProblemsController {
    constructor(_problemService) {
        this._problemService = _problemService;
    }
    async getAll() {
        return this._problemService.findAll();
    }
    async getOne(id) {
        return this._problemService.findOne(id);
    }
    async create(body) {
        try {
            return await this._problemService.create(body);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async modify(body) {
        try {
            return await this._problemService.modify(body);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async solve(body) {
        try {
            return await this._problemService.solve(body);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async delete(id) {
        try {
            return await this._problemService.deleteOne(id);
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
], ProblemsController.prototype, "getAll", null);
__decorate([
    common_1.Get('/:id'),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProblemsController.prototype, "getOne", null);
__decorate([
    common_1.Post(),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [problem_dto_1.ProblemDto]),
    __metadata("design:returntype", Promise)
], ProblemsController.prototype, "create", null);
__decorate([
    common_1.Put(),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [problem_dto_1.ProblemDto]),
    __metadata("design:returntype", Promise)
], ProblemsController.prototype, "modify", null);
__decorate([
    common_1.Put('/solve'),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [problem_dto_1.SolveDto]),
    __metadata("design:returntype", Promise)
], ProblemsController.prototype, "solve", null);
__decorate([
    common_1.Delete('/:id'),
    common_1.UseFilters(new http_exception_filter_1.HttpExceptionFilter),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProblemsController.prototype, "delete", null);
ProblemsController = __decorate([
    common_1.Controller('problems'),
    __metadata("design:paramtypes", [problems_service_1.ProblemsService])
], ProblemsController);
exports.ProblemsController = ProblemsController;
//# sourceMappingURL=problems.controller.js.map