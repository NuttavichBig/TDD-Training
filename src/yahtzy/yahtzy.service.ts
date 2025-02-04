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
    numberOfaKind(dice : number[] , target : number) : number{

        // checking alternative case (not 3 or 4 of a kind)
        const kindCount = {}
        let i = 0
        do{
            if(!kindCount[dice[i]]){
                kindCount[dice[i]]= 0
            }
            kindCount[dice[i]]++
            if(kindCount[dice[i]] >= target){
                break;
            }
            i++
        }while(i < dice.length)
        if(i >= dice.length){
            return 0
        }

        // calculate result
        const result:number = dice.reduce((prv,curr)=>prv+curr,0)
        return result
    }
}
