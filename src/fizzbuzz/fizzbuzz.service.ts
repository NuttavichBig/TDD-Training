import { Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService {

    fizzbuzzFilter(input: number): string {
        if(input < 1 || Math.trunc(input) !== input){
            throw new Error("Invalid Number")
        }
        let result : string = "";
        if(input%3 === 0){
            result += "Fizz"
        }
        if(input%5 === 0){
            result += "Buzz"
        }
        if(result === ""){
            result = input.toString()
        }
        return result

    }
}