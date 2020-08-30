// 创建请单
var detailedList = function(e) {
	return uniCloud
		.callFunction({
			name: 'detailedList',
			data: {
				logo: e.logo,
				text: e.text,
			}
		})
}
// 列表查询
var getDetailedList = function(e) {
	return uniCloud
		.callFunction({
			name: 'getDetailedList'
		})
}














// 查询详情
var getDetail = function(e) {
	return uniCloud
		.callFunction({
			name: 'getDetail',
			data: {
				_id: e._id
			}
		})
}


// 朋友圈查询
var getCircle = function(e) {
	return uniCloud
		.callFunction({
			name: 'getCircle'

		})
}

// 朋友圈动态发布
var circle = function(e) {
	return uniCloud
		.callFunction({
			name: 'circle',
			data: {
				img: e.img,
				name: e.name,
				news: e.news
			}
		})
}
// 收藏查询
var getCollect = function(e) {
	return uniCloud
		.callFunction({
			name: 'getCollect',
			data: {
				img: e.img,
				lect: e.lect
			}
		})
}
// 发布查询
var getRecord = function(e) {
	return uniCloud
		.callFunction({
			name: 'getRecord',
			data: {
				appid: e.appid
			}
		})
}


module.exports = {
	detailedList,
	getDetailedList,
	getDetail,
	getCircle,
	getCollect,
	circle,
	getRecord
}
