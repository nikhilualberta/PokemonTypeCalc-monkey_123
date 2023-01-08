import { Component } from '@angular/core';
import {output} from "./types";

@Component({
  selector: 'app-type-calc',
  templateUrl: './type-calc.component.html',
  styleUrls: ['./type-calc.component.css']
})
export class TypeCalcComponent {
  // The lists that store type affinities after we check the matchups calc
  superEffective = ['grass', 'fire', 'water']
  neutral = ['ghost']
  notVeryEffective = ['steel']
  immune = ['fairy']

  four = []
  quarter = []
  allTypes = ["normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"]

  usrInOne = "ghost";
  usrInTwo = "flying";

  // @ts-ignore


  multiply(): void {
    // @ts-ignore
    let type1 = output[this.usrInOne]
    // @ts-ignore
    let type2 = output[this.usrInTwo]
    let superEffective: string[] = []
    let notVeryEffective = []
    let immune = []
    let neutral = []
    let four = []
    let quarter = []

    for (let key in type1) {
      let eff = type1[key] * type2[key]
      switch (eff) {
        case 0:
          immune.push(key)
          break
        case 0.25:
          notVeryEffective.push(key)
          quarter.push(key)
          break
        case 0.5:
          notVeryEffective.push(key)
          break
        case 1:
          neutral.push(key)
          break
        case 2:
          superEffective.push(key)
          break
        case 4:
          superEffective.push(key)
          four.push(key)
          break
      }
      //console.log(`Type ${key} is ${eff}x Effective against a ${this.usrInOne} and ${this.usrInTwo} type pokemon.`)
    }
    this.superEffective = superEffective
    this.neutral = neutral
    this.notVeryEffective = notVeryEffective
    this.immune = immune
  }

  returnUsrInOne(userInput: string): void {
    this.usrInOne = userInput
  }

  returnUsrInTwo(userInput: string): void {
    this.usrInTwo = userInput
  }


}
