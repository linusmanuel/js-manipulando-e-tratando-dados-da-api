async function searchAddress() {
	const bringCEP = await fetch('https://viacep.com.br/ws/01001000/json');
	const convertedCEP = await bringCEP.json();
	console.log(convertedCEP);
}

searchAddress();
