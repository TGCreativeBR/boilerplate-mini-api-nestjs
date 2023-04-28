import { Injectable } from '@nestjs/common';
import { CreateGoalPlanDto } from './dto/create-goal-plan.dto';
import { UpdateGoalPlanDto } from './dto/update-goal-plan.dto';
import { InjectConnection } from 'nest-knexjs';
import { Knex } from 'knex';

@Injectable()
export class GoalPlansService {
  constructor(@InjectConnection() private readonly knex: Knex) {}

  create(createGoalPlanDto: CreateGoalPlanDto) {
    return 'This action adds a new goalPlan';
  }

  async findAll() {
    const GoalPlans = await this.knex.table('promo.goal_plan');
    return { GoalPlans };
  }

  findOne(id: number) {
    return `This action returns a #${id} goalPlan`;
  }

  update(id: number, updateGoalPlanDto: UpdateGoalPlanDto) {
    return `This action updates a #${id} goalPlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} goalPlan`;
  }
}
