import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  const service = new FizzbuzzService()

  describe('Success Case', () => {

    it('ต้องได้ 1 เมื่อ input = 1', () => {
      const input = 1;
      const expected = "1";

      const result = service.fizzbuzzFilter(input)
      expect(result).toBe(expected)
    })

    it('ต้องได้ Fizz เมื่อ input = 3', () => {
      const input = 3;
      const expected = "Fizz";

      const result = service.fizzbuzzFilter(input)
      expect(result).toBe(expected)
    })

    it('ต้องได้ Buzz เมื่อ input = 5', () => {
      const input = 5;
      const expected = "Buzz";

      const result = service.fizzbuzzFilter(input)
      expect(result).toBe(expected)
    })

    it('ต้องได้ Fizz เมื่อ input = 6', () => {
      const input = 6
      const expected = "Fizz"

      const result = service.fizzbuzzFilter(input)

      expect(result).toBe(expected)
    })

    it('ต้องได้ 8 เมื่อ input = 8', () => {
      const input = 8
      const expected = '8'

      const result = service.fizzbuzzFilter(input)

      expect(result).toBe(expected)
    })

    it('ต้องได้ Fizz เมื่อ input = 9', () => {
      const input = 9
      const expected = "Fizz"

      const result = service.fizzbuzzFilter(input)

      expect(result).toBe(expected)
    })

    it('ต้องได้ Buzz เมื่อ input = 10', () => {
      const input = 10
      const expected = "Buzz"

      const result = service.fizzbuzzFilter(input)

      expect(result).toBe(expected)
    })

    it('ต้องได้ 13 เมื่อ input = 13', () => {
      const input = 13
      const expected = "13"

      const result = service.fizzbuzzFilter(input)

      expect(result).toBe(expected)
    })

    it('ต้องได้ FizzBuzz เมื่อ input = 15', () => {
      const input = 15
      const expected = "FizzBuzz"

      const result = service.fizzbuzzFilter(input)

      expect(result).toBe(expected)
    })

    it('ต้องได้ Buzz เมื่อ input = 20', () => {
      const input = 20
      const expected = "Buzz"

      const result = service.fizzbuzzFilter(input)

      expect(result).toBe(expected)
    })

    it('ต้องได้ FizzBuzz เมื่อ input = 30', () => {
      const input = 30
      const expected = "FizzBuzz"

      const result = service.fizzbuzzFilter(input)

      expect(result).toBe(expected)
    })

  })

  describe('Invalid Case', () => {
    it('ต้อง Invalid เมื่อใส่เลขที่น้อยกว่า 1', () => {
      const input = 0
      const expected = "Invalid Number"

      const result = () => service.fizzbuzzFilter(input)

      expect(result).toThrow(expected)
    })
    it('ต้อง Invalid เมื่อใส่เลขทศนิยม', () => {
      const input = 1.5
      const expected = "Invalid Number"

      const result = () => service.fizzbuzzFilter(input)

      expect(result).toThrow(expected)
    })

  })

});
