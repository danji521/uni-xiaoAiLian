const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('communityList') //获取集合

	let res = await collection.get()
	res.data.map(async (document) => {
		return await collection.doc(event._id).remove();
	});

	return res
};
