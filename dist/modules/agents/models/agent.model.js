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
exports.AgentsModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const defaultClasses_1 = require("@typegoose/typegoose/lib/defaultClasses");
const problem_model_1 = require("../../problems/models/problem.model");
let AgentsModel = class AgentsModel extends defaultClasses_1.TimeStamps {
    static getAgents() {
        return this.aggregate([
            { $project: {
                    name: 1,
                    position: 1,
                    isFree: 1,
                    problem: { "$toObjectId": "$problem" }
                }
            },
            { $lookup: { from: 'problems', localField: 'problem', foreignField: '_id', as: 'problems' } },
            { $project: {
                    name: 1,
                    position: 1,
                    isFree: 1,
                    problem: { "$arrayElemAt": ["$problems", 0] }
                }
            }
        ]).exec();
    }
};
__decorate([
    typegoose_1.prop({ required: true }),
    __metadata("design:type", Object)
], AgentsModel.prototype, "name", void 0);
__decorate([
    typegoose_1.prop({}),
    __metadata("design:type", Object)
], AgentsModel.prototype, "position", void 0);
__decorate([
    typegoose_1.prop({ default: false }),
    __metadata("design:type", Boolean)
], AgentsModel.prototype, "isFree", void 0);
__decorate([
    typegoose_1.prop({}),
    __metadata("design:type", Object)
], AgentsModel.prototype, "problem", void 0);
AgentsModel = __decorate([
    typegoose_1.modelOptions({ schemaOptions: { collection: 'agents' }, options: { allowMixed: 0 } })
], AgentsModel);
exports.AgentsModel = AgentsModel;
//# sourceMappingURL=agent.model.js.map