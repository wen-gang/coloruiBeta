'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('icon_colorui')
	let skip = event.page * 100
	const res = await collection.skip(skip).get()
	return res
};
