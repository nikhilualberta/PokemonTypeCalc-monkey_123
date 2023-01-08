import { Component } from '@angular/core';
import {output} from "./types";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-type-calc',
  templateUrl: './type-calc.component.html',
  styleUrls: ['./type-calc.component.css']
})
export class TypeCalcComponent {
  // The lists that store type affinities after we check the matchups calc
  superEffective:string[] = []
  neutral:string[] = ["none","normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"]
  notVeryEffective:string[] = []
  immune:string[] = []

  four = []
  quarter = []
  allTypes = ["none","normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"]

  usrInOne = "none"
  usrInTwo = "none";

  // @ts-ignore


  multiply(): void {
    if (this.usrInOne == this.usrInTwo) {return}
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

  myControl = new FormControl<string | any>('');
  options: any[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<any[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }


}
