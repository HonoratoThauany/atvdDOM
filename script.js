function mudarBG(cor) {
    document.body.style.backgroundColor = cor;
  
    const h1 = document.querySelector('h1');
  
    if (cor.toLowerCase() === 'black' || cor === '#000000') {
      h1.style.color = 'white';
    } else if (cor.toLowerCase() === 'white' || cor === '#ffffff') {
      h1.style.color = 'black';
    } else {
      h1.style.color = '';
    }
  }
  
  const corEscolhida = prompt('Digite o nome de uma cor en:');
  mudarBG(corEscolhida);
  