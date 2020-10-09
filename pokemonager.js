(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    
    findNames(n) {
     return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${n}`)
      .then((Response) => {
        return Response.json();

      })
      .then((json) => {
        return json.results.map((jsonElement) => {
          return jsonElement["name"];
        });
      })
  
    };

    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      fetch(`https://pokeapi.co/api/v2/pokemon/1/?limit=10`)
        .then((Response) =>{
          return Response.json();
        })
        .then((json) => {
          return json.results.map((pokemon) => {
            console.log(pokemon);
          })
        })
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;
})();
