// const cloneObj = obj => ({ ...obj });

function cloneObject(obj) {
	return { ...obj };
}

console.log(cloneObject({ name: 'Kaew', address: 'BKK' }));