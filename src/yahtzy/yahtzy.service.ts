import { Injectable } from '@nestjs/common';

@Injectable()
export class YahtzyService {
    sumDiceByTarget( dice : number[] , target : number) : number{
        if(dice.length === 0){
            throw new Error("Dice must be provided")
        }
        if(dice.length !== 5){
            throw new Error("Dice array length must be 5 long")
        }
        if(target < 1 || target > 6){
            throw new Error("Target must be between 1-6")
        }
        return dice.reduce((prv,curr)=>{
            if(curr > 6 || curr < 1)throw new Error("Each dice must be between 1-6")
            return curr === target ? prv+curr : prv
        },0)
    }
}
