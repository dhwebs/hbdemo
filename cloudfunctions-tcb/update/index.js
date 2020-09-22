'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	// event={
	// 	address: "广东省深圳市龙岗区龙翔大道与德政路交叉口",
	// 	default: false,
	// 	doorplate: "A座816",
	// 	name: "小明",
	// 	phone: "16922218421",
	// 	popId: "2",
	// 	base:"address",
	// }
	console.log(event,1)
	let [base,id]=[event.cloud,event._id]
	delete event.cloud
	delete event._id
	console.log(event,2)
	const collection = db.collection(base)
	const res = await collection.doc(id).update(event);
	if (res.updated === 1) {
		return {
			status: 0,
			msg: `修改成功`
		}
	} else {
		return {
			status: -1,
			msg: `修改失败`
		}
	}
};
