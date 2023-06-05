const searchCEP = fetch('https://viacep.com.br/ws/01001250/json/')
	.then((resposta) => resposta.json())
	.then((r) => {
		if (r.erro) {
			throw Error('Esse CEP é inválido!');
		} else {
			console.log(r);
		}
	})
	.catch((erro) => console.log(erro));

console.log(searchCEP);
