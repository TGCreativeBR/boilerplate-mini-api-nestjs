import { Module } from '@nestjs/common';

import { GoalPlansModule } from './resources/goal-plans/goal-plans.module';
import { KnexConnectModule } from './config/knex/knex.module';
import { AppController } from './resources/app/app.controller';

@Module({
  imports: [GoalPlansModule, KnexConnectModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
