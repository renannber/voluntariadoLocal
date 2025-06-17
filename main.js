 
// verifica se o cep é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);    //expressão para ver se está entre 0 á 9

const cepValido = (cep) => cep.length == 8 && eNumero(cep); // testa para ver se so tem numero e se é de 0 á 9

const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`; //o ${cep.value} é usado para trocar o cep para o que for usado no cadastro
      if(cepValido(cep.value))
    {
        const dados = await fetch(url); // await é uma pausa para verificar se o fetch vai conseguir da um retorno 

        const addres = await dados.json();
        //hasownproperty retorna um valor booleano indicando se o objeto possui a propriedae epecifica nos parentes 

        if(addres.hasOwnProperty('erro')){
         alert("CEP não encontrado");
        } 
        else{
            preencherFormulario(addres);
        }
    } else
    { alert("CEP incorreto, tente novamente")}
}

const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro ; 
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.estado;

}
//função para limpar o furmalrio 
const limparFormulario = () => {
    document.getElementById('rua').value ="";
    document.getElementById('bairro').value ="";
    document.getElementById('cidade').value ="";
    document.getElementById('estado').value ="";

}

document.getElementById('cep').addEventListener('focusout', pesquisarCep); // onde acontece o evento que puxa os dados do cep 

