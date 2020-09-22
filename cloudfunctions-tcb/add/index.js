'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
  let base=event.cloud
  delete event.cloud
  const collection = db.collection(base)
  const res = await collection.add(event)
  return res
};
