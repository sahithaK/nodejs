import { Module } from '@nestjs/common';
import { SavingsModule } from '../savings.module';

@Module({
  imports: [SavingsModule],
})
export class SingleAccountModule {
  constructor() {
    console.log(`This is single account module`);
  }
}