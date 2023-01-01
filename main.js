const fichafilme = document.querySelector(".ficha-filme");

function pegaFilme() {
  fetch("https://rafaelescalfoni.github.io/desenv_web/filmes.json").then(
    (response) => {
      response.json().then((res) => {
        res.forEach((filme) => {
          /*console.log(`${filme.titulo}: ${getStars(filme.rating)}`);*/
          console.log(filme.opinioes[0].rating);
          const fichafilme = document.querySelector(".ficha-filme");
          let titulo = filme.titulo;
          let resumo = filme.resumo;
          let figura = filme.figura;
          let classificacaoEtaria = filme.classificacaoEtaria;
          let generos = filme.generos;
          let estrela = getStars(filme.opinioes[0].rating);
          let titulosSemelhantes = filme.titulosSemelhantes;
          let elenco = filme.elenco;
          fichafilme.innerHTML += `
          <div class="container">
          <img class="figura" src="${figura}" alt="" />
          <ul class="estrela">${estrela}</ul>
          <h1 class="titulo">${titulo} </h1>
          <ul class="generos">${generos}</ul>
          <ul class="elenco">${elenco}</ul>
          <p class="resumo">${resumo}</p>
          </div>
            `;
        });
      });
    }
  );
}
function getStars(rating) {
  let stars = "";
  for (let i = 0; i < Math.floor(rating); i++) {
    stars += "★";
  }
  if (Math.floor(rating * 10) % 10 >= 5) {
    stars += "½";
  }
  return stars;
}
pegaFilme();

function getColor(age) {
  if (age < 14) {
    return "verde";
  }
  if (age >= 14 && age < 18) {
    return "amarelo";
  }
  if (age >= 18) {
    return "vermelho";
  }
}
