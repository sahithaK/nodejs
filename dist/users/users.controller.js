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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_dto_1 = require("./dto/users.dto");
const login_dto_1 = require("./dto/login.dto");
const passport_1 = require("@nestjs/passport");
const changepass_dto_1 = require("./dto/changepass.dto");
const forgotpass_dto_1 = require("./dto/forgotpass.dto");
const checkbalance_dto_1 = require("./dto/checkbalance.dto");
const creditamount_dto_1 = require("./dto/creditamount.dto");
let UsersController = class UsersController {
    constructor(_UsersService) {
        this._UsersService = _UsersService;
    }
    register(reguser) {
        const save = this._UsersService.saveuser(reguser);
        return save;
    }
    loginuser(loguser) {
        const login = this._UsersService.usercheck(loguser.username);
        return login;
    }
    changePassword(chnagepass) {
        const updatedpassword = this._UsersService.changepassword(chnagepass.email, chnagepass.oldpassword, chnagepass.newpassword);
        return updatedpassword;
    }
    forgotpassword(forgotpass) {
        const resetpassword = this._UsersService.changepassword(forgotpass.email, forgotpass.username, forgotpass.resetpassword);
        return resetpassword;
    }
    checkbalance(checkbalance) {
        return this._UsersService.checkbalance(checkbalance.email);
    }
    creditamount(creditdto, amount) {
        return this._UsersService.credit(creditdto.email, parseInt(amount));
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_dto_1.userDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('/login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('local')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.loginDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loginuser", null);
__decorate([
    (0, common_1.Post)('/changepassword'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [changepass_dto_1.changepassDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('/forgotpassword'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [forgotpass_dto_1.forgotpasswordDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "forgotpassword", null);
__decorate([
    (0, common_1.Get)('/balance'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [checkbalance_dto_1.checkbalanceDTO]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "checkbalance", null);
__decorate([
    (0, common_1.Get)('credit/:amount'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('amount')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [creditamount_dto_1.creditamountDto, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "creditamount", null);
UsersController = __decorate([
    (0, common_1.Controller)('bank'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map