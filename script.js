async function searchAddress(cep) {
	try {
		const bringCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
		const convertedCEP = await bringCEP.json();
		if (convertedCEP.erro) {
			throw Error('Erro CEP não encontrado');
		}
		console.log(convertedCEP);
		return convertedCEP;
	} catch (erro) {
		console.log(erro);
	}
}

const ceps = ['01001000', '01001001'];
let listOfCEPS = ceps.map((values) => searchAddress(values));
console.log(listOfCEPS);
Promise.all(listOfCEPS).then((res) => console.log(res));
