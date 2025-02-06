import { Injectable } from '@nestjs/common';

export type diceValue = 1 | 2 | 3 | 4 | 5 | 6
@Injectable()
export class YahtzyService {
    validateDice(dice : number[]) :asserts dice is diceValue[]{
        if(dice.length === 0){
            throw new Error("Dice must be provided")
        }
        if(dice.length !== 5){
            throw new Error("Dice array length must be 5 long")
        }
        dice.map((value)=>{
            if(value > 6 || value < 1){
                throw new Error("Each dice must be between 1-6")
            }
        })
    }
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
        // validate target
        if(target !== 3 && target !== 4){
            throw new Error("Target must be 3 or 4")
        }

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
        return dice.reduce((prv,curr)=>prv+curr,0)
    }
    chance(dice : number[]): number{
        return dice.reduce((acc,curr)=>acc+curr,0)
    }
    fullHouse(dice : number[]): 25 | 0 {
        const kindCount = {}
        dice.map(value=>{
            if(!kindCount[value]){
                kindCount[value]= 0
            }
            kindCount[value]++
        })
        const countArray = Object.values(kindCount)
        if(countArray.length > 2 || !countArray.includes(2) || !countArray.includes(3)){
            return 0 
        }
        return 25
    }
    yahtzy(dice : number[]): 50 | 0{
        for(let i = 0 ; i < dice.length ; i++){
            if(dice[0] !== dice[i])return 0
        }
        return 50
    }
}
