const ul = document.getElementById('usuario');

fetch("localhost:3000/usuarios")
.then((resp) => resp.json())
  .then(function(data) {
    const filmes = data.results;
    return filmes.map(function(filme) {
      const li = document.createElement("li");

      const span = document.createElement('span');
      span.innerHTML = `${filme.nome} - ${filme.email} - ${filmes.idade}`;
      
      li.appendChild(span);
      ul.appendChild(li);
    })
}).catch(function(error) {
  console.log(error);
});