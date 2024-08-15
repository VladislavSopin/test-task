import { Test, TestingModule } from '@nestjs/testing';
import { WorkingWeekendController } from './working-weekend.controller';

describe('WorkingWeekendController', () => {
  let controller: WorkingWeekendController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkingWeekendController],
    }).compile();

    controller = module.get<WorkingWeekendController>(WorkingWeekendController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
