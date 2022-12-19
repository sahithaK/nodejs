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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./users.entity");
let UsersService = class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async saveuser(user) {
        const reguser = await this.usersRepository.save(user);
        console.log(reguser);
        return reguser;
    }
    async usercheck(username) {
        return await this.usersRepository.findOne({ where: { username } });
    }
    async changepassword(email, password, newpassword) {
        const founduser = await this.usersRepository.find({ where: { email, password } });
        if (founduser.length > 0) {
            return await this.usersRepository.update(email, { password: newpassword });
        }
        else {
            throw new common_1.HttpException("Email or password incorrect", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async forgotpassword(email, username, resetpassword) {
        const founduser = await this.usersRepository.find({ where: { email, username } });
        if (founduser.length > 0) {
            return await this.usersRepository.update(email, { password: resetpassword });
        }
        else {
            throw new common_1.HttpException("Email or username incorrect", common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async checkbalance(email) {
        const foundemail = await this.usersRepository.findOne({ where: { email } });
        const balance = {
            accountbalance: foundemail.accountbalance
        };
        return balance;
    }
    async credit(email, amount) {
        const foundemail = await this.usersRepository.findOne({ where: { email } });
        const creditbal = foundemail.accountbalance + amount;
        return await this.usersRepository.update(email, { accountbalance: creditbal });
    }
    async payelectricity(email, ebill, pbill) {
        const foundemail = await this.usersRepository.findOne({ where: { email } });
        if (foundemail.email.length > 0 && foundemail.accountbalance > 0) {
            const bill = (+ebill) + (+pbill);
            console.log(bill);
            console.log(foundemail.accountbalance);
            console.log(typeof foundemail.accountbalance);
            let paybill = Math.abs(foundemail.accountbalance) - Math.abs(bill);
            console.log(paybill);
            return await this.usersRepository.update(email, { accountbalance: paybill });
        }
        else
            throw new common_1.HttpException("negative balance please credit amount", common_1.HttpStatus.EXPECTATION_FAILED);
    }
    async payphone(email, bill) {
        const foundemail = await this.usersRepository.findOne({ where: { email } });
        if (foundemail.email.length > 0 && foundemail.accountbalance > 0) {
            const paybill = foundemail.accountbalance - bill;
            return await this.usersRepository.update(email, { accountbalance: paybill });
        }
        else
            throw new common_1.HttpException("negative balance please credit amount", common_1.HttpStatus.EXPECTATION_FAILED);
    }
    async payphoneandelectricity(email, pbill, ebill) {
        const foundemail = await this.usersRepository.findOne({ where: { email } });
        if (foundemail.email.length > 0 && foundemail.accountbalance > 0) {
            const paybill = foundemail.accountbalance - (pbill + ebill);
            return await this.usersRepository.update(email, { accountbalance: paybill });
        }
        else
            throw new common_1.HttpException("negative balance please credit amount", common_1.HttpStatus.EXPECTATION_FAILED);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map