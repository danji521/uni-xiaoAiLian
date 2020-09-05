const db = uniCloud.database()
exports.main = async (event, context) => {
	const collection = db.collection('communityList') //获取集合
	let res = await collection.doc(event._id).update({
		comment: event.comment,
		fabulous:event.fabulous
	});
	return res
};
