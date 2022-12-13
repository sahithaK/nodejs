import { Module } from '@nestjs/common';
import { SingleAccountModule } from './singleaccount/singleaccount.module';
import { JointAccountModule } from './jointaccount/jointaccount.module';

@Module({
  imports: [ SingleAccountModule,JointAccountModule],
})
export class SavingsModule {
  constructor() {
    console.log(`This is Savings module`);
  }
}