const cidade = document.querySelector('#cidade');
const logradouro = document.querySelector('#endereco');
const estado = document.querySelector('#estado');

async function searchAddress(cep) {
	try {
		const bringCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
		const convertedCEP = await bringCEP.json();
		cidade.value = convertedCEP.localidade;
		logradouro.value = convertedCEP.logradouro;
		estado.value = convertedCEP.uf;
		if (convertedCEP.erro) {
			throw Error('Erro CEP não encontrado');
		}
		console.log(convertedCEP);
		return convertedCEP;
	} catch (erro) {
		console.log(erro);
	}
}

const cep = document.querySelector('#cep');
cep.addEventListener('focusout', (event) => {
	searchAddress(cep.value);
});
