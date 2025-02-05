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
  describe('Validate Dice', () => {
    it('ต้อง Error เป็น "Dice must be provided" เมื่อ dice []', () => {
      const dice = []
      const expected = "Dice must be provided"

      const result = () => service.validateDice(dice)

      expect(result).toThrow(expected)
    })
    it('ต้อง Error เป็น "Dice array length must be 5 long" เมื่อ dice [1,3,4,5]', () => {
      const dice = [1, 3, 4, 5]
      const expected = "Dice array length must be 5 long"

      const result = () => service.validateDice(dice)

      expect(result).toThrow(expected)
    })
    it('ต้อง Error เป็น "Dice array length must be 5 long" เมื่อ dice [1,3,4,1,1,1]', () => {
      const dice = [1, 3, 4, 1, 1, 1]
      const expected = "Dice array length must be 5 long"

      const result = () => service.validateDice(dice)

      expect(result).toThrow(expected)
    })
    it('ต้อง Error เป็น "Each dice must be between 1-6" เมื่อ dice [2,3,2,5,7]', () => {
      const dice = [2, 3, 2, 5, 7]
      const expected = "Each dice must be between 1-6"

      const result = () => service.validateDice(dice)

      expect(result).toThrow(expected)
    })
    it('ต้อง Error เป็น "Each dice must be between 1-6" เมื่อ dice [2,3,2,5,-1]', () => {
      const dice = [2, 3, 2, 5, -1]
      const expected = "Each dice must be between 1-6"

      const result = () => service.validateDice(dice)

      expect(result).toThrow(expected)
    })
  })
  describe('Upper Section', () => {
    describe('Success Case', () => {
      it('ต้องได้ผลลัพธ์เป็น 2 เมื่อส่ง dice [1,2,2,1,2] และ target เป็น 1', () => {
        const dice = [1, 2, 2, 1, 2]
        const target = 1
        const expected = 2

        const result = service.sumDiceByTarget(dice, target)

        expect(result).toBe(expected);
      });
      it('ต้องได้ผลลัพธ์เป็น 6 เมื่อส่ง dice [2,2,2,5,1] และ target เป็น 2', () => {
        const dice = [2, 2, 2, 5, 1]
        const target = 2
        const expected = 6

        const result = service.sumDiceByTarget(dice, target)

        expect(result).toBe(expected);
      })
      it('ต้องได้ผลลัพธ์เป็น 3 เมื่อส่ง dice [2,3,2,5,1] และ target เป็น 3', () => {
        const dice = [2, 3, 2, 5, 1]
        const target = 3
        const expected = 3

        const result = service.sumDiceByTarget(dice, target)

        expect(result).toBe(expected);
      })
      it('ต้องได้ผลลัพธ์เป็น 20 เมื่อส่ง dice [4,4,4,4,4] และ target เป็น 4', () => {
        const dice = [4, 4, 4, 4, 4]
        const target = 4
        const expected = 20

        const result = service.sumDiceByTarget(dice, target)

        expect(result).toBe(expected);
      })
      it('ต้องได้ผลลัพธ์เป็น 15 เมื่อส่ง dice [5,5,5,2,1] และ target เป็น 5', () => {
        const dice = [5, 5, 5, 2, 1]
        const target = 5
        const expected = 15

        const result = service.sumDiceByTarget(dice, target)

        expect(result).toBe(expected);
      })
      it('ต้องได้ผลลัพธ์เป็น 12 เมื่อส่ง dice [6,6,5,3,1] และ target เป็น 6', () => {
        const dice = [6, 6, 5, 3, 1]
        const target = 6
        const expected = 12

        const result = service.sumDiceByTarget(dice, target)

        expect(result).toBe(expected);
      })

    })
    describe('Alternative Case', () => {
      it('ต้องได้ผลลัพธ์เป็น 0 เมื่อส่ง dice [2,3,2,5,1] และ target เป็น 4', () => {
        const dice = [2, 3, 2, 5, 1]
        const target = 4
        const expected = 0

        const result = service.sumDiceByTarget(dice, target)

        expect(result).toBe(expected);
      })
      it('ต้อง Error เป็น "Target must be between 1-6" เมื่อ target เป็น 0', () => {
        const dice = [2, 3, 2, 5, 1]
        const target = 0
        const expected = "Target must be between 1-6"

        const result = () => service.sumDiceByTarget(dice, target)

        expect(result).toThrow(expected)
      })
      it('ต้อง Error เป็น "Target must be between 1-6" เมื่อ target เป็น 7', () => {
        const dice = [2, 3, 2, 5, 1]
        const target = 7
        const expected = "Target must be between 1-6"

        const result = () => service.sumDiceByTarget(dice, target)

        expect(result).toThrow(expected)
      })
    })

  })
  describe('Lower Section', () => {
    describe('xxx of kind', () => {


      describe('Success Case', () => {
        it('ต้องได้ผลลัพธ์เป็น 8 เมื่อส่ง dice [2,1,2,1,2] และ target เป็น 3', () => {
          const dice = [2, 1, 2, 1, 2]
          const target = 3
          const expected = 8

          const result = service.numberOfaKind(dice, target)

          expect(result).toBe(expected)
        })
        it('ต้องได้ผลลัพธ์เป็น 8 เมื่อส่ง dice [1,1,2,2,2] และ target เป็น 3', () => {
          const dice = [1, 1, 2, 2, 2]
          const target = 3
          const expected = 8

          const result = service.numberOfaKind(dice, target)

          expect(result).toBe(expected)
        })
        it('ต้องได้ผลลัพธ์เป็น 17 เมื่อส่ง dice [4,4,4,4,1] และ target เป็น 4', () => {
          const dice = [4, 4, 4, 4, 1]
          const target = 4
          const expected = 17

          const result = service.numberOfaKind(dice, target)

          expect(result).toBe(expected)
        })
        it('ต้องได้ผลลัพธ์เป็น 17 เมื่อส่ง dice [4,4,1,4,4] และ target เป็น 4', () => {
          const dice = [4, 4, 1, 4, 4]
          const target = 4
          const expected = 17

          const result = service.numberOfaKind(dice, target)

          expect(result).toBe(expected)
        })
      })
      describe('Alternative Case', () => {
        it('ต้องได้ผลลัพธ์เป็น 0 เมื่อส่ง dice [1,2,3,4,5] และ target เป็น 3', () => {
          const dice = [1, 2, 3, 4, 5]
          const target = 3
          const expected = 0

          const result = service.numberOfaKind(dice, target)

          expect(result).toBe(expected)
        })
        it('ต้องได้ผลลัพธ์เป็น 0 เมื่อส่ง dice [2,2,2,4,5] และ target เป็น 4', () => {
          const dice = [2, 2, 2, 4, 5]
          const target = 4
          const expected = 0

          const result = service.numberOfaKind(dice, target)

          expect(result).toBe(expected)
        })
        it('ต้อง error เมื่อ target เป็น 2', () => {
          const dice = [2, 2, 2, 1, 1]
          const target = 2
          const expected = "Target must be 3 or 4"

          const result = () => service.numberOfaKind(dice, target)

          expect(result).toThrow(expected)
        })
        it('ต้อง error เมื่อ target เป็น 5', () => {
          const dice = [2, 2, 2, 1, 1]
          const target = 5
          const expected = "Target must be 3 or 4"

          const result = () => service.numberOfaKind(dice, target)

          expect(result).toThrow(expected)
        })
      })
    })
    describe('Chance', () => {
      it('ต้องได้ผลลัพธ์เป็น 13 เมื่อส่ง dice [2,2,3,3,3]', () => {
        const dice = [2, 2, 3, 3, 3]
        const expected = 13

        const result = service.chance(dice)

        expect(result).toBe(expected)
      })
    })
    describe('Full House', () => {
      describe('Success Case', () => {


        it('ต้องได้ผลลัพธ์เป็น 25 เมื่อส่ง dice [2,2,3,3,3]', () => {
          const dice = [2, 2, 3, 3, 3]
          const expected = 25

          const result = service.fullHouse(dice)

          expect(result).toBe(expected)
        })
        it('ต้องได้ผลลัพธ์เป็น 25 เมื่อส่ง dice [2,3,3,3,2]', () => {
          const dice = [2, 3, 3, 3, 2]
          const expected = 25

          const result = service.fullHouse(dice)

          expect(result).toBe(expected)
        })
        it('ต้องได้ผลลัพธ์เป็น 25 เมื่อส่ง dice [3,2,3,2,3]', () => {
          const dice = [3, 2, 3, 2, 3]
          const expected = 25

          const result = service.fullHouse(dice)

          expect(result).toBe(expected)
        })
      })
      describe('Alternative Case',()=>{
        it('ต้องได้ผลลัพธ์เป็น 0 เมื่อส่ง dice [2,3,3,3,3]',()=>{
          const dice = [2,3,3,3,3]
          const expected = 0

          const result = service.fullHouse(dice)

          expect(result).toBe(expected)
        })
        it('ต้องได้ผลลัพธ์เป็น 0 เมื่อส่ง dice [3,3,3,3,3]',()=>{
          const dice = [3,3,3,3,3]
          const expected = 0

          const result = service.fullHouse(dice)

          expect(result).toBe(expected)
        })
      })
    })
  })
});
