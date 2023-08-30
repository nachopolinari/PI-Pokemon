const { Pokemon } = require('../db') //me traigo el modelo para crear un Pokemon
//async porq la funcion createNewPoke es una promesa que va a demorar
const createNewPoke = async (name, img, life, attack, defense, speed, height, weight) => {
    const newPoke = await Pokemon.create({
        name: name,
        img: img,
        life: life,
        attack: attack,
        defense: defense,
        speed: speed,
        height: height,
        weight: weight
    })
    //await para que espere que se cree el pokemon para responder - me devuelve una promesa
    return newPoke; //esta funcion podria resumirse en 2 lineas
}

module.exports = { createNewPoke };