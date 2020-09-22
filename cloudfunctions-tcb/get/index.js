'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	let base=event.cloud
	let cursor=event.cursor || 0
	let limit=event.limit || 10
	let sort=event.sort || 'beginTime'
	let order=event.order || 'asc'
	for(let i in event){
		if(event[i]===''){
			delete event[i]
		}
		delete event.cloud
		delete event.cursor
		delete event.limit
		delete event.sort
		delete event.order
	}
	console.log(event)
	const collection = db.collection(base)
	const res = await collection.skip(10*cursor).where(event).limit(limit).orderBy(sort, order).get()
	return res
};
