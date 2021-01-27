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
exports.ProblemModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const agent_model_1 = require("../../agents/models/agent.model");
let ProblemModel = class ProblemModel extends defaultClasses_1.TimeStamps {
    static getProblems() {
        return this.aggregate([
            { $project: {
                    description: 1,
                    agent: { "$toObjectId": "$agent" },
                    solution: 1,
                    isClosed: 1
                }
            },
            { $lookup: { from: 'agents', localField: 'agent', foreignField: '_id', as: 'agent' } },
            { $project: {
                    description: 1,
                    agent: { "$arrayElemAt": ["$agent", 0] },
                    solution: 1,
                    isClosed: 1
                }
            }
        ]).exec();
    }
};
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Object)
], ProblemModel.prototype, "description", void 0);
__decorate([
    typegoose_1.prop({}),
    __metadata("design:type", Object)
], ProblemModel.prototype, "agent", void 0);
__decorate([
    typegoose_1.prop({}),
    __metadata("design:type", Object)
], ProblemModel.prototype, "solution", void 0);
__decorate([
    typegoose_1.prop({ default: false }),
    __metadata("design:type", Boolean)
], ProblemModel.prototype, "isClosed", void 0);
ProblemModel = __decorate([
    typegoose_1.modelOptions({ schemaOptions: { collection: 'problems' }, options: { allowMixed: 0 } })
], ProblemModel);
exports.ProblemModel = ProblemModel;
//# sourceMappingURL=problem.model.js.map