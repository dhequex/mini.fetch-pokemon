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
      for (let i = 1; i < 11; i ++){
        list.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then((response) => response.json()) 
        )
      } 
      
      return Promise.all(list)
      
      .then((list) => {
        let filtered = list.filter( pokemon =>{
          return pokemon.weight < weight;
        })
         return filtered
      })
    };
  }

  window.Pokemonager = Pokemonager;
})();
