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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolveDto = exports.ProblemDto = void 0;
const class_validator_1 = require("class-validator");
class ProblemDto {
}
__decorate([
    class_validator_1.IsMongoId(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], ProblemDto.prototype, "_id", void 0);
__decorate([
    class_validator_1.IsString({ message: 'La descripción del error es obligatoria' }),
    class_validator_1.IsNotEmpty({ message: 'La descripción del error es obligatoria' }),
    __metadata("design:type", Object)
], ProblemDto.prototype, "description", void 0);
__decorate([
    class_validator_1.IsMongoId(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], ProblemDto.prototype, "agent", void 0);
__decorate([
    class_validator_1.IsString(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], ProblemDto.prototype, "solution", void 0);
__decorate([
    class_validator_1.IsBoolean(),
    class_validator_1.IsOptional(),
    __metadata("design:type", Object)
], ProblemDto.prototype, "isClosed", void 0);
exports.ProblemDto = ProblemDto;
class SolveDto {
}
__decorate([
    class_validator_1.IsMongoId({ message: 'El id del problema es un campo requerido' }),
    __metadata("design:type", Object)
], SolveDto.prototype, "problemId", void 0);
__decorate([
    class_validator_1.IsString({ message: 'La solución es un campo requerido' }),
    __metadata("design:type", Object)
], SolveDto.prototype, "solution", void 0);
exports.SolveDto = SolveDto;
//# sourceMappingURL=problem.dto.js.map