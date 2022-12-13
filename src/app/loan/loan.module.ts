import { Module } from '@nestjs/common';

@Module({
  controllers: [],
})
export class LoanModule {
  constructor() {
    console.log(`This is loan module`);
  }
}
