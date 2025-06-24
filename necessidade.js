function carregarNecessidades() {
  const lista = JSON.parse(localStorage.getItem('cadastros')) || [];
  const container = document.getElementById('lista-necessidades');

  container.innerHTML = "";

  if (lista.length === 0) {
    container.innerHTML = "<p>Não há necessidades cadastradas.</p>";
    return;
  }

  lista.forEach(item => {
    const card = `
      <div class="ajuda-card">
        <h3>${item.titulo}</h3>
        <p><strong>Instituição:</strong> ${item.nome}</p>
        <p><strong>Descrição:</strong> ${item.descricao}</p>
        <p><strong>Ajuda necessária:</strong> ${item.opcaoAjuda}</p>
        <p><strong>Endereço:</strong> ${item.rua}, ${item.numero} - ${item.bairro}, ${item.cidade} - ${item.estado}, CEP: ${item.cep}</p>
        <p><strong>Contato:</strong> ${item.email} | ${item.telefone}</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

document.addEventListener("DOMContentLoaded", carregarNecessidades);

let lista = [];/*funçao para a pesquisa por palavras chaves */


function carregarNecessidades() {
  lista = JSON.parse(localStorage.getItem('cadastros')) || [];
  exibirNecessidades(lista);
}

function exibirNecessidades(dados) {
  const container = document.getElementById('lista-necessidades');
  container.innerHTML = "";

  if (dados.length === 0) {
    container.innerHTML = "<p>Não há necessidades cadastradas.</p>";
    return;
  }

  dados.forEach(item => {
    const card = `
      <div class="ajuda-card">
        <h3>${item.titulo}</h3>
        <p><strong>Instituição:</strong> ${item.nome}</p>
        <p><strong>Descrição:</strong> ${item.descricao}</p>
        <p><strong>Ajuda necessária:</strong> ${item.opcaoAjuda}</p>
        <p><strong>Endereço:</strong> ${item.rua}, ${item.numero} - ${item.bairro}, ${item.cidade} - ${item.estado}, CEP: ${item.cep}</p>
        <p><strong>Contato:</strong> ${item.email} | ${item.telefone}</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Função de busca
document.getElementById('procurarInput').addEventListener('input', function () {
  const texto = this.value.toLowerCase();

  const resultado = lista.filter(item =>
    item.nome.toLowerCase().includes(texto) ||
    item.titulo.toLowerCase().includes(texto) ||
    item.descricao.toLowerCase().includes(texto) ||
    item.opcaoAjuda.toLowerCase().includes(texto) ||
    item.bairro.toLowerCase().includes(texto) ||
    item.cidade.toLowerCase().includes(texto) ||
    item.estado.toLowerCase().includes(texto)
  );

  exibirNecessidades(resultado);
});

document.addEventListener("DOMContentLoaded", carregarNecessidades);
