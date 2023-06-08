async function searchAddress() {
	try {
		const bringCEP = await fetch('https://viacep.com.br/ws/01001250/json');
		const convertedCEP = await bringCEP.json();
		if (convertedCEP.erro) {
			throw Error('Erro CEP não encontrado');
		}
		console.log(convertedCEP);
	} catch (erro) {
		console.log(erro);
	}
}

searchAddress();
