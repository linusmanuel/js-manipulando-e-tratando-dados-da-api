const cidade = document.querySelector('#cidade');
const logradouro = document.querySelector('#endereco');
const estado = document.querySelector('#estado');
const complemento = document.querySelector('#complemento');
const bairro = document.querySelector('#bairro');
const messageErro = document.querySelector('#messageErro');

async function searchAddress(cep) {
	messageErro.innerHTML = '';
	try {
		const bringCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
		const convertedCEP = await bringCEP.json();
		cidade.value = convertedCEP.localidade;
		logradouro.value = convertedCEP.logradouro;
		estado.value = convertedCEP.uf;
		complemento.value = convertedCEP.complemento;
		bairro.value = convertedCEP.bairro;
		if (convertedCEP.erro) {
			throw Error('Erro CEP não encontrado');
		}
		return convertedCEP;
	} catch (erro) {
		messageErro.innerHTML = `<p>CEP inválido, tente novamente!</p>`;
	}
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', (event) => {
	searchAddress(cep.value);
});
