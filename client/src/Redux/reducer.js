import { GET_POKEMONS, GET_POKEMON_BY_ID } from "./actions";

const initialState = {
    pokemonsRender: []
    // [

    //     //     {
    //     //         "id": 1,
    //     //         "name": "bulbasaur",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
    //     //         "life": 45,
    //     //         "attack": 49,
    //     //         "defense": 49,
    //     //         "speed": 45,
    //     //         "height": 0.7,
    //     //         "weight": 6.9,
    //     //         "types": [
    //     //             "grass",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 2,
    //     //         "name": "ivysaur",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
    //     //         "life": 60,
    //     //         "attack": 62,
    //     //         "defense": 63,
    //     //         "speed": 60,
    //     //         "height": 1,
    //     //         "weight": 13,
    //     //         "types": [
    //     //             "grass",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 3,
    //     //         "name": "venusaur",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
    //     //         "life": 80,
    //     //         "attack": 82,
    //     //         "defense": 83,
    //     //         "speed": 80,
    //     //         "height": 2,
    //     //         "weight": 100,
    //     //         "types": [
    //     //             "grass",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 4,
    //     //         "name": "charmander",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
    //     //         "life": 39,
    //     //         "attack": 52,
    //     //         "defense": 43,
    //     //         "speed": 65,
    //     //         "height": 0.6,
    //     //         "weight": 8.5,
    //     //         "types": [
    //     //             "fire"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 5,
    //     //         "name": "charmeleon",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
    //     //         "life": 58,
    //     //         "attack": 64,
    //     //         "defense": 58,
    //     //         "speed": 80,
    //     //         "height": 1.1,
    //     //         "weight": 19,
    //     //         "types": [
    //     //             "fire"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 6,
    //     //         "name": "charizard",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
    //     //         "life": 78,
    //     //         "attack": 84,
    //     //         "defense": 78,
    //     //         "speed": 100,
    //     //         "height": 1.7,
    //     //         "weight": 90.5,
    //     //         "types": [
    //     //             "fire",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 7,
    //     //         "name": "squirtle",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
    //     //         "life": 44,
    //     //         "attack": 48,
    //     //         "defense": 65,
    //     //         "speed": 43,
    //     //         "height": 0.5,
    //     //         "weight": 9,
    //     //         "types": [
    //     //             "water"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 8,
    //     //         "name": "wartortle",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
    //     //         "life": 59,
    //     //         "attack": 63,
    //     //         "defense": 80,
    //     //         "speed": 58,
    //     //         "height": 1,
    //     //         "weight": 22.5,
    //     //         "types": [
    //     //             "water"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 9,
    //     //         "name": "blastoise",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
    //     //         "life": 79,
    //     //         "attack": 83,
    //     //         "defense": 100,
    //     //         "speed": 78,
    //     //         "height": 1.6,
    //     //         "weight": 85.5,
    //     //         "types": [
    //     //             "water"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 10,
    //     //         "name": "caterpie",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
    //     //         "life": 45,
    //     //         "attack": 30,
    //     //         "defense": 35,
    //     //         "speed": 45,
    //     //         "height": 0.3,
    //     //         "weight": 2.9,
    //     //         "types": [
    //     //             "bug"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 11,
    //     //         "name": "metapod",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
    //     //         "life": 50,
    //     //         "attack": 20,
    //     //         "defense": 55,
    //     //         "speed": 30,
    //     //         "height": 0.7,
    //     //         "weight": 9.9,
    //     //         "types": [
    //     //             "bug"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 12,
    //     //         "name": "butterfree",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
    //     //         "life": 60,
    //     //         "attack": 45,
    //     //         "defense": 50,
    //     //         "speed": 70,
    //     //         "height": 1.1,
    //     //         "weight": 32,
    //     //         "types": [
    //     //             "bug",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 13,
    //     //         "name": "weedle",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
    //     //         "life": 40,
    //     //         "attack": 35,
    //     //         "defense": 30,
    //     //         "speed": 50,
    //     //         "height": 0.3,
    //     //         "weight": 3.2,
    //     //         "types": [
    //     //             "bug",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 14,
    //     //         "name": "kakuna",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
    //     //         "life": 45,
    //     //         "attack": 25,
    //     //         "defense": 50,
    //     //         "speed": 35,
    //     //         "height": 0.6,
    //     //         "weight": 10,
    //     //         "types": [
    //     //             "bug",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 15,
    //     //         "name": "beedrill",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
    //     //         "life": 65,
    //     //         "attack": 90,
    //     //         "defense": 40,
    //     //         "speed": 75,
    //     //         "height": 1,
    //     //         "weight": 29.5,
    //     //         "types": [
    //     //             "bug",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 16,
    //     //         "name": "pidgey",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
    //     //         "life": 40,
    //     //         "attack": 45,
    //     //         "defense": 40,
    //     //         "speed": 56,
    //     //         "height": 0.3,
    //     //         "weight": 1.8,
    //     //         "types": [
    //     //             "normal",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 17,
    //     //         "name": "pidgeotto",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
    //     //         "life": 63,
    //     //         "attack": 60,
    //     //         "defense": 55,
    //     //         "speed": 71,
    //     //         "height": 1.1,
    //     //         "weight": 30,
    //     //         "types": [
    //     //             "normal",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 18,
    //     //         "name": "pidgeot",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
    //     //         "life": 83,
    //     //         "attack": 80,
    //     //         "defense": 75,
    //     //         "speed": 101,
    //     //         "height": 1.5,
    //     //         "weight": 39.5,
    //     //         "types": [
    //     //             "normal",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 19,
    //     //         "name": "rattata",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
    //     //         "life": 30,
    //     //         "attack": 56,
    //     //         "defense": 35,
    //     //         "speed": 72,
    //     //         "height": 0.3,
    //     //         "weight": 3.5,
    //     //         "types": [
    //     //             "normal"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 20,
    //     //         "name": "raticate",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
    //     //         "life": 55,
    //     //         "attack": 81,
    //     //         "defense": 60,
    //     //         "speed": 97,
    //     //         "height": 0.7,
    //     //         "weight": 18.5,
    //     //         "types": [
    //     //             "normal"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 21,
    //     //         "name": "spearow",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png",
    //     //         "life": 40,
    //     //         "attack": 60,
    //     //         "defense": 30,
    //     //         "speed": 70,
    //     //         "height": 0.3,
    //     //         "weight": 2,
    //     //         "types": [
    //     //             "normal",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 22,
    //     //         "name": "fearow",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png",
    //     //         "life": 65,
    //     //         "attack": 90,
    //     //         "defense": 65,
    //     //         "speed": 100,
    //     //         "height": 1.2,
    //     //         "weight": 38,
    //     //         "types": [
    //     //             "normal",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 23,
    //     //         "name": "ekans",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png",
    //     //         "life": 35,
    //     //         "attack": 60,
    //     //         "defense": 44,
    //     //         "speed": 55,
    //     //         "height": 2,
    //     //         "weight": 6.9,
    //     //         "types": [
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 24,
    //     //         "name": "arbok",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png",
    //     //         "life": 60,
    //     //         "attack": 95,
    //     //         "defense": 69,
    //     //         "speed": 80,
    //     //         "height": 3.5,
    //     //         "weight": 65,
    //     //         "types": [
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 25,
    //     //         "name": "pikachu",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
    //     //         "life": 35,
    //     //         "attack": 55,
    //     //         "defense": 40,
    //     //         "speed": 90,
    //     //         "height": 0.4,
    //     //         "weight": 6,
    //     //         "types": [
    //     //             "electric"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 26,
    //     //         "name": "raichu",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
    //     //         "life": 60,
    //     //         "attack": 90,
    //     //         "defense": 55,
    //     //         "speed": 110,
    //     //         "height": 0.8,
    //     //         "weight": 30,
    //     //         "types": [
    //     //             "electric"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 27,
    //     //         "name": "sandshrew",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png",
    //     //         "life": 50,
    //     //         "attack": 75,
    //     //         "defense": 85,
    //     //         "speed": 40,
    //     //         "height": 0.6,
    //     //         "weight": 12,
    //     //         "types": [
    //     //             "ground"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 28,
    //     //         "name": "sandslash",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
    //     //         "life": 75,
    //     //         "attack": 100,
    //     //         "defense": 110,
    //     //         "speed": 65,
    //     //         "height": 1,
    //     //         "weight": 29.5,
    //     //         "types": [
    //     //             "ground"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 29,
    //     //         "name": "nidoran-f",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png",
    //     //         "life": 55,
    //     //         "attack": 47,
    //     //         "defense": 52,
    //     //         "speed": 41,
    //     //         "height": 0.4,
    //     //         "weight": 7,
    //     //         "types": [
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 30,
    //     //         "name": "nidorina",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png",
    //     //         "life": 70,
    //     //         "attack": 62,
    //     //         "defense": 67,
    //     //         "speed": 56,
    //     //         "height": 0.8,
    //     //         "weight": 20,
    //     //         "types": [
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 31,
    //     //         "name": "nidoqueen",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png",
    //     //         "life": 90,
    //     //         "attack": 92,
    //     //         "defense": 87,
    //     //         "speed": 76,
    //     //         "height": 1.3,
    //     //         "weight": 60,
    //     //         "types": [
    //     //             "poison",
    //     //             "ground"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 32,
    //     //         "name": "nidoran-m",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png",
    //     //         "life": 46,
    //     //         "attack": 57,
    //     //         "defense": 40,
    //     //         "speed": 50,
    //     //         "height": 0.5,
    //     //         "weight": 9,
    //     //         "types": [
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 33,
    //     //         "name": "nidorino",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png",
    //     //         "life": 61,
    //     //         "attack": 72,
    //     //         "defense": 57,
    //     //         "speed": 65,
    //     //         "height": 0.9,
    //     //         "weight": 19.5,
    //     //         "types": [
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 34,
    //     //         "name": "nidoking",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png",
    //     //         "life": 81,
    //     //         "attack": 102,
    //     //         "defense": 77,
    //     //         "speed": 85,
    //     //         "height": 1.4,
    //     //         "weight": 62,
    //     //         "types": [
    //     //             "poison",
    //     //             "ground"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 35,
    //     //         "name": "clefairy",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
    //     //         "life": 70,
    //     //         "attack": 45,
    //     //         "defense": 48,
    //     //         "speed": 35,
    //     //         "height": 0.6,
    //     //         "weight": 7.5,
    //     //         "types": [
    //     //             "fairy"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 36,
    //     //         "name": "clefable",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png",
    //     //         "life": 95,
    //     //         "attack": 70,
    //     //         "defense": 73,
    //     //         "speed": 60,
    //     //         "height": 1.3,
    //     //         "weight": 40,
    //     //         "types": [
    //     //             "fairy"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 37,
    //     //         "name": "vulpix",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png",
    //     //         "life": 38,
    //     //         "attack": 41,
    //     //         "defense": 40,
    //     //         "speed": 65,
    //     //         "height": 0.6,
    //     //         "weight": 9.9,
    //     //         "types": [
    //     //             "fire"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 38,
    //     //         "name": "ninetales",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png",
    //     //         "life": 73,
    //     //         "attack": 76,
    //     //         "defense": 75,
    //     //         "speed": 100,
    //     //         "height": 1.1,
    //     //         "weight": 19.9,
    //     //         "types": [
    //     //             "fire"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 39,
    //     //         "name": "jigglypuff",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png",
    //     //         "life": 115,
    //     //         "attack": 45,
    //     //         "defense": 20,
    //     //         "speed": 20,
    //     //         "height": 0.5,
    //     //         "weight": 5.5,
    //     //         "types": [
    //     //             "normal",
    //     //             "fairy"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 40,
    //     //         "name": "wigglytuff",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png",
    //     //         "life": 140,
    //     //         "attack": 70,
    //     //         "defense": 45,
    //     //         "speed": 45,
    //     //         "height": 1,
    //     //         "weight": 12,
    //     //         "types": [
    //     //             "normal",
    //     //             "fairy"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 41,
    //     //         "name": "zubat",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png",
    //     //         "life": 40,
    //     //         "attack": 45,
    //     //         "defense": 35,
    //     //         "speed": 55,
    //     //         "height": 0.8,
    //     //         "weight": 7.5,
    //     //         "types": [
    //     //             "poison",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 42,
    //     //         "name": "golbat",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png",
    //     //         "life": 75,
    //     //         "attack": 80,
    //     //         "defense": 70,
    //     //         "speed": 90,
    //     //         "height": 1.6,
    //     //         "weight": 55,
    //     //         "types": [
    //     //             "poison",
    //     //             "flying"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 43,
    //     //         "name": "oddish",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png",
    //     //         "life": 45,
    //     //         "attack": 50,
    //     //         "defense": 55,
    //     //         "speed": 30,
    //     //         "height": 0.5,
    //     //         "weight": 5.4,
    //     //         "types": [
    //     //             "grass",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 44,
    //     //         "name": "gloom",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png",
    //     //         "life": 60,
    //     //         "attack": 65,
    //     //         "defense": 70,
    //     //         "speed": 40,
    //     //         "height": 0.8,
    //     //         "weight": 8.6,
    //     //         "types": [
    //     //             "grass",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 45,
    //     //         "name": "vileplume",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/45.png",
    //     //         "life": 75,
    //     //         "attack": 80,
    //     //         "defense": 85,
    //     //         "speed": 50,
    //     //         "height": 1.2,
    //     //         "weight": 18.6,
    //     //         "types": [
    //     //             "grass",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 46,
    //     //         "name": "paras",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/46.png",
    //     //         "life": 35,
    //     //         "attack": 70,
    //     //         "defense": 55,
    //     //         "speed": 25,
    //     //         "height": 0.3,
    //     //         "weight": 5.4,
    //     //         "types": [
    //     //             "bug",
    //     //             "grass"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 47,
    //     //         "name": "parasect",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png",
    //     //         "life": 60,
    //     //         "attack": 95,
    //     //         "defense": 80,
    //     //         "speed": 30,
    //     //         "height": 1,
    //     //         "weight": 29.5,
    //     //         "types": [
    //     //             "bug",
    //     //             "grass"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 48,
    //     //         "name": "venonat",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/48.png",
    //     //         "life": 60,
    //     //         "attack": 55,
    //     //         "defense": 50,
    //     //         "speed": 45,
    //     //         "height": 1,
    //     //         "weight": 30,
    //     //         "types": [
    //     //             "bug",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 49,
    //     //         "name": "venomoth",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png",
    //     //         "life": 70,
    //     //         "attack": 65,
    //     //         "defense": 60,
    //     //         "speed": 90,
    //     //         "height": 1.5,
    //     //         "weight": 12.5,
    //     //         "types": [
    //     //             "bug",
    //     //             "poison"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 50,
    //     //         "name": "diglett",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/50.png",
    //     //         "life": 10,
    //     //         "attack": 55,
    //     //         "defense": 25,
    //     //         "speed": 95,
    //     //         "height": 0.2,
    //     //         "weight": 0.8,
    //     //         "types": [
    //     //             "ground"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 51,
    //     //         "name": "dugtrio",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png",
    //     //         "life": 35,
    //     //         "attack": 100,
    //     //         "defense": 50,
    //     //         "speed": 120,
    //     //         "height": 0.7,
    //     //         "weight": 33.3,
    //     //         "types": [
    //     //             "ground"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 52,
    //     //         "name": "meowth",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png",
    //     //         "life": 40,
    //     //         "attack": 45,
    //     //         "defense": 35,
    //     //         "speed": 90,
    //     //         "height": 0.4,
    //     //         "weight": 4.2,
    //     //         "types": [
    //     //             "normal"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 53,
    //     //         "name": "persian",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png",
    //     //         "life": 65,
    //     //         "attack": 70,
    //     //         "defense": 60,
    //     //         "speed": 115,
    //     //         "height": 1,
    //     //         "weight": 32,
    //     //         "types": [
    //     //             "normal"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 54,
    //     //         "name": "psyduck",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png",
    //     //         "life": 50,
    //     //         "attack": 52,
    //     //         "defense": 48,
    //     //         "speed": 55,
    //     //         "height": 0.8,
    //     //         "weight": 19.6,
    //     //         "types": [
    //     //             "water"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 55,
    //     //         "name": "golduck",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png",
    //     //         "life": 80,
    //     //         "attack": 82,
    //     //         "defense": 78,
    //     //         "speed": 85,
    //     //         "height": 1.7,
    //     //         "weight": 76.6,
    //     //         "types": [
    //     //             "water"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 56,
    //     //         "name": "mankey",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png",
    //     //         "life": 40,
    //     //         "attack": 80,
    //     //         "defense": 35,
    //     //         "speed": 70,
    //     //         "height": 0.5,
    //     //         "weight": 28,
    //     //         "types": [
    //     //             "fighting"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 57,
    //     //         "name": "primeape",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/57.png",
    //     //         "life": 65,
    //     //         "attack": 105,
    //     //         "defense": 60,
    //     //         "speed": 95,
    //     //         "height": 1,
    //     //         "weight": 32,
    //     //         "types": [
    //     //             "fighting"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 58,
    //     //         "name": "growlithe",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/58.png",
    //     //         "life": 55,
    //     //         "attack": 70,
    //     //         "defense": 45,
    //     //         "speed": 60,
    //     //         "height": 0.7,
    //     //         "weight": 19,
    //     //         "types": [
    //     //             "fire"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 59,
    //     //         "name": "arcanine",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/59.png",
    //     //         "life": 90,
    //     //         "attack": 110,
    //     //         "defense": 80,
    //     //         "speed": 95,
    //     //         "height": 1.9,
    //     //         "weight": 155,
    //     //         "types": [
    //     //             "fire"
    //     //         ],
    //     //         "created": false
    //     //     },
    //     //     {
    //     //         "id": 60,
    //     //         "name": "poliwag",
    //     //         "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/60.png",
    //     //         "life": 40,
    //     //         "attack": 50,
    //     //         "defense": 40,
    //     //         "speed": 90,
    //     //         "height": 0.6,
    //     //         "weight": 12.4,
    //     //         "types": [
    //     //             "water"
    //     //         ],
    //     //         "created": false
    //     //     }
    // ]
};


const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POKEMONS:
            return {
                ...state,
                pokemonsRender: action.payload
            };
        case GET_POKEMON_BY_ID:
            return {
                ...state,
                pokemonsRender: action.payload
            }
        default:
            return { ...state };
    }
};
export default rootReducer;