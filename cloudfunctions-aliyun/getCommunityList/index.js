'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('communityList') //获取集合
	const res = collection.get()
	return res
};