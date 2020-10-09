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
      
      let list =[];
      for (let i = 0; i < 10; i ++){
        list.push(fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        .then(response => response.json()) 
        )
      } 
      return Promise.all(list)
      .then((list) => {
       
        return list.filter((pokemon) =>{
          pokemon.weight < weight;
        })
      })
    };
  }

  window.Pokemonager = Pokemonager;
})();
