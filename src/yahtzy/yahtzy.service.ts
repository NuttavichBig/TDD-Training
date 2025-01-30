import { Injectable } from '@nestjs/common';

@Injectable()
export class YahtzyService {
    sumDiceByTarget( dice : number[] , target : number) : number{
        return dice.reduce((prv,curr)=>curr === target ? prv+curr : prv,0)
    }
}
