import { Test, TestingModule } from '@nestjs/testing';
import { YahtzyService } from './yahtzy.service';

describe('YahtzyService', () => {
  let service: YahtzyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YahtzyService],
    }).compile();

    service = module.get<YahtzyService>(YahtzyService);
  });

  it('ต้องได้ผลลัพธ์เป็น 2 เมื่อส่ง dice [1,2,2,1,2] และ target เป็น 1', async() => {
    const dice = [1,2,2,1,2]
    const target = 1
    const expected = 2

    const result = await service.sumDiceByTarget(dice,target)
    
    expect(result).toBe(expected);
  });
  it('ต้องได้ผลลัพธ์เป็น 6 เมื่อส่ง dice [2,2,2,5,1] และ target เป็น 2', async()=>{
    const dice = [2,2,2,5,1]
    const target = 2
    const expected = 6

    const result = await service.sumDiceByTarget(dice,target)
    
    expect(result).toBe(expected);
  })
});
