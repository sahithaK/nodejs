import { Module } from '@nestjs/common';
import { AccountModule } from '../account.module';
@Module({
    imports: [AccountModule],
  })
  export class CurrentModule {
    constructor() {
      console.log(`This is current module`);
    }
  }