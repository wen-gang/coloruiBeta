'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('parameter');
	let res = await collection.where({name:event.name}).get()
	return res
};
