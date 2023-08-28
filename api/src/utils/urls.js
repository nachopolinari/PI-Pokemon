const API_POKEMON = "https://pokeapi.co/api/v2/pokemon?limit=60";//: Esta constante almacena la URL base para obtener información sobre los primeros 60 Pokémon en la Pokédex. Con esta URL, puedes hacer solicitudes a la API para acceder a la información general de los Pokémon, como su nombre, número en la Pokédex, habilidades, etc.

const API_POKEMON_TYPE = "https://pokeapi.co/api/v2/type";//Esta constante almacena la URL base para obtener información sobre los tipos de Pokémon. Los tipos en Pokémon son como categorías que representan las fortalezas y debilidades de un Pokémon en relación con otros tipos. Puedes usar esta URL para obtener información sobre los diferentes tipos de Pokémon y sus relaciones.

const API_POKEMON_NAME_OR_ID = "https://pokeapi.co/api/v2/pokemon/";//Esta constante almacena la URL base que te permite acceder a información detallada sobre un Pokémon específico. Puedes completar esta URL con el nombre o el ID de un Pokémon para obtener detalles como sus estadísticas, habilidades, evoluciones y más.

module.exports = {
  API_POKEMON,
  API_POKEMON_TYPE,
  API_POKEMON_NAME_OR_ID
};
