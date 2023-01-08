import {Component, ViewChild} from '@angular/core';
import {output} from "./types";
import {FormControl, FormGroupDirective, NgForm} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import * as pokedex from './data.json'
import {ErrorStateMatcher} from "@angular/material/core";
import {MatAutocompleteTrigger} from "@angular/material/autocomplete";


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


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

  four:string[] = []
  quarter:string[] = []
  allTypes = ["none","normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison", "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon", "steel", "fairy"]

  usrInOne = "none"
  usrInTwo = "none";

  // @ts-ignore

  pokemon = ""
  multiply(): void {
    if ((this.usrInOne == this.usrInTwo) && (this.usrInOne !== "none")) {return}
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
          four.push(key)
          superEffective.push(key)
          break
      }
      //console.log(`Type ${key} is ${eff}x Effective against a ${this.usrInOne} and ${this.usrInTwo} type pokemon.`)
    }
    this.superEffective = superEffective
    this.neutral = neutral
    this.notVeryEffective = notVeryEffective
    this.immune = immune
    this.four = four
    this.quarter = quarter
  }

  myControl = new FormControl<string | any>('');
  //options: any[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
  filteredOptions: Observable<any[]> | undefined;
  matcher = new MyErrorStateMatcher();

  options: any[] = (pokedex as any).default;


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


  setTypes(event:any): void {
    let pokemon = event.option.value
    this.pokemon = pokemon.name
    this.usrInTwo = "none"
    this.usrInOne = pokemon.types[0]
    if (pokemon.types.length == 2) {
      this.usrInTwo = pokemon.types[1]
    }

    this.multiply()
    //console.log(pokemon)
  }




}
