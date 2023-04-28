import { Module } from '@nestjs/common';
import { GoalPlansService } from './goal-plans.service';
import { GoalPlansController } from './goal-plans.controller';

@Module({
  controllers: [GoalPlansController],
  providers: [GoalPlansService],
})
export class GoalPlansModule {}
