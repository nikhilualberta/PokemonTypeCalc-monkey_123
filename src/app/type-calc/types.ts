/*
export interface Types2 {
  eff: number;
  name: string;
}
*/
let normalDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":1,
  "electric":1,
  "ice":1,
  "fighting":2,
  "poison":1,
  "ground":1,
  "flying":1,
  "psychic":1,
  "bug":1,
  "rock":1,
  "ghost":0,
  "dark":1,
  "dragon":1,
  "steel":1,
  "fairy":1
}

let fireDict = {
  "normal":1,
  "fire":0.5,
  "water":2,
  "grass":0.5,
  "electric":1,
  "ice":0.5,
  "fighting":1,
  "poison":1,
  "ground":2,
  "flying":1,
  "psychic":1,
  "bug":0.5,
  "rock":2,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":0.5,
  "fairy":0.5
}


let waterDict = {
  "normal":1,
  "fire":0.5,
  "water":0.5,
  "grass":2,
  "electric":2,
  "ice":0.5,
  "fighting":1,
  "poison":1,
  "ground":1,
  "flying":1,
  "psychic":1,
  "bug":1,
  "rock":1,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":0.5,
  "fairy":1
}

let grassDict = {
  "normal":1,
  "fire":2,
  "water":0.5,
  "grass":0.5,
  "electric":0.5,
  "ice":2,
  "fighting":1,
  "poison":2,
  "ground":0.5,
  "flying":2,
  "psychic":1,
  "bug":2,
  "rock":1,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":1,
  "fairy":1
}

let electricDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":1,
  "electric":0.5,
  "ice":1,
  "fighting":1,
  "poison":1,
  "ground":2,
  "flying":0.5,
  "psychic":1,
  "bug":1,
  "rock":1,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":0.5,
  "fairy":1
}

let iceDict = {
  "normal":1,
  "fire":2,
  "water":1,
  "grass":1,
  "electric":1,
  "ice":0.5,
  "fighting":2,
  "poison":1,
  "ground":1,
  "flying":1,
  "psychic":1,
  "bug":1,
  "rock":2,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":2,
  "fairy":1
}

let fightingDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":1,
  "electric":1,
  "ice":1,
  "fighting":1,
  "poison":1,
  "ground":1,
  "flying":2,
  "psychic":2,
  "bug":0.5,
  "rock":0.5,
  "ghost":1,
  "dark":1,
  "dragon":0.5,
  "steel":1,
  "fairy":2
}

let poisonDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":0.5,
  "electric":1,
  "ice":1,
  "fighting":0.5,
  "poison":0.5,
  "ground":2,
  "flying":1,
  "psychic":2,
  "bug":0.5,
  "rock":1,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":1,
  "fairy":0.5
}

let groundDict = {
  "normal":1,
  "fire":1,
  "water":2,
  "grass":2,
  "electric":0,
  "ice":2,
  "fighting":1,
  "poison":0.5,
  "ground":1,
  "flying":1,
  "psychic":1,
  "bug":1,
  "rock":0.5,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":1,
  "fairy":1
}

let flyingDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":0.5,
  "electric":2,
  "ice":2,
  "fighting":0.5,
  "poison":1,
  "ground":0,
  "flying":1,
  "psychic":1,
  "bug":0.5,
  "rock":2,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":1,
  "fairy":1
}

let psychicDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":1,
  "electric":1,
  "ice":1,
  "fighting":0.5,
  "poison":1,
  "ground":1,
  "flying":1,
  "psychic":0.5,
  "bug":2,
  "rock":1,
  "ghost":2,
  "dark":2,
  "dragon":1,
  "steel":1,
  "fairy":1
}

let bugDict = {
  "normal":1,
  "fire":2,
  "water":1,
  "grass":0.5,
  "electric":1,
  "ice":1,
  "fighting":0.5,
  "poison":1,
  "ground":0.5,
  "flying":2,
  "psychic":1,
  "bug":1,
  "rock":2,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":1,
  "fairy":1
}

let rockDict = {
  "normal":0.5,
  "fire":0.5,
  "water":2,
  "grass":2,
  "electric":1,
  "ice":1,
  "fighting":2,
  "poison":0.5,
  "ground":2,
  "flying":0.5,
  "psychic":1,
  "bug":1,
  "rock":1,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":2,
  "fairy":1
}

let ghostDict = {
  "normal":0,
  "fire":1,
  "water":1,
  "grass":1,
  "electric":1,
  "ice":1,
  "fighting":0,
  "poison":0.5,
  "ground":1,
  "flying":1,
  "psychic":1,
  "bug":0.5,
  "rock":1,
  "ghost":2,
  "dark":2,
  "dragon":1,
  "steel":1,
  "fairy":1
}

let darkDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":1,
  "electric":1,
  "ice":1,
  "fighting":2,
  "poison":1,
  "ground":1,
  "flying":1,
  "psychic":0,
  "bug":2,
  "rock":1,
  "ghost":0.5,
  "dark":0.5,
  "dragon":1,
  "steel":1,
  "fairy":2
}

let dragonDict = {
  "normal":1,
  "fire":0.5,
  "water":0.5,
  "grass":0.5,
  "electric":0.5,
  "ice":2,
  "fighting":1,
  "poison":1,
  "ground":1,
  "flying":1,
  "psychic":1,
  "bug":1,
  "rock":1,
  "ghost":1,
  "dark":1,
  "dragon":2,
  "steel":1,
  "fairy":2
}

let steelDict = {
  "normal":0.5,
  "fire":2,
  "water":1,
  "grass":0.5,
  "electric":1,
  "ice":0.5,
  "fighting":2,
  "poison":0,
  "ground":2,
  "flying":0.5,
  "psychic":0.5,
  "bug":0.5,
  "rock":0.5,
  "ghost":1,
  "dark":1,
  "dragon":0.5,
  "steel":0.5,
  "fairy":0.5
}

let fairyDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":1,
  "electric":1,
  "ice":1,
  "fighting":0.5,
  "poison":2,
  "ground":1,
  "flying":1,
  "psychic":1,
  "bug":0.5,
  "rock":1,
  "ghost":1,
  "dark":0.5,
  "dragon":0,
  "steel":2,
  "fairy":1
}

let noneDict = {
  "normal":1,
  "fire":1,
  "water":1,
  "grass":1,
  "electric":1,
  "ice":1,
  "fighting":1,
  "poison":1,
  "ground":1,
  "flying":1,
  "psychic":1,
  "bug":1,
  "rock":1,
  "ghost":1,
  "dark":1,
  "dragon":1,
  "steel":1,
  "fairy":1
}

export const output = {
  "none": noneDict,
  "normal": normalDict,
  "fire": fireDict,
  "water": waterDict,
  "grass": grassDict,
  "electric": electricDict,
  "ice": iceDict,
  "fighting": fightingDict,
  "poison":poisonDict,
  "ground":groundDict,
  "flying":flyingDict,
  "psychic":psychicDict,
  "bug": bugDict,
  "rock":rockDict,
  "ghost":ghostDict,
  "dark":darkDict,
  "dragon":dragonDict,
  "steel":steelDict,
  "fairy":fairyDict,
}
