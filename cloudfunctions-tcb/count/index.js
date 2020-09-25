'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let base=event.cloud
	for(let i in event){
		if(event[i]===''){
			delete event[i]
		}
		delete event.cloud
	}
	console.log(event)
	const collection = db.collection(base)
	const res = await collection.where(event).count()
	return res
};
