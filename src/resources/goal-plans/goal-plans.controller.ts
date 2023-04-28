import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GoalPlansService } from './goal-plans.service';
import { CreateGoalPlanDto } from './dto/create-goal-plan.dto';
import { UpdateGoalPlanDto } from './dto/update-goal-plan.dto';

@Controller('goal-plans')
export class GoalPlansController {
  constructor(private readonly goalPlansService: GoalPlansService) {}

  @Post()
  create(@Body() createGoalPlanDto: CreateGoalPlanDto) {
    return this.goalPlansService.create(createGoalPlanDto);
  }

  @Get()
  findAll() {
    return this.goalPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.goalPlansService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateGoalPlanDto: UpdateGoalPlanDto,
  ) {
    return this.goalPlansService.update(+id, updateGoalPlanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goalPlansService.remove(+id);
  }
}
