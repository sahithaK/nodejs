import { Module } from '@nestjs/common';
import { SavingsModule } from '../savings.module';

@Module({
  imports: [SavingsModule],
})
export class JointAccountModule {
  constructor() {
    console.log(`This is Joint account module`);
  }
}