// Verifica se o cep é valido 
const eNumero = (numero) => /^[0-9]+$/.test(numero); //expressão para ver se está entre 0 á 9 
const cepValido = (cep) => cep.length === 8 && eNumero(cep); // testa para ver se só tem número e se é de 0 á 9

const preencherFormulario = (endereco) => {
  document.getElementById('rua').value = endereco.logradouro || "";
  document.getElementById('bairro').value = endereco.bairro || "";
  document.getElementById('cidade').value = endereco.localidade || "";
  document.getElementById('estado').value = endereco.uf || "";
};
//função usada para limpar o formulario
const limparFormulario = () => {
  document.getElementById('rua').value = "";
  document.getElementById('bairro').value = "";
  document.getElementById('cidade').value = "";
  document.getElementById('estado').value = "";
};

const pesquisarCep = async () => {
  limparFormulario();
  const cep = document.getElementById('cep').value.replace(/\D/g, ''); //o cep.value é usado para trocar o cep para o que for usado no cadastro 
  if (cepValido(cep)) {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();
      if ("erro" in data) {
        alert("CEP não encontrado."); // alerta para avisar que o cep digitado não foi encontrado 
      } else {
        preencherFormulario(data);
      }
    } catch (error) {
      alert("CEP não encontrado.");
    }
  } else {
    alert("CEP inválido.");
  }
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

document.getElementById('formcadastro').addEventListener('submit', (e) => {
  e.preventDefault();

  const dados = {
    nome: document.getElementById('nome').value.trim(),
    titulo: document.getElementById('titulo').value.trim(),
    descricao: document.getElementById('descricao').value.trim(),
    cep: document.getElementById('cep').value.trim(),
    rua: document.getElementById('rua').value.trim(),
    numero: document.getElementById('num').value.trim(),
    bairro: document.getElementById('bairro').value.trim(),
    cidade: document.getElementById('cidade').value.trim(),
    estado: document.getElementById('estado').value.trim(),
    email: document.getElementById('email').value.trim(),
    telefone: document.getElementById('telefone').value.trim(),
    opcaoAjuda: document.getElementById('ajuda').value
  };

  let lista = JSON.parse(localStorage.getItem('cadastros')) || [];
  lista.push(dados);
  localStorage.setItem('cadastros', JSON.stringify(lista));

  alert("Cadastro realizado com sucesso!");
  e.target.reset();
});
