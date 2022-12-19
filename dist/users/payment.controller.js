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
exports.PaymentController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const paybills_dto_1 = require("./dto/paybills.dto");
const passport_1 = require("@nestjs/passport");
let PaymentController = class PaymentController {
    constructor(_UsersService) {
        this._UsersService = _UsersService;
    }
    paymenttoelectricitybill(paybillsDTO, electricitybill = 0, phonebill = 0) {
        const bill = this._UsersService.payelectricity(paybillsDTO.email, electricitybill, phonebill);
        return "electricity bill paid";
    }
};
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)('/bills/:electricitybill?/:phonebill?'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('electricitybill')),
    __param(2, (0, common_1.Query)('phonebill')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paybills_dto_1.paybillsDTO, Object, Object]),
    __metadata("design:returntype", void 0)
], PaymentController.prototype, "paymenttoelectricitybill", null);
PaymentController = __decorate([
    (0, common_1.Controller)('payment'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map