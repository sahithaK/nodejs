import { Injectable } from '@nestjs/common';
import { LoginDTO } from './Login/login.dto'; 
import { ThoughtsDTO } from './Login/thoughts.dto';
import { RegistrationDTO } from './registration/registration.dto';

@Injectable()
export class AppService {

  registration:RegistrationDTO={
    username: '',
    password: '',
    email:''
  }
   login: LoginDTO = {
    username: '',
    password: ''
  };
  
  loggedin: LoginDTO[] = [];
  postthought: ThoughtsDTO[] = [];
  registereduser:RegistrationDTO[]=[];

  registerUser(reg: RegistrationDTO) {
   this.registereduser.push(reg);
   console.log(this.registerUser);
  }

  loginuser(log:LoginDTO):boolean{
    const user = this.registereduser.find((obj) => obj.username == log.username);
    if(user){
      return true;
    }
    else{
      return false;
    } 
  }
  setCurrentUser(registration) {
    this.registration = registration
  }
  getCurrentUser() {
    return this.registration
  }
}
