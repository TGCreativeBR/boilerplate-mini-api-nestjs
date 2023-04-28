import { PartialType } from '@nestjs/mapped-types';
import { CreateGoalPlanDto } from './create-goal-plan.dto';

export class UpdateGoalPlanDto extends PartialType(CreateGoalPlanDto) {}
